<template>
  <dev>
    <a
      href="https://drive.google.com/uc?export=download&id=122bfV2gtg6bfwYkmAQfrws4-6vFZbqII"
      target="_blank"
      class="download_link"
      ><font-awesome-icon :icon="['fas', 'file-download']"
    /></a>
  </dev>
</template>

<script>
export default {
  props: {
    work_id: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      download_link: "",
    };
  },
  mounted() {
    this.$nextTick(function () {
      console.log(this.work_id);
      this.$axios
        .get("works/" + String(this.work_id))
        .then((res) => {
          console.log(res);
          this.download_link = res.data.download_link;
        })
        .catch((err) => {
          alert(err);
          console.error(err);
        });
    });
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
