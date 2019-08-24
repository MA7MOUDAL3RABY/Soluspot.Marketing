<template>
<section id="slider">
    <template>
        <v-carousel cycle height="100vh" hide-delimiters show-arrows-on-hover>
            <v-carousel-item class="slideItem" v-for="slide in slides" :key="slide">
                <v-sheet id="sheet" height="100%">
                    <v-container grid-list-xl text-center>
                        <v-layout fill-height wrap>
                            <v-flex xs12 sm6 md6 justify-center>
                                <div class="sliderTxt display-3 mt-5 mb-2 text-center">{{ $t('slider.' + slide.txt) }} </div>
                            </v-flex>
                            <v-flex xs12 sm6 md6>
                                <v-img class="sliderImg" :src="slide.url"></v-img>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
    </template>
</section>
</template>

<script>
export default {
    name: 'Slider',
    data() {
        return {
            slides: [{
                    url: require('../../assets/img/Home/Slider/eventorganization.png'),
                    alt: 'Event organization',
                    txt: 'EventOrganization',
                },
                {
                    url: require('../../assets/img/Home/Slider/chatbot.png'),
                    alt: 'chatbot',
                    txt: 'Chatbot',
                },
                {
                    url: require('../../assets/img/Home/Slider/strategicMarketing.png'),
                    alt: 'strategic Marketing',
                    txt: 'StrategicMarketing',
                },
                {
                    url: require('../../assets/img/Home/Slider/DigitalMarketing.png'),
                    alt: 'Digital Marketing',
                    txt: 'DigitalMarketing',
                },
                {
                    url: require('../../assets/img/Home/Slider/Branding.png'),
                    alt: 'Branding',
                    txt: 'Branding',
                },
                {
                    url: require('../../assets/img/Home/Slider/webDesign.png'),
                    alt: 'Web Design & Development',
                    txt: 'WebDesign',
                },

            ],
        };
    },
};
</script>

<style lang="scss">
section#slider {
    background-image: url('../../assets/img/curve-bg.png');
    background-size: cover;
    display: flex;
    font-family: 'Cairo', 'Dosis';
    justify-content: center;
    align-items: center;

    .v-sheet {
        background: none !important;
        padding-top: 3%;
    }

    .slideItem {
        background-color: transparent;

    }

    .sliderTxt {
        padding-top: 3em;
        color: #191919;
        font-family: 'Cairo', 'Dosis' !important;


        @media(max-width: 576px) {
            padding-top: 0;
        }
    }

    .sliderImg {
        margin-top: 1em;
        width: 90%;

        @media(max-width: 567px) {
            margin-top: 0
        }
    }
}
</style>
