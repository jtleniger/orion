<template>
  <q-page padding>
    <div class="row">
      <div class="col">
        Plate Solving
      </div>
      <div class="col-10">
        <preview />
      </div>
    </div>
  </q-page>
</template>

<script>
import Preview from '../components/Preview'

export default {
  name: 'PageFrame',

  components: {
    Preview
  }
}
</script>
