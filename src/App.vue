<template>
  <v-app>
    <Header />
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
import "normalize.css";
import Sidebar from "@/views/Sidebar";
import Footer from "@/views/Footer";
import Header from "@/views/Header";

export default {
  name: "app",
  components: { Header, Footer, Sidebar },
};
</script>

<style lang="scss">
a {
  text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
#content {
  padding: 0;
}
</style>
