/* ------------- Vue ---------------*/
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
/* --------------- Vue ---------------*/

/* --------------- Vuetify ---------------*/
import vuetify from "./plugins/vuetify";
/* --------------- Vuetify ---------------*/

/* --------------- i18n ---------------*/
import i18n from "./i18n";
Vue.use(i18n);
/* --------------- i18n ---------------*/

/* --------------- Flag ---------------*/
import FlagIcon from "vue-flag-icon";
Vue.use(FlagIcon);
/* --------------- Flag ---------------*/

/* --------------- Style ---------------*/
import "./assets/scss/style.scss";
/* --------------- Style ---------------*/

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
    let lang = to.params.lang;
    if (!lang) {
        lang = "en";
    }
    i18n.locale = lang;
    next();
});

new Vue({
    data() {
        return {
           
            rtl: $t('rtl')
        };
    },
    created() {
        this.$vuetify.rtl = this.rtl;
    },
    router,
    store,
    vuetify,
    i18n,
    render: h => h(App)
}).$mount("#app");
