<template>
<section id="SuccessPartner" dir="ltr">
    <h3 class="SectionTitle text-center mt-5 mb-5">{{$t('Home.SuccessPartnrts.title')}}</h3>
    <br />
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>
        <div class="container">
            <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
                <li v-for="slide in slides" :key="slide">
                    <div class="container">
                        <v-img class="w-100" :src="slide.ImgURL"></v-img>
                    </div>
                </li>
            </ul>
        </div>
        <a class="slideArrow uk-position-center-left uk-position-small" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="slideArrow uk-position-center-right uk-position-small" href="#" uk-slidenav-next uk-slider-item="next"></a>
    </div>
</section>
</template>

<script>
export default {
    name: 'SuccessPartner',
    data() {
        return {
            slides: [{
                    ImgURL: require('../../assets/img/Home/SuccessPartners/logoCompoSince.jpg'),
                },
                {
                    ImgURL: require('../../assets/img/Home/SuccessPartners/logoCherry.jpg'),
                },
                {
                    ImgURL: require('../../assets/img/Home/SuccessPartners/logoCadcamcim.jpg'),
                },
                {
                    ImgURL: require('../../assets/img/Home/SuccessPartners/FAMILY-CLINIC.png'),
                },
                {
                    ImgURL: require('../../assets/img/Home/SuccessPartners/logoDA.jpg'),
                },
                {
                    ImgURL: require('../../assets/img/Home/SuccessPartners/logoDL.jpg'),
                },
                {
                    ImgURL: require('../../assets/img/Home/SuccessPartners/logoFitrition.jpg'),
                },
                {
                    ImgURL: require('../../assets/img/Home/SuccessPartners/logoHarhash.jpg'),
                },
                {
                    ImgURL: require('../../assets/img/Home/SuccessPartners/logoKuwaitStar.jpg'),
                },
                {
                    ImgURL: require('../../assets/img/Home/SuccessPartners/logoMasterGold.jpg'),
                },
                {
                    ImgURL: require('../../assets/img/Home/SuccessPartners/logoMepmaster.jpg'),
                },
                {
                    ImgURL: require('../../assets/img/Home/SuccessPartners/logoMsafer.jpg'),
                },
                {
                    ImgURL: require('../../assets/img/Home/SuccessPartners/logoRS.jpg'),
                },
                {
                    ImgURL: require('../../assets/img/Home/SuccessPartners/phobia.png'),
                },
                {
                    ImgURL: require('../../assets/img/Home/SuccessPartners/TOWER.png'),
                },
                {
                    ImgURL: require('../../assets/img/Home/SuccessPartners/COFFEE-LOGO.png'),
                },
            ],
        };
    },
};
</script>

<style lang="scss">
section#SuccessPartner {
    background-color: #fff;
    margin: 0;
    padding: 2em;

    .slideArrow {
        color: #000;
    }
    .uk-position-center-left
    {
        @media (max-width: 576px) {
            left: -25px !important;
        }
    }
    .uk-position-center-right
    {
        @media (max-width: 576px) {
            right: -25px !important;
        }
    }
}
</style>
