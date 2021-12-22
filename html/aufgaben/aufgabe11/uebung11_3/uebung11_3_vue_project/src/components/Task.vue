<template>
  <div>
    <h2>{{ task.title }}</h2>
    <template v-for="(question,idx) in task.questions">
      <p>{{ question }}</p>
      <template v-if="task.answers[idx]">
        <p>{{ task.answers[idx].text }}</p>
        <template v-if="task.answers[idx].code" :style="{display: 'flex', flexDirection:'row'}">
          <div :style="{display:'flex',justifyContent: 'center'}">
            <pre><code>{{ task.answers[idx].code }}</code></pre>
          </div>
         <div :style="{display:'flex',justifyContent: 'center'}"> Rendered HTML</div>
        </template>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: ["task"]
}
</script>

<style scoped>

</style>