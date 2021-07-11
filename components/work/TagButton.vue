<template>
	<div class="button" @click="$emit('click')">
		<Tag :tag="tagData" :small="small" />
	</div>
</template>
<script>
export default {
	name: 'TagButton',
	props: {
		name: {
			type: String,
			default: () => ('')
		},
		color: {
			type: String,
			default: () => ('#000000')
		},
		small: {
			type: Boolean,
			default: () => (false)
		}
	},
	computed: {
		tagData() {
			return {
				name: this.name,
				color: this.color
			}
		}
	}
}
</script>
<style scoped>
.button {
	cursor: pointer;
}
</style>