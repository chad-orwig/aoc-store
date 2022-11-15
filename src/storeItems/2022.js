import { ridgeStyleOption } from './ridgeOptions';
import {minPrice, variety} from './plumTeaOptions';
import slalomItems from './slalomItems';
import { nationalParkImgs, nationalParkNames } from './nationalParkOptions';
const storeItems =  [
    ...slalomItems,
    {
        name : 'Donation to Charity',
        img : 'https://img.freepik.com/free-vector/people-carrying-donation-charity-related-icons_53876-43091.jpg',
        dollar : 20,
        options : [
            { name : 'Cause', options : [ 'Alzheimer\'s Research', 'Parkinson\'s Research', 'American Cancer Society', 'Local McDonald House Charities']},
            { 
                name: 'Amount',
                options: [ '$20', '$50', '$100', '$150', '$180'],
                upcharge: [0, 30, 80, 130, 160]
            }
        ]
    },
    {
        name : 'Phone Charging Pad',
        url : 'https://www.amazon.com/Anker-Wireless-PowerWave-Upgraded-Fast-Charging/dp/B07THHQMHM/ref=sr_1_3',
        img : 'https://images-na.ssl-images-amazon.com/images/I/6114qzNg-3L._AC_SL1500_.jpg',
        dollar : 16
    },
    {
        name : 'Google Nest Hub (2nd Gen)',
        url : 'https://store.google.com/us/product/nest_hub_2nd_gen?hl=en-US',
        img : 'https://lh3.googleusercontent.com/yv4mlDC2wiFsWPKYhgXMklF_yJu2BgnoklDgEENeruwOmtQ7Gxd9z8RpnXU4E-SR9u3DZpr3IDd7sJpYIJVbCtbkJgH-hbZoiXI=rw-e365-w2880',
        dollar : 100,
        options : [
            { name : 'Color', options : [ 'Chalk', 'Charcoal', 'Mist', 'Sand']}
        ]
    },
    {
        name : 'Chromecast With Google TV',
        img : 'https://lh3.googleusercontent.com/PccevIl8FWmhSs0zCrDftH9Mv-uXZaepgsxM_UdeXA_PrAo4rxmLnNNemrUup9fed5pwhOobWsTk7ZpPd8B85Fh-3Y-FZPvdjMbE=rw-e365-w1700',
        url : 'https://store.google.com/product/chromecast_google_tv',
        dollar : 50,
        options:[{
            name: 'Color',
            options: [ 'Sky', 'Sunrise', 'Snow' ]
        }],
    },
    {
        name : 'Google Nest Mini',
        url : 'https://store.google.com/product/google_nest_mini',
        img : 'https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D1600%252C1067%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C1067%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-10%252Fefd931e0-ef58-11e9-bdef-b2beac92b25c%26client%3Da1acac3e1b3290917d92%26signature%3Da1b1d7d1d92dc7d0ce104c52ab4fcf4c3a2f6ba9&client=amp-blogside-v2&signature=ee12299a4f025cd000209797223cf3aac0d23310',
        dollar : 39,
        options : [
            { name : 'Color', options: ['Chalk', 'Charcoal', 'Sky', 'Coral']}
        ]
    },
    {
        name : 'Google Nest Audio',
        url : 'https://store.google.com/product/nest_audio',
        img : 'https://lh3.googleusercontent.com/HiWaIT9vn0iPHu92ozZUNg5F28T3Aq2XppyAwOiXoEQyHWuSJe4FyWoNHyBzkh9rk4tfXKhdwAaErmS8qPwJqPc=w1890',
        dollar : 100,
        options : [
            { name : 'Color', options: ['Chalk', 'Charcoal', 'Sand', 'Sage', 'Sky']}
        ]
    },
    {
        name : 'Keychron Mechanical Keyboard',
        url : 'https://www.amazon.com/stores/page/84B74B76-882C-4F51-867A-051241D385DF',
        img : 'https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/1/AmazonStores/ATVPDKIKX0DER/b61157c9b5c76ca518cf4907bfbd60c7.w3000.h600._CR0%2C0%2C3000%2C600_SX3000_.jpg',
        dollar : 80,
        options : [
            {
                name: 'Model',
                link: 'https://www.keychron.com/blogs/news/difference-among-keychron-keyboards',
                options: [ 'K2', 'K4', 'K6', 'K8', 'K12' ]
            },
            { name : 'Backlight', options : [ 'White', 'RGB'], upcharge: [0, 10 ]},
            { name : 'Switch', options : [ 'Red', 'Brown', 'Blue']},
            { name: 'Hot Swappable?', options: ['No', 'Yes'], upcharge: [0, 10]},
            { name: 'Frame', options: ['Plastic', 'Aluminum'], upcharge: [0, 10]},
        ]
    },
    {
        name : 'Subcription to Audible',
        img : 'https://m.media-amazon.com/images/G/01/Audible/en_US/images/creative/amazon/22-1148-USNJCDE-Holiday2022-Storefront_ENG_DT-1200x960_V04.png',
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
        url : 'https://www.amazon.com/AeroPress-Coffee-Espresso-Maker-Bitterness/dp/B0047BIWSK',
        img : 'https://m.media-amazon.com/images/I/51zgM9yqjRL._AC_SL1500_.jpg',
        dollar : 40
    },
    {
        name : 'Gooseneck Electric Kettle',
        url : 'https://www.amazon.com/COSORI-Electric-Gooseneck-Variable-Stainless/dp/B07T1CH2HH/ref=sr_1_8',
        img : 'https://m.media-amazon.com/images/I/61O-udIUQLL._AC_SL1440_.jpg',
        dollar : 70,
        options: [{
            name: 'Color',
            options: [ 'Black', 'Silver' ]
        }]
    },
    {
        name : 'Anker Power Bank (20,000 mAh)',
        img : 'https://m.media-amazon.com/images/I/71nOfyDPShL._AC_SL1500_.jpg',
        url : 'https://www.amazon.com/Anker-PowerCore-Portable-Charger-Microsoft/dp/B0BBZKBSDQ',
        dollar : 70,
        options: [
            { name: 'Color', options:[ 'White', 'Black', 'Blue', 'Green', 'Violet' ]}
        ]
    },
    {
        name : ' Tungsten Cube',
        url : 'https://www.amazon.com/Tungsten-Cube-1-5-One-Kilo/dp/B00XZBIJLS',
        img : 'https://images-na.ssl-images-amazon.com/images/I/61xgSKE-rqL._SL1500_.jpg',
        dollar : 180
    },
    {
        name : '24 Pack of Blenheim Ginger Ale (Chad\'s Favorite)',
        url : 'https://www.blenheimgingerale.com/products/',
        img : 'https://www.shopblenheimgingerale.com/v/vspfiles/photos/001-2.jpg',
        dollar : 35,
        options : [
            { name : 'Variety', options : [ 'Hot', 'Not as Hot', 'Diet', 'Half Hot/Half Not as Hot', 'Half Diet/Half Hot', 'Half Diet/Half Not as Hot']}
        ]
    },
    {
        name : 'Tea Infuser',
        url : 'https://www.amazon.com/Threaded-Connection-Stainless-Extended-Seasonings/dp/B075K57B73/ref=sr_1_4',
        img : 'https://m.media-amazon.com/images/I/71lJTufEAvL._AC_SL1500_.jpg',
        dollar : 10
    },
    {
        name : 'Coldbrew Coffee Maker',
        url : 'https://www.amazon.com/dp/B071ZWR7M8',
        img : 'https://images-na.ssl-images-amazon.com/images/I/71jlAVRFLkL._AC_SL1500_.jpg',
        dollar : 15
    },
    {
        name : 'Adult Coloring Book Set',
        url : 'https://www.amazon.com/Adult-Coloring-Book-Bundle-Butterflies/dp/B08L8F1264/ref=sr_1_5',
        img : 'https://m.media-amazon.com/images/I/91NTR8RJSNL._AC_SL1500_.jpg',
        dollar : 25,
        options: [{
            name: 'Set',
            options: [
                'Animals | Scenery | Geometric Shapes',
                'Up in the Air | Under the Sea | Into the Jungle',
                'Landmarks | Henna | Butterflies and Flowers',
                'All Nine Books'
            ],
            upcharge: [ 0, 0, 0, 40 ]
        }]
    },
    {
        name : 'Echo Dot (5th Gen)',
        url : 'https://www.amazon.com/All-New-release-Smart-speaker-Charcoal/dp/B09B8V1LZ3/ref=sr_1_3',
        img : 'https://m.media-amazon.com/images/I/61E80QtGeCL._AC_SL1000_.jpg',
        dollar : 50,
        options : [
            { name : 'Color', options : [ 'Charcoal', 'Glacier White', 'Deep Sea Blue' ]}
        ]
    },
    {
        name : 'Echo Show 2nd Edition',
        url : 'https://www.amazon.com/Echo-Show-8-2nd-Gen-2021-release/dp/B084DCJKSL/ref=sr_1_2?crid=2RLFFD5U56Q3G&keywords=echo+show&qid=1668433816&s=amazon-devices&sprefix=ec%2Camazon-devices%2C444&sr=1-2',
        img : 'https://m.media-amazon.com/images/I/51yQll2L7xL._AC_SL1000_.jpg',
        dollar : 85,
        options : [
            { name: 'Size', options: [ '5', '8' ], upcharge: [ 0, 45]},
            { name : 'Color', options : [ 'Charcoal', 'Glacier White', 'Deep Sea Blue']}
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
        img : 'https://m.media-amazon.com/images/I/61dG5TgKFNL._AC_SL1500_.jpg',
        dollar : 25
    },
    {
        name : 'Roku Ultra',
        url : 'https://www.roku.com/products/roku-ultra',
        img : 'https://cigars.roku.com/v1/http%3A%2F%2Fimage.roku.com%2Fw%2Frapid%2Fimages%2Fpdp-carousel-items%2Fd154cc63-9ca9-4593-9b1f-8a2cd3416326.png',
        dollar : 100
    },
    {
        name : 'Fire TV Six-Faced, Regular Polyhedron',
        url : 'https://www.amazon.com/dp/B08XMDNVX6',
        img : 'https://m.media-amazon.com/images/I/517S3hcoI0L._AC_SL1000_.jpg',
        dollar : 120
    },
    {
        name : 'Kindle',
        dollar : 120,
        img : 'https://images-na.ssl-images-amazon.com/images/I/61ntJTLVtCL._AC_SL1000_.jpg',
        url : 'https://www.amazon.com/Kindle-Now-with-Built-in-Front-Light/dp/B07FPX819Q',
        options : [
            { name: 'Version', options: [ 'Standard Black', 'Standard Denim', 'Paperwhite' ], upcharge: [ 0, 0, 40 ]}
        ]
    },
    {
        name : 'Arduino Smart Car Starter Set',
        url : 'https://www.amazon.com/ELEGOO-Tracking-Ultrasonic-Intelligent-Educational/dp/B07KPZ8RSZ/ref=sr_1_8',
        dollar : 80,
        img : 'https://images-na.ssl-images-amazon.com/images/I/61ZlKT5cWxL._AC_SL1200_.jpg'
    },
    {
        name : 'Arduino Starter Set',
        url : 'https://www.amazon.com/ELEGOO-Project-Tutorial-Controller-Projects/dp/B01D8KOZF4/ref=sr_1_3',
        dollar : 45,
        img : 'https://images-na.ssl-images-amazon.com/images/I/91O05A7aWXL._SL1500_.jpg'
    },
    {
        name : 'Anova Sous Vide',
        url : 'https://www.amazon.com/Anova-Culinary-Precision-Bluetooth-Included/dp/B07C7PW3PC/',
        dollar : 100,
        img : 'https://images-na.ssl-images-amazon.com/images/I/71WAEEysRpL._AC_SL1500_.jpg'
    },
    {
        name: 'Digital Picture Frame',
        url: 'https://www.amazon.com/Digital-Picture-1280x800-Facebook-W10/dp/B07QQW2PXR/ref=sr_1_3',
        img: 'https://m.media-amazon.com/images/I/61bv-07kmGL._AC_SL1500_.jpg',
        dollar: 100,
        options: [{
            name: 'Style',
            options: [ '10.1 inch', '11 inch Blue', '11 inch brown' ],
            upcharge: [ 0, 20, 20 ]
        }]
    },
    {
        name: '3 Oz. Plum Deluxe Tea',
        url: 'https://www.plumdeluxe.com/teashop?orderby=popularity',
        img: variety.imgs[0],
        dollar: minPrice * 3 + 4,
        options: [variety]
    },
    {
        name : 'Hot Sauce Gift Pack',
        url : 'https://heatonist.com/collections/hot-sauce-gift-packs?page=1',
        img : 'https://cdn.shopify.com/s/files/1/2086/9287/products/Trioblueclassic1_1024x1024.jpg?v=1594911992',
        dollar: 32,
        options: [
            { 
                name: 'Variety', 
                options: [ 
                    'Season 19 Warmup', 'Season 19 Trio', 'Season 19 Heat', 'Season 19 | 10 Pack',
                    'Season 18 Warmup', 'Season 18 Trio', 'Season 18 Heat', 'Season 18 | 10 Pack',
                    'Los Calientes Trio', 'Original Trio', 'Happy Pack'
                ],
                upcharge : [
                    6, 10, 14, 90,
                    4, 10, 14, 90,
                    3, 10, 2,
                ].map(n => n-2),
                imgs: [
                    'https://cdn.shopify.com/s/files/1/2086/9287/products/IMG_7031-Edit-Edit.jpg',
                    'https://cdn.shopify.com/s/files/1/2086/9287/products/HOTONESSEASON19TRIOPACK.jpg',
                    'https://cdn.shopify.com/s/files/1/2086/9287/products/IMG_7038-Edit-Edit.jpg',
                    'https://cdn.shopify.com/s/files/1/2086/9287/products/IMG_6968-Edit-Edit.jpg',
                    'https://cdn.shopify.com/s/files/1/2086/9287/products/HOTONES-SEASON18WARMUP.jpg',
                    'https://cdn.shopify.com/s/files/1/2086/9287/products/HOTONESSEASON16trio_1024x1024_d00f7599-456a-497a-a145-2fe4a253f167.jpg',
                    'https://cdn.shopify.com/s/files/1/2086/9287/products/HOTONES-SEASON18-heatpack.jpg',
                    'https://cdn.shopify.com/s/files/1/2086/9287/products/HOTONES-SEASON18-10pack.jpg',
                    'https://cdn.shopify.com/s/files/1/2086/9287/products/loscal-barbacoa-trio.jpg',
                    'https://cdn.shopify.com/s/files/1/2086/9287/products/trio1.jpg',
                    'https://cdn.shopify.com/s/files/1/2086/9287/products/hotoneshappypack.jpg',
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
        dollar: 25
    },
    {
        name: 'Mason Jar Indoor Herb Garden',
        url: 'https://www.uncommongoods.com/product/mason-jar-indoor-herb-garden',
        img: 'https://www.uncommongoods.com/images/items/43400/43428_1_640px.jpg',
        options: [{
            name: 'Herb',
            options: [ 'Basil', 'Cilantro', 'Mint', 'Oregano', 'Parsley', 'Sage']
        }],
        dollar: 24
    },
    {
        name: 'National Parks Puzzle',
        url: 'https://www.uncommongoods.com/product/vintage-national-parks-puzzle',
        img: 'https://www.uncommongoods.com/images/items/51600/51668_2_640px.jpg',
        dollar: 22
    },
    {
        name: 'Candlefish Candle',
        url: 'https://www.candlefish.com/collections/top-selling-fragrances',
        img: 'https://i.pinimg.com/474x/42/3d/bd/423dbd56011dafe59e3e36b857f01f84.jpg',
        dollar: 16,
        options : [
            {
                name: 'Variety',
                options: [  '04', '09', '12', '25', '31', '70', '83']
            },
            {
                name: 'Size',
                options: [ '2.5 oz', '9 oz' ],
                upcharge: [ 0, 14 ]
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
                options: nationalParkNames,
                imgs: nationalParkImgs,
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
        dollar: 42
    },
    {
        name: 'Old Fasioned Infusion Kit',
        url: 'https://www.uncommongoods.com/product/old-fashioned-whiskey-infusion-kit',
        img: 'https://www.uncommongoods.com/images/items/26200/26227_1_640px.jpg',
        dollar: 45
    },
    {
        name: 'Ember Smart Mug',
        url: 'https://ember.com/products/ember-mug-2?variant=30843977826389',
        img: 'https://cdn.shopify.com/s/files/1/1080/6594/products/ember_black_CM210_600x.jpg?v=1600321021',
        dollar: 130,
        options: [
            {
                name: 'Color',
                options: [ 'Red', 'White', 'Black', 'Grey' ]
            },
            {
                name: 'Size',
                options: [ '10 oz.', '14 oz.'],
                upcharge: [0, 20]
            }
        ]
    },
    {
        name: 'Logitech MX Master 3s',
        img: 'https://m.media-amazon.com/images/I/61ni3t1ryQL._AC_SL1500_.jpg',
        url: 'https://www.amazon.com/Logitech-Master-Advanced-Wireless-Mouse/dp/B09HM94VDS/ref=sr_1_4?th=1',
        dollar: 100,
        options: [
            { name: 'Color', options: [ 'Graphite', 'Pale Grey' ]}
        ]
    },
    {
        name: 'CleanCaps Pokémon 3 Key Cap Set',
        dollar: 35,
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
        name: 'Dash Cam',
        url: 'https://www.amazon.com/Dashboard-G-Sensor-Parking-Recording-Detection/dp/B086ML686Q/ref=sr_1_2_sspa',
        img: 'https://m.media-amazon.com/images/I/61+HxebIeIL._AC_SL1200_.jpg',
        dollar: 60
    },
    {
        name: 'Adventure Challenge Scrapbook',
        dollar: 50,
        url: 'https://www.uncommongoods.com/product/the-adventure-challenge-scrapbook#530200000000',
        img: 'https://www.uncommongoods.com/images/items/53000/53020_1_640px.jpg',
        options: [{
            name: 'Edition',
            options: [ 'Couples', 'Friends', 'Family' ]
        }]
    },
    {
        name: 'Apple TV 4k (32 GB)',
        url: 'https://www.amazon.com/2021-Apple-TV-4K-64GB/dp/B0933D3SN6/ref=sr_1_1',
        img: 'https://m.media-amazon.com/images/I/815g8Uo656S._AC_SL1500_.jpg',
        dollar: 125,
    },
    {
        name: 'Bose SoundLink Flex Speaker',
        url: 'https://www.amazon.com/Bose-SoundLink-Bluetooth-Portable-Waterproof/dp/B099TLMRB6/ref=sr_1_6',
        img: 'https://m.media-amazon.com/images/I/818KSsIzohL._AC_SL1500_.jpg',
        dollar: 150,
        options: [{
            name: 'Color',
            options: [ 'White Smoke', 'Stone Blue', 'Black', 'Carmine Red' ]
        }]
    },
    {
        name: 'Sonos Roam',
        url: 'https://www.sonos.com/en-us/shop/roam',
        img: 'https://target.scene7.com/is/image/Target/GUEST_15e71e4a-6616-47ef-993b-80e74e119270',
        dollar: 179,
        options: [{
            name: 'Color',
            options: [ 'Shadow Black', 'Lunar White', "Sunset", "Wave", "Olive" ]
        }]
    },
    {
        name: 'Ridge Wallet',
        url: 'https://ridge.com/collections/wallets',
        img: 'https://cdn.shopify.com/s/files/1/0613/6213/products/NEW-RENDERS_Variant_carbon-cs_1200x.jpg',
        dollar: 85,
        options: [ridgeStyleOption]
    },
    {
        name: 'LEGO Avatar Toruk Makto & Tree of Souls',
        url: 'https://www.amazon.com/LEGO-Avatar-Toruk-Building-Pieces/dp/B09X1XZ2RY',
        img: 'https://m.media-amazon.com/images/I/91RXNHco-EL._AC_SL1500_.jpg',
        dollar: 150,
    },
    {
        name: 'LEGO Icons Adult Flowers',
        url: 'https://www.amazon.com/LEGO-Succulents-Building-Adults-Display/dp/B09Q4GWMZQ',
        img: 'https://m.media-amazon.com/images/I/71OywSYVdzL._AC_SL1500_.jpg',
        dollar: 50,
        options:[{
            name: 'Variety',
            options: ['Succulents', 'Orchid', 'Bonsai Tree', 'Bouquet'],
            imgs: [
                null,
                'https://m.media-amazon.com/images/I/71iY-AO2D1L._AC_SL1500_.jpg',
                'https://m.media-amazon.com/images/I/81OqSTy+A1L._AC_SL1500_.jpg',
                'https://m.media-amazon.com/images/I/81NCFZ3iJdL._AC_SL1500_.jpg',

            ],
            urls: [
                null,
                'https://www.amazon.com/LEGO-Orchid-Building-Adults-Display/dp/B09Q4L157D',
                'https://www.amazon.com/LEGO-Building-Project-Beautiful-Display/dp/B08HVXZW8X?ref_=ast_sto_dp',
                'https://www.amazon.com/LEGO-Bouquet-Building-Creative-Project/dp/B08HW1L75J?ref_=ast_sto_dp',
            ],
            upcharge: [ null, null, null, 10 ],
        }],
    },
    {
        name: 'LEGO Horizon - Forbidden West: Tallneck',
        url: 'https://www.amazon.com/LEGO-Horizon-Forbidden-West-Collectible/dp/B09Q46YHKB?ref_=ast_sto_dp',
        img: 'https://m.media-amazon.com/images/I/81IYVkkYj3L._AC_SL1500_.jpg',
        dollar: 90,
    },
    {
        name: 'LEGO Star Wars: Millennium Falcon',
        url: 'https://www.amazon.com/LEGO-Star-Wars-Millennium-Minifigures/dp/B07QQ396NH?ref_=ast_sto_dp&th=1&psc=1',
        img: 'https://m.media-amazon.com/images/I/81PhO-kyPuL._AC_SL1500_.jpg',
        dollar: 170,
    },
    {
        name: 'LEGO Marvel: Infinity Gauntlet',
        url: 'https://www.amazon.com/LEGO-Infinity-Gauntlet-Collectible-Building/dp/B08YP94QJN?ref_=ast_sto_dp',
        img: 'https://m.media-amazon.com/images/I/81uwk+ags9L._AC_SL1500_.jpg',
        dollar: 80,
    },
    {
        name: 'LEGO Star Wars: The Razor Crest',
        url: 'https://www.amazon.com/LEGO-Star-Wars-Mandalorian-Exclusive/dp/B0849GZMZH?ref_=ast_sto_dp&th=1&psc=1',
        img: 'https://m.media-amazon.com/images/I/918CAx5r5PL._AC_SL1500_.jpg',
        dollar: 140,
    },
    {
        name: 'LEGO Sonic The Hedgehog: Green Hill Zone',
        url: 'https://www.amazon.com/LEGO-Ideas-Sonic-Hedgehog-Memorabilia/dp/B09JKZVBQ9?ref_=ast_sto_dp',
        img: 'https://m.media-amazon.com/images/I/81-AeHY9d2L._AC_SL1500_.jpg',
        dollar: 80,
    },
    {
        name: 'James Hoffman approved Fancy Pants Kettle',
        url: 'https://www.amazon.com/Fellow-Electric-Pour-over-Temperature-Stopwatch/dp/B077JBQZPX/ref=sr_1_5',
        img: 'https://m.media-amazon.com/images/I/515ardfTZlL._AC_SL1102_.jpg',
        dollar: 165,
        options: []
    },
    {
        name: 'IoT Development Kit for AWS',
        url: 'https://www.amazon.com/M5Stack-Core2-ESP32-Development-EduKit/dp/B08VGRZYJR/ref=sr_1_3',
        img: 'https://m.media-amazon.com/images/I/61krY36P99L._AC_.jpg',
        dollar: 50,
    },
    {
        name: 'Bripe Collection',
        img: 'https://cdn.shopify.com/s/files/1/0026/7671/9676/products/ScreenShot2022-09-29at3.34.04PM_1800x1800.png?v=1664488805',
        url: 'https://briping.com/collections/all/products/international-bripe-kit-packaged-appropriately-for-shipping',
        dollar: 110,
    },
    {
        img: 'https://m.media-amazon.com/images/I/61v0gVKBSpL._AC_SL1000_.jpg',
        name: 'Star Wars Paint by Number',
        url: 'https://www.amazon.com/dp/B093FS6P6F',
        dollar: 13,
        options: [{
            name: 'Picture',
            options: ['01-Vader', '02-Mando', '04-Vader']
        }],
    },
    {
        name: 'Cascadia Board Game',
        url: 'https://www.amazon.com/Alderac-Entertainment-Group-AEG-Cascadia/dp/B093H8RGXX/ref=sr_1_4',
        img: 'https://m.media-amazon.com/images/I/51c-SnEboaL._AC_SL1000_.jpg',
        dollar: 45,
    },
    {
        name: 'Horizons of Spirit Island Board Game',
        url: 'https://www.target.com/p/horizons-of-spirit-island-game/-/A-85008800#lnk=sametab',
        img: 'https://target.scene7.com/is/image/Target/GUEST_17530488-3dfd-418a-8c01-2ac264280499?wid=800&hei=800&qlt=80&fmt=webp',
        dollar: 30,
    },
    {
        name: 'Azul Board Game',
        url: 'https://www.amazon.com/Board-Game-Mosaic-Tile-Placement-Next-Move/dp/B077MZ2MPW/ref=sr_1_23',
        img: 'https://m.media-amazon.com/images/I/91A0nIsV57S._AC_SL1500_.jpg',
        dollar: 35,
    },
    {
        name: 'Scythe Board Game',
        url: 'https://www.amazon.com/Stonemaier-Games-STM600-Scythe-Board/dp/B01IPUGYK6/ref=sr_1_56',
        img: 'https://m.media-amazon.com/images/I/918TkODhXPL._AC_SL1500_.jpg',
        dollar: 70,
    }
];

export default storeItems;