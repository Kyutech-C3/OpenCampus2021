import TagSelector from "../work/TagSelector.vue";
export default { title: "TagSelector" };

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
    name: 'Gatsby.js',
    color: '#40F100'
  },
]

export const TagSelector1 = () => ({
  components: { TagSelector },
  template: '<tag-selector :tags="tags" v-model="selectedTags"/>',
  props: {
    tags: {
      default: sampleTags
    }
  },
  data: () => ({
    selectedTags:[]
  })
});