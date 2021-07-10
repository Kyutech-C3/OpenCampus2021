import CommunityHero from "../top/CommunityHero.vue";
import GameHero from "../top/GameHero.vue";
export default { title: "CommunityHero" };

export const main = () => ({
  components: { CommunityHero },
  template: "<CommunityHero/>",
});

export const game = () => ({
  components: { GameHero },
  template: '<GameHero :imgUrl="imgUrl" :name="name"/>',
  props: {
    imgUrl: "https://pbs.twimg.com/media/Ev7mQmgVoAUXAke?format=jpg&name=large",
    name: "GAME",
    description: "GAMEコミュの説明",
    linkUrl: "",
  },
});
