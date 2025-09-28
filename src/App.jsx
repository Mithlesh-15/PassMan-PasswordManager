import React, { useRef, useState } from "react";
import { Save, Eye, EyeClosed } from "lucide-react";

function App() {
  const passRef = useRef();
  const [show, setShow] = useState(false);
  const [passType, setPassType] = useState("password");
  const [form, setForm] = useState({
    URL: "",
    username: "",
    password: "",
    id: "",
  });
  const handleShow = () => {
    if (!show) {
      setPassType("text");
      setShow(true);
    } else {
      setPassType("password");
      setShow(false);
    }
    console.log(passRef.current.type);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSave = () => {
    if (
      form.username.trim() === "" ||
      form.password.trim() === "" ||
      form.URL.trim() === ""
    ) {
      return;
    }
    const savedData = JSON.parse(localStorage.getItem("Data")) || [];
    const updatedData = [...savedData, { ...form, id: Math.random() }];
    localStorage.setItem("Data", JSON.stringify(updatedData));
    setForm({
      URL: "",
      username: "",
      password: "",
    });
  };
  
  return (
    <>
    <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div></div>
      <div className="my-6 w-full h-12 text-3xl flex justify-center gap-2">
        <span className="text-blue-500 font-bold">&lt;</span>
        <b>PassMan</b>
        <span className="text-blue-500 font-bold">/&gt;</span>
      </div>
      <div className="w-full h-38 flex items-center flex-col gap-6">
        <div className="w-3/4 md:w-1/2">
          <input
            type="text"
            id="URL"
            name="URL"
            value={form.URL}
            onChange={(e) => handleChange(e)}
            className="border-2 rounded-full w-full px-5 py-1"
            placeholder="Enter Your Website URL"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-3/4 md:w-1/2 relative">
          <input
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={(e) => handleChange(e)}
            className="border-2 rounded-full px-5 py-1"
            placeholder="Enter Your Username"
          />
          <input
            type={passType}
            id="password"
            name="password"
            value={form.password}
            onChange={(e) => handleChange(e)}
            className="border-2 rounded-full px-5 py-1"
            placeholder="Enter Your Password"
          />
          <button
            onClick={() => handleShow()}
            className="absolute top-[60px] right-[7px] md:top-[5px] md:right-[7px]"
          >
            {show ? <EyeClosed /> : <Eye />}
          </button>
        </div>
        <div className="flex justify-center items-center w-full">
          <button
            type="submit"
            className="
        flex items-center gap-2 
        bg-blue-600 text-white font-semibold 
        px-6 py-3 rounded-2xl 
        shadow-md shadow-blue-300/50
        hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-400/60 
        active:scale-95 
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
        transition-all duration-200
      "
            onClick={() => handleSave()}
          >
            <Save size={20} />
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default App
