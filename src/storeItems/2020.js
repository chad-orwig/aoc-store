const storeItems =  [
    {
        url : 'https://www.amazon.com/CanaKit-Raspberry-4GB-Starter-Kit/dp/B07V5JTMV9/ref=sr_1_3',
        name : 'Raspberry Pi 4 Starter Kit',
        img : 'https://images-na.ssl-images-amazon.com/images/I/817DclokSqL._AC_SL1500_.jpg',
        options : [],
        dollar : 100
    },
    {
        url : 'https://gear.slalom.com/SLA41/Employee+Store/Apparel/Men+s+Apparel/Bella+Canvas+Jersey+T-Shirt.axd?cid=2760',
        name : 'Slalom Gear T-Shirt',
        img  : 'https://gear.slalom.com/images/products/dirs/41%2013000/41-13000RoyalBlueA.jpg',
        options : [
            { name : 'Size', options : [ 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL' ]},
            { name : 'Color', options : [ 'Grey', 'Blue' ]}
        ],
        dollar : 8
    },
    {
        url : 'https://gear.slalom.com/SLA41/Employee+Store/Apparel/All+Apparel/Quad+Pullover.axd',
        name : 'Quad Pullover',
        img : 'https://gear.slalom.com/images/products/dirs/41%2014056/41-14056A.jpg',
        dollar : 30.29,
        options : [
            { name : 'Size', options : [ 'XS', 'S', 'M', 'L', 'XL', '2XL' ]}
        ]
    },
    {
        url : 'https://gear.slalom.com/SLA41/Employee+Store/Apparel/Men+s+Apparel/Alternative+Eco-Jersey+Zip+Lightweight+Hoodie.axd?cid=2760',
        name : 'Slalom Hoodie - A',
        img : 'https://gear.slalom.com/images/products/dirs/41%2015000/41-15000BlackA.jpg',
        dollar : 29.8,
        options : [
            { name : 'Size', options : [ 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL' ]}
        ]

    },
    {
        url : 'https://gear.slalom.com/SLA41/Employee+Store/Apparel/All+Apparel/Adidas+Heathered+Sport+Shirt.axd',
        name : 'Men\'s Adidas Polo',
        img : 'https://gear.slalom.com/images/products/dirs/41%2011013/41-11013A.jpg',
        dollar : 41.50,
        options : [
            { name : 'Size', options : [ 'M', 'L', '2XL', '3XL' ]}
        ]
    },
    {
        url : 'https://gear.slalom.com/SLA41/Employee+Store/Apparel/All+Apparel/Ladies+Adidas+-+Heathered+Sport+Shirt.axd',
        name : 'Ladies Puma Heather Polo',
        img : 'https://gear.slalom.com/images/products/dirs/41%2021007/41-21007A.jpg',
        dollar : 40.25,
        options : [
            { name : 'Size', options : [ 'S', 'M', 'L', 'XL', '2XL' ]}
        ]
    },
    {
        name : '$20 Donation to Charity',
        img : 'https://mtypks.org/wp-content/uploads/2018/10/mtyp-name-your-own-price-donation-image.png',
        dollar : 20,
        options : [
            { name : 'Cause', options : [ 'Alzheimer\'s Research', 'Parkinson\'s Research', 'American Cancer Society', 'Local McDonald House Charities']}
        ]
    },
    {
        name : 'Custom AoC Belt Logo 30 oz Yeti Tumbler',
        img : 'https://www.yeti.com/dw/image/v2/BBRN_PRD/on/demandware.static/-/Sites-masterCatalog_Yeti/default/dwf7d350a5/images/pdp-Rambler/Rambler%20Tumbler%2030oz/White/180027-White-Drinkware-Studio-Website-Assets-30oz-OH-1680x1024.jpg?sw=1152&sfrm=jpg&q=100',
        dollar : 60
    },
    {
        name : 'NordVPN 18 Month Subscription',
        img : 'https://images-na.ssl-images-amazon.com/images/I/81wapg7MoLL._AC_SL1500_.jpg',
        url : 'https://www.amazon.com/gp/product/B0741DHY3Z/ref=as_li_qf_sp_asin_il_tl',
        dollar : 100
    },
    {
        name : 'Basic Phone Charging Pad',
        url : 'https://www.amazon.com/Anker-Wireless-PowerWave-Upgraded-Fast-Charging/dp/B07THHQMHM/ref=sr_1_3',
        img : 'https://images-na.ssl-images-amazon.com/images/I/6114qzNg-3L._AC_SL1500_.jpg',
        dollar : 12
    },
    {
        name : 'Camping Esspresso Maker',
        url : 'https://www.amazon.com/Minipresso-Portable-Espresso-Compatible-Manually/dp/B00VTA9F6U/ref=sr_1_5?dchild=1&keywords=portable+espresso&qid=1605206646&sr=8-5',
        img : 'https://images-na.ssl-images-amazon.com/images/I/61U70%2Bev8FL._AC_SL1001_.jpg',
        dollar : 50
    },
    {
        name : 'Google Nest Hub',
        url : 'https://store.google.com/product/google_nest_hub',
        img : 'https://lh3.googleusercontent.com/RjaBc8Q2dAPSsunfK5KwEMGzZzugCwZL0khwZAFfhbz9xIjfVAV3Y9wWIc5adf_9qSdo=w2288',
        dollar : 90,
        options : [
            { name : 'Color', options : [ 'Chalk', 'Charcoal', 'Aqua', 'Sand']}
        ]
    },
    {
        name : 'Google Stadia Premier Edition',
        img : 'https://lh3.googleusercontent.com/4yZeYVAnZmUGkr9GtVAO2aDLyTHe-wJcbv_eMtusJMMEjDTJ3FElv0_zSF6dYKAUZSM=w2288',
        url : 'https://store.google.com/product/stadia',
        dollar : 100
    },
    {
        name : 'Chromecast With Google TV',
        img : 'https://lh3.googleusercontent.com/7vxGbgFArMQ3DZ4kYmLuuSOYyynyMMEnpYy_EITwrnP2y5beVTsLVsJqN0y4lXq5w_peM2bj0MljAmjMYCUcYg=w1890',
        url : 'https://store.google.com/product/chromecast_google_tv',
        dollar : 50
    },
    {
        name : 'Google Nest Mini',
        url : 'https://store.google.com/product/google_nest_mini',
        img : 'https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D1600%252C1067%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C1067%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-10%252Fefd931e0-ef58-11e9-bdef-b2beac92b25c%26client%3Da1acac3e1b3290917d92%26signature%3Da1b1d7d1d92dc7d0ce104c52ab4fcf4c3a2f6ba9&client=amp-blogside-v2&signature=ee12299a4f025cd000209797223cf3aac0d23310',
        dollar : 49,
        options : [
            { name : 'Color', options: ['Chalk', 'Charcoal', 'Sand', 'Sage', 'Sky']}
        ]
    },
    {
        name : 'Google Nest Audio',
        url : 'https://store.google.com/product/nest_audio',
        img : 'https://lh3.googleusercontent.com/HiWaIT9vn0iPHu92ozZUNg5F28T3Aq2XppyAwOiXoEQyHWuSJe4FyWoNHyBzkh9rk4tfXKhdwAaErmS8qPwJqPc=w1890',
        dollar : 100
    },
    {
        name : 'Nesspresso Coffee Maker',
        url : 'https://www.amazon.com/Nespresso-DeLonghi-ENV120GY-Espresso-Machine/dp/B084GY57Y5/ref=sr_1_8',
        img : 'https://images-na.ssl-images-amazon.com/images/I/613VLOs7plL._AC_SL1500_.jpg',
        dollar : 130,
        options : [
            { name : 'Color', options : ['Graphite Metal', 'Matte Black', 'Red' ]}
        ]
    },
    {
        name : 'Keychron K2 Mechanical Keyboard',
        url : 'https://cdn.shopify.com/s/files/1/0059/0630/1017/products/K2-LED-Red_f28b594f-9bde-41d3-99ff-c089037b5627_1800x1800.jpg?v=1572842100',
        img : 'https://cdn.shopify.com/s/files/1/0059/0630/1017/products/Keychron-K2-wireless-mechanical-keyboard-for-Mac-Windows-iOS-Gateron-switch-red-with-type-C-RGB-white-backlight_1800x1800.jpg',
        dollar : 76,
        options : [
            { name : 'Version', options : [ 'White', 'RGB', 'RGB With Aluminum Frame']},
            { name : 'Switch', options : [ 'Red', 'Brown', 'Blue']}
        ]
    },
    {
        name : '6 Month Subcription to Audible',
        img : 'https://m.media-amazon.com/images/G/01/Audible/en_US/images/creative/A4-746_Tabrefreshbookwall_LP_Benefits_Bookwall_v3.png',
        url : 'https://www.amazon.com/hz/audible/gift-membership-detail?ref=adbl_mdp_dt_paid_annual_so',
        dollar : 90
    },
    {
        name : 'Aeropress',
        url : 'https://www.amazon.com/AeroPress-Coffee-Espresso-Maker-Bitterness/dp/B0047BIWSK/ref=sr_1_5',
        img : 'https://images-na.ssl-images-amazon.com/images/I/71P5EQ1CqpL._AC_SL1500_.jpg',
        dollar : 30
    },
    {
        name : '$100 Donation to Charity',
        img : 'https://mtypks.org/wp-content/uploads/2018/10/mtyp-name-your-own-price-donation-image.png',
        dollar : 100,
        options : [
            { name : 'Cause', options : [ 'Alzheimer\'s Research', 'Parkinson\'s Research', 'American Cancer Society', 'Local McDonald House Charities']}
        ]
    },
    {
        name : 'Gooseneck Electric Kettle',
        url : 'https://www.amazon.com/Gooseneck-Electric-Variable-Temperature-Control/dp/B08CVDPWB3',
        img : 'https://images-na.ssl-images-amazon.com/images/I/81OG4ZrJl0L._AC_SL1500_.jpg',
        dollar : 60
    },
    {
        name : 'Slalom Spice Container',
        url : 'https://gear.slalom.com/Product+Tags/Limited+Supply+Product+Items/Bamboo+Container.axd?cid=2805',
        img : 'https://gear.slalom.com/images/products/dirs/41%2055018/41-55018A.jpg',
        dollar : 4
    },
    {
        name : 'Slalom Lunch Box',
        url : 'https://gear.slalom.com/SLA41/Employee+Store/Accessories/Bags/Recycled+4+Can+Lunch+Cooler.axd?cid=2819',
        img : 'https://gear.slalom.com/images/products/dirs/41%2046065/41-46065A.jpg',
        dollar : 5.75
    },
    {
        name : 'Slalom Travel Cooler',
        url : 'https://gear.slalom.com/SLA41/Team+Store/In+Stock/Collapsible+Party+Cooler.axd?cid=2819',
        img : 'https://gear.slalom.com/images/products/dirs/41%2052015/41-52015A.jpg',
        dollar : 25.75
    },
    {
        name : 'Slalom Water Bottle',
        img : 'https://gear.slalom.com/images/products/dirs/41%2052010/41-52010A.jpg',
        url : 'https://gear.slalom.com/SLA41/Employee+Store/Accessories/Drinkware/h2go+silo+-+powder.axd?cid=2761',
        dollar : 12.85
    },
    {
        name : 'Anker Power Bank',
        img : 'https://images-na.ssl-images-amazon.com/images/I/615GoBqVs8L._AC_SL1500_.jpg',
        url : 'https://www.amazon.com/dp/B0832VKBFJ',
        dollar : 40
    },
    {
        name : 'Tungsten Cube',
        url : 'https://www.amazon.com/Tungsten-Cube-1-5-One-Kilo/dp/B00XZBIJLS',
        img : 'https://images-na.ssl-images-amazon.com/images/I/61xgSKE-rqL._SL1500_.jpg',
        dollar : 170
    },
    {
        name : '24 Pack of Blenheim Ginger Ale (Chad\'s Favorite)',
        url : 'https://www.blenheimgingerale.com/products/',
        img : 'https://www.shopblenheimgingerale.com/v/vspfiles/photos/001-2.jpg',
        dollar : 33,
        options : [
            { name : 'Variety', options : [ 'Hot', 'Not as Hot', 'Diet', 'Half Hot/Half Not as Hot']}
        ]
    },
    {
        name : 'Tea Infuser',
        url : 'https://www.amazon.com/Threaded-Connection-Stainless-Extended-Seasonings/dp/B075K57B73/ref=sr_1_4',
        img : 'https://images-na.ssl-images-amazon.com/images/I/61FDiSD3OhL._AC_SL1000_.jpg',
        dollar : 8
    },
    {
        name : 'Coldbrew Coffee Maker',
        url : 'https://www.amazon.com/dp/B071ZWR7M8',
        img : 'https://images-na.ssl-images-amazon.com/images/I/71jlAVRFLkL._AC_SL1500_.jpg',
        dollar : 27
    },
    {
        name : 'Slalom Carhartt Hat',
        url : 'https://gear.slalom.com/SLA41/Employee+Store/Apparel/All+Apparel/Carhartt+Rugged+Series+Cap.axd?cid=2797',
        img : 'https://gear.slalom.com/images/products/dirs/41%2031098/41-31098A.jpg',
        dollar : 20
    },
    {
        name : 'Adult Coloring Book',
        url : 'https://www.amazon.com/Coloring-Books-Adults-Relaxation-Flowers/dp/1940282896/',
        img : 'https://images-na.ssl-images-amazon.com/images/I/61RylXkNSdL.jpg',
        dollar : 7
    },
    {
        name : 'Letterboard',
        url : 'https://www.amazon.com/dp/B073Q25M4J/ref=cm_sw_r_sms_apa_i_OdQ3Db4B4PNRF',
        img : 'https://images-na.ssl-images-amazon.com/images/I/81imPDikS0L._AC_SL1500_.jpg',
        dollar : 20,
        options : [
            {
                name : 'Color',
                options : [
                    'Black',
                    'Black and White',
                    'Gray',
                    'Coral',
                    'Evergreen',
                    'Flamingo',
                    'Grayscale',
                    'Greener Grass',
                    'Hot Pink',
                    'Lavender',
                    'Light Blue',
                    'Light Pink',
                    'Lime Green',
                    'Navy',
                    'Perfectly Purple',
                    'Rainbow',
                    'Red',
                    'Royal Purple',
                    'Rusty Red',
                    'Sangria',
                    'Saphire Blue',
                    'Seafoam Green',
                    'Sunburst',
                    'Tantalizing Teal',
                    'Vivid Orange',
                    'White',
                    'Yellow'
                ]
            }
        ]
    },
    {
        name : 'Cold Roll Massager',
        url : 'https://www.amazon.com/dp/B01EKMN9LA/ref=cm_sw_r_sms_apa_i_IiQ3Db2BY3FN4',
        img : 'https://images-na.ssl-images-amazon.com/images/I/71nx3VOOAJL._AC_SL1500_.jpg',
        dollar : 40
    },
    {
        name : 'AoC T-Shirt',
        url : 'https://teespring.com/adventofcode-2019?pid=2',
        img : 'https://vangogh.teespring.com/v3/image/FrlKMefV2MqpSxWRlTmb3G_faH0/480/560.jpg',
        dollar : 22,
        options : [
            { name : 'Size', options : ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', 'LT', 'XLT', '2XLT', '3XLT', '4XLT']},
            { name: 'Color', options: ['Grey', 'Navy']}
        ]
    },
    {
        name : 'AoC Mug',
        url : 'https://teespring.com/adventofcode-2019?pid=658',
        img : 'https://vangogh.teespring.com/v3/image/AvADWBK9MBbtjPIw0xzMwNX-WYE/480/560.jpg',
        dollar : 15
    },
    {
        name : 'AoC Sticker',
        url : 'https://teespring.com/adventofcode-2019?pid=663',
        img : 'https://vangogh.teespring.com/v3/image/BoDg1pUavPRC4bESGh2SqOWSXZ4/480/560.jpg',
        dollar : 6
    },
    {
        name : 'AoC Hoodie',
        url : 'https://teespring.com/adventofcode-2019?pid=212',
        img : 'https://vangogh.teespring.com/v3/image/j_d0B3g2ljqXUu3fLdR3e1P00rQ/480/560.jpg',
        dollar : 39, 
        options : [
            { name : 'Size', options : ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL']},
            { name: 'Color', options: [ 'Grey', 'Navy' ]}
        ]
    },
    {
        name : 'Echo Dot (4th Gen)',
        url : 'https://www.amazon.com/All-New-Echo-Dot-4th-Gen/dp/B07XJ8C8F5/',
        img : 'https://images-na.ssl-images-amazon.com/images/I/61eDaLg-%2BrL._AC_SL1000_.jpg',
        dollar : 40,
        options : [
            { name : 'Color', options : [ 'Charcoal', 'Glacier White', 'Twilight Blue' ]}
        ]
    },
    {
        name : 'Echo Show 8',
        url : 'https://www.amazon.com/Echo-Show-8/dp/B07PF1Y28C/ref=sr_1_2',
        img : 'https://images-na.ssl-images-amazon.com/images/I/61grXNrQeZL._AC_SL1000_.jpg',
        dollar : 104,
        options : [
            { name : 'Color', options : [ 'Charcoal', 'Sandstone']}
        ]
    },
    {
        name : 'Amazon Echo 4th Gen',
        url : 'https://www.amazon.com/Staging-Product-Not-Retail-Sale/dp/B085HK4KL6',
        img : 'https://images-na.ssl-images-amazon.com/images/I/61sp69Abq%2BL._AC_SL1000_.jpg',
        dollar : 100,
        options : [
            { name : 'Color', options : [ 'Charcoal', 'Glacier White', 'Twilight Blue' ]}
        ]
    },
    {
        name : 'Anker Bluetooth Speaker',
        url : 'https://www.amazon.com/dp/B01HTH3C8S',
        img : 'https://d2211byn0pk9fi.cloudfront.net/spree/products/65445/product/A3101111_TD03.jpg?1517462852',
        dollar : 21
    },
    {
        name : 'Roku Ultra',
        url : 'https://www.roku.com/products/roku-ultra',
        img : 'https://cigars.roku.com/v1/http%3A%2F%2Fimage.roku.com%2Fw%2Frapid%2Fimages%2Fpdp-carousel-items%2F5dbb1b0c-e132-4dab-8e3f-06021bb8b48e.png',
        dollar : 100
    },
    {
        name : 'Fire TV Six-Faced, Regular Polyhedron',
        url : 'https://www.amazon.com/all-new-fire-tv-cube-with-alexa-voice-remote/dp/B07KGVB6D6/ref=sr_1_2',
        img : 'https://images-na.ssl-images-amazon.com/images/I/41fziVetM7L._AC_SL1000_.jpg',
        dollar : 120
    },
    {
        name : 'Kindle',
        dollar : 110,
        img : 'https://images-na.ssl-images-amazon.com/images/I/61ntJTLVtCL._AC_SL1000_.jpg',
        url : 'https://www.amazon.com/Kindle-Now-with-Built-in-Front-Light/dp/B07FPX819Q',
        options : [
            { name : 'Color', options : [ 'White', 'Black' ]}
        ]
    },
    {
        name : 'Arduino Smart Car Starter Set',
        url : 'https://www.amazon.com/ELEGOO-Tracking-Ultrasonic-Intelligent-Educational/dp/B07KPZ8RSZ/ref=sr_1_8',
        dollar : 70,
        img : 'https://images-na.ssl-images-amazon.com/images/I/61ZlKT5cWxL._AC_SL1200_.jpg'
    },
    {
        name : 'Arduino Starter Set',
        url : 'https://images-na.ssl-images-amazon.com/images/I/81KvpTJQ9tL._SL1500_.jpg',
        dollar : 37,
        img : 'https://images-na.ssl-images-amazon.com/images/I/91O05A7aWXL._SL1500_.jpg'
    },
    {
        name : 'Anova Sous Vide',
        url : 'https://www.amazon.com/Anova-Culinary-Precision-Bluetooth-Included/dp/B07C7PW3PC/',
        dollar : 130,
        img : 'https://images-na.ssl-images-amazon.com/images/I/71WAEEysRpL._AC_SL1500_.jpg'
    },
    {
        name : 'Grip Strengthener Set',
        url : 'https://www.amazon.com/Heavy-Grips-Hand-Grippers-Strengtheners/dp/B0017OSE1A',
        img : 'https://images-na.ssl-images-amazon.com/images/I/71uASeRd3BL._SL1000_.jpg',
        dollar : 30
    }
];

export default storeItems;