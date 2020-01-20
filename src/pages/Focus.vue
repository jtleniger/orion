<template>
  <two-panel-page>
    <template v-slot:left>
      <preview />
    </template>
    <template v-slot:right>
      HFD
    </template>
  </two-panel-page>
</template>

<script>
import Preview from '../components/Preview'
import TwoPanelPage from '../components/TwoPanelPage'

export default {
  name: 'PageFocus',

  components: {
    Preview,
    TwoPanelPage
  }
}
</script>
