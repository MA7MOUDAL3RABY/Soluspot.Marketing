<template>
<section id="SuccessStories">
    <h3 class="SectionTitle text-center mt-5 mb-5">Success Stories</h3>
    <br /><br />
    <div class="container">
        <div uk-filter="target: .js-filter">
            <v-container grid-list-xl>
                <v-layout wrap class="uk-subnav uk-subnav-pill">
                    <v-flex col>
                        <v-btn class="w-btn w-100" uk-filter-control>All</v-btn>
                    </v-flex>
                    <v-flex col>
                        <v-btn class="w-btn  w-100" uk-filter-control="[data-filter='WebDesign']">Web Design</v-btn>
                    </v-flex>
                    <v-flex col>
                        <v-btn class="w-btn  w-100" uk-filter-control="[data-filter='SocialMedia']">Social Media</v-btn>
                    </v-flex>
                    <v-flex col>
                        <v-btn class="w-btn  w-100" uk-filter-control="[data-filter='Branding']">Branding</v-btn>
                    </v-flex>
                    <v-flex col>
                        <v-btn class="w-btn  w-100" uk-filter-control="[data-filter='EventOrganization']">Event Organization</v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
            <br />
            <div class="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" uk-grid uk-lightbox="animation: slide">
                <div v-for="item in items.slice(0, itemsCount)" :key="item" :data-filter="item.tag">
                    <a class="uk-inline" :href="item.img" :data-caption="item.name">
                        <v-img :src="item.img"></v-img>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <v-container>
        <v-layout wrap class="uk-subnav uk-subnav-pill">
            <v-spacer></v-spacer>
            <v-flex md2>
                <v-btn class="btn w-100" @click="itemsCount+= 3"><span v-if="$vuetify.breakpoint.smAndUp">Show More</span>
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </v-flex>
            <v-flex md2>
                <v-btn class="btn w-100" @click="itemsCount= 6"><span v-if="$vuetify.breakpoint.smAndUp">Show less</span>
                    <v-icon>mdi-minus</v-icon>
                </v-btn>
            </v-flex>
            <v-spacer></v-spacer>
        </v-layout>
    </v-container>
</section>
</template>

<script>
import mixitup from 'mixitup';
export default {
    name: 'SuccessStories',
    data() {
        return {
            items: [{
                    tag: "WebDesign",
                    img: require('../../assets/img/Home/SuccessStories/cadcamcim.jpg'),
                    link: 'link',
                    name: "Web Design"
                },
                {
                    tag: "SocialMedia",
                    img: require('../../assets/img/Home/SuccessStories/12-1024x612.jpg'),
                    link: 'link',
                    name: "Social Media"
                },
                {
                    tag: "Branding",
                    img: require('../../assets/img/Home/SuccessStories/IT-BUSINESS-CARD-MOCK-UP-min-1024x576.png'),
                    link: 'link',
                    name: "Branding"
                },
                {
                    tag: "SocialMedia",
                    img: require('../../assets/img/Home/SuccessStories/369-1024x612.jpg'),
                    link: 'link',
                    name: "Social Media"
                },
                {
                    tag: "Branding",
                    img: require('../../assets/img/Home/SuccessStories/MASTER-GOLD-MOCKUP.png'),
                    link: 'link',
                    name: "Branding"
                },
                {
                    tag: "SocialMedia",
                    img: require('../../assets/img/Home/SuccessStories/Lemon-2-1024x612.jpg'),
                    link: 'link',
                    name: "Social Media"
                },
                {
                    tag: "WebDesign",
                    img: require('../../assets/img/Home/SuccessStories/Screenshot_1-1024x468.png'),
                    link: 'link',
                    name: "WebDesign"
                },
                {
                    tag: "SocialMedia",
                    img: require('../../assets/img/Home/SuccessStories/15-1024x612.jpg'),
                    link: 'link',
                    name: "Social Media"
                },
                {
                    tag: "WebDesign",
                    img: require('../../assets/img/Home/SuccessStories/tower.jpg'),
                    link: 'link',
                    name: "Web Design"
                },
                {
                    tag: "Branding",
                    img: require('../../assets/img/Home/SuccessStories/DIGITAL-LAB-MOCK-UP-min-1024x655.jpg'),
                    link: 'link',
                    name: "Branding"
                },
                {
                    tag: "WebDesign",
                    img: require('../../assets/img/Home/SuccessStories/coffee.jpg'),
                    link: 'link',
                    name: "Web Design"
                },
                {
                    tag: "SocialMedia",
                    img: require('../../assets/img/Home/SuccessStories/B-080-1024x612.jpg'),
                    link: 'link',
                    name: "Social Media"
                },
                {
                    tag: "EventOrganization",
                    img: require('../../assets/img/Home/SuccessStories/cadcamcimEvent.png'),
                    link: 'link',
                    name: "Event Organization"
                },
                {
                    tag: "Branding",
                    img: require('../../assets/img/Home/SuccessStories/DIGITAL-LAB-1-1-1024x612.png'),
                    link: 'link',
                    name: "Branding"
                },
                {
                    tag: "WebDesign",
                    img: require('../../assets/img/Home/SuccessStories/coffee.jpg'),
                    link: 'link',
                    name: "Web Design"
                }
            ],
            itemsCount: 6,
        }
    },
}
</script>

<style lang="scss" scoped>
section#SuccessStories {
    padding: 2em 0;
    background-color: #fff
}
</style>
