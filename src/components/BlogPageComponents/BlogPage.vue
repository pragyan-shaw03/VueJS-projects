<template>
    <BlogPageNav></BlogPageNav>
    <BlogPost :title="this.title" :image="this.image"></BlogPost>
    <BlogCorousel></BlogCorousel>
</template>

<script>
import axios from 'axios';
import BlogCorousel from './BlogCorousel.vue';
import BlogPageNav from './BlogPageNav.vue';
import BlogPost from './BlogPost.vue';

export default {
    components: {
        BlogPageNav,
        BlogPost,
        BlogCorousel
    },
    data() {
        return {
            title: '',
            image: '',
        }
    },
    async created() {
        this.title = this.$route.params.title;
        let that = this;
        await axios.get('https://vuejs-projects-b7931-default-rtdb.firebaseio.com/posts.json')
        .then((res) => {
            let items = Object.values(res.data);
            items.forEach(item => {
                if (item.title === that.title) {
                    that.image = item.image;
                }
            })
        })
    }
}
</script>