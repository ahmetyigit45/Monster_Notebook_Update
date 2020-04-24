<template>
  <button>
    <div class="custom-card">
      <img src="@/assets/img/2080.png" alt="Denim Jeans" style="width:100%" />
      <div class="pc-name">Huma H4 V3.1 14,0" İş Bilgisayarı</div>
      <br />
      <div class="product-properties">
        <ol>
          <li>İşlemci</li>
          <li>Ram</li>
          <li>Ekran</li>
          <li>Ekran KArtı</li>
          <li>HDD</li>
          <li>SSD</li>
          <li>İşletim sistemi</li>
        </ol>
      </div>
      <div class="satıs">
        <div class="sale">
          <label>%10</label>
        </div>
        <div class="sale-price">6.899 TL</div>
        <div class="price">6.099,00 TL</div>
      </div>
    </div>
    <div class="custom-button">
      <button>SEÇİN</button>
    </div>
  </button>
</template>

<style scoped>
.custom-card {
  background: #2a2b30;
  max-width: 300px;
  height: 570px;
  width: 300px;
  margin: auto;
  padding-top: 15px;
  font-family: arial;
}
.custom-card img{
  height: 150px;
}
.custom-card:hover{
  border:1px solid chartreuse;
}

.pc-name {
  color: white;
  font-size: 16pt;
  font-weight: bold;
  height: 30px;
}
.product-properties {
  color: thistle;
  font-size: 10pt;
  padding-left: 25px;
  height: 265px;
  width: 300px;
}
.product-properties ol li{
  line-height: 10px;
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
  color:white;
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
</style>