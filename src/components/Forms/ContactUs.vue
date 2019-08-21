<template>
<form  netlify class="HomeContactUsForm">
    <v-text-field v-model="name" v-validate="'required|max:10'" :counter="15" :error-messages="errors.collect('name')" label="Name" data-vv-name="name" required></v-text-field>
    <v-text-field v-model="email" v-validate="'required|email'" :error-messages="errors.collect('email')" label="E-mail" data-vv-name="email" required></v-text-field>
    <v-text-field v-model="phone" v-validate="'required|numeric|min:6|max:15'" :error-messages="errors.collect('phone')" label="Mobile" data-vv-name="phone" required></v-text-field>
    <v-textarea v-model="textarea" v-validate="'required|alpha_num'" :error-messages="errors.collect('message')" label="Your Message" data-vv-name="message" required></v-textarea>
    <v-btn class="mr-4 btn" @click="submit">Send <v-icon small>mdi-send</v-icon></v-btn>
</form>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

export default {
    $_veeValidate: {
        validator: 'new',
    },

    data: () => ({
        name: '',
        email: '',
        phone: '',
        textarea: '',

        dictionary: {
            attributes: {
                email: 'E-mail Address',
                // custom attributes
            },
            custom: {
                name: {
                    required: () => 'Name can not be empty',
                    max: 'The name field may not be greater than 15 characters',
                    // custom messages
                },
                phone: {
                    required: 'Mobile field is required',
                },
                message: {
                    required: 'message field is required',
                },
            },
        },
    }),

    mounted() {
        this.$validator.localize('en', this.dictionary)
    },

    methods: {
        submit() {
            this.$validator.validateAll()
        },
       
    },
}
</script>
