<template>
<section id="About-header" :dir="$t('dir')">
    <header id="header">
        <v-container grid-list-xl>
            <v-layout wrap>
                <v-flex md6 xl12>
                    <div class="SectionTitle">
                        <p v-html="$t('AboutUs.Title')"></p>
                    </div>
                </v-flex>
                <v-flex md6 xl12>
                    <V-img width="90%" :src="require('../../assets/img/About/header-About.png')"></V-img>
                </v-flex>
            </v-layout>
        </v-container>
    </header>
</section>
</template>

<script>
export default {
    name: 'Header',

};
</script>

<style lang="scss">
section#About-header {
    #header {

        background-image: url('../../assets/img/curve-bg.png');
        background-size: cover;
        height: 100vh;

        .SectionTitle {
            display: flex;
            font-size: 4em;
            height: 100%;
            justify-content: center;
            align-items: center;

        }
    }

}
</style>
