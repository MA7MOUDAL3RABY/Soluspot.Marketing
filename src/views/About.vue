<template>
<section id="About">
    <Header />
    <br />
    <OurStory />
    <Whyus />
    <v-container text-center>
        <v-btn class="btn" href="https://soluspot.marketing/company-profile" target="_blank">
            Company Profile
        </v-btn>
    </v-container>
    <br/>
    <SocialBar/>
</section>
</template>

<script>
import Header from '@/components/About/Header.vue';
import OurStory from '@/components/About/OurStory.vue';
import Whyus from '@/components/About/WhyUs.vue';
import SocialBar from '@/components/Bars/SocialBar.vue';

export default {
    name: 'About',
    components: {
        Header,
        OurStory,
        Whyus,
        SocialBar,
    },
};
</script>
