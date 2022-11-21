<template>
  <div>
   <form class="search-wrapper cf">
        <input type="text" placeholder="Поиск по каталогу" required style="box-shadow: none">
        <button type="submit">Искать</button>
    </form>
      <h1 class="">
    Hello world!
  </h1>
    
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

  async onSearch() {
   matchAttributes(this.searchValue)
   const result = await recognizeModule()

   await vmx.car.fetchCarById(result)
   this.cars = vmx.car.getCar
  }

}
</script>

