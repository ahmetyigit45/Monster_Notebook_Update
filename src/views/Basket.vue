<template>
  <div class="basket">
    <div class="custom-header">
      <div class="custom-logo">
        <router-link v-bind:to="'/'">
          <img class="image" src="../assets/img/logo-evdekal.gif" alt />
        </router-link>
      </div>
       <div class="custom-dropdownn active">
            <a class="title active"  href=""><i class="fas fa-shopping-cart fa-2x"></i>&nbsp;&nbsp;<p style="display:inline-block;">Sepetim</p> &nbsp;&nbsp;<i style="margin-left:25px;" class="fas fa-ellipsis-h fa-2x"></i></a>&nbsp;&nbsp;&nbsp;
    </div>
    <div class="custom-dropdownn">
            <a class="title" href=""><i class="fas fa-truck fa-2x "></i>&nbsp;&nbsp;Teslimat &nbsp;&nbsp;<i style="margin-left:25px;" class="fas fa-ellipsis-h fa-2x"></i></a>&nbsp;&nbsp;&nbsp;
    </div>
    <div class="custom-dropdownn">
            <a class="title" href=""><i class="fas fa-money-check-alt fa-2x"></i>&nbsp;&nbsp;Ödeme &nbsp;&nbsp;<i style="margin-left:25px;" class="fas fa-ellipsis-h fa-2x"></i></a>&nbsp;&nbsp;&nbsp;
    </div>
    <div class="user"> 
      <a class="title active"  href=""><i class="far fa-user fa-2x"></i>&nbsp;&nbsp;</a>&nbsp;&nbsp;&nbsp;
    </div>
    </div>
    <div class="context-header">Sepetim</div>
    <div class="context">
        <div v-for="(item,index)  in sepetUrunleri" :key="item.id">
            <div style="display:inline-block;width:100%;">
              <div class="context-products">
                <img style="width:20%;float:left;" v-bind:src="item.url">
                <div class="product-name">
                <span style="display:block;">{{item.name}}</span>
                <a style="font-size:13px;color:orange;text-decoration-line:none;" href="">Ürün Özellikleri  <i class="fas fa-chevron-down"></i></a>
                </div>
                <div class="piece">
                  <span>Adet &nbsp;&nbsp;&nbsp;</span>
                  <b-button style="background:#15161a;margin-left:10%;" href="#"  v-on:click="decrease(item,totalPrice,sumProductPrice)"><i class="fas fa-minus"></i></b-button>
                  <span style="margin-left:5%;">{{item.quantity}}</span>
                  <b-button style="background:#15161a;margin-left:5%;" href="#"  v-on:click="increment(item,totalPrice,sumProductPrice)"><i class="fas fa-plus"></i></b-button>
                </div>
                <div class="pricess">
                  <span>{{sumProductPrice}}</span>
                </div>
                <div class="delete">
                <b-button style="background:#15161a;margin-left:5%;" href="#" v-on:click="removeCard(index)"><i class="fas fa-times fa-2x"></i></b-button>
                </div>
              </div>
            </div>
        </div> 
      </div>
      <div class="context-prices">
                <h2 style="margin:5%;">Sipariş Özeti</h2>
                <span class="small-box-left">Toplam Fiyatı:</span>
                <span class="small-box-right">{{totalPrice}}</span>
                <b-button 
                class="baskett"
                >
                  <p style="display:block;">Satın Al</p>(ÖN SİPARİŞ)
                </b-button>
              </div>
    </div>
</template>
<style>
.delete{
  width: 5%;
  display: block;
  float: left;
  margin: 35px 10px 0px 10px;
  padding:5px;
}
.baskett:hover {
  background: #3376ff !important;
}
.baskett {
  width: 60%;
  text-align: center;
  font-weight: 700;
  margin: 5px 0px 20px 20%;
  background: #26df2e !important;
}
.small-box-left{
  float: left;
  font-size: 20px;
  margin:5%;
  width: 40%;
  text-align: left;
}
.small-box-right{
  float: left;
  display: block;
  font-size: 20px;
  margin:5%;
  width: 40%;
  text-align: right;
}
.pricess{
  display: block;
  text-align: right;
  float: left ;
  width:15%;
  margin: 35px 10px 0px 10px;
  padding:5px;
  height: auto;
  font-size: 20px;
  color: #fff;
}
.piece{
  display: block;
  float: left;
  width: 25%;
  background: #15161a;
  margin: 35px 10px 0px 10px;
  padding:5px;
  height: auto;
  font-size: 20px;
  color: #fff;
}
.context{
  display: inline-block;
  height: calc(100vh);
  background-size: 100%;
  text-align: left;
  width:60%;
}
.context-header{
  width: 90%;
  font-size: 45px;
  font-weight: 600;
  color: #fff;
  text-align: left;
  margin:5% 0px 0px 5%;
}
.context-products{
  width: 100%;
  display: inline-block;
  background: #2a2b30;
  margin:40px 0px 0px 5%;
  text-align: left;
}
.context-prices{
  width: 30%;
  float: right;
  margin-top: 40px;
  margin-left: 25px;
  display: block;
  background: #2a2b30;
  color:#fff;
}
.product-name{
  display: block;
  float: left;
  font-size:20px;
  color: #fff;
  width:25%;
  padding: 25px 10px 0px 10px;
}
#shop{
  text-align: center;
  margin:25% 0px 0px 25%;
}
.basket{
  background-color:#15161a;
  height: 100%;
  width: 100%;
  background-size: contain;
  
}
.image{
    width: 100%;
    height: 100%;
}
.title{
    font-size:14px;
    text-decoration-line: none !important;
}
.custom-header {
  overflow: hidden;
  width: 100%;
  background: #2a2b30;
  font-family: Arial, Helvetica, sans-serif;
  display: inline-block;
}

.custom-header a {
  float: left;
  width: 100%;
  margin: auto;
  color:#9fa3a9;
  font-size: 16px;
  text-align: center;
  text-decoration-line: none;
}
.active{
  color:#26df2e !important;
  text-decoration-line: none !important;
}

.custom-logo {
  float: left;
  width:25%;
  position: relative;
  top: 15px;
  margin-bottom: 10px;
  text-align: center;
  z-index: 999;
}
.custom-dropdownn {
  float: left;
  display: block;
  width: 15%;
  overflow: hidden;
  line-height: 30px;
  margin-top:30px;
}
.user{
  float: right;
  display: block;
  width: 15%;
  overflow: hidden;
  line-height: 30px;
  margin-top:30px;
}
.custom-dropdown .custom-dropbtn {
  font-size: 14px;
  width: 20%;
  color: white;
  background-color: inherit;
  font: inherit;
  margin: 0;
  height: 90px;
}
.custom-dropbtn :hover{
  color:white;
  text-decoration-line: none;
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      product: [],
      sepetUrunleri:[],
      totalPrice:0,
      sumProductPrice:[],
    };
  },
  components: {},
  methods:{
    removeCard(index){
      this.sepetUrunleri.splice(index,1)
      this.totalPrice=this.totalPrice-this.sumProductPrice;
      localStorage.setItem("sepetUrunleri",JSON.stringify(this.sepetUrunleri));
      localStorage.setItem("totalPrice",JSON.stringify(this.totalPrice));

      },
    increment(item,totalPrice,sumProductPrice){
      item.quantity += 1;
      this.sumProductPrice=sumProductPrice+item.fiyat;
      this.sumProductPrice=Number((this.sumProductPrice).toFixed(3));
      this.totalPrice=totalPrice+item.fiyat;
      this.totalPrice=Number((this.totalPrice).toFixed(3));
      localStorage.setItem("sepetUrunleri",JSON.stringify(this.sepetUrunleri));
      localStorage.setItem("totalPrice",JSON.stringify(this.totalPrice));
    },
    decrease(item,totalPrice,sumProductPrice){
      item.quantity -= 1;
      this.sumProductPrice=sumProductPrice-item.fiyat;
      this.sumProductPrice=Number((this.sumProductPrice).toFixed(3));
      this.totalPrice=totalPrice-item.fiyat;
      this.totalPrice=Number((this.totalPrice).toFixed(3));
      localStorage.setItem("sepetUrunleri",JSON.stringify(this.sepetUrunleri));
      localStorage.setItem("totalPrice",JSON.stringify(this.totalPrice));
    }
  },
    mounted() {
    axios.get("http://localhost:3000/basket_category").then(response => {
      this.product = response.data;
    });
    this.asNavFor1.push(this.$refs.thumbnails);
    this.asNavFor2.push(this.$refs.main);
  },
  created(){
	this.sepetUrunleri=JSON.parse(localStorage.getItem('sepetUrunleri'));
  console.log(typeof(this.sepetUrunleri));  

  this.totalPrice=JSON.parse(localStorage.getItem('totalPrice'));
  console.log(typeof(this.totalPrice));  

  this.sumProductPrice=JSON.parse(localStorage.getItem('totalPrice'));
  }
  
  

};

</script>


