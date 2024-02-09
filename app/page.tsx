import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main className="flex flex-col gap-5">
      <h1 className="font-bold">Hello World</h1>
      <Link href='/users'>User</Link>
      <ProductCard></ProductCard>
    </main>
  );
}
