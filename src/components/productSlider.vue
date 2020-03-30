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
            :center="true"
            :autoplay="true"
            :loop="false"
            :nav="true"
            :dots="true"
            :responsive="{0:{items:1,nav:false},600:{items:1,nav:false},900:{items:1,nav:true}}"
          >
            <div class="custom-card" v-for="item in AltKategoriler" :key="item.id">
              <a href>
                <img :src="require(`@/assets/img/${item.image_name}`)" alt="">
                <div class="container">
                  <h4>{{item.name}}</h4>
                  <h4>{{item.description}}</h4>
                  <h4>İNCELE</h4>
                </div>
              </a>
            </div>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import carousel from "vue-owl-carousel";
import subCategories from "@/jsondata/subCategories.json";
export default {
  data() {
    return {
      AltKategoriler: subCategories

      
    };
  },
  components: { carousel }
};
</script>

<style>
.active{background-color: transparent !important;}
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
.custom-h2{
  color: white;
  font-weight: bold;
}
</style>