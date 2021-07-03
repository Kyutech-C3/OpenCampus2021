import Message from "../top/Message.vue";
export default { title: "Message" };

export const message1 = () => ({
  components: { Message },
  template: '<message :sample="storybook"/>',
  props: {
    storybook: {
      default: "message1"
    }
  }
});
