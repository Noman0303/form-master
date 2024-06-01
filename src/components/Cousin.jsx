import Special from "../Special";
import Friend from "./Friend";

const Cousin = ({name,asset}) => {
    return (
        <div className="p-2 border-2 border-black m-4 rounded-xl ">
            <h2>Cousin</h2>
            <p>{name}</p>
            {asset && <Special asset={asset}></Special>}
            {name==='Rubayia' && <Friend></Friend>}
        </div>
    );
};

export default Cousin;