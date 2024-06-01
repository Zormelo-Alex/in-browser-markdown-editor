import React, { useEffect, useState } from "react";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import Home from "./pages/Home";
import data from "./data.json";
import DeleteModal from "./components/DeleteModal";

function App() {
  const storedData = localStorage.getItem("markdown-data");
  const initialDocuments = storedData ? JSON.parse(storedData) : data;
  const darkMode = localStorage.getItem("dark-mode");
  const initialMode = darkMode ? JSON.parse(darkMode) : false;

  const [isdark, setIsdark] = useState(initialMode);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [documentData, setDocumentData] = useState(initialDocuments);
  const [selected, setSelected] = useState(documentData[0]);
  const [selectedID, setSelectedID] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDarkSwitch = (e) => {
    e.preventDefault();
    setIsdark(!isdark);
  };

  const handleChangeSelected = (id) => {
    setSelectedID(id);
    setSelected(documentData[id]);
  };

  const handleTextUpdate = (text) => {
    setSelected((prev) => ({
      ...prev,
      content: text,
    }));
  };

  const handleNameUpdate = (name) => {
    // console.log(name);
    setSelected((prev) => ({
      ...prev,
      name: name,
    }));
  };

  const handleSave = () => {
    // console.log(selected)
    setDocumentData((prev) =>
      prev.map((item, index) => (index == selectedID ? selected : item))
    );
    console.log("Document saved successfully!");
  };

  const handleAdd = async () => {
    console.log("Item added");
    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const newDate = `${day}-${month}-${year}`;
    const newName = `untitled-${documentData.length + 1}.md`;
    const data = {
      createdAt: newDate,
      name: newName,
      content: "# My Markdown Document\n\nThis is a simple Markdown document.",
    };
    setDocumentData([...documentData, data]);
    setSelected(data);
    setSelectedID(documentData.length);
    console.log("New document created.");
  };

  const handleDelete = () => {
    const filter = documentData.filter((data, index) => index != selectedID);
    setDocumentData(filter);
    setSelectedID(0);
    setModalOpen(false);
    console.log("Document deleted!");
  };

  // console.log(documentData)
  // console.log(selectedID)

  useEffect(() => {
    setSelected(documentData[selectedID]);
    if (!documentData.length) {
      setIsEmpty(true);
      setIsNavOpen(true);
    } else {
      setIsEmpty(false);
    }
    localStorage.setItem("markdown-data", JSON.stringify(documentData));
  }, [documentData]);

  useEffect(() => {
    if (isdark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("dark-mode", JSON.stringify(isdark));
  }, [isdark]);

  return (
    <>
      <div className="w-full h-full bg-gray-200">
        <div className="flex min-h-screen relative overflow-x-hidden">
          <div className="fixed h-screen">
            <SideNav
              handleDarkSwitch={handleDarkSwitch}
              isDark={isdark}
              data={documentData}
              handleSelected={handleChangeSelected}
              setIsNavOpen={setIsNavOpen}
              addDocument={handleAdd}
              isEmpty={isEmpty}
            />
          </div>
          <div
            className={`absolute bg-white h-full z-10 w-full top-0 transition-all ease-in ${
              isNavOpen
                ? "right-[-65%] md:right-[-35%] lg:right-[-20%]"
                : "right-0"
            }`}
          >
            <div className="fixed w-full">
              <TopNav
                isNavOpen={isNavOpen}
                setIsNavOpen={setIsNavOpen}
                showDeleteModal={setModalOpen}
                content={selected}
                changeName={handleNameUpdate}
                save={handleSave}
                isEmpty={isEmpty}
              />
            </div>
            <Home
              selected={selected}
              handleTextChange={handleTextUpdate}
              isEmpty={isEmpty}
              isNav={isNavOpen}
              setNav={setIsNavOpen}
            />
            <DeleteModal
              show={isModalOpen && !isEmpty}
              onClose={() => setModalOpen(false)}
              onDelete={handleDelete}
              selected={selected}
              isEmpty={isEmpty}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
