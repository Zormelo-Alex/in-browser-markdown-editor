import React, { useEffect, useState } from "react";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import Home from "./pages/Home";
import data from "./data.json"

function App() {
  const [isdark, setIsdark] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selected, setSelected] = useState(data[0])

  const handleDarkSwitch = (e) => {
    e.preventDefault();
    setIsdark(!isdark);
  };

  const handleChangeSelected = (id) => {
    setSelected(data[id])
  }

  useEffect(() => {
    if (isdark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isdark]);

  return (
    <div className="w-full h-full bg-gray-200">
      <div className="flex min-h-screen relative overflow-x-hidden">
        <div className="fixed h-screen">
          <SideNav handleDarkSwitch={handleDarkSwitch} isDark={isdark} data={data} handleSelected={handleChangeSelected}/>
        </div>
        <div
          className={`absolute bg-white h-full z-10 w-full top-0 transition-all ease-in ${
            isNavOpen ? "right-[-65%]" : "right-0"
          }`}
        >
          <div className="fixed w-full">
            <TopNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          </div>
          <Home selected={selected}/>
        </div>
      </div>
    </div>
  );
}

export default App;
