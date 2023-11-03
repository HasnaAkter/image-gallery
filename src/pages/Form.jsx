import { useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

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
import "../pages/Css/Grid.css";

const DraggableImage = ({
  image,
  index,
  moveImage,
  isSelected,
  toggleSelection,
  isDeleted,
}) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: "IMAGE",
    hover(draggedItem) {
      if (draggedItem.index !== index) {
        moveImage(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: "IMAGE",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // Always show the checkbox for deleted items
  const isCheckboxVisible = isDeleted || isSelected;

  const itemStyle = {
    opacity: isSelected ? 0.5 : 1, // Reduce opacity for selected items
  };

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={`item ${isDragging ? "dragging" : ""} ${
        index === 0 ? "row-span-2 col-span-2" : ""
      }`}
      style={itemStyle}
    >
      <div className="item">
        {isDeleted ? (
          <img src={image} alt={`Image ${index + 1}`} />
        ) : (
          <label>
            <input
              className="h-5 w-5"
              type="checkbox"
              checked={isSelected}
              onChange={() => toggleSelection(index)}
              style={{ visibility: isCheckboxVisible ? "visible" : "hidden" }}
            />
            <img src={image} alt={`Image ${index + 1}`} />
          </label>
        )}
      </div>
    </div>
  );
};



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

  const moveImage = (fromIndex, toIndex) => {
    const updatedImages = [...images];
    const [movedImage] = updatedImages.splice(fromIndex, 1);
    updatedImages.splice(toIndex, 0, movedImage);
    setImages(updatedImages);
  };

  const toggleSelection = (index) => {
    setSelectedItems((prevSelected) => {
      const isSelected = prevSelected.includes(index);
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
    setSelectedItems([]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="my-5 border-solid border-2 bg-gray-100 shadow-lg shadow-gray-500/50">
        <div className="flex">
          <div className="p-5">
            <h2 className="font-bold text-2xl">
              {selectedItems.length > 0 ? (
                <label>
                  <input className="h-5 w-5" type="checkbox" checked />
                  {`  ${selectedItems.length} Files Selected`}
                </label>
              ) : (
                "Gallery"
              )}
            </h2>
          </div>
          {selectedItems.length > 0 && (
            <div className="ml-auto p-5">
              <button onClick={handleDelete}>Delete Files</button>
            </div>
          )}
        </div>
        <hr className="border-solid bg-gray-300" />
        <div className="grid grid-cols-5 gap-4 p-10">
          {images.map((image, index) => (
            <DraggableImage
              key={index}
              index={index}
              image={image}
              moveImage={moveImage}
              isSelected={selectedItems.includes(index)}
              toggleSelection={toggleSelection}
            />
          ))}
          <div className="item-added-images">
            <img src={img12} alt="" />
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default Form;
