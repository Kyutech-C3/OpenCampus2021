import Sample from "../sample/Sample.vue";
export default { title: "Sample" };

export const sample1 = () => ({
  components: { Sample },
  template: '<sample :sample="storybook"/>',
  props: {
    storybook: {
      default: "Sample1"
    }
  }
});

export const sample2 = () => ({
  components: { Sample },
  template: '<sample :sample="storybook"/>',
  props: {
    storybook: {
      default: "Sample2"
    }
  }
});
