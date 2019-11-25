const storeItems =  [
    {
        url : 'https://www.amazon.com/CanaKit-Raspberry-4GB-Starter-Kit/dp/B07V5JTMV9/ref=sr_1_3?keywords=raspberry+pi&qid=1574622190&sr=8-3',
        name : 'Raspberry Pi 4 Starter Kit',
        img : 'https://images-na.ssl-images-amazon.com/images/I/81uUzI33kdL._SX679_.jpg',
        options : [],
        cost : 40
    },
    {
        url  : 'https://www.sephora.com/product/merry-bright-P449886?icid2=products%20grid:p449886',
        name : 'Summer Fridays\' Mask Set',
        img  : 'https://www.sephora.com/productimages/sku/s2252906-main-Lhero.jpg',
        options : [],
        cost : 30
    },
    {
        url : 'https://gear.slalom.com/SLA41/Employee+Store/Apparel/Men+s+Apparel/Bella+Canvas+Jersey+T-Shirt.axd?cid=2806',
        name : 'Slalom Gear T-Shirt',
        img  : 'https://gear.slalom.com/images/products/dirs/41%2013000/41-13000RoyalBlueA.jpg',
        options : [
            { name : 'size', options : [ 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL' ]},
            { name : 'color', options : [ 'Grey', 'Blue' ]}
        ],
        cost : 10
    }
];

export default storeItems;