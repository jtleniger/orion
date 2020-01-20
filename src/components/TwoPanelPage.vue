<template>
  <div class="page-content two-panel">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="right bg-secondary q-pa-sm">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style lang="scss">
.page-content {
  &.two-panel {
    height: 100%;
    display: flex;

    .left, .right {
      height: 100%;
      display: flex;
      justify-content: center;
    }

    .left {
      flex-grow: 1;
    }

    .right {
      width: 200px;
    }
  }
}
</style>

<script>
export default {

}
</script>
