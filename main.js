const body = document.querySelector("body");
const left = document.getElementById("left");
const right = document.getElementById("right");
const kirmizi = document.getElementById("kirmizi");
const sari = document.getElementById("sari");
const yesil = document.getElementById("yesil");
/*const colors = [
    "yellow",
    "black",
    "white",
    "red",
    "blueviolet",
    "orange",
    "lime",
    "yellow",
    "gray",
    "wheat",
    "aqua",
    "coral"];
    */
    let siraRed = 0;
    let siraYellow = 0;
    let siraGreen = 0;
    const kirmiziRenkler = [
        "#ff0303","#e00d0d","#cf1717","#b51919","#961b1b","#821d1d","#7d2222","#8a2c2c","#8a2c2c","#b83939","#c73434","#c72828","#b51818","#9c1111","#820808","#a60707","#b50707","#cf0606",
    ];
    const sariRenkler = [
        "#f0f00c","#ebe30e","#e6df10","#d4cd17","#bfb921","#ada826","#999528","#7d7a25","#918e30","#a19d30","#aba62b","#a39e1a","#8a850c","#858005","#948e06","#a39b05","#b8af07","#c4bb06","#cfc613","#d9cf0b","#d9cf0b",
    ];
    const yesilRenkler = [
        "#0be60f","#15d118","#21bf23","#25b327","#25a127","#289c2a","#2b942d","#268028","#2a802c","#308a32","#3ba33d","#35a137","#2e9e30","#269928","#1f9421","#1a911c","#148f16","#0d800f","#0a6b0b","#075208","#055c06","#077508","#09910a","#0ca80c",
    ]
    kirmizi.addEventListener("click", redChange);
    sari.addEventListener("click", yellowChange);
    yesil.addEventListener("click", greenChange);
function redChange(){
    // rastgele bir renk
    //const rastgeleSayi = Math.floor(Math.random() * colors.length);
   // console.log(rastgeleSayi);
    //const bagColor = colors[rastgeleSayi];
   // body.style.backgroundColor = bagColor;

    // sırayla arkaplan
    if(siraRed==17) sira = 0;
    const sellectRed = kirmiziRenkler[siraRed];
    siraRed++;
    left.style.backgroundColor  = sellectRed;
};

function yellowChange(){
    if(siraYellow == 20) siraYellow=0;
    const selectYellow = sariRenkler[siraYellow];
    siraYellow++;
    right.style.backgroundColor = selectYellow;
}

function greenChange(){
    if(siraGreen==24) siraGreen=0;
    const selectGreen = yesilRenkler[siraGreen];
    siraGreen++;
    body.style.backgroundColor = selectGreen;
};

