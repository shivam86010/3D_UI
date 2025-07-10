// import shutterstock from '../assets/shutterstock.png';
// import React from "react";

// export default function ModelMarketplace() {
//   return (
//     <div className="relative bg-white min-h-screen px-4 py-10 ">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-center p-5 bg-[#F4F4F4]">

//         {/* Left side (nav links) */}
//         <div className="space-y-6">
//           <div className="space-y-3">
//             <div className="border-b border-[#0081A8] pb-2 text-[#0081A8] font-medium flex justify-between">
//               <span>3D Models</span>
//               <span>&gt;</span>
//             </div>
//             <div className="border-b pb-2 text-gray-800">Low-poly PBR 3D Models</div>
//             <div className="text-gray-800">3D Printing Models</div>
//           </div>
//         </div>

//         {/* Center (title, description, image stacked vertically) */}
//         <div className="flex flex-col items-center text-center space-y-4">
//           <h2 className="text-3xl font-bold text-gray-900">3D Model Marketplace</h2>
//           <p className="text-gray-600 max-w-md">
//             Choose from 1 580 000 3D models for applications such as gaming, AR/VR, advertising, animation, movies and 3D printing
//           </p>
//           <img
//             src={shutterstock}
//             alt="3D Squirrel"
//             className="w-72 h-auto object-contain rounded-xl"
//           />
//         </div>

//         {/* Right side description and button */}
//         <div className="space-y-4 text-center lg:text-left">
//           <p className="text-gray-600 text-base">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
//           </p>
//           <button className="bg-[#038D96] hover:bg-teal-600 text-white py-2 px-6 rounded-full">
//             Know More
//           </button>
//         </div>
//       </div>

//       {/* Wireframe Background */}
//       <div className="absolute bottom-0 left-0 w-full h-32 bg-no-repeat bg-bottom bg-cover z-[-1] opacity-30"
//         style={{
//           backgroundImage: "url('https://cdn.dribbble.com/users/239660/screenshots/2881145/media/6e34a6fbbba61cf63759c3e2df2d45b6.png')"
//         }}
//       ></div>
//     </div>
//   );
// }


// import React from "react";
// import shutterstock from "../assets/shutterstock.png";

// export default function ModelMarketplace() {
//   return (
//     <div className="relative bg-white min-h-screen px-4 py-10">
      
//       {/* === Desktop layout === */}
//       <div className="hidden lg:grid max-w-7xl mx-auto grid-cols-1 lg:grid-cols-3 gap-10 items-center p-5 bg-[#F4F4F4]">
//         {/* Left nav */}
//         <div className="space-y-6">
//           <div className="space-y-3">
//             <div className="border-b border-[#0081A8] pb-2 text-[#0081A8] font-medium flex justify-between">
//               <span>3D Models</span>
//               <span>&gt;</span>
//             </div>
//             <div className="border-b pb-2 text-gray-800">Low-poly PBR 3D Models</div>
//             <div className="text-gray-800">3D Printing Models</div>
//           </div>
//         </div>

//         {/* Center title and image */}
//         <div className="flex flex-col items-center text-center space-y-4">
//           <h2 className="text-3xl font-bold text-gray-900">3D Model Marketplace</h2>
//           <p className="text-gray-600 max-w-md">
//             Choose from 1 580 000 3D models for applications such as gaming, AR/VR, advertising, animation, movies and 3D printing
//           </p>
//           <img
//             src={shutterstock}
//             alt="3D Squirrel"
//             className="w-72 h-auto object-contain rounded-xl"
//           />
//         </div>

//         {/* Right text + button */}
//         <div className="space-y-4 text-center lg:text-left">
//           <p className="text-gray-600 text-base">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
//           </p>
//           <button className="bg-[#038D96] hover:bg-teal-600 text-white py-2 px-6 rounded-full">
//             Know More
//           </button>
//         </div>
//       </div>

//       {/* === Mobile layout === */}
//       <div className="lg:hidden max-w-3xl mx-auto bg-[#F4F4F4] p-5 space-y-6 text-center">
//         {/* Title */}
//         <div>
//           <h2 className="text-3xl font-bold text-gray-900">3D Model Marketplace</h2>
//           <p className="text-gray-600 mt-2">
//             Choose from 1 580 000 3D models for applications such as gaming, AR/VR, advertising, animation, movies and 3D printing
//           </p>
//         </div>

//         {/* Nav Links (single row) */}
//         <div className="flex flex-col gap-2 text-sm">
//           <div className="border-b border-[#0081A8] pb-2 text-[#0081A8] font-medium flex justify-between">
//             <span>3D Models</span>
//             <span>&gt;</span>
//           </div>
//           <div className="border-b pb-2 text-gray-800">Low-poly PBR 3D Models</div>
//           <div className="text-gray-800">3D Printing Models</div>
//         </div>

//         {/* Text and Button */}
//         <div className="space-y-4">
//           <p className="text-gray-600 text-base">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
//           </p>
//           <button className="bg-[#038D96] hover:bg-teal-600 text-white py-2 px-6 rounded-full">
//             Know More
//           </button>
//         </div>

//         {/* Image */}
//         <div>
//           <img
//             src={shutterstock}
//             alt="3D Squirrel"
//             className="w-72 h-auto mx-auto object-contain rounded-xl"
//           />
//         </div>
//       </div>

//       {/* Background */}
//       <div
//         className="absolute bottom-0 left-0 w-full h-32 bg-no-repeat bg-bottom bg-cover z-[-1] opacity-30"
//         style={{
//           backgroundImage:
//             "url('https://cdn.dribbble.com/users/239660/screenshots/2881145/media/6e34a6fbbba61cf63759c3e2df2d45b6.png')",
//         }}
//       ></div>
//     </div>
//   );
// }

import React from "react";
import shutterstock from "../assets/shutterstock.png";

export default function ModelMarketplace() {
  return (
    <div className="relative bg-white min-h-screen px-4 py-10">
      {/* === Desktop layout === */}
      <div className="hidden lg:grid max-w-7xl mx-auto grid-cols-1 lg:grid-cols-3 gap-10 items-center p-5 bg-[#F4F4F4]">
        {/* Left nav */}
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="border-b border-[#0081A8] pb-2 text-[#0081A8] font-medium flex justify-between">
              <span>3D Models</span>
              <span>&gt;</span>
            </div>
            <div className="border-b pb-2 text-gray-800">Low-poly PBR 3D Models</div>
            <div className="text-gray-800">3D Printing Models</div>
          </div>
        </div>

        {/* Center title and image */}
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">3D Model Marketplace</h2>
          <p className="text-gray-600 max-w-md">
            Choose from 1 580 000 3D models for applications such as gaming, AR/VR, advertising, animation, movies and 3D printing
          </p>
          <img
            src={shutterstock}
            alt="3D Squirrel"
            className="w-72 h-auto object-contain rounded-xl"
          />
        </div>

        {/* Right text + button */}
        <div className="space-y-4 text-center lg:text-left">
          <p className="text-gray-600 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          </p>
          <button className="bg-[#038D96] hover:bg-teal-600 text-white py-2 px-6 rounded-full">
            Know More
          </button>
        </div>
      </div>

      {/* === Mobile layout === */}
      <div className="lg:hidden max-w-3xl mx-auto bg-[#F4F4F4] p-5 space-y-6 text-start">
        {/* Title & Description */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">3D Model Marketplace</h2>
          <p className="text-gray-600 mt-2">
            Choose from <strong>1 580 000</strong>
             3D models for applications such as gaming, AR/VR, advertising, animation, movies and 3D printing
          </p>
        </div>

        {/* Nav Links - single row on mobile */}
        <div className="flex items-center gap-4 text-sm text-gray-800 overflow-x-auto whitespace-nowrap">
  <div className="flex items-center gap-1 border-b border-[#0081A8] text-[#0081A8] font-medium pb-1">
    <span>3D Models</span>
    <span>&gt;</span>
  </div>
  <div className="border-b pb-1">Low-poly PBR 3D Models</div>
  <div className="pb-1">3D Printing </div>
</div>


        {/* Text and Button */}
        <div className="space-y-4">
          <p className="text-gray-600 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          </p>
          <button className="bg-[#038D96] hover:bg-teal-600 text-white py-2 px-6 rounded-full">
            Know More
          </button>
        </div>

        {/* Image */}
        <div>
          <img
            src={shutterstock}
            alt="3D Squirrel"
            className="w-72 h-auto mx-auto object-contain rounded-xl"
          />
        </div>
      </div>

      {/* Background */}
      <div
        className="absolute bottom-0 left-0 w-full h-32 bg-no-repeat bg-bottom bg-cover z-[-1] opacity-30"
        style={{
          backgroundImage:
            "url('https://cdn.dribbble.com/users/239660/screenshots/2881145/media/6e34a6fbbba61cf63759c3e2df2d45b6.png')",
        }}
      ></div>
    </div>
  );
}



