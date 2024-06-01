import { useContext } from "react";
import { AssetContext } from "./Grandpa";

const Special = ({asset}) => {

        const gift = useContext(AssetContext);

    return (
        <div className="p-8 border-2 border-black m-2 rounded-xl">
            <h2>Special</h2>
            <p>has {asset}</p>
            <p>Also has {gift}</p>
        </div>
    );
};

export default Special;