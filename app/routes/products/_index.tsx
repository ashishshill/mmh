// import { json } from '@remix-run/node';
// import { useLoaderData } from '@remix-run/react';
// import ProductGrid from '~/components/ProductGrid';

// export const loader = async () => {
//   const products = await getAllProducts();
//   return json({ products });
// };

// export default function ProductsIndex() {
//   const { products } = useLoaderData<typeof loader>();
//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-8">All Products</h1>
//       <ProductGrid products={products} />
//     </div>
//   );
// }