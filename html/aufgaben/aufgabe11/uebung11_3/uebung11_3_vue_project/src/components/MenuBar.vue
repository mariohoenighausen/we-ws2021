<template>
  <header>
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/tasks">Tasks</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
</template>

<script>

import Link from "./Link.vue";

export default {
  name: "MenuBar",
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
nav{
  background-color:black;
}
li{
  padding:10px;
}
</style>