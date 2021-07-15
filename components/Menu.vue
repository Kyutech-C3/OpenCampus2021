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
                <a href="linkUrl1">
                  <font-awesome-icon class="icon" icon="gamepad" />
                  GAME
                </a>
              </div>
            </li>
            <li>
              <div class="list">
                <a href="linkUrl2">
                  <font-awesome-icon class="icon" :icon="['far', 'images']" />
                  CG
                </a>
              </div>
            </li>
            <li>
              <div class="list">
                <a href="linkUrl3">
                  <font-awesome-icon class="icon" icon="laptop-code" />
                  HACK
                </a>
              </div>
            </li>
            <li>
              <div class="list">
                <a href="linkUrl4">
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
  data() {
    return {
      linkUrl1: "/community/1",
      linkUrl2: "/community/2",
      linkUrl3: "/community/3",
      linkUrl4: "/community/4"
    }
  }
};
</script>

<style scoped>
.nav-wrap {
  position: fixed;
  margin-top: 30px;
  z-index: 99;
}
.nav-container {
  position: relative;
}
.button {
  position: absolute;
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
  padding: 100px 0 0 30px;
  max-width: 300px;
  position: absolute;
  top: -30px;
  left: 0;
  width: 250px;
  height: 100vh;
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
ul {
  padding: 0;
  list-style: none;
}
</style>
