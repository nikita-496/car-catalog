<template>
  <main v-if="car.id">
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
      <div class="info">
        <div>
          <h3 class="info-title">Модель</h3>
          <ul class="info-list">
            <li>
              <p>Производитель - {{ car["make_model"].make.name }}</p>
            </li>
            <li>
              <p>Наименование модели - {{ car["make_model"].name }}</p>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="info-title">Кузов</h3>
          <ul class="info-list">
            <li>
              <p>Тип - {{ $t(car["make_model_trim_body"].type) }}</p>
            </li>
            <li>
              <p>{{ $t("doors") }} - {{ car["make_model_trim_body"].doors }}</p>
            </li>
            <li>
              <p>
                {{ $t("ground_clearance") }} -
                {{ car["make_model_trim_body"]["ground_clearance"] }}
              </p>
            </li>
            <li>
              <p>
                {{ $t("height") }} - {{ car["make_model_trim_body"].height }}
              </p>
            </li>
            <li>
              <p>
                {{ $t("length") }} - {{ car["make_model_trim_body"].length }}
              </p>
            </li>
            <li v-if="car['make_model_trim_body']['max_cargo_capacity']">
              <p>
                {{ $t("max_cargo_capacity") }} -
                {{ car["make_model_trim_body"]["max_cargo_capacity"] }}
              </p>
            </li>
            <li v-if="car['make_model_trim_body']['max_payload']">
              <p>
                {{ $t("max_payload") }} -
                {{ car["make_model_trim_body"]["max_payload"] }}
              </p>
            </li>
            <li>
              <p>{{ $t("seats") }} - {{ car["make_model_trim_body"].seats }}</p>
            </li>
            <li>
              <p>
                {{ $t("wheel_base") }} -
                {{ car["make_model_trim_body"]["wheel_base"] }}
              </p>
            </li>
            <li>
              <p>
                {{ $t("width") }} - {{ car["make_model_trim_body"]["width"] }}
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
                {{ $t(car["make_model_trim_engine"].cylinders) }}
              </p>
            </li>
            <li>
              <p>
                {{ $t("drive_type") }} -
                {{ $t(car["make_model_trim_engine"]["drive_type"]) }}
              </p>
            </li>
            <li>
              <p>
                {{ $t("engine_type") }} -
                {{ $t(car["make_model_trim_engine"]["engine_type"]) }}
              </p>
            </li>
            <li>
              <p>
                {{ $t("horsepower_hp") }} -
                {{ $t(car["make_model_trim_engine"]["horsepower_hp"]) }}
              </p>
            </li>
            <li>
              <p>
                {{ $t("size") }} - {{ $t(car["make_model_trim_engine"].size) }}
              </p>
            </li>
            <li>
              <p>
                {{ $t("torque_ft_lbs") }} -
                {{ $t(car["make_model_trim_engine"]["torque_ft_lbs"]) }}
              </p>
            </li>
            <li>
              <p>
                {{ $t("transmission") }} -
                {{ $t(car["make_model_trim_engine"].transmission, 2) }}
              </p>
            </li>
            <li>
              <p>
                {{ $t("valves") }} -
                {{ $t(car["make_model_trim_engine"].valves) }}
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div class="info__last info">
        <div>
          <h3 class="info-title">Эксплуатационные показатели</h3>
          <ul class="info-list">
            <li>
              <p>
                {{ $t("fuel_tank_capacity") }} -
                {{ $t(car["make_model_trim_mileage"]["fuel_tank_capacity"]) }}
              </p>
            </li>
            <li>
              <p>
                {{ $t("combined_mpg") }} -
                {{ $t(car["make_model_trim_mileage"]["combined_mpg"]) }}
              </p>
            </li>
            <li>
              <p>
                {{ $t("epa_city_mpg") }} -
                {{ $t(car["make_model_trim_mileage"]["epa_city_mpg"]) }}
              </p>
            </li>
            <li>
              <p>
                {{ $t("epa_highway_mpg") }} -
                {{ $t(car["make_model_trim_mileage"]["epa_highway_mpg"]) }}
              </p>
            </li>
            <li>
              <p>
                {{ $t("range_city") }} -
                {{ $t(car["make_model_trim_mileage"]["range_city"]) }}
              </p>
            </li>
            <li>
              <p>
                {{ $t("range_highway") }} -
                {{ $t(car["make_model_trim_mileage"]["range_highway"]) }}
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
                <div>
                  <span
                    class="color-item__attribute-value"
                    v-for="exterior in car['make_model_trim_exterior_colors']"
                    :key="exterior.id"
                  >
                    <div
                      :style="{
                        display: 'inline-block',
                        borderRadius: '10px',
                        width: '50px',
                        height: '50px',
                        backgroundColor: `rgb(${exterior.rgb})`,
                      }"
                      ></div
                    >
                  </span>
                </div>
              </li>
              <li class="color-item">
                <p class="color-item__attribute">Салон</p>
                <div>
                  <span
                    class="color-item__attribute-value"
                    v-for="interior in car['make_model_trim_interior_colors']"
                    :key="interior.id"
                  >
                    <div
                      :style="{
                        display: 'inline-block',
                        borderRadius: '10px',
                        width: '50px',
                        height: '50px',
                        backgroundColor: `rgb(${interior.rgb})`,
                      }"
                      ></div
                    >
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </main>
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
