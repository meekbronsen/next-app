import { Metadata } from "next";



export default async function Home() {
  return (
    <main>
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const product =  await fetch('');
  return {
    title: 'product.title',
    description: ''
  }
}