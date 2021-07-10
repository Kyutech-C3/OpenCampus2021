<template>
  <div class="card-list">
    <card
      class="card"
      v-for="card_item in card_items"
      :title="card_item.title"
      :team="card_item.team"
      :tags="card_item.tags"
      :description="card_item.description"
      :card_image="card_item.card_image"
      :work_id="card_item.id"
      :genre_id="card_item.genre.title"
      :key="card_item.id"
    />
  </div>
</template>

<script>
import Card from "./Card"

export default {
  components: { Card },
  props: {
    card_items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.card-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-around;
  width:880px;
  margin: auto;
}
@media screen and (max-width: 1200px) {
  .card-list {
    width:440px;
  }
}
@media screen and (max-width: 481px) {
  .card-list {
    width:220px;
  }
}
</style>