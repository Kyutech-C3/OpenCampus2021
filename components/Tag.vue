<template>
	<div
		class="tag"
		:style="style"
		:class="(selected ? 'selected ' : '') + (selectable ? 'selectable' : '')"
		@click="handleClick"
	>
		{{ tag.name }}
	</div>
</template>
<script>
export default {
	name: 'Tag',
	model: {
		event: 'select',
		prop: 'selected'
	},
	props: {
		tag: {
			type: Object,
			require: true,
			default: () => ({
				id: 1,
				name: 'Hack',
				color: '#FF0000'
			})
		},
		selectable: {
			type: Boolean,
			require: false,
			default: () => (false)
		},
		selected: {
			type: Boolean,
			require: false,
			default: () => (false)
		}
	},
	computed: {
		style() {
			return `background-color: ${this.tag.color};`
		}
	},
	methods: {
		handleClick() {
			if(this.selected) this.$emit('unSelect')
			else this.$emit('select')
		}
	}
}
</script>
<style scoped>
.tag {
	padding: 5px 10px;
	font-size: 16px;
	border-radius: 15.5px;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 3px 5px;
}
.selectable {
	cursor: pointer;
	opacity: 0.5;
}
.selected {
	opacity: 1;
}
</style>