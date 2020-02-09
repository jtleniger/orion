<template>
  <two-panel-page>
    <template v-slot:left>
      <focus />
    </template>
    <template v-slot:right>
      HFD
    </template>
  </two-panel-page>
</template>

<script>
import Focus from '../components/Focus'
import TwoPanelPage from '../components/TwoPanelPage'

export default {
  name: 'PageFocus',

  components: {
    Focus,
    TwoPanelPage
  }
}
</script>
