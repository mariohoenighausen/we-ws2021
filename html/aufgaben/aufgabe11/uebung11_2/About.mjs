export default {
  name: "About",
    data: function () {
      return {num: 0}
    },
  template: ` <div :id="component.url"> <h1>{{component.heading}}</h1>{{component.content.repeat(10)}}</div>`,
    props: ['component'],
}