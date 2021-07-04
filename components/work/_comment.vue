<template>
	<div>
		<div v-for="comment_data in comment_list" v-bind:key="comment_data.id">
			<div class="comment-component">
				<div class="comment-info">
					<h3 class="username-view">{{ comment_data.name }}</h3>
					<p class="comment-view">{{ comment_data.text }}</p>
				</div>
				<div class="comment-timeinfo">
					<small>{{ getDate(comment_data.created_at) }}</small>
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
	},
	methods: {
		getDate(datetime) {
			let formatted_datetime = new Date(datetime);
			return `${formatted_datetime.getFullYear()}/${this.zeroPadding(formatted_datetime.getMonth()+1, 2)}/${this.zeroPadding(formatted_datetime.getDate(), 2)} ${this.zeroPadding(formatted_datetime.getHours(), 2)}:${this.zeroPadding(formatted_datetime.getMinutes(), 2)}:${this.zeroPadding(formatted_datetime.getSeconds(), 2)}`
		},
		zeroPadding(num,length) {
			return ('0000000000' + num).slice(-length);
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