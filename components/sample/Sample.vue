<template>
  <div>
    <h1>
      {{ sample }}
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    sample: {
      type: String,
      required: true,
      default: 'not found'
    }
  }
}
</script>
