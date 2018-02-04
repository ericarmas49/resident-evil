/************* SHIM ************************/
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          window.oRequestAnimationFrame      ||
          window.msRequestAnimationFrame     ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();
/********************************************/
var canvas1 = document.getElementById('particles-canvas1'),
  ctx1 = canvas1.getContext('2d'),
  canvas2 = document.getElementById('particles-canvas2'),
  ctx2 = canvas2.getContext('2d'),
  height,                 // canvas height
  width,                  // canvas width
  collection = [],
  num_drops = 450,        // number of drops
  gravity = 0.5,          // gravity multiplier
  windforce = 0,          // yea i'd just leave this
  windmultiplier = 0.007, // this freaks out on large numbers
  maxspeed = 1.5,           // this is so you never run too fast (it is a multiplier not raw)
  maxspeed_front = 3,     // this is so you never run too fast (it is a multiplier not raw)
  gutter = 0.001,         // the percentage distance to travel off screen before wrapping
  ember_img = [],         // images of embers
  ember_img_s = [],       // images of small embers
  ash_img = [],           // images of ashes
  ash_img_s = [];         // images of small ashes

function Drop() {
  this.num;
  this.x;
  this.y;
  this.radius;
  this.distance;
  this.color;
  this.speed;
  this.vx;
  this.vy;
  this.type;          // type of particles: ASH, EMBER, ASH_SMALL, EMBER_SMALL
  this.index;
}
Drop.prototype = {
  constructor: Drop,
  
  random_x: function() {
    var n = width * (1 + gutter);
    return (1 - (1 + gutter)) + (Math.random() * n);
  },
  draw: function(ctx) {
    if (this.type == 'ASH') {
      ctx.drawImage(ash_img[this.index], this.x, this.y);
    }
    else if (this.type == 'ASH_SMALL') {
      ctx.drawImage(ash_img_s[this.index], this.x, this.y);
    }
    else if (this.type == 'EMBER') {
      ctx.drawImage(ember_img[this.index], this.x, this.y);
    }
    else if (this.type == 'EMBER_SMALL') {
      ctx.drawImage(ember_img_s[this.index], this.x, this.y);
    }
  }
};

function draw_frame() {
  // this was recommended (see comments)
  // check it out, just comment out the 
  // ctx.clearRect(0, 0, width, height);
  // line and uncomment the three below:

  ctx1.clearRect(0, 0, width, height);
  ctx2.clearRect(0, 0, width, height);

  // in a previous attempt I even go as far
  // as to ensure i'm drawing the furthest particles 
  // first for the z-index overlay.
  // in this run I felt it was unneeded
  collection.forEach(function (drop) {
    // costly but ultimatly I think it's worth it for now
    // I muck with the opacity to help with the illusion of depth

    if (drop.type == 'ASH_SMALL' || drop.type == 'EMBER_SMALL') {   // If small particle, draw behind canvas.
      ctx1.globalAlpha = (drop.distance + 1) / 10;
      drop.draw(ctx1);
      ctx1.globalAlpha = 1;
    }
    else if (drop.type == 'ASH' || drop.type == 'EMBER') {   // If front canvas.
      ctx2.globalAlpha = (drop.distance + 1) / 10;
      drop.draw(ctx2);
      ctx2.globalAlpha = 1;
    }

    drop.x += drop.vx;
    if (drop.num % 12 === 0 /* && (drop.type == 'ASH' || drop.type == 'EMBER') */ ) {   // some go up
      drop.y -= drop.vy;
    }
    else {                      // some go down
      drop.y += drop.vy;
    }
    var lx = drop.vx + windforce;

    if (drop.type == 'ASH' || drop.type == 'EMBER') {   // If front canvas, increase speed
      lx < maxspeed_front && lx > 1 - maxspeed_front && (drop.vx = lx);
    }
    else {
      lx < maxspeed && lx > 1 - maxspeed && (drop.vx = lx);
    }

    if (drop.y > (drop.distance + 1) / 10 * height) {
      drop.y = Math.random() * -drop.radius * (num_drops / 10);
      drop.x = drop.random_x();
    }
    if (drop.x > width * (1 + gutter)) {
      drop.x = 1 - (width * gutter);
    }
    if (drop.x < 1 - (width * gutter)) {
      drop.x = width * (1 + gutter);
    }
  });
}

function animate() {
  requestAnimFrame(animate);
  draw_frame();
}

function windtimer() {
  // this is a super cheap way to do this,
  // i will need to look into how to properly 
  // emulate wind
//  windforce = Math.random() > 0.5 ? windmultiplier : -windmultiplier;
  windforce = -windmultiplier;
  setTimeout(windtimer, Math.random() * (1000 * 30));
}

function init() {
  height = canvas1.height = canvas2.height = $('#bg-layer4-a').height() * 1.06;  // height is set considering the height of left side building.
  width = canvas1.width = canvas2.width = $('#parallax').width();

  ember_img[0] = new Image();
  ember_img[0].src = 'images/particles/ember1.png';
  ember_img[1] = new Image();
  ember_img[1].src = 'images/particles/ember4.png';
  ember_img[2] = new Image();
  ember_img[2].src = 'images/particles/ember6.png';
  ember_img[3] = new Image();
  ember_img[3].src = 'images/particles/ember6.png';

  ember_img_s[0] = new Image();
  ember_img_s[0].src = 'images/particles/ember1-t.png';
  ember_img_s[1] = new Image();
  ember_img_s[1].src = 'images/particles/ember4-s.png';
  ember_img_s[2] = new Image();
  ember_img_s[2].src = 'images/particles/ember6-t.png';
  ember_img_s[3] = new Image();
  ember_img_s[3].src = 'images/particles/ember7-t.png';

  ash_img[0] = new Image();
  ash_img[0].src = 'images/particles/ash1.png';
  ash_img[1] = new Image();
  ash_img[1].src = 'images/particles/ash2.png';
  ash_img[2] = new Image();
  ash_img[2].src = 'images/particles/ash3.png';
  ash_img[3] = new Image();
  ash_img[3].src = 'images/particles/ash4.png';

  ash_img_s[0] = new Image();
  ash_img_s[0].src = 'images/particles/ash1-s.png';
  ash_img_s[1] = new Image();
  ash_img_s[1].src = 'images/particles/ash2-t.png';
  ash_img_s[2] = new Image();
  ash_img_s[2].src = 'images/particles/ash3-t.png';
  ash_img_s[3] = new Image();
  ash_img_s[3].src = 'images/particles/ash4.png';



  collection = [];
  while (num_drops--) {
    var drop = new Drop(); // todo: make constructor do this shit
    drop.num = num_drops;
    drop.distance = Math.random() * 15 | 0;
//    drop.speed = Math.random() * (drop.distance / 10) + gravity;
    drop.speed = Math.random() * (drop.distance / 20) + gravity;
    drop.vx = 0;
//    drop.vy = Math.random() * drop.speed + (drop.speed / 2);
    drop.vy = Math.random() * drop.speed;
    drop.radius = (drop.distance + 1) / 16 * 3;
    drop.x = drop.random_x();
    drop.y = Math.random() * height;
    drop.index = Math.floor(Math.random() * 4);

    tmp = num_drops % 40;
    if (tmp === 0) {
      drop.type = 'EMBER';
    }
    else if (tmp === 1 || tmp === 2 || tmp === 3) {
      drop.type = 'EMBER_SMALL';
    }
    else if (tmp === 13 || tmp === 14 || tmp === 15) {
      drop.type = 'ASH';
    }
    else {
      drop.type = 'ASH_SMALL';
    }

    collection.push(drop);
  }
  windtimer();
  animate();
  window.onresize = function() {
    height = canvas1.height = canvas2.height = $('#bg-layer4-a').height() * 1.06;  // height is set considering the height of left side building.
    width = canvas1.width = canvas2.width = $('#parallax').width();
  };

  $('#particles-canvas1').css('opacity', 1);
  $('#particles-canvas2').css('opacity', 1);
}

$(window).load(function() {
  if (!isMobile) {  // For only desktop version, falling particle animation will work
    init();
  }
});
