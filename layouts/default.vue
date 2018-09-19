<template>
  <div>
    <app-header></app-header>
    <div class="uk-container" style="margin-top: 40px;">
      <div class="app-container">
        <nuxt></nuxt>
      </div>
    </div>
    <footer>{{siteConfig.copyright}}</footer>
  </div>
</template>

<style lang="scss">
@import "../assets/style/common.scss";
</style>

<script>
  import Header from '~/components/Header'
  export default {
    data () {
      return {
        siteConfig: this.$store.state.siteConfig
      }
    },
    head () {
      return {
        title: this.siteConfig.site_name,
        link: [
          {
            rel: 'icon',
            type: 'image/x-icon',
            href: this.siteConfig.favicon,
          }
        ]
      }
    },
    middleware: 'appData',
    components: {
      'app-header': Header,
    }
  }
</script>