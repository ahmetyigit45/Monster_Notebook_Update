<template>
    <div class="Filter">
        <Header/>
        <HeaderLogo/>
        <FilterLeft/>
        <Footer/>
    </div>
</template>
<style scoped>

</style>
<script>
import Header from '@/components/Header.vue'
import HeaderLogo from '@/components/HeaderLogo.vue'
import FilterLeft from "@/components/product_list_copy.vue";
import Footer from '@/components/Footer.vue'
export default {
    name: 'Filter',
     components: {
         Header,
         HeaderLogo,
         FilterLeft,
         Footer
     }
  }
</script>