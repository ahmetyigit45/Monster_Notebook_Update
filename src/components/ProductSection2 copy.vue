<template >
  <div style="background-image: linear-gradient(to bottom right, #474650, #18181b);">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-8 text-center">
          <vueper-slides
            class="no-shadow"
            :visible-slides="5.5"
            :slide-ratio="1 / 12"
            :dragging-distance="70"
          >
            <vueper-slide
              class="ml-3 mt-4"
              style="background-color:#15161a;border-radius:3px;"
              v-for="i in 9"
              :key="i"
              :title="i.toString()"
            />
          </vueper-slides>
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
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  components: { VueperSlides, VueperSlide }
};
</script>
