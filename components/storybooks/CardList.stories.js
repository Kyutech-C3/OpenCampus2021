import CardList from "../community/CardList.vue";
import card_items from "../../assets/posts.json";
export default { title: "CardList" };

export const cardlist1 = () => ({
  components: {CardList},
  template: '<card-list :card_items="card_items"/>',
  data() {
    return {
        card_items: card_items
    }
  }
});
