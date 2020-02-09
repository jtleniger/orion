<template>
  <div>
    <q-btn dense flat icon="assessment" @click="test" />
    <preview />
  </div>
</template>

<script>
import Preview from '../components/Preview'

export default {
  components: {
    Preview
  },
  methods: {
    test: function () {
    }
  }
}
</script>
