<template>
<nav id="Navbar" :dir="$t('dir')">
    <vue-app>
        <v-toolbar>
            <v-toolbar-title>
                <v-img id="logo" src="@/assets/img/logo.png" />
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <template v-if="$vuetify.breakpoint.mdAndUp">
                <v-toolbar-items>
                    <v-btn text>
                        <router-link active-class="active" class="router-link" :to="`/${$i18n.locale}`">
                            <v-icon>mdi-home</v-icon> {{ $t('Navbar.Home') }}
                        </router-link>
                    </v-btn>
                    <v-btn text>
                        <router-link active-class="active" class="router-link" :to="`/${$i18n.locale}/About`">
                            <v-icon>mdi-account</v-icon>{{ $t('Navbar.About') }}
                        </router-link>
                    </v-btn>
                    <v-btn text>
                        <router-link active-class="active" class="router-link" :to="`/${$i18n.locale}/Services`">
                            <v-icon>mdi-library</v-icon> {{ $t('Navbar.Services') }}
                        </router-link>
                    </v-btn>
                    <v-btn text>
                        <router-link active-class="active" class="router-link" :to="`/${$i18n.locale}/Blog`">
                            <v-icon>mdi-script-text-outline</v-icon> {{ $t('Navbar.Blog') }}
                        </router-link>
                    </v-btn>
                    <v-btn text>
                        <router-link active-class="active" class="router-link" :to="`/${$i18n.locale}/ContactUs`">
                            <v-icon>mdi-phone</v-icon> {{ $t('Navbar.ContactUs') }}
                        </router-link>
                    </v-btn>
                    <v-btn text>
                        <LangSwitcher />
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
            <div class="w-100 s-langSwitch float-right">
                <LangSwitcher />
            </div>
            <router-link class="router-link" :to="`/${$i18n.locale}`">
                <v-icon>mdi-home</v-icon> {{ $t('Navbar.Home') }}
            </router-link>
            <router-link class="router-link" :to="`/${$i18n.locale}/About`">
                <v-icon>mdi-account</v-icon> {{ $t('Navbar.About') }}
            </router-link>
            <router-link class="router-link" :to="`/${$i18n.locale}/Services`">
                <v-icon>mdi-library</v-icon> {{ $t('Navbar.Services') }}
            </router-link>
            <router-link class="router-link" :to="`/${$i18n.locale}/Blog`">
                <v-icon>mdi-script-text-outline</v-icon> {{ $t('Navbar.Blog') }}
            </router-link>
            <router-link class="router-link" :to="`/${$i18n.locale}/ContactUs`">
                <v-icon>mdi-phone</v-icon> {{ $t('Navbar.ContactUs') }}
            </router-link>

        </v-navigation-drawer>
    </template>
</nav>
</template>

<script>
import LangSwitcher from './LangSwitcher';
export default {
    name: 'navbar',
    components: {
        LangSwitcher,
    },
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
        background-color: #161616 !important;

        .router-link {
            color: #fff;
            font-weight: bold;
            display: block;
            margin: 30px 20px;
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
