<template>
  <div id="div" style="background: #2a2b30; color:white;">
    <div id="cont">
      <div class="row">
        <div class="col-8 slider1">
          <agile class="main" ref="main" :options="options1" :as-nav-for="asNavFor1">
            <div
              class="slide"
              v-for="(slide, index) in slides"
              :key="index"
              :class="`slide--${index}`"
            >
              <img :src="slide" />
            </div>
          </agile>
          <agile class="thumbnails" ref="thumbnails" :options="options2" :as-nav-for="asNavFor2">
            <div
              class="slide slide--thumbniail"
              v-for="(slide, index) in slides"
              :key="index"
              :class="`slide--${index}`"
              @click="$refs.thumbnails.goTo(index)"
            >
              <img :src="slide" />
            </div>
            <template slot="prevButton">
              <i class="fas fa-chevron-left"></i>
            </template>
            <template slot="nextButton">
              <i class="fas fa-chevron-right"></i>
            </template>
          </agile>
        </div>
        <div class="col-4 prop" v-for="item in product" :key="item.id">
          <div v-if="item.id === 1">
            <h1
              style="line-height:1;font-weight:800;text-align:left;font-size:50px;width:100%;height:135px;font-family:sbold;margin-top:30px;color:white; "
            >{{item.name + " " + item.ekran_türü +"' " + item.model}}</h1>
            <div class="prop-text">
              <ul style="list-style:none;">
                <li>{{item.cpu}}</li>
                <li>{{item.gpu}}</li>
                <li>{{item.ekran}}</li>
                <li>{{item.bellek}}</li>
                <li>{{item.depolama_1_Port}}</li>
                <li>{{item.isletim_sistemi}}</li>
                
              </ul>
            </div>
            <a class="tumdetay" href="#TeknikOzellikler">Tüm Teknik Özellikler</a>
            <div class="prices">
              <span class="discountRate">% {{item.indirim_orani}}</span>
              <span class="oldPrice">{{item.fiyat}},00 TL</span>
              <span class="lastPrice">5.199,00 TL</span>
            </div>
            <span class="installment">460,98 TL x 12 ay'a varan Taksit Seçenekleri</span>
            <div class="priceBottom">
              <span
                style="padding:2px 10px 2px 10px;background:#fc0f5f;font-size:20px;float:left;border-radius:3px;"
              >700 TL kazanç</span>
              <div class="text-center">
                <v-rating v-model="rating" class="text-warning" color="orange" size="14"></v-rating>
              </div>
            </div>
            <div>
              <b-button class="text-center font-weight-bold w-75 p-2 basket">
                <p style="display:block;">ÖZELLEŞTİR VE SEPETE EKLE</p>(ÖN SİPARİŞ)
              </b-button>
            </div>
            <div>
              <span class="tag">
                <i class="fas fa-tag fa-lg" style="color:#26df2e;"></i> İndirim Bildir
              </span>
              <span class="tag">
                <i class="fas fa-exchange-alt fa-lg" style="color:#26df2e;"></i> Karşılaştır
              </span>
              <span class="tag">
                <i class="far fa-heart fa-lg" style="color:#26df2e;"></i> Favori
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#div {
  background-image: linear-gradient(to bottom right, #474650, #18181b);
}
li {
  margin-top: 10px;
  display: block;
  width: 100%;
  text-align: left;
  white-space: nowrap;
  font-size: 14px;
}
li::before {
  content: "•  ";
  color: #26df2e;
}
.container {
  text-align: center;
  height: 820px;
}
.slider1 {
  font-family: "Lato", sans-serif;
  font-weight: 300;
  margin: 0 auto;
  max-width: 900px;
  padding: 30px;
  float: left;
}
.prop {
  float: right;
  height: 400px;
}
.prop-text {
  margin: 20px;
}
.tumdetay {
  cursor: pointer;
  display: block;
  text-align: left;
  color: #26df2e;
  padding-left: 20px;
  text-decoration-line: none;
}
.tümdetay::before {
  content: "***  ";
  color: #26df2e;
  font-family: "icomoon";
  margin-right: 10px;
  display: inline-block;
  font-size: 10px;
}
.prices {
  margin-top: 25px;
  width: 100%;
  position: relative;
}
.discountRate {
  padding: 10px 8px;
  font-size: 30px;
  display: inline-block;
  background: #fc0f5f;
  border-radius: 3px;
  margin-left: 20px;
  font-family: sbold;
}
.oldPrice {
  position: absolute;
  color: #c9c9c9;
  font-size: 20px;
  text-decoration-line: line-through;
  top: 0px;
  margin-left: 5px;
  font-family: sbold;
}
.lastPrice {
  position: absolute;
  color: #fff;
  top: 10px;
  margin-left: 5px;
  font-size: 45px;
  font-family: sbold;
  letter-spacing: 1px;
}
.installment {
  margin-top: 12px;
  color: #26df2e;
  font-size: 14px;
  text-align: left;
  margin-left: 20px;
  cursor: pointer;
  font-family: mediumA;
}
.priceBottom {
  margin: 15px 0px 15px 20px;
}
.basket:hover {
  background: #3376ff;
}
.basket {
  margin: 15px 0px 15px 20px;
  background: #26df2e;
}
.tag {
  margin-left: 20px;
  letter-spacing: 1px;
  cursor: pointer;
}
.main {
  margin-bottom: 30px;
}

.thumbnails {
  margin: 0 -5px;
  width: calc(100% + 10px);
}

.agile__nav-button {
  background: transparent;
  border: none;
  color: #ccc;
  cursor: pointer;
  font-size: 24px;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.thumbnails .agile__nav-button {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.thumbnails .agile__nav-button--prev {
  left: -45px;
}
.thumbnails .agile__nav-button--next {
  right: -45px;
}
.agile__nav-button:hover {
  color: #888;
}
.agile__dot {
  margin: 0 10px;
}
.agile__dot button {
  background-color: #eee;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  width: 10px;
}
.agile__dot--current button,
.agile__dot:hover button {
  background-color: #888;
}

.slide {
  -webkit-box-align: center;
  align-items: center;
  box-sizing: border-box;
  color: #fff;
  display: -webkit-box;
  display: flex;
  width: 840px;
  height: 550px;
  -webkit-box-pack: center;
  justify-content: center;
}
.slide--thumbniail {
  cursor: pointer;
  border: 1px solid rgb(48, 31, 31);
  border-radius: 3%;
  height: 100px;
  padding: 0 5px;
  margin-left: 10px;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
}
.slide--thumbniail:hover {
  opacity: 0.75;
}
.slide img {
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
  width: 100%;
}
</style>


<script>
import { VueAgile } from "vue-agile";
import axios from "axios";
export default {
  components: {
    agile: VueAgile
  },
  data() {
    return {
      product: [], //ürün detayları json da
      rating: 3,
      asNavFor1: [],
      asNavFor2: [],
      options1: {
        dots: false,
        fade: true,
        navButtons: false
      },

      options2: {
        autoplay: true,
        centerMode: true,
        dots: false,
        navButtons: false,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 5
            }
          },

          {
            breakpoint: 1000,
            settings: {
              navButtons: true
            }
          }
        ]
      },

      slides: [
        "https://github.com/ahmetyigit45/Monster_Notebook_Update/blob/master/src/assets/img/all_product/A5_V15_slider_1.png?raw=true",
        "https://github.com/ahmetyigit45/Monster_Notebook_Update/blob/master/src/assets/img/all_product/A5_V15_slider_2.png?raw=true",
        "https://github.com/ahmetyigit45/Monster_Notebook_Update/blob/master/src/assets/img/all_product/A5_V15_slider_3.png?raw=true",
        "https://github.com/ahmetyigit45/Monster_Notebook_Update/blob/master/src/assets/img/all_product/A5_V15_slider_4.png?raw=true",
        "https://github.com/ahmetyigit45/Monster_Notebook_Update/blob/master/src/assets/img/all_product/A5_V15_slider_5.png?raw=true",
        "https://github.com/ahmetyigit45/Monster_Notebook_Update/blob/master/src/assets/img/all_product/A5_V15_slider_6.png?raw=true",
        "https://github.com/ahmetyigit45/Monster_Notebook_Update/blob/master/src/assets/img/all_product/A5_V15_slider_7.png?raw=true",
      ]
    };
  },

  mounted() {
    axios.post("http://localhost:3000/product_details").then(response => {
      this.product = response.data;
    });
    this.asNavFor1.push(this.$refs.thumbnails);
    this.asNavFor2.push(this.$refs.main);
  }
};
</script>
