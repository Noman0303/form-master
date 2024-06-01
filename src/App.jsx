// import SimpleForm from "./components/SimpleForm"
// import StatefulForm from "./components/StatefulForm"
// import HookForm from "./components/HookForm"
// import ReusableForm from "./components/ReusableForm"

import Grandpa from "./Grandpa"

// import RefForm from "./components/RefForm"

function App() {

  // const handleSignupSubmit = data => {
  //   console.log('sign up data',data);
  // }

  // const handleUpdateProfile = data => {
  //   console.log('update profile',data);
  // }

  return (
    <>
      <div className="text-center ">
      {/* <h3 className="font-bold text-5xl">Vite + React</h3> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <SimpleForm></SimpleForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm formTitle={'Sign Up'} 
      handleSubmit={handleSignupSubmit}>
        <div className="font-bold mt-4 text-3xl">
          <h2>Sign up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm> */}

      {/* <ReusableForm formTitle={'Profile Update'} submitBtnText="Update" 
      handleSubmit={handleUpdateProfile} >
            <div className="font-bold mt-4 text-3xl" >
          <h2>Update Profile</h2>
          <p>Please update right now</p>
        </div>
      </ReusableForm> */}
      <Grandpa></Grandpa>
      </div>
    </>
  )
}

export default App
