<template>
  <div class="container" :style="styles">
    <h1>{{ name }}</h1>
    <div class="description">{{ description }}</div>
    <a :href="linkUrl">
      <span> もっとみる→ </span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: "Not Found",
    },
    description: {
      type: String,
      required: true,
      default: "説明をここに記載",
    },
    imgUrl: {
      type: String,
      required: false,
      default: "https://placehold.jp/1920x1080.png",
    },
    linkUrl: {
      type: String,
      required: true,
      default: "#",
    },
  },
  computed: {
    styles() {
      return {
        "--bgUrl": "url(" + this.imgUrl + ")",
      };
    },
  },
};
</script>

<style scoped>
.container {
  background-image: var(--bgUrl);
  background-size: cover;
  margin: 0;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
h1 {
  font-size: 150px;
  opacity: 0.5;
  color: white;
}
.description {
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
