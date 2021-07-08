<template>
    <card-list :card_items="card_items"/>
</template>

<script>
import CardList from "../../components/community/CardList.vue"
import card_items from "../../assets/posts.json"

export default {
    components: {CardList},
    data() {
        return {
            card_items: card_items
        }
    }
}
</script>
