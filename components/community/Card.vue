<template>
  <nuxt-link to="{name: 'works-id', params: {id: is}}" class="card-link">
    <article class="card">
      <img src="../../assets/smple_img.png" alt="thumbnail" title="thumbnail" class="thumbnail"/>
      <div class="content">
          <div class="title">{{title}}</div>
          <div class="description">{{description}}</div>
      </div>
    </article>
  </nuxt-link>

</template>

<script>
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
  height: 130px;
  padding-left: 7px;
  padding-right: 7px;
  overflow: hidden;
}
.thumbnail {
  position: relative;
  width: 200px;
  height: 150px;
  object-fit: cover;
}
.title {
  font-size: 20px;
  font-weight: bold;
}
.description {
  position: relative;
  word-break: break-all;
  font-size: 14px;
}
</style>