<template>
  <MainLayout>
    <template>
      <p>Contact page</p>
      <div style="display:flex; justify-content: center;">
        <address>
          <a style="text-decoration:none" href="https://github.com/mariohoenighausen" target="_blank">github</a>
        </address>
      </div>
    </template>

  </MainLayout>
</template>

<script>
import MainLayout from '../layouts/Main.vue'
export default {
  name: "Contact",
  components: {
    MainLayout
  }
}
</script>

<style scoped>

</style>