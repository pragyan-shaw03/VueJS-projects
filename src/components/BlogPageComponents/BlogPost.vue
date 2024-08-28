<template>
  <div class="blog-post">
    <h1 class="title">{{ title }}</h1>
    <p class="subtitle"><span class="author"> By {{ author }} </span><span class="author"><i class="fa-regular fa-clock"></i> {{ formattedDate }}</span></p>
    <img
      :src="image"
      alt="Blog Post Image"
      class="post-image"
    />
    <p class="label"> fig:1.0 Heading : {{title}}</p>
    <div class="content">
        <h2><b>Introduction</b></h2>
        <p>We have all known Amazon, Flipkart, Myntra, and other E-trade stages throughout recent decades. Yet, have you at any point known about a stage that underpins nearby craftsmans and sells <b>ONLY Handmade Products</b>? Be it Handmade Home Decorative things, handmade jewellery, handmade unique gifts, handcrafted personalized items, or handmade paintings. <b>DIY Baazar</b>, an Indian E-commerce stage, is the perfect place where you will discover everything carefully assembled by the local craftsman of India.</p>
        <p>With over <b>1000+ cheerful clients</b> and <b>300+ venders</b> inside a range of one year, DIY Baazar expects to give a stage to the nearby experts of India and guarantee that they can sell their specialty at the perfect spot and the correct cost. Likewise, the purchaser's advantage and likes are additionally remembered as we guarantee the best quality for the picked hand tailored items.</p>

        <h2><b>Why Do We Support the Selling of Handmade Products?</b></h2>
        <BlogImage src="https://diybaazar.com/public/images/blog/blog-02-01.jpg" label="1.1 Marketplace" float="left"></BlogImage>

        <p>India is a huge country with a huge part of individuals living underneath the poverty line. Bringing in cash to meet every day requirements is as yet thought to be an extravagance in numerous families in rural India. In this manner, individuals in numerous districts began making things that are esteemed by local people just as travellers. This has brought forth a culture of making handicrafts work which holds an incentive in the Indian just as foreign market. Culture of making handicrafts holds an incentive in the Indian just as foreign market.</p>
        <p>For instance, People from lesser developed territories of West Bengal began using their local materials to make handicrafts. Jute, Bamboo, Wood, everything was transformed into something special.</p>
        <p>It is vital to help our local craftsmen and specialists to guarantee they can carry on with a sound and prosperous life. With this point of supporting local craftsmen, DIY Baazar was established with the sole rationale of conveying the best quality carefully assembled items which range from Handmade Jewelry, Handmade Home Decor (Home Decorative Items), Handmade Personalized Gifts, Handmade Fashion Items, Handmade unique works of art, thus significantly more.</p>

        <h2><b>Who Can Sell their Handmade Products?</b></h2>
        <BlogImage src="https://diybaazar.com/publicuploads/seller/products/wall-hanging-of-mixed-media-art-on-fiber-frame-105-inches-x-135-inches-133-160-1_diybaazar5e9db82aac695.jpeg" label="1.2 Test Image Label" float="center"></BlogImage>
        <p>Anybody can sell their Handmade Products on DIY Baazar — from an individual who just loves making Home Decorative Items as an enthusiasm, to somebody who does this to bring in some extra money; everybody can register on this stage and sell their items. DIY Baazar doesn't charge an additional penny for the enrolment of the dealers. All things considered, the advertising and advancement of the items are additionally done by the in house group.</p>
        <p>There aren’t an excessive number of foundations of this sort and India, being a non-industrial nation needs more such commercial centres to help the local craftsmen.</p>

        <h2><b>Handcrafted Products on DIY Baazar</b></h2>
        <p>DIY Baazar has a wide scope of high quality items that you can purchase. Handcrafted Jewelry Online, Personalized Gifts, Handmade Fashion things, Home Decorative Items, Handmade Original Paintings, you will discover everything under one rooftop. DIY Baazar has a wide scope of high quality items that you can purchase. Handcrafted Jewelry Online, Personalized Gifts, Handmade Fashion things, Home Decorative Items, Handmade Original Paintings, you will discover everything under one rooftop. You will discover everything under one rooftop.</p>
        <BlogImage src="https://images.pexels.com/photos/4483109/pexels-photo-4483109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" label="1.3 Handcraft" float="right"></BlogImage>
        <p>DIY Baazar has a wide scope of high quality items that you can purchase. Handcrafted Jewelry Online, Personalized Gifts, Handmade Fashion things, Home Decorative Items, Handmade Original Paintings, you will discover everything under one rooftop. DIY Baazar has a wide scope of high quality items that you can purchase. Handcrafted Jewelry Online, Personalized Gifts, Handmade Fashion things, Home Decorative Items, Handmade Original Paintings, you will discover everything under one rooftop. you will discover everything under one rooftop.</p>
        
        <h2><b>A Short Outline of the Handmade Products:</b></h2>
        <p><b>Carefully made Handmade Paintings:</b> For all craftsmen across the world who are hoping to purchase canvas paintings online, you will undoubtedly fall head over heels in love with the delightful works of art and unique artistic creations from the best craftsmen across India.</p>
        <p><b>Home Decor:</b> If you're somebody with a skill for special yet appealing home decorative products, DIY Baazar is the correct spot. DIY Baazar presents to you a scope of home and living items including Wall Hangings, show-stoppers, Wall clocks, Flower Vases, table décor items, and Scented Candles.</p>
        <p>Another commendable mention from the home and decor layout range incorporates the fine scope of Kitchen Items — Kitchen Tray, Plate and Bowl Set, Tea Kettle, Furniture, wooden Table, Shelf, and Rugs and Mats.</p>
        <p><b>Fashion Items:</b> DIY Baazar has countless Handmade Fashion items comprising of Saree, Kurti just as handpainted Kurta, Dupatta, Scarf, and T-shirts. You will likewise discover flawlessly created texture bags and women's purse.</p>
        <p><b>High quality Jewelry and Accessories:</b> The Handmade Jewelry assortment of DIY Baazar is something to pay special mind to. You will discover Handmade Jewelry comprised of various materials of fluctuated plans on DIY Baazar which incorporates: Jute jewellery, Clay jewellery, colourful bead jewellery, Thread jewellery, and much more.</p>

        <h2><b>Finally...</b></h2>
        <p><b>Customized Gifts:</b> Customized gifts are the claim to fame of DIY Baazar. You will discover bunch of customized gift items that are incredible. Cushions, Key Rings, Coffee Mug, Wall Clock, Wrist Watch, DIY Baazar has got each and every type of customised gift item that you can think of.</p>
      </div>
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
import BlogImage from './BlogImage.vue';

export default {
  props:['title', 'image'],
  components: {
    BlogImage
  },
  data() {
    return {
      author: "Author Name",
      date: "2024-08-25",
      content: '',
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
p {
  text-align: justify;
}
i {
  font-size: 0.9em;
}
.blog-post {
  max-width: 1000px;
  margin: 100px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.title {
  font-size: 2em;
  font-weight: 600;
  margin-bottom: 0.5em;
  text-align: center;
}

.author{
  font-size: 0.9em;
  color: #555;
  margin-bottom: 1em;
  margin-right: 2em;
}

.post-image {
  width: 100%;
  height: auto;
  margin-bottom: 1em;
}
.label {
  text-align: center;
  opacity: 0.7;
  font-size: 1rem;
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
