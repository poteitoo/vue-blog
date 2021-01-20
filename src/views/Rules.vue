<template>
  <div class="rules">
    <h1>ISEFのルール</h1>
    <MarkDownText :markdown="content" />
    <div :v-html="content"></div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MarkDownText from "@/components/MarkDownText.vue";
import docs from "@/assets/privates/docs/rules.md";

@Component({
  components: { MarkDownText },
})
export default class Rules extends Vue {
  private content = docs;
}
</script>
