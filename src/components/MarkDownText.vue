<template>
  <div class="container__docs" v-html="compiledMarkdown"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import marked from "marked";

// marked.setOptions({
//   highlight: function (code: any, lang: any) {
//     return highlightjs.highlightAuto(code, [lang]).value;
//   }, // シンタックスハイライトに使用する関数の設定
//   pedantic: false, // trueの場合はmarkdown.plに準拠する gfmを使用する場合はfalseで大丈夫
//   gfm: true, // GitHub Flavored Markdownを使用
//   breaks: true, // falseにすると改行入力は末尾の半角スペース2つになる
//   sanitize: true, // trueにすると特殊文字をエスケープする
//   silent: false, // trueにするとパースに失敗してもExceptionを投げなくなる
// });

@Component
export default class MarkDownText extends Vue {
  @Prop() private markdown!: string;
  private compiledMarkdown: string = marked(this.markdown);
  //   private get compiledMarkdown(): string {
  //     return marked(this.markdown, { sanitize: true });
  //   }
}
</script>
<style>
.container__docs {
  padding: 0 30px;
  margin-top: 15px;
}
</style>
