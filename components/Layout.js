import Nav from './Nav'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="container mx-auto mt-10 grow px-6 2xl:max-w-[1280px]">
        {children}
      </main>
      <Footer />
    </>
  )
}
