import CommunitiesHero from "../top/CommunitiesHero.vue";
import CommunityHero from "../top/CommunityHero.vue";
export default { title: "CommunitiesHero" };

const items = [
  {
    name: "GAME",
    description:
      "ゲーム開発（ゲームかいはつ、英: Game development）とは、ゲームの開発までの制作過程のことをいう。",
    imgUrl:
      "https://unity3d.com/profiles/unity3d/themes/unity/images/unity/beta/alpha-beta/2020.2b-improvements.jpg",
    linkUrl: ""
  },
  {
    name: "CG",
    description:
      "コンピュータグラフィックス（英: computer graphics、略称: CG）は、コンピュータを用いて画像を生成する科学技術、及びその技術によって生成される画像のことである。",
    imgUrl:
      "https://assets.st-note.com/production/uploads/images/42744060/picture_pc_2bf81205a93c3e77d4108e7ffbedaaa7.png?width=800",
    linkUrl: ""
  },
  {
    name: "HACK",
    description:
      "コンピュータープログラミング（英語: Computer Programming）とは、ある特定のコンピューティングの結果を得ることを目的として、実行可能なコンピュータープログラムを設計・構築するプロセスのことである。",
    imgUrl:
      "https://startupcafe-ku.osaka/wp/wp-content/uploads/2020/03/florian-olivo-4hbJ-eymZ1o-unsplash-1200-1024x683.jpg",
    linkUrl: ""
  },
  {
    name: "MEDIA ART",
    description:
      "ニューメディアアート、メディアアート（New media art, media art）は、20世紀中盤より広く知られるようになった、芸術表現に新しい技術的発明を利用する、もしくは新たな技術的発明によって生み出される芸術の総称的な用語である。",
    imgUrl:
      "https://i0.wp.com/necojita.com/wordpress/wp-content/uploads/2017/11/Image-2017-11-13-9-40.jpeg?resize=1276%2C718",
    linkUrl: ""
  }
];

export const Main = () => ({
  components: { CommunitiesHero },
  template: '<CommunitiesHero :items="items"/>',
  data: () => ({ items: items })
});

export const Game = () => ({
  components: { CommunityHero },
  template: '<CommunityHero :item="item"/>',
  props: {
    item: {
      default: items[0]
    }
  }
});

export const CG = () => ({
  components: { CommunityHero },
  template: '<CommunityHero :item="item"/>',
  props: {
    item: {
      default: items[1]
    }
  }
});

export const Hack = () => ({
  components: { CommunityHero },
  template: '<CommunityHero :item="item"/>',
  props: {
    item: {
      default: items[2]
    }
  }
});

export const MediaArt = () => ({
  components: { CommunityHero },
  template: '<CommunityHero :item="item"/>',
  props: {
    item: {
      default: items[3]
    }
  }
});
