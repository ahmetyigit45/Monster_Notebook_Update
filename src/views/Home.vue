<template>
  <div class="home">
    
    <Header/>
    <HeaderLogo/>
    <homepageSlider/>
    <br>
    <notebookSeries/>
    <br>
    <sellproduct/>
    <br>
    <comment/>
    <br>
    <kategori/>
    <br>
    <Footer/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import HeaderLogo from '@/components/HeaderLogo.vue'
import homepageSlider from '@/components/homepageSlider.vue'
import notebookSeries from '@/components/notebook_series.vue'
import sellproduct from '@/components/sell_product.vue'
import comment from '@/components/comment.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    HeaderLogo,
    homepageSlider,
    notebookSeries,
    sellproduct,
    comment,
    Footer,
  }
}
</script>
<style scoped>
.home{
  background: #15161a;
}
</style>
