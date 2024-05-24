'use client'

import {useEffect, useState} from "react";

export default function Home() {
  const [products, setProducts] = useState([])
  const getProducts = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`)
      const data = await response.json()

      setProducts(data)
  }

  useEffect(() => {
    getProducts()
  }, []);

  return (
    <>
      <div className='flex min-h-screen justify-center items-center p-8'>
        <table className='table-auto border-collapse border border-slate-500'>
          <thead>
            <tr>
              <th className='border border-slate-600 p-4'>Name</th>
              <th className='border border-slate-600 p-4'>Description</th>
              <th className='border border-slate-600 p-4'>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className='border border-slate-600 p-2'>{product.name}</td>
                <td className='border border-slate-600 p-2'>{product.description}</td>
                <td className='border border-slate-600 p-2'>{product.price} €</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
