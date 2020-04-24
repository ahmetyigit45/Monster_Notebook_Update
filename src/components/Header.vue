<template>
  <div class="menuHeader">
    <div>
      <b-navbar
        toggleable="lg"
        type="dark"
        style="background: #2a2b30; margin:0px !important; display: inline;"
      >
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav style="display: block !important;">
          <b-navbar-nav id="nav-left">
            <b-navbar-brand class="navbar-left" href="#">
              <i class="fas fa-phone text-light"></i> 0 850 255 11
              11
            </b-navbar-brand>
            <b-navbar-brand class="navbar-left" href="#">
              <i class="far fa-envelope text-light"></i> MESAJ
              GÖNDER
            </b-navbar-brand>
            <b-navbar-brand class="navbar-left" href="#">
              <i class="fas fa-map-marker-alt text-light"></i>
              MAĞAZALAR
            </b-navbar-brand>
            <b-navbar-brand class="navbar-left" href="#">
              <i class="fas fa-tools text-light"></i>TEKNİK
              SERVİS
            </b-navbar-brand>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav>
              <b-navbar-brand class="navbar-right" style="color: #26df2e;" href="#">HARİCİ ÖDEME</b-navbar-brand>
              <b-navbar-brand class="navbar-right" href="#">
                <i class="fas fa-search"></i>
              </b-navbar-brand>
              <b-navbar-brand class="navbar-right" href="/login">
                <i class="far fa-user"></i>
              </b-navbar-brand>
              <b-navbar-brand class="navbar-right" style="background: #26df2e;" href="/basket">
                <i class="fas fa-shopping-cart"></i> SEPETİM
              </b-navbar-brand>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>

        <b-collapse
          id="nav-collapse2"
          is-nav
          style="display: block !important; background: #212529;"
        >
          <b-navbar-nav></b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      Categories: [],
      subCategories: [],
      all_pc: null,
      shownCategory: null,
      shownItems: []
    };
  },
  components: {},
  watch: {
    shownCategory(newValue) {
      if (newValue.categori_id)
        this.shownItems = this.subCategories.filter(
          item =>
            item.categori === newValue.categori &&
            item.categori_id === newValue.categori_id
        );
      else
        this.shownItems = this.subCategories.filter(
          item => item.categori === newValue.categori
        );
    }
  },
  mounted() {
    axios.get("http://localhost:3000/category").then(response => {
      this.Categories = response.data;
      //console.log(this.Categories);
    });
    axios.get("http://localhost:3000/sub_category").then(response => {
      this.subCategories = response.data;
      //console.log(this.subCategories);
    });
  }
};
</script>


<style>
body {
  background: #15161a;
  font-family: Arial, Helvetica, sans-serif !important;
  color: white;
  font-weight: bold;
}
.navbar {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
}
.navbar-brand {
  margin-right: 0px !important;
}
.navbar-left {
  border-right: 1px solid black;
  font-weight: 800;
  font-style: sbold;
}
.navbar-right {
  font-weight: 800;
  font-style: sbold;
  font-size: 16px;
}
.odeme {
  color: orange !important;
}

.menuHeader {
  background: #2a2b30;
  position: relative;
  top: 0;
  width: 100%;
  line-height: 0px;
}

.menuHeader a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 15px;
  text-decoration: none;
  font-size: 17px;
}

.menuHeader ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.menuHeader li {
  float: left;
  border-right: 1px solid black;
}

.menuHeader li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.active {
  background-color: orange;
}
@media screen and (max-width: 900px) {
  .navbar-left {
    border-right: 0px !important;
  }
}
</style>
