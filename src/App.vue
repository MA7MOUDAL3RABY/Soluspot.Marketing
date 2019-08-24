<template>
<v-app>
    <vue-element-loading :active="show" spinner="spinner" color="#FF6700" />

    <Navbar />
    <v-content>
        <router-view />
    </v-content>
</v-app>
</template>

<script>
import Navbar from './components/Bars/Navbar.vue';
import i18n from 'vue-i18n';
export default {
    name: 'App',
    components: {
        Navbar,
        i18n,
    },
};
</script>
