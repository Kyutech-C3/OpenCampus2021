<template>
	<div class="button" :class="{enabled: enabled}" @click="$emit('click')">
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
		},
		enabled: {
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
	opacity: .4;
}
.enabled {
	cursor: pointer;
	opacity: 1;
}
</style>