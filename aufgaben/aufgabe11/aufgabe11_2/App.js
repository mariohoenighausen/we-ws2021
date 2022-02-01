import NavBar from "./NavBar.js";
import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";

new Vue({
  el: '#app',
  components: {
    navbar: NavBar,
    home: Home,
    about: About,
    contact: Contact
  },
  methods: {
    changeNavbarDirection: function () {
      this.baseStyle1.ul.flexDirection = this.baseStyle1.ul.flexDirection !== 'column' ? 'column' : 'row';
    }
  },
  data: function () {
    return {
      links: [
        {id: 0, url: '#home', name: 'Home'},
        {id: 1, url: '#about', name: 'About'},
        {id: 0, url: '#contact', name: 'Contact'}
      ],
      baseStyle1: {
        ul: {
          display: 'flex',
          flexDirection: 'row',
          listStyle: 'none',
          justifyContent: 'space-evenly'
        },
        a: {
          textDecoration: 'none',
          color: 'black',
        }
      },
      baseStyle2: {
        ul: {
          display: 'flex',
          flexDirection: 'column',
          listStyle: 'none',
          justifyContent: 'space-evenly'
        },
        a: {
          textDecoration: 'none',
          color: 'black',
        }
      },
      components: [{
        title: 'home',
        url: 'home',
        heading: 'Home',
        content: 'Here is some Text for my Home Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi consequatur natus provident sit? Asperiores autem fugit inventore ipsam modi, neque officia placeat rerum sint. Aliquid error officiis sapiente unde! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi consequatur natus provident sit? Asperiores autem fugit inventore ipsam modi, neque officia placeat rerum sint. Aliquid error officiis sapiente unde!'
      }, {
        title: 'about',
        url: 'about',
        heading: 'About',
        content: 'Some text about the owner of this website Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi consequatur natus provident sit? Asperiores autem fugit inventore ipsam modi, neque officia placeat rerum sint. Aliquid error officiis sapiente unde! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi consequatur natus provident sit? Asperiores autem fugit inventore ipsam modi, neque officia placeat rerum sint. Aliquid error officiis sapiente unde!'
      }, {
        title: 'contact',
        url: 'contact',
        heading: 'Contact',
        content: 'Some contact information Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi consequatur natus provident sit? Asperiores autem fugit inventore ipsam modi, neque officia placeat rerum sint. Aliquid error officiis sapiente unde! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi consequatur natus provident sit? Asperiores autem fugit inventore ipsam modi, neque officia placeat rerum sint. Aliquid error officiis sapiente unde!'
      }]
    }
  }
});

