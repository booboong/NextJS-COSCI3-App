'use client';
import AppButton from "./components/app-button";
import AppFooter from "./components/app-footer";
import AppHeader from "./components/app-header"
import AppProductCard from "./components/app-product-card";

export default function Home() {
  return (
    <div>
      <AppHeader />  {/*มันจะเอา AppHeader ที่เราเขียนไว้ใน app-header.tsx มาแสดงผลที่นี่ */}
      <h1>I ❤️ Kagurabachi</h1>
      <AppButton />
      <AppProductCard 
      name="Badge" 
      price={390} 
      stock={105} 
      onAddToCart={(name) => alert(`${name} added to cart!`)} 
      />
      <AppProductCard 
      name="Acrylic Standee" 
      price={700} 
      stock={47}
      onAddToCart={(name) => alert(`${name} added to cart!`)} 
      />
      <AppFooter />  
    </div>
  );
}
