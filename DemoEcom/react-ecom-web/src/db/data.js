const productsData = [
  {
      product_id: 1,
      img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
      title: "Nike Air Monarch IV",
      stars: 4,
      reviews: [
          "Great shoes!",
          "Very comfortable.",
          "Stylish design."
      ],
      prevPrice: 120.0,
      newPrice: 89.99,
      company: "Nike",
      color: "white",
      category: "sneakers",
      available_quantity: 150,
      cart_quantity: 1,
  },
  {
      product_id: 2,
      img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
      title: "Nike Air Vapormax Plus",
      stars: 4,
      reviews: [
          "Amazing comfort!",
          "Perfect fit."
      ],
      prevPrice: 160.0,
      newPrice: 129.99,
      company: "Nike",
      color: "red",
      category: "sneakers",
      available_quantity: 100,
      cart_quantity: 1,
  },
  {
      product_id: 3,
      img: "https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg",
      title: "Nike Waffle One Sneaker",
      stars: 4,
      reviews: [
          "Love these!",
          "Highly recommended."
      ],
      prevPrice: 110.0,
      newPrice: 79.99,
      company: "Nike",
      color: "green",
      category: "sneakers",
      available_quantity: 200,
      cart_quantity: 1,
  },
  {
      product_id: 4,
      img: "https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg",
      title: "Nike Running Shoe",
      stars: 4,
      reviews: [
          "Great for running!",
          "Excellent quality."
      ],
      prevPrice: 140.0,
      newPrice: 109.99,
      company: "Nike",
      color: "black",
      category: "sneakers",
      available_quantity: 120,
      cart_quantity: 1,
  },
  {
      product_id: 5,
      img: "https://m.media-amazon.com/images/I/41M54ztS6IL._AC_SY625._SX._UX._SY._UY_.jpg",
      title: "Flat Slip On Pumps",
      stars: 3,
      reviews: [
          "Decent quality.",
          "Comfortable but sizing runs small."
      ],
      prevPrice: 60.0,
      newPrice: 39.99,
      company: "Vans",
      color: "green",
      category: "flats",
      available_quantity: 80,
      cart_quantity: 1,
  },
  {
      product_id: 6,
      img: "https://m.media-amazon.com/images/I/71zKuNICJAL._AC_UX625_.jpg",
      title: "Knit Ballet Flat",
      stars: 4,
      reviews: [
          "So comfortable!",
          "Perfect for everyday wear."
      ],
      prevPrice: 50.0,
      newPrice: 34.99,
      company: "Adidas",
      color: "black",
      category: "flats",
      available_quantity: 90,
      cart_quantity: 1,
  },
  {
      product_id: 7,
      img: "https://m.media-amazon.com/images/I/61V9APfz97L._AC_UY695_.jpg",
      title: "Loafer Flats",
      stars: 4,
      reviews: [
          "Great quality!",
          "Stylish and comfortable."
      ],
      prevPrice: 70.0,
      newPrice: 49.99,
      company: "Vans",
      color: "white",
      category: "flats",
      available_quantity: 110,
      cart_quantity: 1,
  },
  {
      product_id: 8,
      img: "https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg",
      title: "Nike Zoom Freak",
      stars: 4,
      reviews: [
          "Amazing shoes!",
          "Highly recommended for basketball."
      ],
      prevPrice: 180.0,
      newPrice: 149.99,
      company: "Nike",
      color: "green",
      category: "sneakers",
      available_quantity: 130,
      cart_quantity: 1,
  },
  {
      product_id: 9,
      img: "https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg",
      title: "Nike Men's Sneaker",
      stars: 4,
      reviews: [
          "Great fit!",
          "Very comfortable for all-day wear."
      ],
      prevPrice: 150.0,
      newPrice: 119.99,
      company: "Adidas",
      color: "blue",
      category: "sneakers",
      available_quantity: 180,
      cart_quantity: 1,
  },
  {
      product_id: 10,
      img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
      title: "PUMA BLACK-OCE",
      stars: 4,
      reviews: [
          "Excellent shoes!",
          "Highly durable and comfortable."
      ],
      prevPrice: 100.0,
      newPrice: 79.99,
      company: "Puma",
      color: "green",
      category: "sneakers",
      available_quantity: 150,
      cart_quantity: 1,
  },
  {
      product_id: 11,
      img: "https://m.media-amazon.com/images/I/71E75yRwCDL._AC_UY575_.jpg",
      title: "Pacer Future Sneaker",
      stars: 4,
      reviews: [
          "Amazing quality!",
          "Very lightweight and stylish."
      ],
      prevPrice: 120.0,
      newPrice: 89.99,
      company: "Puma",
      color: "red",
      category: "sneakers",
      available_quantity: 140,
      cart_quantity: 1,
  },
  {
      product_id: 12,
      img: "https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX575_.jpg",
      title: "Unisex-Adult Super",
      stars: 4,
      reviews: [
          "Highly recommended!",
          "Great value for money."
      ],
      prevPrice: 110.0,
      newPrice: 79.99,
      company: "Puma",
      color: "black",
      category: "sneakers",
      available_quantity: 160,
      cart_quantity: 1,
  },
  {
      product_id: 13,
      img: "https://m.media-amazon.com/images/I/61TM6Q9dvxL._AC_UX575_.jpg",
      title: "Roma Basic Sneaker",
      stars: 4,
      reviews: [
          "Classic style!",
          "Comfortable fit for daily wear."
      ],
      prevPrice: 90.0,
      newPrice: 69.99,
      company: "Puma",
      color: "white",
      category: "sneakers",
      available_quantity: 170,
      cart_quantity: 1,
  },
  {
      product_id: 14,
      img: "https://m.media-amazon.com/images/I/7128-af7joL._AC_UY575_.jpg",
      title: "Pacer Future Doubleknit",
      stars: 4,
      reviews: [
          "Excellent cushioning!",
          "Perfect for running."
      ],
      prevPrice: 130.0,
      newPrice: 99.99,
      company: "Puma",
      color: "black",
      category: "sneakers",
      available_quantity: 120,
      cart_quantity: 1,
  },
  {
      product_id: 15,
      img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
      title: "Fusion Evo Golf Shoe",
      stars: 4,
      reviews: [
          "Great for golf!",
          "Sturdy and comfortable."
      ],
      prevPrice: 150.0,
      newPrice: 119.99,
      company: "Puma",
      color: "green",
      category: "sneakers",
      available_quantity: 110,
      cart_quantity: 1,
  },
  {
      product_id: 16,
      img: "https://m.media-amazon.com/images/I/719gdz8lsTS._AC_UX575_.jpg",
      title: "Rainbow Chex Skate",
      stars: 4,
      reviews: [
          "Awesome design!",
          "Good quality material."
      ],
      prevPrice: 80.0,
      newPrice: 59.99,
      company: "Vans",
      color: "red",
      category: "flats",
      available_quantity: 90,
      cart_quantity: 1,
  },
  {
      product_id: 17,
      img: "https://m.media-amazon.com/images/I/71gpFHJlnoL._AC_UX575_.jpg",
      title: "Low-Top Trainers",
      stars: 4,
      reviews: [
          "Love these!",
          "Comfortable for everyday wear."
      ],
      prevPrice: 70.0,
      newPrice: 49.99,
      company: "Vans",
      color: "white",
      category: "sandals",
      available_quantity: 100,
      cart_quantity: 1,
  },
  {
      product_id: 18,
      img: "https://m.media-amazon.com/images/I/71pf7VFs9CL._AC_UX575_.jpg",
      title: "Vans Unisex Low-Top",
      stars: 4,
      reviews: [
          "Great fit!",
          "Durable material."
      ],
      prevPrice: 75.0,
      newPrice: 54.99,
      company: "Vans",
      color: "blue",
      category: "sandals",
      available_quantity: 120,
      cart_quantity: 1,
  },
  {
      product_id: 19,
      img: "https://m.media-amazon.com/images/I/61N4GyWcHPL._AC_UY575_.jpg",
      title: "Classic Bandana Sneakers",
      stars: 4,
      reviews: [
          "Unique design!",
          "Comfortable to wear."
      ],
      prevPrice: 100.0,
      newPrice: 79.99,
      company: "Nike",
      color: "black",
      category: "sandals",
      available_quantity: 130,
      cart_quantity: 1,
  },
  {
      product_id: 20,
      img: "https://m.media-amazon.com/images/I/61bncQ44yML._AC_UX695_.jpg",
      title: "Chunky High Heel",
      stars: 4,
      reviews: [
          "Stylish and comfortable!",
          "Great for parties."
      ],
      prevPrice: 80.0,
      newPrice: 59.99,
      company: "Vans",
      color: "black",
      category: "heels",
      available_quantity: 100,
      cart_quantity: 1,
  },
  {
      product_id: 21,
      img: "https://m.media-amazon.com/images/I/71czu7WgGuL._AC_UY695_.jpg",
      title: "Slip On Stiletto High Heel",
      stars: 4,
      reviews: [
          "Elegant design!",
          "Comfortable to wear for long hours."
      ],
      prevPrice: 120.0,
      newPrice: 89.99,
      company: "Puma",
      color: "black",
      category: "heels",
      available_quantity: 110,
      cart_quantity: 1,
  },
  {
      product_id: 22,
      img: "https://m.media-amazon.com/images/I/61men05KRxL._AC_UY625_.jpg",
      title: "DREAM PAIRS Court Shoes",
      stars: 4,
      reviews: [
          "Perfect fit!",
          "Great for formal occasions."
      ],
      prevPrice: 130.0,
      newPrice: 99.99,
      company: "Nike",
      color: "red",
      category: "heels",
      available_quantity: 90,
      cart_quantity: 1,
  },
  {
      product_id: 23,
      img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
      title: "Nike Air Vapormax Plus",
      stars: 4,
      reviews: [
          "Amazing comfort!",
          "Perfect fit."
      ],
      prevPrice: 160.0,
      newPrice: 129.99,
      company: "Nike",
      color: "red",
      category: "sneakers",
      available_quantity: 100,
      cart_quantity: 1,
  },
  {
      product_id: 24,
      img: "https://m.media-amazon.com/images/I/51PGWTXgf-L._AC_UY625_.jpg",
      title: "Low Mid Block Heels",
      stars: 4,
      reviews: [
          "Stylish design!",
          "Comfortable for daily wear."
      ],
      prevPrice: 90.0,
      newPrice: 69.99,
      company: "Nike",
      color: "black",
      category: "heels",
      available_quantity: 120,
      cart_quantity: 1,
  },
  {
      product_id: 25,
      img: "https://m.media-amazon.com/images/I/616sA5XUKtL._AC_UY675_.jpg",
      title: "Chunky High Heel",
      stars: 4,
      reviews: [
          "Great for parties!",
          "Comfortable to walk in."
      ],
      prevPrice: 70.0,
      newPrice: 49.99,
      company: "Adidas",
      color: "black",
      category: "heels",
      available_quantity: 130,
      cart_quantity: 1,
  },
  {
      product_id: 26,
      img: "https://m.media-amazon.com/images/I/71h5+MbEK7L._AC_UY625_.jpg",
      title: "Amore Fashion Stilettos",
      stars: 4,
      reviews: [
          "Elegant design!",
          "Perfect for special occasions."
      ],
      prevPrice: 100.0,
      newPrice: 79.99,
      company: "Adidas",
      color: "white",
      category: "heels",
      available_quantity: 110,
      cart_quantity: 1,
  },
  {
      product_id: 27,
      img: "https://m.media-amazon.com/images/I/61uw5RDxKQL._AC_UY625_.jpg",
      title: "Bridal Sandals Glitter",
      stars: 4,
      reviews: [
          "Beautiful design!",
          "Comfortable for brides."
      ],
      prevPrice: 60.0,
      newPrice: 39.99,
      company: "Adidas",
      color: "black",
      category: "heels",
      available_quantity: 100,
      cart_quantity: 1,
  },
  {
      product_id: 28,
      img: "https://m.media-amazon.com/images/I/71yhoZP0l6L._AC_UY695_.jpg",
      title: "Wedding Prom Bridal",
      stars: 4,
      reviews: [
          "Perfect for weddings!",
          "Comfortable for dancing."
      ],
      prevPrice: 50.0,
      newPrice: 29.99,
      company: "Adidas",
      color: "black",
      category: "flats",
      available_quantity: 90,
      cart_quantity: 1,
  }
];


export default productsData;


