const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  const categories = await Category.insertMany([
    { name: 'Mens' },
    { name: 'Womens' },
    { name: 'Kids' }
  ]);

  console.log('categories seeded');

  const products = await Product.insertMany([
    {
      brand: 'Nike',
      model: 
        'Air Jourdan XXXIII',
      image: 'https://eurotas-demo.myshopify.com/cdn/shop/products/product-1.jpg?v=1569556553',
      category: categories[0]._id,
      price: 115,
      size: 12
    },
    {
      brand: 'Nike',
      model: 
        'Air Max Excee',
      image: 'https://www.famousfootwear.com/blob/product-images/20000/33/68/1/33681_right_feed1000.jpg',
      category: categories[0]._id,
      price: 95,
      size: 8
    },
    {
      brand: 'Crocs',
      model: 
        'Star Wars Bistro Slip Resistant Clog',
      image: 'https://www.famousfootwear.com/blob/product-images/20000/44/07/1/44071_right_feed1000.jpg',
      category: categories[0]._id,
      price: 40,
      size: 9
    },
    {
      brand: 'Saucony',
      model: 
        'Aura TR Wide Trail Running Shoe',
      image: 'https://www.famousfootwear.com/blob/product-images/20000/31/98/4/31984_right_feed1000.jpg',
      category: categories[0]._id,
      price: 75,
      size: 13
    },
    {
      brand: 'New Balance',
      model: 
        '520 V8 Wide Running Shoe',
      image: 'https://www.famousfootwear.com/blob/product-images/20000/30/03/9/30039_right_feed1000.jpg',
      category: categories[0]._id,
      price: 65,
      size: 11
    },
    {
      brand: 'Nike',
      model: 
        'Air Max Cirro Slide Sandal',
      image: 'https://www.famousfootwear.com/blob/product-images/20000/40/36/5/40365_right_feed1000.jpg',
      category: categories[0]._id,
      price: 55,
      size: 9
    },
    {
      brand: 'Converse',
      model: 
        'Berkshire High Top Sneaker Boot',
      image: 'https://www.famousfootwear.com/blob/product-images/20000/35/92/8/35928_right_feed1000.jpg',
      category: categories[0]._id,
      price: 90,
      size: 9
    },
    {
      brand: 'Adidas',
      model: 
        'YUNG-1',
      image: 'https://eurotas-demo.myshopify.com/cdn/shop/products/product-v1-img2.jpg?v=1565778143',
      category: categories[0]._id,
      price: 125,
      size: 10
    },
    {
      brand: 'Reebok',
      model: 
        'Mobius OG',
      image: 'https://eurotas-demo.myshopify.com/cdn/shop/products/product-v1-img3.jpg?v=1565778175',
      category: categories[0]._id,
      price: 140,
      size: 11
    },
    {
      brand: 'New Balance',
      model: 
        'Summit Unknown',
      image: 'https://eurotas-demo.myshopify.com/cdn/shop/products/product-v1-img8.jpg?v=1565778424',
      category: categories[1]._id,
      price: 110,
      size: 9
    },
    {
      brand: 'Adidas',
      model: 
        'POD-S3.1',
      image: 'https://eurotas-demo.myshopify.com/cdn/shop/products/Layer-46.jpg?v=1569566459',
      category: categories[2]._id,
      price: 95,
      size: 7
    },
    {
      brand: 'Adidas',
      model: 
        'Crazy BYW X Shoes',
      image: 'https://eurotas-demo.myshopify.com/cdn/shop/products/product-v1-img11.jpg?v=1565778588',
      category: categories[0]._id,
      price: 150,
      size: 13
    },
    {
      brand: 'Nike',
      model: 
        'Jordan Grind 2 UNC',
      image: 'https://eurotas-demo.myshopify.com/cdn/shop/products/product-5_1525fd60-44a7-4300-8c09-7869ff6eb274.jpg?v=1553306015',
      category: categories[0]._id,
      price: 115,
      size: 10
    },
    {
      brand: 'Nike',
      model: 
        'Jordan Zer0.1 Low N7',
      image: 'https://eurotas-demo.myshopify.com/cdn/shop/products/product-v1-img7.jpg?v=1565778376',
      category: categories[0]._id,
      price: 120,
      size: 11
    },
    {
      brand: 'Nike',
      model: 
        'Air Force Low Casual',
      image: 'https://media.finishline.com/i/finishline/DD8959_600_P1?$default$&w=671&&h=671&bg=rgb(237,237,237)',
      category: categories[1]._id,
      price: 115,
      size: 8
    },
    {
      brand: 'Adidas',
      model: 
        'UltraBOOST 1.0',
      image: 'https://media.finishline.com/s/finishline/ID9669_100?$Main$&layer0=[h=245&w=245&bg=rgb(237,237,237)]&h=245&w=245&fmt=webp',
      category: categories[1]._id,
      price: 190,
      size: 6
    },
    {
      brand: 'Nike',
      model: 
        'Waffle Debut Retro Sneaker',
      image: 'https://www.famousfootwear.com/blob/product-images/20000/75/52/3/75523_right_feed1000.jpg',
      category: categories[1]._id,
      price: 80,
      size: 10
    },
    {
      brand: 'Cliffs by White Mountain',
      model: 
        'Hope Lace Up Hiking Boot',
      image: 'https://www.famousfootwear.com/blob/product-images/20000/46/17/3/46173_right_feed1000.jpg',
      category: categories[1]._id,
      price: 85,
      size: 7
    },
    {
      brand: 'Dr. Martens',
      model: 
        'Zavala Combat Boot',
      image: 'https://www.famousfootwear.com/blob/product-images/20000/39/31/0/39310_right_feed1000.jpg',
      category: categories[1]._id,
      price: 130,
      size: 7
    },
    {
      brand: 'Nike',
      model: 
        'Giannis Immortality 2 Basketball Shoe',
      image: 'https://www.famousfootwear.com/blob/product-images/20000/95/09/8/95098_right_feed1000.jpg',
      category: categories[1]._id,
      price: 85,
      size: 7
    },
    {
      brand: 'Naturalizer',
      model: 
        'Vera Dress Sandal',
      image: 'https://www.famousfootwear.com/blob/product-images/20000/30/78/6/30786_right_feed1000.jpg',
      category: categories[1]._id,
      price: 110,
      size: 8
    },
    {
      brand: 'ASICS',
      model: 
        'Contend 8 Running Shoe',
      image: 'https://www.famousfootwear.com/blob/product-images/20000/44/61/4/44614_right_feed1000.jpg',
      category: categories[1]._id,
      price: 70,
      size: 5
    },
    {
      brand: 'Crocs',
      model: 
        'Pokemon Classic Clog',
      image: 'https://www.famousfootwear.com/blob/product-images/20000/45/93/0/45930_right_feed1000.jpg',
      category: categories[1]._id,
      price: 60,
      size: 7
    },
    {
      brand: 'Adidas',
      model: 
        'Runfalcon 3.0 Running Shoe',
      image: 'https://www.famousfootwear.com/blob/product-images/20000/43/21/5/43215_right_feed1000.jpg',
      category: categories[1]._id,
      price: 65,
      size: 6
    },
    {
      brand: 'Skechers',
      model: 
        'Hazel Rhinestone Sneaker',
      image: 'https://www.famousfootwear.com/blob/product-images/20000/41/12/7/41127_right_feed1000.jpg',
      category: categories[1]._id,
      price: 80,
      size: 4
    },
    {
      brand: 'Timberland',
      model: 
        'Timberland Waterproof Boots',
      image: 'https://media.finishline.com/s/finishline/12809_WHE?$Main$&layer0=[h=245&w=245&bg=rgb(237,237,237)]&h=245&w=245&fmt=webp',
      category: categories[2]._id,
      price: 80,
      size: 4
    },
    {
      brand: 'Vans',
      model: 
        'Vans x Sesame Street SK8-Hi Zip',
      image: 'https://media.finishline.com/s/finishline/00C4NBMC_900?$Main$&layer0=[h=245&w=245&bg=rgb(237,237,237)]&h=245&w=245&fmt=webp',
      category: categories[2]._id,
      price: 70,
      size: 6
    },
    {
      brand: 'Nike',
      model: 
        'Kids Court Borough Low Top Sneaker',
      image: 'https://www.famousfootwear.com/blob/product-images/20000/39/11/7/39117_right_feed1000.jpg',
      category: categories[2]._id,
      price: 65,
      size: 4
    },
    {
      brand: 'Hey Dude',
      model: 
        'Kids Wendy Slip On Shoe Toddler',
      image: 'https://www.famousfootwear.com/blob/product-images/20000/40/58/0/40580_right_feed1000.jpg',
      category: categories[2]._id,
      price: 20,
      size: 5
    },
    {
      brand: 'Adidas',
      model: 
        'Kids Kaptir 3.0 Sneaker',
      image: 'https://www.famousfootwear.com/blob/product-images/20000/42/82/8/42828_right_feed1000.jpg',
      category: categories[2]._id,
      price: 70,
      size: 11
    },
    {
      brand: 'Uner Armour',
      model: 
        'Kids Lockdown 6 Basketball Shoe',
      image: 'https://www.famousfootwear.com/blob/product-images/20000/93/12/0/93120_right_feed1000.jpg',
      category: categories[2]._id,
      price: 55,
      size: 6
    },
    {
      brand: 'Dr. Scholls',
      model: 
        'Kids Time Off Lace Up Sneaker',
      image: 'https://www.famousfootwear.com/blob/product-images/20000/73/24/0/73240_right_feed1000.jpg',
      category: categories[2]._id,
      price: 45,
      size: 5
    },
    {
      brand: 'Sketchers',
      model: 
        'Kids Skech Tracks Sneaker',
      image: 'https://www.famousfootwear.com/blob/product-images/20000/46/28/3/46283_right_feed1000.jpg',
      category: categories[2]._id,
      price: 50,
      size: 7
    },
    {
      brand: 'Converse',
      model: 
        'Kids Chuck Taylor All Star Slip On Knit Sneaker',
      image: 'https://www.famousfootwear.com/blob/product-images/20000/44/14/0/44140_right_feed1000.jpg',
      category: categories[2]._id,
      price: 45,
      size: 4
    },
    {
      brand: 'PUMA',
      model: 
        'Kids Rebound Layup High Top Sneaker',
      image: 'https://www.famousfootwear.com/blob/product-images/20000/46/23/9/46239_right_feed1000.jpg',
      category: categories[2]._id,
      price: 60,
      size: 6
    },
    {
      brand: 'Adidas',
      model: 
        'Kids VL Court 3.0 Sneaker',
      image: 'https://www.famousfootwear.com/blob/product-images/20000/42/00/8/42008_right_feed1000.jpg',
      category: categories[2]._id,
      price: 54,
      size: 6
    },
    {
      brand: 'Heelys',
      model: 
        'Kids Pro 20 Skate Sneaker',
      image: 'https://www.famousfootwear.com/blob/product-images/20000/40/74/6/40746_right_feed1000.jpg',
      category: categories[2]._id,
      price: 60,
      size: 7
    }
  ]);

  console.log('products seeded');

  await User.create({
    firstName: 'Lourdes',
    lastName: 'Dorvilus',
    email: 'lourdes@testmail.com',
    password: 'password123',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Richard',
    lastName: 'Taveras',
    email: 'rich@testmail.com',
    password: 'password123'
  });

  console.log('users seeded');

  process.exit();
});
