<template>
  <div class="rules">
    <h1>ISEFのルール</h1>
    <div class="markdown" v-html="contentHTML"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import docs from "@/assets/privates/docs/rules.md";

@Component
export default class Rules extends Vue {
  // webpackがコンパイル時にmarkdownを自動でhtmlに変換してくれる
  private contentHTML = docs;
}
</script>
