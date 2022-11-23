<template>
  <div>
    <loading-bar v-if="loading.getLoading"/>
    <main v-else class="main">
      <search-input @handle-search="fetchByAttribute" />
      <h1 v-if="!isContentFound">Ничего не найдено</h1>
      <div v-else>
        <tabs @set-horizontal="defineTabType" @set-tail="defineTabType">
          <section v-if="tabType === 'horizontal'" class="card-section">
              <card :items="cars"/>
          </section>
          <section v-else class="tails-section">
            <tails v-for="n in 3" :key="n" :items="cars" :start="n === 1 ? 0 : n === 2 ? 7 : 14" :end="n === 1 ? 7 : n === 2 ? 14 : 21"/>
          </section>
        </tabs>
        <!-- 21 - limit page -->
        <paging @update-page="changePage" :total="Math.ceil(total / 21)" />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { vmx } from "~/store/store.vuex";
import recognizeModule from "~/utils/recognizeModule";
import Storage from "~/persistent/locale-storage";
import {
  TrimUniqItem,
  TrimItem,
  ColorItem,
  EngineItem,
} from "~/store/model/Attributes";

@Component
export default class extends Vue {
  public cars: TrimUniqItem[] = [];
  public loading: Object = vmx.loading;
  public page: number = 1;
  public isContentFound = true;
  public tabType: string = "horizontal";

  async mounted() {
    Storage.remove("query_value")
    Storage.remove("query_type")
    vmx.loading.beginLoading()
    await this.fetchCars(this.page);
    vmx.loading.endLoading()   
  }

  get total () {
    return vmx.trim.getAmount
  }
  async fetchCars(page: number) {
    await vmx.trim.fetchTrim(page);
    const trims = vmx.trim.getTrim;
    await vmx.car.fetchGroupCarById(trims);
    this.cars = vmx.car.getCar;
  }

  async fetchByAttribute(
    value: TrimItem[] | ColorItem[] | EngineItem[] | boolean
  ) {
    if (value) {
       vmx.loading.beginLoading()
      await vmx.car.fetchGroupCarById(value);
      this.cars = vmx.car.getCar;
      this.cars[0].id
        ? (this.isContentFound = true)
        : (this.isContentFound = false);
    } else {
      this.isContentFound = value;
    }
    vmx.loading.endLoading()
  }
  
  async changePage(pageNumber: string) {
    this.page = Number(pageNumber);
    const recognized = await recognizeModule(this.page)
    this.fetchByAttribute(recognized)
  }

  defineTabType(val) {
    this.tabType = val;
  }
}
</script>
