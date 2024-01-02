const sizeOptions = {
  name: 'Size',
  options: [ 'XS', 'SM', 'MD', 'LG', 'XL', '2XL', '3XL' ]
};
const sizeOptionsWithout = (sizesToRemove) => {
  const options = sizeOptions.options.filter(size => !sizesToRemove.includes(size));
  return {
    ...sizeOptions,
    options,
  }
}
const items = [
  {
    name: 'Slalom Women\'s Tank',
    url: 'https://gear.slalom.com/Product/1454113-Womens_Bella_Canvas_Jersey_Muscle_Tank-S?cat=APP#frm%3DAPP%26p%3D7',
    img: 'https://c.bdac.co/bdac/SLALOMGEAR/ProductImages/1454113_z.jpg?v=638145784148547750',
    dollar: 17,
    options: [sizeOptionsWithout(['3XL'])]
  },
  {
    name: 'Build Comfort Colors Tank',
    url: 'https://gear.slalom.com/Product/1455297-_build_Comfort_Colors_Tank-S?cat=APP#frm%3DAPP%26p%3D8',
    img: 'https://c.bdac.co/bdac/SLALOMGEAR/ProductImages/1455297_z.jpg?v=638145783910357780',
    dollar: 23,
    options: [sizeOptionsWithout(['XS'])],
  },
  {
    name: 'Fiercely Human T-Shirt',
    url: 'https://gear.slalom.com/Product/1454102-T_Tycoon_Fiercely_Human_Coral_T-Shirt-S?cat=APP#frm%3DAPP%26p%3D9',
    img: 'https://c.bdac.co/bdac/SLALOMGEAR/ProductImages/1454102_z.jpg?v=638145784282298050',
    dollar: 25,
    options: [
      sizeOptions,
      {
        name: 'Color',
        options: [ 'Coral', 'Violet', 'Chartreuse' ],
        imgs: [
          'https://c.bdac.co/bdac/SLALOMGEAR/ProductImages/1454102_z.jpg?v=638145784282298050',
          'https://c.bdac.co/bdac/SLALOMGEAR/ProductImages/1454101_z.jpg?v=638145784300087870',
          'https://c.bdac.co/bdac/SLALOMGEAR/ProductImages/1454103_z.jpg?v=638145784264308280',
        ]
      }
    ]
  },
  {
    name: 'Slalom Hoodie',
    url: 'https://gear.slalom.com/Product/1526907-Bella_Canvas_Fleece_Hoodie#frm%3DAPP%26p%3D48',
    img: 'https://c.bdac.co/bdac/SLALOMGEAR/ProductImages/1526907_z.jpg?v=637637834277691310',
    options:[sizeOptionsWithout(['3XL'])],
    dollar: 35
  }

];

export default items;