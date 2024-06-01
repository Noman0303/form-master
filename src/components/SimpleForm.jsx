const SimpleForm = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log('form submitted')
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.phone.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="mt-4 border-2">
            <input id="texInput" className="mt-2 border-2 border-black" type="text" name="name" placeholder="Name" />
            <br />
            <input className="border-2 border-black mt-2" 
            type="email" name="email" id="emailInput" placeholder="Email" />
            <br />
            <input className="border-2 border-black mt-2" 
            type="password" name="password" id="passwordInput" placeholder="password"/>
            <br />
            <input id="submit" className="mt-2 bg-gray-200 p-2 rounded-lg text-lg font-semibold"  type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;