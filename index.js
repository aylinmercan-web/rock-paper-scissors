function tasKagitMakas(kullaniciSecimi) {
  const rastgeleSayi = Math.floor(Math.random() * 3);
  let bilgisayarSecimi; 

  if(rastgeleSayi === 0) {
    bilgisayarSecimi = "taş";
  } else if(rastgeleSayi === 1) {
    bilgisayarSecimi = "kağıt";
  } else {
    bilgisayarSecimi = "makas";
  }
  if (kullaniciSecimi === bilgisayarSecimi){
    return "Senin seçimin: " + kullaniciSecimi + " . Bilgisayarin seçimi: " + bilgisayarSecimi + ". Beraberlik!";
  }
  if(
    (kullaniciSecimi === "taş" && bilgisayarSecimi === "makas") ||
    (kullaniciSecimi === "makas" && bilgisayarSecimi === "kağıt")||
    (kullaniciSecimi === "kağıt" && bilgisayarSecimi === "taş")
  ) {
    return "Senin seçimin: " + kullaniciSecimi + ". Bilgisayarin seçimi: " + bilgisayarSecimi + ". Kazandın!";
  }
  else{
    return "Senin seçimin: " + kullaniciSecimi + ". Bilgisayarin seçimi: " + bilgisayarSecimi + ". Kaybettin!";  
  }

}
console.log(tasKagitMakas("taş"));

//test