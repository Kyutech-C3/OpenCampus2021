<template>
  <div>
    <div class="topwrapper">
      <h1 class="blackline bold">C3 Open Campus 2021</h1>
      <div class="date">
        Jul <span class="thu">22</span><span class="blank">_</span> ‣
        <span class="fri">2</span><span class="blank">_</span>
      </div>
      <div class="scroll" @click="scroll">scro</div>
      <div class="bgimg"></div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://rsms.me/inter/inter.css');

.topwrapper {
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  position: relative;
  padding: 20vh 6vw 0 6vw;
}

.topwrapper:not(.menu) {
  text-align: center;
}

.blackline {
  font-size: max(6.8vw, 44px);
  letter-spacing: 0.2vw;
  color: white;
  display: inline;
  background: linear-gradient(transparent 50%, rgba(0, 0, 0, 0.75) 0%);
}

.date {
  color: white;
  font-weight: 400;
  font-size: 5vw;
  line-height: 5vw;
  letter-spacing: 0.08em;
  margin-top: 14vh;
}

span {
  position: relative;
}

.thu::after {
  content: 'Thu';
  transform: rotate(90deg);
  position: absolute;
  top: 3vw;
  left: 6.1vw;
  font-size: 0.3em;
  line-height: 0.3em;
  letter-spacing: 0.1em;
}

.fri::after {
  content: 'Fri';
  transform: rotate(90deg);
  position: absolute;
  top: 3vw;
  left: 6.6vw;
  font-size: 0.3em;
  line-height: 0.3em;
  letter-spacing: 0.2em;
}

.blank {
  opacity: 0;
}

.scroll {
  color: white;
  font-size: max(1.5vw, 20px);
  letter-spacing: 0.04em;
  position: absolute;
  bottom: 8vh;
  left: 50%;
  transform: translateX(-50%);
  text-decoration: none;
  cursor: pointer;
}

.scroll::after {
  content: '';
  background: white;
  height: 8vh;
  width: 2%;
  position: absolute;
  left: 49%;
  top: 100%;
}

.bgimg {
  background-image: url(../../static/topimgPC.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
}

@media screen and (max-width: 481px) {
  .bgimg {
    background-image: url(../../static/topimgSP.jpg);
  }
}
</style>

<script>
export default {
  methods: {
    scroll() {
      window.scrollTo ({
        top: window.innerHeight,
        behavior: 'smooth',
      })
    }
  }
}
</script>
