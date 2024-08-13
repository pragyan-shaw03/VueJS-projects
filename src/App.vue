<template>
  <NavComponent :items="this.items" @update-items="updateItems" @update-display="updateDisplayForm"></NavComponent>
  <div class="empty"></div>

  <PageHeading></PageHeading>

  <div class="cards-wrapper">
      <div class="cards">
          <BlogCard v-for="item in filteredItems" :key="item.title" :title="item.title" :image="item.image" :username="item.username">
          </BlogCard>
      </div>
  </div>

  <FooterComponent></FooterComponent>
  <CreatePost v-show="this.displayCreatePost" :items="this.items" @update-display="updateDisplayForm" @update-items="updateItems" :displayCreatePost="this.displayCreatePost"></CreatePost>
</template>

<script>
import BlogCard from './components/BlogCard.vue';
import CreatePost from './components/CreatePost.vue';
import FooterComponent from './components/FooterComponent.vue';
import NavComponent from './components/NavComponent.vue';
import PageHeading from './components/PageHeading.vue';
import axios from 'axios';

export default {
  components: {
    BlogCard,
    PageHeading,
    NavComponent,
    FooterComponent,
    CreatePost
  },
  data() {
    return {
      items:[],
      displayCreatePost: false
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter(item => item.disp);
    }
  },
  async mounted() {
    let that = this;

    await axios.get('https://vuejs-projects-b7931-default-rtdb.firebaseio.com/posts.json').then(res => {
      that.items = Object.values(res.data);
    });

  },  
  methods: {
    reloadPage() {
      window.location.reload();
    },
    updateItems(updateValue) {
      this.items = updateValue;
    },
    updateDisplayForm(updateValue) {
      this.displayCreatePost = updateValue;
    }
  }
};
</script>

<style>
* {
  color:black;
  margin:0;
}
body {
  background: url(assets/bgimg.jpg);
  background-repeat: no-repeat;
  background-size: 1800px 545px;
}
.cards {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 350px));
  justify-content: center;
  align-items: center;
  margin: 50px 10px;
}
.empty {
  height: 100px;
}
</style>
