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
        name : 'Ladies Adidas Polo',
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
        name : 'Camping Espresso Maker',
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
        name : 'Nespresso Coffee Maker',
        url : 'https://www.amazon.com/Nespresso-DeLonghi-ENV120GY-Espresso-Machine/dp/B084GY57Y5/ref=sr_1_8',
        img : 'https://images-na.ssl-images-amazon.com/images/I/613VLOs7plL._AC_SL1500_.jpg',
        dollar : 130,
        options : [
            { name : 'Color', options : ['Graphite Metal', 'Matte Black', 'Red' ]}
        ]
    },
    {
        name : 'Keychron K2 Mechanical Keyboard',
        url : 'https://www.keychron.com/products/keychron-k2-wireless-mechanical-keyboard',
        img : 'https://cdn.shopify.com/s/files/1/0059/0630/1017/products/Keychron-K2-wireless-mechanical-keyboard-for-Mac-Windows-iOS-Gateron-switch-red-with-type-C-RGB-white-backlight_1800x1800.jpg',
        dollar : 89,
        options : [
            { name : 'Version', options : [ 'White', 'RGB', 'RGB/Aluminum Frame'], upcharge: [0, 2, 4]},
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
        img : 'https://images-na.ssl-images-amazon.com/images/I/41311aYn-dL._AC_SL1200_.jpg',
        url : 'https://www.amazon.com/dp/B071G7TL2C',
        dollar : 26
    },
    {
        name : 'Tungsten Cube',
        url : 'https://www.amazon.com/Tungsten-Cube-1-5-One-Kilo/dp/B00XZBIJLS',
        img : 'https://images-na.ssl-images-amazon.com/images/I/61xgSKE-rqL._SL1500_.jpg',
        dollar : 140
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
    },
    {
        name: 'Slalom Mesh Cap',
        url: 'https://gear.slalom.com/SLA41/Employee+Store/Apparel/All+Apparel/Performance+Mesh+Cap.axd',
        img: 'https://gear.slalom.com/images/products/dirs/41%2031008/41-31008A.jpg',
        dollar: 12.75
    },
    {
        name: 'Slalom Sweatshirt',
        url: 'https://gear.slalom.com/SLA41/Employee+Store/Apparel/All+Apparel/Bella+Canvas+Unisex+Raglan+Sweatshirt.axd',
        img: 'https://gear.slalom.com/images/products/dirs/41%2014005/41-14005A.jpg',
        dollar: 29,
        options: [
            { name : 'Size', options : [ 'S', 'M', 'L', 'XL', '2XL' ]}
        ]
    },
    {
        name: 'Slalom Sweatpants',
        url: 'https://gear.slalom.com/SLA41/Employee+Store/Apparel/All+Apparel/Alternative+Eco-Fleece+Jogger.axd',
        img: 'https://gear.slalom.com/images/products/dirs/41%2016008/41-16008A.jpg',
        dollar: 36.8,
        options: [
            { name : 'Size', options : [ 'S', 'M', 'L', 'XL', '2XL' ]}
        ]
    },
    {
        name: 'Slalom Baseball 3/4-Sleeve',
        url: 'https://gear.slalom.com/SLA41/Employee+Store/Apparel/All+Apparel/New+Era+Heritage+Blend+3+4-Sleeve+Baseball+Raglan.axd',
        img: 'https://gear.slalom.com/images/products/dirs/41%2013007/41-13007A.jpg',
        dollar: 19.55,
        options: [
            { name : 'Size', options : [ 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL' ]}
        ]
    },
    {
        name: 'Pandemic: Legacy Season 1',
        url: 'https://www.amazon.com/Pandemic-Legacy-Season-1-Red/dp/B00TQ0DXR2/',
        img: 'https://images-na.ssl-images-amazon.com/images/I/A1c9X%2BEUeXL._AC_SL1500_.jpg',
        dollar: 65
    },
    {
        name: 'Cyberpunk 2077',
        url: 'https://www.amazon.com/Cyberpunk-2077-PlayStation-4/dp/B07DJWBYKP',
        img: 'https://images-na.ssl-images-amazon.com/images/I/914o8-wHBmL._SL1500_.jpg',
        dollar: 60,
        options: [
            { name: 'Platform', options: [ 'PS4', 'Xbox One', 'PC' ]}
        ]
    },
    {
        name: 'Spider-Man: Miles Morales',
        url: 'https://www.amazon.com/Marvels-Spider-Man-Miles-Morales-Launch-PlayStation/dp/B08FC5J867',
        img: 'https://m.media-amazon.com/images/I/71xpcnEYHaL._SL1500_.jpg',
        dollar: 60,
        options: [
            { name: 'Platform', options: [ 'PS4', 'PS5' ]}
        ]
    },
    {
        name: 'Hyrule Warriors: Age of Calamity',
        url: 'https://www.amazon.com/Hyrule-Warriors-Age-Calamity-Nintendo-Switch/dp/B08HP4K7KC',
        img: 'https://sickr.files.wordpress.com/2020/10/hyrule_warriors_age_of_calamity-.jpg',
        dollar: 60,
        options: [
            { name: 'Platform', options: [ 'PS4', 'PS5' ]}
        ]
    },
    {
        name: 'Slalom Camp Mug',
        url: 'https://gear.slalom.com/SLA41/Employee+Store/Accessories/Drinkware/MiiR+Vacuum+Insulated+Camp+Cup+-+12+Oz.axd',
        img: 'https://gear.slalom.com/images/products/dirs/41%2052889/41-52889A.jpg',
        dollar: 23.5,
    },
    {
        name: 'Slalom Glass Tumbler',
        url: 'https://gear.slalom.com/SLA41/Employee+Store/Accessories/Drinkware/Ello+Glass+Tumbler+20+oz.axd',
        img: 'https://gear.slalom.com/images/products/dirs/41%2052016/41-52016A.jpg',
        dollar: 21.75,
    },
    {
        name: 'Slalom Ceramic Mug',
        url: 'https://gear.slalom.com/SLA41/Employee+Store/Accessories/Drinkware/Sienna+Ceramic+Mug.axd',
        img: 'https://gear.slalom.com/images/products/dirs/41%2052022/41-52022A.jpg',
        dollar: 5.1,
    },
    {
        name: 'Slalom Duffel Bag',
        url: 'https://gear.slalom.com/SLA41/Employee+Store/Accessories/Bags/CB+19+Cotton+Weekender+Duffel.axd',
        img: 'https://gear.slalom.com/images/products/dirs/41%2044095/41-44095A.jpg',
        dollar: 47.25,
    },
    {
        name: 'Novelty Graphic Blanket',
        url: 'https://www.amazon.com/ZHONGKUI-Blanket-Hamburger-Flannel-Seasons/dp/B08B83ZPGH',
        img: 'https://m.media-amazon.com/images/I/71a5ObZBhHL._AC_SL1200_.jpg',
        dollar: 47,
        options: [
            { name: 'Graphic', options: [
                'Advocado', ' Axolotl', 'Bear', 'Black Cat',
                'Marble Water', 'Blue Ocean', 'Bohemia Feathers',
                'Boho Elephant', 'Boston Terrier', 'Bulldog',
                'Butterfly', 'Purple Camo', 'Cat', 'Peacock',
                'Music Note', 'Cow', 'Shark', 'Cactus', 'Floral',
                'French Bulldog',  'Pandas', 'Sushi', 'Dinosaurs',
                'Dog Print', 'Elephant', 'Flamingo', 'Flower',
                'Fruit', 'Galaxy', 'Geometric', 'Glitter',
                'Hamburger', 'Healing Thoughts', 'Hedgehog',
                'I Love You', 'Ink', 'Kiwi', 'Koala', 
                'Leopard Skin', 'Mandela'
            ]}
        ]
    },
    {
        name: 'Digital Picture Frame',
        url: 'https://www.amazon.com/dp/B0815ZZ29C',
        img: 'https://images-na.ssl-images-amazon.com/images/I/61X67Zhx42L._AC_SL1001_.jpg',
        dollar: 130
    },
    {
        name: 'Ring Doorbell',
        url: 'https://www.amazon.com/dp/B07WGJ8XWZ',
        img: 'https://images-na.ssl-images-amazon.com/images/I/51oJgHxW2eL._SL1000_.jpg',
        dollar: 100,
        options: [
            { name: 'Color', options: [ 'Satin Nickel', 'Venetian Bronze' ]}
        ]
    },
    {
        name: '3 Oz. Plum Deluxe Tea',
        url: 'https://www.plumdeluxe.com/teashop?orderby=popularity',
        img: 'https://www.plumdeluxe.com/wp-content/uploads/magictoolbox_cache/cf3e6ec01aac7cb79461bcfe9d0d075e/4/1/41245/thumb650x650/3628692511/plum-deluxe-tea1.jpg',
        dollar: 25,
        options: [
            {
                name: 'Flavor',
                count: 3,
                options: [
                    'Magical Butterfly',
                    'Pumpkin Spice',
                    'Spicy Caramel Apple Cinnamon',
                    'Peaches n\' Cream',
                    'The Self Care Blend',
                    'Gratitude Blend',
                    'Vanilla Sugar Cookie',
                    'Butterfly Pea Flowers',
                    'Reading Nook Tea Blend',
                    'Peach Bellini',
                    'Sweet Spot Butterscotch',
                    'Creme Brulee Earl Grey',
                    "Porch Sippin' Pecan",
                    'Chocolate Hazelnut',
                    'Mindful Morning Tea',
                    'Strawberries & Cream Black',
                    'Delightful Morning Blend',
                    'Full Moon Chai',
                    'Royal Wedding Black',
                    'Autumn Almond Chai',
                    'Picard Black Tea',
                    'House Blend Black',
                    'Vanilla Latte Tea'
                ]
            }
        ]
    },
    {
        name: '$100 toward AirBnB Online Experiences',
        url: 'https://www.airbnb.com/s/experiences',
        img: 'https://media1.s-nbcnews.com/j/newscms/2020_24/3383031/airbnb-experiences-kr-2x1-tease-200608_2dbec30d590e15a8313561c9de552ad5.fit-760w.jpg',
        dollar: 100
    },
    {
        name : 'Hot Sauce Gift Pack',
        url : 'https://heatonist.com/collections/hot-sauce-gift-packs?page=1',
        img : 'https://cdn.shopify.com/s/files/1/2086/9287/products/Trioblueclassic1_1024x1024.jpg?v=1594911992',
        dollar: 30,
        options: [
            { 
                name: 'Variety', 
                options: [ 
                    'Season 12 Warmup', 'Season 12 Trio', 'Season 12 Heat',
                    'Season 13 Warmup', 'Season 13 Trio', 'Season 13 Heat',
                    'Dos Los XXX', 'Challenge Pack' 
                ],
                upcharge : [
                    0, 4, 3,
                    0, 5, 4,
                    4, 11
                ]
            }
        ]
    },
    {
        name: 'Infuse & Pour Alcohol Kit',
        url: 'https://www.uncommongoods.com/product/infuse-pour-alcohol-kit',
        img: 'https://www.uncommongoods.com/images/items/51000/51019_1_640px.jpg',
        options: [{
            name: 'Flavor',
            options: [
                'Navel Gazer Spiced Orange',
                'Blue Sunday Blueberry Lavender',
                'Parrot Head Strawberry Jalapeno',
                'Island Time Spicy Pineapple',
            ]
        }],
        dollar: 32
    },
    {
        name: 'Votes for Women Puzzle',
        img: 'https://www.uncommongoods.com/images/items/50700/50762_2_640px.jpg',
        url: 'https://www.uncommongoods.com/product/votes-for-women-puzzle',
        dollar: 27
    },
    {
        name: 'Mason Jar Indoor Herb Garden',
        url: 'https://www.uncommongoods.com/product/mason-jar-indoor-herb-garden',
        img: 'https://www.uncommongoods.com/images/items/43400/43428_1_640px.jpg',
        options: [{
            name: 'Herb',
            options: [ 'Basil', 'Cilantro', 'Mint', 'Oregano', 'Parsley', 'Sage']
        }],
        dollar: 27
    },
    {
        name: 'National Parks Puzzle',
        url: 'https://www.uncommongoods.com/product/vintage-national-parks-puzzle',
        img: 'https://www.uncommongoods.com/images/items/51600/51668_2_640px.jpg',
        dollar: 27
    },
    {
        name: 'Candlefish Candle',
        url: 'https://www.candlefish.com/collections/top-selling-fragrances',
        img: 'https://i.pinimg.com/474x/42/3d/bd/423dbd56011dafe59e3e36b857f01f84.jpg',
        dollar: 20,
        options : [
            {
                name: 'Variety',
                options: [  '04', '09', '25', '31', '70', '83']
            },
            {
                name: 'Size',
                options: [ '2.5 oz', '9 oz' ],
                upcharge: [ 0, 4 ]
            }
        ]
    },
    {
        name: 'ATL Necklace',
        url: 'https://www.admiralrow.com/products/atl-gold-necklace-best-seller',
        img: 'https://cdn.shopify.com/s/files/1/0502/7476/2931/products/ATL_Gold_Necklace_13_700x.jpg',
        dollar: 38,
        options: [{
            name: 'Size',
            options: ['16"', '18"']
        }]
    },
    {
        name: 'Chrome Yellow Coffee: "Neighborhood" Blend',
        img: 'https://chrome-yellow.square.site/uploads/1/3/1/5/131502172/s665635129870278260_p173_i3_w900.jpeg',
        url: 'https://www.chromeyellowtradingco.com/shop/cy-x-methodical-neighborhood-blend',
        dollar: 16,
        options: [{
            name: 'Grind',
            options: [
                'Whole Bean',
                'Grind for Drip',
                'Grind for French Press'
            ]
        }]
    },
    {
        name: 'Chrome Yellow Coffee: Point Counter Point Blend',
        img: 'https://images.squarespace-cdn.com/content/v1/52bc5ffae4b02f7251df986b/1572534779911-NRBPTN3F9OY8SKH37XO3/ke17ZwdGBToddI8pDm48kMHUi6nJs3XGQQD1dLtEzBN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URDu2r4KZan2FWgHloO1sB8gXNay9IiiFUhbkZDyBIKHBCNz6nEb8mveAFSbJeRRHQ/DSC_0207-5.jpg',
        url: 'https://www.chromeyellowtradingco.com/shop/chrome-yellow-coffee-point-counter-point',
        dollar: 17,
        options: [{
            name: 'Grind',
            options: [
                'Whole Bean',
                'Grind for Drip',
                'Grind for French Press'
            ]
        }]
    },
    {
        name: 'Men\'s French Rugby Polo',
        img: 'https://www.lecoqsportif.com/media/images/products/2021317/g_2021317_1.jpg',
        url: 'https://www.lecoqsportif.com/uk-en/e-shop/sport-HOMMEEU20FWFFR_POLO_REPL001-xv-de-france-polo.html',
        dollar: 100,
        options: [{
            name: 'Size',
            options: [
                'S',
                'M',
                'L',
                'XL',
                'XXL',
                'XXXL',
                '4XL'
            ]
        }]
    },
    {
        name: 'Woman\'s French Rugby Jersey',
        img: 'https://www.lecoqsportif.com/media/images/products/2020620/g_2020620_1.jpg',
        url: 'https://www.lecoqsportif.com/uk-en/e-shop/sport-FEMMEEU20FWFFR_XV_MAILLO021-xv-de-france-jersey.html',
        dollar: 100,
        options: [{
            name: 'Size',
            options: [
                'S',
                'M',
                'L',
                'XL'
            ]
        }]
    },
    {
        name: 'Unlock! Escape Room Game Set',
        url: 'https://www.amazon.com/Space-Cowboys-UNL07-Unlock-Adventures/dp/B086MBCG94',
        img: 'https://images-na.ssl-images-amazon.com/images/I/8131N9UQrBL._AC_SL1500_.jpg',
        dollar: 27,
        options: [{
            name : 'Set',
            options: [
                'Escape Adventures', // 19
                'Mystery Adventures', // 20
                'Secret Adventures', //24
                'Exotic Adventures', // 22
                'Timeless Adventures', //20
                'Epic Adventures', // 20
                'Star Wars' // 27
            ],
            upcharge : [ 0, 1, 5, 3, 1, 1, 8]
        }]

    },
    {
        name: 'Deluxe Silk Pillowcase',
        img: 'https://images-na.ssl-images-amazon.com/images/I/71G7OrufJ7L._AC_SL1500_.jpg',
        url: 'https://www.amazon.com/dp/B01D1U7ZE4',
        dollar: 50,
        options: [{
            name: 'Color',
            options: [ 
                'Burgundy', 'Dark Green', 'English Rose', 'Light Blue',
                'Light Green', 'Moonless Night', 'Natural White',
                'Navy', 'Silver Pearl', 'Taupe', 'Deep Lavender'
            ]
        },
        {
            name: 'Size',
            options : [
                'Queen', // 50 -- 28
                'King', //54 -- 29
                'Queen - Set of 2', //98 -- 41
                'King - Set of 2' //108 -- 43
            ],
            upcharge: [ 0, 1, 13, 15 ]
        }]

    },
    {
        name: 'Isle of Cats Board Game',
        url: 'https://www.amazon.com/City-Games-Isle-Cats-Multi-Colored/dp/B085WC6GZG',
        img: 'https://images-na.ssl-images-amazon.com/images/I/81Bpt-MR0-L._AC_SL1500_.jpg',
        dollar: 45
    },
    {
        name: 'Horrified Board Game',
        url: 'https://www.amazon.com/Ravensburger-Horrified-Universal-Monsters-Strategy/dp/B07QQHTD4Q',
        img: 'https://images-na.ssl-images-amazon.com/images/I/A1142Z%2B%2B2KL._AC_SL1500_.jpg',
        dollar: 30
    },
    {
        name: 'The Crew - Quest for Planet Nine Board Game',
        url: 'https://www.amazon.com/Cooperative-Adventure-Kosmos-Missions-Trick-Taking/dp/B084GP7X3P',
        img: 'https://images-na.ssl-images-amazon.com/images/I/81RcxV94mKL._AC_SL1500_.jpg',
        dollar: 15
    },
    {
        name: 'Atlanta Rocks Glass',
        url: 'https://www.uncommongoods.com/product/urban-map-glass#234330000009',
        img: 'https://www.uncommongoods.com/images/items/23400/234330000009_1_640px.jpg',
        dollar : 23
    },
    {
        name: 'National Park Poster',
        url: 'https://www.andersondesigngroupstore.com/a/collections/shop-by-product/1850501431345/61-american-national-parks',
        img: 'https://s3.amazonaws.com/adg-bucket/great-smoky-mountains-national-park-tranquility/2667-env-chair-14460074786865.jpg',
        dollar : 17,
        options : [
            {
                name: 'Picture',
                options: []
            },
            {
                name: 'Size',
                options: [ 
                    '8x10', // 17 - 14
                    '11x14', // 20 -16
                    '18x24', // 40 - 24
                    '24x32', // 70 - 34
                    '30x40' // 100 - 41
                ],
                upcharge : [ 0, 2, 10, 20, 27]
            }
        ]

    },
    {
        name: 'Drink Trade Coffee Subscription',
        url: 'https://www.drinktrade.com/gift-subscription/p/1858',
        img: 'https://res.cloudinary.com/roastcollective/image/upload/h_1600,w_1600,f_jpg,fl_progressive:steep,q_auto:good/v1605197013/solidus/vp36ein1ji4d7mgvdvp1.png',
        dollar: 60,
        options:[{
            name: 'Amount',
            options: [ '3 Bags', '6 Bags' ],
            upcharge: [ 0, 15 ]
        }]
    },
    {
        name: 'Make Your Own Hotsauce Kit',
        url: 'https://www.uncommongoods.com/product/make-your-own-hot-sauce-kit',
        img: 'https://www.uncommongoods.com/images/items/25700/25781_1_640px.jpg',
        dollar: 47
    },
    {
        name: 'Old Fasioned Infusion Kit',
        url: 'https://www.uncommongoods.com/product/old-fashioned-whiskey-infusion-kit',
        img: 'https://www.uncommongoods.com/images/items/26200/26227_1_640px.jpg',
        dollar: 42
    }
]

export default storeItems;