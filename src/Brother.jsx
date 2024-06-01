import { useContext } from "react";
import { MoneyContext } from "./Grandpa";

const Brother = () => {
    const[money] = useContext(MoneyContext)
    return (
        <div className="p-8 border-2 border-black m-4 rounded-xl">
            <h2>Brother</h2>
            <p>Grandpa has : {money} </p>
        </div>
    );
};

export default Brother;