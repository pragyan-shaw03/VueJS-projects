<template>
  <div class="contain" :class="{'left': float == 'left', 'right': float == 'right'}">
    <img :src="src" alt=""  />
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
    margin: 15px 15px 0px 15px;
    width: fit-content;
    float: left;
  }
img {
  width: 25rem;
}
.label {
  text-align: center;
  opacity: 0.5;
  font-size: 0.9em;
}
.left {
    float: left;
}
.right {
    float: right;
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
  