import Image from "next/image";
import vacation from "@/public/images/valeriia-bugaiova-_pPHgeHz1uk-unsplash.jpg";

export default async function Home() {
  return (
    // The parent element should have a position defined if youre gonna use Image component
    <main className="relative h-[200px]">
      <Image
        src={"https://bit.ly/react-cover"}
        alt="image of a hotel pool"
        fill // if you want the image to be responsive to the space available, its like width set to 100%.
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw" // setting the size of the image, it's like srcset
        quality={100}  // very important to determine how next js should change the quality of the image
        priority // a boolean. Images that should be visible right from page load.
      />
    </main>
  );
}
