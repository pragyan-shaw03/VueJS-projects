<template>
    <footer>
            <div class="logo">
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
            <div class="social-media" style="display: flex; gap: 2rem; flex-wrap: wrap; justify-content: center;">
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

<style scoped>
footer {
  background-color: #212529;
  padding: 50px;
}
.logo {
  background-color: white;
  height: 100px;
  width: 420px;
  background-image: url(../assets/logo_text.png);
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
  margin: 30px;
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
  span {
    display: none;
  }
}
</style>