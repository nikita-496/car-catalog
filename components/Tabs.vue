<template>
    <v-card>
      <v-tabs color="deep-purple accent-4">
        <v-tab @click="setHorizontal">Горизонтальный</v-tab>
        <v-tab @click="setTail">Плиточный</v-tab>
        <v-tab-item v-for="n in 3" :key="n">
          <slot/>
        </v-tab-item>
      </v-tabs>
    </v-card>
</template>

<script lang="ts">
import { Component, Vue,  Emit} from "nuxt-property-decorator";

@Component
export default class Tabs extends Vue {
  @Emit('set-horizontal')
  setHorizontal() {
    return 'horizontal'
  }

 @Emit('set-tail')
  setTail() {
    return 'tail'
  }
}
</script>

<style lang="scss" scoped></style>
