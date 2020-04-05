<template>
    <div class="ProductDetailId">
        <Header/>
        <HeaderLogo/>
        <ProductSection1/>
        <ProductSection3/>
        <sellProduct/>
        <Footer/>
    </div>
</template>


<script>
import Header from '@/components/Header.vue'
import HeaderLogo from '@/components/HeaderLogo.vue'
import ProductSection1 from '@/components/ProductSection1.vue'
import ProductSection3 from '@/components/ProductSection3.vue'
import sellProduct from '@/components/sell_product.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'ProductDetailId',
    components: {
    Header,
    HeaderLogo,
    ProductSection1,
    ProductSection3,
    sellProduct,
    Footer
  } 
}
</script>