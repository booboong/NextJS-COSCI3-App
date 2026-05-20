'use client';

type Props = {
    name: string;
    price: number;
    stock?: number;
    onAddToCart: (name: string) => void;
}
/* ใส่ค่าที่ page */

export default function AppProductCard({ name, price, stock = 0, onAddToCart }: Props) {
  return (
    <div className="w-60 border border-red-400 rounded-lg p-6 m-6 bg-red-400">
      <h2>{name}</h2>
      <p>Price : {price} ฿</p>
      {
        stock > 0 && (
        <div>
        <p>Stock : {stock} items</p>
        <button onClick = {() => onAddToCart(name)}>Add to cart</button>
        </div>
        )
      }
    </div>
  );
}