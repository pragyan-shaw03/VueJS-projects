<template>
  <div class="card" style="border-radius: 0px;">
    <img :src="image" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <p class="card-text">Some quick example text to build on the card title and 
        card's content.</p>
        <div class="d-flex justify-content-between">
          <span>{{username}}</span><span>05 August 2024</span>
        </div>
        <hr>
        <a href="#" class="btn btn-outline-dark"> Read  More... <i>>></i></a>
      </div>
    </div>
</template>

<script>
  export default {
    props: ['title', 'image', 'username'],
  };
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.card {
    margin: 10px;
    justify-self: center;
    border: 1px solid gray;
    box-shadow:   1px 1px 20px rgba(0, 0, 0, 0.433);
}
i {
  color:white;
  display: none;
}
a:hover > i {
  display: inline;
}
</style>