import MyMenu from '@/components/molecules/my-menu/my-menu'
import './globals.css'
import { Inter } from 'next/font/google'
import MyFooter from '@/components/molecules/myFooter/myFooter'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <MyMenu/>
        </header>

        {children}
        
        <footer> 
          <MyFooter/>
        </footer>
       
      </body>
    </html>
  )
}
