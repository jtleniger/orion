<template>
  <q-footer v-bind:class="footerClass">
    <q-toolbar>
      <span>{{ status }}</span>
      <q-space />
      <span class="q-mr-md">{{ name }}</span>
      <q-btn :color="connected ? 'positive' : 'negative'" dense flat icon="linked_camera" @click="connectDisconnect" />
    </q-toolbar>
  </q-footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      connected: 'camera/connected',
      status: 'camera/status',
      name: 'camera/name',
      hasError: 'camera/hasError'
    }),
    footerClass: {
      get () {
        return {
          'bg-dark': !this.hasError,
          'bg-negative': this.hasError
        }
      }
    }
  },

  methods: {
    connectDisconnect () {
      this.$store.dispatch(`camera/${this.connected ? 'disconnect' : 'connect'}`)
    }
  }
}
</script>
