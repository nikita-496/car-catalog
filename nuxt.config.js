export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "car-catalog",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/scss/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/api.ts",
    "~/plugins/services.ts",
    "~/plugins/axios-accessor.ts",
    "~/plugins/vuetify.ts",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/google-fonts",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/vuetify",
    [
      "@nuxtjs/i18n",
      {
        locales: ["ru"],
        defaultLocale: "ru",
        vueI18n: {
          fallbackLocale: "en",
          messages: {
            ru: {
              //Body
              type: "Тип кузова",
              doors: "Количество дверей",
              seats: "Количество пассажирских мест",
              length: "Общая длина",
              height: "Общая высота",
              width: "Общая ширина",
              wheel_base: "Колёсная база",
              front_track: "Расстояние между передними колёсами",
              ground_clearance: "Дорожный просвет (клиренс)",
              cargo_capacity: "Объём пространства грузового отсека",
              curb_weight: "Снаряжённая масса",
              gross_weigh: "Общий вес",
              max_payload: "Макимальная полезная нагрузка",
              max_towing_capacity: "Макимальная грузоподъёмность",
              Sedan: "Седан",
              Coupe: "Купе",
              Convertible: "Кабриолет",
              Wagon: "Фургон",
              Hatchback: "Хэтчбек",
              SUV: 'Внедорожник',

              // Engine
              engine_type: "Тип двигателя",
              fuel_type: "Тип топлива",
              cylinders: "Количество цилиндров",
              size: "Размер двигателя",
              horsepower_hp: "Мощность",
              torque_ft_lbs: "Крутящий момент",
              valves: "Количество клапанов",
              valve_timing: "Фаза газораспределения",
              drive_type: "Тип привода",
              transmission: "Трансмиссия",
              diesel: "Дизель",
              electric: "Электро",
              gas: "Газ",
              hybrid: "Гибрид",
              'mild hybrid': 'Мягкий гибрид',
              "front wheel drive": "Передний привод",
              "all wheel drive": "Полный привод",
              "back wheel drive": "Задний привод",
              "1-speed direct drive":
                "1-ступенчатая коробка передач с прямым приводом",
              "10-speed shiftable automatic":
                "10-ступенчатая автоматическая коробка передач ( АКП )",
              "9-speed shiftable automatic":
                "9-ступенчатая автоматическая коробка передач ( АКП )",
              "7-speed automated manual":
                "7-ступенчатая автоматизированная механическая коробка передач ( АМТ )",
              "9-speed automated manual":
                "9-ступенчатая автоматизированная механическая коробка передач ( АМТ )",
              "8-speed automated manual":
                "8-ступенчатая автоматизированная механическая коробка передач ( АМТ )",
              "6-speed automated manual":
                "6-ступенчатая автоматизированная механическая коробка передач ( АМТ )",

              //Mileage
              fuel_tank_capacity: "Ёмкость топливного бака",
              combined_mpg: "Расход топлива смешанный",
              epa_city_mpg: "Расход топлива город",
              epa_highway_mpg: "Расход топлива трасса",
              range_city: "Запас хода на полном баке в городе",
              range_highway: "Запас хода на полном баке по трассе",
            },
          },
        },
      },
    ],
  ],
  axios: {
    baseURL: "/",
    proxy: true,
    prefix: "/api/",
  },
  proxy: {
    //"/api/": { target: "https://carapi.app" },
    "/api/": { target: "https://car-api2.p.rapidapi.com" },
  },

  googleFonts: {
    families: {
      Roboto: true,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
};
