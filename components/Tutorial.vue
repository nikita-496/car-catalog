<!-- Please remove this file from your project -->
<template>
  <h1>{{message}}</h1>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

import { commonModuleStore } from '~/store';

@Component
export default class Home extends Vue {
    async mounted() {
      await this.$axios.get('models?year=2020')
    } 
    get message(): string {
        commonModuleStore.SET_MESSAGE('hello world');
        console.log(commonModuleStore.message); 
        return "Hellow World"
    }
}
</script>

