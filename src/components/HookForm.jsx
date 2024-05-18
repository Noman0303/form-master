import useInputState from "../hooks/useInputState";

const HookForm = () => {

    // const [name, handleNameChange] = useInputState('Rojoni hooked')

    const nameState = useInputState('Rojoni hooked')

    const emailState = useInputState('rojoni@sojoni.go')

    const handleSubmit = e => {
        console.log('form data', emailState.value, nameState.value);
        
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="mt-4 ">
            <input {...nameState} id="texInput" className="mt-2 border-2 " type="text" name="name" placeholder="Name" />
            <br />
            <input {...emailState} defaultValue={'rojoni@shojoni.com'} className="border-2 mt-2" 
            type="email" name="email" id="emailInput" placeholder="Email" />
            <br />
            <input className="border-2  mt-2" 
            type="password" name="password" id="passwordInput" placeholder="password"/>
            <br />
            <input id="submit" className="mt-2 bg-gray-200 p-2 rounded-lg text-lg font-semibold"  type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;