<template>
<nav id="SocialBar">
    <v-toolbar>
        <v-container grid-list>
            <v-layout wrap>
                <v-spacer></v-spacer>
                <v-flex md3 xs12>

                    <SocialLinks />

                </v-flex>
                <v-spacer></v-spacer>
            </v-layout>
        </v-container>
    </v-toolbar>
</nav>
</template>

<script>
import SocialLinks from '@/components/Bars/Social.vue';
export default {
    name: 'SocialBar',
    components: {
        SocialLinks,
    }
};
</script>

<style lang="scss" scoped>
#SocialBar {
    background-color: #ffffff;

    .v-icon {
        color: #191919 !important;
    }
}
</style>
