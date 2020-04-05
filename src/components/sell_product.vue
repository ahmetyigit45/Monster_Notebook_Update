<template>
  <div id="carousel" style="background:#15161a">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-8 text-center custom-h2">
          <h1>Çok Satan Notebooklar</h1>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-8 text-center">
          <carousel
            :autoplay="false"
            :loop="false"
            :nav="true"
            :dots="false"
            :responsive="{0:{items:1,nav:true},414:{items:2,nav:true},1000:{items:4,nav:true}}"
            :margin="5"

          >
          <!--
            <div class="custom-card">
              <a href>
                <img src="@/assets/img/1650.png" style="width:100%" />
                <div class="container">
                  <h4>
                    <b>John Doe</b>
                  </h4>
                </div>
              </a>
            </div>
            -->

            <card/>
            <card/>
            <card/>
            <card/>
            <card/>


          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import carousel from "vue-owl-carousel";
import card from '@/components/card.vue'

export default {
  components: { carousel,card }
};
</script>

<style>
.custom-card {
  width: 100%;
}
.custom-card h4 {
  color: orange;
}

.container {
  text-align: center;
  margin-top: -20px;
}
</style>