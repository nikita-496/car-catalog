<template>
  <div class="text-center" @click="getNumberPage">
    <v-container class="ma-0">
      <v-row justify="center">
        <v-spacer></v-spacer>
        <v-col cols="8" class="pa-0">
          <v-container class="max-width">
            <v-pagination
              v-model="page"
              class="my-4"
              :length="total"
              ref="pagination"
            ></v-pagination>
          </v-container>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>
  </div>
</template>

<script >

export default {
 props: {
    total: { type: Number, require: true },
  },
  data() {
    return {
      page: 1,
    };
  },
  methods: {
    getNumberPage() {
      const list = this.$refs.pagination.$el.childNodes[0];
      const listItems = list.childNodes;
      const arrayItems = Array.from(listItems);

      const activePage = arrayItems.filter((item) =>
        item.innerHTML.includes('v-pagination__item--active')
      );
      this.$emit('update-page', activePage[0].innerText);
      return activePage[0].innerText;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/paging.scss";

</style>
