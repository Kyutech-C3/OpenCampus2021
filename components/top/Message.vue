<template>
  <div class="wrap">
    <div class="titleWrap">
      <div class="titleContent">Message</div>
      <div class="titleLine"></div>
    </div>
    <div class="main">
      <div class="mainContent">
        OC特設サイトへの来場ありがとうございます。C3部長をやらせて頂いています。savageです。コロナウイルス流行下で昨年度から引き続き今年度もオンラインでのオープンキャンパスとなりました。新入部員にとっては初めての作品を公開する機会であり、２ヶ月という短い期間での創作活動では困難な場面もあったとは思いますが、創作することの楽しさと、完成したときの達成感を得ることができたんじゃないかと思います。<br/>
        昨年度からの部員は自分の創作活動もあるのもに関わらず、OCの企画にも協力してくれました。この場を借りて、感謝します。<br/><br/>
        そんな部員たちの作品はどうだったでしょうか？都合がよろしければ、アンケートの解答・作品へのコメントをお願いします。皆様のお言葉が部員の励みになると思います！<br/><br/>
        もし、高校生の方で九工大情報工学部への入学を検討されている方がいれば、入学後のサークル見学などで是非C3部室を訪れてみて下さい！『何かを創りたい』という気持ちだけでC3は入部できます！<br/>
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
  -webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
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
  text-align: justify;
  text-justify: auto;
}
.mainContent::selection {
  background: #4565863d;
}
/* スマホ以上 */
@media screen and (min-width: 481px) {
  .main {
    padding: 8vw 8% 10vh 0;
    margin: 0 auto 0 18vw;
  }
}
/* スマホ幅 */
@media screen and (max-width: 480px) {
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
