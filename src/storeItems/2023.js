import {minPrice, variety} from './plumTeaOptions';
import { nationalParkImgs, nationalParkNames } from './nationalParkOptions';
import slalomItems from './slalomItems';
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
        dollar : 30,
        options:[
            {
                name: 'Color',
                options: [ 'Sky (4k only)', 'Sunrise (4k only)', 'Snow' ]
            },
            {
                name: 'Version',
                options: [ 'HD', '4k' ],
                upcharge: [ 0, 20 ],
            }
        ],
    },
    {
        name : 'Google Nest Mini',
        url : 'https://store.google.com/product/google_nest_mini',
        img : 'https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D1600%252C1067%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C1067%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-10%252Fefd931e0-ef58-11e9-bdef-b2beac92b25c%26client%3Da1acac3e1b3290917d92%26signature%3Da1b1d7d1d92dc7d0ce104c52ab4fcf4c3a2f6ba9&client=amp-blogside-v2&signature=ee12299a4f025cd000209797223cf3aac0d23310',
        dollar : 49,
        options : [
            { name : 'Color', options: ['Chalk', 'Charcoal', 'Coral']}
        ]
    },
    {
        name : 'Google Nest Audio',
        url : 'https://store.google.com/product/nest_audio',
        img : 'https://lh3.googleusercontent.com/HiWaIT9vn0iPHu92ozZUNg5F28T3Aq2XppyAwOiXoEQyHWuSJe4FyWoNHyBzkh9rk4tfXKhdwAaErmS8qPwJqPc=w1890',
        dollar : 100,
        options : [
            { name : 'Color', options: ['Chalk', 'Charcoal']}
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
        dollar : 30
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
            { name : 'Color', options : [ 'Charcoal (Without Clock)', 'Deep Sea Blue (Without Clock)', 'Glacier White (Both)', 'Cloud Blue (With Clock)' ]},
            { name: 'Version', options: [ 'Without Clock', 'With Clock'], upcharge: [0, 10]},
        ]
    },
    {
        name : 'Echo Show',
        url : 'https://www.amazon.com/dp/B0CDR2MP7Q?ref_=mars_gen_B084DCJKSL',
        img : 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71JSM9i1bQL._AC_SL1500_.jpg',
        dollar : 90,
        options : [
            { name : 'Color', options : [ 'Charcoal', 'Glacier White', 'Cloud Blue (5in. only)' ]},
            { name: 'Size', options: ['5 in.', '8 in.'], upcharge: [0, 60] }
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
        url : 'https://www.amazon.com/dp/B09BZZ3MM7',
        img : 'https://m.media-amazon.com/images/I/614PhVdpOCL._AC_SL1000_.jpg',
        dollar : 140
    },
    {
        name : 'Kindle',
        dollar : 100,
        img : 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81e6xHv-NzL._AC_SL1500_.jpg',
        url : 'https://www.amazon.com/kindle-the-lightest-and-most-compact-kindle/dp/B09SWV3BYH',
        options : [
            { name: 'Color', options: [ 'Black', 'Denim', 'Agave Green (Paperwhite only)' ]},
            { 
                name: 'Version', 
                options: [ 'Standard', 'Paperwhite' ],
                upcharge: [ 0, 50 ]
            },
            { name: 'Ad Support',
                options: ['Ad-Supported', 'Without Ad-Support'],
                upcharge: [0, 20]
            }
        ]
    },
    {
        name : 'Anova Sous Vide',
        url : 'https://www.amazon.com/Anova-Culinary-Precision-Bluetooth-Included/dp/B07C7PW3PC/',
        dollar : 100,
        img : 'https://images-na.ssl-images-amazon.com/images/I/71WAEEysRpL._AC_SL1500_.jpg'
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
                    'Season 22 Warmup', 'Season 22 Trio', 'Season 22 Heat', 'Season 22 | 10 Pack',
                    'Season 21 Warmup', 'Season 21 Trio', 'Season 21 Heat', 'Season 21 | 10 Pack',
                    'Los Calientes Trio', 'Original Trio', 'Happy Pack'
                ],
                upcharge : [
                    0, 8, 6, 88,
                    2, 8, 8, 88,
                    1, 8, 0,
                ],
                imgs: [
                    'https://heatonist.com/cdn/shop/files/Hot-Ones-Season-22-Hot-Sauce-Warm-Up-Pack-1.jpg',
                    'https://heatonist.com/cdn/shop/files/Hot-Ones-Season-22-Hot-Sauce-Trio-Pack-1.jpg',
                    'https://heatonist.com/cdn/shop/files/Hot-Ones-Season-22-Hot-Sauce-Heat-Up-Pack-1.jpg',
                    'https://heatonist.com/cdn/shop/files/IMG_3487-Edit.jpg',
                    'https://heatonist.com/cdn/shop/files/IMG_3462-Edit.jpg',
                    'https://heatonist.com/cdn/shop/files/IMG_3458-Edit.jpg',
                    'https://heatonist.com/cdn/shop/files/IMG_3464-Edit.jpg',
                    'https://heatonist.com/cdn/shop/products/S20-Hot-Ones-Hot-Sauce-Ten-Pack-1.jpg',
                    'https://heatonist.com/cdn/shop/products/Hot-Ones-Los-Calientes-Hot-Sauce-Trio-1.jpg',
                    'https://heatonist.com/cdn/shop/products/trio1.jpg',
                    'https://heatonist.com/cdn/shop/products/hotoneshappypack.jpg',
                ]
            }
        ]
    },
    {
        name: 'Mason Jar Indoor Herb Garden',
        url: 'https://www.uncommongoods.com/product/mason-jar-indoor-herb-garden',
        img: 'https://www.uncommongoods.com/images/items/43400/43428_1_640px.jpg',
        options: [{
            name: 'Herb',
            options: [ 'Basil', 'Cilantro', 'Mint', 'Parsley', 'Rosemary']
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
        name: 'Ember Smart Mug',
        url: 'https://ember.com/products/ember-mug-2?variant=30843977826389',
        img: 'https://ember.com/cdn/shop/files/ember_CM1910_00-black_2048x.jpg',
        dollar: 130,
        options: [
            {
                name: 'Color',
                options: [ 'Red', 'White', 'Black', 'Grey', 'Sage', 'Sandstone', 'Copper', 'Gold', 'Silver', 'Rose Gold' ],
                upcharge: [ 0, 0, 0, 0, 0, 0, 20, 20, 20, 20 ]
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
        name: 'Dash Cam',
        url: 'https://www.amazon.com/Dashboard-G-Sensor-Parking-Recording-Detection/dp/B086ML686Q/ref=sr_1_2_sspa',
        img: 'https://m.media-amazon.com/images/I/61+HxebIeIL._AC_SL1200_.jpg',
        dollar: 60
    },
    {
        name: 'Bose SoundLink Flex Speaker',
        url: 'https://www.amazon.com/Bose-SoundLink-Bluetooth-Portable-Waterproof/dp/B099TLMRB6/ref=sr_1_6',
        img: 'https://m.media-amazon.com/images/I/818KSsIzohL._AC_SL1500_.jpg',
        dollar: 150,
        options: [{
            name: 'Color',
            options: [ 'White Smoke', 'Stone Blue', 'Black', 'Cypress Green' ]
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
        name: 'James Hoffman approved Fancy Pants Kettle',
        url: 'https://www.amazon.com/Fellow-Electric-Pour-over-Temperature-Stopwatch/dp/B077JBQZPX/ref=sr_1_5',
        img: 'https://m.media-amazon.com/images/I/515ardfTZlL._AC_SL1102_.jpg',
        dollar: 165,
        options: []
    },
    {
        name: 'Scythe Board Game',
        url: 'https://www.amazon.com/Stonemaier-Games-STM600-Scythe-Board/dp/B01IPUGYK6/ref=sr_1_56',
        img: 'https://m.media-amazon.com/images/I/918TkODhXPL._AC_SL1500_.jpg',
        dollar: 70,
    },
    {
        name: 'Trade Coffee Subscription',
        dollar: 60,
        img: 'https://res.cloudinary.com/roastcollective/image/upload/w_670,f_jpg,fl_progressive:steep,q_auto:good/v1668452878/solidus/xuriokhntlw42vvwgthg.png',
        url: 'https://www.drinktrade.com/gift-subscription/p/1858',
        options:[{
            name: 'Number of Bags',
            options: ['3 Bags', '6 Bags'],
            upcharge: [0, 60],
        }],
    },
    {
        name: 'Nord VPN Subscription',
        img: 'https://m.media-amazon.com/images/I/71Q1gco9-EL._AC_SL1500_.jpg',
        url: 'https://www.amazon.com/NordVPN-Standard-Cybersecurity-Subscription-Information/dp/B0C9FYN8GF',
        dollar: 70,
        options: [{
            name: 'Duration',
            options: ['1 Year', '2 Years'],
            upcharge: [ 0, 35 ],
        }],

    },
    {
        name: 'LEGO Icons Flowers Tranquil Garden',
        dollar: 110,
        img: 'https://m.media-amazon.com/images/I/81bdwfzlx2L._AC_SL1500_.jpg',
        url: 'https://www.amazon.com/LEGO-Tranquil-Creative-Building-Meditation/dp/B0BSRGKTGB',
    },
    {
        name: 'LEGO Icons Orchid',
        dollar: 50,
        img: 'https://m.media-amazon.com/images/I/71iY-AO2D1L._AC_SL1500_.jpg',
        url: 'https://www.amazon.com/LEGO-Orchid-Building-Adults-Display/dp/B09Q4L157D',
    },
    {
        name: 'LEGO Marvel Spider-Man Final Battle',
        img: 'https://m.media-amazon.com/images/I/81NEJ718WFL._AC_SL1500_.jpg',
        dollar: 110,
        url: 'https://www.amazon.com/LEGO-Marvel-Spider-Man-Building-Collectible/dp/B0BSRG6RYX',
    },
    {
        name: 'LEGO Icons Flower Bouquet',
        dollar: 50,
        img: 'https://m.media-amazon.com/images/I/81lnPKhwFfL._AC_SL1500_.jpg',
        url: 'https://www.amazon.com/LEGO-Bouquet-Building-Creative-Project/dp/B08HW1L75J'
    },
    {
        name: 'LEGO Technic Mars Rover Perseverance',
        dollar: 100,
        url: 'https://www.amazon.com/LEGO-Perseverance-Ingenuity-Helicopter-Engineering/dp/B0BSRD2CXY',
        img: 'https://m.media-amazon.com/images/I/81-tHOXd5eL._AC_SL1500_.jpg',
    },
    {
        name: 'LEGO Minecraft The End Arena',
        dollar: 25,
        url: 'https://www.amazon.com/LEGO-Minecraft-Player-vs-Player-Playset-Enderman/dp/B0BBSKQGTW',
        img: 'https://m.media-amazon.com/images/I/7153iSCFRUL._AC_SL1500_.jpg',
    },
    {
        name: 'LEGO Star Wars Millennium Falcon',
        dollar: 170,
        url: 'https://www.amazon.com/LEGO-Star-Wars-Skywalker-Millennium/dp/B07Q2TQ48F',
        img: 'https://m.media-amazon.com/images/I/81PhO-kyPuL._AC_SL1500_.jpg',
    },
    {
        name: 'LEGO Star Wars Shsoka Tano\'s T-6',
        dollar: 80,
        url: 'https://www.amazon.com/LEGO-Inspired-Building-Featuring-Buildable/dp/B0BXQ64WP4',
        img: 'https://m.media-amazon.com/images/I/61rj5+f24VL._AC_SL1000_.jpg',
    },
    {
        name: 'Travel Tea Set',
        url: 'https://www.amazon.com/Ceramic-Chinese-Porcelain-Teacups-Portable/dp/B0897MF51R/',
        img: 'https://m.media-amazon.com/images/I/61p1V+dhmFL._AC_SL1200_.jpg',
        dollar: 33,
    },
    {
        name: 'Lego Nutcracker',
        url: 'https://www.amazon.com/LEGO-40254-The-Nutcracker/dp/B076GF77XV',
        img: 'https://m.media-amazon.com/images/I/61tTi1hyeJL._AC_SL1024_.jpg',
        dollar: 105,
    },
    {
        name: 'Mario Fire Flower Neon Sign',
        url: 'https://www.amazon.com/Control-Dimmable-Lighting-Birthday-Christmas/dp/B0CM41BSP6',
        img : 'https://m.media-amazon.com/images/I/81W4j0Zi07L._AC_SL1500_.jpg',
        dollar: 70,
    },
    {
        name: 'Ninja Air Fryer',
        url: 'https://www.amazon.com/dp/B07FDJMC9Q',
        img: 'https://m.media-amazon.com/images/I/71+8uTMDRFL._AC_SL1500_.jpg',
        dollar: 100,
    },
    {
        name: 'Electric Kettle and Tea Infuser',
        url: 'https://www.amazon.com/Chefman-Electric-Glass-Kettle-Temperature/dp/B07FNW57J7/',
        img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71f41B7B4tL._AC_SL1500_.jpg',
        dollar: 35,
    },
    {
        name: 'Apple Air Tag 4 pack',
        url: 'https://www.amazon.com/dp/B0932QJ2JZ',
        img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71gY9E+cTaS._AC_SL1500_.jpg',
        dollar: 99,
    },
    {
        name: 'Gourmet Seasoning Collection',
        url: 'https://www.amazon.com/dp/B00JXLYK6M',
        img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91lfHe2qTML._SL1500_.jpg',
        dollar: 35,
    },
    {
        name: 'Cast Iron Dutch Oven',
        url: 'https://www.amazon.com/dp/B000LEXR0K',
        img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91UT4fU+y3L._AC_SL1500_.jpg',
        dollar: 50,
    },
    {
        name: 'Bonsai Tree Seed Starter Kit',
        url: 'https://www.amazon.com/dp/B07DRQ3382',
        img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91E9iYlYkVL._AC_SL1500_.jpg',
        dollar: 36,
    },
    {
        name: 'Milk Frother',
        url: 'https://www.amazon.com/dp/B08VJP18XN',
        img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61oWTZsX9DS._AC_SL1500_.jpg',
        dollar: 40,
    },
    {
        name: 'Over-Ear Studio Headphones',
        url: 'https://www.amazon.com/beyerdynamic-Over-Ear-Studio-Headphones-construction/dp/B0011UB9CQ',
        img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81Ss9KeiSRL._AC_SL1500_.jpg',
        dollar: 159,
    },
    {
        name: 'Electric Salt and Pepper grinders',
        url: 'https://www.amazon.com/dp/B07WK8HK56',
        img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81xKi+DMFeL._AC_SL1500_.jpg',
        options:[
            {
                name: 'Color',
                options: ['Red', 'Stainless', 'Black' ],
                imgs: [
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71LjegTRKAL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81xKi+DMFeL._AC_SL1500_.jpg',
                    'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71d--PqgVeL._AC_SL1500_.jpg',
                ]
            }
        ],
        dollar: 43,
    },
    {
        name: 'Headphone amp',
        url: 'https://www.amazon.com/FiiO-K5-AK4493EQ-Amplifier-Headphone/dp/B07WT7TYWY',
        img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/518gsj64bbL._SL1000_.jpg',
        dollar: 150,
    },
    {
        name: 'numphy Halo65',
        url: 'https://www.amazon.com/nuphy-Halo65-Bluetooth%E3%80%812-4G-Connection%EF%BC%8CCompatible-Windows-White/dp/B0BJTS6VC7',
        img: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61dzLafGv2L._AC_SL1500_.jpg',
        dollar: 140,
        options:[{
            name: 'Switches',
            options: [ 'Baby Kangaroo', 'Baby Racoon', 'Gateron Brown', 'Rose Glacier'],
            upcharge: [ 10, 10, 0, 0]
        }],
    },
    {
        name: 'Lego Bonsai Tree',
        url: 'https://www.amazon.com/dp/B08HVXZW8X',
        dollar: 50,
        img: 'https://m.media-amazon.com/images/I/71pVP0qS4wL._AC_SL1500_.jpg'
    }
];

export default storeItems;