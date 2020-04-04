<template>
    <div class="ProductDetail">
        <Header/>
        <HeaderLogo/>
        <ProductSection1/>
        <ProductSection2/>
        <ProductSection3/>
        <sellProduct/>
        <Footer/>
    </div>
</template>


<script>
import Header from '@/components/Header.vue'
import HeaderLogo from '@/components/HeaderLogo.vue'
import ProductSection1 from '@/components/ProductSection1.vue'
import ProductSection2 from '@/components/ProductSection2.vue'
import ProductSection3 from '@/components/ProductSection3.vue'
import sellProduct from '@/components/sell_product.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'ProductDetail',
    components: {
    Header,
    HeaderLogo,
    ProductSection1,
    ProductSection2,
    ProductSection3,
    sellProduct,
    Footer
  } 
}
</script>