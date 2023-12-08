import { useEffect, useState } from "react";
import SupervisorCard from "./components/card";
import { supervisors } from "./data";


function App() {

  const [data, setdata] = useState();

  useEffect(()=>{
    setdata(supervisors)
  },[])

  return (
    <div className="bg-white flex min-h-screen items-center justify-center">
      <div className="flex flex-col sm:p-0 p-3 items-center">
            <h1 className="text-black md:text-[40px] text-[29px] sm:ml-0 ml-4 font-mono font-bold mt-4"> Available Supervisors</h1>
             <div className="flex flex-row gap-4 mt-16 flex-wrap justify-center items-center ">
              {
                
                supervisors.map( (item,index) => (
                    <SupervisorCard key={index}  name={item.name} profileImg={item.profileImg} description={item.description}/>
                ))
                
              }
             </div>
             </div>
    </div>
  );
}

export default App;
