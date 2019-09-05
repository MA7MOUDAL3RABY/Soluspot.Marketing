<template>
<section id="Whyus" :dir="$t('dir')">
    <v-container grid-list-{xs through xl}>
        <div class="container">
            <v-layout wrap>

                <v-flex order-xs2 order-sm1 md6 xs12>
                    <v-img width="85%" :src="require('../../assets/img/About/Why-us.png')"></v-img>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex style="padding-top: 10%" order-xs1 order-sm2 md6 xs12>
                   <h3 class="SectionTitle" v-html="$t('AboutUs.WhyUs.Title')"></h3>
                    <hr>
                    <p v-html="$t('AboutUs.WhyUs.parg.one')"></p>
                    <p v-html="$t('AboutUs.WhyUs.parg.Tow')"></p>
                    <p v-html="$t('AboutUs.WhyUs.parg.Three')"></p>

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
