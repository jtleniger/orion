<template>
  <q-page padding>
    <div class="row">
      <div class="col">
        HFD
      </div>
    </div>
    <div class="row">
      <div class="col">
        <preview />
      </div>
    </div>
  </q-page>
</template>

<script>
import Preview from '../components/Preview'

export default {
  name: 'PageFocus',

  components: {
    Preview
  }
}
</script>
