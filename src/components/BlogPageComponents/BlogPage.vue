<template>
    <BlogPageNav></BlogPageNav>
    <BlogPost></BlogPost>
    <BlogCorousel></BlogCorousel>
</template>

<script>
import BlogCorousel from './BlogCorousel.vue';
import BlogPageNav from './BlogPageNav.vue';
import BlogPost from './BlogPost.vue';

export default {
    components: {
        BlogPageNav,
        BlogPost,
        BlogCorousel
    }
}
</script>