<template>
  <div class="w-100" style="background: #15161a;">
    <div id="first-section">
      <p
        style="
          padding-top: 3%;
          padding-bottom: 3%;
          margin-left: 5%;
          font-size: 3vw;
          font-weight: 800;
          font-familt: sbold;
          word-spacing: 1px;
          color:white;
        "
      >Tüm Laptoplar</p>
      <p
        id="parag1"
        style="
          width: 60%;
          padding-top: 10px;
          margin-left: 5%;
          font-size: 1vw;
          font-weight: 500;
          font-family: sbold;
          word-spacing: 1px;
          color:white;
        "
      >
        Adını Türk mitolojisindeki efsanevi canlılardan alan laptop serileriyle
        masaüstü bilgisayarların performans alanındaki hükümdarlığına son veren
        Monster, geliştirdiği laptop modelleriyle dilediğiniz her yerde
        çalışmalarınızı sürdürmenizi ve güncel oyunları oynamanızı sağlıyor.
        Laptoplarının tamamında Intel’in güçlü işlemcileri ve
      </p>
      <p
        id="parag2"
        style="
          width: 60%;
          margin-left: 5%;
          font-size: 1vw;
          font-weight: 500;
          font-family: sbold;
          word-spacing: 1px;
          color:white;
        "
      >
        NVIDIA’nın oyun ya da iş istasyonlarına özel geliştirdiği GPU’lar
        bulunan Monster, bu sayede en güncel oyunları ve profesyonel yazılımları
        performans sorunu olmadan çalıştırmanızı mümkün kılıyor.
      </p>
      <a
        id="open-close"
        style="
          font-size: 1vw;
          font-weight: 500;
          font-family: sbold;
          word-spacing: 1px;
          margin-left: 55%;
          color: orange;
          text-decoration-line: none;
        "
        href
      >
        daha fazla göster
        <i class="fas fa-chevron-down"></i>
      </a>
    </div>
    <div>
      <div id="links-left">
        <ul style="display:inline-block;margin:10px 15px 10px 15px;">
          <li style="display:inline;">
            <a class="text-muted p-2 text-left text-decoration-none" href>Ana sayfa</a>
          </li>
          <li style="display:inline;">
            <a class="text-muted p-2 text-left text-decoration-none" href>/ Tüm Laptoplar</a>
          </li>
          <li style="display:inline;">
            <a class="text-muted p-2 text-left text-decoration-none" href>/ Oyun Bilgisayarları</a>
          </li>
          <li style="display:inline;">
            <a class="text-muted p-2 text-left text-decoration-none" href>/ Abra</a>
          </li>
        </ul>
      </div>
    </div>

    <div style="width: 100%; display: inline-block;" class="bg-dark;">
      <!-- filtre -->
      <div id="filter" class="bg-color">
        <div>
          <b-navbar toggleable type="dark" class="p-3" style="border-bottom: 2px solid #26df2e;">
            <!--Kategoriler-->
            <b-navbar-brand class="ml-5 text-sm" href="#">Kategoriler</b-navbar-brand>

            <b-navbar-toggle class="mr-4" target="navbar-toggle-collapse1">
              <template class="mr-4" v-slot:default="{ expanded }">
                <b-icon class="text-light" v-if="expanded" icon="dash"></b-icon>
                <b-icon v-else icon="plus"></b-icon>
              </template>
            </b-navbar-toggle>

            <b-collapse style="100%;" id="navbar-toggle-collapse1" is-nav>
              <b-navbar-nav class="ml-auto" style="background-color: #343a40;">
                <div class="bg-color">
                  <b-navbar toggleable type="dark" id="first_nav" class="mb-2">
                    <b-navbar-brand class="ml-5" href="#">Tüm Bilgisayarlar</b-navbar-brand>

                    <b-navbar-toggle class="mr-4" target="navbar-toggle-collapse11">
                      <template v-slot:default="{ expanded }">
                        <b-icon class="text-light" v-if="expanded" icon="dash"></b-icon>
                        <b-icon v-else icon="plus"></b-icon>
                      </template>
                    </b-navbar-toggle>

                    <b-collapse id="navbar-toggle-collapse11" is-nav>
                      <b-navbar-nav class="ml-auto" style="background-color: #343a40;">
                        <div class="bg-color">
                          <b-navbar toggleable type="dark" id="first_nav" class="mb-2">
                            <b-navbar-brand class="ml-5" href="#">Oyun Bilgisayarları</b-navbar-brand>

                            <b-navbar-toggle class="mr-4" target="navbar-toggle-collapse111">
                              <template v-slot:default="{ expanded }">
                                <b-icon class="text-light" v-if="expanded" icon="dash"></b-icon>
                                <b-icon v-else icon="plus"></b-icon>
                              </template>
                            </b-navbar-toggle>

                            <b-collapse id="navbar-toggle-collapse111" is-nav>
                              <b-navbar-nav class="ml-auto" style="background-color: #15161a;">
                                <div class="bg-color">
                                  <b-navbar
                                    toggleable
                                    type="dark"
                                    id="first_nav"
                                    class="p-3"
                                    style="border-bottom: 1px solid #474650;"
                                  >
                                    <b-navbar-brand class="ml-5 h4" href="#">ABRA</b-navbar-brand>

                                    <b-navbar-toggle class="mr-4" target="navbar-toggle-collapse2">
                                      <template v-slot:default="{ expanded }">
                                        <b-icon class="text-light" v-if="expanded" icon="dash"></b-icon>
                                        <b-icon v-else icon="plus"></b-icon>
                                      </template>
                                    </b-navbar-toggle>

                                    <b-collapse id="navbar-toggle-collapse2" is-nav>
                                      <b-navbar-nav
                                        class="ml-auto"
                                        style="background-color: #15161a;"
                                      >
                                        <div>
                                          <b-link
                                            class="nav-link-left ml-5"
                                            style="border-bottom: 1px solid #474650;"
                                            href="https://www.monsternotebook.com.tr/abra/"
                                          >ABRA V5</b-link>
                                          <b-link
                                            class="nav-link-left ml-5"
                                            style="border-bottom: 1px solid #474650;"
                                            href="https://www.monsternotebook.com.tr/abra/"
                                          >ABRA V7</b-link>
                                        </div>
                                      </b-navbar-nav>
                                    </b-collapse>
                                  </b-navbar>
                                </div>
                              </b-navbar-nav>
                            </b-collapse>
                          </b-navbar>
                        </div>
                        <div class="bg-color">
                          <b-navbar toggleable type="dark" id="first_nav" class="mb-2">
                            <b-navbar-brand class="ml-5" href="#">İş İstasyonları</b-navbar-brand>

                            <b-navbar-toggle class="mr-4" target="navbar-toggle-collapse112">
                              <template v-slot:default="{ expanded }">
                                <b-icon class="text-light" v-if="expanded" icon="dash"></b-icon>
                                <b-icon v-else icon="plus"></b-icon>
                              </template>
                            </b-navbar-toggle>

                            <b-collapse id="navbar-toggle-collapse112" is-nav>
                              <b-navbar-nav class="ml-auto" style="background-color: #15161a;"></b-navbar-nav>
                            </b-collapse>
                          </b-navbar>
                        </div>
                      </b-navbar-nav>
                    </b-collapse>
                  </b-navbar>
                </div>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
          <b-navbar toggleable type="dark" class="p-3" style="border-bottom: 1px solid #474650;">
            <b-navbar-brand class="ml-5 h4" href="#">ÖZELLİK SEÇİMİ</b-navbar-brand>
          </b-navbar>
          <!-- Second Navbar-->
          <b-navbar
            toggleable
            type="dark"
            id="first_nav"
            class="p-3"
            style="border-bottom: 1px solid #474650;"
          >
            <b-navbar-brand class="ml-5 h4" href="#">İŞLEMCİ</b-navbar-brand>

            <b-navbar-toggle class="mr-4" target="navbar-toggle-collapse2">
              <template v-slot:default="{ expanded }">
                <b-icon class="text-light" v-if="expanded" icon="dash"></b-icon>
                <b-icon v-else icon="plus"></b-icon>
              </template>
            </b-navbar-toggle>

            <b-collapse id="navbar-toggle-collapse2" is-nav>
              <b-navbar-nav class="ml-auto" style="background-color: #15161a;">
                <div>
                  <a class="nav-link-left ml-5" href>
                    <i class="far fa-square"></i>i7-7700HQ
                  </a>
                  <a class="nav-link-left ml-5" href>
                    <i class="far fa-square"></i>i7-7700HQ
                  </a>
                  <a class="nav-link-left ml-5" href>
                    <i class="far fa-square"></i>i7-7700HQ
                  </a>
                  <a class="nav-link-left ml-5" href>
                    <i class="far fa-square"></i>i7-7700HQ
                  </a>
                </div>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
          <!-- EKRAN KARTI-->
          <b-navbar
            toggleable
            type="dark"
            id="ekran-kart"
            class="p-3"
            style="border-bottom: 1px solid #474650;"
          >
            <b-navbar-brand class="ml-5 h4" href="#">EKRAN KARTI</b-navbar-brand>

            <b-navbar-toggle class="mr-4" target="navbar-toggle-collapse22">
              <template v-slot:default="{ expanded }">
                <b-icon class="text-light" v-if="expanded" icon="dash"></b-icon>
                <b-icon v-else icon="plus"></b-icon>
              </template>
            </b-navbar-toggle>

            <b-collapse id="navbar-toggle-collapse22" is-nav>
              <b-navbar-nav class="ml-auto" style="background-color: #15161a;">
                <div>
                  <a class="nav-link-left ml-5" href>
                    <i class="far fa-square"></i>2GB MX250
                  </a>
                  <a class="nav-link-left ml-5" href>
                    <i class="far fa-square"></i>3GB GTX1050
                  </a>
                  <a class="nav-link-left ml-5" href>
                    <i class="far fa-square"></i>4GB GTX1650 128-Bit
                  </a>
                  <a class="nav-link-left ml-5" href>
                    <i class="far fa-square"></i>6GB GTX1660 Ti 192-Bit
                  </a>
                </div>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
          <!-- EKRAN-->
          <b-navbar
            toggleable
            type="dark"
            id="ekran"
            class="p-3"
            style="border-bottom: 1px solid #474650;"
          >
            <b-navbar-brand class="ml-5 h4" href="#">EKRAN</b-navbar-brand>

            <b-navbar-toggle class="mr-4" target="navbar-toggle-collapse23">
              <template v-slot:default="{ expanded }">
                <b-icon class="text-light" v-if="expanded" icon="dash"></b-icon>
                <b-icon v-else icon="plus"></b-icon>
              </template>
            </b-navbar-toggle>

            <b-collapse id="navbar-toggle-collapse23" is-nav>
              <b-navbar-nav class="ml-auto" style="background-color: #15161a;">
                <div>
                  <a class="nav-link-left ml-5" href>
                    <i class="far fa-square"></i>15,6"
                  </a>
                  <a class="nav-link-left ml-5" href>
                    <i class="far fa-square"></i>17,3
                  </a>
                  <a class="nav-link-left ml-5" href>
                    <i class="far fa-square"></i>17,3 144HZ
                  </a>
                </div>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
          <!-- BELLEK-->
          <b-navbar
            toggleable
            type="dark"
            id="ekran"
            class="p-3"
            style="border-bottom: 1px solid #474650;"
          >
            <b-navbar-brand class="ml-5 h4" href="#">BELLEK</b-navbar-brand>

            <b-navbar-toggle class="mr-4" target="navbar-toggle-collapse24">
              <template v-slot:default="{ expanded }">
                <b-icon class="text-light" v-if="expanded" icon="dash"></b-icon>
                <b-icon v-else icon="plus"></b-icon>
              </template>
            </b-navbar-toggle>

            <b-collapse id="navbar-toggle-collapse24" is-nav>
              <b-navbar-nav class="ml-auto" style="background-color: #15161a;">
                <div>
                  <a class="nav-link-left ml-5" href>
                    <i class="far fa-square"></i>1x8GB 2666MHz
                  </a>
                </div>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
          <!-- DEPOLAMA ÖZELLİKLERİ-->
          <b-navbar
            toggleable
            type="dark"
            id="ekran"
            class="p-3"
            style="border-bottom: 1px solid #474650;"
          >
            <b-navbar-brand class="ml-5 h4" href="#">1.PORT M.2 SSD</b-navbar-brand>

            <b-navbar-toggle class="mr-4" target="navbar-toggle-collapse25">
              <template v-slot:default="{ expanded }">
                <b-icon class="text-light" v-if="expanded" icon="dash"></b-icon>
                <b-icon v-else icon="plus"></b-icon>
              </template>
            </b-navbar-toggle>

            <b-collapse id="navbar-toggle-collapse25" is-nav>
              <b-navbar-nav class="ml-auto" style="background-color: #15161a;">
                <div>
                  <a class="nav-link-left ml-5" href>
                    <i class="far fa-square"></i>1x8GB 2666MHz
                  </a>
                </div>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
          <!-- İŞLETİM SİSTEMİ-->
          <b-navbar
            toggleable
            type="dark"
            id="ekran"
            class="p-3"
            style="border-bottom: 1px solid #474650;"
          >
            <b-navbar-brand class="ml-5 h4" href="#">İŞLETİM SİSTEMİ</b-navbar-brand>

            <b-navbar-toggle class="mr-4" target="navbar-toggle-collapse26">
              <template v-slot:default="{ expanded }">
                <b-icon class="text-light" v-if="expanded" icon="dash"></b-icon>
                <b-icon v-else icon="plus"></b-icon>
              </template>
            </b-navbar-toggle>

            <b-collapse id="navbar-toggle-collapse26" is-nav>
              <b-navbar-nav class="ml-auto" style="background-color: #15161a;">
                <div>
                  <a class="nav-link-left ml-5" href>
                    <i class="far fa-square"></i>1x8GB 2666MHz
                  </a>
                </div>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
          <!-- KLAVYE-->
          <b-navbar
            toggleable
            type="dark"
            id="ekran"
            class="p-3"
            style="border-bottom: 1px solid #474650;"
          >
            <b-navbar-brand class="ml-5 h4" href="#">KLAVYE</b-navbar-brand>

            <b-navbar-toggle class="mr-4" target="navbar-toggle-collapse27">
              <template v-slot:default="{ expanded }">
                <b-icon class="text-light" v-if="expanded" icon="dash"></b-icon>
                <b-icon v-else icon="plus"></b-icon>
              </template>
            </b-navbar-toggle>

            <b-collapse id="navbar-toggle-collapse27" is-nav>
              <b-navbar-nav class="ml-auto" style="background-color: #15161a;">
                <div>
                  <a class="nav-link-left ml-5" href>
                    <i class="far fa-square"></i>1x8GB 2666MHz
                  </a>
                </div>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
          <!-- AĞIRLIK-->
          <b-navbar
            toggleable
            type="dark"
            id="ekran"
            class="p-3"
            style="border-bottom: 1px solid #474650;"
          >
            <b-navbar-brand class="ml-5 h4" href="#">AĞIRLIK</b-navbar-brand>

            <b-navbar-toggle class="mr-4" target="navbar-toggle-collapse28">
              <template v-slot:default="{ expanded }">
                <b-icon class="text-light" v-if="expanded" icon="dash"></b-icon>
                <b-icon v-else icon="plus"></b-icon>
              </template>
            </b-navbar-toggle>

            <b-collapse id="navbar-toggle-collapse28" is-nav>
              <b-navbar-nav class="ml-auto" style="background-color: #15161a;">
                <div>
                  <a class="nav-link-left ml-5" href>
                    <i class="far fa-square"></i>1x8GB 2666MHz
                  </a>
                </div>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
          <!-- Nineth Navbar-->
          <b-navbar
            toggleable
            type="dark"
            id="ekran"
            class="p-3"
            style="border-bottom: 1px solid #474650;"
          >
            <b-navbar-brand class="ml-5 h4" href="#">FİYAT ARALIĞI</b-navbar-brand>

            <b-navbar-toggle class="mr-4" target="navbar-toggle-collapse29">
              <template v-slot:default="{ expanded }">
                <b-icon class="text-light" v-if="expanded" icon="dash"></b-icon>
                <b-icon v-else icon="plus"></b-icon>
              </template>
            </b-navbar-toggle>

            <b-collapse id="navbar-toggle-collapse29" is-nav>
              <b-navbar-nav class="ml-auto" style="background-color: #15161a;">
                <div>
                  <a class="nav-link-left ml-5" href>
                    <i class="far fa-square"></i>1x8GB 2666MHz
                  </a>
                </div>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>
      </div>
      <!-- product -->
      <button v-for="item in tum_bilgisayarlar" :key="item.id" class="listProduct" v-on:click="openProduct(item.id)">
        <div class="custom-card">
          <img :src="item.url" alt="" style="width:60%" />
          <div class="pc-name">{{item.name + " " + item.ekran_türü +"' " + item.model}}</div>
          <br />
          <div class="product-properties">
            <ol>
              <li>{{item.cpu}}</li>
                <li>{{item.gpu}}</li>
                <li>{{item.ekran}}</li>
                <li>{{item.bellek}}</li>
                <li>{{item.depolama_1_Port}}</li>
                <li>{{item.isletim_sistemi}}</li>
            </ol>
          </div>
          <div class="satıs">
            <div class="sale">
              <label>%{{item.indirim_orani}}</label>
            </div>
            <div class="sale-price">{{item.fiyat}} TL</div>
            <div class="price">6.099,00 TL</div>
          </div>
        </div>
        <div class="custom-button">
          <button>SEÇİN</button>
        </div>
      </button>
    </div>
  </div>
</template>
<style scoped>
.listProduct{
  margin-left: 10px;
  margin-top: 10px;
}
.custom-card {
  background: #2a2b30;
  max-width: 350px;
  height: 570px;
  width: 350px;
  margin: auto;
  padding-top: 15px;
  font-family: arial;
  border: 1px solid #2a2b30;
}
.custom-card:hover {
  border: 1px solid chartreuse;
}

.pc-name {
  color: white;
  font-size: 16pt;
  font-weight: bold;
}
.product-properties {
  color: thistle;
  font-size: 10pt;
  padding-left: 25px;
  height: 150px;
  width: 300px;
}
.product-properties ol {
  float: left;
  list-style-type: circle;
}
.satıs {
  padding-left: 10px;
  width: 300px;
  color: grey;
  font-size: 22px;
  height: 60px;
  float: left;
}
.sale label {
  outline: 0;
  padding: 12px;
  color: white;
  background-color: rgb(204, 116, 58);
  text-align: center;
  float: left;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
}
.sale-price {
  padding-left: 5px;
  height: 20px;
  width: 200px;
  text-decoration: line-through;
  font-size: 10pt;
}
.price {
  padding-left: 5px;
  height: 40px;
  width: 200px;
  font-size: 18pt;
  color: white;
  font-weight: bold;
}

.custom-button button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: chartreuse;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
}
#filter {
  width: 30%;
  height: 100%;
  float: left;
}
#links-left {
  background: #2a2b30;
  width: 100%;
  display: inline-block;
  padding: 10px 15px 10px 15px;
}
#links-right {
  background: #2a2b30;
  width: 100%;
  display: inline-block;
  padding: 10px 15px 10px 15px;
}
.prices {
  margin-top: 25px;
  width: 100%;
  height: 100px;
  position: relative;
}
.discountRate {
  float: left;
  padding: 2px 4px;
  font-size: 1vw;
  background: #fc0f5f;
  border-radius: 3px;
  font-family: sbold;
  margin: 10px;
}
.oldPrice {
  position: absolute;
  float: left;
  color: #c9c9c9;
  font-size: 1vw;
  text-decoration-line: line-through;
  top: 0px;
  margin-left: 5px;
  font-family: sbold;
}
.lastPrice {
  position: absolute;
  color: #fff;
  top: 10px;
  float: left;
  margin-left: 5px;
  font-size: 2vw;
  font-family: sbold;
  letter-spacing: 1px;
}

</style>
<script>
import axios from "axios";
export default {
  data() {
    return {
      tum_bilgisayarlar: []
      //filtered: subCategories.filter(item => item.categori === 'notebook')
    };
  },
  methods: {
    openProduct(id) {
      this.$router.push({ name: "ProductDetailId", params: { id: id } });
      //console.log("id:" + id);
    }
  },
  mounted() {
    axios.post("http://localhost:3000/tum_bilgisayarlar").then(response => {
      this.tum_bilgisayarlar = response.data;
    });
  }
};
</script>
