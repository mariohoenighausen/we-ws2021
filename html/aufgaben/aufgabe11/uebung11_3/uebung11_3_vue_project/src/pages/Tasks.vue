<template>
  <MainLayout>
    <p>Tasks page</p>
    <template v-for="task in tasks">
      <button v-on:click="task.isVisible = !task.isVisible">{{ task.title }}</button>
    </template>
    <template v-for="task in tasks">
      <Task v-if="task.isVisible" :task="task"></Task>
    </template>
  </MainLayout>
</template>

<script>
import MainLayout from '../layouts/Main.vue'
import Task from '../components/Task.vue'

export default {
  name: "Tasks",
  data: function () {
    return {
      tasks: [{title: "Task1", questions:["Task1 question1"], answers: [{text:"Task1 answer1", code:"<!DOCTYPE html><html><head></head><body></body></html>" }], isVisible: false}, {
        title: "Task2",
        questions:["Task2 question1"], answers: [{text:"Task2 answer1", code:"" }],
        isVisible: false
      }, {title: "Task3", questions:["Task3 question1"], answers: [{text:"Task3 answer1", code:"<pre><!DOCTYPE html><head></head><body></body></pre>" }], isVisible: false}, {
        title: "Task4",
        questions:["Task4 question1"], answers: [{text:"Task4 answer1", code:"<pre><!DOCTYPE html><head></head><body></body></pre>" }],
        isVisible: false
      }, {title: "Task5", questions:["Task5 question"], answers: [{text:"Task5 answer", code:"<pre><!DOCTYPE html><head></head><body></body></pre>" }], isVisible: false}, {
        title: "Task6",
        questions:["Task6 question"], answers: [{text:"Task6 answer", code:"<pre><!DOCTYPE html><head></head><body></body></pre>" }],
        isVisible: false
      },
        {title: "Task7", questions:["Task7 question"], answers: [{text:"Task7 answer", code:"<pre><!DOCTYPE html><head></head><body></body></pre>" }], isVisible: false}, {
          title: "Task8",
          questions:["Task8 question"], answers: [{text:"Task8 answer", code:"<pre><!DOCTYPE html><head></head><body></body></pre>" }],
          isVisible: false
        }, {title: "Task9", questions:["Task9 question"], answers: [{text:"Task9 answer", code:"<pre><!DOCTYPE html><head></head><body></body></pre>" }], isVisible: false}, {
          title: "Task10",
          questions:["Task10 question"], answers: [{text:"Task10 answer", code:"<pre><!DOCTYPE html><head></head><body></body></pre>" }],
          isVisible: false
        }, {title: "Task11", questions:["Task11 question"], answers: [{text:"Task11 answer", code:"<pre><!DOCTYPE html><head></head><body></body></pre>" }], isVisible: false}, {
          title: "Task12",
          questions:["Task12 question"], answers: [{text:"Task12 answer", code:"<pre><!DOCTYPE html><head></head><body></body></pre>" }],
          isVisible: false
        }]
    }
  },
  components: {
    MainLayout,
    Task
  }
}
</script>

<style scoped>

</style>