<template>
  <v-app>
    <Header />
    <Sidebar />
    <v-main>
      <v-container fluid id="contesnt">
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
