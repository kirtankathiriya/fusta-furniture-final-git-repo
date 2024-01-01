import Footer from './component/foter/footer'
import Banner from './module/Banner/banner'
import Divider from './module/Divider/Divider'
import App from './module/Product/App'
import Header from './module/header/header'
import Topselling from './module/topSelling/topSelling'
import Patner from './module/Patner/Patner'
import FeatureList from '@/app/module/FeatureList/FeatureList'
import OfferCard from './module/Offercard/offerCard'
import Quotes from './module/Quotes/Quotes'
import Scrollbutton from './component/ReUseable/Scrollbutton'
import SubsCribePage from './Subscribe/subsCribe'
export default function Home() {
  return (
    <>
  {/* <div className='w-screen 
  '> */}
     <Header />
      <Banner />
      <Topselling />
      <App />
      <Divider/>
      <FeatureList />
      <OfferCard />
      <Quotes/>
      <Scrollbutton/>
      <SubsCribePage />
      <Patner/>
      <Footer />
      {/* </div> */}
    </>
  )
}
