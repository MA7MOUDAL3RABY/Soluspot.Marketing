<template>
<section id="About-header">
    <header id="header">
        <v-container grid-list-xl>
            <v-layout wrap>
                <v-flex md6 xl12>
                    <div class="heading">
                        <p>About <span class="mc">Us</span></p>
                    </div>
                </v-flex>
                <v-flex md6 xl12>
                    <V-img :src="require('../../assets/img/About/header-About.png')"></V-img>
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
        height: 90vh;

        .heading {
            display: flex;
            font-size: 4em;
            height: 100%;
            justify-content: center;
            align-items: center;

        }
    }

}
</style>
