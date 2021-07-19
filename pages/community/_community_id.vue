<template>
  <div>
    <div class="container">
      <div class="row">
        <description :info="communityInfo" />
      </div>
      <div class="row">
        <div class="name bold">作品</div>
      </div>
      <div class="row">
        <tag-selector :tags="allTags" v-model="selectedTags" />
      </div>
      <div class="row">
        <card-list :card_items="tagFilteredWorks" />
      </div>
      <div class="row error-row" v-if="tagFilteredWorks.length === 0" >
        <div class="error-notfound">
          <font-awesome-icon class="error-notfound-icon" icon="exclamation-circle" />
          <div class="bold error-notfound-message">作品が見つかりませんでした</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TagSelector from '../../components/work/TagSelector.vue';
import CardList from "../../components/community/CardList.vue";
import Description from '../../components/community/Description.vue';

export default {
  components: {
    TagSelector,
    CardList,
    Description,
  },
  data() {
    return {
      // card_items: card_items,
      genre: {},
      selectedTags: []
    };
  },
  computed: {
    communityInfo() {
      return {
        name: `${this.genre.title} community`,
        description: this.genre.description
      }
    },
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
        return this.genre.works.filter(work => {
          //!!this.selectedTags.filter(tag => !!work.tags.filter(t => tag.id === t.id).length).length
          let state = true
          this.selectedTags.forEach(tag => {
            if(!work.tags.find(t => t.id === tag.id)) {
              state = false
            }
          })
          return state
        })
      }
    }
  },
  async asyncData({ error, params, $axios }) {
    const res = await $axios.get(`genres/${params.community_id}/`).catch(e => {
      console.error('failed', e)
      throw new Error(e)
    })

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
<style scoped>
div {
	--base-color: #495D7E;
	--highlight-color: #FCFB6B;
}
.container {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
}
.row {
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
}
.name {
	color: var(--base-color);
	background:linear-gradient(transparent 60%, var(--highlight-color) 60%);
	font-size: calc(4.5vw + 10px);
	display: inline-block;
	white-space: nowrap;
	padding-right: 10px;
	margin-bottom: 3vw;
  -webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}
.error-row {
  justify-content: center;
}
.error-notfound {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5rem;
  color: var(--base-color);
}
.error-notfound-icon {
  font-size: 3rem;
}
.error-notfound-message {
  margin-left: .6em;
  font-size: 1.2rem;
}
</style>
