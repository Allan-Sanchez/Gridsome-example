<template>
    <blog-layout>
        <div class="markdown-body" v-html="$page.post.content" />
    </blog-layout>
</template>

<page-query>
query Post($path:String!) {
    post: post(path:$path){
        title
        content
    }
}
</page-query>

<script>
export default {
    metaInfo(){
        return {
            title: this.$page.post.title
        }
    }
}
</script>