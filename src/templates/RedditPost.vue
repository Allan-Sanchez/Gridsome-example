<template>
    <Layout>
        <h1>{{$page.redditPost.title}}</h1>
        <img :src="$page.redditPost.img" alt="">
    </Layout>
</template>

<page-query>
query RedditPost($path:String!) {
    redditPost: redditPost(path:$path){
        title
        path
        img
    }
}
</page-query>

<script>
export default {
    metaInfo(){
        return {
            title: this.$page.redditPost.title
        }
    }
}
</script>

<style scoped>
img{
    margin: 0px;
    padding: 0px;
    width: 50%;
}
</style>
