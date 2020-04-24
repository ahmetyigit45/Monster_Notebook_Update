<template>
  <div class="row" style="height:100%;">
    <div class="col left">
      <div class="signup">
        <div class="signup-header">
          <div id="signup-header-span">
            <a id="signup-logo" href="/">
              <img src="../assets/img/logo.png" alt />
            </a>
            <a id="exit" href="/">
              <i class="fas fa-times fa-2x"></i>
            </a>
            <div class="swiper">
              <h4 id="signup-text1">Üyelik</h4>
              <span id="signup-text2">
                Monster’a kolayca üye olup alışverişe hemen
                başlayabilirsin!
              </span>
            </div>
          </div>
        </div>
        <div>
          <b-card no-body class style="background:#15161a;">
            <b-tabs v-model="tabIndex" card style="background-color=#15161a;">
              <b-tab title="Giriş Yap" :title-link-class="linkClass(0)">
                <b-row class="mb-4 mr-5">
                  <b-col sm="2">
                    <label for="input-default"></label>
                  </b-col>
                  <b-col sm="10" class="bg-dark">
                    <b-form-input
                      v-model="email_login"
                      class="bg-dark border-dark text-monospace"
                      id="input-default"
                      placeholder="*Email"
                    ></b-form-input>
                  </b-col>
                </b-row>
                <b-row class="mb-4 mr-5">
                  <b-col sm="2">
                    <label for="input-default"></label>
                  </b-col>
                  <b-col sm="10" class="bg-dark">
                    <b-form-input
                      v-model="password_login"
                      class="bg-dark border-dark text-monospace"
                      id="input-default"
                      placeholder="*Şifre"
                    ></b-form-input>
                  </b-col>
                </b-row>
                <b-link
                  href="#foo"
                  class="text-muted mb-3"
                  style="font-size:14px; margin-left:16%; text-decoration-line:underline;"
                >Şifremi Unuttum</b-link>
                <b-form-checkbox
                  class="text-muted mt-2 mr-5"
                  style="font-size:14px; float:right; text-decoration-line:underline;"
                  id="checkbox-1"
                  v-model="status"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                >Beni Hatırla</b-form-checkbox>
                <b-button
                  class="text-center font-weight-bold w-75 p-2 Btn_Giris"
                  @click="login"
                >GİRİŞ YAP</b-button>
                <p class="text-center font-weight-bold text-muted h6 ml-5">
                  <u>Üye Değilseniz</u>
                </p>
                <b-button class="text-center font-weight-bold w-75 p-2 Btn_Fcbk" to="/signup">Üye Ol</b-button>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </div>
    </div>
    <div class="col right"></div>
  </div>
</template>
<style>
.left {
  background-color: #2a2b30;
  background-origin: padding-box;
  background-position-x: 0%;
  background-position-y: 0%;
  background-size: auto;
  font-size: 25px;
  background-attachment: scroll;
  overflow-x: auto;
  overflow-y: auto;
}
.right {
  background-image: url("../assets/img/login.webp");
  background-origin: padding-box;
  background-position-x: 50%;
  background-position-y: 50%;
  background-size: cover;
}
.signup {
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  width: 510px;
  margin-top: 50px;
  margin-left: 85px;
  margin-right: 85px;
  margin-bottom: 50px;
}
.signup-header {
  font-size: 14px;
  width: 510px;
  height: 283px;
}
#signup-header-span {
  padding-bottom: 30px;
  position: relative;
  text-align: center;
  width: 100%;
  height: 100%;
}
#signup-logo {
  width: 100%;
  height: 100%;
  margin-bottom: 60px;
}
#exit {
  font-size: 0.7rem;
  position: fixed;
  border-radius: 10%;
  padding: 4px 8px 4px 8px;
  color: #fff;
  background-color: none;
  left: 20px;
  transition-property: background-color;
  transition-duration: 0.3s;
  transition-delay: 0.1s;
}
#exit:hover {
  background-color: rgb(0, 255, 64);
}
.swiper {
  position: relative;
  top: 40px;
  text-align: center;
  width: 100%;
  height: 200px;
}
#signup-text1 {
  top: 40px;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  padding-bottom: 20px;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}
#signup-text2 {
  word-spacing: 5px;
  font-weight: lighter;
  width: 100%;
  font-size: 13px;
  font-family: regularA;
}
.Btn_Giris:hover {
  background: #3376ff;
}
.Btn_Giris {
  margin: 25px 50px 25px 80px;
  background: #26df2e;
}
.Btn_Fcbk:hover {
  background: #8191e4;
}
.Btn_Fcbk {
  margin: 10px 50px 25px 80px;
  background: #304b92;
}
li.nav-item {
  width: 50%;
}
@media screen and (max-width: 800px) {
  h1 {
    font-size: 12px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      tabIndex: 0,
      selected: null,
      email_login: "",
      password_login: ""
    };
  },
  methods: {
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return [
          "bg-dark",
          "text-warning",
          "w-100",
          "border-dark",
          "pl-5",
          "pr-5"
        ];
      } else {
        return ["bg-gray", "text-info", "w-100", "border-dark", "pl-5", "pr-5"];
      }
    },
    otherClick: function() {
      if (this.seenSearch == true) {
        return (this.seenSearch = false);
      }
    },
  }
};
</script>
