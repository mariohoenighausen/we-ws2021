<template>
  <div class="container">
    <Hero :style="{height:'12vh'}"></Hero>
    <MenuBar :style="{height:'5vh', }"></MenuBar>
    <div :style="{height:'72.5vh'}">
      <slot></slot>
    </div>
    <a :style="{textDecoration:'none'}" :href="'https://github.com/chrisvfritz/vue-2.0-simple-routing-example'">Credit for the routing template</a>
    <FooterBar :style="{height:'5vh',marginBottom: 0,paddingBottom:0}"></FooterBar>
  </div>
</template>

<script>
  import MenuBar from "../components/MenuBar.vue";
  import FooterBar from "../components/FooterBar.vue";
  import Hero from "../components/Hero.vue";

  export default {
    components: {
      MenuBar,
      FooterBar,
      Hero
    }
  }
</script>

<style scoped>
  .container {
  }
</style>
