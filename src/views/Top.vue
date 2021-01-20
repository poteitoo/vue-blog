<template>
  <div class="top">
    <img alt="nss top picture" src="../assets/privates/images/top_header.jpg" />
    <MarkDownText :markdown="content" />
    <iframe
      width="560"
      height="315"
      src="https://www.youtube-nocookie.com/embed/Y69l3g54q-o"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MarkDownText from "@/components/MarkDownText.vue";
@Component({
  components: { MarkDownText },
})
export default class Home extends Vue {
  private content = `
  ## hello
  # world
  `;
}
</script>

<style scoped>
img {
  width: 100%;
}
</style>
