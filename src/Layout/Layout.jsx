
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Routers from '../routes/Routers'

const Layout = () => {
  return (
    <>
        <Header/>
       
        <main>
        <Routers/>

        <Footer/>
        </main>
       


    </>
  )
}

export default Layout
