import Link from "next/link";
import { Suspense } from "react";
import AppLoading from "../components/app-loading";

// http://localhost:3000/about
async function ApiVersion() {
  const response = await fetch("https://api.codingthailand.com/api/version")
  const apiInfo = await response.json();
return <p>API Version : {apiInfo.data.version}</p>
}

export default function AboutPage() {
  return (
    <div>
      <Suspense fallback={<AppLoading />}>
        <ApiVersion />
      </Suspense>

      {/* About Page
      <p/>
    <Link href = "/" className="text-blue-500 underline">
    Home
    </Link> */}
    </div>
  );
}