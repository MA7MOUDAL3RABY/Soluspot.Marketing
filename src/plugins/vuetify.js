import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
    //  function() {
    //     let locale = VueCookie.get("locale");
    //     if (locale === "ar") {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // },
    
    icons: {
        iconfont: "mdi"
    }
});
