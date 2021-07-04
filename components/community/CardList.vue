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
