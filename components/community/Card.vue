<template>
  <nuxt-link to="{name: 'works-id', params: {id: key}}" class="card-link">
    <article class="card">
      <img src="../../assets/smple_img.png" alt="thumbnail" title="thumbnail" class="thumbnail"/>
      <div class="content">
          <div class="title">{{title}}</div>
          <div class="tag">
            <Tag 
            v-for="tag in tags"
            :tag="tag"
            :key="tag.id"
            />
          </div>
          <div class="description">{{description}}</div>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
import Tag from "../Tag.vue"
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: "hoge",
    },
    team: {
      type: Object,
      required: true
    },
    tags: {
      type: Array,
      required: true,
    },
    description: {
      type: String,
      required: true,
      default: "enpty"
    },
    card_image: {
      type: String,
      required: true,
      default: "enpty"
    },
    key: {
      type: Number,
      require:true,
    }
  },
  components: {
    Tag,
  }
}
</script>

<style scoped>
.card-link {
margin: 10px;
text-decoration: none;
color: #000000 ;
}
.card {
  width: 200px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.24);
  cursor: pointer;
}
.content {
  position: relative;
  width: 200px;
  height: 160px;
  padding-left: 10px;
  padding-right: 10px;
  overflow: hidden;
}
.thumbnail {
  position: relative;
  width: 200px;
  height: 120px;
  object-fit: cover;
}
.title {
  font-size: 18px;
  margin-bottom: 5px;
}
.tag {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-right: 3px;
}
.description {
  position: relative;
  word-break: break-all;
  font-size: 12px;
  margin-top: 10px;
}
</style>