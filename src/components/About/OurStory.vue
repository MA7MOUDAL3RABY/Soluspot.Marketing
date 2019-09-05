<template>
<section id="OurStory" :dir="$t('dir')">
    <v-container grid-list-{xs through xl}>
        <div class="container">
            <v-layout wrap>
                <v-flex style="padding-top: 10%" md6 xs12>
                    <h3 class="SecTitle" v-html="$t('AboutUs.OurStory.Title')">
                    </h3>
                    <hr>
                    <p v-html="$t('AboutUs.OurStory.parg.one')"></p>
                    <p v-html="$t('AboutUs.OurStory.parg.Tow')"></p>
                    <p v-html="$t('AboutUs.OurStory.parg.Three')"></p>

                </v-flex>

                <v-flex md6 xs12>
                    <v-img width="85%" :src="require('../../assets/img/About/our-story.png')"></v-img>
                </v-flex>
            </v-layout>
        </div>
    </v-container>

</section>
</template>

<script>
export default {
    name: 'OurStory',

};
</script>

<style lang="scss">
section#OurStory {

    .SecTitle {
        font-size: 2em;
        color: #ef941a;
        font-weight: bold;

    }

}
</style>
