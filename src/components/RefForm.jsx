import { useEffect, useRef } from "react";

const RefForm = () => {
   
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect( () => {
        nameRef.current.focus();
    }, [])

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    };
   
   
   
    return (
        <div>
            <form onSubmit={handleSubmit} className="mt-4 ">
            <input ref={nameRef} id="texInput" className="mt-2 border-2 " type="text" name="name" placeholder="Name" />
            <br />
            <input ref={emailRef} defaultValue={'rojoni@shojoni.com'} className="border-2 mt-2" 
            type="email" name="email" id="emailInput" placeholder="Email" />
            <br />
            <input ref={passwordRef} className="border-2  mt-2" 
            type="password" name="password" id="passwordInput" placeholder="password"/>
            <br />
            <input id="submit" className="mt-2 bg-gray-200 p-2 rounded-lg text-lg font-semibold"  type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;