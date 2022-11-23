

interface ReadonlyStringArray {
  en: {
    readonly [index: string]: string
  },
}

// Сопоставления с запросами, введённых с кириллицы 
// Запросы реализованы по критериям: Модель автомобиля, марка, кузов, двигатель

const locale: ReadonlyStringArray  =  {
  en: {
    'Акура': 'Acura',
    'Аккура': 'Acura',
    'Альфа Ромео': 'Alfa Romeo',
    'Астон Мартин': 'Aston Martin',
    'Астен Мартин': 'Aston Martin',
    'Ауди': 'Audi',
    'Бентли': 'Bentley',
    'Бэнтли': 'Bentley',
    'Бмв': 'BMW',
    'Бьюик': 'Buick',
    'Бюик': 'Buick',
    'Кадилак': 'Cadillac',
    'Кадиллак': 'Cadillac',
    'Шевроле': 'Chevrolet',
    'Крайслер': 'Chrysler',
    'Додж': 'Dodge',
    'Фиат': 'FIAT',
    'Форд': 'Ford',
    'Дженезис': 'Genesis',
    'Джинезис': 'Genesis',
    'ДЖС': 'GMC',
    'Хонда':'Honda',
    'Хёндай': 'Hyundai',
    'Хендай': 'Hyundai',
    'Инфинити': 'INFINITI',
    'Ягуар': 'Jaguar',
    'Джип': 'Jeep',
    'Киа': 'Kia',
    'Ламборгини': 'Lamborghini',
    'Ламборджини': 'Lamborghini',
    'Ленд Ровер': 'Land Rover',
    'Лэнд Ровер': 'Land Rover',
    'Лексус': 'Lexus',
    'Линкольн': 'Lincoln', 
    'Лотос': 'Lotus',
    'Мазерати': 'Maserati',
    'Мазератти':'Maserati',
    'Мазда': 'Mazda',
    'Макларен': 'McLaren',
    'Мак Кларен' :'McLaren',
    'Мерседес-Бенц': 'Mercedes-Benz',
    'Мерседес-Бенc': 'Mercedes-Benz',
    'Мерседес Бенц': 'Mercedes-Benz',
    'Мерседес Бенc': 'Mercedes-Benz',
    'Мини': 'MINI',
    'Митсубиши': 'Mitsubishi',
    'Митсубси': 'Mitsubishi',
    'Ниссан': 'Nissan',
    'Поль Стар': 'Polestar',
    'Порше': 'Porsche',
    'Рем': 'Ram',
    'Роллс-Ройс': 'Rolls-Royce',
    'Субару': 'Subaru',
    'Тесла': 'Tesla',
    'Тайота': 'Toyota',
    'Фольцваген': 'Volkswagen',
    'Вольцваген': 'Volkswagen',
    'Вольво': 'Volvo', 

    //Body
    'Седан': 'Sedan',
    'Купе': 'Coupe',
    'Кабриолет': 'Convertible',
    'Фургон': 'Wagon',
    'Хэтчбек': 'Hatchback',
    'Внедорожник': 'SUV',

      //Engine
      'Дизель': 'diesel',
      'Электро': 'electric',
      'Газ': 'gas',
      'Гибрид': 'hybrid',
  }
}

export default locale