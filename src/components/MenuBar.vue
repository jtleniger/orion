<template>
  <q-header elevated>
    <q-toolbar>
      <q-toolbar-title>
        Orion
      </q-toolbar-title>

      <navigation />

      <q-space />

      <camera-settings />

      <q-space />

      <q-btn dense flat icon="minimize" @click="minimize" />
      <q-btn dense flat icon="crop_square" @click="maximize" />
      <q-btn dense flat icon="close" @click="closeApp" />
    </q-toolbar>
  </q-header>
</template>

<script>
import CameraSettings from '../components/CameraSettings'
import Navigation from '../components/Navigation'

export default {
  components: {
    CameraSettings,
    Navigation
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
    }
  }
}
</script>
