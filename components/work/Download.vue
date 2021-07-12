<template>
  <dev>
    <a
      :href="download_link"
      target="_blank"
      class="download_link"
      ><font-awesome-icon :icon="['fas', 'file-download']"
    /></a>
  </dev>
</template>

<script>
export default {
  props: {
    download_link: {
      type: String,
      require: true,
      default: "https://drive.google.com/uc?export=download&id=122bfV2gtg6bfwYkmAQfrws4-6vFZbqII"
    },
  },
};
</script>

<style scoped>
.download_link {
  color: rgba(0, 0, 0, 0.4);
}
.download_link:hover {
  color: rgb(0, 0, 0);
}
</style>
