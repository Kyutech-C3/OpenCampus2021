import TagList from "../work/TagList.vue";
export default { title: "TagList" };

const sampleTags = [
  {
    id: 1,
    name: 'Unity',
    color: '#FF0000'
  },
  {
    id: 2,
    name: 'Nuxt.js',
    color: '#FF0000'
  },
  {
    id: 3,
    name: 'Next.js',
    color: '#00FF00'
  },
  {
    id: 4,
    name: 'Next.js',
    color: '#00FF00'
  },
]

export const TagList1 = () => ({
  components: { TagList },
  template: '<tag-list :tags="tags"/>',
  props: {
    tags: {
      default: sampleTags
    }
  }
});