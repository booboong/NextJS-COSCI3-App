import Link from "next/link";
import AppLoading from "../components/app-loading";
import FeaturesGoods from "@/components/features-goods";

// https://localhost:3000/goods
export default function GoodsPage() {
  return (
    <div>
      <AppLoading/>
      <FeaturesGoods/>
      Goods Page
      {/* <p/>
    <Link href = "/" className="text-blue-500 underline">
    Home
    </Link> */}
    </div>
  );
}