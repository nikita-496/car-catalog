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
                  <span class="value">{{ item.year }}</span>
                </li>
                <li class="card-body__group-body">
                  <span>Кузов</span>
                  <span class="value">{{ $t(item["make_model_trim_body"].type) }}</span>
                </li>
                <li class="card-body__group-color">
                  <span>Цвета кузова</span>
                  <div
                    v-for="color in item['make_model_trim_exterior_colors']" :key="color.id"
                    :style="{
                      display: 'inline-block',
                      borderRadius: '10px',
                      width: '15px',
                      height: '15px',
                      backgroundColor: `rgb(${color.rgb})`,
                    }"
                  ></div>
                </li>
                <li class="card-body__group-engine">
                  <span>Двигатель</span>
                  <ul class="value">
                    <li class="value">{{ item["make_model_trim_engine"].size }} л.</li>
                    <li class="value">
                      {{ item["make_model_trim_engine"]["horsepower_hp"] }} л.с.
                    </li>
                    <li class="value">
                      {{ $t(item["make_model_trim_engine"]["engine_type"]) }}
                    </li>
                  </ul>
                </li>
                <li class="card-body__group-trim">
                  <span>Комплектация</span>
                  <span>{{ item.description.slice(0, 10) }}</span>
                </li>
              </ul>
            </div>
            <div v-if="item.invoice" class="card-footer">
              <span class="footer-item">Цена</span>
              <span class="footer-item">
                <b>{{ Number(item.invoice * 60.72).toFixed(3)}} &#8381; </b></span
              >
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>

    <ul v-else class="container-tail">
      <li v-for="(item, i) in itemsFromTail" :key="item.id" class="item">
        <NuxtLink :to="'/car/' + item.id" class="link">
          <div class="card-top">
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
             <ul v-if="i === 3 || i === 4 || i === 6" class="card-body">
                <li class="card-body__group-year">
                  <span>Год выпуска</span>
                  <span class="value">{{ item.year }}</span>
                </li>
                 <li class="card-body__group-body">
                  <span>Кузов</span>
                  <span class="value">{{ $t(item["make_model_trim_body"].type) }}</span>
                </li>
                 <li v-if ="i === 3 || i === 6" class="card-body__group-trim">
                  <span>Комплектация</span>
                  <span>{{ item.description.slice(0, 10) }}</span>
                </li>
              </ul>
          </div>
          <div v-if="item.invoice && (i !== 1)" class="card-footer">
              <span class="footer-item">Цена</span>
              <span class="footer-item">
                <b>{{ Number(item.invoice * 60.72).toFixed(3)}} &#8381; </b></span
              >
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
