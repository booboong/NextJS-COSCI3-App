import Link from "next/link";
import AppLoading from "../components/app-loading";
import FeaturesGoods from "@/components/features-goods";
import prisma from "@/lib/prisma";
import {connection} from "next/server";

// https://localhost:3000/goods
export default async function GoodsPage() {
  await connection(); // signals this is a dynamic route
  const goods = await prisma.product.findMany();
  return (
    <div>
      {/* {goods.length > 0 && JSON.stringify(goods)} */}

      {
        goods.length > 0 && <FeaturesGoods products={goods}/>
      }

      {/* Goods Page */}
      {/* <p/>
    <Link href = "/" className="text-blue-500 underline">
    Home
    </Link> */}
    </div>
  );
}