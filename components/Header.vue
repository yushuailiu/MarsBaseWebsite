<template>
    <vk-navbar>
        <vk-navbar-logo slot="left"><nuxt-link to="/">{{siteConfig.site_name}}</nuxt-link></vk-navbar-logo>
    </vk-navbar>
</template>
<script>
  import config from '../config'
  export default {
    asyncData(context) {
    },
    fetch(context) {
    },
    data() {
      return {
        siteConfig: this.$store.state.siteConfig
      };
    },
    methods: {
      handleSelect(key, keyPath) {
      }
    }
  }
</script>