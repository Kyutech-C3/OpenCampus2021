<template>
  <div class="communityHero">
    <div v-for="(item, i) in items" :key="i">
      <game-hero
        :name="item.name"
        :imgUrl="item.imgUrl"
        :description="item.description"
      />
    </div>
  </div>
</template>

<script>
import CGHero from "./CGHero.vue";
import GameHero from "./GameHero.vue";
import HackHero from "./HackHero.vue";
import MediaArtHero from "./MediaArtHero.vue";

export default {
  components: { GameHero, CGHero, HackHero, MediaArtHero },
  data: () => ({
    items: [
      {
        name: "GAME",
        description: "GAMEコミュの説明",
        imgUrl: "",
        linkUrl: "",
      },
      {
        name: "CG",
        description: "CGコミュの説明",
        imgUrl: "",
        linkUrl: "",
      },
      {
        name: "HACK",
        description: "HACKコミュの説明",
        imgUrl: "",
        linkUrl: "",
      },
      {
        name: "MEDIA ART",
        description: "MEDIA ARTコミュの説明",
        imgUrl: "",
        linkUrl: "",
      },
    ],
  }),
};
</script>

<style scoped></style>
