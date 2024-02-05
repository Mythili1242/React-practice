import React from 'react'
import HomeCode from './Home/HomeCode1';
import { Outlet } from 'react-router-dom';
function Index() {
  return (
   <>
   <div>
   <HomeCode />
   </div>
   <div>
<Outlet />
   </div>
   

   </>
  )
}

export default Index