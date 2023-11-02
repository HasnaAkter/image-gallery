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
import img12 from "../assets/img12.jpg";
import { useState } from "react";
import "../pages/Css/Grid.css";

const Form = () => {
  const [images, setImages] = useState([
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
  ]);

  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelection = (index) => {
    const isSelected = selectedItems.includes(index);
    setSelectedItems((prevSelected) => {
      if (isSelected) {
        return prevSelected.filter((selected) => selected !== index);
      } else {
        return [...prevSelected, index];
      }
    });
  };

  const handleDelete = () => {
    if (selectedItems.length === 0) {
      alert("Please select items to delete.");
      return;
    }

    const remainingImages = images.filter(
      (_, index) => !selectedItems.includes(index)
    );
    setImages(remainingImages);

    console.log("Deleting selected items:", selectedItems);

    setSelectedItems([]);
  };

  return (
    <div className="my-5 border-solid border-2 bg-gray-100 shadow-lg shadow-gray-500/50">
      <div className="flex">
        <div className="p-5">
          <h2 className="font-bold text-2xl">
            {selectedItems.length > 0
              ? `Selected items: ${selectedItems.length}`
              : "Gallery"}
          </h2>
        </div>
        {selectedItems.length > 0 && (
          <div className="ml-auto p-5">
            <button onClick={handleDelete}>
              Delete ({selectedItems.length})
            </button>
          </div>
        )}
      </div>
      <hr className="border-solid bg-gray-300" />
      <div className="grid grid-cols-5 gap-4 p-10">
        {images.map((image, index) => (
          <div
            key={index}
            className={`item ${
              selectedItems.includes(index) ? "deleted" : ""
            } ${index === 0 ? "row-span-2 col-span-2" : ""}`}
          >
            <div className="item">
              <label>
                <input
                  type="checkbox"
                  checked={selectedItems.includes(index)}
                  onChange={() => toggleSelection(index)}
                />
                <img src={image} alt={`Image ${index + 1}`} />
              </label>
            </div>
          </div>
        ))}
        <div className="item-added-images">
          <img src={img12} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Form;
