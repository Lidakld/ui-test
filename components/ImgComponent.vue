<template>
  <div>
    <img
      class="img"
      :src="input.url"
    >
  </div>
</template>
<script>
export default {
  props: {
    input : {
        type: Object,
        required: true,
    },
  }
}
</script>
<style>
.img {
  height: 100%;
  width: 100%;
}
</style>
