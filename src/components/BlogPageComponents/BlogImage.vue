<template>
  <div class="contain" :class="{'left': float == 'left', 'right': float == 'right', 'center' : float == 'center'}">
    <img :src="src" alt="" />
    <div class="label" v-if="label">fig:{{ label }}</div>
  </div>
</template>
  
  <script>
export default {
  props: ["src", "label", "float"],
};
</script>
  
<style scoped>
.contain {
    margin: 1rem;
    width: fit-content;
}
img {
  width: 25rem;
}
.label {
  text-align: center;
  opacity: 0.6;
  font-size: 0.9em;
}
.left {
    float: left;
}
.right {
    float: right;
}
.center {
    width: 80%;
    margin: 2rem auto;
}
.center > img {
    width: 100%;
}
@media (max-width: 500px) {
  .contain {
    margin: 10px;
    width: fit-content;
  }
  img {
    width: 100%;
  }
}
</style>
  