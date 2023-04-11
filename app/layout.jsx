import {Inter} from '@next/font/google'

import "@/styles/reset.css";
import "@/styles/global.css";

import Header from '../components/header/index.js';
import Footer from "../components/footer/index.js";

const interFontFamily = Inter({subsets: ['latin']});

export default function RootLayout({ children }) {
  return (
    <html className={interFontFamily.className}>
      <body className="container">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
