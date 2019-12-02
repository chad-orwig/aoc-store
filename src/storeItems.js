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
        name : 'Fancy Phone Charging Pad',
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
            { name : 'Cause', options : [ 'Alzheimer\'s Research', 'Parkinson\'s Research', 'American Cancer Society', 'Local McDonald House Charities']}
        ]
    },
    {
        name : 'Custom AoC Belt Logo 30 oz Yeti Tumbler',
        img : 'https://www.yeti.com/dw/image/v2/BBRN_PRD/on/demandware.static/-/Sites-masterCatalog_Yeti/default/dwf7d350a5/images/pdp-Rambler/Rambler%20Tumbler%2030oz/White/180027-White-Drinkware-Studio-Website-Assets-30oz-OH-1680x1024.jpg?sw=1152&sfrm=jpg&q=100',
        dollar : 50
    },
    {
        name : 'NordVPN 18 Month Subscription',
        img : 'https://images-na.ssl-images-amazon.com/images/I/81QXIyWCPcL._AC_SL1500_.jpg',
        url : 'https://www.amazon.com/gp/product/B0741DHY3Z/ref=as_li_qf_sp_asin_il_tl',
        dollar : 80
    },
    {
        name : 'Basic Phone Charging Pad',
        url : 'https://www.amazon.com/dp/B07Q1DBDCV/ref=sspa_dk_detail_0',
        img : 'https://images-na.ssl-images-amazon.com/images/I/71W8pJ8%2BMmL._SL1500_.jpg',
        options : [
            { name : 'Color', options : [ 'Black', 'White' ]}
        ],
        dollar : 16
    },
    {
        name : 'Pandimic Board Game',
        img : 'https://images-na.ssl-images-amazon.com/images/I/81tx8384RQL._AC_SL1383_.jpg',
        url : 'https://www.amazon.com/dp/B00A2HD40E',
        dollar : 25
    },
    {
        name : 'Camping Esspresso Maker',
        url : 'https://www.amazon.com/WACACO-Nanopresso-Portable-Minipresso-Operated/dp/B0797T2FYL',
        img : 'https://images-na.ssl-images-amazon.com/images/I/71SdsVnlwpL._AC_SL1001_.jpg',
        dollar : '60',
        options : [
            { name : 'Color', options : [ 'Black', 'Red', 'Yellow', 'Orange' ]}
        ]
    },
    {
        name : 'Google Nest Hub',
        url : 'https://store.google.com/config/google_nest_hub',
        img : 'https://lh3.googleusercontent.com/RjaBc8Q2dAPSsunfK5KwEMGzZzugCwZL0khwZAFfhbz9xIjfVAV3Y9wWIc5adf_9qSdo=w2288',
        dollar : 130,
        options : [
            { name : 'Color', options : [ 'Chalk', 'Charcoal', 'Aqua', 'Sand']}
        ]
    },
    {
        name : 'Google Stadia Premier Edition',
        img : 'https://lh3.googleusercontent.com/4yZeYVAnZmUGkr9GtVAO2aDLyTHe-wJcbv_eMtusJMMEjDTJ3FElv0_zSF6dYKAUZSM=w2288',
        url : 'https://store.google.com/config/stadia_premiere_edition',
        dollar : 130
    },
    {
        name : 'Chromecast Ultra',
        img : 'https://lh3.googleusercontent.com/OeigOAp_JM-wzIvVuYE_MTH4xvg39OEwGe9pqVRpZwvzOAtzWnNwyrr8tk_K02SCzLo',
        url : 'https://store.google.com/product/chromecast_ultra',
        dollar : 69
    },
    {
        name : 'Google Nest Mini',
        url : 'https://store.google.com/product/google_nest_mini',
        img : 'https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D1600%252C1067%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C1067%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-10%252Fefd931e0-ef58-11e9-bdef-b2beac92b25c%26client%3Da1acac3e1b3290917d92%26signature%3Da1b1d7d1d92dc7d0ce104c52ab4fcf4c3a2f6ba9&client=amp-blogside-v2&signature=ee12299a4f025cd000209797223cf3aac0d23310',
        dollar : 59,
        options : [
            { name : 'Color', options: ['Chalk', 'Charcoal', 'Coral', 'Sky']}
        ]
    },
    {
        name : 'Google Home',
        url : 'https://store.google.com/product/google_home',
        img : 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5578/5578849_sd.jpg;maxHeight=640;maxWidth=550',
        dollar : 99
    },
    {
        name : 'Gaming Mouse',
        url : 'https://www.amazon.com/Logitech-Master-Advanced-Wireless-Mouse/dp/B07S395RWD',
        img : 'https://images-na.ssl-images-amazon.com/images/I/613a-3jtieL._AC_SL1500_.jpg',
        dollar : 100,
        options : [
            { name : 'Color', options : [ 'Graphite', 'Mid Grey' ]}
        ]
    },
    {
        name : 'Nesspresso Coffee Maker',
        url : 'https://www.amazon.com/Nespresso-VertuoPlus-Coffee-Espresso-DeLonghi/dp/B01N7GO468/',
        img : 'https://images-na.ssl-images-amazon.com/images/I/71KImg251cL._AC_SL1500_.jpg',
        dollar : 130,
        options : [
            { name : 'Color', options : ['Graphite Metal', 'Matte Black', 'Red' ]}
        ]
    },
    {
        name : 'Keychron K2 Mechanical Keyboard',
        img : 'https://cdn.shopify.com/s/files/1/0059/0630/1017/products/K2-LED-Red_f28b594f-9bde-41d3-99ff-c089037b5627_1800x1800.jpg?v=1572842100',
        url : 'https://www.keychron.com/products/keychron-k2-mechanical-keyboard',
        dollar : 76,
        options : [
            { name : 'Backlight', options : [ 'White', 'RGB']},
            { name : 'Switch', options : [ 'Red', 'Brown', 'Blue']}
        ]
    },
    {
        name : 'Bathtub Tray Caddy',
        url : 'https://www.amazon.com/Bamboo-Bath-Tub-Tray-Caddy/dp/B071HD21VZ/ref=sr_1_1_sspa',
        img : 'https://images-na.ssl-images-amazon.com/images/I/71aFCnGOolL._AC_SL1500_.jpg',
        dollar : 39
    },
    {
        name : 'Spiderman - PS4',
        url : 'https://www.amazon.com/Marvels-Spider-Man-PlayStation-4/dp/B01GW8YDLK/ref=sr_1_2',
        img : 'https://images-na.ssl-images-amazon.com/images/I/81d6JU6g1pL._AC_SL1500_.jpg',
        dollar : 40
    },
    {
        name : '6 Month Subcription to Audible',
        img : 'https://m.media-amazon.com/images/G/01/Audible/en_US/images/creative/A4-746_Tabrefreshbookwall_LP_Benefits_Bookwall_v3.png',
        url : 'https://www.audible.com/?pf_rd_p=d02dffb0-503a-4153-a411-93603e104efa&pf_rd_r=WBTKEYA7SR2AXVNFAGEV&ref=a_ep_giftce_t1_nav_header_logo',
        dollar : 90
    },
    {
        name : 'Aeropress',
        url : 'https://www.amazon.com/AeroPress-Coffee-Espresso-Maker-Bitterness/dp/B0047BIWSK/ref=sr_1_4',
        img : 'https://images-na.ssl-images-amazon.com/images/I/71iwythG2qL._AC_SL1500_.jpg',
        dollar : 28
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
        url : 'https://www.amazon.com/COSORI-Electric-Gooseneck-Variable-Stainless/dp/B07T1CH2HH/ref=sr_1_4',
        img : 'https://images-na.ssl-images-amazon.com/images/I/61L4DrXIPKL._AC_SL1440_.jpg',
        options : [
            { name : 'Color', options : ['Matte Black', 'Silver']}
        ],
        dollar : 70
    },
    {
        name : 'Slalom Spice Container',
        url : 'https://gear.slalom.com/SLA41/Employee+Store/Accessories/Lifestyle/Bamboo+Container.axd?cid=2819',
        img : 'https://gear.slalom.com/images/products/dirs/41%2055018/41-55018A.jpg',
        dollar : 4
    },
    {
        name : 'Slalom Lunch Box',
        url : 'https://gear.slalom.com/SLA41/Employee+Store/Accessories/Bags/Recycled+4+Can+Lunch+Cooler.axd?cid=2819',
        img : 'https://gear.slalom.com/images/products/dirs/41%2046065/41-46065A.jpg',
        dollar : 5.9
    },
    {
        name : 'Slalom Travel Bowls',
        url : 'https://gear.slalom.com/SLA41/Team+Store/In+Stock/Mocha+Collapsible+Bowls+with+Case.axd?cid=2819',
        img : 'https://gear.slalom.com/images/products/dirs/41%2075022/41-75022A.jpg',
        dollar : 11.15
    },
    {
        name : 'Slalom Travel Cooler',
        url : 'https://gear.slalom.com/SLA41/Team+Store/In+Stock/Collapsible+Party+Cooler.axd?cid=2819',
        img : 'https://gear.slalom.com/images/products/dirs/41%2052015/41-52015A.jpg',
        dollar : 26.4
    },
    {
        name : 'Slalom Tumbler',
        img : 'https://gear.slalom.com/images/products/dirs/41%2051021/41-51021A.jpg',
        url : 'https://gear.slalom.com/SLA41/Team+Store/In+Stock/Mysa+Double+Wall+Ceramic+Tumbler+14oz.axd?cid=2819',
        dollar : 10
    },
    {
        name : 'Anker Power Bank',
        img : 'https://d2211byn0pk9fi.cloudfront.net/spree/products/70014/product/A1232011_TD02_V1.jpg?1531463456',
        url : 'https://www.anker.com/products/variant/anker-powercore-lite-10000mah/A1232011',
        dollar : 30,
        options : [
            { name : 'Color', options : [ 'Black', 'White']}
        ]
    },
    {
        name : 'Tungsten Cube',
        url : 'https://www.amazon.com/Tungsten-Cube-1-5-One-Kilo/dp/B00XZBIJLS',
        img : 'https://images-na.ssl-images-amazon.com/images/I/610fIDZY10L._SL1280_.jpg',
        dollar : 140
    },
    {
        name : '24 Pack of Blenheim Ginger Ale (Chad\'s Favorite)',
        url : 'https://www.blenheimgingerale.com/products/',
        img : 'https://www.shopblenheimgingerale.com/v/vspfiles/photos/001-2.jpg',
        dollar : 26,
        options : [
            { name : 'Variety', options : [ 'Hot', 'Not as Hot', 'Diet', 'Half Hot/Half Not as Hot']}
        ]
    },
    {
        name : 'Tea Infuser',
        url : 'https://www.amazon.com/Threaded-Connection-Stainless-Extended-Seasonings/dp/B075K57B73/ref=sr_1_4',
        img : 'https://images-na.ssl-images-amazon.com/images/I/61FDiSD3OhL._AC_SL1000_.jpg',
        dollar : 6
    },
    {
        name : 'Coldbrew Coffee Maker',
        url : 'https://www.amazon.com/dp/B071ZWR7M8',
        img : 'https://images-na.ssl-images-amazon.com/images/I/71jlAVRFLkL._AC_SL1500_.jpg',
        dollar : 30
    },
    {
        name : 'Slalom Carharrt Hat',
        url : 'https://gear.slalom.com/SLA41/Employee+Store/Apparel/All+Apparel/Carhartt+Rugged+Series+Cap.axd?cid=2797',
        img : 'https://gear.slalom.com/images/products/dirs/41%2031098/41-31098A.jpg',
        dollar : 17
    },
    {
        name : 'Adult Coloring Book',
        url : 'https://www.amazon.com/Adult-Coloring-Book-Relieving-Designs/dp/1945710799/ref=sr_1_3',
        img : 'https://images-na.ssl-images-amazon.com/images/I/917uSJDllZL.jpg',
        dollar : 5
    },
    {
        name : 'Letterboard',
        url : 'https://www.amazon.com/dp/B073Q25M4J/ref=cm_sw_r_sms_apa_i_OdQ3Db4B4PNRF',
        img : 'https://images-na.ssl-images-amazon.com/images/I/81imPDikS0L._AC_SL1500_.jpg',
        dollar : 21,
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
            { name : 'Size', options : ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', 'LT', 'XLT', '2XLT', '3XLT', '4XLT']}
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
            { name : 'Size', options : ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL']}
        ]
    },
    {
        name : 'Echo Dot (3rd Gen)',
        url : 'https://www.amazon.com/Echo-Dot-3rd-Gen-speaker/dp/B07FZ8S74R/ref=sr_1_1',
        img : 'https://images-na.ssl-images-amazon.com/images/I/619HkSq0-mL._AC_SL1000_.jpg',
        dollar : 40,
        options : [
            { name : 'Color', options : [ 'Charcoal', 'Heather Grey', 'Plum', 'Sandstone']}
        ]
    },
    {
        name : 'Echo Show 8',
        url : 'https://www.amazon.com/Echo-Show-8/dp/B07PF1Y28C/ref=sr_1_2',
        img : 'https://images-na.ssl-images-amazon.com/images/I/611MAU5uPQL._AC_SL1000_.jpg',
        dollar : 130,
        options : [
            { name : 'Color', options : [ 'Charcoal', 'Sandstone']}
        ]
    },
    {
        name : 'Amazon Echo 3rd Gen',
        url : 'https://www.amazon.com/all-new-Echo/dp/B07NFTVP7P/ref=sr_1_3',
        img : 'https://images-na.ssl-images-amazon.com/images/I/61BINWLB3kL._AC_SL1000_.jpg',
        dollar : 100,
        options : [
            { name : 'Color', options : ['Charcoal', 'Heather Grey', 'Sandstone', 'Twilight Blue']}
        ]
    },
    {
        name : 'Anker Bluetooth Speaker',
        url : 'https://www.anker.com/products/variant/soundcore-2/A3105013',
        img : 'https://d2211byn0pk9fi.cloudfront.net/spree/products/31192/product/A3105011_TD01_V1tif.jpg?1495417789',
        dollar : 45,
        options : [
            { name : 'Color', options : ['Black', 'Blue', 'Red']}
        ]
    },
    {
        name : 'Roku Ultra',
        url : 'https://www.roku.com/products/roku-ultra',
        img : 'https://cigars.roku.com/v1/http%3A%2F%2Fimage.roku.com%2Fw%2Frapid%2Fimages%2Fpdp-carousel-items%2F9b846f05-cc75-498c-840d-2c6d9254f769.png?quality=95',
        dollar : 100
    },
    {
        name : 'Fire TV Cube',
        url : 'https://www.amazon.com/all-new-fire-tv-cube-with-alexa-voice-remote/dp/B07KGVB6D6/ref=sr_1_2',
        img : 'https://images-na.ssl-images-amazon.com/images/I/41fziVetM7L._AC_SL1000_.jpg',
        dollar : 120
    },
    {
        name : 'Azul Board Game',
        url : 'https://www.amazon.com/Plan-Games-Azul-Board-Game/dp/B077MZ2MPW/ref=sr_1_14',
        img : 'https://images-na.ssl-images-amazon.com/images/I/91AUH08qxfL._AC_SL1500_.jpg',
        dollar : 27
    },
    {
        name : 'Bunny Kingdom Board Game',
        url : 'https://www.amazon.com/IELLO-Bunny-Kingdom-Strategy-Board/dp/B01J1UKSGA/ref=sr_1_4',
        img : 'https://images-na.ssl-images-amazon.com/images/I/91UWQM9tikL._AC_SL1500_.jpg',
        dollar : 39
    },
    {
        name : 'Pokémon - Gen 8',
        img : 'https://media.gamestop.com/i/gamestop/Pokemon_SS_HeroM/pok%C3%A9mon-sword-%26-pok%C3%A9mon-shield.jpg',
        url : 'https://www.amazon.com/Pokemon-Sword-Nintendo-Switch/dp/B07PC7X38X/ref=sr_1_1',
        dollar : 60,
        options : [
            { name : 'Edition', options : ['Sword', 'Shield']}
        ]
    },
    {
        name : 'Luigi\'s Mansion 3',
        url : 'https://www.amazon.com/Luigis-Mansion-3-Nintendo-Switch/dp/B07SK4W1VJ/ref=sr_1_1',
        img : 'https://images-na.ssl-images-amazon.com/images/I/719SCN8iaWL._AC_SL1500_.jpg',
        dollar : 60
    },
    {
        name : 'Kindle',
        dollar : 110,
        img : 'https://images-na.ssl-images-amazon.com/images/I/61Ww4abGclL._AC_SL1000_.jpg',
        url : 'https://www.amazon.com/All-new-Kindle-now-with-a-built-in-front-light/dp/B07DLPWYB7/ref=sr_1_2',
        options : [
            { name : 'Color', options : [ 'White', 'Black' ]}
        ]
    },
    {
        name : 'Arduino Smart Car Starter Set',
        url : 'https://www.amazon.com/ELEGOO-Tracking-Ultrasonic-Intelligent-Educational/dp/B07KPZ8RSZ/ref=sr_1_8',
        dollar : 65,
        img : 'https://images-na.ssl-images-amazon.com/images/I/71QZpdy609L._AC_SL1200_.jpg'
    },
    {
        name : 'Arduino Starter Set',
        url : 'https://www.amazon.com/ELEGOO-Project-Tutorial-Controller-Projects/dp/B01D8KOZF4/ref=sr_1_3',
        dollar : 35,
        img : 'https://images-na.ssl-images-amazon.com/images/I/91O05A7aWXL._SL1500_.jpg'
    },
    {
        name : 'Anova Sous Vide',
        url : 'https://www.amazon.com/Anova-Culinary-Precision-Bluetooth-Included/dp/B07C7PW3PC/ref=sr_1_4',
        dollar : 100,
        img : 'https://images-na.ssl-images-amazon.com/images/I/61Kk5E3VQ6L._AC_SL1500_.jpg'
    },
    {
        name : 'Adult RC Car',
        url : 'https://www.amazon.com/Controller-Controlled-Electronic-Waterproof-Off-Road/dp/B07LD3QV8Q/ref=sr_1_1_sspa',
        img : 'https://images-na.ssl-images-amazon.com/images/I/61-xp2mbpUL._AC_SL1000_.jpg',
        dollar : 70
    },
    {
        name : 'Terraforming Mars Board Game',
        url : 'https://www.amazon.com/Indie-Boards-Cards-Terraforming-Board/dp/B01GSYA4K2/ref=sr_1_4',
        img : 'https://images-na.ssl-images-amazon.com/images/I/91RdR7olLsL._SL1500_.jpg',
        dollar : 50
    },
    {
        name : 'Western Legends Board Game',
        url : 'https://www.amazon.com/Kolossal-Games-Western-Legends/dp/B07L9DYKRX/ref=sr_1_1',
        dollar : 65,
        img : 'https://images-na.ssl-images-amazon.com/images/I/518DscG6h-L.jpg'
    },
    {
        name : 'For Sale Card Game',
        url : 'https://www.amazon.com/Gryphon-Games-101124N-Sale-Card/dp/B001PQLNY0/ref=sr_1_4',
        dollar : 21,
        img : 'https://images-na.ssl-images-amazon.com/images/I/71TPmgcPJZL._SL1073_.jpg'
    },
    {
        name : 'The Mind Card Game',
        url : 'https://www.amazon.com/Pandasaurus-Games-201809PAN-Mind-Card/dp/B07C4F3KLF/ref=sr_1_1',
        dollar : 9,
        img : 'https://images-na.ssl-images-amazon.com/images/I/812LHXcmJWL._SL1500_.jpg'
    },
    {
        name : 'Slalom Cowl Tee',
        url : 'https://gear.slalom.com/SLA41/Employee+Store/Apparel/All+Apparel/New+Era+Blend+Cowl+Tee.axd',
        img : 'https://gear.slalom.com/images/products/dirs/41%2025048/41-25048A.jpg',
        dollar : 31,
        options : [
            { name : 'Size', options : ['XS', 'S', 'M', 'L', 'XL', '2XL']}
        ]
    },
    {
        name : 'Slalom Pen',
        url : 'https://gear.slalom.com/SLA41/Employee+Store/Office+Tech/Paper+Mate+Ink+Joy+Pen.axd?order_by=Price&sort_order=Asc',
        img : 'https://gear.slalom.com/images/products/dirs/41%2051001/41-51001BlackA.jpg',
        dollar : .5
    },
    {
        name : 'Slalom Journal',
        url : 'https://gear.slalom.com/SLA41/Employee+Store/Office+Tech/Tucson+Medium+Journal.axd?order_by=Price&sort_order=Asc',
        img : 'https://gear.slalom.com/images/products/dirs/41%2053000/41-53000A.jpg',
        dollar : 8.2
    },
    {
        name : 'Northampton Saints Replica Jersey',
        url : 'https://www.saintsstore.co.uk/collections/replica-kit/products/19-20-replica-home-jersey-adult',
        img : 'https://cdn.shopify.com/s/files/1/1577/1155/products/AN5A3469_copy.jpg?v=1569573133',
        dollar : 100,
        options : [
            { name : 'Size', options : [ 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '6XL']}
        ]
    },
    {
        name : 'Rugby ATL Men\'s Replica Jersey',
        url : 'https://www.rugbyatl.rugby/product/mens-rugby-atl-replica-jerseys-by-paladin/',
        img : 'https://www.rugbyatl.rugby/wp-content/uploads/sites/10/2019/11/Rugby-ATL-Mens-Jersey-front.png',
        dollar : 69,
        options : [
            { name : 'Size', options : ['M', 'L', 'XL', '2XL' ]}
        ]
    },
    {
        name : 'Rugby ATL Hoodie',
        url : 'https://www.rugbyatl.rugby/product/ratl-unisex-fleece-hoodie/',
        img : 'https://www.rugbyatl.rugby/wp-content/uploads/sites/10/2019/11/mockup-782692ea.jpg',
        dollar : 59,
        options : [
            { name : 'Color', options : ['Black', 'Navy']},
            { name : 'Size', options : ['XS', 'S', 'M', 'L', 'XL', '2XL']}
        ]
    },
    {
        name : 'Rugby ATL Men\'s Polo',
        url : 'https://www.rugbyatl.rugby/product/ccc-waimak-pique-polo-black/',
        img : 'https://www.rugbyatl.rugby/wp-content/uploads/sites/10/2019/08/Black-polo.png',
        dollar : 59,
        options : [
            { name : 'Color', options : [ 'Black', 'Red', 'Grey']},
            { name : 'Size', options : ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL']}
        ]
    },
    {
        name : 'Rugby ATL Ladies Polo',
        url : 'https://www.rugbyatl.rugby/product/ladies-red-holloway-polo/',
        img : 'https://www.rugbyatl.rugby/wp-content/uploads/sites/10/2019/10/IMG01127.png',
        dollar : 59,
        options : [
            { name : 'Size', options : ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL']}
        ]
    },
    {
        name : 'Rugby ATL Women\'s Replica Jersey',
        url : 'https://www.rugbyatl.rugby/product/womens-rugby-atl-replica-jerseys-by-paladin/',
        img : 'https://www.rugbyatl.rugby/wp-content/uploads/sites/10/2019/11/Rugby-ATL-Womens-Jersey-front.png',
        dollar : 69,
        options : [
            { name : 'Size', options : [ 'M', 'L', 'XL', '2XL']}
        ]
    }
];

export default storeItems;