const raw = [
  {
      "title": "Carbon Fiber 3k",
      "cost": 125
  },
  {
      "title": "Royal Black",
      "cost": 85
  },
  {
      "title": "Forged Ember",
      "cost": 125
  },
  {
      "title": "24 Karat Gold",
      "cost": 250
  },
  {
      "title": "Forged Pacific",
      "cost": 125
  },
  {
      "title": "Gunmetal",
      "cost": 85
  },
  {
      "title": "Burnt Titanium",
      "cost": 110
  },
  {
      "title": "Black Damascus",
      "cost": 150
  },
  {
      "title": "Alpine Navy",
      "cost": 85
  },
  {
      "title": "Gunmetal Titanium",
      "cost": 99
  },
  {
      "title": "Forged Carbon",
      "cost": 125
  },
  {
      "title": "Matte Olive",
      "cost": 85
  },
  {
      "title": "Stonewashed Titanium",
      "cost": 110
  },
  {
      "title": "Half Dome",
      "cost": 110
  },
  {
      "title": "Hennessey Performance",
      "cost": 150
  },
  {
      "title": "Matte Black Titanium",
      "cost": 99
  },
  {
      "title": "(PRODUCT)RED",
      "cost": 110
  },
  {
      "title": "Raw Forged",
      "cost": 125
  },
  {
      "title": "Denali",
      "cost": 110
  },
  {
      "title": "Cobalt Titanium",
      "cost": 99
  },
  {
      "title": "Neon Tiki",
      "cost": 85
  },
  {
      "title": "Mount Rainier",
      "cost": 110
  },
  {
      "title": "Matte White",
      "cost": 85
  },
  {
      "title": "North Shore",
      "cost": 110
  },
  {
      "title": "Damascus",
      "cost": 150
  },
  {
      "title": "Forged Gold",
      "cost": 115
  },
  {
      "title": "Rose Gold",
      "cost": 85
  },
  {
      "title": "Matte Olive Titanium",
      "cost": 99
  },
  {
      "title": "The Narrows",
      "cost": 110
  },
  {
      "title": "Tiki",
      "cost": 79
  },
  {
      "title": "Tropical",
      "cost": 85
  },
  {
      "title": "Realtree EDGE",
      "cost": 110
  },
  {
      "title": "Puppies Make Me Happy",
      "cost": 99
  },
  {
      "title": "Holiday Essential Kit",
      "cost": 95
  },
  {
      "title": "Forged Ember",
      "cost": 185
  },
  {
      "title": "Carbon Fiber 3k",
      "cost": 185
  },
  {
      "title": "24 Karat Gold",
      "cost": 325
  },
  {
      "title": "Forged Pacific",
      "cost": 185
  },
  {
      "title": "Gunmetal",
      "cost": 145
  },
  {
      "title": "Alpine Navy",
      "cost": 145
  },
  {
      "title": "Royal Black",
      "cost": 145
  },
  {
      "title": "Burnt Titanium",
      "cost": 165
  },
  {
      "title": "Carbon Fiber 3k",
      "cost": 585
  },
  {
      "title": "Forged Ember",
      "cost": 595
  },
  {
      "title": "24 Karat Gold",
      "cost": 550
  }
]
  .filter(({cost}) => cost <= 180)
  .sort((a,b) => a.cost - b.cost ||
    a.title.localeCompare(b.title));

  const minPrice = raw.map(({cost}) => cost).reduce((a,b) => Math.min(a,b));

  const options = raw.map(({title}) => title);
  const upcharge = raw.map(({ cost }) => cost - minPrice);

  export const ridgeStyleOption = {
      name: 'Style',
      options,
      upcharge
  };