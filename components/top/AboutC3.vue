<template>
  <div class="wrap">
    <div class="titleContent">About C3</div>
    <div class="main">
      <div class="mainContent">
        C3とは、「Composite Computer Club」の略称で、<br/>
        その名の通りパソコンを使った活動を行うサークルです。<br/>
        パソコンを使う活動ならなんでもいいのです。<br/>
        プログラミングや、WEBページ作成、<br/>
        タブレットを使用したお絵描き、<br/>
        DTMで作曲、3Dモデルでバ美肉、<br/>
        それらを使ってゲームを作るなどなど...<br/>
        <br/>
        部の中でコミュニティを作って勉強会を開いたり、<br/>
        チームを組んで共同制作をしたりと、<br/>
        現在は63人の部員が活動しています。<br/>
        <br/>
        普段は部活動紹介やオープンキャンパス、<br/>
        工大祭の際に部員の制作した作品を展示していますが、<br/>
        今回オンラインでのオープンキャンパスということで、<br/>
        このサイトでC3部員の作品を紹介します!<br/>
        <br/>
        ぜひお楽しみください!
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrap {
  background-color: #FAFAFA;
}
.titleContent {
  margin: 0 auto 0 8%;
  padding: 0 10px;
  color: #456586;
  font-size: max(15vw, 60px);
  font-weight: bold;
  border-bottom: solid max(7vw, 20px) #FFFF22;
  display: inline-block;
  height: max(18vw, 70px);
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
    padding: 8vh 8% 10vh 0;
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
    margin: 0 auto;
    display: inline-block;
  }
}
</style>
