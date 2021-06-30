export default { title: "Sample" };

export const sample1 = () => ({
  template: '<sample :sample="storybook"/>',
  props: {
    storybook: {
      default: "Sample1"
    }
  }
});

export const sample2 = () => ({
  template: '<sample :sample="storybook"/>',
  props: {
    storybook: {
      default: "Sample2"
    }
  }
});
