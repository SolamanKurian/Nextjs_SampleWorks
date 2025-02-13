import { Metadata } from "next"
import '../styles/globals.css';
export const metadata:Metadata = {
  title: {
    absolute:"",// no nee in layout, if it give it will ignore the other two
    default:"making of cyne",// stay for the pages which we not provided the title
    template:"%s | CYNeSolutions" // in childs the %s will replace the title from there (combine title from there and CYNeSolution)
  },
  description: 'Generated by Next.js',
}
// change the metadata like above
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    
      <body>
      <header>Head</header>
      {children}
      <footer>Foot</footer>
      </body>
     
    </html>
  )
}
