<template>
  <div>
    <!--<Header />-->
    <div>
      <h1>{{ genre.title }} Community</h1>
    </div>
    <!-- <card-list :card_items="genre.works" /> -->
    <tag-selector :tags="allTags" v-model="selectedTags" />

    <card-list :card_items="tagFilteredWorks" />
  </div>
</template>

<script>
import TagSelector from '../../components/work/TagSelector.vue';
import CardList from "../../components/community/CardList.vue";
//import Header from "../../components/Header.vue"
//import card_items from "../../assets/posts.json";

export default {
  components: {
    TagSelector,
    CardList
    // Header
  },
  data() {
    return {
      // card_items: card_items,
      genre: {},
      selectedTags: []
    };
  },
  computed: {
    allTags() {
      let tags = []
      this.genre.works.forEach((work) => {
        tags = tags.concat(work.tags.filter(tag => !tags.filter(t => t.id === tag.id).length))
      })
      return tags
    },
    tagFilteredWorks() {
      // console.debug(this.genre.works, this.selectedTags)
      if(this.selectedTags.length === 0) {
        return this.genre.works
      } else {
        return this.genre.works.filter(work => (
          !!this.selectedTags.filter(tag => !!work.tags.filter(t => tag.id === t.id).length).length
        ))
      }
    }
  },
  async asyncData({ error, params, $axios }) {
    console.debug('$axios', $axios)
    console.log('$axios', $axios)
    const res = await $axios.get(`genres/${params.community_id}/`).catch(e => {
      console.error('failed', e)
    })

    console.debug(res)

    if( res.status === 200) {
      return {
        genre: res.data
      }
    } else {
      error({ statusCode: res.status })
    }
  }
};
</script>
