<template>
        <NavComponent :items="this.items" @update-items="updateItems"></NavComponent>
        <div class="empty"></div>

        <PageHeading></PageHeading>

        <div class="cards-wrapper">
            <div class="cards">
                <BlogCard v-for="item in filteredItems" :key="item.title" v-show="item.disp" :title="item.title" :image="item.image" :username="item.username">
                </BlogCard>
            </div>
        </div>

        <FooterComponent></FooterComponent>

</template>

<script>
import BlogCard from './components/BlogCard.vue';
import FooterComponent from './components/FooterComponent.vue';
import NavComponent from './components/NavComponent.vue';
import PageHeading from './components/PageHeading.vue';
import axios from 'axios';

export default {
  components: {
    BlogCard,
    PageHeading,
    NavComponent,
    FooterComponent
  },
  data() {
    return {
      // items: [
      //   { title: 'name1', disp: true, image: require('@/assets/img1.jpg'), username: 'pragyan@03', category: 'Tech'},
      //   { title: 'name11', disp: true, image: require('@/assets/img2.jpg'), username: 'amanjaiz', category: 'Finance'},
      //   { title: 'name111', disp: true, image: require('@/assets/img1.jpg') , username: 'akshat02', category: 'Art'},
      //   { title: 'name1111', disp: true, image: require('@/assets/img1.jpg') , username: 'aasthadas1', category: 'Tech'},
      //   { title: 'name11111', disp: true, image: require('@/assets/img2.jpg') , username: 'nishu@3', category: 'Art'}
      // ],
      items:[],
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
a {
  text-decoration: none;
  color: white;
}
</style>
