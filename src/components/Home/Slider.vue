<template>
<section id="slider">
    <template>
        <v-carousel cycle height="100vh" hide-delimiters show-arrows-on-hover>
            <v-carousel-item class="slideItem" v-for="slide in slides" :key="slide">
                <v-sheet id="sheet" height="100%">
                    <v-container grid-list-xl text-center>
                        <v-layout fill-height wrap>
                            <v-flex xs12 sm6 md6 justify-center>
                                <div class="sliderTxt display-3 mt-5 mb-2 text-center">{{ slide.txt }} </div>
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
                    url: require('../../assets/img/slider/eventorganization.png'),
                    alt: 'Event organization',
                    txt: 'Event organization',
                },
                {
                    url: require('../../assets/img/slider/chatbot.png'),
                    alt: 'chatbot',
                    txt: 'chatbot',
                },
                {
                    url: require('../../assets/img/slider/strategicMarketing.png'),
                    alt: 'strategic Marketing',
                    txt: 'strategic Marketing',
                },
                {
                    url: require('../../assets/img/slider/DigitalMarketing.png'),
                    alt: 'Digital Marketing',
                    txt: 'Digital Marketing',
                },
                {
                    url: require('../../assets/img/slider/Branding.png'),
                    alt: 'Branding',
                    txt: 'Branding',
                },
                {
                    url: require('../../assets/img/slider/webDesign.png'),
                    alt: 'Web Design & Development',
                    txt: 'Web Design',
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
