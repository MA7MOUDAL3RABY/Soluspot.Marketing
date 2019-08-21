<template>
  <div class="PostBox">
    <span class="PostViews"><icon class="fa fa-eye"></icon> {{ views }}</span>
    <h3 class="PostTitle">{{ title }}</h3>
    <img class="PostImg" :src="PostImg">
    <span class="PostDate">{{date}}</span>
    <p class="PostContent">{{content}}</p>
    <div class="row">
      <div class="col-sm-6">
        <a><img class="AuthorImg" :src="AuthorImg"><span class="PostAuthor">{{author}}</span></a>
      </div>
      <div class="col-sm-6 text-right">
        <span class="PostCategory">{{category}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "post",
  props: ['views', 'title', 'author', 'content', 'category', 'date', 'AuthorImg', "PostImg"],

};
</script>
<style lang="scss" scoped>
body{
  background-color: #eeeeee;
}
.PostBox
{
  margin: 15px auto;
  box-shadow: 0 0 10px #95b1cf;
  padding: 20px;
  background-color: #fff !important;
  position: relative;
  border-radius: 5px;
  text-align: left;
  .PostImg
  {
    width: 100%;
  }
  .PostDate
  {
    color: #999999;
    font-family: dosis;
    font-weight: bold;
    font-size: 15px;
  }
  .PostContent
  {
    margin: 15px auto;
    padding: 10px;
    line-height: 1.3;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 14px;
  }
  .PostViews
  {
    top: 5px;
    right: 5px;
    padding: 5px;
    color: #fff;
    font-weight: bold;
    position: absolute;
    border-radius: 5px;
    background-color: #2379db;
  }
  .PostTitle
  {
    color: #2379db !important;
  }

  .PostCategory
  {
    box-shadow: 0 0 10px rgba(51, 51, 51, 0.465);
    background-color: #aaaaaa;
    padding: 6px 10px;
    border-radius: 5px;
    color: #fff;
  }
  .AuthorImg
  {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    box-shadow: 0 0 6px #777;
    border: 2px solid #2379db;
  }
  .PostAuthor
  {
    text-shadow: 0 0 10px rgba(131, 125, 125, 0.465);
    padding: 6px 10px;
    color: #777;
  }

}
</style>
