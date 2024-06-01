import { createContext, useState } from "react";
import Aunty from "./components/Aunty";
import Dad from "./components/Dad";
import Uncle from "./components/Uncle";

export const AssetContext = createContext('gold');
export const MoneyContext = createContext(1000);

const Grandpa = () => {
   const [money,setMoney] = useState(1000);
    const asset = 'diamond';
    return (
        <div className="p-2 border-2 border-black m-4 rounded-xl">
            <h2>Grandpa</h2>
            <p>Net Money : {money} </p>
            
        <MoneyContext.Provider value={[money,setMoney]}>
        <AssetContext.Provider value='gold'>
          <div className=" justify-evenly gap-2 flex sm:flex-col">
            <Dad asset={asset} ></Dad>
            <Uncle asset={asset} ></Uncle>
            <Aunty></Aunty>
            </div>
          </AssetContext.Provider>
        </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;