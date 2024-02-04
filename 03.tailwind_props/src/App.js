import Card from "./Components/Card";



function App() {

  let myObj={
    userName:"AMIT",
    age:25
  }

  let arr=[1,2,3]
  return (
   <>
    <h1 className='text-9xl text-blue-400 text-center bg-green-300 m-4 rounded-xl'>
        AMIT SINGH
      </h1>
    <div className="flex" >
      
      <Card username="AMIT" someObj={myObj} btnText="CLICK AMIT"></Card>
      <Card username="Monika" btnText="CLICK MONIKA"></Card>
      <Card username="JUHI" btnText="CLICK JUHI"></Card>
      <Card username="SUSHMITA" btnText="CLICK SUSHMITA"></Card>
      </div>
   </>
      
    
  );
}

export default App;
