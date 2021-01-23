<template>
  <v-footer app class="footer"></v-footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MarkDownText from "@/components/MarkDownText.vue";

@Component({
  components: { MarkDownText },
})
export default class Footer extends Vue {}
</script>
