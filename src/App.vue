<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/views/Header";
import Footer from "@/views/Footer";

export default {
  name: "app",
  components: { Header, Footer },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
