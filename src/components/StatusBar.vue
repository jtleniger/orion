<template>
  <q-footer>
    <div class="row no-wrap">
      <q-toolbar class="col-9" v-bind:class="statusClass">
        <q-toolbar-title>{{ status }}</q-toolbar-title>
      </q-toolbar>
      <q-toolbar class="col-3 bg-dark">
        <q-toolbar-title>{{ model }}</q-toolbar-title>
        <q-btn :loading="connecting" :color="connected ? 'positive' : 'negative'" dense flat icon="linked_camera" @click="connectDisconnect" />
      </q-toolbar>
    </div>
  </q-footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: function () {
    return {
      connecting: false
    }
  },

  computed: {
    ...mapGetters({
      connected: 'camera/connected',
      status: 'camera/status',
      model: 'camera/model',
      hasError: 'camera/hasError'
    }),
    statusClass: {
      get () {
        return {
          'bg-dark': !this.hasError,
          'bg-negative': this.hasError
        }
      }
    }
  },

  methods: {
    async connectDisconnect () {
      this.connecting = true
      await this.$store.dispatch(`camera/${this.connected ? 'disconnect' : 'connect'}`)
      this.connecting = false
    }
  }
}
</script>
