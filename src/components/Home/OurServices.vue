<template>
<section id="OurServices">
    <div class="bg-container">
        <h3 class="SectionTitle text-center mt-5 mb-5">Our Integrated Services</h3>
        <v-container grid-list-md>
            <v-layout wrap align-content-space-around>
                <v-flex md4 xs12 v-for="card in OurServicesCard" :key="card">
                    <v-card class="card mx-auto text-center ">
                        <v-img class="card-img" width="100px" height="100px" :src="card.CardImg"> </v-img>
                        <v-card-title class="CardTitle fill-height">{{ card.CardTitle }}</v-card-title>
                        <v-card-text class="CardDisc"> {{ card.CardDisc }}</v-card-text>
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
            OurServicesCard: [{
                    CardImg: require('../../assets/img/Home/OurServicesCards/Brandingpng.png'),
                    CardTitle: 'Branding',
                    CardDisc: 'Ensure your brand awareness and business growth',

                },
                {
                    CardImg: require('../../assets/img/Home/OurServicesCards/Marketing.png'),
                    CardTitle: 'Digital Marketing & Advertising​',
                    CardDisc: 'Ensure your business is set-up for digital success',

                },
                {
                    CardImg: require('../../assets/img/Home/OurServicesCards/Chatbot.png'),
                    CardTitle: 'Web-Based Services',
                    CardDisc: 'Allow your business to select different web functions',

                },
                {
                    CardImg: require('../../assets/img/Home/OurServicesCards/Content.png'),
                    CardTitle: 'Content Creation',
                    CardDisc: 'The best-practice approach to marketing',

                },
                {
                    CardImg: require('../../assets/img/Home/OurServicesCards/Even.png'),
                    CardTitle: 'Event Organization',
                    CardDisc: 'Event Represents Your Significant Investment, And We’ll Make Sure Yours Pays Off.',

                },
                {
                    CardImg: require('../../assets/img/Home/OurServicesCards/SEO.png'),
                    CardTitle: 'SEO SERVICES​',
                    CardDisc: 'GET FOUND & drive qualified traffic to your website',

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
