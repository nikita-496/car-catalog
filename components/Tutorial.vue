<template>
  <div>
    <input
      placeholder="Поиск по катологу"
      v-model.trim="searchValue"
      @keypress.enter="onSearch"
    />
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { vmx } from "~/store/store.vuex";
import match from "~/utils/matchByAPI"

@Component
export default class Tutorial extends Vue {
  public trims: any = [];
  public cars: any = [];
  public searchValue: string = "";

  private async mounted() {
    await vmx.trim.fetchTrim(1);
    this.trims = vmx.trim.getTrim;
    await vmx.car.fetchCarById(this.trims);
    this.cars = vmx.car.getCar;
  }
  get message(): string {
    return "Hellow World";
  }

  onSearch() {
   match(this.searchValue)
  }
}
</script>
