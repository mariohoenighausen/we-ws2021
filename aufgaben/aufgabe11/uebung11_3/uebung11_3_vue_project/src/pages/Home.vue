<template>
  <main-layout>
    <p>Welcome home</p>
    <template>
      <div style="display:flex; justify-content: center;font-size:30px; align-items: center; text-align: center;">
        <blockquote style="font-style: italic;">- Quotes are just sets of words that should inspire you to do something
          </br> which isn't reciting them forever </br> but </br> creating your own stories that are citeable !</blockquote>
      </div>
    </template>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'

  export default {
    components: {
      MainLayout
    }
  }
</script>
