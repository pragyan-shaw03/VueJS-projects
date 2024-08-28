<template>
  <div>
    <router-view></router-view>
  </div>
  <FooterComponent></FooterComponent>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';

export default {
  components: {
    FooterComponent
  },
  data() {
    return {}
  },
}
</script>