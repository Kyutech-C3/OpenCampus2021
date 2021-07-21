<template>
  <div ref="target" class="wrap">
    <transition name="fade">
      <div v-show="visible" class="wrap">
        <div class="titleWrap">
          <div class="titleContent">About C3</div>
        </div>
        <div class="main">
          <div class="mainContent">
            C3は「Composite Computer Club」の略称で、コンピューターを使ってゲーム、CG、音楽、映像作品、webサイト・アプリ等を創作・公開する九州工業大学情報工学部のサークルです！<br/><br/>
            普段はいくつかのコミュニティに分かれて、技術交流や作業会をしたり、有志が集まって共同制作を行ったりしています。月に一度、お互いの創作物を見せ合う展覧会などの活動もあります。<br/><br/>
            自分でゲームを作ってみたい。<br/>
            作った創作物をコミックマーケットなどのイベントで配布したい。<br/>
            カッコいい映像を編集したい。<br/>
            自分でCGモデリングしてバ美肉したい。<br/>
            便利なwebアプリを作りたい。<br/><br/>
            そんな色んな想いを持った部員がC3で活動しています。九工大情報工学部に入学することがあれば是非とも見学して、『〇〇を作ってみたい』という気持ちになれば入部してもらえると嬉しいです！<br/><br/>
            当サイトも部員が作成したもので、ここでは部員が作った創作物を体験することができます。C3に興味がある方、そうではない方でも是非観ていって下さい。<br/>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default ({
  data() {
    return {
      visible: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const elementY = this.$refs.target.getBoundingClientRect().top;
      const y = window.pageYOffset;
      // console.log({
      //   y: y,
      //   elementY: elementY
      // });
      if (!this.visible) {
        this.visible = (elementY < window.innerHeight);
      } else if (elementY > window.innerHeight) {
        this.visible = !this.visible;
      }
    },
  },
})
</script>

<style scoped>
/* animation */
.fade-enter-active,
.fade-leave-active {
  transition: all 3s ease;
}
.fade-enter, .fade-leave-to {
  transform: translateY(10%);
  opacity: 0;
}

/* style */
.wrap {
  background-color: #FAFAFA;
}
.titleWrap {
  position: relative;
  padding: 5vh 0 2vh 0;
}
.titleContent {
  padding: 0 0.1em;
  color: #456586;
  font-size: clamp(60px, 15vw, 288px);
  font-weight: bold;
  width: 100%;
  height: max(18vw, 70px);
  z-index: 10;
  -webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
  display: inline;
  background: -moz-linear-gradient(top, transparent 50%, #FFFF22B3 50%);
  background: -webkit-linear-gradient(top, transparent 50%, #FFFF22B3 50%);
  background: linear-gradient(to bottom, transparent 50%, #FFFF22B3 50%);
}
.main {
  background-color: #FAFAFA;
}
.mainContent {
  background-color: #FAFAFA;
  text-align: left;
  color: #4A4A4A;
  font-size: clamp(16px, 2vw, 39px);
  line-height: max(4vw, 20px);
  text-align: justify;
  text-justify: auto;
}
.mainContent::selection {
  background: #4565863d;
}
/* スマホ以上 */
@media screen and (min-width: 481px) {
  .titleContent {
    margin: 0 auto 0 8%;
  }
  .main {
    padding: 0 8% 10vh 0;
    margin: 0 auto 0 18vw;
  }
}
/* スマホ幅 */
@media screen and (max-width: 480px) {
  .titleContent {
    margin: 0 auto 0 20px;
  }
  .main {
    padding: 0 0 10vh 0;
    margin: 0 auto;
    display: flex;
  }
  .mainContent {
    margin: 0 30px;
    display: inline-block;
  }
}
</style>
