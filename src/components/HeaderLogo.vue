<template>
  <div class="custom-navbar">
    <div class="custom-logo">
      <router-link v-bind:to="'home'">
        <img src="../assets/img/logo.png" alt />
      </router-link>
    </div>

    <!--    Dropdown Başlangıç    -->
    <div class="custom-dropdown" style="float:right;">
      <button v-for="item in kategoriler" :key="item.id" class="custom-dropbtn" id="${item.id}">
        <strong>{{item.name}}</strong>
        <i class="fa fa-caret-down"></i>
      </button>

      <div class="custom-content">
        <div class="productsCards">
          <div class="custom-card-categori">
            <ul class="tasarım">
              <li v-for="item2 in AltKategoriler" :key="item2.id">
                <a href>
                  <img :src="require(`@/assets/img/${item2.image_name}`)" alt />
                  <h3>{{item2.name}}</h3>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--    Dropdown Başlangıç    -->
  </div>
</template>


<script>
////import ModelCards from "@/components/divdiv.vue";
import Categories from "@/jsondata/categories.json";
import subCategories from "@/jsondata/subCategories.json";
export default {
  data() {
    return {
      kategoriler: Categories,
      AltKategoriler: subCategories
    };
  },
  components: {}
};
</script>



<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

.custom-navbar {
  overflow: hidden;
  background: #15161a;
  font-family: Arial, Helvetica, sans-serif;
  height: 88px;
}

.custom-navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.custom-logo {
  float: left;
  padding: 0px 0px 0px 80px;
  position: absolute;
  z-index: 9999;
}

.custom-dropdown {
  float: left;
  overflow: hidden;
  line-height: 80px;
}

.custom-dropdown .custom-dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font: inherit;
  margin: 0;
}

.custom-content {
  display: none;
  position: absolute;
  background: #2a2b30;
  width: 100%;
  left: 0;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  height: 250px;
  margin-top: -21px;
}

.custom-dropdown:hover .custom-content {
  display: block;
}

/* Create three equal columns that floats next to each other */
.column {
  float: left;
  width: 33.33%;
  padding: 10px;
  background-color: #ccc;
  height: 250px;
}

.column a {
  float: none;
  color: black;
  padding: 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.column a:hover {
  background-color: #ddd;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    height: auto;
  }
}

.custom-card-categori img {
  height: 150px;
  margin: auto;
}
ul {
  text-align: center;
}

ul li {
  display: inline-block;
  *display: inline; /*IE7*/
  *zoom: 1; /*IE7*/
}

/* Alt kısım tasarım için var, silinebilir*/

.tasarim {
  background-color: #333;
  padding: 0;
  border-radius: 15px;
}

.tasarim li {
  padding: 1em;
}

.custom-card-categori a {
  color: orange;
  text-decoration: none;
}
.custom-card-categori a:hover {
  color: orange;
}
</style>
