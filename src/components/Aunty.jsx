import { useContext } from "react";
import Cousin from "./Cousin";
import { MoneyContext } from "../Grandpa";

const Aunty = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div className="p-2 border-2 border-black m-4 rounded-xl">
            <h2>Aunty</h2>
            <section className="flex justify-around">
                <Cousin name={'Mamshad'}></Cousin>
                <Cousin name={'Rubayia'} ></Cousin>
            </section>
            <p>Money:{money}</p>
            
            <button className="border-2 border-black rounded-xl p-1 font-medium" type="button" onClick={() =>setMoney(money+1000)} >Add 1000 Taka</button>
        </div>
    );
};

export default Aunty;