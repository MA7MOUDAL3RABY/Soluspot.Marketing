<template>
<section id="OurStory">
    <v-container grid-list-{xs through xl}>
        <div class="container">
            <v-layout wrap>
                <v-flex  style="padding-top: 10%" md6 xs12>
                    <h3 class="heading">
                        Our Story
                    </h3>
                    <hr>
                    <p>
                        Our story began when we decided to use our passion and vision, along with our work experience to share one idea and one dream
                    </p>
                    <p>
                        <b>The Idea…</b> is very simple but unique, it is about creating a new combination of Marketing and Technology Solutions to help your business to grow smoothly.

                    </p>
                    <p>
                        <b>The Dream…</b> started by establishing SoluSpot, a startup company based in Cairo, Egypt willing to work globally.
                    </p>

                </v-flex>

                <v-flex md6 xs12>
                    <v-img :src="require('../../assets/img/About/our-story.png')"></v-img>
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

        .heading {
            font-size: 2em;
            text-align: left;
            color: #ef941a;
            font-weight: bold;

            @media (max-width: 576px) {
                text-align: center;

            }

        }

}
</style>
