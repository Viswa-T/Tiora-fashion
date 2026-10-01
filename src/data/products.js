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
  "id": 1,
  "name": "Pleated A-Line Mini Skirt",
  "category": "women",
  "subcategory": "skirts",
  "image": "/products/women/women-001.jpg",
  "amazonUrl": "https://link.amazon/B0cC4BY12"
},
{
  "id": 2,
  "name": "Relaxed Fit Casual Top",
  "category": "women",
  "subcategory": "tops",
  "image": "/products/women/women-002.jpg",
  "amazonUrl": "https://link.amazon/B043nwj8v"
},
{
  "id": 3,
  "name": "Ribbed Knit Fitted T-Shirt",
  "category": "women",
  "subcategory": "t-shirts",
  "image": "/products/women/women-003.jpg",
  "amazonUrl": "https://link.amazon/B06PvR4A5"
},
{
  "id": 4,
  "name": "Cropped Casual Denim Jacket",
  "category": "women",
  "subcategory": "jackets",
  "image": "/products/women/women-004.jpg",
  "amazonUrl": "https://link.amazon/B09CN665V"
},
{
  "id": 5,
  "name": "Cropped Casual Denim Jacket",
  "category": "women",
  "subcategory": "jackets",
  "image": "/products/women/women-005.jpg",
  "amazonUrl": "https://link.amazon/B04RkW6lC"
},
{
  "id": 6,
  "name": "Lightweight Casual Linen Jacket",
  "category": "women",
  "subcategory": "jackets",
  "image": "/products/women/women-006.jpg",
  "amazonUrl": "https://link.amazon/B08FEeKot"
},
{
  "id": 7,
  "name": "Pleated A-Line Midi Skirt",
  "category": "women",
  "subcategory": "skirts",
  "image": "/products/women/women-007.jpg",
  "amazonUrl": "https://link.amazon/B07sWwMHl"
},
{
  "id": 8,
  "name": "Embroidered Flared Midi Skirt",
  "category": "women",
  "subcategory": "skirts",
  "image": "/products/women/women-008.jpg",
  "amazonUrl": "https://link.amazon/B0dtrFQzX"
},
{
  "id": 9,
  "name": "Cropped Utility Casual Skirt",
  "category": "women",
  "subcategory": "skirts",
  "image": "/products/women/women-009.jpg",
  "amazonUrl": "https://link.amazon/B0i5LVDgu"
},
{
  "id": 10,
  "name": "Minimalist Structured Mini Skirt",
  "category": "women",
  "subcategory": "skirts",
  "image": "/products/women/women-010.jpg",
  "amazonUrl": "https://link.amazon/B04Qyyngw"
},
{
  "id": 11,
  "name": "Boxy Striped Cotton Jeans",
  "category": "women",
  "subcategory": "jeans",
  "image": "/products/women/women-011.jpg",
  "amazonUrl": "https://link.amazon/B0hDsVZI3"
},
{
  "id": 12,
  "name": "High-Waist Relaxed Fit Jeans",
  "category": "women",
  "subcategory": "jeans",
  "image": "/products/women/women-012.jpg",
  "amazonUrl": "https://link.amazon/B024MGpJd"
},
{
  "id": 13,
  "name": "Relaxed Fit Casual Shirt",
  "category": "women",
  "subcategory": "shirts",
  "image": "/products/women/women-013.jpg",
  "amazonUrl": "https://link.amazon/B02erTHba"
},
{
  "id": 14,
  "name": "Chunky Knit Oversized Shirt",
  "category": "women",
  "subcategory": "shirts",
  "image": "/products/women/women-014.jpg",
  "amazonUrl": "https://link.amazon/B0aT2bYhc"
},
{
  "id": 15,
  "name": "Boho Chiffon Printed Shirt",
  "category": "women",
  "subcategory": "shirts",
  "image": "/products/women/women-015.jpg",
  "amazonUrl": "https://link.amazon/B04vSaV34"
},
{
  "id": 16,
  "name": "Casual Denim Oversized Shirt",
  "category": "women",
  "subcategory": "shirts",
  "image": "/products/women/women-016.jpg",
  "amazonUrl": "https://link.amazon/B04ybRA0e"
},
{
  "id": 17,
  "name": "Relaxed Fit Graphic T-Shirt",
  "category": "women",
  "subcategory": "t-shirts",
  "image": "/products/women/women-017.jpg",
  "amazonUrl": "https://link.amazon/B04vhdBzx"
},
{
  "id": 18,
  "name": "Oversized Casual Cotton T-Shirt",
  "category": "women",
  "subcategory": "t-shirts",
  "image": "/products/women/women-018.jpg",
  "amazonUrl": "https://link.amazon/B034KKG2V"
},
{
  "id": 19,
  "name": "Vintage Wash Fitted T-Shirt",
  "category": "women",
  "subcategory": "t-shirts",
  "image": "/products/women/women-019.jpg",
  "amazonUrl": "https://link.amazon/B06Gh27Gq"
},
{
  "id": 20,
  "name": "Cropped Ribbed Everyday T-Shirt",
  "category": "women",
  "subcategory": "t-shirts",
  "image": "/products/women/women-020.jpg",
  "amazonUrl": "https://link.amazon/B0eX7bwoZ"
},
{
  "id": 21,
  "name": "Classic Oversized Streetwear T-Shirt",
  "category": "women",
  "subcategory": "t-shirts",
  "image": "/products/women/women-021.jpg",
  "amazonUrl": "https://link.amazon/B02rwxNOe"
},
{
  "id": 22,
  "name": "Minimal Casual Crew Neck T-Shirt",
  "category": "women",
  "subcategory": "t-shirts",
  "image": "/products/women/women-022.jpg",
  "amazonUrl": "https://link.amazon/B05aTtIE8"
},
{
  "id": 23,
  "name": "Relaxed Drop-Shoulder T-Shirt",
  "category": "women",
  "subcategory": "t-shirts",
  "image": "/products/women/women-023.jpg",
  "amazonUrl": "https://link.amazon/B0ic5bLnn"
},
  {
  "id": 24,
  "name": "Relaxed Fit Cotton Graphic T-Shirt",
  "category": "women",
  "subcategory": "t-shirts",
  "image": "/products/women/women-024.jpg",
  "amazonUrl": "https://link.amazon/B0gVNBpwc"
},
{
  "id": 25,
  "name": "High-Waist Wide-Leg Denim Jeans",
  "category": "women",
  "subcategory": "jeans",
  "image": "/products/women/women-025.jpg",
  "amazonUrl": "https://link.amazon/B085B7LtN"
},
{
  "id": 26,
  "name": "Relaxed Straight Fit Washed Jeans",
  "category": "women",
  "subcategory": "jeans",
  "image": "/products/women/women-026.jpg",
  "amazonUrl": "https://link.amazon/B0guNAN29"
},
{
  "id": 27,
  "name": "Oversized Relaxed Fit Casual Shirt",
  "category": "women",
  "subcategory": "shirts",
  "image": "/products/women/women-027.jpg",
  "amazonUrl": "https://link.amazon/B05IfbsGf"
},
{
  "id": 28,
  "name": "Classic Striped Cotton Shirt",
  "category": "women",
  "subcategory": "shirts",
  "image": "/products/women/women-028.jpg",
  "amazonUrl": "https://link.amazon/B093Ug24M"
},
{
  "id": 29,
  "name": "Relaxed Button-Down Casual Shirt",
  "category": "women",
  "subcategory": "shirts",
  "image": "/products/women/women-029.jpg",
  "amazonUrl": "https://link.amazon/B04TltwTW"
},
{
  "id": 30,
  "name": "Cropped Oversized Everyday Shirt",
  "category": "women",
  "subcategory": "shirts",
  "image": "/products/women/women-030.jpg",
  "amazonUrl": "https://link.amazon/B0gf18dU2"
},
{
  "id": 31,
  "name": "Floral Print Relaxed Fit Shirt",
  "category": "women",
  "subcategory": "shirts",
  "image": "/products/women/women-031.jpg",
  "amazonUrl": "https://link.amazon/B02TSmjLr"
},
{
  "id": 32,
  "name": "Minimal Linen Blend Casual Shirt",
  "category": "women",
  "subcategory": "shirts",
  "image": "/products/women/women-032.jpg",
  "amazonUrl": "https://link.amazon/B0ertbnIF"
},
{
  "id": 33,
  "name": "Ribbed Fitted Casual Top",
  "category": "women",
  "subcategory": "tops",
  "image": "/products/women/women-033.jpg",
  "amazonUrl": "https://link.amazon/B02qVFn0r"
},
{
  "id": 34,
  "name": "Cropped Textured Everyday Top",
  "category": "women",
  "subcategory": "tops",
  "image": "/products/women/women-034.jpg",
  "amazonUrl": "https://link.amazon/B0dvcE7Qb"
},
{
  "id": 35,
  "name": "Relaxed Straight Fit Casual Pants",
  "category": "women",
  "subcategory": "pants",
  "image": "/products/women/women-035.jpg",
  "amazonUrl": "https://link.amazon/B0ebcPBd0"
},
{
  "id": 36,
  "name": "Relaxed Straight Fit Casual Pants",
  "category": "women",
  "subcategory": "pants",
  "image": "/products/women/women-036.jpg",
  "amazonUrl": "https://link.amazon/B05P6IAsg"
},
{
  "id": 37,
  "name": "Relaxed Straight Fit Casual Pants",
  "category": "women",
  "subcategory": "pants",
  "image": "/products/women/women-037.jpg",
  "amazonUrl": "https://link.amazon/B0jhqnK4O"
},
{
  "id": 38,
  "name": "Relaxed Straight Fit Casual Pants",
  "category": "women",
  "subcategory": "pants",
  "image": "/products/women/women-038.jpg",
  "amazonUrl": "https://link.amazon/B07bUjS55"
},
{
  "id": 39,
  "name": "Minimal Ribbed Crop Top",
  "category": "women",
  "subcategory": "tops",
  "image": "/products/women/women-039.jpg",
  "amazonUrl": "https://link.amazon/B0bjn2v1n"
},
{
  "id": 40,
  "name": "Oversized Vintage Wash T-Shirt",
  "category": "women",
  "subcategory": "t-shirts",
  "image": "/products/women/women-040.jpg",
  "amazonUrl": "https://link.amazon/B048LIZib"
},
{
  "id": 50,
  "name": "Classic Oversized Cotton T-Shirt",
  "category": "women",
  "subcategory": "t-shirts",
  "image": "/products/women/women-050.jpg",
  "amazonUrl": "https://link.amazon/B08inkb27"
},
{
  "id": 51,
  "name": "Cropped Ribbed Casual T-Shirt",
  "category": "women",
  "subcategory": "t-shirts",
  "image": "/products/women/women-051.jpg",
  "amazonUrl": "https://link.amazon/B0j6m5Zrk"
},
{
  "id": 52,
  "name": "Relaxed Graphic Streetwear T-Shirt",
  "category": "women",
  "subcategory": "t-shirts",
  "image": "/products/women/women-052.jpg",
  "amazonUrl": "https://link.amazon/B0cnerl0T"
},
{
  "id": 53,
  "name": "Slim Fit Everyday Cotton T-Shirt",
  "category": "women",
  "subcategory": "t-shirts",
  "image": "/products/women/women-053.jpg",
  "amazonUrl": "https://link.amazon/B0fa5Ntpu"
},
{
  "id": 54,
  "name": "Boxy Fit Minimal Crew Neck T-Shirt",
  "category": "women",
  "subcategory": "t-shirts",
  "image": "/products/women/women-054.jpg",
  "amazonUrl": "https://link.amazon/B07rsKAtu"
},
{
  "id": 55,
  "name": "Elegant Ribbed Fitted Top",
  "category": "women",
  "subcategory": "tops",
  "image": "/products/women/women-055.jpg",
  "amazonUrl": "https://link.amazon/B09n5Zyl6"
},
{
  "id": 56,
  "name": "Cropped Textured Casual Top",
  "category": "women",
  "subcategory": "tops",
  "image": "/products/women/women-056.jpg",
  "amazonUrl": "https://link.amazon/B0d66tuls"
},
{
  "id": 57,
  "name": "Relaxed Fit Printed Top",
  "category": "women",
  "subcategory": "tops",
  "image": "/products/women/women-057.jpg",
  "amazonUrl": "https://link.amazon/B07VygcIp"
},
{
  "id": 58,
  "name": "Minimalist Sleeveless Casual Top",
  "category": "women",
  "subcategory": "tops",
  "image": "/products/women/women-058.jpg",
  "amazonUrl": "https://link.amazon/B09Wp73II"
},
{
  "id": 59,
  "name": "Ribbed Fitted Everyday Top",
  "category": "women",
  "subcategory": "tops",
  "image": "/products/women/women-059.jpg",
  "amazonUrl": "https://link.amazon/B0dU9oZ35"
},
{
  "id": 60,
  "name": "Cropped Textured Casual Top",
  "category": "women",
  "subcategory": "tops",
  "image": "/products/women/women-060.jpg",
  "amazonUrl": "https://link.amazon/B07GmaTBA"
},
{
  "id": 62,
  "name": "Cropped Utility Denim Jacket",
  "category": "women",
  "subcategory": "jackets",
  "image": "/products/women/women-062.jpg",
  "amazonUrl": "https://link.amazon/B0iBis7wZ"
},
{
  "id": 63,
  "name": "Oversized Washed Denim Jacket",
  "category": "women",
  "subcategory": "jackets",
  "image": "/products/women/women-063.jpg",
  "amazonUrl": "https://link.amazon/B06W0UFm8"
},
{
  "id": 64,
  "name": "Classic Relaxed Fit Casual Jacket",
  "category": "women",
  "subcategory": "jackets",
  "image": "/products/women/women-064.jpg",
  "amazonUrl": "https://link.amazon/B0g4myBM0"
},
{
  "id": 65,
  "name": "Minimal Quilted Casual Jacket",
  "category": "women",
  "subcategory": "jackets",
  "image": "/products/women/women-065.jpg",
  "amazonUrl": "https://link.amazon/B0gSmjhaq"
},
{
  "id": 66,
  "name": "Vintage Cropped Casual Jacket",
  "category": "women",
  "subcategory": "jackets",
  "image": "/products/women/women-066.jpg",
  "amazonUrl": "https://link.amazon/B00oNXDy3"
},























{
  "id": 101,
  "name": "Classic Regular Fit Casual Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-000.png",
  "amazonUrl": "https://link.amazon/B02pGysUM"
},

{
  "id": 111,
  "name": "Embroidered Casual Cotton Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-008.jpg",
  "amazonUrl": "https://link.amazon/B0hodnyoQ"
},

{
  "id": 102,
  "name": "Relaxed Fit Denim Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-003.png",
  "amazonUrl": "https://link.amazon/B0gzd9dhP"
},


{
  "id": 106,
  "name": "Minimal Casual Overshirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-0004 .png",
  "amazonUrl": "https://link.amazon/B07dyhRfV"
},

{
  "id": 1001,
  "name": "Casual Oversized Boxy Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-001.jpg",
  "amazonUrl": "https://link.amazon/B0g2COGjL"
},
{
  "id": 1002,
  "name": "Heavyweight Graphic Drop-Shoulder Tee",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-002.jpg",
  "amazonUrl": "https://link.amazon/B06OU65QK"
},
{
  "id": 1003,
  "name": "Relaxed Straight Fit Washed Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-004.jpg",
  "amazonUrl": "https://link.amazon/B0cWBYNcJ"
},
{
  "id": 1004,
  "name": "Classic Corduroy Textured Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-003.jpg",
  "amazonUrl": "https://link.amazon/B006sWGt2"
},
{
  "id": 1005,
  "name": "Textured Knit Casual Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-005.jpg",
  "amazonUrl": "https://link.amazon/B01amNbhl"
},
{
  "id": 1006,
  "name": "Relaxed Wide-Fit Casual Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-006.jpg",
  "amazonUrl": "https://link.amazon/B0bZStJak"
},
{
  "id": 110,
  "name": "Vintage Oversized Washed Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-009.jpg",
  "amazonUrl": "https://link.amazon/B0e0maS9G"
},
{
  "id": 109,
  "name": "Casual Utility Pocket Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-red.jpg",
  "amazonUrl": "https://link.amazon/B05Jmo2M5"
},
{
  "id": 105,
  "name": "Striped Resort Camp Collar Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-bla.png",
  "amazonUrl": "https://link.amazon/B02VobXi4"
},
{
  "id": 107,
  "name": "Slim Fit Everyday Casual Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-9090.png",
  "amazonUrl": "https://link.amazon/B0gFNZqGf"
},
{
  "id": 112,
  "name": "Casual Suede Style Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-013.jpg",
  "amazonUrl": "https://link.amazon/B0gmA4gFr"
},
{
  "id": 108,
  "name": "Acid Wash Streetwear Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-blue.png",
  "amazonUrl": "https://link.amazon/B0ai3fDJs"
},
{
  "id": 104,
  "name": "Cotton Linen Blend Casual Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-01.png",
  "amazonUrl": "https://link.amazon/B0ejvLTZr"
},
{
  "id": 103,
  "name": "Modern Relaxed Fit Casual Shirt",
  "category": "men",
  "subcategory": "shirts",
  "image": "/products/men/men-0004.png",
  "amazonUrl": "https://link.amazon/B0dpoSKeS"
},

{
  "id": 1019,
  "name": "Classic Textured Slim Fit Polo",
  "category": "men",
  "subcategory": "polo t-shirts",
  "image": "/products/men/men-019.jpg",
  "amazonUrl": "https://link.amazon/B0gijhf7z"
},
{
  "id": 1020,
  "name": "Premium Cotton Casual Polo",
  "category": "men",
  "subcategory": "polo t-shirts",
  "image": "/products/men/men-020.jpg",
  "amazonUrl": "https://link.amazon/B0ccFAtFE"
},
{
  "id": 1021,
  "name": "Relaxed Fit Contrast Polo Tee",
  "category": "men",
  "subcategory": "polo t-shirts",
  "image": "/products/men/men-021.jpg",
  "amazonUrl": "https://link.amazon/B0frGhxNL"
},
{
  "id": 1022,
  "name": "Minimal Ribbed Collar Polo",
  "category": "men",
  "subcategory": "polo t-shirts",
  "image": "/products/men/men-022.jpg",
  "amazonUrl": "https://link.amazon/B03nbToVG"
},
{
  "id": 1023,
  "name": "Classic Striped Casual Polo",
  "category": "men",
  "subcategory": "polo t-shirts",
  "image": "/products/men/men-023.jpg",
  "amazonUrl": "https://link.amazon/B05edVdLX"
},
{
  "id": 1024,
  "name": "Relaxed Straight Fit Washed Jeans",
  "category": "men",
  "subcategory": "jeans",
  "image": "/products/men/men-024.jpg",
  "amazonUrl": "https://link.amazon/B09ee54uS"
},
{
  "id": 1025,
  "name": "Classic Slim Fit Stretch Jeans",
  "category": "men",
  "subcategory": "jeans",
  "image": "/products/men/men-025.jpg",
  "amazonUrl": "https://link.amazon/B02327Ue1"
},
{
  "id": 1026,
  "name": "Loose Fit Vintage Wash Jeans",
  "category": "men",
  "subcategory": "jeans",
  "image": "/products/men/men-026.jpg",
  "amazonUrl": "https://link.amazon/B08EY4h1Y"
},
{
  "id": 1027,
  "name": "Straight Leg Classic Denim Jeans",
  "category": "men",
  "subcategory": "jeans",
  "image": "/products/men/men-027.jpg",
  "amazonUrl": "https://link.amazon/B01v4PTak"
},
{
  "id": 1028,
  "name": "Wide-Leg Korean Fit Trousers",
  "category": "men",
  "subcategory": "korean trouser",
  "image": "/products/men/men-028.jpg",
  "amazonUrl": "https://link.amazon/B0he8orLq"
},
{
  "id": 1029,
  "name": "Relaxed Korean Style Trousers",
  "category": "men",
  "subcategory": "korean trouser",
  "image": "/products/men/men-029.jpg",
  "amazonUrl": "https://link.amazon/B0hGN9jYL"
},
{
  "id": 1030,
  "name": "Pleated Wide-Leg Korean Trousers",
  "category": "men",
  "subcategory": "korean trouser",
  "image": "/products/men/men-030.jpg",
  "amazonUrl": "https://link.amazon/B03mqvxJm"
},
{
  "id": 1031,
  "name": "Straight Fit Korean Casual Trousers",
  "category": "men",
  "subcategory": "korean trouser",
  "image": "/products/men/men-031.jpg",
  "amazonUrl": "https://link.amazon/B05CY3LEy"
},
{
  "id": 1032,
  "name": "Relaxed Wide Fit Korean Trousers",
  "category": "men",
  "subcategory": "korean trouser",
  "image": "/products/men/men-032.jpg",
  "amazonUrl": "https://link.amazon/B08nQsjh3"
},
{
  "id": 1033,
  "name": "Minimal Straight Fit Korean Trousers",
  "category": "men",
  "subcategory": "korean trouser",
  "image": "/products/men/men-033.jpg",
  "amazonUrl": "https://link.amazon/B0ffoYRh7"
},
{
  "id": 1034,
  "name": "Classic Relaxed Fit Denim Jeans",
  "category": "men",
  "subcategory": "jeans",
  "image": "/products/men/men-034.jpg",
  "amazonUrl": "https://link.amazon/B0c5EeFuP"
},
{
  "id": 1035,
  "name": "Classic Casual Bomber Jacket",
  "category": "men",
  "subcategory": "jackets",
  "image": "/products/men/men-035.jpg",
  "amazonUrl": "https://link.amazon/B05kCS18r"
},
{
  "id": 1036,
  "name": "Oversized Graphic Cotton T-Shirt",
  "category": "men",
  "subcategory": "T-shirts",
  "image": "/products/men/men-036.jpg",
  "amazonUrl": "https://link.amazon/B0eXNaUrR"
},
{
  "id": 1037,
  "name": "Minimal Streetwear Casual Sneakers",
  "category": "men",
  "subcategory": "shoes",
  "image": "/products/men/men-037.jpg",
  "amazonUrl": "https://link.amazon/B05J54XEw"
},
{
  "id": 1038,
  "name": "Classic Low-Top Casual Sneakers",
  "category": "men",
  "subcategory": "shoes",
  "image": "/products/men/men-038.jpg",
  "amazonUrl": "https://link.amazon/B0fXgs2g4"
},
{
  "id": 1039,
  "name": "Everyday Lightweight Casual Shoes",
  "category": "men",
  "subcategory": "shoes",
  "image": "/products/men/men-039.jpg",
  "amazonUrl": "https://link.amazon/B09d5FK0Q"
},
{
  "id": 1040,
  "name": "Classic Minimal Analog Watch",
  "category": "men",
  "subcategory": "watch",
  "image": "/products/men/men-040.jpg",
  "amazonUrl": "https://link.amazon/B0d5iahZb"
},
{
  "id": 1041,
  "name": "Minimalist Stainless Steel Watch",
  "category": "men",
  "subcategory": "watch",
  "image": "/products/men/men-041.jpg",
  "amazonUrl": "https://link.amazon/B04EbcTkU"
},
{
  "id": 1042,
  "name": "Classic Polarized Frame Sunglasses",
  "category": "men",
  "subcategory": "coolers",
  "image": "/products/men/men-042.jpg",
  "amazonUrl": "https://link.amazon/B04fby0Wg"
}



];

export default products;
