import MyMenu from '@/components/molecules/my-menu/my-menu'
import './globals.css'
import { Inter } from 'next/font/google'
import MyFooter from '@/components/molecules/my-footer/my-footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TP3 Intégration',
  description: 'Created by Nathan Thibault, Priscila Carvalho, Marie-Pier Dubois, William Bitton',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className} style={{ background: "white" }}>
        <header>
          <MyMenu />
        </header>
        <main style={{ width: "80%", margin: "0 auto", marginBottom: "10%" }}>
          {children}
        </main>
        <footer style={{ position: 'fixed', left: 0, bottom: 0, width: '100%' }}>
          <MyFooter />
        </footer>
      </body>
    </html>
  )
}
