<template>
  <div class="loader">
    <img :src="require('/assets/loading.gif')" alt="loading"  />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";


@Component
export default class LoadingBar extends Vue {

}
</script>

<style lang="scss" scoped>
.loader{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
