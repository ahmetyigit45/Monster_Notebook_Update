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
                <div class="nav-link-left ml-5" style="color:white; font-size:12pt; float:left">
                  <div>
                    <div id="example-3" v-for="item in filtersTags" :key="item.id">
                      <div v-if="item.türü == 'cpu'">
                        <!--    @change="check($event)"    
                        <v-checkbox v-model="filters.cpu_model" color="#000" value="black" label="Black" />-->
                        <input type="checkbox" :id="item.id" :value="item.tags" v-model="filters.cpu" @updateFilter="updateFilter"
                        /> &nbsp;&nbsp;&nbsp;
                        <label :for="item.tags">{{item.tags}}</label>
                        <br />
                      </div>
                    </div>
                    <!--  <span>selectedProperty: {{ filters }}</span>  -->
                  </div>
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
                <div class="nav-link-left ml-5" style="color:white; font-size:12pt; float:left">
                  <div>
                    <div id="example-3" v-for="item in filtersTags" :key="item.id">
                      <div v-if="item.türü == 'gpu'">
                        <!--    @change="check($event)"    
                        <v-checkbox v-model="filters.cpu_model" color="#000" value="black" label="Black" />-->
                        <input type="checkbox" :id="item.id" :value="item.tags" v-model="filters.gpu" @updateFilter="updateFilter"
                        /> &nbsp;&nbsp;&nbsp;
                        <label :for="item.tags">{{item.tags}}</label>
                        <br />
                      </div>
                    </div>
                    <!--  <span>selectedProperty: {{ filters }}</span>  -->
                  </div>
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
      <div id="product">
        <b-button
          class="products"
          style="width:32%;background-image: linear-gradient(to bottom right, #474650, #18181b);"
          squared
          v-for="item in filteredProducts"
          :key="item.id"
          v-on:click="openProduct(item.id)"
        >
          <v-card
            class
            style="background-image: linear-gradient(to bottom right, #474650, #18181b);width:100%"
          >
            <v-img class="white--text align-end" height="200px" :src="item.url"></v-img>
            <v-card-title
              class="text-light"
            >{{item.name + " " + item.ekran_türü +"' " + item.model}}</v-card-title>
            <div class="prop-text">
              <ul style="list-style:none;" class="text-light">
                <li>{{item.cpu}}</li>
                <li>{{item.gpu}}</li>
                <li>{{item.ekran}}</li>
                <li>{{item.bellek}}</li>
                <li>{{item.depolama_1_Port}}</li>
                <li>{{item.isletim_sistemi}}</li>
              </ul>
            </div>
            <div class="prices">
              <span class="discountRate">%12</span>
              <span class="oldPrice">5.899,00 TL</span>
              <span class="lastPrice">5.199,00 TL</span>
            </div>

            <v-card-actions>
              <v-btn class="w-100 text-light news-buton" color="orange" text>İNCELE</v-btn>
            </v-card-actions>
          </v-card>
        </b-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
.news-buton {
  font-size: 1vw;
}
#product {
  width: 70%;
  float: left;
  display: block;
  background: #15161a;
}
li {
  margin-top: 10px;
  display: block;
  width: 100%;
  text-align: left;
  white-space: nowrap;
  font-size: 1vw;
}
.prop-text {
  margin: 20px;
  width: 60%;
}
.prop-text ul li {
  font-size: 8pt;
}
.bg-color {
  background: #15161a;
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
.nav-link-left {
  float: left;
  width: 100%;
  margin-bottom: 5px;
  text-align: left;
  color: #929292 !important;
  font-size: 18px;
  font-family: sans-serif;
  font-weight: 700;
  text-decoration-line: none;
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
.navbar {
  padding-left: 0px;
  padding-right: 0px;
}
.products {
  margin: 10px 10px 0px 0px;
}
#first-section {
  background-image: url("https://www.monsternotebook.com.tr/UPLOAD/BANNERS/listBanner/T%C3%BCm-Leptoplar.png");
  height: 100%;
  width: 100%;

  max-width: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
@media screen and (max-width: 900px) {
  #filter {
    width: 100%;
  }
  #product {
    width: 100%;
  }
  .products {
    width: 30% !important;
    margin: 10px 5px 0px 5px;
  }
  li {
    font-size: 10px;
  }
  .discountRate {
    margin-left: 40px;
    font-size: 12px;
  }
  .oldPrice {
    font-size: 14px;
  }
  .lastPrice {
    font-size: 20px;
  }
  .news-buton {
    font-size: 14px;
  }
}
@media screen and (max-width: 600px) {
  #filter {
    width: 100%;
  }
  #product {
    width: 100%;
  }
  .products {
    width: 100% !important;
    margin: 0px;
  }
  li {
    font-size: 16px;
  }
  .discountRate {
    font-size: 12px;
  }
  .oldPrice {
    font-size: 14px;
  }
  .lastPrice {
    font-size: 24px;
  }
  .news-buton {
    font-size: 16px;
  }
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      isLoading: true,
      filtersTags: [],
      products: [],
      filters: {
        cpu: [],
        gpu:[]
      }
    };
  },
  methods: {
    openProduct(id) {
      this.$router.push({ name: "ProductDetailId", params: { id: id } });
      console.log("id:" + id);
    },
    async getProducts() {
      await axios.get("http://localhost:3000/tum_bilgisayarlar").then(response => {
          this.products = response.data;
          this.isLoading = false;
        });
    },
    updateFilter(filters) {
      this.filters = filters;
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product => {
        return (
          (this.filters.cpu.length === 0 || this.filters.cpu.includes(product.cpu_model)) &&
          (this.filters.gpu.length === 0 || this.filters.gpu.includes(product.gpu_model))
        );
      });
    }
  },
  created() {
    this.getProducts();
  },
  watch: {
    filters: {
      deep: true,
      handler(newValue) {
        this.$emit("updateFilter", newValue);
      }
    }
  },
  mounted() {
    axios.get("http://localhost:3000/filters").then(response => {
      this.filtersTags = response.data;
    });
  }
};
</script>
