<template>
  <a :href="to" target="_blank">
    <div class="work-link">
      <font-awesome-icon class="icon" icon="link" />
      <div class="bold">{{ to }}</div>
    </div>
  </a>
</template>
<script>
export default {
  name: "WorkLink",
  props: {
    to: {
      type: String,
			require: true,
    },
  },
};
</script>
<style scoped>
.work-link {
  display: flex;
  margin-bottom: 20px;
}
.icon {
  margin-right: 0.5rem;
	color: #000000;
}
</style>