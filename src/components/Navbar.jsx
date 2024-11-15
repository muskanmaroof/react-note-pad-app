

// import { NavbarData } from "../data/Navbar";
// import { NavLink } from "react-router-dom";
// const Navbar = () => {
//   return (
//     <div className="w-full h-[45px] flex justify-center items-center p-4 bg-gray-800 gap-x-5">
//       {NavbarData.map((link, idx) => (
//         <NavLink
//           key={idx}
//           to={link.path}
//           className={({ isActive }) =>
//             isActive
//               ? "text-blue-500 font-semibold text-xl"
//               : "text-white font-medium text-xl"
//           }
//         >
//           {link.title}
//         </NavLink>
//       ))}
//     </div>
//   );
// };

// export default Navbar;

import { NavbarData } from "../data/Navbar";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[60px] flex justify-center items-center p-4  bg-[#2E2E2E]  gap-x-6 shadow-md">
      {NavbarData.map((link, idx) => (
        <NavLink
          key={idx}
          to={link.path}
          className={({ isActive }) =>
            isActive
              ? "text-[#B57EDC] font-semibold text-xl relative after:block after:absolute after:w-full after:h-[3px] after:bg-[#B57EDC] after:bottom-0"
              : "text-white font-medium text-xl hover:text-blue-300 transition-all duration-300 relative"
          }
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
