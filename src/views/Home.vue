<template>
  <div class="home">
    <Header/>
    <HeaderLogo/>
    <Slider/>
    <br>
    <productSlider/>
    <br>
    <productMultiCard/>
    <br>
    <comment/>
    <br>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import HeaderLogo from '@/components/HeaderLogo.vue'
import Slider from '@/components/Slider.vue'
import productSlider from '@/components/productSlider.vue'
import productMultiCard from '@/components/productMultiCard.vue'
import comment from '@/components/comment.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    HeaderLogo,
    Slider,
    productSlider,
    productMultiCard,
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
