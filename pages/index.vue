<template>
  <div class="container">
    <div class="logo-container">
      <logo-nuxt />
      <logo-contentful />
      <logo-netlify />
    </div>
    <div v-for="section in sections" :key="section.title" class="section">
      <h1 class="title">
        {{ section.title }}
      </h1>
      <h2 class="subtitle">
        {{ section.paragraph }}
      </h2>
    </div>
  </div>
</template>

<script>
import LogoNuxt from '~/components/LogoNuxt.vue'
import LogoContentful from '~/components/LogoContentful.vue'
import LogoNetlify from '~/components/LogoNetlify.vue'

export default {
  components: {
    LogoNuxt,
    LogoContentful,
    LogoNetlify
  },
  async asyncData(context) {
    return {
      sections: await context.app.contentfulClient.getSectionContent()
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15px;
}

.logo-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.section {
  margin-top: 25px;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 35px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 21px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
