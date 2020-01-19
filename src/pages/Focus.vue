<template>
  <q-page padding>
    <div class="row">
      <div class="col">
        HFD
      </div>
    </div>
    <div class="row">
      <div class="col">
        <q-img :key="previewKey" :src="`http://localhost:8000/preview?${previewKey}`" />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageFocus',
  computed: {
    previewKey: {
      get () {
        return this.$store.state.camera.previewKey
      }
    }
  }
}
</script>
