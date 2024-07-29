<template>
  <div class="card" style="width: 18rem;">
    <img :src="image" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
        card's content.</p>
        <a href="#" class="btn btn-dark"> Read  More...</a>
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

<style>
.card {
    justify-self: center;
    border: 1px solid gray;
}
</style>