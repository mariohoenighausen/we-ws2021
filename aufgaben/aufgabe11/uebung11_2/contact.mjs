export default {
  name: "contact",
  template:
  `<div :id="component.url"> <h1>{{component.heading}}</h1>{{component.content.repeat(10)}}</div>`,
  data: function () {
    return {num: 0}
  },
  props: ['component'],
}