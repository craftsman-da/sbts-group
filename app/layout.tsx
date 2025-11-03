import Header from '@/components/Header';
import './globals.css';
import Footer from '@/components/Footer';
import AOSInit from '@/components/AOSInit';

export const metadata = {
  title: 'SBTS Group - Technology Made Simple',
  description: 'SBTS Group - Services, Products and How we work',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <AOSInit />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
