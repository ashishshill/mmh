// import { json } from '@remix-run/node';
// import { useLoaderData } from '@remix-run/react';

// export const loader = async ({ params }) => {
//   // Verify product ID exists
//   if (!params.productId) {
//     throw new Response('Product ID missing', { status: 400 });
//   }

//   // Fetch product from your data source
//   const product = await getProduct(params.productId);
  
//   // Throw 404 if product not found
//   if (!product) {
//     throw new Response('Not Found', { status: 404 });
//   }

//   return json({ product }); // Must return { product }
// };

// export default function ProductPage() {
//   // Destructure properly from returned object
//   const { product } = useLoaderData<typeof loader>();
  
//   // Render product details
//   return (
//     <ProductDetails product={product} />
//   );
// }

// // Add error boundary
// export function ErrorBoundary({ error }) {
//   return (
//     <div className="text-red-500 p-4">
//       <h2>Product Error!</h2>
//       <p>{error.message}</p>
//     </div>
//   );
// }