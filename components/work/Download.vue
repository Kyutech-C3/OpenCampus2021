<template>
  <div class="download_button">
    <a
      :href="downloadRedirectLink"
      target="_blank"
      class="download_link"
      title="ZIPファイルのダウンロード"
      >
        <font-awesome-icon :icon="['fas', 'file-download']" id="fa"/>
        ZIPダウンロード
      </a>
  </div>
</template>

<script>
export default {
  props: {
    workID: {
      type: String,
      require: true,
      default: "1"
    },
  },
  computed: {
    downloadRedirectLink() {
      return `https://shared-vps.compositecomputer.club/api/v1/works/${this.workID}/download`
    }
  }
};
</script>

<style scoped>
.download_button {
  border-radius: 10px;
  border: solid #777 2px;
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 50px;
  text-align: center;
  cursor: pointer;
  padding-right: 20px;
}
.download_link {
  display: block;
  color: rgb(0, 0, 0);
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.download_link #fa {
  margin-right: 10px;
}
.download_link:hover {
  color: rgb(255, 255, 255);
}
.download_button:hover {
  background-color: #777;
}
</style>
