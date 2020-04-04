<template>
  <div class="home">
    
    <Header/>
    <HeaderLogo/>
    <Footer/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import HeaderLogo from '@/components/HeaderLogo.vue'

import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    HeaderLogo,
    Footer,
  }
}
</script>
<style scoped>
.home{
  background: #15161a;
}
</style>
