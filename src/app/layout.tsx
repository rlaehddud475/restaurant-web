import StyledComponentsRegistry from './registry'
import Header from './global/ui/outlines/Header'
import Footer from './global/ui/outlines/Footer'
import { CommonProvider } from './global/contexts/CommonContext'
import { Metadata } from 'next'
import 'react-datepicker/dist/react-datepicker.css'
import './globals.css'
import { getUserInfo } from './member/services/actions'
export const metadata: Metadata = {
  title: '핀테크 포토폴리오',
  description: '금융 api 프로젝트',
}
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const userInfo = await getUserInfo()

  console.log('userInfo', userInfo)

  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <CommonProvider>
            <Header />
            <main className="main-content">{children}</main>
            <Footer />
          </CommonProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
