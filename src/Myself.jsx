import Special from "./Special";

const Myself = ({asset}) => {
    return (
        <div className="p-2 border-2 border-black m-4 rounded-xl">
            <h2>Myself</h2>
            <Special asset={asset} ></Special>
        </div>
    );
};

export default Myself;