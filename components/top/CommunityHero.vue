<template>
  <div class="community-hero" :style="styles">
    <h1 class="name">{{ item.name }}</h1>
    <div class="description">{{ item.description }}</div>
    <a class="button-wrapper" :href="item.linkUrl" :title="item.name">
      <span class="button-text">もっとみる→</span>
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
.community-hero,
.name {
  background-image: var(--bgUrl);
  background-size: cover;
}
.community-hero {
  position: relative;
  z-index: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0;
  padding: 40px;
  height: 100vh;
}
@media screen and (max-width: 767px) {
  .community-hero {
    padding: 20px;
  }
}

.community-hero:before {
  content: "";
  background: inherit;
  -webkit-filter: blur(4px) brightness(60%);
  -moz-filter: blur(4px) brightness(60%);
  -o-filter: blur(4px) brightness(60%);
  -ms-filter: blur(4px) brightness(60%);
  filter: blur(4px) brightness(60%);
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  z-index: -1;
}

.name,
.description,
.button-wrapper {
  color: white;
}

.name {
  font-size: clamp(90px, 12vw, 231px);
  color: rgba(255, 255, 255, 0.15);
  padding-top: 60px;
  padding-left: 100px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position-x: -3px;
  background-position-y: -3px;
  background-clip: text;
  -webkit-background-clip: text;
  filter: brightness(200%);
  -webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}
@media screen and (max-width: 767px) {
  .name {
    font-size: 15vw;
    padding-left: 20px;
  }
}

.description {
  font-size: clamp(15px, 2vw, 39px);
  margin: 20% 10% 0 30%;
  letter-spacing: 4px;
  line-height: 1.3em;
  -webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}
@media screen and (max-width: 767px) {
  .description {
    font-size: 20px;
    margin: 50% 20px 0 20px;
  }
}

.button-wrapper {
  border: 2px solid white;
  border-radius: 40px;
  padding: 10px 50px;
  text-decoration: none;
  margin: 50px auto;
  width: fit-content;
  z-index: 10;
  transition: 0.3s;
}
.button-wrapper:hover {
  border: 2px solid #3b8070;
  background-color: #35495e4d;
  color: #3b8070;
}
@media screen and (max-width: 767px) {
  .button-wrapper {
    padding: 10px 30px;
  }
}

.button-text {
  text-align: center;
  font-size: 35px;
  letter-spacing: 0.3em;
}
@media screen and (max-width: 767px) {
  .button-text {
    font-size: 20px;
  }
}
</style>
