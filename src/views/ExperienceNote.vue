<template>
  <div class="experience-note">
    <h1>体験記</h1>
    <div class="markdown" v-html="contentHTML"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import docs from "@/assets/privates/docs/experience_note.md";

@Component
export default class ExperienceNote extends Vue {
  // webpackがコンパイル時にmarkdownを自動でhtmlに変換してくれる
  private contentHTML = docs;
}
</script>
