<template>
  <div class="top">
    <img alt="nss top picture" src="../assets/privates/images/top_header.jpg" />
    <iframe
      width="560"
      height="315"
      src="https://www.youtube-nocookie.com/embed/Y69l3g54q-o"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <div class="markdown" v-html="contentHTML"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import docs from "@/assets/privates/docs/rules.md";

@Component
export default class Home extends Vue {
  // webpackがコンパイル時にmarkdownを自動でhtmlに変換してくれる
  private contentHTML = docs;
}
</script>

<style scoped>
img {
  width: 100%;
}
</style>
