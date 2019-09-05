<template>
<section id="HomeBlog" class="HomeBlog" dir="ltr">
    <h3 class="SectionTitle">{{ $t('Home.Blog.title')}}</h3>
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>
        <div class="container">
            <ul class="uk-slider-items uk-child-width-1-1 uk-child-width-1-3@s uk-child-width-1-3@m">
                <li v-for="Post in HomePosts" :key="Post">
                    <div class="container">
                        <div class="PostBox">
                            <h3 class="PostTitle vc">{{ Post.PostTitle }}</h3>
                            <img class="PostImg" :src="Post.PostImage">
                            <p class="PostContent">{{Post.PostContent}}</p>
                            <div class="container">
                                <span class="PostDate">{{Post.PostDate}}</span>
                                <a class="ReadMoreBtn" :href="Post.PostLink" text-right>Read More
                                    <v-icon cols="12" md="3">mdi-share</v-icon>
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <a class="slideArrow uk-position-center-left uk-position-small" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="slideArrow uk-position-center-right uk-position-small" href="#" uk-slidenav-next uk-slider-item="next"></a>
    </div>
</section>
</template>

<script>
import postsJson from '@/assets/json/Blog/BlogPosts.json';
export default {
    name: "HomeBlog",

    data() {
        return {
            liked: false,
            icon: 'mdi-thumb-up-outline',
            HomePosts: postsJson,
        }
    },
    methods: {
        toggleLike: function () {
            this.liked = !this.liked;
            this.liked ? this.icon = 'mdi-thumb-up' : this.icon = 'mdi-thumb-up-outline'

        }
    }

};
</script>

<style lang="scss" scoped>
section#HomeBlog {
    padding: 2em 0;

    .slideArrow {
        color: #191919 !important;
    }

    .PostBox {
        margin: 15px auto;
        box-shadow: 0 0 10px #95b1cf;
        padding: 0;
        background-color: #fff !important;
        position: relative;
        border-radius: 5px;
        text-align: left;

        .PostImg {
            width: 100%;
            height: 6cm;
        }

        .PostDate {
            color: #999999;
            font-weight: bold;
            font-size: 15px;
            padding: 0 20px;
        }

        .PostContent {
            margin: 0 auto;
            padding: 20px;
            line-height: 1.3;
            font-size: 15px;
            color: #222222;
            overflow-y: auto;
            height: 5cm;
            background: #f9f9f9;
            box-shadow: inset 0 0 3px 1px #00000059;

            &::-webkit-scrollbar {
                width: 5px;
            }
        }

        .PostTitle {
            color: #f08c0a !important;
            padding: 2px 20px;
            margin: 0;
            font-size: 20px;
            font-weight: bold;
            box-shadow: 0 0 3px 1px #00000059;
            min-height: 2cm;
        }

        .ReadMoreBtn {
            font-size: 15px;
            font-weight: bold;
            float: right;
        }

    }
}
</style>
