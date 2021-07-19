import Favorite from "../work/Favorite.vue";
export default { title: "Favorite" };

export const favorite1 = () => ({
  components: { Favorite },
  template: '<favorite :work_id = "work_id" :goods = "goods"/>',
  props: {
    work_id: {
      default: 1
    },
    goods: {
      default: 1
    }
  }
});

