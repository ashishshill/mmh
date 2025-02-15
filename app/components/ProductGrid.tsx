import React from 'react';

const ProductGrid: React.FC = () => {
  const products = [
    {
      name: 'Product 1',
      image: 'https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
      price: '£9.99',
      discount: '20%', // Discount added
    },
    {
      name: 'Product 2',
      image: 'https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
      price: '£9.99',
      discount: '15%', // Discount added
    },
    {
      name: 'Product 3',
      image: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
      price: '£9.99',
      discount: null, // No discount
    },
    {
      name: 'Product 4',
      image: 'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
      price: '£9.99',
      discount: '30%', // Discount added
    },
    {
      name: 'Product 3',
      image: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
      price: '£9.99',
      discount: null, // No discount
    },
    {
      name: 'Product 4',
      image: 'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
      price: '£9.99',
      discount: '', // Discount added
    },
    {
      name: 'Product 3',
      image: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
      price: '£9.99',
      discount: null, // No discount
    },
    {
      name: 'Product 4',
      image: 'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
      price: '£9.99',
      discount: '', // Discount added
    },
    // Add more products as needed
  ];

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        <div className="flex flex-wrap -mx-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col"
            >
              <a href="/shop">
                <div className="relative">
                  <img
                    className="hover:grow hover:shadow-lg"
                    src={product.image}
                    alt={product.name}
                  />
                  
                  {/* Discount Badge */}
                  {product.discount && (
                    <div className="absolute top-0 right-0 bg-red-500 text-white text-xs py-1 px-3 rounded-bl-lg">
                      {product.discount} OFF
                    </div>
                  )}
                </div>
                <div className="pt-3 flex text-gray-500 items-center justify-between">
                  <p>{product.name}</p>
                </div>
                <p className="pt-1 text-gray-900">{product.price}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
