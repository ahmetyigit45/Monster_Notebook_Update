<template>
    <div class="menuHeader">
      <ul>
        <li>
          <a href="#home">
            <i class="fas fa-phone"></i>
            <strong> 0 850 255 11 11</strong>
          </a>
        </li>
        <li>
          <a href="#home">
            <i class="far fa-envelope"></i>
            <strong> MESAJ GÖNDER</strong>
          </a>
        </li>
        <li>
          <a href="#home">
            <i class="fas fa-map-marker-alt"></i>
            <strong> MAĞAZALAR</strong>
          </a>
        </li>
        <li style="border:0px;">
          <a href="#home">
            <i class="fas fa-tools"></i>
            <strong> TEKNİK SERVİS</strong>
          </a>
        </li>
        <li style="float:right">
          <a href="#about" class="odeme">
            <strong>HARİCİ ÖDEME</strong>
          </a>
          <a href="#about">
            <i class="fas fa-search"></i>
          </a>
          <a href="#about">
            <i class="far fa-user"></i>
          </a>
          <a class="active" href="#about">
            <i class="fas fa-shopping-cart"></i>
            <strong>SEPETİM</strong>
          </a>
        </li>
      </ul>
    </div>
</template>

<script>

export default {
  components: {
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

.odeme {
  color: orange !important;
}

.menuHeader {
  background: #2a2b30;
  position: relative;
  top: 0;
  width: 100%;
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
</style>