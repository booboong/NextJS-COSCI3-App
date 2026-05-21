import FeaturesCharacters from "@/components/features-characters";
import Link from "next/link";

// http://localhost:3000/characters
export default function CharactersPage() {
  return (
    <div>
      <FeaturesCharacters/>
      {/* Characters Page
      <p/>
    <Link href = "/" className="text-blue-500 underline">
    Home
    </Link> */}
    </div>
  );
}