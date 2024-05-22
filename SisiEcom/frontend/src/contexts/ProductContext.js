import React, {createContext, useState, useEffect} from 'react';


//create context 
export const ProductContext = createContext();
function getProducts() {
  return [
    {
      "id": 1,
      "title": "Maple Juice Body Cream",
      "price": 100.000,
      "description": "Transform your skincare routine with our luxurious Maple Juice Body Cream. Infused with nourishing maple extracts, this decadent cream deeply hydrates and revitalizes your skin, leaving it feeling soft, smooth, and irresistibly radiant.Silky Softness With a Hint of Canadian Maple. Deliciously fragrant! The main ingredient is Maple sap which is rich in antioxidants, minerals and vitamins. You need very little - the lotion will be absorbed into the layers of skin, smoothing wrinkles and hydrating your skin.",
      "category": "skincare product",
      "image": "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fG1ha2V1cCUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
      // "rating": {
      //   "rate": 3.9,
      //   "count": 120
      // }
    },
    {
      "id": 2,
      "title": "Peeling solution by The Ordinary",
      "price": 229.900,
      "description": "Experience the ultimate hydration with our Organic Cosmetics line. Crafted with the finest organic ingredients, this collection of skincare essentials nourishes and revitalizes your skin, leaving it feeling refreshed, radiant, and rejuvenated.",
      "category": "Skincare product",
      "image": "https://images.unsplash.com/photo-1702505591042-8707edef01eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG9yZGluYXJ5JTIwY29zbWV0aWNzfGVufDB8fDB8fHww",
      
    },
    {
      "id": 3,
      "title": "Clamy Concealer Stick",
      "price": 34.900,
      "description": "Conceal-It is a concealer stick which glides on effortlessly for a luxurious, flawless full coverage finish. Its creamy comfortable formula stays all day without settling or caking, delivering moisture to the skin for smoother and healthier-looking skin. Your secret weapon for flawless complexion! This convenient stick formula effortlessly camouflages imperfections, dark circles, and blemishes, leaving your skin looking smooth and radiant.",
      "category": "Make up",
      "image": "https://cdn.pixabay.com/photo/2019/10/01/10/56/clamy-concealer-stick-4517883_640.jpg",
     
    },
    {
      "id": 4,
      "title": "Red Lipstick",
      "price": 27,
      "description": "Made with transfer-proof, long-lasting, and transfer-proof formula, liquid lipsticks have comfortable wearability. Bold and beautiful, or nude and sophisticated, it stays put all day without being harsh on your lips.",
      "category": "Make up",
      "image": "https://images.unsplash.com/photo-1616247380773-c760ba067d5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFrZSUyMHVwJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
      
    },
    {
      "id": 5,
      "title": "The Ordinary skincare set",
      "price": 600,
      "description": "A set featuring the building blocks of a healthy skincare routine: a Squalane Cleanser, hyaluronic acid serum, and moisturizer.",
      "category": "Skincare product",
      "image": "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGJlYXV0eSUyMGJsZW5kZXJ8ZW58MHx8MHx8fDA%3D",
      
    },
    {
      "id": 6,
      "title": "Skincare Products by Curology",
      "price": 168,
      "description": "Curology offers clinically-proven ingredients like topical clindamycin and tretinoin to treat acne, rosacea, and signs of aging. Using information from your consultation, your licensed medical provider will choose a combination of three active ingredients for your personalized prescription formula.",
      "category": "Skincare Product",
      "image": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHNraW5jYXJlJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      "id": 7,
      "title": "Lip Gloss",
      "price": 31,
      "description": "Our lip gloss provides multidimensional shine and glides effortlessly on the lips for a luminous, shiny finish. It softens the lips while offering intense color and a mirror-like finish that doesn't stick.",
      "category": "Make up",
      "image": "https://images.unsplash.com/photo-1635263282145-253319c75fd4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1ha2UlMjB1cCUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
    },
    {
      "id": 8,
      "title": "Brushes set",
      "price": 58,
      "description": "A makeup brush is a tool with bristles, used for the application of makeup or face painting. The bristles may be made out of natural or synthetic materials, while the handle is usually made out of plastic or wood. When cosmetics are applied using the appropriate brush, they blend better onto the skin.",
      "category": "Make up",
      "image": "https://images.unsplash.com/photo-1617220376311-1b90accbb9e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1ha2UlMjB1cCUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
    },
    {
      "id": 9,
      "title": "Body Lotion",
      "price": 80,
      "description": "The body lotion is a cream with a higher water content. Technically speaking, it's an oil-in-water emulsion. This means that the fats it contains are combined with water. For this to work, stabilizers and emulsifiers are added.",
      "category": "Skincare Product",
      "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHNraW5jYXJlJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3Dhttps://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHNraW5jYXJlJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      "id": 10,
      "title": "Cleansing gel",
      "price": 64,
      "description": "A cleansing gel that dissolves makeup and removes excess sebum from pores to leave the skin fresh. For all skin types.",
      "category": "Skincare Product",
      "image": "https://cdn.pixabay.com/photo/2015/01/28/12/56/cosmetic-614826_640.jpg",
    },
    {
      "id": 11,
      "title": "Volumizing Maskara",
      "price": 45,
      "description": "The ultimate solution for achieving long, voluminous lashes",
      "category": "Make up",
      "image": "https://images.unsplash.com/photo-1619406266880-7e130b6c65c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFzY2FyYXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      "id": 12,
      "title": "Yves Saint Laurent Foundation",
      "price": 199,
      "description": "Yves Saint Laurent Foundation is a revolutionary makeup foundation designed to provide flawless coverage with a natural finish. Formulated with advanced ingredients, this foundation offers long-lasting wear while nourishing and protecting the skin.",
      "category": "Make up",
      "image": "https://images.unsplash.com/photo-1557205465-f3762edea6d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvdW5kYXRpb258ZW58MHx8MHx8fDA%3D",
    },
    {
      "id": 13,
      "title": "Highlighter",
      "price": 60,
      "description": "Illuminate your natural beauty with our range of radiant highlighter makeup. Designed to add a luminous glow to your complexion, our highlighters are perfect for accentuating your best features and creating a stunning, lit-from-within look.",
      "category": "Make up",
      "image": "https://images.unsplash.com/photo-1547887538-047f814bfb64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhpZ2hsaWdodGVyfGVufDB8fDB8fHww",
    },
    {
      "id": 14,
      "title": "Clamy Blush",
      "price": 50,
      "description": "Elevate your makeup look with our luxurious range of blushes, designed to add a flush of color and a healthy, natural glow to your cheeks. Our blushes are formulated with finely milled pigments and nourishing ingredients to deliver a silky-smooth texture and long-lasting wear.",
      "category": "Make up",
      "image": "https://cdn.pixabay.com/photo/2019/10/01/10/55/clamy-blusher-4517880_1280.jpg",
    },
    {
      "id": 15,
      "title": "Glossier product",
      "price": 120,
      "description": "Glossier products are a celebration of effortless beauty, offering skincare-infused makeup essentials designed to enhance your natural radiance.",
      "category": "Skincare Product",
      "image": "https://images.unsplash.com/photo-1585652757173-57de5e9fab42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNlcnVtfGVufDB8fDB8fHww",
    },
  ];
}


const ProductProvider  = ({ children }) => {
//procuctes state 
const [products, setProducts] = useState([]);
//fetch products 
useEffect(() => {
const fetchProducts = async()=> {
  const data = getProducts();
  setProducts(data);
};
fetchProducts();
}, [])
  return <ProductContext.Provider value = {{products}}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
