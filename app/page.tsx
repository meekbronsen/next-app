import Image from "next/image";
import { Inter, Roboto } from 'next/font/google';
import vacation from "@/public/images/valeriia-bugaiova-_pPHgeHz1uk-unsplash.jpg";
import localFont from 'next/font/local'

// the Inter import returns a class that we use to construct font objects with various configs.
const inter = Inter({subsets: ['latin']})

const roboto  =  Roboto({
  subsets: ['latin'], // if we are using a latin language 
  weight: ['400', '500'],

})

// Applying custom fonts 
const jetBrains = localFont({
    src: '../public/fonts/jetbrainsmono-regular-webfont.woff2',
})

export default async function Home() {
  return (
    <main>
      {/* Applying the font object */}
      <h1 className={roboto.className}>Hello world</h1>
      <p className={jetBrains.className}>JetBrains Font</p>
    </main>
  );
}
