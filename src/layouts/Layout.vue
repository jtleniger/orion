<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Orion
        </q-toolbar-title>

        <q-tabs
          inline-label
          shrink
        >
          <q-route-tab name="focus" icon="center_focus_weak" label="Focus" to="/"/>
          <q-route-tab name="frame" icon="crop" label="Crop" to="/frame"/>
          <q-route-tab name="sequence" icon="av_timer" label="Sequence" to="/sequence"/>
        </q-tabs>

        <q-space />

        <camera-settings />

        <q-btn dense flat icon="camera" @click="capturePreview" />

        <q-space />

        <q-btn dense flat icon="minimize" @click="minimize" />
        <q-btn dense flat icon="crop_square" @click="maximize" />
        <q-btn dense flat icon="close" @click="closeApp" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-dark">
      <q-toolbar>
        Status: {{ status }}
        <q-space />
        <q-btn :color="connected ? 'positive' : 'negative'" dense flat icon="linked_camera" @click="connectDisconnect" />
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import CameraSettings from '../components/CameraSettings'

export default {
  name: 'Layout',

  components: {
    CameraSettings
  },

  data () {
    return {
      miniState: true
    }
  },

  computed: {
    connected: {
      get () {
        return this.$store.state.camera.connected
      }
    },
    status: {
      get () {
        return this.$store.getters['camera/status']
      }
    }
  },

  methods: {
    minimize () {
      this.$q.electron.remote.BrowserWindow.getFocusedWindow().minimize()
    },
    maximize () {
      const win = this.$q.electron.remote.BrowserWindow.getFocusedWindow()

      if (win.isMaximized()) {
        win.unmaximize()
      } else {
        win.maximize()
      }
    },
    closeApp () {
      this.$q.electron.remote.BrowserWindow.getFocusedWindow().close()
    },
    capturePreview () {
      console.log('capture preview')
    },
    connectDisconnect () {
      this.$store.dispatch(`camera/${this.connected ? 'disconnect' : 'connect'}`)
    }
  }
}
</script>
