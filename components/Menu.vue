<template>
  <div class="nav-wrap">
    <div class="nav-container">
      <div class="menu">
        <div class="button" tabindex="0">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </div>
        <div class="nav-content">
          <ul>
            <li>
              <div class="home">
                <a href="/">
                  <font-awesome-icon class="icon" icon="home" />
                  HOME
                </a>
              </div>
            </li>
            <li><p>作品を見る</p></li>
            <li>
              <div class="list">
                <a :href="items[0].linkUrl">
                  <font-awesome-icon class="icon" icon="gamepad" />
                  GAME
                </a>
              </div>
            </li>
            <li>
              <div class="list">
                <a :href="items[1].linkUrl">
                  <font-awesome-icon class="icon" :icon="['far', 'images']" />
                  CG
                </a>
              </div>
            </li>
            <li>
              <div class="list">
                <a :href="items[2].linkUrl">
                  <font-awesome-icon class="icon" icon="laptop-code" />
                  HACK
                </a>
              </div>
            </li>
            <li>
              <div class="list">
                <a :href="items[3].linkUrl">
                  <font-awesome-icon class="icon" icon="palette" />
                  MEDIA_ART
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Object,
      required: false,
      default: [
        {
          name: "GAME",
          description: "GAMEコミュの説明",
          imgUrl: "",
          linkUrl: "/community/1"
        },
        {
          name: "CG",
          description: "CGコミュの説明",
          imgUrl: "",
          linkUrl: "/community/2"
        },
        {
          name: "HACK",
          description: "HACKコミュの説明",
          imgUrl: "",
          linkUrl: "/community/3"
        },
        {
          name: "MEDIA ART",
          description: "MEDIA ARTコミュの説明",
          imgUrl: "",
          linkUrl: "/community/4"
        }
      ]
    }
  }
};
</script>

<style scoped>
.nav-wrap {
  position: relative;
  z-index: 99;
}
.button {
  position: fixed;
  top: 20px;
  left: 20px;
  height: 30px;
  width: 30px;
  margin: 0;
  z-index: 100;
  -webkit-appearance: none;
  border: 0;
  border-radius: 0;
  cursor: pointer;
  pointer-events: auto;
  touch-action: manipulation;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.icon-bar {
  display: block;
  width: max(4vh, 20px);
  height: 2px;
  background: lightgray;
  transition: 0.3s;
}
.icon-bar + .icon-bar {
  margin-top: 7px;
}
.nav-container:focus-within .button {
  pointer-events: none;
}
.nav-container:focus-within .icon-bar:nth-of-type(1) {
  transform: translate3d(0, 9px, 0) rotate(-45deg);
}
.nav-container:focus-within .icon-bar:nth-of-type(2) {
  opacity: 0;
}
.nav-container:focus-within .icon-bar:nth-of-type(3) {
  transform: translate3d(0, -9px, 0) rotate(45deg);
}
.nav-content {
  padding: 70px 0 0 30px;
  max-width: 300px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #4a4a4a;
  pointer-events: auto;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transform: translateX(-100%);
  transition: transform 0.3s;
  will-change: transform;
  contain: paint;
  flex-direction: column;
  z-index: 99;
}
.home {
  margin-bottom: 10px;
}
.list {
  padding-left: 20px;
}
.home,
.list {
  display: flex;
}
.icon {
  color: white;
  font-size: 15px;
}
.nav-content li a,
.nav-content li p {
  padding: 5px 5px;
  display: block;
  text-transform: uppercase;
  transition: color 0.1s;
  color: white;
}

.nav-content li a:hover {
  opacity: 0.6;
}
.nav-container:focus-within .nav-content {
  transform: none;
}
html,
body {
  height: 100%;
}
a,
a:visited,
a:focus,
a:active,
a:link {
  text-decoration: none;
  outline: 0;
}
a {
  color: currentColor;
  transition: 0.2s ease-in-out;
}
h1,
h2,
h3,
h4 {
  margin: 0;
}
ul {
  padding: 0;
  list-style: none;
}
</style>
