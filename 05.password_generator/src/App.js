import { useState, useCallback,useEffect,useRef } from "react";
function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState();

  //useRef Hook
   const passwordRef= useRef(null)

  /**
   * @method passwordGenerator
   * @return void
   * @param callback
   * @description hcbshjbsdcsd
   */
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "0123456789";

    if (characterAllowed) str += "!@#$%^&*(){}[]?<>~`|";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

/**
 * @method copyPasswordToClipboard 
 */
const copyPasswordToClipboard=useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,5) //Selection upto 5 digit
  window.navigator.clipboard.writeText(password)
},[password])


  useEffect(()=>{passwordGenerator()}, [length,numberAllowed,characterAllowed,passwordGenerator])
  return (
    <div className="App w-full max-w-md mx-auto shadow-md px-4 my-8 py-3 rounded-lg text-orange-500 bg-gray-700">
      <h1 className="text-xl text-white text-center my-3">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 "
          placeholder="PASSWORD"
          readOnly
          ref={passwordRef}
        ></input>
        <button onClick={copyPasswordToClipboard} className="bg-blue-700 outline-none text-white px-3 py-0.5 shrink-0">
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            id="range"
            min={6}
            max={30}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          ></input>
          <label htmlFor="range">Length : {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            className="cursor-pointer"
          ></input>
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={characterAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            className="cursor-pointer"
          ></input>
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
