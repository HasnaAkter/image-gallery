// export default Form;
import img1 from "../assets/image-1.webp";
import img2 from "../assets/image-2.webp";
import img3 from "../assets/image-3.webp";
import img4 from "../assets/image-4.webp";
import img5 from "../assets/image-5.webp";
import img6 from "../assets/image-6.webp";
import img7 from "../assets/image-7.webp";
import img8 from "../assets/image-8.webp";
import img9 from "../assets/image-9.webp";
import img10 from "../assets/image-10.jpeg";
import img11 from "../assets/image-11.jpeg";
import img12 from "../assets/img12.jpg"
// import { BiImage } from "react-icons/bi";

import "../pages/Css/Grid.css"; // Import your CSS file for styling

const Form = () => {
  // Dummy data for the grid items
  const gridItems = Array.from(
    { length: 10 },
    (_, index) => `Item ${index + 1}`
  );

  // Array of image URLs
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];

  return (
    <div className="my-5 border-solid border-2 bg-gray-100 shadow-lg shadow-gray-500/50">
      <div className="flex ">
        <div className="p-5">
          <h2 className="font-bold text-2xl ">Gallery</h2>
        </div>
        {/* <div className="ml-auto p-5">
          <p>Delete</p>
        </div> */}
      </div>
      <hr className="border-solid  bg-gray-300" />
      <div className="grid grid-cols-5 gap-4 p-10">
        {/* Header spanning two columns */}
        <div className="item row-span-2 col-span-2">
            <img src={img11} alt="" />
        </div>

        {/* Using Array.map() to generate grid items */}
        {gridItems.map((item, index) => (
          <div key={index} className="item">
            <img
              src={images[index % images.length]}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
         <div className="item-added-images">
            <img src={img12} alt="" />
        </div>

        {/* Added Images section */}
        {/* <div className="item-added-images flex flex-col items-center justify-center">
          <div className="text-center">
            <BiImage size={30} />
          </div>
          <div className="py-5">
            <p className="">Added Images</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Form;
