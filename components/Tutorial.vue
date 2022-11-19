<template>
  <h1>{{message}}</h1>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import {vmx} from '~/store/store.vuex';

@Component
export default class Tutorial extends Vue {
    public trims: any = []
    public cars: any = []
    private async mounted() {
      await vmx.trim.fetchTrim(1)
      this.trims = vmx.trim.getTrim
      await vmx.car.fetchCarById(this.trims)
      this.cars = vmx.car.getCar
    } 
    get message(): string {
        return "Hellow World"
    }
}
</script>

