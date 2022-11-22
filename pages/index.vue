<template>
  <div>
    <p v-if="!cars.length">LOADING...</p>
    <main v-else class="main">
      <search-input @handle-search="fetchByAttribute" />
      <h1 v-if="!isContentFound">Ничего не найдено</h1>
      <div v-else>
        <tabs @set-horizontal="defineTabType" @set-tail="defineTabType">
          <section v-if="tabType === 'horizontal'" class="card-section">
              <card :items="cars" />
          </section>
          <section v-else class="tails-section">
            <tails v-for="n in 3" :key="n" :items="cars" :start="n === 1 ? 0 : n === 2 ? 7 : 14" :end="n === 1 ? 7 : n === 2 ? 14 : 21"/>
          </section>
        </tabs>
        <!-- 21 - limit page -->
        <paging @update-page="changePage" :total="Math.ceil(amount / 21)" />
      </div>
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
  public amount: number = 0;
  public page: number = 1;
  public isContentFound = true;
  public tabType: string = "horizontal";

  async mounted() {
    await this.fetchAll(this.page);
    this.amount = vmx.trim.getAmount;
  }

  async fetchAll(page: number) {
    await vmx.trim.fetchTrim(page);
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
      this.cars[0].id
        ? (this.isContentFound = true)
        : (this.isContentFound = false);
    } else {
      this.isContentFound = value;
    }
  }

  changePage(pageNumber: string) {
    console.log(pageNumber);
    this.page = Number(pageNumber);
    this.fetchAll(this.page);
  }

  defineTabType(val) {
    this.tabType = val;
  }
}
</script>
