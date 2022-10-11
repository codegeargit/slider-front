<template>
  <div>
    <div>Welcome!</div>
    <div v-if="accessToken">{{accessToken}}</div>
  </div>
</template>
<script>
export default {
  name: 'IndexPage',
  computed: {
    accessToken() {
      return this.$store.state.accessToken;
    }
  }
}
</script>
