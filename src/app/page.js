// Importing the Experience component from the components directory and the Image component from Next.js for potential future use.
import { Experience } from "@/components/Experience";
import Image from "next/image";

// The Home component serves as the main page of the application.
export default function Home() {
  return (
    <main className="h-screen min-h-screen">
{/* The Experience component is included here to display the main interactive language learning experience. */}
      <Experience />
      </main>
  );
}
