import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({ 
    icons: {
        iconfont: "mdi"
    },
    theme: {
        themes: {
          light: {
            primary: '#ef941a',
            secondary: '#ef941a',
            accent: '#ef941a',
            error: '#ef941a',
          },
        },
      },
});
