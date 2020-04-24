<template>
  <div id="content" style="background: #15161a; color:white;">
    <mdb-navbar
      color="indigo"
      dark
      class="mb-3"
      style="background-image: linear-gradient(to bottom right, #474650, #18181b);width:100%;"
    >
      <mdb-navbar-toggler>
        <mdb-navbar-nav class="w-100">
          <mdb-nav-item href="#ÜrünAciklama" class="items active ">ÜRÜN AÇIKLAMASI</mdb-nav-item>
          <mdb-nav-item href="#Galeri" class="items">GALERİ</mdb-nav-item>
          <mdb-nav-item href="#TeknikOzellikler" class="items">TEKNİK ÖZELLİKLER</mdb-nav-item>
          <mdb-nav-item href="#" class="items">TAKSİT SEÇENEKLERİ</mdb-nav-item>
          <mdb-nav-item href="#Yorumlar" class="items">YORUMLAR</mdb-nav-item>
          <div class="badge text-wrap first-price">
            <p
              style="text-align:center;margin-top:14%; font-size:20px;font-weight:bold;"
            >5.199,00 TL</p>
          </div>
          <div class="basket-button">
            <b-button class="text-center font-weight-bold p-2 w-100 basket">
              <p style="display:block;">SEPETE EKLE</p>
            </b-button>
          </div>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <div  v-for="item1 in abra_bg" :key="item1.id">
      <b-img-lazy class="h-auto w-100" v-bind="mainProps" :src="item1.image_name" alt></b-img-lazy>
    </div>

    <div class="container-fluid">
      <!--  galeri  -->
      <div class="row justify-content-center">
        <div class="col-8 text-center">
          <div id="Galeri" class="w-100">
            <carousel
              :autoplay="false"
              :loop="true"
              :navigationEnabled="true"
              :centerMode="true"
              :perPage="1"
              :scrollPerPage="false"
              :navigationClickTargetSize="10"
              :paginationSize="10"
              :perPageCustom="[[350, 1],[650, 1], [1366, 1], [1550, 1]]"
            >
              <slide v-for="item in product_image" :key="item.id">
                <div v-if="item.product_id === 1">
                  <div class="custom-card">
                    <a href>
                      <img class="w-100" :src="item.url" alt />
                    </a>
                  </div>
                </div>
              </slide>
            </carousel>
          </div>
        </div>
      </div>
      <!--  Teknik Özellikler  -->
      <div class="row justify-content-center">
        <div class="col-8 text-center">
          <div
            id="TeknikOzellikler"
            style="width:87%;"
            class="m-auto"
            v-for="item in product_details"
            :key="item.id"
          >
            <div v-if="item.id === Number($route.params.id)">
              <p
                style="font-size:48px; text-align:center; margin-bottom:60px;font-family:sbold; font-weight:600;letter-spacing: .5px;"
              >Teknik Özellikler</p>
              <div>
                <!-- First Navbar-->
                <b-navbar toggleable type="dark" variant="dark" id="first_nav" class="mb-2 p-3">
                  <b-navbar-brand href="#">İşlemci Özellikleri</b-navbar-brand>

                  <b-navbar-toggle target="navbar-toggle-collapse1">
                    <template v-slot:default="{ expanded }">
                      <b-icon class="text-light" v-if="expanded" icon="dash"></b-icon>
                      <b-icon class="bg-dark" v-else icon="plus"></b-icon>
                    </template>
                  </b-navbar-toggle>

                  <b-collapse id="navbar-toggle-collapse1" is-nav>
                    <b-navbar-nav class="ml-auto" style="background-color: #15161a;">
                      <div>
                        <b-nav-item class="nav-element-left" href="#" disabled>İşlemci Mimarisi</b-nav-item>
                        <b-nav-item
                          class="nav-element-right"
                          href="#"
                          disabled
                        >{{item.cpu_mimarisi}}</b-nav-item>
                      </div>
                      <div>
                        <b-nav-item class="nav-element-left" href="#" disabled>İşlemci</b-nav-item>
                        <b-nav-item class="nav-element-right" href="#" disabled>{{item.cpu}}</b-nav-item>
                      </div>
                    </b-navbar-nav>
                  </b-collapse>
                </b-navbar>
                <!-- Second Navbar-->
                <b-navbar toggleable type="dark" variant="dark" id="first_nav" class="mb-2 p-3">
                  <b-navbar-brand href="#">Chipset Özellikleri</b-navbar-brand>

                  <b-navbar-toggle target="navbar-toggle-collapse2">
                    <template v-slot:default="{ expanded }">
                      <b-icon class="text-light" v-if="expanded" icon="dash"></b-icon>
                      <b-icon class="bg-dark" v-else icon="plus"></b-icon>
                    </template>
                  </b-navbar-toggle>

                  <b-collapse id="navbar-toggle-collapse2" is-nav>
                    <b-navbar-nav class="ml-auto" style="background-color: #15161a;">
                      <div>
                        <b-nav-item class="nav-element-left" href="#" disabled>Chipset</b-nav-item>
                        <b-nav-item class="nav-element-right" href="#" disabled>{{item.chipset}}</b-nav-item>
                      </div>
                    </b-navbar-nav>
                  </b-collapse>
                </b-navbar>
                <!-- Third Navbar-->
                <b-navbar toggleable type="dark" variant="dark" id="first_nav" class="mb-2 p-3">
                  <b-navbar-brand href="#">Ekran Kartı Özellikleri</b-navbar-brand>

                  <b-navbar-toggle target="navbar-toggle-collapse3">
                    <template v-slot:default="{ expanded }">
                      <b-icon class="text-light" v-if="expanded" icon="dash"></b-icon>
                      <b-icon class="bg-dark" v-else icon="plus"></b-icon>
                    </template>
                  </b-navbar-toggle>

                  <b-collapse id="navbar-toggle-collapse3" is-nav>
                    <b-navbar-nav class="ml-auto" style="background-color: #15161a;">
                      <div>
                        <b-nav-item class="nav-element-left" href="#" disabled>Ekran Kartı</b-nav-item>
                        <b-nav-item class="nav-element-right" href="#" disabled>{{item.gpu}}</b-nav-item>
                      </div>
                      <div>
                        <b-nav-item class="nav-element-left" href="#" disabled>Ekran Kartı Belleği</b-nav-item>
                        <b-nav-item class="nav-element-right" href="#" disabled>{{item.gpu_bellegi}}</b-nav-item>
                      </div>
                    </b-navbar-nav>
                  </b-collapse>
                </b-navbar>
                <!-- Fourth Navbar-->
                <b-navbar toggleable type="dark" variant="dark" id="first_nav" class="mb-2 p-3">
                  <b-navbar-brand href="#">Bellek Özellikleri</b-navbar-brand>

                  <b-navbar-toggle target="navbar-toggle-collapse4">
                    <template v-slot:default="{ expanded }">
                      <b-icon class="text-light" v-if="expanded" icon="dash"></b-icon>
                      <b-icon class="bg-dark" v-else icon="plus"></b-icon>
                    </template>
                  </b-navbar-toggle>

                  <b-collapse id="navbar-toggle-collapse4" is-nav>
                    <b-navbar-nav class="ml-auto" style="background-color: #15161a;">
                      <div>
                        <b-nav-item class="nav-element-left" href="#" disabled>Bellek</b-nav-item>
                        <b-nav-item class="nav-element-right" href="#" disabled>{{item.bellek}}</b-nav-item>
                      </div>
                    </b-navbar-nav>
                  </b-collapse>
                </b-navbar>
                <!-- Fifth Navbar-->
                <b-navbar toggleable type="dark" variant="dark" id="first_nav" class="mb-2 p-3">
                  <b-navbar-brand href="#">Depolama Özellikleri</b-navbar-brand>

                  <b-navbar-toggle target="navbar-toggle-collapse5">
                    <template v-slot:default="{ expanded }">
                      <b-icon class="text-light" v-if="expanded" icon="dash"></b-icon>
                      <b-icon class="bg-dark" v-else icon="plus"></b-icon>
                    </template>
                  </b-navbar-toggle>

                  <b-collapse id="navbar-toggle-collapse5" is-nav>
                    <b-navbar-nav class="ml-auto" style="background-color: #15161a;">
                      <div>
                        <b-nav-item class="nav-element-left" href="#" disabled>M.2 SSD Portu</b-nav-item>
                        <b-nav-item class="nav-element-right" href="#" disabled>{{item.depolama}}</b-nav-item>
                      </div>
                      <div>
                        <b-nav-item class="nav-element-left" href="#" disabled>1.Port M.2 SSD</b-nav-item>
                        <b-nav-item
                          class="nav-element-right"
                          href="#"
                          disabled
                        >{{item.depolama_1_Port}}</b-nav-item>
                      </div>
                      <div>
                        <b-nav-item class="nav-element-left" href="#" disabled>M.2 SSD Portu</b-nav-item>
                        <b-nav-item
                          class="nav-element-right"
                          href="#"
                          disabled
                        >{{item.depolama_2_Port}}</b-nav-item>
                      </div>
                      <div>
                        <b-nav-item class="nav-element-left" href="#" disabled>1.Port M.2 SSD</b-nav-item>
                        <b-nav-item
                          class="nav-element-right"
                          href="#"
                          disabled
                        >{{item.depolama_3_Port}}</b-nav-item>
                      </div>
                    </b-navbar-nav>
                  </b-collapse>
                </b-navbar>
                <!-- Sixth Navbar-->
                <b-navbar toggleable type="dark" variant="dark" id="first_nav" class="mb-2 p-3">
                  <b-navbar-brand href="#">İşletim Sistemi</b-navbar-brand>

                  <b-navbar-toggle target="navbar-toggle-collapse6">
                    <template v-slot:default="{ expanded }">
                      <b-icon class="text-light" v-if="expanded" icon="dash"></b-icon>
                      <b-icon class="bg-dark" v-else icon="plus"></b-icon>
                    </template>
                  </b-navbar-toggle>

                  <b-collapse id="navbar-toggle-collapse6" is-nav>
                    <b-navbar-nav class="ml-auto" style="background-color: #15161a;">
                      <div>
                        <b-nav-item class="nav-element-left" href="#" disabled>İşletim Sistemi</b-nav-item>
                        <b-nav-item
                          class="nav-element-right"
                          href="#"
                          disabled
                        >{{item.isletim_sistemi}}</b-nav-item>
                      </div>
                    </b-navbar-nav>
                  </b-collapse>
                </b-navbar>
                <!-- Seventh Navbar-->
                <b-navbar toggleable type="dark" variant="dark" id="first_nav" class="mb-2 p-3">
                  <b-navbar-brand href="#">Donanım Özellikleri</b-navbar-brand>

                  <b-navbar-toggle target="navbar-toggle-collapse7">
                    <template v-slot:default="{ expanded }">
                      <b-icon class="text-light" v-if="expanded" icon="dash"></b-icon>
                      <b-icon class="bg-dark" v-else icon="plus"></b-icon>
                    </template>
                  </b-navbar-toggle>

                  <b-collapse id="navbar-toggle-collapse7" is-nav>
                    <b-navbar-nav class="ml-auto" style="background-color: #15161a;">
                      <div>
                        <b-nav-item class="nav-element-left" href="#" disabled>Klavye</b-nav-item>
                        <b-nav-item class="nav-element-right" href="#" disabled>{{item.klavye}}</b-nav-item>
                      </div>
                      <div>
                        <b-nav-item class="nav-element-left" href="#" disabled>Kamera</b-nav-item>
                        <b-nav-item class="nav-element-right" href="#" disabled>{{item.kamera}}</b-nav-item>
                      </div>
                      <div>
                        <b-nav-item class="nav-element-left" href="#" disabled>Kablosuz Ağ</b-nav-item>
                        <b-nav-item class="nav-element-right" href="#" disabled>{{item.wireless}}</b-nav-item>
                      </div>
                      <div>
                        <b-nav-item class="nav-element-left" href="#" disabled>Hoparlör</b-nav-item>
                        <b-nav-item class="nav-element-right" href="#" disabled>{{item.hoparlor}}</b-nav-item>
                      </div>
                      <div>
                        <b-nav-item class="nav-element-left" href="#" disabled>Ses Sistemi</b-nav-item>
                        <b-nav-item class="nav-element-right" href="#" disabled>{{item.ses_sistemi}}</b-nav-item>
                      </div>
                      <div>
                        <b-nav-item class="nav-element-left" href="#" disabled>Raid Desteği</b-nav-item>
                        <b-nav-item class="nav-element-right" href="#" disabled>{{item.raid}}</b-nav-item>
                      </div>
                      <div>
                        <b-nav-item class="nav-element-left" href="#" disabled>Numerik Tuş Takımı</b-nav-item>
                        <b-nav-item class="nav-element-right" href="#" disabled>{{item.numerik_tus}}</b-nav-item>
                      </div>
                      <div>
                        <b-nav-item class="nav-element-left" href="#" disabled>Dahili Kart Okuyucu</b-nav-item>
                        <b-nav-item
                          class="nav-element-right"
                          href="#"
                          disabled
                        >{{item.kart_okuyucu}}</b-nav-item>
                      </div>
                      <div>
                        <b-nav-item class="nav-element-left" href="#" disabled>Gigabit Ethernet</b-nav-item>
                        <b-nav-item class="nav-element-right" href="#" disabled>{{item.ethernet}}</b-nav-item>
                      </div>
                    </b-navbar-nav>
                  </b-collapse>
                </b-navbar>
                <!-- Eighth Navbar-->
                <b-navbar toggleable type="dark" variant="dark" id="first_nav" class="mb-2 p-3">
                  <b-navbar-brand href="#">Bağlantı Özellikleri ve Portlar</b-navbar-brand>

                  <b-navbar-toggle target="navbar-toggle-collapse8">
                    <template v-slot:default="{ expanded }">
                      <b-icon class="text-light" v-if="expanded" icon="dash"></b-icon>
                      <b-icon class="bg-dark" v-else icon="plus"></b-icon>
                    </template>
                  </b-navbar-toggle>

                  <b-collapse id="navbar-toggle-collapse8" is-nav>
                    <b-navbar-nav class="ml-auto" style="background-color: #15161a;">
                      <div>
                        <b-nav-item class="nav-element-left" href="#" disabled>USB 2.0</b-nav-item>
                        <b-nav-item class="nav-element-right" href="#" disabled>{{item.usb_2_0}}</b-nav-item>
                      </div>
                      <div>
                        <b-nav-item class="nav-element-left" href="#" disabled>USB 3.1</b-nav-item>
                        <b-nav-item class="nav-element-right" href="#" disabled>{{item.usb_3_1_1}}</b-nav-item>
                      </div>
                      <div>
                        <b-nav-item class="nav-element-left" href="#" disabled>USB 3.1</b-nav-item>
                        <b-nav-item class="nav-element-right" href="#" disabled>{{item.usb_3_1_2}}</b-nav-item>
                      </div>
                      <div>
                        <b-nav-item class="nav-element-left" href="#" disabled>HDMI</b-nav-item>
                        <b-nav-item class="nav-element-right" href="#" disabled>{{item.hdmi}}</b-nav-item>
                      </div>
                      <div>
                        <b-nav-item class="nav-element-left" href="#" disabled>Mini Display</b-nav-item>
                        <b-nav-item
                          class="nav-element-right"
                          href="#"
                          disabled
                        >{{item.mini_display}}</b-nav-item>
                      </div>
                      <div>
                        <b-nav-item
                          class="nav-element-left"
                          href="#"
                          disabled
                        >Kulaklık / Speaker Çıkışı</b-nav-item>
                        <b-nav-item class="nav-element-right" href="#" disabled>{{item.kulaklık}}</b-nav-item>
                      </div>
                      <div>
                        <b-nav-item class="nav-element-left" href="#" disabled>Mikrofon</b-nav-item>
                        <b-nav-item class="nav-element-right" href="#" disabled>{{item.mikrofon}}</b-nav-item>
                      </div>
                      <div>
                        <b-nav-item class="nav-element-left" href="#" disabled>Dahili Bluetooth</b-nav-item>
                        <b-nav-item
                          class="nav-element-right"
                          href="#"
                          disabled
                        >{{item.dahili_bluetooth}}</b-nav-item>
                      </div>
                      <div>
                        <b-nav-item class="nav-element-left" href="#" disabled>Dahili Mikrofon</b-nav-item>
                        <b-nav-item
                          class="nav-element-right"
                          href="#"
                          disabled
                        >{{item.dahili_mikrofon}}</b-nav-item>
                      </div>
                    </b-navbar-nav>
                  </b-collapse>
                </b-navbar>
                <!-- Nineth Navbar-->
                <b-navbar toggleable type="dark" variant="dark" id="first_nav" class="mb-2 p-3">
                  <b-navbar-brand href="#">Boyutlar ve Ağırlık</b-navbar-brand>

                  <b-navbar-toggle target="navbar-toggle-collapse9">
                    <template v-slot:default="{ expanded }">
                      <b-icon class="text-light" v-if="expanded" icon="dash"></b-icon>
                      <b-icon class="bg-dark" v-else icon="plus"></b-icon>
                    </template>
                  </b-navbar-toggle>

                  <b-collapse id="navbar-toggle-collapse9" is-nav>
                    <b-navbar-nav class="ml-auto" style="background-color: #15161a;">
                      <div>
                        <b-nav-item class="nav-element-left" href="#" disabled>Boyutlar</b-nav-item>
                        <b-nav-item class="nav-element-right" href="#" disabled>{{item.boyut}}</b-nav-item>
                      </div>
                      <div>
                        <b-nav-item class="nav-element-left" href="#" disabled>Ağırlık</b-nav-item>
                        <b-nav-item class="nav-element-right" href="#" disabled>{{item.agirlik}}</b-nav-item>
                      </div>
                      <div>
                        <b-nav-item class="nav-element-left" href="#" disabled>Adaptör</b-nav-item>
                        <b-nav-item class="nav-element-right" href="#" disabled>{{item.adaptor}}</b-nav-item>
                      </div>
                      <div>
                        <b-nav-item class="nav-element-left" href="#" disabled>Batarya</b-nav-item>
                        <b-nav-item class="nav-element-right" href="#" disabled>{{item.batarya}}</b-nav-item>
                      </div>
                    </b-navbar-nav>
                  </b-collapse>
                </b-navbar>
                <!-- Tenth Navbar-->
                <b-navbar toggleable type="dark" variant="dark" id="first_nav" class="mb-2 p-3">
                  <b-navbar-brand href="#">Diğer Özellikler</b-navbar-brand>

                  <b-navbar-toggle target="navbar-toggle-collapse10">
                    <template v-slot:default="{ expanded }">
                      <b-icon class="text-light" v-if="expanded" icon="dash"></b-icon>
                      <b-icon class="bg-dark" v-else icon="plus"></b-icon>
                    </template>
                  </b-navbar-toggle>

                  <b-collapse id="navbar-toggle-collapse10" is-nav>
                    <b-navbar-nav class="ml-auto" style="background-color: #15161a;">
                      <div>
                        <b-nav-item class="nav-element-left" href="#" disabled>Garanti Süresi</b-nav-item>
                        <b-nav-item class="nav-element-right" href="#" disabled>{{item.garanti}}</b-nav-item>
                      </div>
                      <div>
                        <b-nav-item class="nav-element-left" href="#" disabled>Ürün Kodu</b-nav-item>
                        <b-nav-item class="nav-element-right" href="#" disabled>{{item.urun_kodu}}</b-nav-item>
                      </div>
                      <div>
                        <b-nav-item class="nav-element-left" href="#" disabled>Ek Bilgi</b-nav-item>
                        <b-nav-item class="nav-element-right" href="#" disabled>{{item.ek_bilgi}}</b-nav-item>
                      </div>
                    </b-navbar-nav>
                  </b-collapse>
                </b-navbar>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  taksit  -->
      <!-- Taksit bölümü çıkarıldı -->
    </div>

    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-8 text-center">
          <b>İçerikler</b>
        </div>
      </div>
    </div>

    <div id="Yorumlar" style="width:75%;" class="m-auto">
      <p
        style="font-size:48px; text-align:center; margin:40px 0px 60px 0px;font-family:sbold; font-weight:600;letter-spacing: .5px;"
      >Yorumlar</p>
      <b-card bg-variant="dark" text-variant="white" class="mb-4">
        <v-rating v-model="rating" class="text-warning" size="14" style="color:orange;"></v-rating>
        <b-card-title>Sipariş</b-card-title>
        <b-card-text
          style="padding:20px 0px 20px 0px;"
        >2 gün önce sipariş verdim insallah çabucak gelir çok merak ediyorum</b-card-text>
        <b-card-text style="padding:10px 0px 10px 0px;">TUGAY T.</b-card-text>
        <b-card-footer id="card-foot">
          <span></span>
          <button
            type="submit"
            onclick="document.getElementById('card-foot').value = 'red' "
            id="dislike"
            style="margin-right:100px;"
          >
            <i class="far fa-thumbs-up fa-2x"></i>
          </button>
          <button type="submit" id="like">
            <i class="far fa-thumbs-down fa-2x"></i>
          </button>
        </b-card-footer>
      </b-card>
      <b-card bg-variant="dark" text-variant="white">
        <v-rating v-model="rating" class="text-warning" size="14" style="color:orange;"></v-rating>
        <b-card-title>Sipariş</b-card-title>
        <b-card-text
          style="padding:20px 0px 20px 0px;"
        >2 gün önce sipariş verdim insallah çabucak gelir çok merak ediyorum</b-card-text>
        <b-card-text style="padding:10px 0px 10px 0px;">TUGAY T.</b-card-text>
        <b-card-footer id="card-foot">
          <span></span>
          <button
            type="submit"
            onclick="document.getElementById('card-foot').value = 'red' "
            id="dislike"
            style="margin-right:100px;"
          >
            <i class="far fa-thumbs-up fa-2x"></i>
          </button>
          <button type="submit" id="like">
            <i class="far fa-thumbs-down fa-2x"></i>
          </button>
        </b-card-footer>
      </b-card>
    </div>
  </div>
</template>


<style scoped>
.items {
  font-size: 18px;
  width: 14%;
  padding: 16px;
}
.basket-button{
  width: 20%;
}
.first-price{
width: 10%;
background:#15161a;
}
#content{
  width: 100%;
}
.nav-item {
  width: 30%;
}

.active {
  background-color: transparent !important;
}
.custom-card {
  width: 100%;
}
.custom-card h4 {
  color: black;
}

.container {
  text-align: center;
  margin-top: -20px;
}
.custom-h2 {
  color: white;
  font-weight: bold;
}

.nav-element-left {
  float: left;
  text-align: left;
  color: #8c8c8c !important;
  font-size: 18px;
  font-family: sans-serif;
  font-weight: 700;
  padding: 15px 0px 15px 0px;
  margin: 0px 0px 0px 15px;
}
.nav-element-right {
  width: 65% !important;
  float: left;
  text-align: left;
  color: #8c8c8c !important;
  font-size: 18px;
  font-family: "regularA";
  font-weight: 300;
  padding: 15px 0px 15px 0px;
  margin: 0px 0px 0px 15px;
}
.active {
  color: yellow;
  border-bottom: 4px solid orange;
  font-family: sans-serif;
}
.basket:hover {
  background: #3376ff;
}
.basket {
  width: 100%;
  float: right;
  background: #26df2e;
}
td {
  padding-bottom: 4px !important;
}
@media screen and  (max-width: 1050px){
  .items {
  font-size: 18px;
  width: 100%;
  padding: 16px;
}
.first-price{
  width: 20%;
  text-align: center;
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
  float: center;
  width: 75%;
}
.basket-button{
  width: 100%;
}
}
</style>


<script>
import axios from "axios";
import { Carousel, Slide } from "vue-carousel";
import "vueperslides/dist/vueperslides.css";
import { mdbNavbar, mdbNavbarToggler, mdbNavbarNav, mdbNavItem } from "mdbvue";

export default {
  components: {
    mdbNavbar,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    Carousel,
    Slide
  },
  breakpoints: {
    1200: {
      slideRatio: 1 / 5
    },
    900: {
      slideRatio: 1 / 3
    },
    600: {
      slideRatio: 1 / 2,
      arrows: false,
      bulletsOutside: true
    },
    // The order you list breakpoints does not matter, Vueper Slides will sort them for you.
    1100: {
      slideRatio: 1 / 4
    }
  },
  data() {
    return {
      abra_bg: [],
      product_details: [],
      product_image: [],
      rating: 3,
      fields: ["Taksit_Sayısı", "Aylık Tutar", "Toplam Tutar"],
      items: [
        { ToplamTutar: 40, Taksit_Sayısı: "Peşin", AylıkTutar: "Macdonald" },
        { ToplamTutar: 21, Taksit_Sayısı: "3 Taksit", AylıkTutar: "Shaw" },
        { ToplamTutar: 89, Taksit_Sayısı: "6 Taksit", AylıkTutar: "Wilson" },
        { ToplamTutar: 21, Taksit_Sayısı: "3 Taksit", AylıkTutar: "Shaw" },
        { ToplamTutar: 89, Taksit_Sayısı: "6 Taksit", AylıkTutar: "Wilson" }
      ]
    };
  },
  mounted() {
    axios.get("http://localhost:3000/abra_background").then(response => {
      this.abra_bg = response.data;
    });
    axios.get("http://localhost:3000/product_details").then(response => {
      this.product_details = response.data;
    });
    axios.get("http://localhost:3000/product_image").then(response => {
      this.product_image = response.data;
    });
  }
};
</script>
