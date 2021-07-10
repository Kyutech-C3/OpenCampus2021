<template>
  <div class="communities-hero">
    <div v-for="(item, i) in items" :key="i">
      <community-hero :item="item" />
    </div>
  </div>
</template>

<script>
import CommunityHero from "./CommunityHero.vue";

export default {
  components: { CommunityHero },
  props: {
    items: {
      type: Object,
      required: true,
      default: [
        {
          name: "GAME",
          description: "GAMEコミュの説明",
          imgUrl: "",
          linkUrl: ""
        },
        {
          name: "CG",
          description: "CGコミュの説明",
          imgUrl: "",
          linkUrl: ""
        },
        {
          name: "HACK",
          description: "HACKコミュの説明",
          imgUrl: "",
          linkUrl: ""
        },
        {
          name: "MEDIA ART",
          description: "MEDIA ARTコミュの説明",
          imgUrl: "",
          linkUrl: ""
        }
      ]
    }
  },
  data: () => ({
    items: []
  })
};
</script>

<style scoped></style>
