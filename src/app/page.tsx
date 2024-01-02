import Banner from './module/Banner/banner'
import Divider from './module/Divider/Divider'
import App2 from './module/Product/App'
import Topselling from './module/topSelling/topSelling'
import Patner from './module/Patner/Patner'
import FeatureList from '@/app/module/FeatureList/FeatureList'
import OfferCard from './module/Offercard/offerCard'
import Quotes from './module/Quotes/Quotes'
import Scrollbutton from '../components/common/Scrollbutton'
import SubsCribePage from './Subscribe/subsCribe'
import Header from '@/components/common/header/header'
import Footer from '@/components/common/foter/footer'
export default function Home() {
  return (
    <>
  <div>
     <Header/>
      <Banner />
      <Topselling />
      <App2 />
      <Divider/>
      <FeatureList />
      <OfferCard />
      <Quotes/>
      <Scrollbutton/>
      <SubsCribePage />
      <Patner/>
      <Footer/>
      </div>
    </>
  )
}
