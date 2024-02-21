var to = 'Sent for you!';
var gift_url = 'https://www.youtube.com/watch?v=6WNrmU5f8Gs&ab_channel=%EC%84%B1%EA%B7%9C%ED%8A%B9%EB%B3%84%EC%8B%9C%5BKimSungKyuOfficial%5D';
var gift_image_url = 'hot-girl.png';


var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {

  var _giftLink, 
      _giftImg;

  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }

  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }

  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show');
  }, false);



  nametag.innerText = to;
}

init();