
var isMobile = 0;
var parallax1_height = 0;
var wh = 0, ww = 0;

var sec2_video_base_top, sec2_video_h, sec2_video_base_bottom;
var sec3_video_base_top, sec3_video_h, sec3_video_base_bottom;
var sec4_video_base_top, sec4_video_h, sec4_video_base_bottom;
var sec5_video_base_top, sec5_video_h, sec5_video_base_bottom;

// For accordion slider
var slide_wide_width, slide_narrow_width, slide_default_width;

// For title fade in/out
var title_div_top, title_div_h, title_fade_h;

// Scroll down arrow
var scroll_down_top, scroll_down_hide_top;

// Parallax Carousel auto rotating
var sec2_div_top, auto_rotated = 0;

// Timeline animation
var timeline_div_top, timeline_animated = 0;
var thick_line_time = 1500, thin_line_time = 2000, fade_in_time = 500;

// Assets for Animations
var site_url = '';

var burningTimer = 0,
    burningSpeed = 100,
    burning_frame = 0;
var burning_frames = [];
var burning_images = [
    'RE_TFC_FIRE_FX_v02_00000.jpg',
    'RE_TFC_FIRE_FX_v02_00001.jpg',
    'RE_TFC_FIRE_FX_v02_00002.jpg',
    'RE_TFC_FIRE_FX_v02_00003.jpg',
    'RE_TFC_FIRE_FX_v02_00004.jpg',
    'RE_TFC_FIRE_FX_v02_00005.jpg',
    'RE_TFC_FIRE_FX_v02_00006.jpg',
    'RE_TFC_FIRE_FX_v02_00007.jpg',
    'RE_TFC_FIRE_FX_v02_00008.jpg',
    'RE_TFC_FIRE_FX_v02_00009.jpg',
    'RE_TFC_FIRE_FX_v02_00010.jpg',
    'RE_TFC_FIRE_FX_v02_00011.jpg',
    'RE_TFC_FIRE_FX_v02_00012.jpg',
    'RE_TFC_FIRE_FX_v02_00013.jpg',
    'RE_TFC_FIRE_FX_v02_00014.jpg',
    'RE_TFC_FIRE_FX_v02_00015.jpg',
    'RE_TFC_FIRE_FX_v02_00016.jpg',
    'RE_TFC_FIRE_FX_v02_00017.jpg',
    'RE_TFC_FIRE_FX_v02_00018.jpg',
    'RE_TFC_FIRE_FX_v02_00019.jpg',
    'RE_TFC_FIRE_FX_v02_00020.jpg',
    'RE_TFC_FIRE_FX_v02_00021.jpg',
    'RE_TFC_FIRE_FX_v02_00022.jpg',
    'RE_TFC_FIRE_FX_v02_00023.jpg',
    'RE_TFC_FIRE_FX_v02_00024.jpg',
    'RE_TFC_FIRE_FX_v02_00025.jpg',
    'RE_TFC_FIRE_FX_v02_00026.jpg',
    'RE_TFC_FIRE_FX_v02_00027.jpg',
    'RE_TFC_FIRE_FX_v02_00028.jpg',
    'RE_TFC_FIRE_FX_v02_00029.jpg',
    'RE_TFC_FIRE_FX_v02_00030.jpg',
    'RE_TFC_FIRE_FX_v02_00031.jpg',
    'RE_TFC_FIRE_FX_v02_00032.jpg',
    'RE_TFC_FIRE_FX_v02_00033.jpg',
    'RE_TFC_FIRE_FX_v02_00034.jpg',
    'RE_TFC_FIRE_FX_v02_00035.jpg',
    'RE_TFC_FIRE_FX_v02_00036.jpg'
];

var hairTimer = 0,
    hairSpeed = 75,
    hair_frame = 0;
var hair_frames = [];
var hair_images = [
    'RE_HAIR 3_00000.jpg',
    'RE_HAIR 3_00001.jpg',
    'RE_HAIR 3_00002.jpg',
    'RE_HAIR 3_00003.jpg',
    'RE_HAIR 3_00004.jpg',
    'RE_HAIR 3_00005.jpg',
    'RE_HAIR 3_00006.jpg',
    'RE_HAIR 3_00007.jpg',
    'RE_HAIR 3_00008.jpg',
    'RE_HAIR 3_00009.jpg',
    'RE_HAIR 3_00010.jpg',
    'RE_HAIR 3_00011.jpg',
    'RE_HAIR 3_00012.jpg',
    'RE_HAIR 3_00013.jpg',
    'RE_HAIR 3_00014.jpg',
    'RE_HAIR 3_00015.jpg',
    'RE_HAIR 3_00016.jpg',
    'RE_HAIR 3_00017.jpg',
    'RE_HAIR 3_00018.jpg',
    'RE_HAIR 3_00019.jpg',
    'RE_HAIR 3_00020.jpg',
    'RE_HAIR 3_00021.jpg',
    'RE_HAIR 3_00022.jpg',
    'RE_HAIR 3_00023.jpg',
    'RE_HAIR 3_00024.jpg',
    'RE_HAIR 3_00025.jpg',
    'RE_HAIR 3_00026.jpg',
    'RE_HAIR 3_00027.jpg',
    'RE_HAIR 3_00028.jpg',
    'RE_HAIR 3_00029.jpg',
    'RE_HAIR 3_00030.jpg',
    'RE_HAIR 3_00031.jpg',
    'RE_HAIR 3_00032.jpg',
    'RE_HAIR 3_00033.jpg',
    'RE_HAIR 3_00034.jpg',
    'RE_HAIR 3_00035.jpg',
    'RE_HAIR 3_00036.jpg',
    'RE_HAIR 3_00037.jpg',
    'RE_HAIR 3_00038.jpg',
    'RE_HAIR 3_00039.jpg',
    'RE_HAIR 3_00040.jpg',
    'RE_HAIR 3_00041.jpg',
    'RE_HAIR 3_00042.jpg',
    'RE_HAIR 3_00043.jpg',
    'RE_HAIR 3_00044.jpg',
    'RE_HAIR 3_00045.jpg',
];


$(window).scroll(function (event) {
    var st = $(this).scrollTop();
    console.log("Scroll="+st);

    // Adjust bottom to simulate 3d effects for only desktop version.
    if (!isMobile && st <= parallax1_height) {
        bottom1 = st / 2 * -1;
        bottom2 = (st - 200) / 3 * -1;
        bottom3 = (st - 100) / 5 * -1;
        bottom4 = st / 10 * -1;

        if (bottom2 > 0) bottom2 = 0;
        if (bottom3 > 0) bottom3 = 0;

        $('#bg-layer1').css('bottom', bottom1+'px');
        $('#bg-layer2').css('bottom', bottom2+'px');
        $('#bg-layer3').css('bottom', bottom3+'px');
        $('#bg-layer4-a').css('bottom', bottom4+'px');
        $('#bg-layer4-b').css('bottom', bottom4+'px');
    }


    // For auto play/stop videos
    if ((st + wh*0.5 >= sec2_video_base_top && st <= sec2_video_base_top + sec2_video_h*0.5) &&         // Video is in viewport
        $('#sec2-video').data('autoplay') == 1 && $('#sec2-video').data('is-playing') == 0) {
        videojs("sec2-video").play();
        $('#sec2-play-btn').css('display', 'none');
        $('#sec2-video').data('is-playing', '1');
    }
    else if ((st + wh*0.5 < sec2_video_base_top || st > sec2_video_base_top + sec2_video_h*0.5) &&      // Video is out of viewoport
        $('#sec2-video').data('autoplay') == 1 && $('#sec2-video').data('is-playing') == 1) {
        videojs("sec2-video").pause();
        $('#sec2-play-btn').css('display', 'block');
        $('#sec2-video').data('autoplay', '0');
        $('#sec2-video').data('is-playing', '0');
    }

    if ((st + wh*0.5 >= sec3_video_base_top && st <= sec3_video_base_top + sec3_video_h*0.5) &&         // Video is in viewport
        $('#sec3-video').data('autoplay') == 1 && $('#sec3-video').data('is-playing') == 0) {
        videojs("sec3-video").play();
        $('#sec3-play-btn').css('display', 'none');
        $('#sec3-video').data('is-playing', '1');
    }
    else if ((st + wh*0.5 < sec3_video_base_top || st > sec3_video_base_top + sec3_video_h*0.5) &&      // Video is out of viewoport
        $('#sec3-video').data('autoplay') == 1 && $('#sec3-video').data('is-playing') == 1) {
        videojs("sec3-video").pause();
        $('#sec3-play-btn').css('display', 'block');
        $('#sec3-video').data('autoplay', '0');
        $('#sec3-video').data('is-playing', '0');
    }

    if ((st + wh*0.5 >= sec4_video_base_top && st <= sec4_video_base_top + sec4_video_h*0.5) &&         // Video is in viewport
        $('#sec4-video').data('autoplay') == 1 && $('#sec4-video').data('is-playing') == 0) {
        videojs("sec4-video").play();
        $('#sec4-play-btn').css('display', 'none');
        $('#sec4-video').data('is-playing', '1');
    }
    else if ((st + wh*0.5 < sec4_video_base_top || st > sec4_video_base_top + sec4_video_h*0.5) &&      // Video is out of viewoport
        $('#sec4-video').data('autoplay') == 1 && $('#sec4-video').data('is-playing') == 1) {
        videojs("sec4-video").pause();
        $('#sec4-play-btn').css('display', 'block');
        $('#sec4-video').data('autoplay', '0');
        $('#sec4-video').data('is-playing', '0');
    }

    if ((st + wh*0.5 >= sec5_video_base_top && st <= sec5_video_base_top + sec5_video_h*0.5) &&         // Video is in viewport
        $('#sec5-video').data('autoplay') == 1 && $('#sec5-video').data('is-playing') == 0) {
        videojs("sec5-video").play();
        $('#sec5-play-btn').css('display', 'none');
        $('#sec5-video').data('is-playing', '1');
    }
    else if ((st + wh*0.5 < sec5_video_base_top || st > sec5_video_base_top + sec5_video_h*0.5) &&      // Video is out of viewoport
        $('#sec5-video').data('autoplay') == 1 && $('#sec5-video').data('is-playing') == 1) {
        videojs("sec5-video").pause();
        $('#sec5-play-btn').css('display', 'block');
        $('#sec5-video').data('autoplay', '0');
        $('#sec5-video').data('is-playing', '0');
    }


    // Title fade in/out
    if (st > title_fade_h) {    // If title is passed by fade in area, fade out based on scrolling
        var op = 1 - (st - title_fade_h) / 1000;
        $("#title-div").css('opacity', op);
    }
    else {
        $("#title-div").css('opacity', 1);
    }

    // Scrolldown arrow
    if (st > scroll_down_hide_top) {
        $('#scroll_down_arrow').fadeOut(2000);
    }
    else {
        $('#scroll_down_arrow').fadeIn(2000);
    }

    // Make carousel auto rotate at first time.
    if (auto_rotated == 0 && st > sec2_div_top - 200) {
        if (!isMobile) {    // If desktop, parallax carousel
            $('#slide-nav-final').trigger('click');
            window.location.hash = '0';     // Set hash value as 0 to show first slide always (including refresh page).
        }
        else {      //If mobile, basic carousel
//            $('#slick-slide06').trigger('click');
        }
        auto_rotated = 1;
    }

    // Animate timeline in viewport at first time only once.
    if (timeline_animated == 0 && st > timeline_div_top - 200) {
        timeline_animated = 1;
        animateTimeline();
    }
});

$(document).ready(function() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        isMobile = 1;
    }

    $(window).bind("resize", initializeAnimationArgs);
    $(window).bind("orientationchange", initializeAnimationArgs);

    site_url = window.location.origin + window.location.pathname;

    // Load assets for burning building, blowing hair
    preload(burning_images, 'burning-building-div');
    burning_frames = $('#burning-building-div').find('img');
    $(burning_frames[0]).css('opacity', '1');
/*
    preload(hair_images, 'blowing-hair-div');
    hair_frames = $('#blowing-hair-div').find('img');
    $(hair_frames[0]).css('opacity', '1');
*/

    // When you click video area, ...
    $('.video-div').on('click',function (e) {
        e.preventDefault();

        $play_btn = $(this).find('button');
        is_playing = $(this).data('is-playing');
        if (is_playing == 1) {
            $play_btn.css('display', 'block');
            $(this).data('is-playing', '0');
            $(this).data('autoplay', '0');          // Remove auto play attribute when stops by clicking
        }
        else {
            $play_btn.css('display', 'none');
            $(this).data('is-playing', '1');
        }
    });

    // When you click Play button, ...
    $('.video-play-btn').on('click',function (e) {
        e.preventDefault();

        video_id = $(this).parent().attr('id');
        videojs(video_id).play();
        $(this).css('display', 'none');
        $(this).parent().data('is-playing', '1');

        return false;
    });

    // When click parallax carousel item, show/hide navigator
    $('#p2-mini-nav').on('click',function (e) {
        id = $(this).find('.active').attr('id');
        if (id == 'slide-nav-final') {
            $('#final-nav').delay(2000).fadeIn(1000);
        }
        else {
            $('#final-nav').fadeOut(700);
        }

        ga_event = '';
        if (id == 'slide-nav-intro') {
            ga_event = 'Carousel - INTRO';
        }
        else if (id == 'slide-nav-resident-evil') {
            ga_event = 'Carousel - RESIDENT EVIL';
        }
        else if (id == 'slide-nav-apocalypse') {
            ga_event = 'Carousel - APOCALYPSE';
        }
        else if (id == 'slide-nav-extinction') {
            ga_event = 'Carousel - EXTINCTION';
        }
        else if (id == 'slide-nav-afterlife') {
            ga_event = 'Carousel - AFTERLIFE';
        }
        else if (id == 'slide-nav-retribution') {
            ga_event = 'Carousel - RETRIBUTION';
        }
        else if (id == 'slide-nav-final') {
            ga_event = 'Carousel - THE FINAL CHAPTER';
        }
        gaEventTrack(ga_event, 'clicked');

        window.location.hash = '0';     // Set hash value as 0 to show first slide always (including refresh page).
    });

    // Navigate smoothly
    $('#final-nav a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop':  $target.offset().top //no need of parseInt here
        }, 1500, 'swing', function () {
//            window.location.hash = target;
        });
        gaEventTrack('Navigator - ' + $(this).text(), 'clicked');
    });
});


$(window).load(function() {

    $("#preloader").fadeOut(500);     // fade out the loading animation firstly

    initializeAnimationArgs();

    if (ww >= 1024) {       // If the screen is wide, auto scroll to the character
        setTimeout(function() {
            $('html, body').stop().animate({
                'scrollTop': parseInt(ww * 0.36)
            }, 2000, 'swing', function () {
            });
        }, 0);
    }

    // Animate burning building
    burningTimer = setInterval(function() {
        if (burning_frame < 0) burning_frame = 0;
        else if (burning_frame > 36) burning_frame = 0;

        $('#burning-building-div img').css('opacity', '0');
        $(burning_frames[burning_frame++]).css('opacity', '1');
    }, burningSpeed);

    // Animate blowing hair
    hairTimer = setInterval(function() {
        if (hair_frame < 0) hair_frame = 0;
        else if (hair_frame > 45) hair_frame = 0;

        $('#blowing-hair-div img').css('opacity', '0');
        $(hair_frames[hair_frame++]).css('opacity', '1');
    }, hairSpeed);

    $('.accordion-slider').accordion({
        currentWidth: slide_wide_width,
        otherWidth: slide_narrow_width,
        itemDefautWidth: slide_default_width
    });
    $('.accordion-slider li').css('width', slide_default_width + 'px');

    if (isMobile) {     // Activate simple slider for only mobile.
        $('#parallax-carousel').css('display', 'none');
        $('.basic.slider').css('display', 'block');
        $('.basic.slider').slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });

        // Make div's height to vary according to the slide's height dynamically.
        $('#sec2-div').css('height', 'inherit');

        // When click carousel item in simple slider for mobile, track GA.
        $('.basic.slider .slick-dots li button').on('click',function (e) {
            id = $(this).text();

            ga_event = '';
            if (id == '1') {
                ga_event = 'Carousel - INTRO';
            }
            else if (id == '2') {
                ga_event = 'Carousel - RESIDENT EVIL';
            }
            else if (id == '3') {
                ga_event = 'Carousel - APOCALYPSE';
            }
            else if (id == '4') {
                ga_event = 'Carousel - EXTINCTION';
            }
            else if (id == '5') {
                ga_event = 'Carousel - AFTERLIFE';
            }
            else if (id == '6') {
                ga_event = 'Carousel - RETRIBUTION';
            }
            else if (id == '7') {
                ga_event = 'Carousel - THE FINAL CHAPTER';
            }
            gaEventTrack(ga_event, 'clicked');
        });

    }

    if( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
        // If it works on iOS mobile devices,
        // animate timeline part at loading time, hide scroll down arrow.
        // Because scroll and position:fixed does not work in iFrame on iOS mobile.
        timeline_animated = 1;
        animateTimeline();

        $('#scroll_down_arrow').css('display', 'none');
    }
});


function initializeAnimationArgs() {
    auto_rotated = 0;
    $('html, body').css('scrollTop', 0);

    parallax1_height = $('#parallax').height();

    wh = $(window).height();
    ww = $(window).width();

    // For video auto play/stop
    var $sec2_video = $('#sec2-video');
    sec2_video_base_top = $sec2_video.offset().top;
    sec2_video_h = $sec2_video.height();
    sec2_video_base_bottom = sec2_video_base_top + sec2_video_h;

    var $sec3_video = $('#sec3-video');
    sec3_video_base_top = $sec3_video.offset().top;
    sec3_video_h = $sec3_video.height();
    sec3_video_base_bottom = sec3_video_base_top + sec3_video_h;

    var $sec4_video = $('#sec4-video');
    sec4_video_base_top = $sec4_video.offset().top;
    sec4_video_h = $sec4_video.height();
    sec4_video_base_bottom = sec4_video_base_top + sec4_video_h;

    var $sec5_video = $('#sec5-video');
    sec5_video_base_top = $sec5_video.offset().top;
    sec5_video_h = $sec5_video.height();
    sec5_video_base_bottom = sec5_video_base_top + sec5_video_h;


    // For title fade in/out
    title_div_top = $('#title-div').offset().top;
    title_div_h = $('#title-div').height();
    title_fade_h = title_div_top + title_div_h * 2.8;

    // Scrolldown arrow
    scroll_down_top = wh + ww * 0.36 - 40;
    if (ww >= 1024) {       // If the screen is wide (auto scroll to the character), ...
        scroll_down_hide_top = ww * 0.36 + 100;
    }
    else {
        scroll_down_hide_top = 100;
    }

    // For parallax carousel auto rotating
    sec2_div_top = $('#sec2-div').offset().top;
    // Set Parallax carousel position to justify to the middle center.
    $('#phase2-stage').css('margin-bottom', (wh + 5) * -0.5 + 'px');

    // For accordion slider
    slide_default_width = ww / 100 * 20;
    slide_narrow_width = ww / 100 * 10;
    slide_wide_width = ww / 100 * 60;

    // For timeline animation
    timeline_div_top = $('#timeline-div').offset().top;
}


// From here, section 3 interactive
function showCharacterEvo() {
    $('.character-evo-stage').css('position', 'absolute');
    $('#sec3-stage1-div').css('position', 'relative');
    $('#sec3-text-div p').css('opacity', 0);
    $('#sec3-text-div p').fadeTo(1500, 1);

    $('#sec3-stage2-stars-div').fadeOut('slow');
    $('#sec3-stage2-umbrellas-div').fadeOut('slow');
    $('#sec3-stage3-div').fadeOut('slow');
    $('#sec3-stage1-div').fadeIn('slow');
}

function showStars() {
    $('.character-evo-stage').css('position', 'absolute');
    $('#sec3-stage2-stars-div').css('position', 'relative');
    $('#sec3-text-div p').css('opacity', 0);
    $('#sec3-text-div p').fadeTo(1500, 1);

    $('#sec3-stage1-div').fadeOut('slow');
    $('#sec3-stage3-div').fadeOut('slow');
    $('#sec3-stage2-umbrellas-div').fadeOut('slow');
    $('#sec3-stage2-stars-div').fadeIn(1500);

    gaEventTrack('CHARACTER EVO - STARS', 'clicked');
}

function showUmbrellaCorp() {
    $('.character-evo-stage').css('position', 'absolute');
    $('#sec3-stage2-umbrellas-div').css('position', 'relative');
    $('#sec3-text-div p').css('opacity', 0);
    $('#sec3-text-div p').fadeTo(1500, 1);

    $('#sec3-stage1-div').fadeOut('slow');
    $('#sec3-stage3-div').fadeOut('slow');
    $('#sec3-stage2-stars-div').fadeOut('slow');
    $('#sec3-stage2-umbrellas-div').fadeIn(1500);

    gaEventTrack('CHARACTER EVO - UMBRELLA CORP', 'clicked');
}

function showCharacterProfile(character) {
    $('.character-evo-stage').css('position', 'absolute');
    $('#sec3-stage3-div').css('position', 'relative');
    $('#sec3-text-div p').css('opacity', 0);
    $('#sec3-text-div p').fadeTo(500, 1);

    $('#sec3-stage1-div').fadeOut('slow');
    $('#sec3-stage2-stars-div').fadeOut('slow');
    $('#sec3-stage2-umbrellas-div').fadeOut('slow');
    $('#sec3-stage3-div').fadeIn('slow');

    profile_portrait = '';
    profile_title = '';
    profile_content = '';
    type = 1;               // 1: star, 2: umbrella
    if (character == 'star1') {
        type = 1;
        profile_portrait = 'alice.png';
        profile_title = "Alice";
        profile_content = "<strong>Bio:</strong><br/>" +
            "A former security officer for Umbrella, Janus (code name Alice) worked undercover to expose the company's " +
            "illegal research experiments before being rendered an amnesiac during the course of the outbreak. Alice was " +
            "subsequently captured by Umbrella and injected with the T-Virus, imbuing her with superhuman powers that " +
            "were subsequently stripped (and later seemingly restored) by former Umbrella head honcho Albert Wesker. " +
            "With the human race on its last legs in The Final Chapter, Alice sets out to take down Umbrella once and for all." +
            "<br/><br/>" +
            "<strong>Powers:</strong><br/>" +
            "Psychic abilities including telekinesis (with T-Virus); martial arts expert, weapons specialist, all-around badass (without T-Virus)";
    }
    else if (character == 'star2') {
        type = 1;
        profile_portrait = 'claire.png';
        profile_title = "Claire Redfield";
        profile_content = "<strong>Bio:</strong><br/>" +
            "As the fearless leader of a group of post-outbreak survivors, Claire (brother of S.T.A.R.S. operative Chris " +
            "Redfield) became one of Alice's most crucial allies, assisting greatly in her efforts to take down Umbrella " +
            "and prevent the further spread of the T-Virus. Though her fate was left up in the air following the events " +
            "of Afterlife, Claire has returned to fight alongside Alice once last time in The Final Chapter." +
            "<br/><br/>" +
            "<strong>Powers:</strong><br/>" +
            "Advanced physical abilities, skilled marksman, peerless survival instincts";
    }
    else if (character == 'star3') {
        type = 1;
        profile_portrait = 'abigail.png';
        profile_title = "Abigail";
        profile_content = "<strong>Bio:</strong><br/>" +
            "One of the sole remaining uninfected members of the human race and a member of Claire and Doc's scrappy " +
            "band of survivors, Abigail joins up with Alice in her final attempt to save humanity from destruction. " +
            "A mechanical master and weapons specialist, Abigail is a smart, tough-as-nails ally in Alice's latest " +
            "showdown with Umbrella." +
            "<br/><br/>" +
            "<strong>Powers:</strong><br/>" +
            "Mechanical expert, weapons virtuoso, nerves of steel";
    }
    else if (character == 'star4') {
        type = 1;
        profile_portrait = 'character1.png';
        profile_title = "Doc";
        profile_content = "<strong>Bio:</strong><br/>" +
            "The leader of the small group of human survivors holed up in a base near Raccoon City, Doc is romantically " +
            "involved with Claire but - like everyone else in the post-outbreak world - his number one goal is survival." +
            "<br/><br/>" +
            "<strong>Powers:</strong><br/>" +
            "Advanced physical abilities, skilled marksman, peerless survival instincts";
    }

    else if (character == 'umbrella1') {
        type = 2;
        profile_portrait = 'albert-wesker.png';
        profile_title = "Albert Wesker";
        profile_content = "<strong>Bio:</strong><br/>" +
            "Umbrella Corp chairman Wesker turned the T-Virus on himself in an effort to transform into a superhuman " +
            "warrior, but the experiment backfired when the virus took on a mind of its own. Perpetually at odds with " +
            "lead Umbrella scientist Dr. Sam Isaacs, Wesker defected from the organization after the Red Queen took " +
            "control and formed an uneasy alliance with Alice." +
            "<br/><br/>" +
            "<strong>Powers:</strong><br/>" +
            "Superhuman strength and speed, advanced regenerative powers, maniacal brilliance";
    }
    else if (character == 'umbrella2') {
        type = 2;
        profile_portrait = 'isaacs.png';
        profile_title = "Dr. Alexander Isaacs";
        profile_content = "<strong>Bio:</strong><br/>" +
            "The brilliant but disturbed Umbrella scientist was responsible for injecting Janus/Alice with the T-Virus " +
            "and creating an army of clones in her image. In defiance of Wesker, he spawned a breed of super undead " +
            "using the clones' blood. Isaacs later injected himself with the virus to counteract a zombie bite, " +
            "transforming himself into a monstrous, tentacled Tyrant in the process. Though Alice seemingly put an end " +
            "to him in Extinction, Isaacs has now returned, more diabolical than ever." +
            "<br/><br/>" +
            "<strong>Powers:</strong><br/>" +
            "Superhuman strength, advanced healing ability, tentacle generation, fierce intelligence";
    }
    else if (character == 'umbrella3') {
        type = 2;
        profile_portrait = 'red-queen.png';
        profile_title = "Red Queen";
        profile_content = "<strong>Bio:</strong><br/>" +
            "The Umbrella-engineered supercomputer takes the holographic form of a young girl, but there's nothing " +
            "harmless about the artificially-intelligent program, which has made the extermination of the human race " +
            "its primary objective." +
            "<br/><br/>" +
            "<strong>Powers:</strong><br/>" +
            "Mind control, freedom from emotion, dry sense of humor";
    }
    else if (character == 'umbrella4') {
        type = 2;
        profile_portrait = 'character1.png';
        profile_title = "Commander Lee";
        profile_content = "<strong>Bio:</strong><br/>" +
            "Umbrella henchman Commander Lee is a strong warrior, both physically and mentally. In The Final Chapter, " +
            "he uses his superior fight and weapons training to try and prevent Alice and her cohorts from achieving " +
            "their objectives." +
            "<br/><br/>" +
            "<strong>Powers:</strong><br/>" +
            "Martial arts skills, firearms training";
    }

    $('#profile-portrait').attr('src', '//cdn.wovendigitaldev.com/resident-evil/images/' + profile_portrait);
    $('#profile-title').html(profile_title);
    $('#profile-content').html(profile_content);

    if (type == 1) {    // Show back button to stars
        $('#back-umbrellas-btn').css('display', 'none');
        $('#back-stars-btn').css('display', 'block');
    }
    else if (type == 2) {    // Show back button to umbrellas
        $('#back-stars-btn').css('display', 'none');
        $('#back-umbrellas-btn').css('display', 'block');
    }

    gaEventTrack('CHARACTER EVO - ' + profile_title + ' Profile', 'clicked');
}


// Preload assets for animations
function preload(arrayOfImages, parent_id) {
    $(arrayOfImages).each(function () {
        $('<img />').attr('src', '//cdn.wovendigitaldev.com/resident-evil/images/ani/'+this).appendTo('#'+parent_id).addClass('ani-frame');
    });
}


// Animate timeline
function animateTimeline() {
    $('#red-line').animate({'left': '1.37vw'}, thick_line_time);
    $('#original-line').animate({'left': '33.33vw'}, thick_line_time);
    $('#alternate-line').animate({'left': '33.33vw'}, thick_line_time);

    $('#line1').delay(thick_line_time).animate({'height': '13.63vw'}, thin_line_time);
    $('#line2').delay(thick_line_time).animate({'height': '7.2vw'}, thin_line_time);
    $('#line3a').delay(thick_line_time).animate({'height': '12.38vw'}, thin_line_time * 0.5);
    $('#line3b').delay(thick_line_time + thin_line_time * 0.5).animate({'width': '7.62vw'}, thin_line_time * 0.5);
    $('#line4').delay(thick_line_time).animate({'height': '26.96vw'}, thin_line_time);
    $('#line5').delay(thick_line_time).animate({'height': '9.35vw'}, thin_line_time);
    $('#line6').delay(thick_line_time).animate({'height': '20.12vw'}, thin_line_time);
    $('#line7').delay(thick_line_time).animate({'height': '29.76vw'}, thin_line_time);
    $('#line8').delay(thick_line_time).animate({'height': '12.56vw'}, thin_line_time * 0.7);
    $('#line9').delay(thick_line_time + thin_line_time * 0.7).animate({'width': '3.99vw'}, thin_line_time * 0.3);
    $('#line10').delay(thick_line_time + thin_line_time * 0.5).animate({'width': '1.15vw'}, thin_line_time * 0.5);
    $('#line11').delay(thick_line_time).animate({'height': '5.12vw'}, thin_line_time);
    $('#line12').delay(thick_line_time + thin_line_time * 0.5).animate({'width': '2.14vw'}, thin_line_time * 0.5);
    $('#line13').delay(thick_line_time).animate({'height': '17.2vw'}, thin_line_time);
    $('#line14').delay(thick_line_time + thin_line_time * 0.5).animate({'width': '2.14vw'}, thin_line_time * 0.5);
    $('#line15').delay(thick_line_time).animate({'height': '12.92vw'}, thin_line_time);
    $('#line16').delay(thick_line_time).animate({'height': '17.14vw'}, thin_line_time);
    $('#line17').delay(thick_line_time + thin_line_time * 0.3).animate({'width': '15.48vw'}, thin_line_time * 0.7);
    $('#line18').delay(thick_line_time).animate({'height': '17.38vw'}, thin_line_time * 0.7);
    $('#line19').delay(thick_line_time + thin_line_time * 0.7).animate({'width': '3.69vw'}, thin_line_time * 0.3);

    $('.shield').delay(thick_line_time + thin_line_time).animate({'opacity': '1'}, fade_in_time);
    $('.umbrella').delay(thick_line_time + thin_line_time).animate({'opacity': '1'}, fade_in_time);
    setTimeout(function()  {$('.umbrella').css('animation-name', 'pulse'); }, thick_line_time + thin_line_time + fade_in_time * 2);
    setTimeout(function()  {$('.umbrella').css('-webkit-animation-name', 'pulse'); }, thick_line_time + thin_line_time + fade_in_time * 2);
    $('.caption').delay(thick_line_time + thin_line_time + fade_in_time * 0.5).animate({'opacity': '1'}, fade_in_time);
}


//
function showUmbrellaDetails(n) {
    var title = '', text = '';
    if (n == 1) {
        title = 'Umbrella opens for business';
        text = "Umbrella, a large pharmaceutical manufacturer, establishes its headquarters in Raccoon City. There it begins manufacturing the T-Virus - designed by Umbrella's scientists to reanimate dead cells - in an underground lab known as The Hive.";
    }
    else if (n == 2) {
        title = 'T-Virus dangers exposed';
        text = 'The T-Virus is revealed to have dangerous side effects that transform human beings into mutants and zombies.';
    }
    else if (n == 3) {
        title = 'The Hive melts down';
        text = "An outbreak of the T-Virus in The Hive causes Umbrella's A.I. supercomputer, The Red Queen, to kill off everyone inside in an effort to contain its spread.";
    }
    else if (n == 4) {
        title = 'Alice awakens';
        text = 'Alice, a double-agent Umbrella security operative who works in the mansion located above The Hive, has her memory wiped after The Red Queen releases a noxious gas';
    }
    else if (n == 5) {
        title = 'T-Virus spreads';
        text = 'The T-Virus spreads across Raccoon City, transforming the population into zombies and mutants.';
    }
    else if (n == 6) {
        title = 'A warrior rises';
        text = 'Umbrella captures Alice and injects her with the T-Virus, a procedure that gives her superhuman abilities. She becomes the ultimate weapon, perfectly bonding with the virus.';
    }
    else if (n == 7) {
        title = 'Raccoon City destroyed';
        text = 'In a last-ditch effort to stop the spread of the virus, Umbrella drops a nuclear bomb on Raccoon City, decimating it. They blame the disaster on a nuclear plant explosion, but fail to contain the epidemic.';
    }
    else if (n == 8) {
        title = 'Project Alice launches';
        text = "Umbrella scientist Dr. Sam Isaacs officially kicks off \"Project Alice,\" which allows him to track the T-Virus-enhanced Alice's every move via satellite.";
    }
    else if (n == 9) {
        title = 'T-Virus pandemic';
        text = 'The T-Virus quickly becomes a global pandemic, transforming the Earth into a mutant and zombie-filled wasteland.';
    }
    else if (n == 10) {
        title = 'Quest for a cure';
        text = 'New Umbrella chairman Albert Wesker orders Dr. Isaacs to develop a cure for the T-Virus by creating an army of Alice clones.';
    }
    else if (n == 11) {
        title = '"Super zombies" unleashed';
        text = 'Dr. Isaacs creates the clones, but defies Wesker by using them to spawn an army of "super zombies." After injecting himself with the anti-virus, he transforms into a monstrous mutant known as a Tyrant before Alice defeats him.';
    }
    else if (n == 12) {
        title = 'Arcadia established';
        text = 'Umbrella sets up Arcadia, a so-called free zone for survivors which is actually a trap designed to lure more human test subjects.';
    }
    else if (n == 13) {
        title = 'Japanese headquarters destroyed';
        text = "Along with an army of her clones, Alice tracks Wesker to Umbrella's Japanese headquarters, but Wesker destroys the facility along with all of the clones.";
    }

    $('.modal__inner .modal-title').text(title);
    $('.modal__inner .modal-text').text(text);

    gaEventTrack('TIMELINE - ' + title, 'clicked');
}


function gaEventTrack(category, action) {
    return;
    ga('send', 'event', {
        eventCategory: category,
        eventAction: action
    });
}
