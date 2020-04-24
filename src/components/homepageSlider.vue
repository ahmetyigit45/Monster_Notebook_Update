<template>
  <div class="custom-slider">
    <v-carousel cycle height="600" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src:
            "https://img-monsternotebook.mncdn.com/UPLOAD/BANNERS/HOMEPAGE/anasayfa/slider/RTX_Its_On_Banner.png"
        },
        {
          src:
            "https://img-monsternotebook.mncdn.com/UPLOAD/BANNERS/HOMEPAGE/anasayfa/slider/Amazon-Banner.jpg"
        },
        {
          src:
            "https://img-monsternotebook.mncdn.com/UPLOAD/BANNERS/HOMEPAGE/anasayfa/slider/A5_V15-4_Banner.png"
        },
        {
          src:
            "https://img-monsternotebook.mncdn.com/UPLOAD/BANNERS/HOMEPAGE/anasayfa/slider/Huma-H5-Banner.png"
        },
        {
          src:
            "https://img-monsternotebook.mncdn.com/UPLOAD/BANNERS/HOMEPAGE/anasayfa/slider/A5_V15-2_Banner.png"
        },
        {
          src:
            "https://img-monsternotebook.mncdn.com/UPLOAD/BANNERS/HOMEPAGE/anasayfa/slider/HTC.jpg"
        }
      ]
    };
  }
};
</script>
<style scoped>
.custom-slider{
  z-index: 1;
}
</style>