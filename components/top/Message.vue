<template>
  <div class="wrap">
    <div class="titleWrap">
      <div class="titleContent">Message</div>
      <div class="titleLine"></div>
    </div>
    <div class="main">
      <div class="mainContent">
        皆さんこんにちは、C3の部長を務めさせていただいております。九工大情報工学部のオープンキャンパスはオンライン開催となったことに対応して、私たちもオンラインでオープンキャンパス展示ができないかと考え、今回のオンライン展示を企画いたしました。 新入生が入部したのが4月で、5月からオープンキャンパス制作を始めているため、2か月間もの時間を掛けて制作しました。 特に一年生は、初めての共同制作の中で、多くの技術を勉強しながら制作し、大きく成長しました。 オンライン展示となり、初めてのことばかリで多くの困難がありましたが、部員が力を尽くしてくれたことによって実現いたしました。 展示も発表も、どうぞ楽しんで頂ければ幸いです！
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrap {
  background-color: #FAFAFA;
}
.titleWrap {
  position: relative;
  height: max(18vw, 70px);
}
.titleContent {
  margin: 0 auto 0 8%;
  color: #456586;
  font-size: max(15vw, 60px);
  font-weight: bold;
  width: 80%;
  height: max(18vw, 70px);
  z-index: 10;
  position: absolute;
}
.titleLine {
  margin: 0 auto 0 7%;
  width: 80%;
  height: max(7vw, 35px);
  background-color: #ff2;
  position: absolute;
  bottom: 0;
  z-index: 1;
}
.main {
  background-color: #FAFAFA;
}
.mainContent {
  background-color: #FAFAFA;
  text-align: left;
  color: #4A4A4A;
  font-size: max(2vw, 13px);
  line-height: max(4vw, 20px);
}
/* スマホ以上 */
@media screen and (min-width: 481px) {
  .main {
    padding: 8vw 8% 10vh 0;
    margin: 0 auto 0 18vw;
  }
}
/* スマホ幅 */
@media screen and (max-width: 481px) {
  .main {
    padding: 8vh 0 10vh 0;
    margin: 0 auto;
    display: flex;
  }
  .mainContent {
    margin: 0 30px;
    display: inline-block;
  }
}
</style>
