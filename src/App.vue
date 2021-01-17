<template>
  <v-app>
    <Sidebar />
    <v-main>
      <router-view />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Footer from "@/views/Footer";
import Sidebar from "@/views/Sidebar";

export default {
  name: "app",
  components: { Footer, Sidebar },
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
