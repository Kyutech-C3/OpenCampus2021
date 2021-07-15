<template>
  <div class="container">
    <Menu />
    <top />
    <about-c-3 />
    <communities-hero :items="items" />
    <message />
  </div>
</template>

<script>
import AboutC3 from "../components/top/AboutC3.vue";
import CommunitiesHero from "../components/top/CommunitiesHero.vue";
import Message from "../components/top/Message.vue";
import Top from "../components/top/Top.vue";
import Menu from "../components/Menu.vue";

export default {
  components: { Top, AboutC3, CommunitiesHero, Message, Menu},
  data() {
    return {
      items: [
        {
          name: "GAME",
          description:
            "ゲーム開発（ゲームかいはつ、英: Game development）とは、ゲームの開発までの制作過程のことをいう。",
          imgUrl:
            "https://unity3d.com/profiles/unity3d/themes/unity/images/unity/beta/alpha-beta/2020.2b-improvements.jpg",
          linkUrl: "/community/1"
        },
        {
          name: "CG",
          description:
            "コンピュータグラフィックス（英: computer graphics、略称: CG）は、コンピュータを用いて画像を生成する科学技術、及びその技術によって生成される画像のことである。",
          imgUrl:
            "https://assets.st-note.com/production/uploads/images/42744060/picture_pc_2bf81205a93c3e77d4108e7ffbedaaa7.png?width=800",
          linkUrl: "/community/2"
        },
        {
          name: "HACK",
          description:
            "コンピュータープログラミング（英語: Computer Programming）とは、ある特定のコンピューティングの結果を得ることを目的として、実行可能なコンピュータープログラムを設計・構築するプロセスのことである。",
          imgUrl:
            "https://startupcafe-ku.osaka/wp/wp-content/uploads/2020/03/florian-olivo-4hbJ-eymZ1o-unsplash-1200-1024x683.jpg",
          linkUrl: "/community/3"
        },
        {
          name: "MEDIA ART",
          description:
            "ニューメディアアート、メディアアート（New media art, media art）は、20世紀中盤より広く知られるようになった、芸術表現に新しい技術的発明を利用する、もしくは新たな技術的発明によって生み出される芸術の総称的な用語である。",
          imgUrl:
            "https://i0.wp.com/necojita.com/wordpress/wp-content/uploads/2017/11/Image-2017-11-13-9-40.jpeg?resize=1276%2C718",
          linkUrl: "/community/4"
        }
      ]
    };
  }
};
</script>

<style>
.container {
  margin: 0 auto;
}
</style>
