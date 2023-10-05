<template>
  <v-app id="main">
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {

  name: 'App',
  components: {
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
#main {
  max-width: 600px;
  margin: 0 auto;
}
</style>
