// import React from "react";
// import { Link } from "gatsby";
// import { GatsbyImage } from "gatsby-plugin-image";
// import { FaEye, FaRegEnvelope, FaHeart } from "react-icons/fa";

// const NewsCard = ({ title, image, slug, isRecent }) => {
//   return (
//     <div className="border rounded-lg overflow-hidden">
//       <GatsbyImage image={image} alt={title} />
//       <div className="px-5 py-3">
//         <Link to={`/news/${slug}`}>
//           <h4
//             className={`${
//               isRecent ? `text-lg` : `text-xl`
//             }  my-2 font-normal h-14  hover:text-secondary transition-colors text-neutral-700`}
//           >
//             {isRecent
//               ? title.length > 42
//                 ? title.substring(0, 42) + `...`
//                 : title
//               : title.length > 42
//               ? title.substring(0, 42) + `...`
//               : title}
//           </h4>
//         </Link>
//         <hr className="h-1 my-3" />

//         <div className="justify-between flex">
//           <div className="flex items-center  text-sm">
//             <span className="flex items-center mr-5">
//               <FaEye className="mr-2" /> 17
//             </span>
//             <span className="flex items-center">
//               <FaRegEnvelope className="mr-2" /> 3
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsCard;
