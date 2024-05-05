import { useState } from "react";

const StatefulForm = () => {
    const[name,setName] = useState('Rojoni Klanto');
    const[email,setEmail] = useState(null);
    const[password,setPassword] = useState(null);
    const[error,setError]= useState('')

    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length < 6){
            setError('Password must be 6 character or longer');
        }
        else{
            setError('');
        }
        console.log(name, email, password);
    }

    const handleNameChange = e =>{
        setName(e.target.value);
    }

    const handleEmailChange = e =>{
        // console.log(e.target.value)
        setEmail(e.target.value);
    }

    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }


    return (
        <div>
            <form onSubmit={handleSubmit} className="mt-4">
            <input value={name} id="texInput" className="mt-2 border-2 border-black" 
            onChange={handleNameChange}
            type="text" name="name" placeholder="Name" />
            <br />
            <input className="border-2 border-black mt-2" 
            onChange={handleEmailChange}
            type="email" name="email" id="emailInput" placeholder="Email" />
            <br />
            <input className="border-2 border-black mt-2" 
            onChange={handlePasswordChange}
            type="password" name="password" id="passwordInput" placeholder="password" required/>
            <br />
            <input id="submit" className="mt-2 bg-gray-200 p-2 rounded-lg text-lg font-semibold"  type="submit" value="Submit" />
            </form>
            {
                error && <p>{error}</p>
            }
        </div>
    );
};

export default StatefulForm;