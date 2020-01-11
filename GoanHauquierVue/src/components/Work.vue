<template>
    <div id="work">
        <Header />
        
            <div class="title">
                <div class="top">
                    <h1>Mijn Opdrachten</h1>
                </div>
            </div>
            <div class="wrapper">
            <div class="item">
                <div>
                    <h2>Gulp</h2>
                    <div class="info">
                        <p>
                            De eerste opdracht die we toegewezen kregen dit academiejaar was kennis maken met Sass. Ik zocht enkele elementen op SoundCloud en maakte deze na met Sass en Gulp.
                        </p>
                        <p><a href="http://cloudsound.1819.goan.hauquier.nxtmediatech.eu/" target="_blank">Check Online</a></p>
                    </div>

                </div>
                <hr>
            </div>

            <div class="item">
                <div>
                    <h2>JQuery</h2>
                    <div class="info">
                        <p>
                            Om met JQuery te leren werken maakte ik een pizza calculator die zegt hoeveel je nodig hebt van welk ingrediënt om de gewenste hoeveelheid pizza te maken.
                        </p>
                        <p><a href="http://goanpizzacalculator.1819.goan.hauquier.nxtmediatech.eu/" target="_blank">Check Online</a></p>
                    </div>
                    
                </div>
                <hr>
            </div>

            <div class="item">
                <div>
                    <h2>Vue</h2>
                    <div class="info">
                        <p>
                            Mijn eerste Vue.js project. Ik heb gebruik gemaakt van PlaceholderJSON om een fake restAPI te maken om via axios data binnen te halen in mijn applicatie. Deze data display ik dan op mijn homepage.
                        </p>
                        <p><a href="https://github.com/GoanHauquier/vue-coffee-app" target="_blank">Check op GitHub</a></p>
                    </div>
                    
                </div>
                <hr>
            </div>

            <div class="item">
                <div>
                    <h2>Coole Websites</h2>
                    <div class="info">
                        <p>
                            De coolste websites die ik kon vinden waren deze:
                        </p>
                        <p><a href="https://garden-eight.com/" target="_blank">Garden Eight</a></p>
                        <p><a href="https://matthew.wagerfield.com/parallax/" target="_blank">Parallax.js</a></p>
                    </div>
                </div>
                <hr>
            </div>

            <div class="item">
                <div>
                    <h2>CodePen</h2>
                    <div class="info">
                        <p>
                            Op CodePen maakte ik enkele coole animaties:
                        </p>
                        <p><a href="https://codepen.io/goanhauquier/pen/JjjwBdb" target="_blank">3D Animatie</a></p>
                        <p><a href="https://codepen.io/goanhauquier/pen/jOOoqVr" target="_blank">Stuiterbal</a></p>
                    </div>
                </div>
                <hr>
            </div>

            <div class="item">
                <div>
                    <h2>Learning Video's</h2>
                    <div class="info">
                        <p>
                            De beste learning video's die ik de afgelopen periodes heb gekeken:
                        </p>
                        <p><a href="https://www.youtube.com/watch?v=Wy9q22isx3U" target="_blank">Vue Crash Course</a></p>
                        <p><a href="https://www.youtube.com/watch?v=fbzyUqvQRTA" target="_blank">JavaScript Page Transitions</a></p>
                        <p><a href="https://www.youtube.com/watch?v=2wr1iixy20I" target="_blank">Anime.JS</a></p>
                    </div>
                </div>
                <hr>
            </div>

            <div class="item">
                <div>
                    <h2>Deze Website!</h2>
                    <div class="info">
                        <p>
                            Deze website is volledig gebouwd met Vue en Sass!
                        </p>
                        <p>En ja, hij is ook nog eens Mobile Friendly ;)</p>
                    </div>
                </div>
                
            </div>

        </div>
        <div class="footer"></div>
    </div>
</template>

<script>
import Header from './Header';

export default {
    name: 'home',
    components: {
        Header,
        
    }
}

</script>

<style lang="scss">

$white: #fff;
$grey: #333333;
$lightgrey: #606060;

@keyframes fadein {
    0% {
        opacity: 0;
    }

    100%  {
        opacity: 1;
    }
}

@keyframes visib {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}


@media (min-width: 742px) {
    #work {
        width: 100vw;
    }

    .wrapper {
        text-align: center;
        width: 60vw;
        margin: auto;
        
    }
    .title h1 {
        padding: 50px;
        margin: 0;
        color: $white;
    }

    .title {
        padding-bottom: 50px;
    }

    .item {
        margin-bottom: 25px;
        box-shadow: $grey 5px 5px 10px;
        animation: fadein 2s ease-in-out;
        
        
    }
    @for $i from 1 through 7 {
        .item {
    
                // :nth-child(1-9) 
             &:nth-child(#{$i}) {
      
                // Delay the animation. Delay increases as items loop.
                animation-delay: $i * (0.01s);
                
            }
            
        }
    }
    .info p {
        text-align: center;
        
    }
    h1 {
        font-size: 1.3em;
    }
    h2 {
        font-size: 1.2em;
    }
    p {
        padding: 25px;
        font-size: 1em;

    }

    .footer {
        width: 100%;
        height: 100px;
        background-color: $lightgrey;
    }
    .top {
        background-color: $lightgrey;
        text-align: center;
    }
}

@media (max-width: 741px) {
    .wrapper {
        text-align: center;
    }
    .title h1 {
        padding: 50px;
        margin: 0;
        color: $white;
        text-align: center;
    }

    .title {
        padding-bottom: 50px;
    }
    .item {
        margin-bottom: 25px;
        animation: fadein 1.5s ease-in-out;
    }
    .info p {
        text-align: center;
    }
    h1 {
        font-size: 1.3em;
        
    }
    h2 {
        font-size: 1.2em;
    }
    p {
        padding: 25px;
        font-size: 1em;

    }

    .footer {
        width: 100%;
        height: 100px;
        background-color: $lightgrey;
    }
    .top {
        background-color: $lightgrey;
    }
}
</style>