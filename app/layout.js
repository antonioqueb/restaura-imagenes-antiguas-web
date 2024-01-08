import { Inter } from 'next/font/google'
import './globals.css'
import NavbarComponent from '@/components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IA App',
  description: 'Restaura imagenes antiguas con IA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
      <NavbarComponent />

        {children}
        </body>
    </html>
  )
}
