<template>
  <div class="camera-settings">
    <div class="col">
      <q-input outlined v-model.number="shutterSpeed" :disable="!connected" dense type="number" min="0" label="Shutter Speed" />
    </div>
    <div class="col q-mx-sm">
      <q-select outlined :disable="!connected" dense label="ISO" />
    </div>

    <q-btn :loading="capturing" dense flat icon="camera" :disable="!connected" @click="capturePreview" />
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
  data: function () {
    return {
      capturing: false
    }
  },

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
  },
  methods: {
    capturePreview: async function () {
      this.capturing = true
      await this.$store.dispatch('camera/capturePreview')
      this.capturing = false
    }
  }
}
</script>
