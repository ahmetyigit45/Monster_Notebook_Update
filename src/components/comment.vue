<template>
  <div id="carousel" style="background:#15161a">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-8 text-center custom-h2">
          <h1>Kullanıcı Yorumları</h1>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-8 text-center">
          <carousel
            :autoplay="false"
            :loop="false"
            :nav="true"
            :dots="false"
            :responsive="{0:{items:1,nav:true},600:{items:2,nav:true},1000:{items:4,nav:true}}"
            :margin="5"
          >
            <!-- comment başlama  -->
            <button>
              <div class="custom-card">
                <img src="@/assets/img/2080.png" alt="Denim Jeans" style="width:100%" />
                <div class="pc-name">Huma H4 V3.1 14,0" İş Bilgisayarı</div>
                <br />
                <div class="comment-header">SÜPER BİŞİ BU</div>
                <br />
                <div class="comment-rate">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <br />
                <div class="comment">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores non dicta consequatur reprehenderit nisi quos beatae provident quam quisquam vitae praesentium hic, explicabo odio impedit dolorem debitis enim quasi sed?</p>
                </div>
                <br />
                <div class="comment-user"> AHmet YİĞİT</div>
              </div>
            </button>
            <button>
              <div class="custom-card">
                <img src="@/assets/img/2080.png" alt="Denim Jeans" style="width:100%" />
                <div class="pc-name">Huma H4 V3.1 14,0" İş Bilgisayarı</div>
                <br />
                <div class="comment-header">SÜPER BİŞİ BU</div>
                <br />
                <div class="comment-rate">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <br />
                <div class="comment">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores non dicta consequatur reprehenderit nisi quos beatae provident quam quisquam vitae praesentium hic, explicabo odio impedit dolorem debitis enim quasi sed?</p>
                </div>
                <br />
                <div class="comment-user"> AHmet YİĞİT</div>
              </div>
            </button>
            <button>
              <div class="custom-card">
                <img src="@/assets/img/2080.png" alt="Denim Jeans" style="width:100%" />
                <div class="pc-name">Huma H4 V3.1 14,0" İş Bilgisayarı</div>
                <br />
                <div class="comment-header">SÜPER BİŞİ BU</div>
                <br />
                <div class="comment-rate">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <br />
                <div class="comment">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores non dicta consequatur reprehenderit nisi quos beatae provident quam quisquam vitae praesentium hic, explicabo odio impedit dolorem debitis enim quasi sed?</p>
                </div>
                <br />
                <div class="comment-user"> AHmet YİĞİT</div>
              </div>
            </button>
            <button>
              <div class="custom-card">
                <img src="@/assets/img/2080.png" alt="Denim Jeans" style="width:100%" />
                <div class="pc-name">Huma H4 V3.1 14,0" İş Bilgisayarı</div>
                <br />
                <div class="comment-header">SÜPER BİŞİ BU</div>
                <br />
                <div class="comment-rate">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <br />
                <div class="comment">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores non dicta consequatur reprehenderit nisi quos beatae provident quam quisquam vitae praesentium hic, explicabo odio impedit dolorem debitis enim quasi sed?</p>
                </div>
                <br />
                <div class="comment-user"> AHmet YİĞİT</div>
              </div>
            </button>
            <!-- comment bitme  -->
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import carousel from "vue-owl-carousel";

export default {
  components: { carousel }
};
</script>

<style scoped>
.custom-card {
  background: #2a2b30;
  max-width: 300px;
  height: 530px;
  width: 300px;
  margin: auto;
  padding: 15px;
  font-family: arial;
}
.custom-card:hover {
  border: 1px solid chartreuse;
}

.pc-name {
  color: white;
  font-size: 16pt;
  font-weight: bold;
}
.comment-header {
  float: left;
  color: white;
  font-weight: bold;
}
.comment-rate {
  float: left;
  color: yellowgreen;
}
.comment {
  color: white;
  font-size: 11pt;;
}
.comment-user{
  color:grey;
  font-weight: bold;;
}
</style>