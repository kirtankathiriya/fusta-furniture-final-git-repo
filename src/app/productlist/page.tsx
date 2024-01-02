import ProdsList from "../component/DipeshList/App";
import Pagesection from "../module/Pagesection";
import Scrollbutton from "../component/ReUseable/Scrollbutton";
import Shopsidebar from "../module/Shopsidebar";
import Shoptopbar from "../module/Shoptopbar";
import CommonDivider from "../component/ReUseable/homeDivider/commonDivider";


export default function Productlist() {
  return (
    <>
    <CommonDivider Name='Products'/>
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="maincont bg-white block box-border">
        <div className="shopifysection w-screen">
          <div className="main-content-wrap p-24">
            <div className="container max-w-7xl w-full pr-4 pl-4 ml-auto mr-auto">
              <div className="row flex flex-col sm:flex-row-reverse flex-wrap -mr-4 -ml-4">
                <div className="col basis-3/4 w-3/4">
                  <div className="row flex flex-wrap -mr-4 -ml-4">
                    <div className="cols basis-full max-w-full relative w-full min-h-1 pr-4 pl-4">
                      <Shoptopbar/>
                    </div>
                    
                  </div>
                  <div className="shop-grid">
                    <div className="product-list-view" id='product-list-view'>
                      <ProdsList/>
                    </div>
                    <div className="pages-section">
                      <Pagesection/>
                    </div>
                  </div>
                </div>
                <div className="col basis-1/4 w-1/4">
                  <div className="shopsidebar-wrap">
                    <Shopsidebar/>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Scrollbutton/>
    </main>
    </>
  )
}
