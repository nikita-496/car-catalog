<template>
  <div class="text-center" @click="getNumberPage">
      <v-row justify="center">
        <v-spacer></v-spacer>
        <v-col cols="6" class="pa-0">
          <v-container>
            <v-pagination
              v-model="mutableCurrent"
              class="my-4"
              :length="total"
              ref="pagination"
            ></v-pagination>
          </v-container>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
  </div>
</template>

<script >
import Storage from '~/persistent/locale-storage'
export default {
 props: {
    total: { type: Number, require: true },
    curent: { type: Number, require: true }
  },
  data() {
    return {
      mutableCurrent: JSON.parse(this.curent)
    }
  },
  methods: {
    getNumberPage() {
      const list = this.$refs.pagination.$el.childNodes[0];
      const listItems = list.childNodes;
      const arrayItems = Array.from(listItems);

      const activePage = arrayItems.filter((item) =>
        item.innerHTML.includes('v-pagination__item--active')
      );
      Storage.set('page', activePage[0].innerText)
      this.$emit('update-page', activePage[0].innerText);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
