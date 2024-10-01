// import "./index.css";
// import "normalize.css";
// import SettingCard from "./components/SettingCard/SettingCard";
// import InfoCard from "./components/InfoCard/InfoTable";
// function App() {
//   return (
//     <>
//      <div className="flex flex-col justify-center items-center min-h-screen">
//       <div className="w-full flex flex-col items-center">
//        <div className="mb-10 w-3/4">
//        <SettingCard />
//        </div>
//         <InfoCard />
//       </div>
//     </div>
//     </>
//   );
// }

// export default App;
// App.js

import { useEffect, useState } from "react";
import SettingCard from "./components/SettingCard/SettingCard";
import InfoTable from "./components/InfoCard/InfoTable";

function App() {
  const [localeData, setLocaleData] = useState([]);
  const [currentDefault, setCurrentDefault] = useState(null);
  useEffect(() => {
    const storedLocaleData = JSON.parse(localStorage.getItem("locales")) || [];
    const storedCurrentDefault = JSON.parse(
      localStorage.getItem("currentDefault")
    );
    setLocaleData(storedLocaleData);
    setCurrentDefault(storedCurrentDefault);
  }, []);
  const handleAddLocale = (newLocale, isDefault) => {
    setLocaleData((prevData) => [newLocale, ...prevData]);

    if (isDefault) {
      setCurrentDefault(newLocale);
    }
  };

  const handleEditLocale = (index) => {
    const selectedLocale = localeData[index];
    console.log("Edit locale: ", selectedLocale);
  };

  const handleRemoveLocale = (index) => {
    const newLocaleData = localeData.filter((_, i) => i !== index);
    setLocaleData(newLocaleData);
    localStorage.setItem("locales", JSON.stringify(newLocaleData));
    setCurrentDefault(null);
  };

  return (
    <div className="p-6">
      <SettingCard onAddLocale={handleAddLocale} />
      <InfoTable
        localeData={localeData}
        onEditLocale={handleEditLocale}
        onRemoveLocale={handleRemoveLocale}
        currentDefault={currentDefault}
      />
    </div>
  );
}

export default App;
