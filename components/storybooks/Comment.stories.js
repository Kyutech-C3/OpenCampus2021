import Comment from "../work/Comment.vue";

export default { title: "Comment" };

export const guestComment = () => ({
	components: { Comment },
  template: '<comment :work_num="work_num" />',
  props: {
    work_num: {
      default: 1
    }
  }
});
