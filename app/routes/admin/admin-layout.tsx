import { Outlet } from "react-router";
import {SidebarComponent} from '@syncfusion/ej2-react-navigations'
import { NavItems } from "components";


const Adminlayout = () => {
  return (
    <div className="admin-layout"> 
    MoblieSidebar
    <aside className="w-full max-w-[270px] hidden lg:block">
        <SidebarComponent width={270} enableGestures={false}>
         <NavItems/>
        </SidebarComponent>
   </aside>
      
      <div className="children">
                <Outlet/>
      </div>
    </div>
  )
}

export default Adminlayout;
