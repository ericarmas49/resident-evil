<?php include 'header.php'; ?>

<section id="sec1">
    <div id="parallax">
        <img id="bg-layer1" src="//cdn.wovendigitaldev.com/resident-evil/images/1-sky.jpg"/>
        <img id="bg-layer2" src="//cdn.wovendigitaldev.com/resident-evil/images/2-building.png"/>
        <img id="bg-layer3" src="//cdn.wovendigitaldev.com/resident-evil/images/3-building.png"/>
        <img id="bg-layer4-a" src="//cdn.wovendigitaldev.com/resident-evil/images/4-building1.png"/>
        <div id="bg-layer4-b" >
            <img id="building-bg-img" src="//cdn.wovendigitaldev.com/resident-evil/images/4-building2.png"/>
            <div id="burning-building-div"></div>
        </div>
        <canvas id="particles-canvas1"></canvas>
        <div id="title-div">
            <ul id="title-ul">
                <img id="milla-img" src="//cdn.wovendigitaldev.com/resident-evil/images/milla_jovovich.png"/>
                <img id="title-img" src="//cdn.wovendigitaldev.com/resident-evil/images/resident_evil_title.png"/>
                <img id="in-theaters-img" src="//cdn.wovendigitaldev.com/resident-evil/images/in_theaters.png"/>
                <img id="imax-title-img" src="//cdn.wovendigitaldev.com/resident-evil/images/imax_title.png"/>
            </ul>
        </div>
        <div id="bg-layer5">
            <img id="character-body-img" src="//cdn.wovendigitaldev.com/resident-evil/images/5-heroine.png"/>
            <div id="blowing-hair-div"></div>
        </div>
        <canvas id="particles-canvas2"></canvas>
        <a id="scroll_down_arrow"><span></span>SCROLL</a>
    </div>
</section>

<section id="sec2">
    <div id="sec2-div">
        <img id="sec2-bg-img" src="//cdn.wovendigitaldev.com/resident-evil/images/sec2-bg.jpg"/>
        <div id="parallax-carousel">
            <div class="corner-pretty"></div>

            <div id="audio-container">
                <audio id="audio-loop"></audio>
            </div>

            <canvas id="phase2-stage">
                <div id="accessibility">
                    <ul></ul>
                </div>
            </canvas>

            <img id="scroll_through_img" src="//cdn.wovendigitaldev.com/resident-evil/images/slides/scroll-through.png"/>

            <nav class="phase2-controls nav fade-out">
                <ul id="p2-mini-nav"></ul>
            </nav>

            <nav id="final-nav">
                <ul>
                    <li><a href="#sec2-video">A BRIEF HISTORY</a></li>
                    <li><a href="#sec3-video">THE BREAKDOWN</a></li>
                    <li><a href="#sec4-video">FANDEMONIUM</a></li>
                    <li><a href="#sec5-video">TRAILER</a></li>
                </ul>
            </nav>

            <article class="story-wrapper">
                <div class="story"><a class="btn-close"></a>
                    <div class="scrollable">
                        <div class="story-content">
                            <div class="character-head"></div>
                            <header>
                                <div class="character-info"><h1 class="title"></h1>
                                    <h2 class="subtitle"></h2>
                                    <div class="copy"></div>
                                </div>
                            </header>
                            <section class="character-video">
                                <iframe id="videovimeo" src="" frameborder="0" webkitallowfullscreen mozallowfullscreen
                                        allowfullscreen></iframe>
                            </section>
                        </div>
                    </div>
                </div>
            </article>
            <div class="video-wrapper fade-out">
                <div class="video-box">
                    <video id="video-testimonial" preload="auto" autoplay poster=""
                           class="video video-js vjs-bon-skin"></video>
                    <a class="btn-close"></a></div>
            </div>
        </div>
        <div class="basic slider">
            <div>
                <img class="intro-slide-img" src="//cdn.wovendigitaldev.com/resident-evil/images/slides/0_intro.png" />
            </div>
            <div>
                <img class="slide-title" src="//cdn.wovendigitaldev.com/resident-evil/images/slides/1_residentevil-title.png" />
                <img class="slide-character" src="//cdn.wovendigitaldev.com/resident-evil/images/slides/1_ResidentEvil-girl.png" />
                <p class="slide-content">
                    AFTER A DEADLY VIRUS BREAKS OUT INSIDE A SECRET UNDERGROUND LAB AND TURNS THE STAFF INTO
                    FLESH-EATING ZOMBIES, AN AMNESIAC WOMAN NAMED ALICE AND A UNIT OF ELITE SOLDIERS MUST PREVENT IT
                    FROM ESCAPING BEYOND THE FACILITY'S WALLS.
                    WHILE THERE, ALICE'S MOMORIES SLOWLY BEGIN T ORETURN, PROVIDING CLUES TO HER TRUE IDENTITY.
                </p>
            </div>
            <div>
                <img class="slide-title" src="//cdn.wovendigitaldev.com/resident-evil/images/slides/2_apocalypse-title.png" />
                <img class="slide-character" src="//cdn.wovendigitaldev.com/resident-evil/images/slides/2_apocalypse-girl.png" />
                <p class="slide-content">
                    AFTER SURVIVING THE ORIGINAL OUTBREAK, ALICE AWAKES TO DISCOVER SHE'S BEEN INJECTED WITH THE T-VIRUS AND
                    IMBUED WITH SUPERHUMAN POWERS. WITH RACCOON CITY NOW BESIEGED BY ROVING ZOMBIES AND MUTANT MONSTERS KNOWN
                    AS LICKERS, SHE TEAMS UP WITH A SMALL GROUP OF SURVIVORS TO ESCAPE THE CITY BEFORE UMBRELLA DECIMATES IT
                    WITH A NUCLEAR BOMB.
                </p>
            </div>
            <div>
                <img class="slide-title" src="//cdn.wovendigitaldev.com/resident-evil/images/slides/3_extinction-title.png" />
                <img class="slide-character" src="//cdn.wovendigitaldev.com/resident-evil/images/slides/3_extinction-girl.png" />
                <p class="slide-content">
                    WITH THE WORLD IN RUINS FOLLOWING THE DEVASTATING T-VIRUS PANDEMIC, ALICE FALLS IN A GROUP OF SURVIVORS
                    HOPING TO MAKE IT TO THE DECONTAMINATED ZONE OF ARCADIA, ALASKA. ON THEIR WAY THROUGH THE NEVADA DESERT,
                    THEY'RE BESIEGED BY AN ARMY OF "SUPER ZOMBIES" CREATED BY UMBRELLA SCIENTIST DR. ISAACS, WHO HAS MADE IT
                    HIS MISSION TO TRACK ALICE DOWN.
                </p>
            </div>
            <div>
                <img class="slide-title" src="//cdn.wovendigitaldev.com/resident-evil/images/slides/4_afterlife-title.png" />
                <img class="slide-character" src="//cdn.wovendigitaldev.com/resident-evil/images/slides/4_afterlife-girl.png" />
                <p class="slide-content">
                    AFTER BEING STRIPPED OF HER POWERS BY UMBRELLA HEAD ALBERT WESKER, ALICE AND SURVIVING ALLY
                    CLAIRE REDFIELD JOIN A GROUP OF SURVIVORS WHO HAVE BARRICADED THEMSELVES INSIDE A LOS ANGELES
                    PRISON. WITH A HORDE OF THE INFECTED SURROUNDING THEM, THEY DECIDE TO MAKE A BREAK FOR ARCADIA,
                    WHICH THEY LEARN IS A ROVING CARGO SHIP NOW TRAVELING ALONG THE COAST NEARBY.
                </p>
            </div>
            <div>
                <img class="slide-title" src="//cdn.wovendigitaldev.com/resident-evil/images/slides/5_retribution-title.png" />
                <img class="slide-character" src="//cdn.wovendigitaldev.com/resident-evil/images/slides/5_retribution-alice.png" />
                <p class="slide-content">
                    WITH UMBRELLA SUPERCOMPUTER THE RED QUEEN NOW IN CONTROL, ALICE AND SEVERAL NEW AND FORMER ALLIES
                    BATTLE TO ESCAPE FROM AN UNDERWEATER UMBRELLA TESTING FACILITY. ONCE FREE, ALICE TRAVELS TO
                    WASHINGTON, D.C., WHERE ALBERT WESKER AND HIS OPERATIVES ARE MAKING A LAST STAND AGAINST THE
                    INFECTED FROM INSIDE A HEAVILY-FORTIFIED WHITE HOUSE.
                </p>
            </div>
            <div>
                <img class="slide-title" src="//cdn.wovendigitaldev.com/resident-evil/images/slides/6_finalchapter-title.png" />
                <img class="slide-character" src="//cdn.wovendigitaldev.com/resident-evil/images/slides/6_finalchapter-girl.png" />
                <p class="slide-content">
                    ALICE TRAVELS TO THE PLACE WHERE IT ALL BEGAN UMBRELLA CORP'S SECRET UNDERGROUND LABORATORY THE
                    HIVE - TO FACE OFF WITH THE NEFARIOUS DR. ISAACS AND FOIL HIS PLANS TO EXTERMINATE THE LAST
                    REMAINING HUMAN SURVIVORS. TO LEARN MORE ABOUT THE FINAL CHAPTER, UMBRELLA CORP, ALICE'S EVOLUTION
                    AND MORE CONTINUE TO READ BELOW.
                </p>
            </div>
        </div>

        <div class="blueberry">             <!-- This slider is only activated for mobile devices. -->
            <ul class="slides">
                <li>
                    <img src="//cdn.wovendigitaldev.com/resident-evil/images/slides/0_intro.png" />
                </li>
                <li>
                    <img class="slide-title" src="//cdn.wovendigitaldev.com/resident-evil/images/slides/1_residentevil-title.png" />
                    <img class="slide-character" src="//cdn.wovendigitaldev.com/resident-evil/images/slides/1_ResidentEvil-girl.png" />
                    <p class="slide-content">
                        AFTER A DEADLY VIRUS BREAKS OUT INSIDE A SECRET UNDERGROUND LAB AND TURNS THE STAFF INTO
                        FLESH-EATING ZOMBIES, AN AMNESIAC WOMAN NAMED ALICE AND A UNIT OF ELITE SOLDIERS MUST PREVENT IT
                        FROM ESCAPING BEYOND THE FACILITY'S WALLS.
                        WHILE THERE, ALICE'S MOMORIES SLOWLY BEGIN T ORETURN, PROVIDING CLUES TO HER TRUE IDENTITY.
                    </p>
                </li>
                <li>
                    <img class="slide-title" src="//cdn.wovendigitaldev.com/resident-evil/images/slides/2_apocalypse-title.png" />
                    <img class="slide-character" src="//cdn.wovendigitaldev.com/resident-evil/images/slides/2_apocalypse-girl.png" />
                    <p class="slide-content">
                        AFTER SURVIVING THE ORIGINAL OUTBREAK, ALICE AWAKES TO DISCOVER SHE'S BEEN INJECTED WITH THE T-VIRUS AND
                        IMBUED WITH SUPERHUMAN POWERS. WITH RACCOON CITY NOW BESIEGED BY ROVING ZOMBIES AND MUTANT MONSTERS KNOWN
                        AS LICKERS, SHE TEAMS UP WITH A SMALL GROUP OF SURVIVORS TO ESCAPE THE CITY BEFORE UMBRELLA DECIMATES IT
                        WITH A NUCLEAR BOMB.
                    </p>
                </li>
                <li>
                    <img class="slide-title" src="//cdn.wovendigitaldev.com/resident-evil/images/slides/3_extinction-title.png" />
                    <img class="slide-character" src="//cdn.wovendigitaldev.com/resident-evil/images/slides/3_extinction-girl.png" />
                    <p class="slide-content">
                        WITH THE WORLD IN RUINS FOLLOWING THE DEVASTATING T-VIRUS PANDEMIC, ALICE FALLS IN A GROUP OF SURVIVORS
                        HOPING TO MAKE IT TO THE DECONTAMINATED ZONE OF ARCADIA, ALASKA. ON THEIR WAY THROUGH THE NEVADA DESERT,
                        THEY'RE BESIEGED BY AN ARMY OF "SUPER ZOMBIES" CREATED BY UMBRELLA SCIENTIST DR. ISAACS, WHO HAS MADE IT
                        HIS MISSION TO TRACK ALICE DOWN.
                    </p>
                </li>
                <li>
                    <img class="slide-title" src="//cdn.wovendigitaldev.com/resident-evil/images/slides/4_afterlife-title.png" />
                    <img class="slide-character" src="//cdn.wovendigitaldev.com/resident-evil/images/slides/4_afterlife-girl.png" />
                    <p class="slide-content">
                        AFTER BEING STRIPPED OF HER POWERS BY UMBRELLA HEAD ALBERT WESKER, ALICE AND SURVIVING ALLY
                        CLAIRE REDFIELD JOIN A GROUP OF SURVIVORS WHO HAVE BARRICADED THEMSELVES INSIDE A LOS ANGELES
                        PRISON. WITH A HORDE OF THE INFECTED SURROUNDING THEM, THEY DECIDE TO MAKE A BREAK FOR ARCADIA,
                        WHICH THEY LEARN IS A ROVING CARGO SHIP NOW TRAVELING ALONG THE COAST NEARBY.
                    </p>
                </li>
                <li>
                    <img class="slide-title" src="//cdn.wovendigitaldev.com/resident-evil/images/slides/5_retribution-title.png" />
                    <img class="slide-character" src="//cdn.wovendigitaldev.com/resident-evil/images/slides/5_retribution-alice.png" />
                    <p class="slide-content">
                        WITH UMBRELLA SUPERCOMPUTER THE RED QUEEN NOW IN CONTROL, ALICE AND SEVERAL NEW AND FORMER ALLIES
                        BATTLE TO ESCAPE FROM AN UNDERWEATER UMBRELLA TESTING FACILITY. ONCE FREE, ALICE TRAVELS TO
                        WASHINGTON, D.C., WHERE ALBERT WESKER AND HIS OPERATIVES ARE MAKING A LAST STAND AGAINST THE
                        INFECTED FROM INSIDE A HEAVILY-FORTIFIED WHITE HOUSE.
                    </p>
                </li>
                <li>
                    <img class="slide-title" src="//cdn.wovendigitaldev.com/resident-evil/images/slides/6_finalchapter-title.png" />
                    <img class="slide-character" src="//cdn.wovendigitaldev.com/resident-evil/images/slides/6_finalchapter-girl.png" />
                    <p class="slide-content">
                        ALICE TRAVELS TO THE PLACE WHERE IT ALL BEGAN UMBRELLA CORP'S SECRET UNDERGROUND LABORATORY THE
                        HIVE - TO FACE OFF WITH THE NEFARIOUS DR. ISAACS AND FOIL HIS PLANS TO EXTERMINATE THE LAST
                        REMAINING HUMAN SURVIVORS. TO LEARN MORE ABOUT THE FINAL CHAPTER, UMBRELLA CORP, ALICE'S EVOLUTION
                        AND MORE CONTINUE TO READ BELOW.
                    </p>
                </li>
            </ul>
        </div>
    </div>
</section>

<section>
    <div id="sec2-video-top-div"></div>
    <!-- Daily Video -->
    <div id="sec2-video" class="video-div" data-autoplay="1" data-is-playing="0">
        <div class="video-inner-div">
            <video id="sec2-video" data-video-id="5289183425001" data-account="3751376962001"
                   data-player="ea03b667-4f7f-491d-90f1-54a73b1a589a" data-embed="default" class="video-js"
                   controls=""
                   style="width: 100%; height: 100%; position: absolute; top: 0px; bottom: 0px; right: 0px; left: 0px;"></video>
        </div>
        <button class="video-play-btn" id="sec2-play-btn"></button>
    </div>
</section>

<section id="sec4">
    <div id="sec4-div">
        <div id="timeline-div">
            <img id="umbrella_corp_title" src="//cdn.wovendigitaldev.com/resident-evil/images/umbrella_corp_evolution_title.png"/>
            <div id="line-top" class="line"></div>
            <label id="top-title" class="title">Resident Evil: The Final Chapter</label>
            <div id="line-bottom" class="line"></div>

            <div id="line1" class="line bottom-to-top"></div>
            <div id="line2" class="line bottom-to-top"></div>
            <div id="line3a" class="line bottom-to-top"></div>
            <div id="line3b" class="line right-to-left"></div>
            <div id="line4" class="line bottom-to-top"></div>
            <div id="line5" class="line bottom-to-top"></div>
            <div id="line6" class="line bottom-to-top"></div>
            <div id="line7" class="line bottom-to-top"></div>
            <div id="line8" class="line bottom-to-top"></div>
            <div id="line9" class="line right-top-left"></div>
            <div id="line10" class="line left-to-right"></div>

            <div id="red-line" class="line"></div>
            <div id="original-line" class="line"></div>
            <div id="alternate-line" class="line"></div>

            <div id="line11" class="line top-to-bottom"></div>
            <div id="line12" class="line left-to-right"></div>
            <div id="line13" class="line top-to-bottom"></div>
            <div id="line14" class="line left-to-right"></div>
            <div id="line15" class="line top-to-bottom"></div>
            <div id="line16" class="line top-to-bottom"></div>
            <div id="line17" class="line left-to-right"></div>
            <div id="line18" class="line top-to-bottom"></div>
            <div id="line19" class="line left-to-right"></div>

            <div id="shield1" class="shield"></div>
            <div id="shield2" class="shield"></div>
            <div id="shield3" class="shield"></div>

            <div id="umbrella1" class="umbrella"><label for="modal-umbrella" onclick="showUmbrellaDetails(1);"></label></div>
            <div id="umbrella2" class="umbrella"><label for="modal-umbrella" onclick="showUmbrellaDetails(4);"></label></div>
            <div id="umbrella3" class="umbrella"><label for="modal-umbrella" onclick="showUmbrellaDetails(7);"></label></div>
            <div id="umbrella4" class="umbrella"><label for="modal-umbrella" onclick="showUmbrellaDetails(8);"></label></div>
            <div id="umbrella5" class="umbrella"><label for="modal-umbrella" onclick="showUmbrellaDetails(9);"></label></div>
            <div id="umbrella6" class="umbrella"><label for="modal-umbrella" onclick="showUmbrellaDetails(10);"></label></div>
            <div id="umbrella7" class="umbrella"><label for="modal-umbrella" onclick="showUmbrellaDetails(11);"></label></div>
            <div id="umbrella8" class="umbrella"><label for="modal-umbrella" onclick="showUmbrellaDetails(12);"></label></div>
            <div id="umbrella9" class="umbrella"><label for="modal-umbrella" onclick="showUmbrellaDetails(2);"></label></div>
            <div id="umbrella10" class="umbrella"><label for="modal-umbrella" onclick="showUmbrellaDetails(3);"></label></div>
            <div id="umbrella11" class="umbrella"><label for="modal-umbrella" onclick="showUmbrellaDetails(5);"></label></div>
            <div id="umbrella12" class="umbrella"><label for="modal-umbrella" onclick="showUmbrellaDetails(6);"></label></div>
            <div id="umbrella13" class="umbrella"><label for="modal-umbrella" onclick="showUmbrellaDetails(13);"></label></div>

            <div id="caption1" class="caption">
                <label class="title" for="modal-umbrella" onclick="showUmbrellaDetails(1);">Umbrella opens for business</label>
                <label class="text">Some other text some other text some other text some other text some other text</label>
            </div>
            <div id="caption2" class="caption">
                <label class="title" for="modal-umbrella" onclick="showUmbrellaDetails(4);">Alice awakens</label>
                <label class="text">Some other text some other text some other text some other text some other text</label>
            </div>
            <div id="caption3" class="caption">
                <label class="title" for="modal-umbrella" onclick="showUmbrellaDetails(7);">Raccoon City destroyed</label>
                <label class="text">Some other text some other text some other text some other text some other text</label>
            </div>
            <div id="caption4" class="caption">
                <label class="title" for="modal-umbrella" onclick="showUmbrellaDetails(8);">Project Alice launches</label>
                <label class="text">Some other text some other text some other text some other text some other text</label>
            </div>
            <div id="caption5" class="caption">
                <label class="title" for="modal-umbrella" onclick="showUmbrellaDetails(9);">T-Virus pandemic</label>
                <label class="text">Some other text some other text some other text some other text some other text</label>
            </div>
            <div id="caption6" class="caption">
                <label class="title" for="modal-umbrella" onclick="showUmbrellaDetails(10);">Quest for a cure</label>
                <label class="text">Some other text some other text some other text some other text some other text</label>
            </div>
            <div id="caption7" class="caption">
                <label class="title" for="modal-umbrella" onclick="showUmbrellaDetails(11);">"Super zombies" unleashed</label>
                <label class="text">Some other text some other text some other text some other text some other text</label>
            </div>
            <div id="caption8" class="caption">
                <label class="title" for="modal-umbrella" onclick="showUmbrellaDetails(12);">Arcadia established</label>
                <label class="text">Some other text some other text some other text some other text some other text</label>
            </div>
            <div id="caption9" class="caption">
                <label class="title" for="modal-umbrella" onclick="showUmbrellaDetails(2);">T-Virus dangers exposed</label>
                <label class="text">Some other text some other text some other text some other text some other text</label>
            </div>
            <div id="caption10" class="caption">
                <label class="title" for="modal-umbrella" onclick="showUmbrellaDetails(2);">T-Virus dangers exposed</label>
                <label class="text">Some other text some other text some other text some other text some other text</label>
            </div>
            <div id="caption11" class="caption">
                <label class="title" for="modal-umbrella" onclick="showUmbrellaDetails(3);">The Hive melts down</label>
                <label class="text">Some other text some other text some other text some other text some other text</label>
            </div>
            <div id="caption12" class="caption">
                <label class="title" for="modal-umbrella" onclick="showUmbrellaDetails(5);">T-Virus spreads</label>
                <label class="text">Some other text some other text some other text some other text some other text</label>
            </div>
            <div id="caption13" class="caption">
                <label class="title" for="modal-umbrella" onclick="showUmbrellaDetails(6);">A warrior rises</label>
                <label class="text">Some other text some other text some other text some other text some other text</label>
            </div>
            <div id="caption14" class="caption">
                <label class="title" for="modal-umbrella" onclick="showUmbrellaDetails(13);">Japanese headquarters destroyed</label>
                <label class="text">Some other text some other text some other text some other text some other text</label>
            </div>
        </div>

        <input class="modal-state" id="modal-umbrella" type="checkbox" />
        <div class="modal">
            <label class="modal__bg" for="modal-umbrella"></label>
            <div class="modal__inner">
                <label class="modal__close" for="modal-umbrella"></label>
                <h2 class="modal-title">Umbrella opens for business</h2>
                <p class="modal-content"><img class="modal-img" src="//cdn.wovendigitaldev.com/resident-evil/images/umbrella.png" alt="" /><label class="modal-text">Umbrella, a large pharmaceutical manufacturer, establishes its headquarters in Raccoon City. There it begins manufacturing the T-Virus - designed by Umbrella's scientists to reanimate dead cells - in an underground lab known as The Hive.</label></p>
            </div>
        </div>

        <!--image id="sec4-text" src="//cdn.wovendigitaldev.com/resident-evil/images/sec4-text.png"/-->
        <div id="sec4-text-div" class="text-content-div cre-animate opacity-0" data-animation="slide-up-from-bottom" data-speed="2000" data-delay="0" data-offset="100" data-easing="ease">
            <p>
                As the events represented in the timeline make clear, Umbrella's rise to power under the nefarious likes of Albert Wesker and Dr. Isaacs proved disastrous for the planet. And yet hope emerged in the form of Alice (a.k.a. Janus Prospero), who rose from the ashes of the zombie-infested world to battle the forces of evil.
                <br/><br/>
                In The Final Chapter, Alice returns to face off with Umbrella and its minions one last time, bringing a few old and new friends along for support. Below, you can find a brief rundown of the new and returning heroes and villains featured in the latest installment.
            </p>
        </div>

        <div class="align-center">
            <img id="the-breakdown-title" src="//cdn.wovendigitaldev.com/resident-evil/images/thebreakdown.png">
        </div>
    </div>

    <!-- Breakdown Video -->
    <div id="sec3-video" class="video-div" data-autoplay="1" data-is-playing="0">
        <div class="video-inner-div">
            <video id="sec3-video" data-video-id="5287576509001" data-account="3751376962001"
                   data-player="ea03b667-4f7f-491d-90f1-54a73b1a589a" data-embed="default" class="video-js"
                   controls=""
                   style="width: 100%; height: 100%; position: absolute; top: 0px; bottom: 0px; right: 0px; left: 0px;"></video>
        </div>
        <button class="video-play-btn" id="sec3-play-btn"></button>
    </div>
</section>


<section id="sec3">
    <div id="sec3-div">
        <div id="sec3-stage1-div" class="character-evo-stage">
            <img class="character-evo-title" src="//cdn.wovendigitaldev.com/resident-evil/images/character_evolution_title.png">
            <ul class="character">
                <img class="portrait" onclick="showStars();" src="//cdn.wovendigitaldev.com/resident-evil/images/alice.png">
                <button class="stars-btn" onclick="showStars();"></button>
            </ul>
            <ul class="character">
                <img class="portrait" onclick="showUmbrellaCorp();" src="//cdn.wovendigitaldev.com/resident-evil/images/albert-wesker.png">
                <button class="umbrella-corp-btn" onclick="showUmbrellaCorp();"></button>
            </ul>
        </div>

        <div id="sec3-stage2-stars-div" class="character-evo-stage">
            <button class="back-btn" onclick="showCharacterEvo();"></button>
            <img class="umbrella-corp-title" src="//cdn.wovendigitaldev.com/resident-evil/images/character_evolution_title.png"><br/>
            <div class="characters">
                <div class="character" onclick="showCharacterProfile('star1');">
                    <img class="portrait" src="//cdn.wovendigitaldev.com/resident-evil/images/alice.png">
                    <button class="bad-guy-btn">Alice</button>
                </div>
                <div class="character" onclick="showCharacterProfile('star2');">
                    <img class="portrait" src="//cdn.wovendigitaldev.com/resident-evil/images/claire.png">
                    <button class="bad-guy-btn">Claire Redfield</button>
                </div>
                <div class="character" onclick="showCharacterProfile('star3');">
                    <img class="portrait" src="//cdn.wovendigitaldev.com/resident-evil/images/abigail.png">
                    <button class="bad-guy-btn">Abigail</button>
                </div>
                <!--div class="character" onclick="showCharacterProfile('star4');">
                    <img class="portrait" src="//cdn.wovendigitaldev.com/resident-evil/images/character1.png">
                    <button class="bad-guy-btn">Doc</button>
                </div-->
            </div>
        </div>

        <div id="sec3-stage2-umbrellas-div" class="character-evo-stage">
            <button class="back-btn" onclick="showCharacterEvo();"></button>
            <img class="umbrella-corp-title" src="//cdn.wovendigitaldev.com/resident-evil/images/character_evolution_title.png"><br/>
            <div class="characters">
                <div class="character" onclick="showCharacterProfile('umbrella1');">
                    <img class="portrait" src="//cdn.wovendigitaldev.com/resident-evil/images/albert-wesker.png">
                    <button class="bad-guy-btn">Albert Wesker</button>
                </div>
                <div class="character" onclick="showCharacterProfile('umbrella2');">
                    <img class="portrait" src="//cdn.wovendigitaldev.com/resident-evil/images/isaacs.png">
                    <button class="bad-guy-btn">Dr. Alexander Isaacs</button>
                </div>
                <div class="character" onclick="showCharacterProfile('umbrella3');">
                    <img class="portrait" src="//cdn.wovendigitaldev.com/resident-evil/images/red-queen.png">
                    <button class="bad-guy-btn">Red Queen</button>
                </div>
                <!--div class="character" onclick="showCharacterProfile('umbrella4');">
                    <img class="portrait" src="//cdn.wovendigitaldev.com/resident-evil/images/character1.png">
                    <button class="bad-guy-btn">Commander Lee</button>
                </div-->
            </div>
        </div>

        <div id="sec3-stage3-div" class="character-evo-stage">
            <button class="back-btn" id="back-stars-btn" onclick="showStars();"></button>
            <button class="back-btn" id="back-umbrellas-btn" onclick="showUmbrellaCorp();"></button>

            <img id="profile-portrait" alt="" />
            <h2 id="profile-title"></h2>
            <p id="profile-content"></p>
        </div>

        <div id="sec3-text-div" class="text-content-div cre-animate opacity-0" data-animation="slide-up-from-bottom" data-speed="2000" data-delay="0" data-offset="100" data-easing="ease">
            <p>
                One of the most refreshing elements of <em>Resident Evil</em> as an action franchise is the plethora of strong, multi-cultural female characters at the forefront, from the first film's Rain Ocampo (Michelle Rodriguez) to Jill Valentine (Sienna Guillory) and Ada Wong (Bingbing Li).
                <br/><br/>
                While a few action films prior to <em>Resident Evil</em> featured women as protagonists, the sheer scope and variety of female characters on display is nearly unprecedented for the genre. Below, Fandemonium host Miri Jedeikin discusses the series' significant contributions to female representations in the action/sci-fi pantheon with guests Clarke Wolfe and Sasha Perl-Raver.
            </p>
        </div>
    </div>
</section>

<!-- Fandemonium-->
<section id="sec5">
    <!-- Fandemonium -->
    <div class="align-center">
        <img id="fandemonium-video-title" src="//cdn.wovendigitaldev.com/resident-evil/images/fandemonium_video.png">
    </div>
    <div id="sec4-video" class="video-div" data-autoplay="1" data-is-playing="0">
        <div class="video-inner-div">
            <video id="sec4-video" data-video-id="5287593384001" data-account="3751376962001"
                   data-player="ea03b667-4f7f-491d-90f1-54a73b1a589a" data-embed="default" class="video-js"
                   controls=""
                   style="width: 100%; height: 100%; position: absolute; top: 0px; bottom: 0px; right: 0px; left: 0px;"></video>
        </div>
        <button class="video-play-btn" id="sec4-play-btn"></button>
    </div>

    <div id="sec4-text-div2">
        <h2 class="text-title cre-animate opacity-0" data-animation="slide-up-from-bottom" data-speed="2000" data-delay="0" data-offset="100" data-easing="ease">
            Woman With No Name: How <em>Resident Evil'</em>s Alice Changed the Game for Women in Action Movies
        </h2>
        <p class="cre-animate opacity-0" data-animation="slide-up-from-bottom" data-speed="2000" data-delay="0" data-offset="100" data-easing="ease">
            "I wanted her to be the female Dirty Harry," says Milla Jovovich - very un-Alice-like in stylish pumps and full makeup - while doing promotional rounds for <em>Resident Evil: The Final Chapter</em>. "I think she's this iconic, mysterious 'guy riding off into the sunset' sort of character, but like a sci-fi version."
            <br/><br/>
            With this vivid description, Jovovich could be talking about no one but Alice, the enduring hero of Sony/Screen Gems' phenomenally successful sci-fi/action franchise which over the course of five films has grossed nearly a billion dollars worldwide. Though earlier sci-fi/action heroines like Sigourney Weaver's Ellen Ripley (<em>Alien</em>) and Linda Hamilton's Sarah Connor (<em>The Terminator</em>) paved the way for women in the genre, when Jovovich signed on for the first <em>Resident Evil</em> in 2001, female-driven action films in Hollywood were still few and far between.
            <br/><br/>
            "When we made the first <em>Resident Evil</em>, you would never have been able to get this movie made in Hollywood. ...to have women be at the forefront of the action," Jovovich continues. "I mean, you couldn't pay somebody to make that movie."
            <br/><br/>
            One undeniable factor that tipped the scales in the project's favor was the blockbuster success of the <em>Resident Evil</em> video games, which guaranteed a built-in fan base for the feature-film version. While Alice was a character created specifically for the movie, one of the two playable characters in the very first <em>Resident Evil</em> game was Jill Valentine (played in the films by Sienna Guillory), a female member of the elite special forces unit known as S.T.A.R.S. "Even my little brother played Jill Valentine, you know?" notes Jovovich. "He was playing the girls as well."
            <br/><br/>
        </p>
        <p class="cre-animate opacity-0" data-animation="slide-up-from-bottom" data-speed="2000" data-delay="0" data-offset="100" data-easing="ease">
            What makes the success of <em>Resident Evil</em> even more remarkable is that the films center on an entire stable of strong, capable, multicultural women, including allies/occasional enemies Rain Ocampo (Michelle Rodriguez), Ada Wong (Li Bingbing) and arguably the most fan-beloved of all, Ali Larter's Claire Redfield, who has returned for her third go-round in <em>The Final Chapter</em>.
            <br/><br/>
            "I loved when I first read Claire because she was someone who was very calm," says Larter of what originally attracted her to the character she debuted in the franchise's third installment, <em>Resident Evil: Extinction</em>. "She was like a fearless leader."
            <br/><br/>
            "Milla has really spearheaded, and was one of the first women to frontline any action movies," Larter continues. The fact that we're now in our sixth one and still female-led, that's the real story for me. And the fact that we haven't been pitted against each other, that we haven't fallen into those traps. We build each other up. We're there to support each other. And I think that's something that makes it different and really special."
            <br/><br/>
            As far as director-writer-producer Paul W.S. Anderson - who helmed the first, fourth and fifth entries of the series and returns to direct <em>The Final Chapter</em> - is concerned, Jovovich is the central reason for the franchise's massive success. "She's so committed," says the filmmaker, whom Jovovich married in 2009. "She really gives her all to these movies. In this film, there's a scene where we hang her upside down, we beat on her. She'll go through any physical discomfort for the good of the film. What you need for a film like this is an actor who will be fully committed, because she makes you believe the world."
            <br/><br/>
            Perhaps most striking for an action franchise centered on women, Alice and her female allies rarely talk about men - unless said talk involves taking down the diabolical likes of Umbrella head honchos Albert Wesker and Dr. Isaacs. In this way, they call to mind such iconic male action heroes as Steve McQueen, Sylvester Stallone and, yes, Clint Eastwood in their tendency to use the fewest amount of words possible to get their point across.
            <br/><br/>
            "That's what I feel these characters are. They're harkening back to the Clint Eastwoods of the world," says Anderson, who counts himself an avid fan of the films featuring Eastwood's Man With No Name and tough-guy icon Steve McQueen. Adds Jovovich, "When you watch those kind of movies, especially from the '70s, the hero always just had this attitude. And it wasn't about talking too much. It was actually about cutting any dialogue that just didn't seem to need to be there essentially. And that was a big inspiration for Alice."
            <br/><br/>
            As the films' impressive box-office totals prove, audiences - both male and female - are more than willing to shell out their hard-earned money to see women warriors do battle with evildoers, and as a result Alice has become the most prolific action heroine of the 21st century. As Anderson points out, an argument could be made that she helped pave the way for more female-led action movies to get the Hollywood greenlight.
            <br/><br/>
            "I think it definitely has had an influence," says the director. "Hollywood is an industry that follows the money. And if you can make money out of women [action heroes], Hollywood's gonna do it. I think they needed an example, though. And I think when <em>Resident Evil</em> started to really kick and be successful, I think it kinda made it easier for studios to put other women as the lead of other movies."
        </p>

        <img id="trailer-video-header-img" class="cre-animate opacity-0" data-animation="fade-in" data-speed="2000" data-delay="0" data-offset="100" data-easing="ease" src="//cdn.wovendigitaldev.com/resident-evil/images/trailer-video-header.png">
    </div>

    <!--div class="accordion-slider">
        <ul>
            <li style="background:url(//cdn.wovendigitaldev.com/resident-evil/images/fandemonium1.jpg) -25px 0 no-repeat">
                <div class="slide-caption">
                    <h1>Caption title</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in lorem vitae nibh
                        ultrices adipiscing. In fringilla auctor mauris ac mollis.</p>
                </div>
            </li>
            <li style="background:url(//cdn.wovendigitaldev.com/resident-evil/images/fandemonium2.jpg) -25px 0 no-repeat">
                <div class="slide-caption">
                    <h1>Caption title</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in lorem vitae nibh
                        ultrices adipiscing. In fringilla auctor mauris ac mollis.</p>
                </div>
            </li>
            <li style="background:url(//cdn.wovendigitaldev.com/resident-evil/images/fandemonium3.jpg) -25px 0 no-repeat">
                <div class="slide-caption">
                    <h1>Caption title</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in lorem vitae nibh
                        ultrices adipiscing. In fringilla auctor mauris ac mollis.</p>
                </div>
            </li>
            <li style="background:url(//cdn.wovendigitaldev.com/resident-evil/images/fandemonium4.jpg) -25px 0 no-repeat">
                <div class="slide-caption">
                    <h1>Caption title</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in lorem vitae nibh
                        ultrices adipiscing. In fringilla auctor mauris ac mollis.</p>
                </div>
            </li>
            <li style="background:url(//cdn.wovendigitaldev.com/resident-evil/images/fandemonium5.jpg) -25px 0 no-repeat">
                <div class="slide-caption">
                    <h1>Caption title</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in lorem vitae nibh
                        ultrices adipiscing. In fringilla auctor mauris ac mollis.</p>
                </div>
            </li>
        </ul>
    </div>
    <img id='fandemonium-title' src="//cdn.wovendigitaldev.com/resident-evil/images/fandemonium_title.png">
    <div id="sec5-text-div" style="margin-top: -20px;">
        <p>
            What makes the success of Resident Evil even more miraculous is that the films center on an entire stable of strong, capable, multi-cultural women, including allies/occasional enemies Rain Ocampo (Michelle Rodriguez), Ada Wong (Li Bingbing) and arguably the most fan-beloved of all, Ali Larter's Claire Redfield, who has returned for her third go-round in The Final Chapter.
            <br/><br/>
            "I loved when I first read Claire because she was someone who was very calm," says Larter of what originally attracted her to the character she debuted in the franchise's third installment, Resident Evil: Extinction. "She was like a fearless leader.
            <br/><br/>
            "Milla has really spearheaded, and was one of the first women to frontline any action movies," Larter continues. The fact that we're now in our sixth one and still female-led, that's the real story for me. And the fact that we haven't been pitted against each other, that we haven't fallen into those traps. We build each other up. We're there to support each other. And I think that's something that makes it different and really special."
            <br/><br/>
            As far as director-writer-producer Paul W.S. Anderson - who helmed the first, fourth and fifth entries of the series and returns to direct The Final Chapter - is concerned, Jovovich is the central reason for the franchise's massive success. "She's so committed," says the filmmaker, whom Jovovich married in 2009. "She really gives her all to these movies. In this film, there's a scene where we hang her upside down, we beat on her. She'll go through any physical discomfort for the good of the film. What you need for a film like this is an actor who will be fully committed, because she makes you believe the world."
            <br/><br/>
            Perhaps most striking for an action franchise centered on women, Alice and her female allies rarely talk about men - unless said talk involves taking down the diabolical likes of Umbrella head honchos Albert Wesker and Dr. Isaacs. In this way, they call to mind such iconic male action heroes as Steve McQueen, Sylvester Stallone and, yes, Clint Eastwood in their tendency to use the fewest amount of words possible to get their point across.
            <br/><br/>
            "That's what I feel these characters are. They're harkening back to the Clint Eastwoods of the world," says Anderson, who counts himself an avid fan of the films of Eastwood and McQueen. Adds Jovovich, "When you watch those kind of movies, especially from the '70s, the hero always just had this attitude. And it wasn't about talking too much. It was actually about cutting any dialogue that just didn't seem to need to be there essentially. And that was a big inspiration for Alice."
            <br/><br/>
            As the films' impressive box-office totals prove, audiences - both male and female - are more than willing to shell out their hard-earned money to see women warriors do battle with evildoers, and as a result Alice has become the most prolific action heroine of the 21st century. As Anderson points out, an argument could be made that she helped pave the way for more female-led action movies to get the Hollywood greenlight.
            <br/><br/>
            "I think it definitely has had an influence," says the director. "Hollywood is an industry that follows the money. And if you can make money out of women [action heroes], Hollywood's gonna do it. I think they needed an example, though. And I think when Resident Evil started to really kick and be successful, I think it kinda made it easier for studios to put other women as the lead of other movies."
        </p>
        <img class="title-full-img" src="//cdn.wovendigitaldev.com/resident-evil/images/resident_evil_title_full.png">
    </div-->
</section>

<section id="sec6">
    <!-- Start of Brightcove Player -->
    <div id="sec5-video" class="video-div" data-autoplay="1" data-is-playing="0">
        <div class="video-inner-div">
            <video id="sec5-video" data-video-id="5278838810001" data-account="3751376962001"
                   data-player="ea03b667-4f7f-491d-90f1-54a73b1a589a" data-embed="default" class="video-js"
                   controls=""
                   style="width: 100%; height: 100%; position: absolute; top: 0px; bottom: 0px; right: 0px; left: 0px;"></video>
        </div>
        <button class="video-play-btn" id="sec5-play-btn"></button>
    </div>
</section>

<?php include 'footer.php'; ?>
