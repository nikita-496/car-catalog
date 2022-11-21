<template>
  <div>
    <p v-if="!cars.length">LOADING...</p>
    <main v-else class="main">
        <search-input @handle-search="fetchByAttribute" />
        <h1 v-if="!isContentFound">Ничего не найдено</h1>
        <card v-else :items="cars" />
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { vmx } from "~/store/store.vuex";
import {
  TrimUniqItem,
  TrimItem,
  ColorItem,
  EngineItem,
} from "~/store/model/Attributes";

@Component
export default class extends Vue {
  public cars: TrimUniqItem[] = [];
  public isContentFound = true;

  async mounted() {
    await this.fetchAll();
  }

  async fetchAll() {
    await vmx.trim.fetchTrim(1);
    const trims = vmx.trim.getTrim;
    await vmx.car.fetchGroupCarById(trims);
    this.cars = vmx.car.getCar;
  }

  async fetchByAttribute(
    value: TrimItem[] | ColorItem[] | EngineItem[] | boolean
  ) {
    if (value) {
      await vmx.car.fetchGroupCarById(value);
      this.cars = vmx.car.getCar;
      this.cars[0].id ? this.isContentFound = true : this.isContentFound = false
    } else {
      this.isContentFound = value;
    }
  }
}
</script>
