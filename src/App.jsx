import React, { useEffect, useState } from 'react';
import Sidebar from "./pages/Sidebar/Sidebar";
import { Outlet, useNavigate,useLocation } from 'react-router-dom';
import Login from './pages/login/Login';


const App = () => {
  const navigate = useNavigate();
  const [name, setName] = useState(true);

  const location = useLocation();
  console.log(location.pathname)

  useEffect(() => {

    if (name) {
      navigate("/");
    } else {
      navigate("/login");
    }

  }, []);

  return (<>

    {name == true ? (<>
      <div className=" flex w-full h-full font-sans  ">

        <Sidebar />

        <main className='h-auto sticky main overflow-hidden w-full  '>
          <Outlet />
        </main>
      </div>
    </>) : (<>
      <Outlet />

    </>)}

 




  </>)
}

export default App