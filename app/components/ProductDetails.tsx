import React from 'react';
import { useParams } from '@remix-run/react';

// Sample data for products (replace with actual API call later)
const products = [
  {
    id: '1',
    name: 'Product 1',
    image: 'https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
    price: '£9.99',
    description: 'This is a detailed description of Product 1.',
  },
  {
    id: '2',
    name: 'Product 2',
    image: 'https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
    price: '£19.99',
    description: 'This is a detailed description of Product 2.',
  },
  // Add more products here
];

const ProductDetails: React.FC = () => {
  const { productId } = useParams();  // Getting productId from the URL
  const product = products.find(p => p.id === productId);  // Find the product based on the ID

  // If product not found, display a not found message
  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-3xl font-bold">{product.name}</h2>
            <p className="text-xl text-gray-900 pt-2">{product.price}</p>
            <p className="text-gray-700 pt-4">{product.description}</p>
            {/* You can add more details like reviews, ratings, etc. */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
