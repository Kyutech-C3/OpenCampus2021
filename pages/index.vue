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
  head: {
    titleTemplate: null,
    title: 'C3 OpenCampus2021'
  },
  data() {
    return {
      items: [
        {
          name: "GAME",
          description:
            "ゲームコミュニティではアクション、シューティング、ノベルゲームなど様々なジャンルのゲームを制作・公開しています。CGやメディアアートコミュニティのメンバーと協力して制作することもあります。ゲーム制作で分からないことがあったら先輩や仲間に聞ける良い環境です。",
          imgUrl:
            "https://simo-c3.github.io/image_url/c3_summer_logo.png",
          linkUrl: "/community/2"
        },
        {
          name: "CG",
          description:
            "コンピュータグラフィックス（英: computer graphics、略称: CG）は、コンピュータを用いて画像を生成する科学技術、及びその技術によって生成される画像のことである。",
          imgUrl:
            "https://simo-c3.github.io/image_url/c3_summer_logo.png",
          linkUrl: "/community/3"
        },
        {
          name: "HACK",
          description:
            "Hackコミュニティは、元々ProgrammingコミュニティーとWebコミュニティに分かれていたものが合体してできたコミュニティーです。現在は、Web制作やアプリ開発、CPU開発、Bot作成など様々な領域で開発に取り組んでいます。このサイトで展示されている作品の中には、大学生になってパソコンを持った子が制作した作品もあります。",
          imgUrl:
            "https://simo-c3.github.io/image_url/c3_summer_logo.png",
          linkUrl: "/community/1"
        },
        {
          name: "MEDIA ART",
          description:
            "メディアアートコミュニティではAfter EffectやPremiere Proなどでの動画編集・制作やStudio Oneでの音楽制作、Clip Studioでのイラスト制作を行っております！",
          imgUrl:
            "https://simo-c3.github.io/image_url/c3_summer_logo.png",
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
