<template>
	<div>
		<div v-for="comment_data in comment_list" v-bind:key="comment_data.id">
			<div class="comment-component">
				<div class="comment-info">
					<h3 class="username-view">{{ comment_data.author_name }}</h3>
					<p class="comment-view">{{ comment_data.comment }}</p>
				</div>
				<div class="comment-timeinfo">
					<small>{{ comment_data.created_at }}</small>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		comment_list: {
			default: []
		}
	}
}
</script>

<style lang="css" scoped>
.comment-component {
	display: flex;
	justify-content: space-between;
	width: 100%;
}
.comment-info {
	max-width: 100%;
}
</style>