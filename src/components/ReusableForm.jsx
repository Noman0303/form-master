const ReusableForm = ({formTitle,handleSubmit,submitBtnText = 'Submit',children}) => {

    const handleLocalSubmit = e =>{
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }

        handleSubmit(data);
    }

    return (
        <div>
            {/* <h2 className="font-bold mt-4 text-4xl">{formTitle}</h2> */}
            {children}
            <form onSubmit={handleLocalSubmit} className="mt-4 border-2">
            <input id="texInput" className="mt-2 border-2 border-black" type="text" name="name" placeholder="Name" />
            <br />
            <input className="border-2 border-black mt-2" 
            type="email" name="email" id="emailInput" placeholder="Email" />
            <br />
            <input className="border-2 border-black mt-2" 
            type="password" name="password" id="passwordInput" placeholder="password"/>
            <br />
            <input id="submit" className="mt-2 bg-gray-200 p-2 rounded-lg text-lg font-semibold"  type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReusableForm;