const storeItems =  [
    {
        url : 'https://www.canakit.com/raspberry-pi/pi-4-kits',
        name : 'Raspberry Pi 4 Starter Kit',
        img : 'https://images-na.ssl-images-amazon.com/images/I/817DclokSqL._AC_SL1500_.jpg',
        options : [
            {
                name: 'Memory',
                options: [ '2GB', '4GB', '8GB' ],
                upcharge: [ 0, 20, 40 ]
            },
            {
                name: 'Storage',
                options: [ '32GB', '64GB (Requires 4GB+ Memory)', '128GB (Requires 4GB+ Memory)'],
                upcharge: [0, 20, 40]
            }
        ],
        dollar : 90
    },
    {
        name : 'Donation to Charity',
        img : 'https://mtypks.org/wp-content/uploads/2018/10/mtyp-name-your-own-price-donation-image.png',
        dollar : 20,
        options : [
            { name : 'Cause', options : [ 'Alzheimer\'s Research', 'Parkinson\'s Research', 'American Cancer Society', 'Local McDonald House Charities']},
            { 
                name: 'Amount',
                options: [ '$20', '$50', '$100', '$150'],
                upcharge: [0, 30, 80, 130]
            }
        ]
    },
    {
        name : 'Custom AoC Belt Logo 30 oz Yeti Tumbler',
        img : require('../images/HammyTheYeti.png'),
        dollar : 70
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
        dollar : 14
    },
    {
        name : 'Camping Espresso Maker',
        url : 'https://www.amazon.com/Minipresso-Portable-Espresso-Compatible-Manually/dp/B00VTA9F6U/ref=sr_1_5?dchild=1&keywords=portable+espresso&qid=1605206646&sr=8-5',
        img : 'https://images-na.ssl-images-amazon.com/images/I/61U70%2Bev8FL._AC_SL1001_.jpg',
        dollar : 55
    },
    {
        name : 'Google Nest Hub',
        url : 'https://store.google.com/product/google_nest_hub',
        img : 'https://lh3.googleusercontent.com/RjaBc8Q2dAPSsunfK5KwEMGzZzugCwZL0khwZAFfhbz9xIjfVAV3Y9wWIc5adf_9qSdo=w2288',
        dollar : 90,
        options : [
            { name : 'Color', options : [ 'Chalk', 'Charcoal', 'Mist', 'Sand']}
        ]
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
        dollar : 39,
        options : [
            { name : 'Color', options: ['Chalk', 'Charcoal', 'Sand', 'Sage', 'Sky']}
        ]
    },
    {
        name : 'Google Nest Audio',
        url : 'https://store.google.com/product/nest_audio',
        img : 'https://lh3.googleusercontent.com/HiWaIT9vn0iPHu92ozZUNg5F28T3Aq2XppyAwOiXoEQyHWuSJe4FyWoNHyBzkh9rk4tfXKhdwAaErmS8qPwJqPc=w1890',
        dollar : 90,
        options : [
            { name : 'Color', options: ['Chalk', 'Charcoal', 'Sand', 'Sage', 'Sky']}
        ]
    },
    {
        name : 'Nespresso Coffee Maker',
        url : 'https://www.amazon.com/Nespresso-DeLonghi-ENV120GY-Espresso-Machine/dp/B084GY57Y5/ref=sr_1_8',
        img : 'https://images-na.ssl-images-amazon.com/images/I/613VLOs7plL._AC_SL1500_.jpg',
        dollar : 160,
        options : [
            { name : 'Color', options : ['Graphite Metal', 'Matte Black', 'Red' ]}
        ]
    },
    {
        name : 'Keychron Mechanical Keyboard',
        url : 'https://www.amazon.com/stores/page/3E3C387A-504A-4387-A1A1-4DC76081B545',
        img : 'https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/1/AmazonStores/ATVPDKIKX0DER/b61157c9b5c76ca518cf4907bfbd60c7.w3000.h600._CR0%2C0%2C3000%2C600_SX3000_.jpg',
        dollar : 80,
        options : [
            {
                name: 'Model',
                link: 'https://www.keychron.com/blogs/news/difference-among-keychron-keyboards',
                options: [ 'K1', 'K2', 'K3', 'K4', 'K6', 'K8', 'K12' ], upcharge: [ 0, 0, 5, 0, 5, 15, 0 ]
            },
            { name : 'Backlight', options : [ 'White', 'RGB'], upcharge: [0, 10 ]},
            { name : 'Switch', options : [ 'Red', 'Brown', 'Blue']},
            { name: 'Hot Swappable?', options: ['No', 'Yes'], upcharge: [0, 10]}
        ]
    },
    {
        name : 'Subcription to Audible',
        img : 'https://m.media-amazon.com/images/G/01/Audible/en_US/images/creative/A4-746_Tabrefreshbookwall_LP_Benefits_Bookwall_v3.png',
        url : 'https://www.amazon.com/hz/audible/gift-membership-detail?ref=adbl_mdp_dt_paid_annual_so',
        dollar : 15,
        options: [
            {
                name: 'Months',
                options: [ '1', '3', '6', '12' ],
                upcharge : [ 0, 30, 75, 135 ]
            }
        ]
    },
    {
        name : 'Aeropress',
        url : 'https://www.amazon.com/AeroPress-Coffee-Espresso-Maker-Bitterness/dp/B0047BIWSK/ref=sr_1_5',
        img : 'https://images-na.ssl-images-amazon.com/images/I/71P5EQ1CqpL._AC_SL1500_.jpg',
        dollar : 30
    },
    {
        name : 'Gooseneck Electric Kettle',
        url : 'https://www.amazon.com/Gooseneck-Electric-Variable-Temperature-Control/dp/B08CVDPWB3',
        img : 'https://images-na.ssl-images-amazon.com/images/I/81OG4ZrJl0L._AC_SL1500_.jpg',
        dollar : 60
    },
    {
        name : 'Anker Power Bank',
        img : 'https://images-na.ssl-images-amazon.com/images/I/41311aYn-dL._AC_SL1200_.jpg',
        url : 'https://www.amazon.com/dp/B071G7TL2C',
        dollar : 30,
        options: [
            { name: 'Color', options:[ 'White', 'Black', 'Blue' ]}
        ]
    },
    {
        name : 'Tungsten Cube',
        url : 'https://www.amazon.com/Tungsten-Cube-1-5-One-Kilo/dp/B00XZBIJLS',
        img : 'https://images-na.ssl-images-amazon.com/images/I/61xgSKE-rqL._SL1500_.jpg',
        dollar : 180
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
        dollar : 10
    },
    {
        name : 'Coldbrew Coffee Maker',
        url : 'https://www.amazon.com/dp/B071ZWR7M8',
        img : 'https://images-na.ssl-images-amazon.com/images/I/71jlAVRFLkL._AC_SL1500_.jpg',
        dollar : 27
    },
    {
        name : 'Adult Coloring Book Set',
        url : 'https://www.amazon.com/Adult-Coloring-Book-Bundle-Butterflies/dp/B08L8F1264/ref=sr_1_5',
        img : 'https://m.media-amazon.com/images/I/91NTR8RJSNL._AC_SL1500_.jpg',
        dollar : 20,
        options: [{
            name: 'Set',
            options: [
                'Animals | Scenery | Geometric Shapes',
                'Up in the Air | Under the Sea | Into the Jungle',
                'Landmarks | Henna | Butterflies and Flowers',
                'All Nine Books'
            ],
            upcharge: [ 0, 0, 0, 35 ]
        }]
    },
    {
        name : 'Cold Roll Massager',
        url : 'https://www.amazon.com/dp/B01EKMN9LA/ref=cm_sw_r_sms_apa_i_IiQ3Db2BY3FN4',
        img : 'https://images-na.ssl-images-amazon.com/images/I/71nx3VOOAJL._AC_SL1500_.jpg',
        dollar : 50
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
        dollar : 6,
        options: [
            { name: 'Size', options: [ '3.6 x 5', '5 x 7'], upcharge: [0, 1 ]}
        ]
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
        dollar : 50,
        options : [
            { name : 'Color', options : [ 'Charcoal', 'Glacier White', 'Twilight Blue' ]}
        ]
    },
    {
        name : 'Echo Show 8',
        url : 'https://www.amazon.com/Echo-Show-8/dp/B07PF1Y28C/ref=sr_1_2',
        img : 'https://images-na.ssl-images-amazon.com/images/I/61grXNrQeZL._AC_SL1000_.jpg',
        dollar : 90,
        options : [
            { name : 'Color', options : [ 'Charcoal', 'Sandstone']}
        ]
    },
    {
        name : 'Amazon Echo 4th Gen',
        url : 'https://www.amazon.com/Staging-Product-Not-Retail-Sale/dp/B085HK4KL6',
        img : 'https://images-na.ssl-images-amazon.com/images/I/61sp69Abq%2BL._AC_SL1000_.jpg',
        dollar : 80,
        options : [
            { name : 'Color', options : [ 'Charcoal', 'Glacier White', 'Twilight Blue' ]}
        ]
    },
    {
        name : 'Anker Bluetooth Speaker',
        url : 'https://www.amazon.com/dp/B01HTH3C8S',
        img : 'https://d2211byn0pk9fi.cloudfront.net/spree/products/65445/product/A3101111_TD03.jpg?1517462852',
        dollar : 25
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
        dollar : 100
    },
    {
        name : 'Kindle',
        dollar : 80,
        img : 'https://images-na.ssl-images-amazon.com/images/I/61ntJTLVtCL._AC_SL1000_.jpg',
        url : 'https://www.amazon.com/Kindle-Now-with-Built-in-Front-Light/dp/B07FPX819Q',
        options : [
            { name : 'Color', options : [ 'White', 'Black' ]}
        ]
    },
    {
        name : 'Arduino Smart Car Starter Set',
        url : 'https://www.amazon.com/ELEGOO-Tracking-Ultrasonic-Intelligent-Educational/dp/B07KPZ8RSZ/ref=sr_1_8',
        dollar : 90,
        img : 'https://images-na.ssl-images-amazon.com/images/I/61ZlKT5cWxL._AC_SL1200_.jpg'
    },
    {
        name : 'Arduino Starter Set',
        url : 'https://www.amazon.com/ELEGOO-Project-Tutorial-Controller-Projects/dp/B01D8KOZF4/ref=sr_1_3',
        dollar : 39,
        img : 'https://images-na.ssl-images-amazon.com/images/I/91O05A7aWXL._SL1500_.jpg'
    },
    {
        name : 'Anova Sous Vide',
        url : 'https://www.amazon.com/Anova-Culinary-Precision-Bluetooth-Included/dp/B07C7PW3PC/',
        dollar : 110,
        img : 'https://images-na.ssl-images-amazon.com/images/I/71WAEEysRpL._AC_SL1500_.jpg'
    },
    {
        name: 'Novelty Graphic Blanket',
        url: 'https://www.amazon.com/ZHONGKUI-Blanket-Hamburger-Flannel-Seasons/dp/B08B83ZPGH',
        img: 'https://m.media-amazon.com/images/I/71a5ObZBhHL._AC_SL1200_.jpg',
        dollar: 40,
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
        name : 'Hot Sauce Gift Pack',
        url : 'https://heatonist.com/collections/hot-sauce-gift-packs?page=1',
        img : 'https://cdn.shopify.com/s/files/1/2086/9287/products/Trioblueclassic1_1024x1024.jpg?v=1594911992',
        dollar: 30,
        options: [
            { 
                name: 'Variety', 
                options: [ 
                    'Season 15 Warmup', 'Season 15 Trio', 'Season 15 Heat', 'Season 15 | 10 Pack',
                    'Season 16 Warmup', 'Season 16 Trio', 'Season 16 Heat',
                    'Los Calientes Trio', 'Keith\'s Trio', 'Original Trio'
                ],
                upcharge : [
                    0, 10, 8, 90,
                    2, 10, 12,
                    3, 3, 10,
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
                'Rose Ceremony Raspberry Rose',
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
                    '30x40', // 100 - 41
                    '36x48',
                ],
                upcharge : [ 0, 3, 23, 53, 83, 133]
            }
        ]

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
    },
    {
        name: 'Drink Infuser',
        url: 'https://www.amazon.com/Crucial-Detail-The-Porthole-Infuser/dp/B00PUSBGPA',
        img: 'https://images-na.ssl-images-amazon.com/images/I/51vtabKiQ5L._AC_.jpg',
        dollar: 125
    },
    {
        name: 'Ember Smart Mug',
        url: 'https://ember.com/products/ember-mug-2?variant=30843977826389',
        img: 'https://cdn.shopify.com/s/files/1/1080/6594/products/ember_black_CM210_600x.jpg?v=1600321021',
        dollar: 100,
        options: [
            {
                name: 'Color',
                options: [ 'White', 'Black', 'Grey' ]
            },
            {
                name: 'Size',
                options: [ '10 oz.', '14 oz.'],
                upcharge: [0, 30]
            }
        ]
    },
    {
        name: 'Logitech MX Master 3',
        img: 'https://m.media-amazon.com/images/I/614w3LuZTYL._AC_SL1500_.jpg',
        url: 'https://www.amazon.com/Logitech-Master-Advanced-Wireless-Mouse/dp/B07S395RWD/ref=sr_1_4',
        dollar: 100,
        options: [
            { name: 'Color', options: [ 'Graphite', 'Mid Grey' ]}
        ]
    },
    {
        name: 'Advanced Wars 1 + 2: Re-Boot Camp',
        url: 'https://www.amazon.com/Advance-Wars-Re-Boot-Camp-Nintendo-Switch/dp/B097B186JF/ref=sr_1_2',
        img: 'https://images.nintendolife.com/da981206b1cda/advance-wars-1plus2-re-boot-camp-cover.cover_large.jpg',
        dollar: 60
    },
    {
        name: 'Pokémon Legends: Arceus',
        url: 'https://www.amazon.com/Pokemon-Legends-Arceus-Nintendo-Switch/dp/B0914YGQSH/ref=sr_1_3',
        img: 'https://m.media-amazon.com/images/I/71HYKF4rO9L._SL1500_.jpg',
        dollar: 60
    },
    {
        name: 'KeyRelic Key Cap',
        url: 'https://www.etsy.com/shop/KeyRelic',
        img : 'https://i.etsystatic.com/23335264/r/il/a6df71/2919144452/il_1588xN.2919144452_183q.jpg',
        dollar: 90,
        options: [
            {
                name: 'Style',
                options: ['Lion', 'Greenman', 'The Wrath', 'The Judge', 'Immortal', 'Baron Harkonnen', 'Baron Harkonnen Skull']
            },
            {
                name: 'Material',
                options: [ 'Argentan Alloy', 'Solid Brass', 'High Polished Brass', 'Bronze', 'Sterling Silver'],
                upcharge: [ 0, 0, 0, 0, 85]
            }
        ]
    },
    {
        name: 'CleanCaps Pokémon 3 Key Cap Set',
        dollar: 70,
        url: 'https://www.etsy.com/shop/CleanCaps?ref=simple-shop-header-name&listing_id=1074137841',
        img: 'https://i.etsystatic.com/30945415/r/il/ca2290/3492822995/il_794xN.3492822995_8x8h.jpg',
        options: [{
            name: 'Set',
            options: [
                'Red, Blue, Yellow',
                'Gold, Silver, Crystal'
            ]
        }]
    },
    {
        name: 'Pressure Cooker',
        url: 'https://www.acehardware.com/departments/home-and-decor/kitchen-utensils-and-gadgets/cookware/68534',
        img: 'https://cdn-tp3.mozu.com/24645-37138/cms/37138/files/6009c65b-d197-48e1-8e62-5ae7066be0b7?quality=60&_mzcb=_1618890579000',
        dollar: 125+16

    },
    {
        name: 'Dash Cam',
        url: 'https://www.amazon.com/Dashboard-G-Sensor-Parking-Recording-Detection/dp/B086ML686Q/ref=sr_1_2_sspa',
        img: 'https://m.media-amazon.com/images/I/61+HxebIeIL._AC_SL1200_.jpg',
        dollar: 56
    }
]

export default storeItems;