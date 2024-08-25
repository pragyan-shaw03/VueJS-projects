<template>
  <div class="blog-post">
    <h1 class="title">{{ title }}</h1>
    <p class="author">By {{ author }} on {{ formattedDate }}</p>
    <img
      v-if="imageUrl"
      :src="imageUrl"
      alt="Blog Post Image"
      class="post-image"
    />
    <div class="content" v-html="content"></div>
    <div class="tags">
      <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
    </div>

    <!-- Social Share Buttons -->
    <p style="margin-top: 2em;">Share this post:</p>
    <div class="share-buttons">
      <a :href="facebookShareLink" target="_blank" class="share-button facebook"
        >Share on Facebook</a
      >
      <a :href="twitterShareLink" target="_blank" class="share-button twitter"
        >Share on Twitter</a
      >
      <a :href="linkedInShareLink" target="_blank" class="share-button linkedin"
        >Share on LinkedIn</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Your Blog Post Title",
      author: "Author Name",
      date: "2024-08-25",
      imageUrl:
        "https://cdn.pixabay.com/photo/2023/09/04/17/48/flamingos-8233303_1280.jpg", // Replace with your image URL
      content: `
        <p>This is your blog post content. You can use HTML here to format your text, add links, images, and more.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <img src='https://cdn.pixabay.com/photo/2021/11/21/14/17/desert-6814275_1280.png' style='width:100%; height:auto;'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      `,
      tags: ["Vue.js", "JavaScript", "Web Development"],
      url: window.location.href,
    };
  },
  computed: {
    formattedDate() {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(this.date).toLocaleDateString(undefined, options);
    },
    facebookShareLink() {
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        this.url
      )}`;
    },
    twitterShareLink() {
      return `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        this.title
      )}&url=${encodeURIComponent(this.url)}`;
    },
    linkedInShareLink() {
      return `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        this.url
      )}&title=${encodeURIComponent(this.title)}`;
    },
  },
};
</script>

<style scoped>
.blog-post {
  max-width: 1000px;
  margin: 100px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.title {
  font-size: 2em;
  margin-bottom: 0.5em;
}

.author {
  font-size: 0.9em;
  color: #555;
  margin-bottom: 1em;
}

.post-image {
  width: 100%;
  height: auto;
  margin-bottom: 1em;
}

.content {
  font-size: 1.2em;
  line-height: 1.6;
  margin-bottom: 1em;
}

.tags {
  margin-top: 1em;
}

.tag {
  background-color: #efefef;
  border-radius: 3px;
  padding: 0.3em 0.6em;
  margin-right: 0.5em;
  font-size: 0.9em;
}

.share-buttons {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1em;
}

.share-button {
  display: inline;
  margin-right: 1em;
  padding: 0.5em 1em;
  border-radius: 3px;
  text-decoration: none;
  color: white;
}

.share-button.facebook {
  background-color: #3b5998;
}

.share-button.twitter {
  background-color: #1da1f2;
}

.share-button.linkedin {
  background-color: #0077b5;
}
</style>
