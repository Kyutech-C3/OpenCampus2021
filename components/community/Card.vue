<template>
  <article class="card">
    <img src="../../assets/smple_img.png" alt="thumbnail" title="thumbnail" class="thumbnail"/>
    <div class="content">
        <div class="title">{{title}}</div>
        <div class="description">{{description}}</div>
    </div>
  </article>
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
    }
  }
}
</script>

<style scoped>
.card {
    width: 200px;
    height: 300px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.24);
}
.content {
    position: relative;
    width: 200px;
    height: 140px;
    padding-left: 5px;
    padding-right: 5px;
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
    /* overflow-wrap: break-word; */
    word-break: break-all;
    
}
</style>