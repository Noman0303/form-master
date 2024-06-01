import Cousin from "./Cousin";

const Uncle = ({asset}) => {
    return (
        <div className="p-2 border-2 border-black m-4 rounded-xl ">
            <h2>Uncle</h2>
            <section className="flex justify-around">
            <Cousin name={'Rafsan'} asset={asset} ></Cousin>
            <Cousin name={'Sohana'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;