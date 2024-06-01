import Brother from "../Brother";
import Myself from "../Myself";
import Sister from "../Sister";

const Dad = ({asset}) => {
    return (
        <div className="p-2 border-2 border-black m-4 rounded-xl" >
            <h2>Dad</h2>
            <section className="flex justify-around">
                <Myself asset ={asset} ></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>

        </div>
    );
};

export default Dad;