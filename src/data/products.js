/**
 * Tiora Product Catalog
 * 
 * Single source of truth for all curated fashion products.
 * Easily add new products by appending objects to the array below.
 * The website will automatically display them without any component modifications.
 * 
 * Fields:
 * - id: unique number
 * - name: descriptive product title
 * - category: "women" | "men"
 * - subcategory: "t-shirts" | "shirts" | "jackets" | "jeans" | "dresses" | "tops" | "trousers" | "skirts" | "ethnic" | "accessories"
 * - image: relative path in public/ or absolute URL
 * - amazonUrl: Amazon affiliate redirect URL
 */

const products = [
  {
    "id": 100,
    "name": "Pleated A-Line Mini Skirt",
    "category": "women",
    "subcategory": "skirts",
    "image": "/products/women/women-001.jpg",
    "price": "₹ 699",
    "amazonUrl": "https://link.amazon/B0cC4BY12"
  },
  {
    "id": 106,
    "name": "BodyCon dress",
    "category": "women",
    "subcategory": "skirts",
    "image": "/products/women/women-78.png",
    "price": "₹ 455",
    "amazonUrl": "https://link.amazon/B01tNnUe0"
  },
  {
    "id": 105,
    "name": "Relaxed Fit Casual Top",
    "category": "women",
    "subcategory": "tops",
    "image": "/products/women/women-002.jpg",
    "price": "₹ 479",
    "amazonUrl": "https://link.amazon/B043nwj8v"
  },
  {
    "id": 110,
    "name": "Ribbed Knit Fitted T-Shirt",
    "category": "women",
    "subcategory": "t-shirts",
    "image": "/products/women/women-003.jpg",
    "price": "₹ 349",
    "amazonUrl": "https://link.amazon/B06PvR4A5"
  },
  {
    "id": 115,
    "name": "Cropped Casual Denim Jacket",
    "category": "women",
    "subcategory": "jackets",
    "image": "/products/women/women-004.jpg",
    "price": "₹ 999",
    "amazonUrl": "https://link.amazon/B09CN665V"
  },
  {
    "id": 120,
    "name": "Cropped Casual Denim Jacket",
    "category": "women",
    "subcategory": "jackets",
    "image": "/products/women/women-005.jpg",
    "price": "₹ 899",
    "amazonUrl": "https://link.amazon/B04RkW6lC"
  },
  {
    "id": 125,
    "name": "Lightweight Casual Linen Jacket",
    "category": "women",
    "subcategory": "jackets",
    "image": "/products/women/women-006.jpg",
    "price": "₹ 849",
    "amazonUrl": "https://link.amazon/B08FEeKot"
  },
  {
    "id": 130,
    "name": "Pleated A-Line Midi Skirt",
    "category": "women",
    "subcategory": "skirts",
    "image": "/products/women/women-007.jpg",
    "price": "₹ 729",
    "amazonUrl": "https://link.amazon/B07sWwMHl"
  },
  {
    "id": 135,
    "name": "Embroidered Flared Midi Skirt",
    "category": "women",
    "subcategory": "skirts",
    "image": "/products/women/women-008.jpg",
    "price": "₹ 899",
    "amazonUrl": "https://link.amazon/B0dtrFQzX"
  },
  {
    "id": 140,
    "name": "Cropped Utility Casual Skirt",
    "category": "women",
    "subcategory": "skirts",
    "image": "/products/women/women-009.jpg",
    "price": "₹ 399",
    "amazonUrl": "https://link.amazon/B0i5LVDgu"
  },
  {
    "id": 145,
    "name": "Minimalist Structured Mini Skirt",
    "category": "women",
    "subcategory": "skirts",
    "image": "/products/women/women-010.jpg",
    "price": "₹ 799",
    "amazonUrl": "https://link.amazon/B04Qyyngw"
  },
  {
    "id": 150,
    "name": "Boxy Striped Cotton Jeans",
    "category": "women",
    "subcategory": "jeans",
    "image": "/products/women/women-011.jpg",
    "price": "₹ 729",
    "amazonUrl": "https://link.amazon/B0hDsVZI3"
  },
  {
    "id": 155,
    "name": "High-Waist Relaxed Fit Jeans",
    "category": "women",
    "subcategory": "jeans",
    "image": "/products/women/women-012.jpg",
    "price": "₹ 749",
    "amazonUrl": "https://link.amazon/B024MGpJd"
  },
  {
    "id": 160,
    "name": "Relaxed Fit Casual Shirt",
    "category": "women",
    "subcategory": "shirts",
    "image": "/products/women/women-013.jpg",
    "price": "₹ 749",
    "amazonUrl": "https://link.amazon/B02erTHba"
  },
  {
    "id": 165,
    "name": "Chunky Knit Oversized Shirt",
    "category": "women",
    "subcategory": "shirts",
    "image": "/products/women/women-014.jpg",
    "price": "₹ 824",
    "amazonUrl": "https://link.amazon/B0aT2bYhc"
  },
  {
    "id": 170,
    "name": "Boho Chiffon Printed Shirt",
    "category": "women",
    "subcategory": "shirts",
    "image": "/products/women/women-015.jpg",
    "price": "₹ 749",
    "amazonUrl": "https://link.amazon/B04vSaV34"
  },
  {
    "id": 175,
    "name": "Casual Denim Oversized Shirt",
    "category": "women",
    "subcategory": "shirts",
    "image": "/products/women/women-016.jpg",
    "price": "₹ 864",
    "amazonUrl": "https://link.amazon/B04ybRA0e"
  },
  {
    "id": 180,
    "name": "Relaxed Fit Graphic T-Shirt",
    "category": "women",
    "subcategory": "t-shirts",
    "image": "/products/women/women-017.jpg",
    "price": "₹ 349",
    "amazonUrl": "https://link.amazon/B04vhdBzx"
  },
  {
    "id": 185,
    "name": "Oversized Casual Cotton T-Shirt",
    "category": "women",
    "subcategory": "t-shirts",
    "image": "/products/women/women-018.jpg",
    "price": "₹ 399",
    "amazonUrl": "https://link.amazon/B034KKG2V"
  },
  {
    "id": 190,
    "name": "Vintage Wash Fitted T-Shirt",
    "category": "women",
    "subcategory": "t-shirts",
    "image": "/products/women/women-019.jpg",
    "price": "₹ 949",
    "amazonUrl": "https://link.amazon/B06Gh27Gq"
  },
  {
    "id": 195,
    "name": "Cropped Ribbed Everyday T-Shirt",
    "category": "women",
    "subcategory": "t-shirts",
    "image": "/products/women/women-020.jpg",
    "price": "₹ 1,199",
    "amazonUrl": "https://link.amazon/B0eX7bwoZ"
  },
  {
    "id": 200,
    "name": "Classic Oversized Streetwear T-Shirt",
    "category": "women",
    "subcategory": "t-shirts",
    "image": "/products/women/women-021.jpg",
    "price": "₹ 399",
    "amazonUrl": "https://link.amazon/B02rwxNOe"
  },
  {
    "id": 205,
    "name": "Minimal Casual Crew Neck T-Shirt",
    "category": "women",
    "subcategory": "t-shirts",
    "image": "/products/women/women-022.jpg",
    "price": "₹ 399",
    "amazonUrl": "https://link.amazon/B05aTtIE8"
  },
  {
    "id": 210,
    "name": "Relaxed Drop-Shoulder T-Shirt",
    "category": "women",
    "subcategory": "t-shirts",
    "image": "/products/women/women-023.jpg",
    "price": "₹ 399",
    "amazonUrl": "https://link.amazon/B0ic5bLnn"
  },
  {
    "id": 215,
    "name": "Relaxed Fit Cotton Graphic T-Shirt",
    "category": "women",
    "subcategory": "t-shirts",
    "image": "/products/women/women-024.jpg",
    "price": "₹ 260",
    "amazonUrl": "https://link.amazon/B0gVNBpwc"
  },
  {
    "id": 220,
    "name": "High-Waist Wide-Leg Denim Jeans",
    "category": "women",
    "subcategory": "jeans",
    "image": "/products/women/women-025.jpg",
    "price": "₹ 645",
    "amazonUrl": "https://link.amazon/B085B7LtN"
  },
  {
    "id": 225,
    "name": "Relaxed Straight Fit Washed Jeans",
    "category": "women",
    "subcategory": "jeans",
    "image": "/products/women/women-026.jpg",
    "price": "₹ 640",
    "amazonUrl": "https://link.amazon/B0guNAN29"
  },
  {
    "id": 230,
    "name": "Oversized Relaxed Fit Casual Shirt",
    "category": "women",
    "subcategory": "shirts",
    "image": "/products/women/women-027.jpg",
    "price": "₹ 499",
    "amazonUrl": "https://link.amazon/B05IfbsGf"
  },
  {
    "id": 235,
    "name": "Classic Striped Cotton Shirt",
    "category": "women",
    "subcategory": "shirts",
    "image": "/products/women/women-028.jpg",
    "price": "₹ 499",
    "amazonUrl": "https://link.amazon/B093Ug24M"
  },
  {
    "id": 240,
    "name": "Relaxed Button-Down Casual Shirt",
    "category": "women",
    "subcategory": "shirts",
    "image": "/products/women/women-029.jpg",
    "price": "₹ 499",
    "amazonUrl": "https://link.amazon/B04TltwTW"
  },
  {
    "id": 245,
    "name": "Cropped Oversized Everyday Shirt",
    "category": "women",
    "subcategory": "shirts",
    "image": "/products/women/women-030.jpg",
    "price": "₹ 499",
    "amazonUrl": "https://link.amazon/B0gf18dU2"
  },
  {
    "id": 250,
    "name": "Floral Print Relaxed Fit Shirt",
    "category": "women",
    "subcategory": "shirts",
    "image": "/products/women/women-031.jpg",
    "price": "₹ 499",
    "amazonUrl": "https://link.amazon/B02TSmjLr"
  },
  {
    "id": 255,
    "name": "Minimal Linen Blend Casual Shirt",
    "category": "women",
    "subcategory": "shirts",
    "image": "/products/women/women-032.jpg",
    "price": "₹ 479",
    "amazonUrl": "https://link.amazon/B0ertbnIF"
  },
  {
    "id": 260,
    "name": "Ribbed Fitted Casual Top",
    "category": "women",
    "subcategory": "tops",
    "image": "/products/women/women-033.jpg",
    "price": "₹ 448",
    "amazonUrl": "https://link.amazon/B02qVFn0r"
  },
  {
    "id": 265,
    "name": "Cropped Textured Everyday Top",
    "category": "women",
    "subcategory": "tops",
    "image": "/products/women/women-034.jpg",
    "price": "₹ 448",
    "amazonUrl": "https://link.amazon/B0dvcE7Qb"
  },
  {
    "id": 270,
    "name": "Relaxed Straight Fit Casual Pants",
    "category": "women",
    "subcategory": "pants",
    "image": "/products/women/women-035.jpg",
    "price": "₹ 999",
    "amazonUrl": "https://link.amazon/B0ebcPBd0"
  },
  {
    "id": 275,
    "name": "Relaxed Straight Fit Casual Pants",
    "category": "women",
    "subcategory": "pants",
    "image": "/products/women/women-036.jpg",
    "price": "₹ 999",
    "amazonUrl": "https://link.amazon/B05P6IAsg"
  },
  {
    "id": 280,
    "name": "Relaxed Straight Fit Casual Pants",
    "category": "women",
    "subcategory": "pants",
    "image": "/products/women/women-037.jpg",
    "price": "₹ 739",
    "amazonUrl": "https://link.amazon/B0jhqnK4O"
  },
  {
    "id": 285,
    "name": "Relaxed Straight Fit Casual Pants",
    "category": "women",
    "subcategory": "pants",
    "image": "/products/women/women-038.jpg",
    "price": "₹ 689",
    "amazonUrl": "https://link.amazon/B07bUjS55"
  },
  {
    "id": 290,
    "name": "Minimal Ribbed Crop Top",
    "category": "women",
    "subcategory": "tops",
    "image": "/products/women/women-039.jpg",
    "price": "₹ 698",
    "amazonUrl": "https://link.amazon/B0bjn2v1n"
  },
  {
    "id": 295,
    "name": "Oversized Vintage Wash T-Shirt",
    "category": "women",
    "subcategory": "t-shirts",
    "image": "/products/women/women-040.jpg",
    "price": "₹ 399",
    "amazonUrl": "https://link.amazon/B048LIZib"
  },
  {
    "id": 300,
    "name": "Classic Oversized Cotton T-Shirt",
    "category": "women",
    "subcategory": "t-shirts",
    "image": "/products/women/women-050.jpg",
    "price": "₹ 1,099",
    "amazonUrl": "https://link.amazon/B08inkb27"
  },
  {
    "id": 305,
    "name": "Cropped Ribbed Casual T-Shirt",
    "category": "women",
    "subcategory": "t-shirts",
    "image": "/products/women/women-051.jpg",
    "price": "₹ 389",
    "amazonUrl": "https://link.amazon/B0j6m5Zrk"
  },
  {
    "id": 310,
    "name": "Relaxed Graphic Streetwear T-Shirt",
    "category": "women",
    "subcategory": "t-shirts",
    "image": "/products/women/women-052.jpg",
    "price": "₹ 349",
    "amazonUrl": "https://link.amazon/B0cnerl0T"
  },
  {
    "id": 315,
    "name": "Slim Fit Everyday Cotton T-Shirt",
    "category": "women",
    "subcategory": "t-shirts",
    "image": "/products/women/women-053.jpg",
    "price": "₹ 299",
    "amazonUrl": "https://link.amazon/B0fa5Ntpu"
  },
  {
    "id": 320,
    "name": "Boxy Fit Minimal Crew Neck T-Shirt",
    "category": "women",
    "subcategory": "t-shirts",
    "image": "/products/women/women-054.jpg",
    "price": "₹ 279",
    "amazonUrl": "https://link.amazon/B07rsKAtu"
  },
  {
    "id": 325,
    "name": "Elegant Ribbed Fitted Top",
    "category": "women",
    "subcategory": "tops",
    "image": "/products/women/women-055.jpg",
    "price": "₹ 399",
    "amazonUrl": "https://link.amazon/B09n5Zyl6"
  },
  {
    "id": 330,
    "name": "Cropped Textured Casual Top",
    "category": "women",
    "subcategory": "tops",
    "image": "/products/women/women-056.jpg",
    "price": "₹ 399",
    "amazonUrl": "https://link.amazon/B0d66tuls"
  },
  {
    "id": 335,
    "name": "Relaxed Fit Printed Top",
    "category": "women",
    "subcategory": "tops",
    "image": "/products/women/women-057.jpg",
    "price": "₹ 949",
    "amazonUrl": "https://link.amazon/B07VygcIp"
  },
  {
    "id": 340,
    "name": "Minimalist Sleeveless Casual Top",
    "category": "women",
    "subcategory": "tops",
    "image": "/products/women/women-058.jpg",
    "price": "₹ 499",
    "amazonUrl": "https://link.amazon/B09Wp73II"
  },
  {
    "id": 345,
    "name": "Ribbed Fitted Everyday Top",
    "category": "women",
    "subcategory": "tops",
    "image": "/products/women/women-059.jpg",
    "price": "₹ 299",
    "amazonUrl": "https://link.amazon/B0dU9oZ35"
  },
  {
    "id": 350,
    "name": "Cropped Textured Casual Top",
    "category": "women",
    "subcategory": "tops",
    "image": "/products/women/women-060.jpg",
    "price": "₹ 299",
    "amazonUrl": "https://link.amazon/B07GmaTBA"
  },
  {
    "id": 355,
    "name": "Cropped Utility Denim Jacket",
    "category": "women",
    "subcategory": "jackets",
    "image": "/products/women/women-062.jpg",
    "price": "₹ 1,499",
    "amazonUrl": "https://link.amazon/B0iBis7wZ"
  },
  {
    "id": 360,
    "name": "Oversized Washed Denim Jacket",
    "category": "women",
    "subcategory": "jackets",
    "image": "/products/women/women-063.jpg",
    "price": "₹ 525",
    "amazonUrl": "https://link.amazon/B06W0UFm8"
  },
  {
    "id": 365,
    "name": "Classic Relaxed Fit Casual Jacket",
    "category": "women",
    "subcategory": "jackets",
    "image": "/products/women/women-064.jpg",
    "price": "₹ 1,599",
    "amazonUrl": "https://link.amazon/B0g4myBM0"
  },
  {
    "id": 370,
    "name": "Minimal Quilted Casual Jacket",
    "category": "women",
    "subcategory": "jackets",
    "image": "/products/women/women-065.jpg",
    "price": "₹ 525",
    "amazonUrl": "https://link.amazon/B0gSmjhaq"
  },
  {
    "id": 375,
    "name": "Vintage Cropped Casual Jacket",
    "category": "women",
    "subcategory": "jackets",
    "image": "/products/women/women-066.jpg",
    "price": "₹ 519",
    "amazonUrl": "https://link.amazon/B00oNXDy3"
  },















{
  "id": 600,
  "name": "Red Striped Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-000.png",
  "price": "₹ 398",
  "amazonUrl": "https://link.amazon/B0fJQPfzf"
},
{
  "id": 601,
  "name": "Tan Striped Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-9899.png",
  "price": "₹ 398",
  "amazonUrl": "https://link.amazon/B01A99fn9"
},
{
  "id": 605,
  "name": "Relaxed Fit Denim Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-003.png",
  "price": "₹ 499",
  "amazonUrl": "https://link.amazon/B024tyEds"
},
{
  "id": 610,
  "name": "Black Striped Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-exp.png",
  "price": "₹ 577",
  "amazonUrl": "https://link.amazon/B04fJuFg4"
},
{
  "id": 611,
  "name": "Blue Striped Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-0004.png",
  "price": "₹ 398",
  "amazonUrl": "https://link.amazon/B06kNPhkh"
},
{
  "id": 612,
  "name": "Party Wear Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-600.png",
  "price": "₹ 449",
  "amazonUrl": "https://link.amazon/B01EsLcS3"
},
{
  "id": 613,
  "name": "Pink Starboy Style",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-pink.png",
  "price": "₹ 479",
  "amazonUrl": "https://link.amazon/B0gFce6Mt"
},
{
  "id": 614,
  "name": "Green checked Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-878.png",
  "price": "₹ 460",
  "amazonUrl": "https://link.amazon/B0d1wl2qE"
},
{
  "id": 615,
  "name": "Tan Striped Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-300.png",
  "price": "₹ 498",
  "amazonUrl": "https://link.amazon/B0iIrEICn"
},
{
  "id": 616,
  "name": "Cotton Linen Blend Casual Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-01.png",
  "price": "₹ 398",
  "amazonUrl": "https://link.amazon/B0gOFHldc"
},
{
  "id": 620,
  "name": "Striped Resort Camp Collar Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-bla.png",
  "price": "₹ 499",
  "amazonUrl": "https://link.amazon/B02rNw8Lx"
},
{
  "id": 625,
  "name": "Minimal Casual Overshirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-0004 .png",
  "price": "₹ 678",
  "amazonUrl": "https://link.amazon/B09djlznJ"
},
{
  "id": 630,
  "name": "Slim Fit Everyday Casual Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-9090.png",
  "price": "₹ 499",
  "amazonUrl": "https://link.amazon/B0gFNZqGf"
},
{
  "id": 635,
  "name": "Acid Wash Streetwear Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-blue.png",
  "price": "₹ 454",
  "amazonUrl": "https://link.amazon/B0agQaYMH"
},
{
  "id": 640,
  "name": "Casual Utility Pocket Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-red.jpg",
  "price": "₹ 499",
  "amazonUrl": "https://link.amazon/B06ePRVCP"
},
{
  "id": 645,
  "name": "Vintage Oversized Washed Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-009.jpg",
  "price": "₹ 437",
  "amazonUrl": "https://link.amazon/B04jBusx0"
},
{
  "id": 650,
  "name": "Embroidered Casual Cotton Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-008.jpg",
  "price": "₹ 499",
  "amazonUrl": "https://link.amazon/B02ADWVge"
},
{
  "id": 655,
  "name": "Casual Suede Style Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-013.jpg",
  "price": "₹ 449",
  "amazonUrl": "https://link.amazon/B0epXwUlz"
},
{
  "id": 660,
  "name": "Casual Oversized Boxy Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-001.jpg",
  "price": "₹ 999",
  "amazonUrl": "https://link.amazon/B0g2COGjL"
},
{
  "id": 665,
  "name": "Heavyweight Graphic Drop-Shoulder Tee",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-002.jpg",
  "price": "₹ 1,599",
  "amazonUrl": "https://link.amazon/B06OU65QK"
},
{
  "id": 670,
  "name": "Relaxed Straight Fit Washed Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-004.jpg",
  "price": "₹ 899",
  "amazonUrl": "https://link.amazon/B0cWBYNcJ"
},
{
  "id": 675,
  "name": "Classic Corduroy Textured Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-003.jpg",
  "price": "₹ 999",
  "amazonUrl": "https://link.amazon/B006sWGt2"
},
{
  "id": 680,
  "name": "Textured Knit Casual Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-005.jpg",
  "price": "₹ 944",
  "amazonUrl": "https://link.amazon/B01amNbhl"
},
{
  "id": 685,
  "name": "Relaxed Wide-Fit Casual Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-006.jpg",
  "price": "₹ 1,299",
  "amazonUrl": "https://link.amazon/B0bZStJak"
},
{
  "id": 690,
  "name": "Classic Textured Slim Fit Polo",
  "category": "men",
  "subcategory": "polo t-shirts",
  "image": "/products/men/men-019.jpg",
  "price": "₹ 499",
  "amazonUrl": "https://link.amazon/B0e84hFbL"
},
{
  "id": 695,
  "name": "Premium Cotton Casual Polo",
  "category": "men",
  "subcategory": "polo t-shirts",
  "image": "/products/men/men-020.jpg",
  "price": "₹ 298",
  "amazonUrl": "https://link.amazon/B053xVLUm"
},
{
  "id": 700,
  "name": "Relaxed Fit Contrast Polo Tee",
  "category": "men",
  "subcategory": "polo t-shirts",
  "image": "/products/men/men-021.jpg",
  "price": "₹ 229",
  "amazonUrl": "https://link.amazon/B02xYA4dw"
},
{
  "id": 705,
  "name": "Minimal Ribbed Collar Polo",
  "category": "men",
  "subcategory": "polo t-shirts",
  "image": "/products/men/men-022.jpg",
  "price": "₹ 284",
  "amazonUrl": "https://link.amazon/B0jcuF5Xq"
},
{
  "id": 710,
  "name": "Classic Striped Casual Polo",
  "category": "men",
  "subcategory": "polo t-shirts",
  "image": "/products/men/men-023.jpg",
  "price": "₹ 286",
  "amazonUrl": "https://link.amazon/B081Oi40g"
},
{
  "id": 715,
  "name": "Relaxed Straight Fit Washed Jeans",
  "category": "men",
  "subcategory": "jeans",
  "image": "/products/men/men-024.jpg",
  "price": "₹ 769",
  "amazonUrl": "https://link.amazon/B09ee54uS"
},
{
  "id": 720,
  "name": "Classic Slim Fit Stretch Jeans",
  "category": "men",
  "subcategory": "jeans",
  "image": "/products/men/men-025.jpg",
  "price": "₹ 749",
  "amazonUrl": "https://link.amazon/B02327Ue1"
},
{
  "id": 725,
  "name": "Loose Fit Vintage Wash Jeans",
  "category": "men",
  "subcategory": "jeans",
  "image": "/products/men/men-026.jpg",
  "price": "₹ 439",
  "amazonUrl": "https://link.amazon/B08EY4h1Y"
},
{
  "id": 730,
  "name": "Straight Leg Classic Denim Jeans",
  "category": "men",
  "subcategory": "jeans",
  "image": "/products/men/men-027.jpg",
  "price": "₹ 439",
  "amazonUrl": "https://link.amazon/B01v4PTak"
},
{
  "id": 735,
  "name": "Wide-Leg Korean Fit Trousers",
  "category": "men",
  "subcategory": "korean trouser",
  "image": "/products/men/men-028.jpg",
  "price": "₹ 599",
  "amazonUrl": "https://link.amazon/B0he8orLq"
},
{
  "id": 740,
  "name": "Relaxed Korean Style Trousers",
  "category": "men",
  "subcategory": "korean trouser",
  "image": "/products/men/men-029.jpg",
  "price": "₹ 486",
  "amazonUrl": "https://link.amazon/B0hGN9jYL"
},
{
  "id": 745,
  "name": "Pleated Wide-Leg Korean Trousers",
  "category": "men",
  "subcategory": "korean trouser",
  "image": "/products/men/men-030.jpg",
  "price": "₹ 486",
  "amazonUrl": "https://link.amazon/B03mqvxJm"
},
{
  "id": 750,
  "name": "Straight Fit Korean Casual Trousers",
  "category": "men",
  "subcategory": "korean trouser",
  "image": "/products/men/men-030.jpg",
  "price": "₹ 599",
  "amazonUrl": "https://link.amazon/B05CY3LEy"
},
{
  "id": 755,
  "name": "Relaxed Wide Fit Korean Trousers",
  "category": "men",
  "subcategory": "korean trouser",
  "image": "/products/men/men-032.jpg",
  "price": "₹ 599",
  "amazonUrl": "https://link.amazon/B08nQsjh3"
},
{
  "id": 760,
  "name": "Minimal Straight Fit Korean Trousers",
  "category": "men",
  "subcategory": "korean trouser",
  "image": "/products/men/men-033.jpg",
  "price": "₹ 498",
  "amazonUrl": "https://link.amazon/B0ffoYRh7"
},
{
  "id": 765,
  "name": "Classic Relaxed Fit Denim Jeans",
  "category": "men",
  "subcategory": "jeans",
  "image": "/products/men/men-034.jpg",
  "price": "₹ 419",
  "amazonUrl": "https://link.amazon/B0c5EeFuP"
},
{
  "id": 770,
  "name": "Classic Casual Bomber Jacket",
  "category": "men",
  "subcategory": "jackets",
  "image": "/products/men/men-035.jpg",
  "price": "₹ 599",
  "amazonUrl": "https://link.amazon/B05kCS18r"
},
{
  "id": 775,
  "name": "Oversized Graphic Cotton T-Shirt",
  "category": "men",
  "subcategory": "T-shirts",
  "image": "/products/men/men-036.jpg",
  "price": "₹ 299",
  "amazonUrl": "https://link.amazon/B0eXNaUrR"
},
{
  "id": 780,
  "name": "Minimal Streetwear Casual Sneakers",
  "category": "men",
  "subcategory": "shoes",
  "image": "/products/men/men-037.jpg",
  "price": "₹ 799",
  "amazonUrl": "https://link.amazon/B05J54XEw"
},
{
  "id": 785,
  "name": "Classic Low-Top Casual Sneakers",
  "category": "men",
  "subcategory": "shoes",
  "image": "/products/men/men-038.jpg",
  "price": "₹ 3,146",
  "amazonUrl": "https://link.amazon/B0fXgs2g4"
},
{
  "id": 790,
  "name": "Everyday Lightweight Casual Shoes",
  "category": "men",
  "subcategory": "shoes",
  "image": "/products/men/men-039.jpg",
  "price": "₹ 1,299",
  "amazonUrl": "https://link.amazon/B09d5FK0Q"
},
{
  "id": 795,
  "name": "Classic Minimal Analog Watch",
  "category": "men",
  "subcategory": "watch",
  "image": "/products/men/men-040.jpg",
  "price": "₹ 3,993",
  "amazonUrl": "https://link.amazon/B0d5iahZb"
},
{
  "id": 800,
  "name": "Minimalist Stainless Steel Watch",
  "category": "men",
  "subcategory": "watch",
  "image": "/products/men/men-041.jpg",
  "price": "₹ 1,893",
  "amazonUrl": "https://link.amazon/B04EbcTkU"
},
{
  "id": 805,
  "name": "Classic Polarized Frame Sunglasses",
  "category": "men",
  "subcategory": "coolers",
  "image": "/products/men/men-042.jpg",
  "price": "₹ 465",
  "amazonUrl": "https://link.amazon/B04fby0Wg"
}

];

export default products;