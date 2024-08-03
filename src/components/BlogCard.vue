<template>
  <div class="card">
    <img :src="image" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <p class="card-text">Some quick example text to build on the card title and 
        card's content.</p>
        <a href="#" class="btn btn-outline-dark"> Read  More... <i>>></i></a>
      </div>
    </div>
</template>

<script>
  export default {
    props: ['title', 'image'],
    mounted() {
      console.log(this.image);
    }
  };
</script>

<style scoped>
.card {
    justify-self: center;
    border: 1px solid gray;
}
i {
  color:white;
  display: none;
}
a:hover > i {
  display: inline;
}
</style>