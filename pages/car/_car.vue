<template>
  <div>
    <loading-bar v-if="!car.id" />
    <main v-else>
      <div class="car-container container">
        <h1>Характеристики автомобиля</h1>
        <figure class="figure">
          <img
            :src="
              require(`~/assets/car-img/${car['make_model'].make.name}/${car['make_model'].make.name}.png`)
            "
            alt="автомобиль"
          />
          <figcaption></figcaption>
        </figure>
        <div class="info first-row">
          <div>
            <h3 class="info-title">Модель</h3>
            <ul class="info-list">
              <li>
                <p>
                  Производитель -
                  <span class="info-value">{{
                    car["make_model"].make.name
                  }}</span>
                </p>
              </li>
              <li>
                <p>
                  Наименование модели -
                  <span class="info-value">{{ car["make_model"].name }}</span>
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="info-title">Кузов</h3>
            <ul class="info-list">
              <li>
                <p>
                  Тип -
                  <span class="info-value">{{
                    $t(car["make_model_trim_body"].type)
                  }}</span>
                </p>
              </li>
              <li>
                <p>
                  {{ $t("doors") }} -
                  <span class="info-value">{{
                    car["make_model_trim_body"].doors
                  }}</span>
                </p>
              </li>
              <li>
                <p>
                  {{ $t("ground_clearance") }} -
                  <span class="info-value">{{
                    car["make_model_trim_body"]["ground_clearance"]
                  }}</span>
                </p>
              </li>
              <li>
                <p>
                  {{ $t("height") }} -
                  <span class="info-value">{{
                    car["make_model_trim_body"].height
                  }}</span>
                </p>
              </li>
              <li>
                <p>
                  {{ $t("length") }} -
                  <span class="info-value">{{
                    car["make_model_trim_body"].length
                  }}</span>
                </p>
              </li>
              <li v-if="car['make_model_trim_body']['max_cargo_capacity']">
                <p>
                  {{ $t("max_cargo_capacity") }} -
                  <span class="info-value">{{
                    car["make_model_trim_body"]["max_cargo_capacity"]
                  }}</span>
                </p>
              </li>
              <li v-if="car['make_model_trim_body']['max_payload']">
                <p>
                  {{ $t("max_payload") }} -
                  <span class="info-value">{{
                    car["make_model_trim_body"]["max_payload"]
                  }}</span>
                </p>
              </li>
              <li>
                <p>
                  {{ $t("seats") }} -
                  <span class="info-value">{{
                    car["make_model_trim_body"].seats
                  }}</span>
                </p>
              </li>
              <li>
                <p>
                  {{ $t("wheel_base") }} -
                  <span class="info-value">{{
                    car["make_model_trim_body"]["wheel_base"]
                  }}</span>
                </p>
              </li>
              <li>
                <p>
                  {{ $t("width") }} -
                  <span class="info-value">{{
                    car["make_model_trim_body"]["width"]
                  }}</span>
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="info-title">Двигатель</h3>
            <ul class="info-list">
              <li>
                <p>
                  {{ $t("cylinders") }} -
                  <span class="info-value">{{
                    $t(car["make_model_trim_engine"].cylinders)
                  }}</span>
                </p>
              </li>
              <li>
                <p>
                  {{ $t("drive_type") }} -
                  <span class="info-value">{{
                    $t(car["make_model_trim_engine"]["drive_type"])
                  }}</span>
                </p>
              </li>
              <li>
                <p>
                  {{ $t("engine_type") }} -
                  <span class="info-value">{{
                    $t(car["make_model_trim_engine"]["engine_type"])
                  }}</span>
                </p>
              </li>
              <li>
                <p>
                  {{ $t("horsepower_hp") }} -
                  <span class="info-value">{{
                    $t(car["make_model_trim_engine"]["horsepower_hp"])
                  }}</span>
                </p>
              </li>
              <li>
                <p>
                  {{ $t("size") }} -
                  <span class="info-value">{{
                    $t(car["make_model_trim_engine"].size)
                  }}</span>
                </p>
              </li>
              <li>
                <p>
                  {{ $t("torque_ft_lbs") }} -
                  <span class="info-value">{{
                    $t(car["make_model_trim_engine"]["torque_ft_lbs"])
                  }}</span>
                </p>
              </li>
              <li>
                <p>
                  {{ $t("transmission") }} -
                  <span class="info-value">{{
                    $t(car["make_model_trim_engine"].transmission)
                  }}</span>
                </p>
              </li>
              <li>
                <p>
                  {{ $t("valves") }} -
                  <span class="info-value">{{
                    $t(car["make_model_trim_engine"].valves)
                  }}</span>
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div class="info__last info last-row">
          <div>
            <h3 class="info-title">Эксплуатационные показатели</h3>
            <ul class="info-list">
              <li>
                <p>
                  {{ $t("fuel_tank_capacity") }} -
                  <span class="info-value">{{
                    $t(car["make_model_trim_mileage"]["fuel_tank_capacity"])
                  }}</span>
                </p>
              </li>
              <li>
                <p>
                  {{ $t("combined_mpg") }} -
                  <span class="info-value">{{
                    $t(car["make_model_trim_mileage"]["combined_mpg"])
                  }}</span>
                </p>
              </li>
              <li>
                <p>
                  {{ $t("epa_city_mpg") }} -
                  <span class="info-value">{{
                    $t(car["make_model_trim_mileage"]["epa_city_mpg"])
                  }}</span>
                </p>
              </li>
              <li>
                <p>
                  {{ $t("epa_highway_mpg") }} -
                  <span class="info-value">{{
                    $t(car["make_model_trim_mileage"]["epa_highway_mpg"])
                  }}</span>
                </p>
              </li>
              <li>
                <p>
                  {{ $t("range_city") }} -
                  <span class="info-value">{{
                    $t(car["make_model_trim_mileage"]["range_city"])
                  }}</span>
                </p>
              </li>
              <li>
                <p>
                  {{ $t("range_highway") }} -
                  <span class="info-value">{{
                    $t(car["make_model_trim_mileage"]["range_highway"])
                  }}</span>
                </p>
              </li>
            </ul>
          </div>

          <div class="info">
            <div>
              <h3 class="info-title">Цвета</h3>
              <ul class="info-list__colors info-list">
                <li class="color-item">
                  <p class="color-item__attribute">Кузов</p>
                  <div
                    v-for="exterior in car['make_model_trim_exterior_colors']"
                    :key="exterior.id"
                  >
                    <div
                      :style="{
                        display: 'inline-block',
                        borderRadius: '10px',
                        width: '20px',
                        height: '20px',
                        backgroundColor: `rgb(${exterior.rgb})`,
                      }"
                    ></div>
                  </div>
                </li>
                <li class="color-item">
                  <p class="color-item__attribute">Салон</p>
                  <div v-for="interior in car['make_model_trim_interior_colors']"
                      :key="interior.id">
                      <div
                        :style="{
                          display: 'inline-block',
                          borderRadius: '10px',
                          width: '20px',
                          height: '20px',
                          backgroundColor: `rgb(${interior.rgb})`,
                        }"
                      ></div>
                  </div>
                </li>
              </ul>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { TrimUniqItem } from "~/store/model/Attributes";
import { vmx } from "~/store/store.vuex";

@Component
export default class Card extends Vue {
  public car: TrimUniqItem = {};

  async mounted() {
    const id: number = Number(this.$route.params.car);
    await vmx.car.fetchCarById(id);
    this.car = vmx.car.getCar;
  }
}
</script>

<style lang="scss" scoped>
@import "/assets/scss/car.scss";
</style>
