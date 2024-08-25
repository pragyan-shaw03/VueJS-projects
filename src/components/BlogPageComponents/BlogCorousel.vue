<template>
  <div>
      <h1>Related Posts:</h1>
      <div class="container">
      <BlogCard
        title="Test"
        image="https://media.istockphoto.com/id/504702760/vector/desert-landscape.jpg?s=1024x1024&w=is&k=20&c=8SYtf0G-Vb_EhKHZHTCLhMEif21CPJiTrdJvff1wK58="
        username="Test"
        class="blog-card"
      ></BlogCard>

      <BlogCard
        title="Test"
        image="https://media.istockphoto.com/id/504702760/vector/desert-landscape.jpg?s=1024x1024&w=is&k=20&c=8SYtf0G-Vb_EhKHZHTCLhMEif21CPJiTrdJvff1wK58="
        username="Test"
        class="blog-card"
      ></BlogCard>

      <BlogCard
        title="Test"
        image="https://media.istockphoto.com/id/504702760/vector/desert-landscape.jpg?s=1024x1024&w=is&k=20&c=8SYtf0G-Vb_EhKHZHTCLhMEif21CPJiTrdJvff1wK58="
        username="Test"
        class="blog-card"
      ></BlogCard>
      <BlogCard
        title="Test"
        image="https://media.istockphoto.com/id/504702760/vector/desert-landscape.jpg?s=1024x1024&w=is&k=20&c=8SYtf0G-Vb_EhKHZHTCLhMEif21CPJiTrdJvff1wK58="
        username="Test"
        class="blog-card"
      ></BlogCard>
    </div>
  </div>
</template>

<script>
import BlogCard from "../BlogCard.vue";

export default {
  components: {
    BlogCard,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  padding: 1rem;
  flex-wrap: wrap;
  justify-content: space-around;
  border-radius: 1rem;
  box-shadow: 1px 0px 8px rgba(0, 0, 0, 0.421);
  margin: 2rem auto;
}
.blog-card {
  flex: 1;
  min-width: 200px;
  height: auto;
  box-shadow: none;
  border: 1px solid rgba(128, 128, 128, 0.244);
  border-radius: 10px;
  object-fit: cover;
}
h1 {
    text-align: center;
}
</style>