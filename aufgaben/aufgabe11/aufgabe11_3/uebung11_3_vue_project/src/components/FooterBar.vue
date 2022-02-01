<template>
  <footer class="">
    <nav :style="{backgroundColor:'black'}">
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/tasks">Tasks</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  </footer>
</template>

<script>
import Link from "./Link.vue";
export default {
  name: "FooterBar",
  components: {
    Link
  }
}
</script>

<style scoped>
ul{
  list-style: none;
  display:flex;
  flex-direction: row;
}
li{
  padding:10px;
}
</style>