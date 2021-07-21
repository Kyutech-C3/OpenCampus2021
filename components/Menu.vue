<template>
  <div class="wrap">
    <!-- ハンバーガーメニューのボタン -->
    <div class="button" @click="ActiveBtn=!ActiveBtn">
      <span class="icon-bar line-1" :class="{'close-1':ActiveBtn}"></span>
      <span class="icon-bar line-2" :class="{'close-2':ActiveBtn}"></span>
      <span class="icon-bar line-3" :class="{'close-3':ActiveBtn}"></span>
    </div>
    <!-- サイドメニュー -->
    <transition name="slide">
      <div class="nav-content" v-show="ActiveBtn">
          <ul>
            <li>
              <div class="home">
                <a href="/" title="HOME">
                  <font-awesome-icon class="icon" icon="home" />
                  HOME
                </a>
              </div>
            </li>
            <li><p>作品を見る</p></li>
            <li>
              <div class="list">
                <a :href="linkUrl2" title="Game">
                  <font-awesome-icon class="icon" icon="gamepad" />
                  GAME
                </a>
              </div>
            </li>
            <li>
              <div class="list">
                <a :href="linkUrl3" title="CG">
                  <font-awesome-icon class="icon" :icon="['far', 'images']" />
                  CG
                </a>
              </div>
            </li>
            <li>
              <div class="list">
                <a :href="linkUrl1" title="Hack">
                  <font-awesome-icon class="icon" icon="laptop-code" />
                  HACK
                </a>
              </div>
            </li>
            <li>
              <div class="list">
                <a :href="linkUrl4" title="Media_art">
                  <font-awesome-icon class="icon" icon="palette"/>
                  MEDIA_ART
                </a>
              </div>
            </li>
            <li>
              <div class="home">
                <a href="https://www.youtube.com/channel/UCeRY2jujVBYRqmilrCZytFw" target="_brank" title="YouTube">
                  <font-awesome-icon class="icon" :icon="['fab', 'youtube']" />
                  YouTube
                </a>
              </div>
            </li>
            <li>
              <div class="home">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdKmF9kHCJQNp-oVhKxrIaOjvYl6q-3P6GfmolNs7nuULYYYA/viewform" target="_brank" title="アンケート">
                  <font-awesome-icon class="icon" icon="file-alt" />
                  アンケート
                </a>
              </div>
            </li>
          </ul>
        </div>
    </transition>
    <div 
      v-if="ActiveBtn"
      class="close-area"
      @click="ActiveBtn=!ActiveBtn"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      ActiveBtn: false,
      linkUrl1: "/community/1",
      linkUrl2: "/community/2",
      linkUrl3: "/community/3",
      linkUrl4: "/community/4"
    }
  }
};
</script>

<style scoped>
.wrap {
  z-index: 100;
}
.button {
  position: fixed;
  cursor: pointer;
  z-index: 105;
  padding: 29px 10px 10px 10px;
}
.icon-bar {
  display: block;
  width: max(4vh, 20px);
  height: 2px;
  background: lightgray;
}
.icon-bar + .icon-bar {
  margin-top: 8px;
}
.line-1, .line-2, .line-3 {
  transition: 0.3s ease;
}
.close-1 {
  transform: translate3d(0, 10px, 0) rotate(-45deg);
  transition: 0.3s ease;
}
.close-2 {
  transition: 0.3s ease;
  opacity: 0;
}
.close-3 {
  transform: translate3d(0, -10px, 0) rotate(45deg);
  transition: 0.3s ease;
}
.nav-content {
  margin: 0;
  padding: 100px 0 0 40px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background: #4a4a4a;
  pointer-events: auto;
  flex-direction: column;
  z-index: 102;
}
.slide-enter-active, .slide-leave-active {
  transform: translate(0px, 0px);
  transition: 0.4s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateY(0) translateX(-100%);
  transition: 0.4s ease;
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
  font-size: max(5%, 18px);
}
.nav-content li a,
.nav-content li p {
  padding: 5px 5px;
  color: white;
  font-size: max(5%, 20px);
  text-align: left;
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
.close-area {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 101;
}
/* スマホ以上 */
@media screen and (min-width: 481px) {
  .button {
    top: 20px;
    left: 20px;
  }
  .nav-content {
    width: 300px;
  }
}
/* スマホ幅 */
@media screen and (max-width: 480px) {
  .button {
    padding: 22px 10px 10px 20px;
  }
  .nav-content {
    width: 80%;
  }
}
</style>
