<template>
  <div class="camera-settings">
    <div class="col">
      <q-input v-model.number="shutterSpeed" :disable="!connected" dense type="number" min="0" label="Shutter Speed" />
    </div>
    <div class="col q-ml-sm">
      <q-select :disable="!connected" dense label="ISO" />
    </div>
    <div class="col q-mx-sm">
      <q-select :disable="!connected" dense label="Aperture" />
    </div>
  </div>
</template>

<style lang="scss">
.camera-settings {
    flex-grow: 2;
    display: flex;
}
</style>

<script>
export default {
  computed: {
    connected: {
      get () {
        return this.$store.state.camera.connected
      }
    },
    shutterSpeed: {
      get () {
        return this.$store.state.camera.shutterSpeed
      },
      set (value) {
        this.$store.dispatch('camera/setShutterSpeed', value)
      }
    }
  }
}
</script>
