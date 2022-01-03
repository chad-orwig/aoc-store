const raw = [
    {
      "title": "Carbon Fiber 3K",
      "cost": 125
    },
    {
      "title": "Forged Ember",
      "cost": 140
    },
    {
      "title": "Black Damascus",
      "cost": 175
    },
    {
      "title": "Burnt Titanium",
      "cost": 125
    },
    {
      "title": "Aluminum - Gunmetal",
      "cost": 85
    },
    {
      "title": "Forged Carbon",
      "cost": 125
    },
    {
      "title": "Raw Forged",
      "cost": 140
    },
    {
      "title": "THE NARROWS",
      "cost": 105
    },
    {
      "title": "NORTH SHORE",
      "cost": 105
    },
    {
      "title": "HALF DOME",
      "cost": 105
    },
    {
      "title": "18 KARAT GOLD PLATED",
      "cost": 225
    },
    {
      "title": "Damascus",
      "cost": 175
    },
    {
      "title": "Titanium - Matte Black",
      "cost": 105
    },
    {
      "title": "Titanium - Gunmetal",
      "cost": 105
    },
    {
      "title": "Titanium - Stonewashed",
      "cost": 105
    },
    {
      "title": "Aluminum - Navy",
      "cost": 85
    },
    {
      "title": "Titanium - Matte Cobalt",
      "cost": 105
    },
    {
      "title": "Aluminum - Matte Olive",
      "cost": 85
    },
    {
      "title": "Aluminum - Black",
      "cost": 85
    },
    {
      "title": "Aluminum - Tiki",
      "cost": 95
    },
    {
      "title": "Aluminum - Rose Gold",
      "cost": 85
    },
    {
      "title": "Aluminum - Matte White",
      "cost": 85
    },
    {
      "title": "Aluminum - Tropical",
      "cost": 95
    },
    {
      "title": "Aluminum - Raw",
      "cost": 85
    }
  ]
  .filter(({cost}) => cost <= 180)
  .sort((a,b) => b.cost - a.cost ||
    a.title.localeCompare(b.title));

  const minPrice = raw.map(({cost}) => cost).reduce((a,b) => Math.min(a,b));

  const options = raw.map(({title}) => title
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' '));
  const upcharge = raw.map(({ cost }) => cost - minPrice);

  export const ridgeStyleOption = {
      name: 'Style',
      options,
      upcharge
  };