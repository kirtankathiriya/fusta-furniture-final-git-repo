import CommonDivider from "@/components/common/homeDivider/commonDivider";
import Pagesection from "@/containers/Pageination";
import AppList from "@/containers/Product/AppList";
import Shopsidebar from "@/containers/ShopSideBar";
import Shoptopbar from "@/containers/ShopTopBar";


export default function Home() {
  return (
    <>
      <CommonDivider Name="Products"/>
    <div className="content flex min-h-screen flex-col-reverse sm:flex-row justify-between px-4 lg:px-16 gap-4 py-8">
      <Shopsidebar/>
      <div className="flex flex-col gap-4">
        <Shoptopbar variant="list"/>
        <AppList/>
        <Pagesection/>
      </div>
    </div>
    </>
  )
}


{/* <CommonDivider Name='Products'/>
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="maincont bg-white block box-border">
        <div className="shopifysection w-screen">
          <div className="main-content-wrap p-14">
            <div className="container max-w-7xl w-full pr-4 pl-4 ml-auto mr-auto">
              <div className="row flex flex-col p-0 gap-4 sm:gap-0 sm:flex-row-reverse flex-wrap sm:p-4">
                <div className="col basis-3/4 w-3/4">
                  <div className="row flex flex-wrap -mr-4 -ml-4">
                    <div className="cols basis-full max-w-full relative w-full min-h-1 pr-4 pl-4">
                      <Shoptopbar variant="list" />
                    </div>
                    
                  </div>
                  <div className="shop-grid">
                    <div className="product-grid-view" id='product-grid-view'>
                      <AppList/>
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
    </main> */}