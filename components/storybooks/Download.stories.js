import Download from "../work/Download.vue";
export default { title: "Download" };

export const download1 = () => ({
  components: { Download },
  template: '<download :work_id="work_id"/>',
  props: {
    work_id: {
      default: "1"
    }
  }
});

