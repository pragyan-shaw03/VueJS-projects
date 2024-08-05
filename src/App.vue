<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" id="nav-logo" href="#">DIY Bazaar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="nav-links">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#" @click.prevent="reloadPage">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">About</a>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                            v-model="searchOption">
                        <button class="btn btn-outline-light" id="search" type="submit"
                            @click.prevent="searched">Search</button>
                    </form>
                </div>
            </div>
        </nav>

        <div class="empty"></div>

        <div class="heading">
            <div class="main-heading">
                BLOGS
            </div>
            <p>Learn about designs through our <br> blogs insights, thoughts, industry trends and <br> market tips.</p>
        </div>
        
        <div class="cards-wrapper">
            <div class="cards">
                <BlogCard v-for="item in filteredItems" :key="item.title" :title="item.title" :image="item.image" :username="item.username">
                </BlogCard>
            </div>
        </div>

        <footer class="">
            <div class="logo">
                <!-- <img src="./assets/logo_text.png" alt="" id="footer-logo"> -->
            </div>
            <div class="footer-items">
                <div class="about">
                    <h3 style="color: white;">About</h3>
                    <p>DIY Baazar aims to provide a bigger platform for all artisans and encourages Art Culture.
                        Customers get a variety of impressive products at cost effective price in a single click. Any
                        customised item or gifts can carry out special message to your loved ones. DIY Baazar aims to
                        connect both handmade artisans and handicraft lovers.</p>
                </div>
                <div class="links">
                    <h3 style="color: white;">Links</h3>
                    <ul>
                        <li>About us</li>
                        <li>Contact</li>
                        <li>Blogs</li>
                        <li>FAQs</li>
                    </ul>
                </div>
            </div>
            <div class="contact-details">
                <i id="phone" class="fa-solid fa-phone"></i>
                <a href="#" style="padding-left: 10px;">+91 7044617095</a>
                <br>
                <i class="fa-solid fa-envelope"></i>
                <a href="#" style="padding-left: 10px;">contact@diybazaar.com</a>
            </div>

            <hr style="color: white; font-weight: 100;">
            <div class="social-media" style="display: flex; flex-wrap: wrap; justify-content: center;">
                <a href="#"><i class="fa-brands fa-instagram"></i><span>Instagram</span></a>
                <a href="#"><i class="fa-brands fa-youtube"></i><span>Youtube</span></a>
                <a href="#"><i class="fa-brands fa-pinterest"></i><span>Pinterest</span></a>
                <a href="#"><i class="fa-brands fa-facebook"></i><span>Facebook</span></a>
            </div>
            <p style="text-align: center; color: white;margin: 30px; font-weight: 200;">
                Copyright <i class="fa-sharp fa-regular fa-copyright" style="color: white; opacity: 0.8;"></i>2024 All
                rights reserved | Powered by DIY Baazar
            </p>
        </footer>
</template>

<script>
import BlogCard from './components/BlogCard.vue';

export default {
  components: {
    BlogCard
  },
  data() {
    return {
      items: [
        { title: 'name1', disp: true, image: require('@/assets/img1.jpg'), username: 'pragyan@03'},
        { title: 'name11', disp: true, image: require('@/assets/img2.jpg'), username: 'amanjaiz'},
        { title: 'name111', disp: true, image: require('@/assets/img1.jpg') , username: 'akshat02'},
        { title: 'name1111', disp: true, image: require('@/assets/img1.jpg') , username: 'aasthadas1'},
        { title: 'name11111', disp: true, image: require('@/assets/img2.jpg') , username: 'nishu@3'}
      ],
      searchOption: ''
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter(item => item.disp);
    }
  },
  methods: {
    searched() {
      this.items.forEach(item => {
        item.disp = item.title.toLowerCase().startsWith(this.searchOption.toLowerCase());
      });
    },
    reloadPage() {
      window.location.reload();
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
#nav-logo {
  font-weight: 900;
  font-size: 40px;
}
#nav-links {
  margin-left: 60%;
}
#nav-links > .nav-item {
  margin-right: 50px;
}
.heading {
  margin: 0 80px;
  color: white;
}
.main-heading {
  font-weight: 900;
  font-size: 80px;
  color:white;
}
.heading > p {
  color: white;
  font-weight: 100;
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
footer {
  background-color: #212529;
  padding: 50px;
}
.logo {
  background-color: white;
  height: 100px;
  width: 420px;
  background-image: url(assets/logo_text.png);
  background-size: cover;
  margin: auto;
}
.footer-items {
  display: flex;
  flex-wrap: wrap;
}
.about {
  width: 900px;
  padding: 30px;
}
.links {
  padding: 30px;
}
.about > p, .links > ul > li{
  color: white;
  font-weight: 100;
}
.social-media {
  text-align: center;
  margin: 50px;
}
.social-media > a > i {
  padding: 0 0 0 40px;
}
.social-media > a > i, .social-media > a > span{
  color: white;
  opacity: 0.5;
  font-size: 25px;
}
.contact-details > i, .contact-details > a {
  padding-left: 30px;
  color: white;
  opacity: 0.5;
}
a {
  text-decoration: none;
  color: white;
}
@media (max-width: 600px) {
  .logo {
    height: 80px;
    width: 250px;
  }
  .heading {
    margin: 0 30px;
  }
}
</style>
