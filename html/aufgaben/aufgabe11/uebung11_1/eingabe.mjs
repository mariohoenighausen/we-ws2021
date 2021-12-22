export default {
  name: "Eingabe",
  template: ` <div>
    <input v-model="text" type="text" placeholder="edit"/>
  <p>Letters input {{ getInputLetterCount }}</p>
  <p>White space input {{ getInputWhiteSpaceCount }}</p>
  <p>Word input {{ getInputWordCount }}</p>
  </div>`,
  data() {
    return {
      text: "edit",
    }
  },
  computed: {
    getInputWhiteSpaceCount: function () {
      return this.text.split(' ').length - 1;
    },
    getInputLetterCount: function () {
      return this.text.replace(/[^A-Za-zÄäÜüÖöß]+/g, '').length;
    },
    getInputWordCount: function () {
      var val = this.text.match(/\p{L}+/gu)
      return val ? val.length : 0;
    },
  },
}