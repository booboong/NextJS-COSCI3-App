import FeaturesCharacters from "@/components/features-characters";
import Link from "next/link";

// http://localhost:3000/characters
export default async function CharactersPage() {
    const response = await fetch("https://api.codingthailand.com/api/course");
    const courseResponse = await response.json();

  return (
    <div>
      {
        JSON.stringify(courseResponse)
      }
      <FeaturesCharacters/>
      {/* Characters Page
      <p/>
    <Link href = "/" className="text-blue-500 underline">
    Home
    </Link> */}
    </div>
  );
}