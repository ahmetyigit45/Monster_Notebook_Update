<template>
  <!-- Footer -->
  <div class="custom-footer">
    <mdb-footer color="unique-color-dark" class="page-footer font-small pt-0">
      <mdb-container class="mb-4 text-center text-md-left">
        <mdb-row class="mt-3">
          <mdb-col
            v-for="headlink in footerLinkHeader"
            :key="headlink.links"
            md="2"
            lg="2"
            xl="2"
            class="mb-4"
          >
            <h6 class="text-uppercase font-weight-bold">
              <strong>{{headlink.links}}</strong>
            </h6>
            <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
            <p>
              <router-link v-for="item in footerLink" :key="item.id" to="/">
                <div v-if="headlink.id === item.owner">{{item.links}}</div>
              </router-link>
            </p>
          </mdb-col>
          <mdb-col md="2" lg="2" xl="2" class="mb-4">
            <h6 class="text-uppercase font-weight-bold">
              <strong><a href="">MESAJ GÖNDER</a></strong>
            </h6>
            <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
            <p>
              <a href=""> <i class="fas fa-phone"></i> 0 850 255 11 11</a>
            </p>
            <p>
              <a href="">
                <i class="fab fa-facebook-f fa-2x"></i> &nbsp;
                <i class="fab fa-twitter fa-2x"></i>&nbsp;
                <i class="fab fa-instagram fa-2x"></i>&nbsp;
                <i class="fab fa-youtube fa-2x"></i>
                </a>
            </p>
          </mdb-col>
        </mdb-row>
      </mdb-container>

      <div class="footer-copyright text-center py-3">
        <mdb-container fluid>
          &copy; 2020 Copyright:
          2019 Monster Bilgisayar. Tüm Hakları Saklıdır
        </mdb-container>
      </div>
    </mdb-footer>
  </div>
  <!-- Footer -->
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from "mdbvue";
export default {
  data() {
    return {
      footerLinkHeader: [
        { id: "1", links: "HAKKIMIZDA" },
        { id: "2", links: "KURUMSAL" },
        { id: "3", links: "MÜŞTERİ HİZMETLERİ" },
        { id: "4", links: "MONSTER DÜNYASI" },
        { id: "5", links: "İLETİŞİM VE MAĞAZALAR" }
      ],
      footerLink: [
        { id: "1", owner: "1", links: "Tüm Laptoplar" },
        { id: "2", owner: "1", links: "Oyun Bilgisayarları" },
        { id: "3", owner: "1", links: "Oyuncu Ekipmanları" },
        { id: "4", owner: "1", links: "İş Bilgisayarları" },
        { id: "5", owner: "1", links: "İş İstasyonları" },
        { id: "6", owner: "1", links: "NVIDIA" },
        { id: "7", owner: "1", links: "RTX It's On" },
        { id: "8", owner: "2", links: "Monster Hakkında" },
        { id: "9", owner: "2", links: "Neden Monster?" },
        { id: "10", owner: "2", links: "Fuar Katılımları" },
        { id: "11", owner: "2", links: "Referanslar" },
        { id: "12", owner: "2", links: "Ödüller" },
        { id: "13", owner: "2", links: "Banka Hesap Bilgileri" },
        { id: "14", owner: "3", links: "Çağrı Merkezi" },
        { id: "15", owner: "3", links: "Sıkça Sorulan Sorular" },
        { id: "16", owner: "3", links: "Sürücüler" },
        { id: "17", owner: "3", links: "Teknik Servis" },
        { id: "18", owner: "3", links: "Sipariş ve Teslimat" },
        { id: "19", owner: "3", links: "Güvenlik" },
        { id: "20", owner: "3", links: "Üyelik / Hesabım" },
        { id: "21", owner: "3", links: "KVKK VE YASAL HAKLAR" },
        { id: "22", owner: "3", links: "Aydınlatma Metni" },
        { id: "23", owner: "3", links: "Yasal Haklar" },
        { id: "24", owner: "4", links: "Kullanıcı Yorumları" },
        { id: "26", owner: "4", links: "Monster İncelemeleri" },
        { id: "27", owner: "4", links: "Editör İncelemeleri" },
        { id: "28", owner: "4", links: "Duyurular ve Kampanyalar" },
        { id: "29", owner: "4", links: "Basında Monster" },
        { id: "30", owner: "4", links: "Duvar Kağıtları" },
        { id: "31", owner: "4", links: "Monster Blog" },
        { id: "32", owner: "5", links: "Genel Müdürlük" },
        { id: "33", owner: "5", links: "Mağazalar" }
      ]
    };
  },
  name: "FooterPage",
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol
  }
};
</script>

<style scoped>
.custom-footer {
  background: #2a2b30;
  color: white;
}
.custom-footer a {
  color: grey;
}
.custom-footer p {
  color: grey;
}
.mt-4{
  margin-top:18px !important;
}
</style>