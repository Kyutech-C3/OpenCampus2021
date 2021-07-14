import WorkLink from "../work/WorkLink.vue";
export default { title: "WorkLink" };

export const menu1 = () => ({
  components: { WorkLink },
  template: '<WorkLink to="https://github.com/kyutech-c3/OpenCampus2021" />',
});
