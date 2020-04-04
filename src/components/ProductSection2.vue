<template >
  <div style="background-image: linear-gradient(to bottom right, #474650, #18181b);">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-8 text-center">
          <carousel
            :autoplay="false"
            :loop="true"
            :navigationEnabled="true"
            :centerMode="true"
            :perPage="4"
            :scrollPerPage="false"
            :navigationClickTargetSize="10"
            :paginationSize="0"
            :perPageCustom="[[350, 1],[650, 2], [1366, 3], [1550, 4]]"
          >
            <slide>
              <!-- comment başlama  -->
              <button>
                <div class="custom-card">
                  <div class="pc-name"> Bellek</div>
                  <br />
                  <div class="comment-header"></div>
                  <div class="comment">
                    <p></p>
                  </div>
                  <br />
                  <div class="comment-user"></div>
                </div>
              </button>
            </slide>
            <!-- comment bitme  -->
          </carousel>
        </div>
      </div>
    </div>

    <hr class="style1" />
  </div>
</template>
<style scoped>
.style1 {
  border-top: 1px solid #0f0d0d;
}
</style>
<script>
//import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  components: { //VueperSlides, VueperSlide 
  }
};
</script>
