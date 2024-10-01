/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronUp,
//   faChevronDown,
//   faEdit,
//   faTrash,
// } from "@fortawesome/free-solid-svg-icons";
// function InfoCard() {
//   const rows = [
//     {
//       flag: "🇺🇸",
//       name: "English",
//       code: "en",
//       direction: "LTR",
//       status: "Active",
//       createdBy: "1",
//     },
//     {
//       flag: "🇪🇬",
//       name: "Arabic",
//       code: "ar",
//       direction: "RTL",
//       status: "Inactive",
//       createdBy: "1",
//     },
//   ];
//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="p-2">
//               Flag
//               <span className="cursor-pointer ml-1">
//                 <FontAwesomeIcon icon={faChevronUp} />
//                 <FontAwesomeIcon icon={faChevronDown} />
//               </span>
//             </th>
//             <th className="p-2">
//               Name
//               <span className="cursor-pointer ml-1">
//                 <FontAwesomeIcon icon={faChevronUp} />
//                 <FontAwesomeIcon icon={faChevronDown} />
//               </span>
//             </th>
//             <th className="p-2">
//               Code
//               <span className="cursor-pointer ml-1">
//                 <FontAwesomeIcon icon={faChevronUp} />
//                 <FontAwesomeIcon icon={faChevronDown} />
//               </span>
//             </th>
//             <th className="p-2">
//               Direction
//               <span className="cursor-pointer ml-1">
//                 <FontAwesomeIcon icon={faChevronUp} />
//                 <FontAwesomeIcon icon={faChevronDown} />
//               </span>
//             </th>
//             <th className="p-2">
//               Status
//               <span className="cursor-pointer ml-1">
//                 <FontAwesomeIcon icon={faChevronUp} />
//                 <FontAwesomeIcon icon={faChevronDown} />
//               </span>
//             </th>
//             <th className="p-2">
//               Created By
//               <span className="cursor-pointer ml-1">
//                 <FontAwesomeIcon icon={faChevronUp} />
//                 <FontAwesomeIcon icon={faChevronDown} />
//               </span>
//             </th>
//             <th className="p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows.map((row, index) => (
//             <tr key={index} className="border-b">
//               <td className="p-2">{row.flag}</td>
//               <td className="p-2">{row.name}</td>
//               <td className="p-2">{row.code}</td>
//               <td className="p-2">{row.direction}</td>
//               <td
//                 className={`p-2 ${
//                   row.status === "Active" ? "bg-green-100" : "bg-red-100"
//                 }`}
//               >
//                 {row.status}
//               </td>
//               <td className="p-2">{row.createdBy}</td>
//               <td className="p-2 flex space-x-2">
//                 <button className="text-blue-500">
//                   <FontAwesomeIcon icon={faEdit} />
//                 </button>
//                 <button className="text-red-500">
//                   <FontAwesomeIcon icon={faTrash} />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default InfoCard;

// // LocaleTable.js

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

// function LocaleTable({ localeData, onEditLocale, onRemoveLocale }) {
//   return (
//     <div className="overflow-x-auto mt-6">
//       <table className="min-w-full border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="p-2">Flag</th>
//             <th className="p-2">Language</th>
//             <th className="p-2">Direction</th>
//             <th className="p-2">Status</th>
//             <th className="p-2">Created By</th>
//             <th className="p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {localeData.map((locale, index) => (
//             <tr key={index} className="border-b">
//               <td className="p-2">{locale.flag}</td>
//               <td className="p-2">{locale.language}</td>
//               <td className="p-2">{locale.direction}</td>
//               <td className={`p-2 ${locale.status === 'Active' ? 'bg-green-100' : 'bg-red-100'}`}>
//                 {locale.status}
//               </td>
//               <td className="p-2">{locale.createdBy}</td>
//               <td className="p-2 flex space-x-2">
//                 <button className="text-blue-500" onClick={() => onEditLocale(index)}>
//                   <FontAwesomeIcon icon={faEdit} />
//                 </button>
//                 <button className="text-red-500" onClick={() => onRemoveLocale(index)}>
//                   <FontAwesomeIcon icon={faTrash} />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default LocaleTable;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function LocaleTable({ localeData, onEditLocale, onRemoveLocale,currentDefault }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLocales = localeData.filter((locale) => {
    return Object.values(locale).some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="bg-white shadow-md rounded-lg p-6  flex flex-col mt-5">
      <div className="overflow-x-auto mt-6">
        <input
          type="text"
          placeholder="Search by Language..."
          className="border border-gray-300 rounded p-2 mb-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Flag</th>
              <th className="p-2">Language</th>
              <th className="p-2">Direction</th>
              <th className="p-2">Status</th>
              <th className="p-2">Created By</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredLocales.map((locale, index) => (
              <tr key={index} className="border-b">
                <td className="p-2 text-center">{locale.flag}</td>
                <td className="p-2 text-center">
                {locale.language}
                {currentDefault && currentDefault.language === locale.language && (
                  <span className="ml-2 text-green-500"> (Current Default)</span>
                )}
              </td>
                <td className="p-2 text-center">{locale.direction}</td>
                <td
                  className={`p-2 ${
                    locale.status === "Active"
                      ? "bg-green-100 text-center"
                      : "bg-red-100 text-center"
                  } `}
                >
                  {locale.status}
                </td>
                <td className="p-2 text-center"> {locale.createdBy}</td>
                <td className="p-2 flex space-x-2 justify-center">
                  <button
                    className="text-blue-500 "
                    onClick={() => onEditLocale(index)}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    className="text-red-500"
                    onClick={() => onRemoveLocale(index)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LocaleTable;
