<template>
<section id="Whyus">
    <v-container grid-list-{xs through xl}>
        <div class="container">
            <v-layout wrap>

                <v-flex order-xs2 order-sm1 md6 xs12>
                    <v-img :src="require('../../assets/img/About/Why-us.png')"></v-img>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex style="padding-top: 10%" order-xs1 order-sm2 md6 xs12>
                    <h3 class="SectionTitle">
                        Why Soluspot
                    </h3>
                    <hr>
                    <p>
                        <b>Serving Solutions simply…</b> is our mission and passion.
                    </p>
                    <p>
                        <b>Your growth is our goal…</b> working with you to understand your objectives and budget, tailoring our services to suit your needs.
                    </p>
                    <p>
                        <b>Implementing our knowledge for your success…</b> ensuring that every part of your marketing plan is connected together, mapped to your objectives and achieving your goals.
                    </p>
                </v-flex>
            </v-layout>
        </div>
    </v-container>

</section>
</template>

<script>
export default {
    name: 'Whyus',

};
</script>

<style lang="scss">
section#Whyus {

    .SectionTitle {
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
