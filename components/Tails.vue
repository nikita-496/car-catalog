<template>
<card :itemsFromTail="sliced"/>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import { TrimUniqItem } from "~/store/model/Attributes";

@Component
export default class Tail extends Vue {
  @Prop([]) readonly items: TrimUniqItem[];
  @Prop(Number) readonly start: number;
  @Prop(Number) readonly end: number;


  get sliced() {
      const modify = this.items.slice(this.start, this.end)
      return modify
  }
}
</script>

<style lang="scss" scoped>
</style>
