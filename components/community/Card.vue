<template>
  <div @click='$router.push(workPath)' class="card-link">
    <article class="card">
      <img :src="card_image" alt="thumbnail" title="thumbnail" class="thumbnail"/>
      <div class="tag_viewer1" v-if="isHoverFlag">
      </div>
      <div class="content">
          <div class="title">{{title}}</div>
          <div class="tag_wrap">
            <div class="tag" @mouseover="isHoverFlag = true" @mouseleave="isHoverFlag = false">
              <Tag 
                v-for="tag in tags"
                extraSmall
                outline
                :tag="tag"
                :key="tag.id"
              />
            </div>
          </div>
          <div class="description">{{description}}</div>
      </div>
    </article>
  </div>
</template>

<script>
import Tag from "../Tag.vue"
export default {
  data() {
    return {
      style: true,
      isHoverFlag: false
    }
  },
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
    work_id: {
      type: Number,
      require:true,
    },
    genre_id: {
      type: String,
      require: true,
    },
    key: {
      type: Number,
      require: true,
    }
  },
  components: {
    Tag,
  },
  computed: {
    workPath () {
      return `/works/${this.work_id}`
    }
  }
}
</script>

<style scoped>
.card-link {
  margin: 15px;
  text-decoration: none;
  color: #000000 ;
}
.card {
  width: 300px;
  height: 380px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.24);
  transition: 0.3s;
  cursor: pointer;
  overflow: hidden;
}
.card:hover {
  box-shadow: 0 0 20px 2px rgb(0 0 0 / 50%);
}
.content {
  position: relative;
  width: 300px;
  height: 270px;
  padding: 10px 15px 10px 15px;
  overflow: hidden;
}
.thumbnail {
  position: relative;
  width: 300px;
  height: 220px;
  object-fit: cover;
}
.title {
  font-size: 18px;
  margin-bottom: 5px;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.tag_wrap {
  overflow: hidden;
  overflow-x: auto;
  cursor: default;
}
.tag_wrap::-webkit-scrollbar {
  height: 7px;
}

.tag_wrap::-webkit-scrollbar-thumb {
  background: rgb(219, 219, 219);
  border-radius: 3px;
}

.tag_wrap::-webkit-scrollbar-track {
  background: rgba(221, 221, 221, 0.219);
}
.tag {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-right: 3px;
  margin-bottom: 4px;

}
.description {
  position: relative;
  font-size: 12px;
  margin-top: 6px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  white-space: normal;
  overflow: hidden;
  -webkit-box-orient: vertical;
}
@media screen and (max-width: 370px) {
  .card {
    width: 230px;
  }
  .content {
    width: 230px;
  }
  .thumbnail {
    width: 230px;
  }
}
</style>
