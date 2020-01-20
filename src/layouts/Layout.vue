<template>
  <q-layout view="lHh Lpr lFf">

    <menu-bar />

    <q-page-container>
      <router-view />
    </q-page-container>

    <status-bar />

  </q-layout>
</template>

<script>
import MenuBar from '../components/MenuBar'
import StatusBar from '../components/StatusBar'

export default {
  name: 'Layout',

  components: {
    MenuBar,
    StatusBar
  }
}
</script>
