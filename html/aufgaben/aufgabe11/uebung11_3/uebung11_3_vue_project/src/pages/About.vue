<template>
  <main-layout>
    <div>
      <p>About page</p>
      <div :style="{display:'flex', justifyContent: 'center', flexDirection: 'column'}">
        <div :style="{display:'flex', justifyContent: 'center'}">
          <p :style="{textAlign:'center',fontSize: 30 +'px',borderColor:'black',borderStyle: 'dashed',borderWidth: 5 + 'px', padding:3 + 'px'}">
            This web project was created by <br> <a :style="{textDecoration:'none', color:'rgba(254, 186, 60, 0.982)'}"
                                                    :target="'_blank'" :href="'https://github.com/mariohoenighausen'">Mario
            Hönighausen</a> <br> as part of the Introduction to web engineering course <br> by <a
              style="color:green; text-decoration: none;" target="_blank" href="https://kaul.inf.h-brs.de">Prof. Dr. M.
            Kaul</a> <br> in Semester 5 at <a :style="{textDecoration:'none',color:'rgb(0, 132, 255)'}" :target="'_blank'"
                                              :href="'https://www.h-brs.de/de'">university for applied sciences
            Bonn-Rhein-Sieg</a> <br>
            <br> Everything until now has been written with <strong :style="{color:'black'}">HTML5</strong>, <strong
              :style="{color:'black'}">CSS3</strong> and vanilla <strong :style="{color:'black'}">JavaScript</strong>
              </p>
        </div>
      </div>
      <div :style="{display:'none', justifyContent: 'center' }">
        <p>Tutorials</p>
        <ul>
          <li><a href="https://www.w3schools.com/css/default.asp">CSS3</a></li>
          <li><a href="https://www.w3schools.com/html/default.asp">HTML5</a></li>
          <li><a href="https://www.w3schools.com/js/default.asp">JavaScript</a></li>
          <li><a href="https://www.w3schools.com/howto/default.asp">Component How To</a></li>
          <li><a href=""></a></li>
        </ul>
      </div>
    </div>
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
