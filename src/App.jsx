// import SimpleForm from "./components/SimpleForm"
// import StatefulForm from "./components/StatefulForm"
import HookForm from "./components/HookForm"
// import RefForm from "./components/RefForm"

function App() {

  return (
    <>
      <div className="text-center  h-screen border-2 border-blue-600">
      <h3 className="font-bold text-5xl">Vite + React</h3>
      {/* <StatefulForm></StatefulForm> */}
      {/* <SimpleForm></SimpleForm> */}
      {/* <RefForm></RefForm> */}
      <HookForm></HookForm>
      </div>
    </>
  )
}

export default App
