<template>
  <q-layout view="lHh Lpr lFf">

    <menu-bar />

    <q-page-container>
      <q-page :style-fn="height">
        <router-view />
      </q-page>
    </q-page-container>

    <status-bar />

  </q-layout>
</template>

<style lang="scss">
.page-content {
  height: 100%;
}
</style>

<script>
import MenuBar from '../components/MenuBar'
import StatusBar from '../components/StatusBar'

export default {
  name: 'Layout',

  components: {
    MenuBar,
    StatusBar
  },

  methods: {
    /**
     * This method sets the page height to the size of the viewport minus the header and footer.
     */
    height (offset) {
      return { height: offset ? `calc(100vh - ${offset}px)` : '100vh' }
    }
  }
}
</script>
