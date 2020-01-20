<template>
  <img class="preview" :key="previewKey" :src="`http://localhost:8000/preview?${previewKey}`" />
</template>

<style lang="scss">
.preview {
  height: 100%;
}
</style>

<script>
export default {
  computed: {
    previewKey: {
      get () {
        return this.$store.getters['camera/previewKey']
      }
    }
  }
}
</script>
