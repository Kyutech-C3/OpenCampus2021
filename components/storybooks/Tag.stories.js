import Tag from "../Tag.vue";
export default { title: "Tag" };

const sampleTags = {
  id: 1,
  name: 'Unity',
  color: '#FF0000'
}

export const Tag1 = () => ({
  components: { Tag },
  template: '<div style="display: flex;"><tag :tag="tag" /></div>',
  props: {
    tag: {
      default: sampleTags
    }
  }
});

export const SmallTag = () => ({
  components: { Tag },
  template: '<div style="display: flex;"><tag :tag="tag" small /></div>',
  props: {
    tag: {
      default: sampleTags
    }
  },
});