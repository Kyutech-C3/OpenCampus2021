<template>
  <div class="root-wrapper">
    <Header v-if="!isRootPath" />
    <div :class="{ 'root-container': true, 'disable-padding': isRootPath }">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>
<script>
// import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    // Header,
    Footer
  },
  computed: {
    isRootPath() {
      return this.$route.path === '/'
    }
  }
}
</script>

<style lang="css" scoped>
.root-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;
}

.root-container {
  min-height: 100vh;
  padding: var(--root-padding);
  margin-top: 120px;
}

.root-container.disable-padding {
  margin-top: 0;
  padding: 0;
}

@media (min-width: 1920px) {
  .root-container {
    width: 1920px;
  }
}

@media (max-width: calc(1920px - 1px)) {
  .root-container {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .root-container {
    padding:  0 1.5rem;
  }
}

</style>

<style>
@font-face {
  font-family: 'Inter var';
  font-weight: 100 900;
  font-style: normal;
  font-named-instance: 'Regular';
  src: url("../assets/font/InterWeb/Inter-roman.var.woff2?v=3.19") format("woff2");
}

html {
  font-family:
    'Inter var',
    'YuGothic Medium',
    'Yu Gothic Medium',
    'YuGothic',
    'Yu Gothic',
    'Hiragino Sans',
    'ヒラギノ角ゴシック',
    'Noto Sans CJK JP',
    'メイリオ',
    'Meiryo',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-weight: 300;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.bold {
  font-family:
    'Inter var',
    'YuGothic Bold',
    'Yu Gothic Bold',
    'YuGothic',
    'Yu Gothic',
    'Hiragino Sans',
    'ヒラギノ角ゴシック',
    'Noto Sans CJK JP',
    'メイリオ',
    'Meiryo',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-weight: 600;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
