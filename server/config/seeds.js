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
