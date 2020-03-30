<template>
  <div class="custom-container">
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="@/assets/img/2080.png">
                    <h3>Design</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                  <a href="#">SEÇİN</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
body{
    margin: 0;
    padding: 0;
    display: flex;
    background: transparent;
    justify-content: center;
    align-items: center;
    font-family: consolas;
}

.custom-container{
    background: radial-gradient(#4c4e58);
    position: relative;
    display: flex;
    justify-content: space-between;
}

.custom-container .card{
    position: relative;
    cursor: pointer;
}

.custom-container .card .face{
    width: 220px;
    height: 450px;
    transition: 0.5s;
}

.custom-container .card .face.face1{
    position: relative;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}
.custom-container .card .face.face1 .content{
    transition: 0.5s;
    
}

.custom-container .card .face.face1 .content img{
    max-width: 100px;
}

.custom-container .card .face.face1 .content h3{
    margin: 10px 0 0;
    padding: 0;
    color: #fff;
    text-align: center;
    font-size: 1.5em;
}

.custom-container .card .face.face2{
    position: relative;
    background: rgb(44, 206, 12);
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
    transform: translateY(-50px);
}

.custom-container .card:hover .face.face2{
    transform: translateY(0);
}

.custom-container .card .face.face2 .content p{
    margin: 0;
    padding: 0;
}

.custom-container .card .face.face2 .content a{
    margin: 5px 0 0;
    display:  inline-block;
    text-decoration: none;
    font-weight: 900;
    color: #fff;
    padding: 5px;
}


</style>>