<template>
  <div v-if="car.id">
    <h1>
      Характеристики модели
    </h1>
    <h2>
       {{car['make_model'].make.name}}
    </h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue} from "nuxt-property-decorator";
import { TrimUniqItem } from "~/store/model/Attributes";
import { vmx } from "~/store/store.vuex";

@Component
export default class Card extends Vue {
  public car: TrimUniqItem = {};

  async mounted() {
    const id: number = Number(this.$route.params.car)
    await vmx.car.fetchCarById(id);
    this.car = vmx.car.getCar;
  }
}
</script>