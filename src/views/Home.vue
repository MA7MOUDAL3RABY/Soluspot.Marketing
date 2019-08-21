<template>
<section>
    <Slider/>
    <OurServices/>
    <SuccessStories/>
    <SuccessPartners/>
    <HomeBlog/>
    <ContactUs/>
</section>
</template>

<script>
import Slider from '@/components/Home/Slider.vue';
import OurServices from '@/components/Home/OurServices.vue';
import SuccessStories from '@/components/Home/SuccessStories.vue';
import SuccessPartners from '@/components/Home/SuccessPartners.vue';
import HomeBlog from "@/components/Blog/HomeBlog.vue";
import ContactUs from "@/components/Home/ContactUs.vue";

export default {
  name: 'Home',
  components: {
    Slider,
    OurServices,
    SuccessStories,
    SuccessPartners,
    HomeBlog,
    ContactUs,
  },
};
</script>
