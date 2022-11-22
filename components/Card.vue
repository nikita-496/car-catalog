<template>
  <div>
    <div class="container" v-if="items">
      <ul class="card-inline-layout">
        <li
          v-for="item in items"
          :key="item.id"
          class="card card-publication has-footer card-default"
        >
          <NuxtLink :to="'/car/' + item.id" class="link">
            <div class="card-top">
              <img
                calss="car-brand"
                :src="
                  require(`~/assets/car-img/${item['make_model'].make.name}/${item['make_model'].make.name}.png`)
                "
                alt="brand"
                width="80"
              />
              <span>
                <h3 class="card-title card-publication-title">
                  {{ item["make_model"].make.name }}
                  {{ item["make_model"].name }}
                </h3>
              </span>
            </div>
            <div class="card-block">
              <div class="meta-categories card-meta">
                <img
                  class="card-img"
                  :src="
                    require(`~/assets/car-img/${item['make_model'].make.name}/${item['make_model'].make.name}-bg.png`)
                  "
                  alt="car"
                  width="150"
                />
              </div>
              <ul class="card-body">
                <li class="card-body__group-year">
                  <span>Год выпуска</span>
                  <span>{{ item.year }}</span>
                </li>
                <li class="card-body__group-body">
                  <span>Кузов</span>
                  <span>{{ item["make_model_trim_body"].type }}</span>
                </li>
                <li class="card-body__group-color">
                  <span>Цвет</span>
                  <span>{{
                    item["make_model_trim_exterior_colors"][0].rgb
                  }}</span>
                </li>
                <li class="card-body__group-engine">
                  <span>Двигатель</span>
                  <ul class="value">
                    <li>{{ item["make_model_trim_engine"].size }} л.</li>
                    <li>
                      {{ item["make_model_trim_engine"]["horsepower_hp"] }} л.с.
                    </li>
                    <li>
                      {{ item["make_model_trim_engine"]["engine_type"] }}
                    </li>
                  </ul>
                </li>
                <li class="card-body__group-trim">
                  <span>Комплектация</span>
                  <span>{{ item.description.slice(0, 10) }}</span>
                </li>
              </ul>
            </div>
            <div class="card-footer">
                <span class="footer-item">Цена</span>
                <span class="footer-item"> <b>{{ item.invoice }}</b></span>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>

    <ul v-else class="container-tail">
      <li v-for="item, i in itemsFromTail" :key="item.id" class="item">
        <NuxtLink :to="'/car/' + item.id" class="link">
          <div class="card-top">
              <img
                calss="car-brand"
                :src="
                  require(`~/assets/car-img/${item['make_model'].make.name}/${item['make_model'].make.name}.png`)
                "
                alt="brand"
                :width="i === 1 || i === 2 ||  i ===  5 ? 80 : ''"
              />
              <span>
                <h3 class="card-title card-publication-title">
                  {{ item["make_model"].make.name }}
                  {{ item["make_model"].name }}
                </h3>
              </span>
            </div>
             <div class="card-block">
              <div class="meta-categories card-meta">
                <img
                  class="card-img"
                  :src="
                    require(`~/assets/car-img/${item['make_model'].make.name}/${item['make_model'].make.name}-bg.png`)
                  "
                  alt="car"
                  width="150"
                />
              </div>
              <ul class="card-body">
                <li class="card-body__group-year">
                  <span>Год выпуска</span>
                  <span>{{ item.year }}</span>
                </li>
                <li v-if="i === 0 || i === 2 || i === 3 || i === 4 || i === 6" class="card-body__group-body">
                  <span >Кузов</span>
                  <span>{{ item["make_model_trim_body"].type }}</span>
                </li>
                <li v-if="i === 0  || i === 3 || i === 4 || i === 6" class="card-body__group-color">
                  <span>Цвет</span>
                  <span >{{
                    item["make_model_trim_exterior_colors"][0].rgb
                  }}</span>
                </li>
                <li v-if="i === 3 || i === 6" class="card-body__group-engine">
                  <span>Двигатель</span>
                  <ul class="value">
                    <li>{{ item["make_model_trim_engine"].size }} л.</li>
                    <li>
                      {{ item["make_model_trim_engine"]["horsepower_hp"] }} л.с.
                    </li>
                    <li>
                      {{ item["make_model_trim_engine"]["engine_type"] }}
                    </li>
                  </ul>
                </li>
              </ul>
             </div>
              <div v-if="i === 0 || i === 2 || i === 3 || i === 4 || i === 5 || i === 6" class="card-footer">
                <span class="footer-item">Цена</span>
                <span class="footer-item"> <b>{{ item.invoice }}</b></span>
            </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import { TrimUniqItem } from "~/store/model/Attributes";

@Component
export default class Card extends Vue {
  @Prop([]) readonly items: TrimUniqItem[];
  @Prop([]) readonly itemsFromTail: TrimUniqItem;
}
</script>

<style lang="scss" scoped>
@import "/assets/scss/card.scss";
@import "/assets/scss/tails.scss";
</style>
