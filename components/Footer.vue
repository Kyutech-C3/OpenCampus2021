<template>
  <footer>
    <ul>
      <li>
        <a href="https://oc2021.compositecomputer.club/"
          ><img id="logo" src="../static/Footer/C3logo.png" alt="logo"
        /></a>
      </li>
      <div class="linkBox">
        <a class="linkItem" href="https://www.youtube.com/channel/UCeRY2jujVBYRqmilrCZytFw">
					<font-awesome-icon class="icon" :icon="['fab', 'youtube']" />
				</a>
        <a class="linkItem" href="https://twitter.com/c3_kyutech?s=20">
					<font-awesome-icon class="icon" :icon="['fab', 'twitter']" />
        </a>
        <a class="note linkItem" href="https://note.com/c3noteproject">note</a>
      </div>
      <li>
        <a
          class="link"
          href="https://compositecomputer.club/"
          target="_blank"
        >
          C3 Official Website<font-awesome-icon class="link-icon" icon="external-link-alt" />
        </a>
        <br />
        <a
          class="link"
          href="https://www.iizuka.kyutech.ac.jp/"
          target="_blank"
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
  padding: 30px 30px 10px 30px;
  position: relative;
  /* z-index: 20; */
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
a.note {
  color: white;
	text-decoration: none;
	/*margin: auto 8px;*/
	font-size: 18px;
}
.icon {
	color: white;
	font-size: 30px;
}
#youtube {
  height: 20px;
  width: 30px;
}
#twitter {
  height: 25px;
  width: 30px;
}
#up {
	font-size: 25px;
	margin-bottom: 5px;
}
/* PC/タブレット横 */
@media screen and (min-width: 768px) {
  ul {
    display: flex;
    justify-content: baseline;
    align-items: center;
    margin: 0 auto 0 5%;
    list-style: none;
  }
  li {
    margin: 0 15px;
  }
  a {
    margin: 10px 12px 10px 12px;
  }
  #logo {
    height: 100px;
    width: 100px;
    border-radius: 50%;
  }
  .linkBox {
    display: flex;
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
    bottom: 8%;
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
  .link {
    padding-bottom: 5px;
    border-bottom: solid 0.5px lightgray;
  }
  .linkBox {
    position: absolute;
    bottom: 15%;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    justify-content: center;
  }
	.linkItem {
		flex-basis: 50px;
	}
  #youtube {
    margin: 10px;
  }
  #twitter {
    margin: 10px;
  }
  .link-icon {
    font-size: 10px;
    margin-left: 5px;
  }
  button {
    font-size: 20%;
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
    font-size: 50%;
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
