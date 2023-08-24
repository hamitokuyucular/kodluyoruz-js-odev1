// prompt ile kullanıcıdan isim al
userName = prompt("Adınızı giriniz:")

// #myName id'sine sahip tag'ı seç ve prompt'tan gelen veriyi innerHTML'ine yaz
let myName = document.querySelector("#myName")
myName.innerHTML = userName

// #myClock id'sine sahip tag içerisine dinamik saat ve gün ekle
const clockElement = document.querySelector("#myClock");
function showTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString("tr-TR", { hour12: false });
  const dayOfWeek = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi"
  ]
  [now.getDay()];
  clockElement.innerHTML = `${timeString} ${dayOfWeek}`;
}

setInterval(showTime)
showTime();
