const EmployeeData = [
  {
    id: 1,
    name: 'Miladin Popadic',
    country: 'Serbia',
    city: 'Kragujevac',
    job: 'PHP Developer',
    image:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    email: 'miladin@quantox.com',
  },
  {
    id: 2,
    name: 'Slavko Bucanovic',
    country: 'Serbia',
    city: 'Kosovska Mitrovica',
    job: 'TypeScript/Angular Developer',
    image:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    email: 'slavko@quantox.com',
  },
  {
    id: 3,
    name: 'Ratibor Popovic',
    country: 'Montenegro',
    city: 'Podgorica',
    job: 'Tech Lead/Solution Architect',
    image:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    email: 'ratibor@quantox.com',
  },
  {
    id: 4,
    name: 'Svetozar Slavkovic',
    country: 'Serbia',
    city: 'Belgrade',
    job: 'QA',
    image:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    email: 'svetozar@quantox.com',
  },
  {
    id: 5,
    name: 'Verica Visekruna',
    country: 'Croatia',
    city: 'Zagreb',
    job: 'HR',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    email: 'verica@quantox.com',
  },
  {
    id: 6,
    name: 'Svetlana Svetlanovic',
    country: 'Ukraine',
    city: 'Kyiv',
    job: 'Full Stack Engineer',
    image:
      'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80',
    email: 'svetlana@quantox.com',
  },
  {
    id: 7,
    name: 'Velicko Guzina',
    country: 'Serbia',
    city: 'Novi Sad',
    job: 'Back End Engineer',
    image:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    email: 'velicko@quantox.com',
  },
  {
    id: 8,
    name: 'Marko Maric',
    country: 'Serbia',
    city: 'Cacak',
    job: 'Chief Executive Officer',
    image:
      'https://images.unsplash.com/photo-1628890920690-9e29d0019b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    email: 'marko@quantox.com',
  },
  {
    id: 9,
    name: 'Anabela Ilic',
    country: 'Serbia',
    city: 'Nis',
    job: 'Front End Developer',
    image:
      'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    email: 'anabela@quantox.com',
  },
  {
    id: 10,
    name: 'Veselin Velickovic',
    country: 'Serbia',
    city: 'Belgrade',
    job: 'Data Scientist',
    image:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    email: 'veselin@quantox.com',
  },
  {
    id: 11,
    name: 'Ranislav Pucarevic',
    country: 'Serbia',
    city: 'Cuprija',
    job: 'PHP Developer',
    image:
      'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80',
    email: 'ranislav@quantox.com',
  },
  {
    id: 12,
    name: 'Slobodanka Jovanovic',
    country: 'Serbia',
    city: 'Jagodina',
    job: 'QA',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80',
    email: 'slobodanka@quantox.com',
  },
  {
    id: 13,
    name: 'Gavrilo Tucakovic',
    country: 'Bosnia and Herzegovina',
    city: 'Sarajevo',
    job: 'Tech Lead/Solution Architect',
    image:
      'https://images.unsplash.com/photo-1629467057571-42d22d8f0cbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80',
    email: 'gavrilo@quantox.com',
  },
  {
    id: 14,
    name: 'Vukan Vesovic',
    country: 'Serbia',
    city: 'Belgrade',
    job: 'Python Developer',
    image:
      'https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    email: 'vukan@quantox.com',
  },
  {
    id: 15,
    name: 'Lazar Nikolic',
    country: 'Bosnia and Herzegovina',
    city: 'Mostar',
    job: 'Front End Developer',
    image:
      'https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    email: 'lazar@quantox.com',
  },
  {
    id: 16,
    name: 'Radojko Milosavljevic',
    country: 'Serbia',
    city: 'Cacak',
    job: 'Full Stack Engineer',
    image:
      'https://images.unsplash.com/photo-1626586066636-a1523dd2141b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    email: 'radojko@quantox.com',
  },
  {
    id: 17,
    name: 'Kamenko Karic',
    country: 'Serbia',
    city: 'Belgrade',
    job: 'Front End Developer',
    image:
      'https://images.unsplash.com/photo-1636041241164-3d20e98d43a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
    email: 'kamenko@quantox.com',
  },
  {
    id: 18,
    name: 'Branimir Krekulovic',
    country: 'Serbia',
    city: 'Kragujevac',
    job: 'Back End Developer',
    image:
      'https://images.unsplash.com/photo-1636041282858-351171ff944c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    email: 'branimir@quantox.com',
  },
  {
    id: 19,
    name: 'Biljan Ristic',
    country: 'Serbia',
    city: 'Novi Sad',
    job: 'DevOps Engineer',
    image:
      'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    email: 'biljan@quantox.com',
  },
  {
    id: 20,
    name: 'Visnja Pavlovic',
    country: 'Serbia',
    city: 'Kragujevac',
    job: 'Cloud Architect',
    image:
      'https://images.unsplash.com/photo-1558439749-b53250f4ffb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
    email: 'visnja@quantox.com',
  },
];
export default EmployeeData;
