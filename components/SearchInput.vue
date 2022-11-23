<template>
   <loading-bar v-if="loading.getLoading"/>
   <form v-else class="search-wrapper cf" @submit.prevent>
        <input type="text" placeholder="Поиск" v-model="searchValue" style="box-shadow: none">
        <button @click="handleSearch">Искать</button>
    </form>
</template>

<script lang="ts">
import { Component, Vue, Emit  } from "vue-property-decorator";
import { vmx } from "~/store/store.vuex";
import matchAttributes from "~/utils/matchAttributes"
import recognizeModule from "~/utils/recognizeModule";

@Component
export default class extends Vue {
   public loading: Object = vmx.loading;
  public searchValue: string = "";

  @Emit('handle-search')
  async handleSearch() {

    const capitlFirst = this.searchValue.toLowerCase().split('')
    capitlFirst.splice(0, 1, capitlFirst[0].toUpperCase())
    
   const isFound: boolean = matchAttributes(capitlFirst.join(''))
    if(isFound) {
      const queryResult = await recognizeModule()
      return queryResult
    }
    // Not found
    else {
      return false
    }
  }

}
</script>

<style lang="scss" scoped>
@import "/assets/scss/searchInput.scss";
</style>