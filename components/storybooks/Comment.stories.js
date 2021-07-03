import Comment from "../work/Comment.vue";

export default { title: "Comment" };

export const guestComment = () => ({
	components: { Comment },
  template: '<comment/>',
  props: {}
});
