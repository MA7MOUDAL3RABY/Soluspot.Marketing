<template>
<nav id="SocialBar">
    <v-toolbar>
        <v-container grid-list>
            <v-layout wrap>
                <v-spacer></v-spacer>
                <v-flex md3 xs12>
                    <v-app-bar-nav-icon href="https://www.facebook.com/SoluSpotLLC" target="_blank">
                        <v-icon>mdi-facebook</v-icon>
                    </v-app-bar-nav-icon>
                    <v-app-bar-nav-icon href="https://www.instagram.com/soluspotllc" target="_blank">
                        <v-icon>mdi-instagram</v-icon>
                    </v-app-bar-nav-icon>
                    <v-app-bar-nav-icon href="https://twitter.com/soluspotllc" target="_blank">
                        <v-icon>mdi-twitter</v-icon>
                    </v-app-bar-nav-icon>
                    <v-app-bar-nav-icon href="https://www.linkedin.com/company/soluspotllc" target="_blank">
                        <v-icon>mdi-linkedin</v-icon>
                    </v-app-bar-nav-icon>
                    <v-app-bar-nav-icon href="https://www.pinterest.com/soluspotLLC" target="_blank">
                        <v-icon>mdi-pinterest</v-icon>
                    </v-app-bar-nav-icon>
                    <v-app-bar-nav-icon href="https://api.whatsapp.com/send?phone=201032371777&text=welcome%20" target="_blank">
                        <v-icon>mdi-whatsapp</v-icon>
                    </v-app-bar-nav-icon>
                </v-flex>
                <v-spacer></v-spacer>
            </v-layout>
        </v-container>
    </v-toolbar>
</nav>
</template>

<script>
export default {
    name: 'SocialBar',
};
</script>

<style lang="scss" scoped>
#SocialBar {
    background-color: #ffffff;

    .v-icon
    {
        color: #191919 !important;
    }
}
</style>
