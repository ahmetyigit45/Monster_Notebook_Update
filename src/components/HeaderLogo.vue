<template>
  <div class="custom-navbar">
    <div class="custom-logo">
      <router-link v-bind:to="'/'">
        <img class="image" src="../assets/img/logo-evdekal.gif" alt />
      </router-link>
    </div>

    <!--    Dropdown Başlangıç    -->
    <div class="custom-dropdown">
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
    axios.get("http://localhost:3000/category").then(response => {
      this.Categories = response.data;
      //console.log(this.Categories);
    });
    axios.get("http://localhost:3000/sub_category").then(response => {
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
.image{
    width: 100%;
    height: 80px !important;
}
.custom-navbar {
  overflow: hidden;
  width: 100%;
  background: #15161a;
  font-family: Arial, Helvetica, sans-serif;
  display: inline-block;
  margin-bottom: -7px;
}

.custom-navbar a {
  float: left;
  width: 100%;
  margin: auto;
  font-size: 12px;
  color: white;
  text-align: center;
  text-decoration: none;
}

.custom-logo {
  float: left;
  width:25%;
  height: 80px !important;
  position: relative;
  top: 15px;
  margin-bottom: 10px;
  text-align: center;
  z-index: 999;
}

.custom-dropdown {
  float: left;
  display: block;
  width: 75%;
  overflow: hidden;
  line-height: 30px;
}

.custom-dropdown .custom-dropbtn {
  font-size: 8px;
  width: 20%;
  color: white;
  background-color: inherit;
  font: inherit;
  margin: 0;
  height: 50px !important;
  margin-top: 40px !important;
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
  text-align: center;
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
li{
  width: 14%;
  margin-top:20px;
}
.tasarım{
  width: 95%;
  display: inline-block;
}
.custom-card-categori{
  text-align: center;
  display: block;
}
.productsCards{
  text-align: center;
}
h4{
  font-size:15px !important;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media screen and (min-width: 1400px){
  .custom-dropdown {
  float: right;
  width: 50%;
}
  .custom-logo {
  width:50%;
  height: 110px ;
}
  .tasarım{
  width: 80%;
  display: inline-block;
  
}
.image{
    width: 80% !important;
    height: 110px ;
}
.custom-card-categori{
  text-align: center;
  display: block;
}
.productsCards{
  text-align: center;
}
h4{
  font-size:18px !important;
}
}
@media screen and (max-width: 900px) {
li{
  font-size: 1vw;
}
.custom-card-categori img{
  width: 100%;
}
h4{
  font-size: 1.2vw !important;
}
.custom-navbar a {

  font-size: 8px;
}
.image{
    width: 70%;
    height: 100%;
}
.custom-logo {
  
  width:100%;
  position: relative;
  top: 15px;
  margin-bottom: 10px;
  text-align: center;
  z-index: 10;
}

.custom-dropdown {
  float: left;
  display: block;
  width: 100%;
  overflow: hidden;
  line-height: 30px;
}

.custom-dropdown .custom-dropbtn {
  font-size: 80%;
  width: 33%;
  color: white;
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
  height: 150px;
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
