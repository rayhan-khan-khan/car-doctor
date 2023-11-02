import { useEffect, useState } from "react";
import Popular2 from "./Popular2";


const Popular = () => {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        fetch('popular.json')
        .then(res => res.json())
        .then(data => setPopular(data))
    },[])

    return (
        <div >
          <div className="text-center my-6">
          <h1 className="font-semibold text-[#FF3811]">Popular Products</h1>
          <h2 className="text-3xl font-bold mt-4 mb-4">Browse Our Products</h2>
            <p className="text-[#b3a6a6]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
          </div>
          {/*  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                  popular.map(popular => <Popular2 key={popular.id} popular={popular}></Popular2>)
                }
            </div>
        </div>
    
    );
};

export default Popular;