import Favorite from "../work/Favorite.vue";
export default { title: "Favorite" };

export const favorite1 = () => ({
  components: { Favorite },
  template: '<favorite :work_id = "work_id"/>',
  props: {
    work_id: {
      default: 1
    }
  }
});

