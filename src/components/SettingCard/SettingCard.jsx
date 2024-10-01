/* eslint-disable react/prop-types */
import "./SettingCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function SettingCard({ onAddLocale }) {
  const [language, setLanguage] = useState("");
  const [direction, setDirection] = useState("");
  const [flag, setFlag] = useState("");
  const [status, setStatus] = useState("");
  const [isDefault, setIsDefault] = useState("");
  const [isLocaleVisible, setLocaleVisible] = useState(false);
  const handleAddLocale = () => {
    if (language && direction && flag && status && isDefault) {
      const newLacale = {
        language,
        direction,
        flag,
        status,
        isDefault,
        createdBy: "1",
      };
      onAddLocale(newLacale);
      const existingLocales = JSON.parse(localStorage.getItem("locales")) || [];
      existingLocales.push(newLacale);
      localStorage.setItem("locales", JSON.stringify(existingLocales));
      setLanguage("");
      setDirection("");
      setFlag("");
      setStatus("");
      setIsDefault("");
      setLocaleVisible(true);
    }
  };
  return (
    <>
      <div className="Locale">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          onClick={() => setLocaleVisible(!isLocaleVisible)}
        >
          Add Locale
          <FontAwesomeIcon icon={faPlus} className="ml-2" />
        </button>
      </div>
     {isLocaleVisible && (
      <div className="bg-white shadow-md rounded-lg p-6  flex flex-col ">
        <div className="flex items-center mb-4 justify-around w-full">
          <div className="flex-1 mx-2">
            <label className="mr-2 flex items-center">
              Language <span className="text-red-500">*</span>
            </label>
            <select
              className="border border-gray-300 rounded p-2 mr-4 w-full"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="">Select Language Code</option>
              <option value="English">English</option>
              <option value="Arabic">Arabic</option>
              <option value="French">French</option>
            </select>
          </div>

          <div className="flex-1 mx-2">
            <label className="mr-2 flex items-center">
              Direction <span className="text-red-500">*</span>
            </label>
            <select
              className="border border-gray-300 rounded p-2 w-full"
              value={direction}
              onChange={(e) => setDirection(e.target.value)}
            >
              <option value="">Select Direction</option>
              <option value="LTR">LTR</option>
              <option value="RTL">RTL</option>
            </select>
          </div>
        </div>

        <div className="flex">
          <div className="flex-1 mx-1">
            <label className="mr-2 flex items-center">
              Flag <span className="text-red-500">*</span>
            </label>
            <select
              className="border border-gray-300 rounded p-2 mr-4 w-full"
              value={flag}
              onChange={(e) => setFlag(e.target.value)}
            >
              <option value="">Select Flag</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="France"> France</option>
            </select>
          </div>

          <div className="flex flex-col flex-1 mx-1">
            <label>Status</label>
            <select
              className="border border-gray-300 rounded p-2 mr-4 w-full"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="flex flex-col flex-1 mx-1">
          <label>Default</label>
          <select
            className="border border-gray-300 rounded p-2 w-full"
            value={isDefault}
            onChange={(e) => setIsDefault(e.target.value)}
          >
            <option>Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

        </div>
        </div>
       <div>
       <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w"
          onClick={handleAddLocale}
        >
          Add
        </button>
       </div>
      </div>
     )}
    </>
  );
}

export default SettingCard;
