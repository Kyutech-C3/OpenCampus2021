<template>
  <div class="modal-wrapper" :class="{open: open}">
    <div class="modal-background-click-panel" @click="$emit('setOpen', false)"></div>
    <div class="modal-container">
      <h1 class="title">ダウンロードしても構いませんか？</h1>
      <h3 class="description">Google Driveから、.zip圧縮ファイルがダウンロードされます。</h3>
      <a class="link" :href="downloadURL">ダウンロードする</a>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DownloadConfirmModal',
  model: {
    prop: 'open',
    event: 'setOpen'
  },
  computed: {
    downloadURL() {
      return `https://shared-vps.compositecomputer.club/api/v1/works/${this.workID}/download`
    }
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    workID: {
      type: String,
      default: '1'
    }
  }
}
</script>
<style scoped>
.modal-wrapper {
  position: fixed;
  justify-content: center;
  display: none;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 400;
  background-color: #000000dd;
  opacity: 0;
}
.open {
  display: flex;
  opacity: 1;
}
.link {
  font-weight: bold;
}
.modal-background-click-panel {
  position: absolute;
  top: 0;left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(10px);
}
.modal-container {
  color: #000000;
  background-color: #ffffff;
  margin: 0 2rem;
  padding: 1rem 3rem;
  border-radius: 15px;
  max-width: 800px;
  width: 80vw;
  z-index: 10;
}
.title {
  
}
.description {
  margin-bottom: 2rem;
}
</style>