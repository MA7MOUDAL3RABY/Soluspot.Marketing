<template>
<section id="OurServices">
    <div class="bg-container">
        <h3 class="SectionTitle text-center mt-5 mb-5">{{ $t('OurServices.title') }}</h3>
        <v-container grid-list-md>
            <v-layout wrap align-content-space-around>
                <v-flex md4 xs12 v-for="card in Cards" :key="card">
                    <v-card class="card mx-auto text-center ">
                        <v-img class="card-img" width="100px" height="100px" :src="card.CardImg"> </v-img>
                        <v-card-title class="CardTitle fill-height">{{ $t(card.CardTitle) }}</v-card-title>
                        <v-card-text class="CardDisc"> {{ $t(card.CardDisc) }} </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</section>
</template>

<script>
export default {
    name: 'OurServices',
    data() {
        return {
            Cards: [{
                    CardImg: require('../../assets/img/Home/OurServicesCards/Brandingpng.png'),
                    CardTitle: 'OurServices.Branding.title',
                    CardDisc: 'OurServices.Branding.desc',

                },
                {
                    CardImg: require('../../assets/img/Home/OurServicesCards/Marketing.png'),
                    CardTitle: 'OurServices.DigitalMarketing.title',
                    CardDisc: 'OurServices.DigitalMarketing.desc',

                },
                {
                    CardImg: require('../../assets/img/Home/OurServicesCards/Chatbot.png'),
                    CardTitle: 'OurServices.WebBased.title',
                    CardDisc: 'OurServices.WebBased.desc',

                },
                {
                    CardImg: require('../../assets/img/Home/OurServicesCards/Content.png'),
                    CardTitle: 'OurServices.ContentCreation.title',
                    CardDisc: 'OurServices.ContentCreation.desc',

                },
                {
                    CardImg: require('../../assets/img/Home/OurServicesCards/Even.png'),
                    CardTitle: 'OurServices.EventOrganization.title',
                    CardDisc: 'OurServices.EventOrganization.desc',

                },
                {
                    CardImg: require('../../assets/img/Home/OurServicesCards/SEO.png'),
                    CardTitle: 'OurServices.SeoServices​.title',
                    CardDisc: 'OurServices.SeoServices​.desc',

                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
#OurServices {
    padding: 1.5cm 0;

    .bg-container {
        background: url('../../assets/img/shape-gradient.png') no-repeat;
        background-size: contain;
    }

    .SectionTitle {
        font-size: 2em;
    }

    .card {
        max-width: 350px;
        height: auto;
        margin: 1cm auto;

        .card-img {
            margin: 0 auto;
        }

        .CardTitle {
            min-height: 2.5cm;
            text-align: center !important;
        }

        .CardDisc {
            font-size: 15px;
            text-align: left;
            min-height: 2cm;

            @media (max-width: 567px) {
                text-align: center;
            }
        }
    }
}
</style>
