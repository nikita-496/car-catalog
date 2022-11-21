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
import matchAttributes from "~/utils/matchAttributes"
import recognizeModule from "~/utils/recognizeModule";
import { TrimUniqItem } from '~/store/model/Attributes';


@Component
export default class Tutorial extends Vue {
  public trims: any = [];
  public cars: [] | TrimUniqItem[] = [];
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

  async onSearch() {
   matchAttributes(this.searchValue)
   const result = await recognizeModule()

   await vmx.car.fetchCarById(result)
   this.cars = vmx.car.getCar
  }

}
</script>
