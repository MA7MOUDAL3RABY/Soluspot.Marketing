<template>
<nav id="Navbar">
    <vue-app>
        <v-toolbar>
            <v-toolbar-title>
                <v-img id="logo" src="@/assets/img/logo.png" />
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <template v-if="$vuetify.breakpoint.mdAndUp">
                <v-toolbar-items>
                    <v-btn text>
                        <router-link active-class="active" class="router-link" to="/">
                            <v-icon>mdi-home</v-icon> Home
                        </router-link>
                    </v-btn>
                    <v-btn text>
                        <router-link active-class="active" class="router-link" to="/About">
                            <v-icon>mdi-account</v-icon> About
                        </router-link>
                    </v-btn>
                    <v-btn text>
                        <router-link active-class="active" class="router-link" to="/Services">
                            <v-icon>mdi-library</v-icon> Services
                        </router-link>
                    </v-btn>
                    <v-btn text>
                        <router-link active-class="active" class="router-link" to="/Blog">
                            <v-icon>mdi-script-text-outline</v-icon> Blog
                        </router-link>
                    </v-btn>
                    <v-btn text>
                        <router-link active-class="active" class="router-link" to="/ContactUs">
                            <v-icon>mdi-phone</v-icon> Contact Us
                        </router-link>
                    </v-btn>
                </v-toolbar-items>
            </template>
            <v-app-bar-nav-icon class="hidden-md-and-up" app @click="drawer = !drawer">
                <v-icon>mdi-menu</v-icon>
            </v-app-bar-nav-icon>
        </v-toolbar>
    </vue-app>
    <template v-if="$vuetify.breakpoint.smAndDown">
        <v-navigation-drawer app v-model="drawer" class="indigo sideMenu">
            <v-img id="logo" src="@/assets/img/logo.png" />

            <router-link class="router-link" to="/">
                <v-icon>mdi-home</v-icon> Home
            </router-link>
            <router-link class="router-link" to="/About">
                <v-icon>mdi-library</v-icon> About
            </router-link>
            <router-link class="router-link" to="/Services">
                <v-icon>mdi-room-service</v-icon> Services
            </router-link>
            <router-link class="router-link" to="/Blog">
                <v-icon>mdi-script-text-outline</v-icon> Blog
            </router-link>
            <router-link class="router-link" to="/ContactUs">
                <v-icon>mdi-phone</v-icon> Contact Us
            </router-link>
        </v-navigation-drawer>
    </template>
</nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style lang="scss" scoped>
#Navbar {
    position: sticky;
    top: 0;
    z-index: 9999;
    #logo {
        width: 135px;
    }

    .router-link {
        color: #000;

        &:hover .v-icon {
            color: #ef941a;
        }
    }

    .active {
        color: #ef941a;

        .v-icon {
            color: #ef941a;

        }
    }

    .v-icon {
        color: #b4b4ad;
    }

    a {
        text-decoration: none;
    }

    .sideMenu {
        padding: 0;
        background-color: #dcdde1 !important;
        border-color: #ef941a !important;

        #logo {
            width: 100%;
            margin-bottom: 1cm;
            box-shadow: 0 0 4px 2px #0000007f;

            .v-image__image {
                background-size: 75% auto;
            }
        }

        .router-link {
            color: #000;
            display: block;
            margin: 20px 20px;
            text-indent: 5px;

            &:hover {
                color: #ef941a;
            }
        }

        .active {
            background-color: #ef941a;

            .v-icon {
                color: #191919;

            }
        }

    }
}
</style>
