<template>
<section>
    <Slider/>
    <OurServices/>
    <SuccessStories/>
</section>
</template>

<script>
import Slider from '@/components/Home/Slider.vue';
import OurServices from '@/components/Home/OurServices.vue';
import SuccessStories from '@/components/Home/SuccessStories.vue';

export default {
  name: 'Home',
  components: {
    Slider,
    OurServices,
    SuccessStories,
  },
};
</script>
