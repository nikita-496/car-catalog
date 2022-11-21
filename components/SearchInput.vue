<template>
  <div>
   <form class="search-wrapper cf" @submit.prevent>
        <input type="text" placeholder="Поиск по каталогу" v-model="searchValue" style="box-shadow: none">
        <button @click="handleSearch">Искать</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit  } from "vue-property-decorator";
import matchAttributes from "~/utils/matchAttributes"
import recognizeModule from "~/utils/recognizeModule";


@Component
export default class extends Vue {
  public searchValue: string = "";

  @Emit('handle-search')
  async handleSearch() {
    matchAttributes(this.searchValue)
    const queryResult = await recognizeModule()
    return queryResult
  }

}
</script>

<style lang="scss" scoped>
@import "/assets/scss/searchInput.scss";
</style>