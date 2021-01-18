<template>
  <v-app>
    <Sidebar />
    <v-main>
      <v-container fluid id="content">
        <router-view></router-view>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Sidebar from "@/views/Sidebar";
import Footer from "@/views/Footer";

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
#content {
  padding: 0;
}
</style>
