import { useState } from "react";

const SupervisorCard = (props) => {
  const {  name, description, profileImg } = props;
  const [show, setShow] = useState(false);


 

  const renderDescription = () => {
    if (show) {
      return <h1 className="mt-4 sm:w-[200px] text-gray-700">{description}</h1>;
    } else {
      const shortDescription = description.length > 100 ? `${description.slice(0, 50)}...` : description;
      return <h1 className="mt-4 sm:w-[200px] text-gray-700">{shortDescription}</h1>;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl p-4">
      <div className="flex flex-col mt-2">
       <img src={profileImg} width={50} height={50} alt="hello"/>
        <h1 className="mt-4 font-bold text-black">{name}</h1>
        {renderDescription()}
        <p onClick={() => setShow(!show)} className="mt-2 text-[15px] cursor-pointer font-bold text-[#4A1766]">
          {show ? "show less" : "show more"}
        </p>
        <div  className="bg-[#4A1766] text-white rounded-lg font-semibold px-2 mt-4 sm:w-[70%] w-[180px] py-1 cursor-pointer flex justify-center">
          Visit Profile
        </div>
      </div>
    </div>
  );
};

export default SupervisorCard;
