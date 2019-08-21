<template>
  <div class="Blog">
    <div class="BlogHeader">
      <div class="container">
        <h1>{{ pageName }}</h1>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="posts">
            <BlogPosts
              v-for="post in posts"
              :key="post.id"
              :views="post.PostViews"
              :title="post.PostTitle"
              :content="post.PostContent"
              :author="post.PostAuthor"
              :category="post.PostCategory"
              :AuthorImg="post.PostAuthorImg"
              :PostImg="post.PostImage"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="sidebar">
            <BlogSideBar />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BlogPosts from "@/components/Blog/BlogPosts.vue";
import BlogSideBar from "@/components/Blog/BlogSideBar.vue";
import JsonPosts from "@/assets/json/Blog/BlogPosts.json";
export default {
  data: function() {
    return {
      posts: JsonPosts
    };
  },
  name: "Blog",
  components: {
    BlogPosts,
    BlogSideBar
  }
};
</script>
<style lang="scss" scoped>
.BlogHeader {
  text-shadow: 0 0 6px #000;
  height: 500px;
  color: #ddd;
  font-size: 30px;
  margin: 0;
  vertical-align: middle;
  background: url("https://Dummyimage.com/1200x500/2379db/2359db");

  h1 {
    font-size: 5em;
    position: absolute;
    margin: 0;
    padding: 20px;
    top: 50%;
  }
}
</style>
