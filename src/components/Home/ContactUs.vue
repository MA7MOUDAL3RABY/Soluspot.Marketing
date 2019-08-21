<template>
<section id="ContactUs">
    <h3 class="SectionTitle text-center mt-5 mb-5">Contact Us</h3>
    <v-container grid-list-md>
        <v-layout wrap align-content-space-around>
            <v-flex md6 xs12>

                <v-card>
                    <v-tabs class="text-left" vertical grow text-left>
                        <v-tab>
                            <v-icon left>mdi-phone</v-icon>
                            Phone
                        </v-tab>
                        <v-tab>
                            <v-icon left>mdi-map-marker</v-icon>
                            Address
                        </v-tab>
                        <v-tab>
                            <v-icon left>mdi-email</v-icon>
                            Email
                        </v-tab>
                        <v-tab>
                            <v-icon left>mdi-web</v-icon>
                            Social Media
                        </v-tab>

                        <v-tab-item>
                            <v-card flat>
                                <v-card-text class="vc">
                                    <v-container>
                                        <v-layout wrap>
                                            <v-flex md12 xs12>
                                                <span style="color: #ef941a;font-weight: bold">Egypt</span>:<br />
                                                <v-icon small> </v-icon><a href="tel:+01032371777">+20 10-323-71777</a>
                                            </v-flex>
                                            <hr />
                                            <v-flex md12 xs12>
                                                <span style="color: #ef941a;font-weight: bold">Kuwait</span>:<br />
                                                <v-icon small> </v-icon> <a href="tel:+96598006676">+965-9800-6676</a>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card flat>
                                <v-card-text class="vc">
                                    <v-container>
                                        <v-layout wrap>
                                            <v-flex md12 xs12>
                                                <v-icon small>mdi-address</v-icon> <span style="color: #ef941a;font-weight: bold">Egypt</span>:<br />13 Abd El-Aziz Talaat,
                                                Al Manteqah as Sadesah,
                                                Nasr City, Cairo Governorate
                                            </v-flex>
                                            <v-divider></v-divider>
                                            <v-flex md12 xs12>
                                                <v-icon small>mdi-address</v-icon> <span style="color: #ef941a;font-weight: bold">Kuwait</span>:<br /> Kuwait branch: Fahaheel City - Kuwait
                                            </v-flex>
                                        </v-layout>
                                    </v-container>

                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item class="vc" fill-height>
                            <v-card flat>
                                <v-card-text>
                                    <span style="font-size: 17px;font-weight: bold;margin-top: 15% !important"> <a href="mailto:Info@soluspot.com">Info@soluspot.com </a>
                                        <v-icon>mdi-pop-up</v-icon>
                                    </span>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item class="vc">
                            <v-card flat>
                                <v-card-text style="margin-top: 15%">
                                    <SocialLinks />
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs>
                </v-card>
            </v-flex>
            <v-flex md6 xs12>
                <ContactUsForm />
            </v-flex>
        </v-layout>
    </v-container>
</section>
</template>

<script>
import ContactUsForm from '@/components/Forms/ContactUs.vue';
import SocialLinks from '@/components/Bars/Social.vue';
export default {
    name: 'ContactUs',
    components: {
        ContactUsForm,
        SocialLinks,
    },

};
</script>

<style lang="scss" scoped>
section#ContactUs {
    .HomeContactUsForm {
        border-radius: 5px;
        border: 2px solid #ef941a;
        padding: 10px;
        background-color: #fff;
        box-shadow: 0 0 3px 1px #00000055
    }
    .v-tab{
        justify-content: left;
    }

}
</style>
