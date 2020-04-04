<template>
  <div class="custom-navbar">
    <div class="custom-logo">
      <router-link v-bind:to="'/'">
        <img src="../assets/img/logo-evdekal.gif" alt />
      </router-link>
    </div>

    <!--    Dropdown Başlangıç    -->
    <div class="custom-dropdown" style="float:right;">
      <button class="custom-dropbtn" v-for="item in Categories" :key="item.id" @mouseover="shownCategory = item">
        <router-link :to="item.path">
          <strong>{{item.name}}</strong>
        <i class="fa fa-caret-down"></i>
        </router-link>
      </button>

      <div class="custom-content">
        <div class="productsCards">
          <div class="custom-card-categori">
            <ul class="tasarım">
              <li v-for="item2 in shownItems" :key="item2.id">
                <a href>
                  <img :src="item2.image_name" alt />
                  <h4>{{item2.name}}</h4>
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
import axios from "axios";
export default {
  data() {
    return {
      Categories:[],
      subCategories:[],
      all_pc: null,
      shownCategory: null,
      shownItems: [],
    };
  },
  components: {},
  watch: {
    shownCategory(newValue){
      if (newValue.categori_id) this.shownItems = this.subCategories.filter(item => item.categori === newValue.categori && item.categori_id === newValue.categori_id)
      else this.shownItems = this.subCategories.filter(item => item.categori === newValue.categori)
    }
  },
  mounted(){
    axios.post("http://localhost:3000/category").then(response => {
      this.Categories = response.data;
      //console.log(this.Categories);
    });
    axios.post("http://localhost:3000/sub_category").then(response => {
      this.subCategories = response.data;
      //console.log(this.subCategories);
    });
  }
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
  max-height: 88px;
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
.custom-dropbtn :hover{
  color:white;
  text-decoration: none;
}

.custom-content {
  display: none;
  position: absolute;
  background: #2a2b30;
  width: 100%;
  left: 0;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  height: 200px;
  margin-top: -69px;
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
  height: 100px;
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
