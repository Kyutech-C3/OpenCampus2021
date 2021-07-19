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
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped></style>
