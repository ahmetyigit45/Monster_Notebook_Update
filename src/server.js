var express = require("express");
var bodyParser = require("body-parser");
//var _ = require("underscore");
var fs = require("fs")//file system read and write 
const path = require('path');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

var app = express();
var port = 3000;
app.use(bodyParser.json());

var jrRouter = express.Router();
var jrCors = require("cors");

app.use(jrCors());
app.use(bodyParser.urlencoded({ extended: false }))
app.set("api_secret_key", require("./config").api_secret_key);

///// JSON DOSYALARI  //////
const üst_Kategoriler = path.join(__dirname, 'jsondata/1_categories.json');
const alt_Kategoriler = path.join(__dirname, 'jsondata/2_subCategories.json');
const Notebook_Türleri = path.join(__dirname, 'jsondata/3_notebookseries.json');
const tüm_bilgisayarlar = path.join(__dirname, 'jsondata/4_product_notebook.json');
const ürün_resimleri = path.join(__dirname, 'jsondata/5_product_image.json');
const ürün_detay_arkaplan_resimleri = path.join(__dirname, 'jsondata/6_abra_background.json');
const yorumlar = path.join(__dirname, 'jsondata/7_yorumlar.json');
const kullanicilar = path.join(__dirname, 'jsondata/users.json');
const filtre_tags = path.join(__dirname, 'jsondata/filter_tags.json');

///////////   ÇALIŞIYORLAR    ////////
app.get("/category", function (req, res) {
  fs.readFile(üst_Kategoriler, "utf8", function (err, commentData) {
    console.log(commentData);
    res.send(commentData)
  })
})
app.get("/sub_category", function (req, res) {
  fs.readFile(alt_Kategoriler, "utf8", function (err, commentData) {
    console.log(commentData);
    res.send(commentData)
  })
})
app.get("/notebookseries", function (req, res) {
  fs.readFile(Notebook_Türleri, "utf8", function (err, commentData) {
    console.log(commentData);
    res.send(commentData)
  })
})
app.get("/tum_bilgisayarlar", function (req, res) {
  fs.readFile(tüm_bilgisayarlar, "utf8", function (err, commentData) {
    console.log(commentData);
    res.send(commentData)
  })
})
app.get("/product_details/", function (req, res) {
  fs.readFile(tüm_bilgisayarlar, "utf8", function (err, commentData) {
    console.log(commentData);
    res.send(commentData)
  })
})
app.get("/product_image", function (req, res) {
  fs.readFile(ürün_resimleri, "utf8", function (err, commentData) {
    console.log(commentData);
    res.send(commentData)
  })
})
app.get("/filters", function (req, res) {
  fs.readFile(filtre_tags, "utf8", function (err, commentData) {
    console.log(commentData);
    res.send(commentData)
  })
})

///////////   product details   ////////
app.get("/abra_background", function (req, res) {
  fs.readFile(ürün_detay_arkaplan_resimleri, "utf8", function (err, commentData) {
    console.log(commentData);
    res.send(commentData)
  })
})

///// signup json //////
app.post('/signup', function (req, res) {

  if (req.body.password == req.body.again_password) {
    var sayac = 0;
    fs.readFile(kullanicilar, "utf8", function (err, usersData) {
      if (err) throw err
      var allUsersData = JSON.parse(usersData)
      allUsersData.forEach(function (allUsersData) {
        sayac = allUsersData.id
      })
      sayac = sayac + 1
      var users = {
        "id": sayac,
        "fullname": req.body.fullname,
        "email": req.body.email,
        //"password": bcrypt.hashSync(req.body.password, 10),
        "password": req.body.password,
        "telefon": req.body.telefon
      }
      fs.readFile(kullanicilar, "utf8", function (err, newData) {
        if (err) throw err
        var newUsersData = JSON.parse(newData)
        newUsersData.push(users)
        res.end(JSON.stringify(newUsersData))
        fs.writeFile(kullanicilar, JSON.stringify(newUsersData), function (err) {
          if (err) throw err
          res.send(newUsersData)
        })
      })
    })
  } else {
    console.log("Şifreler aynı değil")
  }
})

/////   login    ///////
app.post("/login1", function (req, res) {
  var users = {
    "email": req.body.email,//body parser formdan veri alma
    "password": req.body.password
  }

  fs.readFile(kullanicilar, function (err, userData) {
    console.log(userData);
    var jrJson = JSON.parse(userData)
    jrJson.forEach(function (userData) {
      if (users.email == userData.email) {
        if (bcrypt.compareSync(users.password, userData.password)) {
          console.log(userData.fullname + " tarafından Giriş Yapıldı");
          let token = jwt.sign({ userId: userData._id }, 'secretkey');
          return res.status(200).json({
            title: 'login sucess',
            token: token
          })
        }
        else {
          console.log("error");
        }
      }
      else {
        console.log("Error")
      }
    })
  })
})






// users
app.post('/user', (req, res) => {
  let token = req.headers.token; //token
  jwt.verify(token, 'secretkey', (err, decoded) => {
    if (err) return res.status(401).json({
      title: 'unauthorized'
    })
    fs.readFile(kullanicilar, function (err, userData) {
      console.log(userData);
      var jrJson = JSON.parse(userData)
      jrJson.forEach(function (userData) {
        if (userData._id == decoded.userId) {
          if (err) return console.log(err)
          return res.status(200).json({
            title: 'user grabbed',
            user: {
              email: userData.email,
              name: userData.fullname
            }
          })
        }
        else {
          console.log("Error")
        }
      })
    })

  })
})

/////////////////////////////////////////////////////////////////////////////////////
//////////////                  YORUM KOD BLOKLARI                 //////////////////
//////////////                      FİLTRELEME                     //////////////////
/////////////////////////////////////////////////////////////////////////////////////
app.get("/yorumlar", function (req, res) {
  fs.readFile(yorumlar, "utf8", function (err, commentData) {
    console.log(commentData);
    res.send(commentData)
  })
})


app.post("/yorum_yap", function (req, res) {
  var sayac = 0;//son ürünü tuttuğumuz değişken
  fs.readFile(yorumlar, function (err, yorumData) {
    var allYorum = JSON.parse(yorumData)
    allYorum.forEach(function (yorumData) {
      sayac = yorumData.id
    })
    //son eklenen ürün id bulma kod bloğu bitiş
    sayac = sayac + 1
    var email = req.body.email;
    var fullname;
    fs.readFile("../monsterpc/src/jsondata/users.json", function (err, usersData2) {
      var usersData1 = JSON.parse(usersData2);
      usersData1.forEach(function (usersData1) {

        if (email == usersData1.email)
          fullname = usersData1.fullname;
      })//fullname bitiş
      var product_name = req.body.product_name;
      fs.readFile("../monsterpc/src/jsondata/all_pc.json", function (err, usersData) {
        var usersData1 = JSON.parse(usersData);
        usersData1.forEach(function (usersData1) {
          if (product_name == usersData1.product_name)
            product_name = usersData1.product_name
        })
      })//product name bitiş
      console.log(sayac);

      var new_comment = {
        "id": sayac,
        "product_name": product_name,
        "comment_header": req.body.comment_header,
        "comment_rate": Number(req.body.comment_rate),
        "comment": req.body.comment,
        "fullname": fullname,
        "users_email": req.body.email,
        "url": req.body.url
      };
      fs.readFile("../monsterpc/src/jsondata/yorumlar.json", "utf8", function (err, newComment) {
        if (err) throw err
        var commentData = JSON.parse(newComment)
        commentData.push(new_comment)
        console.log(commentData)
        res.send(JSON.stringify(commentData))
        fs.writeFile("../monsterpc/src/jsondata/yorumlar.json", JSON.stringify(commentData), function (err) {
          if (err) throw err
          console.log("buradayız");

          res.send(commentData);
        })
      })
    })






  })
})

//filtre
//kategori
//sepet







//get ile login sayfası
app.get("/login", function (req, res) {
  var users = {
    "email": req.body.email,//body parser formdan veri alma
    "password": req.body.password
  }

  fs.readFile("users.json", function (err, userData) {
    var jrJson = JSON.parse(userData)
    jrJson.forEach(function (userData) {
      if (users.email == userData.email && users.password == userData.password) {
        res.send(userData.fullname + " tarafından Giriş Yapıldı")
      }
      else {
        console.log("Error")
      }
    })
  })
})




//slider
app.get("/slider", function (req, res) {
  var slider_image = {
    "slider_id": req.body.slider_id
  }

  fs.readFile("slider.json", function (err, sliderData) {
    var sliderJson = JSON.parse(sliderData)
    sliderJson.forEach(function (sliderData) {
      if (slider_image.slider_id == sliderData.id) {
        res.send(sliderData.id + " " + sliderData.name + " " + sliderData.image)
      }
    })
  })
})

//searh
//ürün getir deneme basit search işlemleri
app.get("/tum_bilgisayarlar", function (req, res) {
  var all_pc = {
    "id": req.body.id,
    "türü": req.body.türü,
    "Model": req.body.Model,
    "adi": req.body.adi
  }
  fs.readFile("all_pc.json", function (err, pcData) {
    var pcJson = JSON.parse(pcData)
    var sayac = 0;
    var arr = [];
    pcJson.forEach(function (pcData) {
      if (all_pc.id == pcData.id || all_pc.türü == pcData.türü || all_pc.Model == pcData.Model || all_pc.adi == pcData.adi) {
        sayac++
        arr.push(pcData.id);
      }
    })
    for (let i = 0; i < sayac; i++) {
      pcJson.forEach(function (pcData) {
        if (arr[i] == pcData.id) {
          res.send(pcData)
        }
      })
    }
  })
})


/////////////////////////////////////////////////////////////////////////////////////
//////////////            BİLGİSAYAR EKLEME KOD BLOKLARI           //////////////////
//////////////                      FİLTRELEME                     //////////////////
/////////////////////////////////////////////////////////////////////////////////////
//bilgisayar ekle
app.post("/ekle", function (req, res) {
  //son eklenen ürün id bulma kod bloğu başlangıç
  var sayac = 0;//son ürünü tuttuğumuz değişken
  fs.readFile("all_pc.json", function (err, allPcData) {
    var pcAllJson = JSON.parse(allPcData)
    pcAllJson.forEach(function (allPcData) {
      sayac = allPcData.id
    })
    //son eklenen ürün id bulma kod bloğu bitiş
    sayac = sayac + 1
    var add_new_product = {
      "id": sayac,
      "türü": req.body.türü,
      "Model": req.body.model,
      "adi": req.body.adi,
      "fiyat": req.body.price
    };
    fs.readFile("all_pc.json", "utf8", function (err, newdata) {
      if (err) throw err
      var data = JSON.parse(newdata)
      data.push(add_new_product)
      console.log(data)
      res.end(JSON.stringify(data))
      fs.writeFile("all_pc.json", JSON.stringify(data), function (err) {
        if (err) throw err
        console.log("hata varsa burada vardır");

      })
    })
  })
})

/////////////////////////////////////////////////////////////////////////////////////
//////////////                LİSTELEME KOD BLOKLARI               //////////////////
//////////////                      FİLTRELEME                     //////////////////
/////////////////////////////////////////////////////////////////////////////////////

//tüm bilgisayarlar listele
app.get("/all_pc", function (req, res) {
  fs.readFile("all_pc.json", "utf8", function (err, pcData) {
    res.send(pcData)
  })
})

//oyun bilgisayarları çalışıyor
app.get("/game_pc", function (req, res) {
  fs.readFile("all_pc.json", "utf8", function (err, pcData) {
    var pcDataJson = JSON.parse(pcData)
    var sayac = 0
    var tempArray = []
    pcDataJson.forEach(function (pcData) {
      if (pcData.türü == "gamePc") {
        sayac = sayac + 1
        tempArray.push(pcData.id)
      }
    })
    for (let i = 0; i < sayac; i++) {
      pcDataJson.forEach(function (listPcData) {
        if (tempArray[i] == listPcData.id) {
          console.log(listPcData)
          res.end("Oyun Bilgisayarı Türü PC ler Burada")
        }
      })
    }
  })
})

//abra listele Log ile Çalışıyor
app.get("/abra", function (req, res) {
  fs.readFile("all_pc.json", "utf8", function (err, pcData) {
    var pcDataJson = JSON.parse(pcData)
    var sayac = 0
    var tempArray = []
    pcDataJson.forEach(function (pcData) {
      if (pcData.Model == "Abra") {
        sayac = sayac + 1
        tempArray.push(pcData.id)
      }
    })
    for (let i = 0; i < sayac; i++) {
      pcDataJson.forEach(function (listPcData) {
        if (tempArray[i] == listPcData.id) {
          console.log(listPcData)
          res.end("Abra Modeli PC ler Burada")
        }
      })
    }
  })
})

//tulpar listele Log ile Çalışıyor
app.get("/tulpar", function (req, res) {
  fs.readFile("all_pc.json", "utf8", function (err, pcData) {
    var pcDataJson = JSON.parse(pcData)
    var sayac = 0
    var tempArray = []
    pcDataJson.forEach(function (pcData) {
      if (pcData.Model == "Tulpar") {
        sayac = sayac + 1
        tempArray.push(pcData.id)
      }
    })
    for (let i = 0; i < sayac; i++) {
      pcDataJson.forEach(function (listPcData) {
        if (tempArray[i] == listPcData.id) {
          console.log(listPcData)
          res.end("Tulpar Modeli PC ler Burada")
        }
      })
    }
  })
})

//iş bilgisayarı listele
app.get("/busines_pc", function (req, res) {
  fs.readFile("all_pc.json", "utf8", function (err, pcData) {
    var pcDataJson = JSON.parse(pcData)
    var sayac = 0
    var tempArray = []
    pcDataJson.forEach(function (pcData) {
      if (pcData.türü == "businesPc") {
        sayac = sayac + 1
        tempArray.push(pcData.id)
      }
    })
    for (let i = 0; i < sayac; i++) {
      pcDataJson.forEach(function (listPcData) {
        if (tempArray[i] == listPcData.id) {
          console.log(listPcData)
          res.end("iş Bilgisayarı Türü PC ler Burada")
        }
      })
    }
  })
})

//huma listele Log ile Çalışıyor
app.get("/huma", function (req, res) {
  fs.readFile("all_pc.json", "utf8", function (err, pcData) {
    var pcDataJson = JSON.parse(pcData)
    var sayac = 0
    var tempArray = []
    pcDataJson.forEach(function (pcData) {
      if (pcData.Model == "Huma") {
        sayac = sayac + 1
        tempArray.push(pcData.id)
      }
    })
    for (let i = 0; i < sayac; i++) {
      pcDataJson.forEach(function (listPcData) {
        if (tempArray[i] == listPcData.id) {
          console.log(listPcData)
          res.end("Huma Modeli PC ler Burada")
        }
      })
    }
  })
})

//iş istasyonu listele
app.get("/busines_station_pc", function (req, res) {
  fs.readFile("all_pc.json", "utf8", function (err, pcData) {
    if (err) throw err
    var pcDataJson = JSON.parse(pcData)
    var sayac = 0
    var tempArray = []
    pcDataJson.forEach(function (pcData) {
      if (pcData.türü == "businesStationPc") {
        sayac = sayac + 1
        tempArray.push(pcData.id)
      }
    })
    for (let i = 0; i < sayac; i++) {
      pcDataJson.forEach(function (listPcData) {
        if (tempArray[i] == listPcData.id) {
          console.log(listPcData)
          res.end("İş İstasyonu Türü PC ler Burada")
        }
      })
    }
  })
})

//markut listele Log ile Çalışıyor
app.get("/markut", function (req, res) {
  fs.readFile("all_pc.json", "utf8", function (err, pcData) {
    if (err) throw err
    var pcDataJson = JSON.parse(pcData)
    var sayac = 0
    var tempArray = []
    pcDataJson.forEach(function (pcData) {
      if (pcData.Model == "Markut") {
        sayac = sayac + 1
        tempArray.push(pcData.id)
      }
    })
    for (let i = 0; i < sayac; i++) {
      pcDataJson.forEach(function (listPcData) {
        if (tempArray[i] == listPcData.id) {
          console.log(listPcData)
          res.end("Markut Modeli PC ler Burada")
        }
      })
    }
  })
})


/////////////////////////////////////////////////////////////////////////////////////
//////////////                    OYUNCU AKSESUAR                  //////////////////
/////////////////////////////////////////////////////////////////////////////////////

//ekipmanlar listele
app.get("/ekipmanlar", function (req, res) {
  fs.readFile("oyuncu_ekipmanlari.json", "utf8", function (err, pcData) {
    res.end(pcData)
  })
})
//ekipman ekle
app.get("/ekipman_ekle", function (req, res) {
  //son eklenen ürün id bulma kod bloğu başlangıç
  var sayac = 0;//son ürünü tuttuğumuz değişken
  fs.readFile("oyuncu_ekipmanlari.json", function (err, allPcData) {
    var pcAllJson = JSON.parse(allPcData)
    pcAllJson.forEach(function (allPcData) {
      sayac = allPcData.id
    })
    //son eklenen ürün id bulma kod bloğu bitiş
    sayac = sayac + 1
    console.log(sayac)
    var add_new_product = {
      "id": sayac,
      "türü": req.body.türü,
      "Model": req.body.model,
      "adi": req.body.adi,
      "fiyat": req.body.price
    };
    fs.readFile("oyuncu_ekipmanlari.json", "utf8", function (err, newdata) {
      if (err) throw err
      var data = JSON.parse(newdata)
      data.push(add_new_product)
      console.log(data)
      res.end(JSON.stringify(data))
      fs.writeFile("oyuncu_ekipmanlari.json", JSON.stringify(data), function (err) {
        if (err) throw err
        console.log("hata varsa burada vardır");

      })
    })
  })
})




/////////////////////////////////////////////////////////////////////////////////////
//////////////                     SERVER DİNLEME                  //////////////////
/////////////////////////////////////////////////////////////////////////////////////
app.use("/", jrRouter);
app.listen(port, function () {
  console.log("3000 portlu Server Burada");
})
