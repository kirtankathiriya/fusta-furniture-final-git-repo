import Scrollbutton from "@/components/common/Scrollbutton";
import CommonDivider from "@/components/common/homeDivider/commonDivider";
import Pagesection from "@/containers/Pageination";
import App2 from "@/containers/Product/App";
import Shopsidebar from "@/containers/ShopSideBar";
import Shoptopbar from "@/containers/ShopTopBar";


export default function Home() {
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
                      <Shoptopbar />
                    </div>
                    
                  </div>
                  <div className="shop-grid">
                    <div className="product-grid-view" id='product-grid-view'>
                      <App2/>
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
