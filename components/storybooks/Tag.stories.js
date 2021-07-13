import Tag from "../Tag.vue";
export default { title: "Tag" };

const sampleTags = {
  id: 1,
  name: 'Unity',
  color: '#FF0000'
}

export const DefaultTag = () => ({
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

export const ExtraSmallTag = () => ({
  components: { Tag },
  template: '<div style="display: flex;"><tag :tag="tag" extraSmall /></div>',
  props: {
    tag: {
      default: sampleTags
    }
  },
});

export const DefaultOutlineTag = () => ({
  components: { Tag },
  template: '<div style="display: flex;"><tag :tag="tag" outline /></div>',
  props: {
    tag: {
      default: sampleTags
    }
  }
});

export const SmallOutlineTag = () => ({
  components: { Tag },
  template: '<div style="display: flex;"><tag :tag="tag" small outline /></div>',
  props: {
    tag: {
      default: sampleTags
    }
  },
});

export const ExtraSmallOutlineTag = () => ({
  components: { Tag },
  template: '<div style="display: flex;"><tag :tag="tag" extraSmall outline /></div>',
  props: {
    tag: {
      default: sampleTags
    }
  },
});