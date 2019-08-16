<template>
<v-app>
  <vue-element-loading :active="show" spinner="spinner" color="#FF6700"/>

    <Navbar />
    <v-content>
        <router-view />
    </v-content>
</v-app>
</template>

<script>
import Navbar from './components/Bars/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
  data: () => ({
    //
  }),
};
</script>
