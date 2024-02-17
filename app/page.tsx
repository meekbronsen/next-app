import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {

  // this will capture the session
  const session = await getServerSession( authOptions )

  return (
    <main className="flex flex-col gap-5">
      <h1 className="font-bold">Hello { session ? <span>{session.user?.name}</span> : 'world' }</h1>
      <Link href='/users'>User</Link>
      <ProductCard></ProductCard>
    </main>
  );
}
