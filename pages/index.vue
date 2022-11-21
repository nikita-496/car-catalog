<template>
  <div>
    <p v-if="!cars.length">LOADING...</p>
    <main v-else  class="main">
      <search-input @handle-search="fetchByAttribute"/>
      <card :items="cars" />
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { vmx } from "~/store/store.vuex";
import {TrimUniqItem, TrimItem, ColorItem, EngineItem } from '~/store/model/Attributes'

@Component
export default class extends Vue {
  public cars: TrimUniqItem[] = [];

  async mounted() {
      await this.fetchAll()
  }

  async fetchAll() {
    await vmx.trim.fetchTrim(1);
    const trims = vmx.trim.getTrim;
    await vmx.car.fetchCarById(trims);
    this.cars = vmx.car.getCar;
  }

  async fetchByAttribute(value: TrimItem[] | ColorItem[] | EngineItem[]) {
    await vmx.car.fetchCarById(value);
    this.cars = vmx.car.getCar;
  }
}
</script>
