// pages/index.tsx
import { NextPage } from 'next';
import { products } from './data/products';
import { formatPrice } from './utils/formatPrice';
import { Product } from './types/Products';

const Home: NextPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Product Listing</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map((product: Product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
            <img src={product.image} alt={product.title} style={{ width: '100%' }} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{formatPrice(product.price)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;