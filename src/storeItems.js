const storeItems =  [
    {
        url : 'https://www.amazon.com/CanaKit-Raspberry-4GB-Starter-Kit/dp/B07V5JTMV9/ref=sr_1_3?keywords=raspberry+pi&qid=1574622190&sr=8-3',
        name : 'Raspberry Pi 4 Starter Kit',
        img : 'https://images-na.ssl-images-amazon.com/images/I/81uUzI33kdL._SX679_.jpg',
        options : [],
        dollar : 100
    },
    {
        url  : 'https://www.sephora.com/product/merry-bright-P449886?icid2=products%20grid:p449886',
        name : 'Summer Fridays\' Mask Set',
        img  : 'https://www.sephora.com/productimages/product/p449886-av-01-zoom.jpg',
        options : [],
        dollar : 64
    },
    {
        url : 'https://gear.slalom.com/SLA41/Employee+Store/Apparel/Men+s+Apparel/Bella+Canvas+Jersey+T-Shirt.axd?cid=2806',
        name : 'Slalom Gear T-Shirt',
        img  : 'https://gear.slalom.com/images/products/dirs/41%2013000/41-13000RoyalBlueA.jpg',
        options : [
            { name : 'Size', options : [ 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL' ]},
            { name : 'Color', options : [ 'Grey', 'Blue' ]}
        ],
        dollar : 8
    },
    {
        url : 'https://www.sephora.com/product/the-tea-tree-trio-P444054?icid2=biossance_fromthebrand_us_skugrid_ufe:p444054:product',
        name : 'Biossance -- The Tea Tree Trio',
        img : 'https://www.sephora.com/productimages/product/p444054-av-01-zoom.jpg',
        dollar : 29
    },
    {
        url : 'https://www.sephora.com/product/caviar-anti-aging-reg-multiplying-volume-duo-P449779?icid2=products%20grid:p449779',
        name : 'Alterna Haircare -- Anti Aging Multiplying Volumne Duo',
        img : 'https://www.sephora.com/productimages/product/p449779-av-01-zoom.jpg',
        dollar : 57
    },
    {
        url  : 'https://gear.slalom.com/SLA41/Employee+Store/Apparel/All+Apparel/New+Era+Heritage+Blend+3+4-Sleeve+Baseball+Raglan.axd',
        name : '3/4 Sleeve Baseball Raglan',
        img  : 'https://gear.slalom.com/images/products/dirs/41%2013007/41-13007A.jpg',
        dollar : 18.55,
        options : [
            { name : 'Size', options : [ 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL' ]}
        ]
    },
    {
        url : 'https://gear.slalom.com/SLA41/Employee+Store/Apparel/All+Apparel/Holt+Long+Sleeve+Tee+-+Infusion.axd',
        name : 'Holt Long Sleeve Tee',
        img : 'https://gear.slalom.com/images/products/dirs/41%2013018/41-13018A.jpg',
        dollar : 22.75,
        options : [
            { name : 'Size', options : [ 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL' ]}
        ]
    },
    {
        url : 'https://gear.slalom.com/SLA41/Employee+Store/Apparel/All+Apparel/Women+s+Heathered+Fleece+Pullover.axd',
        name : 'Women\'s Heathered Fleece Pullover',
        img : 'https://gear.slalom.com/images/products/dirs/41%2024056/41-24056A.jpg',
        dollar : 47.3,
        options : [
            { name : 'Size', options : [ 'XS', 'S', 'M', 'L', 'XL', '2XL' ]}
        ]
    },
    {
        url : 'https://gear.slalom.com/SLA41/Employee+Store/Apparel/All+Apparel/Quad+Pullover.axd',
        name : 'Quad Pullover',
        img : 'https://gear.slalom.com/images/products/dirs/41%2014056/41-14056A.jpg',
        dollar : 33.65,
        options : [
            { name : 'Size', options : [ 'XS', 'S', 'M', 'L', 'XL', '2XL' ]}
        ]
    },
    {
        url : 'https://gear.slalom.com/SLA41/Employee+Store/Apparel/Men+s+Apparel/Alternative+Eco-Jersey+Zip+Lightweight+Hoodie.axd?cid=2760',
        name : 'Slalom Hoodie',
        img : 'https://gear.slalom.com/images/products/dirs/41%2015000/41-15000BlackA.jpg',
        dollar : 29.8,
        options : [
            { name : 'Size', options : [ 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL' ]}
        ]

    },
    {
        url : 'https://gear.slalom.com/SLA41/Employee+Store/Apparel/All+Apparel/Puma+Heathered+Polo.axd',
        name : 'Puma Heathered Polo',
        img : 'https://gear.slalom.com/images/products/dirs/41%2011008/41-11008A.jpg',
        dollar : 56.8,
        options : [
            { name : 'Size', options : [ 'M', 'L', '2XL' ]}
        ]
    },
    {
        url : 'https://gear.slalom.com/SLA41/Employee+Store/Apparel/All+Apparel/Ladies+Puma+Heather+Polo.axd',
        name : 'Ladies Puma Heather Polo',
        img : 'https://gear.slalom.com/images/products/dirs/41%2021008/41-21008A.jpg',
        dollar : 45.44,
        options : [
            { name : 'Size', options : [ 'L', 'XL' ]}
        ]
    },
    {
        url : 'https://gear.slalom.com/SLA41/Team+Store/All/Love+Your+Future+Graphic+T+shirt.axd?cid=2760',
        name : 'Love Your Future Graphic T-Shirt',
        img : 'https://gear.slalom.com/images/products/dirs/41%2013008/41-13008A.jpg',
        dollar : 10.8,
        options : [
            { name : 'Size', options : [ 'S', 'M', 'L', 'XL', '2XL' ]}
        ]
        
    },
    {
        url : 'https://www.amazon.com/Ultrasonic-Aromatherapy-Diffuser-Changing-Essential/dp/B01MRORKQG/ref=sxbs_sxwds-stvp',
        name : 'Ultrasonic Aromatherapy Diffuser',
        img : 'https://images-na.ssl-images-amazon.com/images/I/61XzhkkfD1L._SL1000_.jpg',
        dollar : 94.45
    },
    {
        url : 'https://www.amazon.com/IELLO-IEL00072-Decrypto-Board-Game/dp/B0765KL7B8/ref=sr_1_1',
        name : 'Decrypto Board Game',
        img : 'https://images-na.ssl-images-amazon.com/images/I/81Yjom6iAwL._SL1500_.jpg',
        dollar : 19.98
    },
    {
        url : 'https://www.amazon.com/POWR-Wireless-Charging-Station-Samsung/dp/B07QX2PJMH/ref=sr_1_44',
        name : 'Phone Charging Pad',
        img : 'https://images-na.ssl-images-amazon.com/images/I/81%2Bz2NCxxfL._SL1500_.jpg',
        dollar : 59.99,
        options : [
            { name : 'Color', options : [ 'Black - Round', 'Black - Square', 'White - Round', 'White - Square' ]}
        ]
    },
    {
        name : '$20 Donation to Charity',
        img : 'https://mtypks.org/wp-content/uploads/2018/10/mtyp-name-your-own-price-donation-image.png',
        dollar : 20,
        options : [
            { name : 'Cause', options : [ 'Alzheimer\'s Research', 'Parkinson\'s Research', 'American Cancer Society']}
        ]
    }
];

export default storeItems;