const sizeOptions = {
  name: 'Size',
  options: [ 'XS', 'SM', 'MD', 'LG', 'XL', '2XL', '3XL' ]
};
const items = [
  {
    name: 'Better Tomorrows For All T-Shirt',
    img: 'https://c.bdac.co/bdac/SLALOMGEAR/ProductImages/1535486_z.jpg',
    url: 'https://gear.slalom.com/Product/1535486-Bella_Canvas_Better_Tomorrows_For_All_Tee?cat=APP',
    dollar: 24,
    options: [sizeOptions]
  },
  {
    name: 'Sport-Tek Performance T-Shirt',
    img: 'https://c.bdac.co/bdac/SLALOMGEAR/ProductImages/1532522_z.jpg?v=637915934167199260',
    url: 'https://gear.slalom.com/Product/1532522-Sport-Tek_Performance_Tee?cat=APP',
    dollar: 16,
    options: [sizeOptions]
  },
  {
    name: 'Bella + Canvas T-Shirt',
    img: 'https://c.bdac.co/bdac/SLALOMGEAR/ProductImages/1526904_z.jpg?v=637637833657001570',
    url: 'https://gear.slalom.com/Product/1526904-Bella_Canvas_T-Shirt?cat=APP',
    options: [sizeOptions, { name: 'Color', options: ['Blue', 'Grey']}],
    dollar: 13
  },
  {
    name: 'Prism Ringer T-Shirt',
    img: 'https://c.bdac.co/bdac/SLALOMGEAR/ProductImages/1532196_z.jpg?v=637949721052098410',
    url: 'https://gear.slalom.com/Product/1532196-Prism_Ringer_Tee?cat=APP',
    options: [sizeOptions],
    dollar: 23,
  },
  {
    name: 'Men\'s Jersey Short Sleeve Pocket T-Shirt',
    img: 'https://c.bdac.co/bdac/SLALOMGEAR/ProductImages/6000400_z.jpg?v=637879671660848330',
    url: 'https://gear.slalom.com/Product/6000400-Mens_Jersey_Short_Sleeve_Pocket_Tee?cat=APP',
    dollar: 28,
    options: [sizeOptions]
  },
  {
    name: 'Bella + Canvas Aspire T-Shirt',
    img: 'https://c.bdac.co/bdac/SLALOMGEAR/ProductImages/1533640_z.jpg?v=637920481480487980',
    dollar: 16,
    url: 'https://gear.slalom.com/Product/1533640-Bella_Canvas_Aspire_Tee?cat=APP',
    options: [sizeOptions],
  },
  {
    name: 'Bella + Canvas Reach T-Shirt',
    img: 'https://c.bdac.co/bdac/SLALOMGEAR/ProductImages/1534762_z.jpg?v=638011116210662220',
    url: 'https://gear.slalom.com/Product/1534762-Bella_Canvas_Reach_Tee-Small?cat=APP',
    dollar: 16,
    options: [sizeOptions],
  },
  {
    name: "Antigua Legacy Men's Polo",
    img: 'https://c.bdac.co/bdac/SLALOMGEAR/ProductImages/1529639_z.jpg?v=637775152810843300',
    dollar: 37,
    url: 'https://gear.slalom.com/Product/1529639-Antigua_Legacy_Mens_Polo?cat=APP',
    options: [sizeOptions],
  },
  {
    name: 'Bella + Canvas Fiercely Human T-Shirt',
    img: 'https://c.bdac.co/bdac/SLALOMGEAR/ProductImages/1535939_z.jpg?v=638019829958297470',
    dollar: 33,
    options: [sizeOptions],
    url: 'https://gear.slalom.com/Product/1535939-Bella_Canvas_Jersey_Long-Sleeve_Tee?cat=APP',
  },
  {
    name: "Women's Striped Crewneck",
    img: 'https://c.bdac.co/bdac/SLALOMGEAR/ProductImages/1536576_z.jpg?v=638030922217554510',
    dollar: 50,
    url: 'https://gear.slalom.com/Product/1536576-Womens_Independent_Trading_Co_Crewneck?cat=APP',
    options: [sizeOptions],
  },
  {
    name: 'District Reach Hoodie T-Shirt',
    img: 'https://c.bdac.co/bdac/SLALOMGEAR/ProductImages/1534766_z.jpg?v=638019729497101130',
    dollar: 30,
    url: 'https://gear.slalom.com/Product/1534766-District_Perfect_Tri-Long_Sleeve_Reach_Hoodie-Small?cat=APP',
    options: [sizeOptions],
  },
  {
    name: 'Independent Trading Lightweight Terry Hooded Pullover',
    img: 'https://c.bdac.co/bdac/SLALOMGEAR/ProductImages/6000397_z.jpg?v=637885917128867170',
    dollar: 30,
    url: 'https://gear.slalom.com/Product/6000397-Independent_Trading_Lightweight_Terry_Hooded_Pullover?cat=APP',
    options: [sizeOptions],
  },
  {
    name: 'Women\'s Sport-Tek® Long Sleeve Hoodie',
    img: 'https://c.bdac.co/bdac/SLALOMGEAR/ProductImages/6000398_z.jpg?v=637885917240827170',
    dollar: 30,
    url: 'https://gear.slalom.com/Product/6000398-Sport-Tek_Ladies_PosiCharge_Long_Sleeve_Hoodie?cat=APP',
    options: [sizeOptions],
  },
  {
    name: 'Bella + Canvas Fleece Hoodie',
    img: 'https://c.bdac.co/bdac/SLALOMGEAR/ProductImages/1526907_z.jpg?v=637637834277691310',
    dollar: 35,
    url: 'https://gear.slalom.com/Product/1526907-Bella_Canvas_Fleece_Hoodie?cat=APP',
    options: [sizeOptions],
  },
  {
    name: 'Sportiqe Blake Hoodie',
    img: 'https://c.bdac.co/bdac/SLALOMGEAR/ProductImages/1535480_z.jpg?v=638019829184986590',
    dollar: 65,
    options: [sizeOptions],
    url: 'https://gear.slalom.com/Product/1535480-Sportiqe_Blake_Hoodie?cat=APP',
  },
  {
    name: 'Sportiqe Boon Sweatpants',
    img: 'https://c.bdac.co/bdac/SLALOMGEAR/ProductImages/1535482_z.jpg?v=638019829193116770',
    dollar: 60,
    options: [sizeOptions],
    url: 'https://gear.slalom.com/Product/1535482-Sportiqe_Boon_Sweatpants?cat=APP',
  },
  {
    name: 'MERCER+METTLE Shacket',
    img: 'https://c.bdac.co/bdac/SLALOMGEAR/ProductImages/1534419_z.jpg?v=638019828808536760',
    dollar: 55,
    options: [sizeOptions],
    url: 'https://gear.slalom.com/Product/1534419-MERCERMETTLE_Double_Knit_Snap_Front_Jacket?cat=APP',
  },
  {
    name: "Women's OGIO® Luuma Flex V-Neck",
    img: 'https://c.bdac.co/bdac/SLALOMGEAR/ProductImages/6000399_z.jpg?v=637885917216347440',
    dollar: 55,
    options: [sizeOptions],
    url: 'https://gear.slalom.com/Product/6000399-OGIO_Ladies_Luuma_Flex_V-Neck?cat=APP',
  },
  {
    name: "Marine Layer Mens Reversible Pullover",
    img: 'https://c.bdac.co/bdac/SLALOMGEAR/ProductImages/6000303_z.jpg?v=637860754428996480',
    dollar: 137,
    options: [sizeOptions],
    url: 'https://gear.slalom.com/Product/6000303-Marine_Layer_Mens_Reversible_Pullover',
  },
  {
    name: "Women's The North Face Everyday Insulated Vest",
    img: 'https://c.bdac.co/bdac/SLALOMGEAR/ProductImages/1534426_z.jpg?v=638019828846406440',
    dollar: 130,
    options: [sizeOptions],
    url: 'https://gear.slalom.com/Product/1534426-Womens_The_North_Face_Everyday_Insulated_Vest',
  },
  {
    name: 'Men\'s The North Face Everyday Insulated Vest',
    img: 'https://c.bdac.co/bdac/SLALOMGEAR/ProductImages/1534425_z.jpg?v=638019828833286460',
    dollar: 130,
    options: [sizeOptions],
    url: 'https://gear.slalom.com/Product/1534425-The_North_Face_Everyday_Insulated_Vest',
  },
  {
    name: 'Hyper-Loft Puffy Jacket',
    img: 'https://c.bdac.co/bdac/SLALOMGEAR/ProductImages/1534427_z.jpg?v=638019828879686560',
    dollar: 65,
    options: [sizeOptions],
    url: 'https://gear.slalom.com/Product/1534427-Hyper-Loft_Puffy_Jacket',
  },
  {
    name: '_build Allmade T-Shirt',
    img: 'https://c.bdac.co/bdac/SLALOMGEAR/ProductImages/1536360_z.jpg',
    dollar: 25,
    options: [sizeOptions],
    url: 'https://gear.slalom.com/Product/1536360-_build_Allmade_Organic_Cotton_Tee_',
  },
  {
    name: '_build Men\'s Bella + Canvas Heather CVC T-Shirt',
    img: 'https://c.bdac.co/bdac/SLALOMGEAR/ProductImages/1532436_z.jpg?',
    dollar: 20,
    options: [sizeOptions],
    url: 'https://gear.slalom.com/Product/1532436-_build_Bella_Canvas_Heather_CVC_T-Shirt',
  },
  {
    name: "_build Women's Bella + Canvas Slim Fit T-Shirt",
    img: 'https://c.bdac.co/bdac/SLALOMGEAR/ProductImages/1532434_z.jpg?',
    dollar: 20,
    options: [sizeOptions],
    url: 'https://gear.slalom.com/Product/1532434-_build_Womens_Bella_Canvas_Slim_Fit_T-Shirt',
  },
  {
    name: "_build Nalgene Wide Mouth Bottle",
    img: "https://c.bdac.co/bdac/SLALOMGEAR/ProductImages/1532440_z.jpg",
    url: "https://gear.slalom.com/Product/1532440-_build_Nalgene_Wide_Mouth_Bottle",
    dollar: 15,
  },
  {
    name: 'Hydro Flask Wide Mouth Bottle',
    url: 'https://gear.slalom.com/Product/1535934-Hydro_Flask_Wide_Mouth_Bottle',
    img: 'https://c.bdac.co/bdac/SLALOMGEAR/ProductImages/1535934_z.jpg',
    dollar: 60,
  }
];

export default items;