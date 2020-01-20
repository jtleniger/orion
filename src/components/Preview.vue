<template>
  <q-img :key="previewKey" :src="`http://localhost:8000/preview?${previewKey}`" />
</template>

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
