<template>
  <div class="blog-post-container">
    <h1 class="blog-heading">{{ heading }}</h1>
    <img class="landscape-image" :src="imageSrc" alt="Blog Post Image" />
    <div class="blog-content" v-html="content"></div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      imageSrc:
        "https://cdn.pixabay.com/photo/2023/09/04/17/48/flamingos-8233303_1280.jpg",
      heading: "Your Blog Post Title",
      content: `
          <p>This is your blog post content.</p>
          <p>Feel free to add more paragraphs, <strong>bold text</strong>, <em>italic text</em>, and other HTML elements.</p>
            <p>Welcome to the world of Vue.js! If you're looking to build interactive and dynamic user interfaces, Vue.js is a fantastic framework to consider. In this blog post, we will cover the basics of Vue.js and help you get started with your first Vue application.</p>

        <h2>What is Vue.js?</h2>
        <p>Vue.js is a progressive JavaScript framework used for building user interfaces. It is designed to be incrementally adoptable, which means you can integrate it into your existing projects or use it to build new applications from scratch.</p>

        <h2>Why Use Vue.js?</h2>
        <ul>
          <li><strong>Reactive Data Binding:</strong> Vue.js provides a reactive data binding system that keeps your data and view in sync effortlessly.</li>
          <li><strong>Component-Based Architecture:</strong> Create reusable components that encapsulate logic and markup, improving maintainability and reusability.</li>
          <li><strong>Ease of Integration:</strong> Vue.js can be easily integrated into projects alongside other libraries or existing code.</li>
        </ul>
        <img src='https://cdn.pixabay.com/photo/2024/07/13/22/31/road-8893160_1280.jpg' width='100%'></img>
        <h2>Getting Started with Vue.js</h2>
        <p>To get started with Vue.js, you can either include it via a CDN or install it using npm. Here’s a simple example to include Vue.js in your HTML file:</p>
        <pre><code>&lt;script src="https://cdn.jsdelivr.net/npm/vue@2"&gt;&lt;/script&gt;</code></pre>
        `,
    };
  },
};
</script>
  
  <style scoped>
.blog-post-container {
  max-width: 1200px;
  margin: 100px auto;
  padding: 20px;
}

.landscape-image {
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.blog-heading {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.blog-content {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
}
</style>
  