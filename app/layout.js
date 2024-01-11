import { montserrat } from './ui/fonts'
import './globals.css'
import NavbarComponent from '@/components/Navbar/Navbar'


export const metadata = {
  title: 'IA App',
  description: 'Restaura imagenes antiguas con IA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} antialiased`}>
      <NavbarComponent />

        {children}
        </body>
    </html>
  )
}
