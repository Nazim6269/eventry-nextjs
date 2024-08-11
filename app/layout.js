import Navbar from '@/components/Navbar';
import { connectDB } from '@/services/db';
import { Inter } from 'next/font/google';
import { AuthProvider } from '../providers/authProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Eventry - Home',
  description: 'A single eventry app',
};

export default async function RootLayout({ children }) {
  await connectDB();
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <main className="py-8">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
