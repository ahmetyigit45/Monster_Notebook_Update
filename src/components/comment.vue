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
            :loop="true"
            :navigationEnabled="true"
            :centerMode="true"
            :perPage="4"
            :scrollPerPage="false"
            :navigationClickTargetSize="10"
            :paginationSize="0"
            :perPageCustom="[[350, 1],[650, 2], [1366, 3], [1550, 4]]"
          >
            <slide v-for="(comment, index) in commentData" :key="index">
              <!-- comment başlama  -->
              <button>
                <div class="custom-card">
                  <img :src="comment.url" alt />
                  <div class="pc-name">{{comment.product_name}}</div>
                  <br />
                  <div class="comment-header">{{comment.comment_header}}</div>
                  <br />
                  <div class="comment-rate">
                    <span v-for="star in comment.comment_rate" :key="star" class="fa fa-star"></span>
                  </div>
                  <br />
                  <div class="comment">
                    <p>{{comment.comment}}</p>
                  </div>
                  <br />
                  <div class="comment-user">{{comment.fullname}}</div>
                </div>
              </button>
            </slide>
            <!-- comment bitme  -->
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { Carousel, Slide } from "vue-carousel";
import axios from "axios";

export default {
  components: { Carousel, Slide },
  data() {
    return {
      commentData: []
    };
  },
  mounted() {
    axios.get("http://localhost:3000/yorumlar").then(response => {
      this.commentData = response.data;
    });
  }
};
</script>

<style scoped>
.VueCarousel-navigation-button {
  color: white !important;
}
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
.custom-card img {
  width: 250px;
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
  font-size: 11pt;
}
.comment-user {
  color: grey;
  font-weight: bold;
}
</style>