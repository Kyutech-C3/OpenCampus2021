<template>
  <div class="card-list">
    <card
      v-for="card_item in card_items"
      :title="card_item.title"
      :team="card_item.team"
      :tags="card_item.tags"
      :description="card_item.description"
      :card_image="card_item.thumbnail"
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
  justify-content: left;
  align-items: center;
  width: 100%;
  max-width: 1320px;
  margin: auto;
}
@media screen and (min-width: 0px) and (max-width: 800px) {
  .card-list {
    flex-direction: column;
  }
} 
</style>
