import { useContext } from "react";
import { AssetContext } from "../Grandpa";

const Friend = () => {
    const present = useContext(AssetContext);
    return (
        <div>
            <h2>Friend</h2>
            <p> Received {present} </p> 
        </div>
    );
};

export default Friend;