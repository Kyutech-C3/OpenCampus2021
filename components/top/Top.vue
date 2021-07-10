<template>
  <div>
    <div class="topwrapper">
      <div class="menu">
      </div>
      <h1 class="blackline bold">&nbsp;C3 Open Campus 2021&nbsp;</h1>
      <div class="date">
        Jul <span class="thu">22</span><span class="blank">_</span> ‣
        <span class="fri">2</span><span class="blank">_</span>
      </div>
      <div class="scroll" id="scroll">scro</div>
    </div>
    <div class="nextwrapper"></div>
  </div>
</template>

<style scoped>
.topwrapper {
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  position: relative;
}

.menu {
  width: max(8vh, 40px);
}

.menu .menubar {
  font-size: max(4vh, 20px);
  height: max(8vh, 40px);
  line-height: max(8vh, 40px);
  color: white;
}

.topwrapper:not(.menu) {
  text-align: center;
}

.blackline {
  font-size: 6.8vw;
  letter-spacing: 0.2vw;
  font-weight: 600;
  color: white;
  position: relative;
  display: inline-block;
  margin-top: 10vh;
}

.blackline::after {
  content: "";
  background: rgba(0, 0, 0, 0.75);
  height: 0.5em;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
}

.date {
  color: white;
  font-weight: 400;
  font-size: 5vw;
  line-height: 5vw;
  letter-spacing: 0.08em;
  margin-top: 10vh;
}

span {
  position: relative;
}

.thu::after {
  content: "Thu";
  transform: rotate(90deg);
  position: absolute;
  top: 3vw;
  left: 6.1vw;
  font-size: 0.3em;
  line-height: 0.3em;
  letter-spacing: 0.1em;
}

.fri::after {
  content: "Fri";
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
  font-size: max(1.5vw, 16px);
  letter-spacing: 0.04em;
  position: absolute;
  bottom: 8vh;
  left: 50%;
  transform: translateX(-50%);
}

.scroll::after {
  content: "";
  background: white;
  height: 8vh;
  width: 2%;
  position: absolute;
  left: 49%;
  top: 100%;
}

.nextwrapper {
  height: 200vh;
}
</style>

<script>
export default {
		// window.addEventListener('load', (event) => {
		// 	document.getElementById('scroll').addEventListener('click', () => {
		// 		window.scrollTo( 0, 100 );
		// 	});
		// });
}
</script>
