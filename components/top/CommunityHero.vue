<template>
  <div class="community-hero" :style="styles">
    <h1>{{ item.name }}</h1>
    <div class="description">{{ item.description }}</div>
    <a :href="item.linkUrl">
      <span> もっとみる→ </span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
      default: {
        name: "Not Found",
        description: "説明をここに記載",
        imgUrl: "https://placehold.jp/1920x1080.png",
        linkUrl: ""
      }
    }
  },
  computed: {
    styles() {
      return {
        "--bgUrl": "url(" + this.item.imgUrl + ")"
      };
    }
  }
};
</script>

<style scoped>
.community-hero {
  background-image: var(--bgUrl);
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0;
  padding: 40px;
  height: 100vh;
}
h1 {
  font-size: 150px;
  opacity: 0.5;
  color: white;
}
.description {
  color: white;
  font-size: 1.5rem;
  margin: 100px 0 100px 40%;
}
span {
  text-align: center;
}
a {
  color: white;
  border: solid white;
  border-radius: 50px;
  padding: 10px 50px;
  text-decoration: none;
  margin: auto;
  width: fit-content;
}
</style>
