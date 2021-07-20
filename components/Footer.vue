<template>
  <footer>
    <ul>
      <li>
        <a href="https://oc2021.compositecomputer.club/" target="_blank" title="OC2021">
          <img id="logo" src="../static/Footer/C3logo.png" alt="logo"/>
        </a>
      </li>
      <div class="linkBox">
        <a class="linkItem" href="https://www.youtube.com/channel/UCeRY2jujVBYRqmilrCZytFw" target="_blank" title="C3 YouTube Channel">
          <font-awesome-icon class="icon" :icon="['fab', 'youtube']" />
        </a>
        <a class="linkItem" href="https://twitter.com/c3_kyutech?s=20" target="_blank" title="C3 Twitter">
          <font-awesome-icon class="icon" :icon="['fab', 'twitter']" />
        </a>
        <a class="note" href="https://note.com/c3noteproject" target="_blank" title="C3 note"><img src="../static/Footer/note-logo.svg"></a>
      </div>
      <li class="text-link-box">
        <a
          class="link"
          href="https://compositecomputer.club/"
          target="_blank"
          title="C3 Official Website"
        >
          C3 Official Website<font-awesome-icon class="link-icon" icon="external-link-alt" />
        </a>
        <br />
        <a
          class="link"
          href="https://www.iizuka.kyutech.ac.jp/"
          target="_blank"
          title="Kyutech HP"
        >
          情報工学部<font-awesome-icon class="link-icon" icon="external-link-alt" />
        </a>
      </li>
    </ul>
    <div class="returnTopBox">
      <button id="returnTop" v-show="buttonActive" @click="returnTop">
        <font-awesome-icon id="up" icon="angle-up" /><br />PAGE TOP
      </button>
    </div>
    <div class="copyRight">© 2021 C3</div>
  </footer>
</template>

<style scoped>
footer {
  max-width: 100%;
  width: 100%;
  background-color: #28425a;
  margin: 0;
  padding: 30px 10vw;
  position: relative;
  /* z-index: 20; */
}
a::selection, div::selection, button::selection {
  background: #4565863d;
}
a:hover {
  opacity: 0.5;
}
button:hover {
  opacity: 0.5;
  background: #28425a;
}
.link {
  opacity: 0.9;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: baseline;
  align-items: center;
}
.linkBox {
  display: flex;
  justify-content: center;
  align-items: center;
}
.linkItem {
  width: 50px;
  flex-shrink: 0;
  text-align: center;
}
a.note {
  color: white;
	text-decoration: none;
	/*margin: auto 8px;*/
	font-size: 18px;
}
.note img {
  width: 60px;
  margin: -10px;
}
.icon {
	color: white;
	font-size: 30px;
}
/* PC/タブレット横 */
@media screen and (min-width: 769px) {
  ul {
    display: flex;
    justify-content: baseline;
    align-items: center;
    margin: 0 auto 0 5%;
    list-style: none;
  }
  li {
    margin: 0px;
  }
  a {
    margin: 10px 12px 10px 12px;
  }
  #logo {
    height: 70px;
    width: 70px;
    border-radius: 50%;
  }
  .link {
    display: flex;
    flex-direction: row;
    justify-content: baseline;
  }
  .link-icon {
    font-size: 13px;
    margin-left: 5px;
  }
  #returnTop {
    border-radius: 20px/20px;
    padding: 10px;
    background-color: #28425a;
    border: none;
    color: white;
    position: absolute;
    right: 8%;
    top: 20%;
  }
  .copyRight {
    color: lightgray;
    position: absolute;
    right: 8%;
    bottom: 30px;
  }
}
/* スマホ/タブレット縦 */
@media screen and (max-width: 768px) {
  ul {
    margin-top: 30px;
    list-style: none;
    padding: 0;
  }
  li {
    margin: 0;
  }
  a {
    color: white;
    text-decoration: none;
    font-size: 80%;
    /*margin: 10px 5% 0 0;*/
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #logo {
    display: none;
  }
  a.link {
    margin: auto;
  }
  .text-link-box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .link {
    padding-bottom: 7px;
    border-bottom: solid 0.5px rgba(255, 255, 255, 0.8);
    display: inline-block;
  }
  .linkBox {
    position: absolute;
    bottom: 23%;
    left: 0;
    right: 0;
    margin: auto;
  }
  .link-icon {
    font-size: 10px;
    margin-left: 5px;
  }
  button {
    font-size: 10px;
  }
  #returnTop {
    border-radius: 20px/20px;
    padding: 10px;
    background-color: #28425a;
    border: none;
    color: white;
    position: absolute;
    right: 5%;
    top: 5%;
  }
  .copyRight {
    color: lightgray;
    margin-top: 70px;
    font-size: 12px;
    display: flex;
    justify-content: center;
  }
}
</style>

<script>
export default {
  data() {
    return {
      buttonActive: true,
      scroll: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrooWindow);
  },
  methods: {
    returnTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  scrollWindow() {
    const top = 100;
    this.scroll = window.scrollY;
    if (top <= this.scroll) {
      this.buttonActive = true;
    } else {
      this.buttonActive = false;
    }
  },
};
</script>
