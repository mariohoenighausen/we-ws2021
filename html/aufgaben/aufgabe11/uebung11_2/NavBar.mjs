export default {
  name: "NavBar",
  props: ['links', 'baseStyle'],
  template: `  <nav>
    <ul :style="baseStyle.ul">
      <li v-for="item in links"><a :href="item.url" :style="baseStyle.a">{{ item.name }}</a></li>
    </ul>
  </nav>`
}
