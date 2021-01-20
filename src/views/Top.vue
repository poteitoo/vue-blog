<template>
  <div class="top">
    <img alt="nss top picture" src="../assets/privates/images/top_header.jpg" />
    <MarkDownText :markdown="content" />
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
