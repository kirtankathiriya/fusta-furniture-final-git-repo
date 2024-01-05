import Banner from "../containers/Banner/banner";
import Divider from "../containers/Divider/Divider";
import App2 from "../containers/Product/App";
import Topselling from "../containers/topSelling/topSelling";
import Patner from "../containers/Patner/Patner";
import FeatureList from "@/containers/FeatureList/FeatureList";
import OfferCard from "../containers/Offercard/offerCard";
import Quotes from "../containers/Quotes/Quotes";
import Scrollbutton from "../components/common/Scrollbutton";
import SubsCribePage from "../containers/Subscribe/subsCribe";
import ProductTest from "@/containers/ProductTEST";

export default function Home() {
  return (
    <>
      <div>
        <Banner />
        <Topselling />
        <App2 />
        <Divider />
        <FeatureList />
        <OfferCard />
        <Quotes />
        <Scrollbutton />
        <SubsCribePage />
        <Patner />
      </div>
    </>
  );
}
