import { Jost } from 'next/font/google';
import './globals.css';

const inter = Jost({ subsets: ['latin'], weights: [500] });

export const metadata = {
  title: "Gabriel's Portfolio (WIP)",
  description: "Gabriel's resume website",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
