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
    "@nuxtjs/vuetify",
  ],

  vuetify: {
    customVariables: ["~/assets/scss/_vars.scss"],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
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

              //Color-Exterior
              '73,74,76': 'Серебристый',
              '141,145,154': 'Серебристый',
              "95,94,99":  'Серебристый',
              "60,72,110": 'Серебристый',
              '244,244,244': 'Белый',
              '30,30,30': 'Чёрный',
              '192,8,10': 'Красный',
              '127,87,92': 'Красный',
              '151,28,48': 'Красный',
              '12,56,153': 'Синий',
              '2,42,114': 'Синий',
              '109,82,71': 'Коричневый',
              '230,221,42': 'Жёлтый',

              //Color-Interior
              '25,25,25': 'Чёрный',
              '0,0,0': 'Чёрный',
              '15,15,15': 'Чёрный',
              '141,138,131': 'Серебристый',
              '58,69,91': 'Серебристый',
              '190,190,190': 'Серебристый',
              '145,145,145': 'Серебристый',
              '64,153,140': 'Серебристый',
              '155,107,87': 'Коричневый',
              '71,60,56': 'Коричневый',
              '160,34,45': 'Коричневый',
              '73,63,61': 'Коричневый',
              '162,36,37': 'Красный',
              '160,39,32': 'Красный',
              '159,48,54': 'Красный',
              '212,194,160': 'Бежевый',
              '185,139,106': 'Бежевый',
              '79,57,52': 'Бежевый',
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
  build: {},
};
