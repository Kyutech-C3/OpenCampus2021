<template>
  <div class="container">
    <div>
      <img src="../assets/img/C3_summer_logo.png" alt="C3 summer logo" title="C3 summer logo" class="C3_summer_logo"/>
      <h1 class="title">
        Coming Soon . . .
      </h1>
      <div class="links">
        <a href="https://twitter.com/c3_kyutech?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @c3_kyutech</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        <!-- <a href="https://github.com/Kyutech-C3/OpenCampus2021" target="_blank" class="github-follow-button"><img src="https://gh-card.dev/repos/Kyutech-C3/OpenCampus2021.svg"></a> -->
        <a href="https://github.com/Kyutech-C3/OpenCampus2021" target="_blank" title="tbpgrのGitHubページを開く">
          <i class="fa fa-github-square" style="color: black; font-size:2em"></i>
        </a> 
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
.container {
  background-color: rgba(255, 255, 255, 0.781);
  background-size: cover;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
/* .twitter-follow-button, .github-follow-button {
  display: inline-block;
} */
.twitter-follow-button {
  height: 100px;
}
.title {
  font-family: 'Inter', sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #000000;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

/* .links {
  padding-top: 15px;
} */
.C3_summer_logo {
  width: 300px;
  height: auto;
}
</style>
