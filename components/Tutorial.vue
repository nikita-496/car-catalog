<!-- Please remove this file from your project -->
<template>
  <h1>{{message}}</h1>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

// import goes from:
// import CommonModule from '~/store/CommonModule';
// to:
import { commonModuleStore } from '~/store';

@Component
export default class Home extends Vue {
    get message(): string {
        // usage:
        commonModuleStore.SET_MESSAGE('hello world');
        console.log(commonModuleStore.message); // hello world
        return "Hellow World"
    }
}
</script>

