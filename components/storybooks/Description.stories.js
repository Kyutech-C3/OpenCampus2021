import Description from "../community/Description";
export default { title: "Description" };

export const pigeonDescription = () => ({
  components: { Description },
  template: '<description :info="info"/>',
  props: {
    info: {
      default: {
        name: 'Pigeon community',
        description: '鳩（はと）は、ハト目・ハト科に属する鳥類の総称である。体に比べて頭が小さく、胸骨、胸筋が発達してずんぐりとした体型が特徴である。ハト目には世界では約42属290種あり、そのうち日本の在来種は、カラスバト属（カラスバト、アカガシラカラスバト、ヨナクニカラスバト、リュウキュウカラスバト、オガサワラカラスバト）、キジバト属（キジバト、リュウキュウキジバト、シラコバト）、ベニバト属（ベニバト）、キンバト属（リュウキュウキンバト）、アオバト属（アオバト、リュウキュウズアカアオバト、チュウダイズアカアオバト）の5属13種があげられる[注 1]。 このうち、リュウキュウカラスバトとオガサワラカラスバトの2種は、絶滅したと考えられていたが、近年、DNA調査により亜種がいくつかの諸島部で生存していることが確認された。'
      }
    }
  }
});

export const gameDescription = () => ({
  components: { Description },
  template: '<description :info="info"/>',
  props: {
    info: {
      default: {
        name: 'PreHack community',
        description: 'Prehackとは、Hackコミュニティがコミュニティ活動の一環として取り組んでいる活動です。\n活動内容は次の３つのフェーズに分かれています。（３週間で１周が終わります。）\n①１週目は、テーマ分けフェーズの週です。メンバーがそれぞれやりたいことを大喜利チャンネルで持ち寄り、興味がある分野に参加します。\n②２週目は、図には書いてありませんが、作業フェーズの週であり、主に同じグループメンバーの進捗状況や、実装方法などについて情報共有を行います。\n③３週目は、発表フェーズでそれぞれ出来上がった作品について発表し合います。'
      }
    }
  }
});
