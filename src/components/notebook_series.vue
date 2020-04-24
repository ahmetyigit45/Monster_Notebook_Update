<template>
  <div id="carousel" style="background:#15161a">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-6 text-center custom-h2">
          <h1>Monster Notebook Serileri</h1>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-6 text-center">
          <carousel
            :autoplay="false"
            :loop="true"
            :navigationEnabled="true"
            :centerMode="true"
            :perPage="1"
            :scrollPerPage="false"
            :navigationClickTargetSize="10"
            :paginationSize="0"
            :perPageCustom="[[350, 1],[650, 1], [1366, 1], [1550, 1]]"
          >
            <slide v-for="item in notebook_serileri" :key="item.id">
              <div class="custom-card">
                <a href>
                  <img :src="item.image_name" alt />
                  <div class="container">
                    <h4>{{item.name}}</h4>
                    <h4>{{item.description}}</h4>
                    <h4>İNCELE</h4>
                  </div>
                </a>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { Carousel, Slide } from "vue-carousel";
import axios from "axios";
export default {
  data() {
    return {
      notebook_serileri: []
      //filtered: subCategories.filter(item => item.categori === 'notebook')
    };
  },
  components: { Carousel, Slide },
  mounted() {
    axios.get("http://localhost:3000/notebookseries").then(response => {
      this.notebook_serileri = response.data;
    });
  }
};
</script>



<style>
.active {
  background-color: transparent !important;
}
.custom-card {
  width: 100%;
}
.custom-card h4 {
  color: black;
}

.container {
  text-align: center;
  margin-top: -20px;
}
.custom-h2 {
  color: white;
  font-weight: bold;
}
</style>