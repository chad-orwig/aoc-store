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
    url: 'https://gear.slalom.com/1454113-women-27s-bella-2b-canvas-jersey-muscle-tank-e2-80-8b',
    img: 'https://gear.slalom.com/media/catalog/product/1/4/1454113_z.jpg?store=slalomgear&image-type=image',
    dollar: 17,
    options: [sizeOptionsWithout(['3XL'])]
  },
  {
    name: 'Build Comfort Colors Tank',
    url: 'https://gear.slalom.com/1455297-build-comfort-colors-tank',
    img: 'https://gear.slalom.com/media/catalog/product/1/4/1455297_z.jpg?store=slalomgear&image-type=image',
    dollar: 23,
    options: [sizeOptionsWithout(['XS'])],
  },
  {
    name: 'Fiercely Human T-Shirt',
    url: 'https://gear.slalom.com/1454103-fiercely-human-chartreuse-t-shirt',
    img: 'https://gear.slalom.com/media/catalog/product/1/4/1455297_z.jpg?store=slalomgear&image-type=image',
    dollar: 25,
    options: [
      sizeOptions,
      {
        name: 'Color',
        options: [ 'Coral', 'Violet', 'Chartreuse' ],
        imgs: [
          'https://gear.slalom.com/media/catalog/product/1/4/1454102_z.jpg?store=slalomgear&image-type=image',
          'https://gear.slalom.com/media/catalog/product/1/4/1454101_z.jpg?store=slalomgear&image-type=image',
          'https://gear.slalom.com/media/catalog/product/1/4/1454103_z.jpg?store=slalomgear&image-type=image',
        ]
      }
    ]
  },
  {
    name: 'Slalom Hoodie',
    url: 'https://gear.slalom.com/1526907-bella-2b-canvas-fleece-hoodie',
    img: 'https://gear.slalom.com/media/catalog/product/1/5/1526907_z.jpg?store=slalomgear&image-type=image',
    options:[sizeOptionsWithout(['3XL'])],
    dollar: 35
  },
  {
    name: "Build Champion Hoodie",
    url: "https://gear.slalom.com/1526598-build-champion-hoodie",
    img: "https://gear.slalom.com/media/catalog/product/1/5/1526598_z.jpg?store=slalomgear&image-type=image",
    dollar: 43,
    options: [ sizeOptionsWithout(['XS']) ]
  }

];

export default items;