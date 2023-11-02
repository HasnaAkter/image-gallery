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

import "../pages/Css/Grid.css"; // Import your CSS file for styling

const New = () => {
  const gridItems = Array.from(
    { length: 10 },
    (_, index) => `Item ${index + 1}`
  );

  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();

    const data = event.dataTransfer.getData("text/plain");

    const droppedItem = document.getElementById(data);

    droppedItem.parentNode.removeChild(droppedItem);

    event.target.appendChild(droppedItem);
  };

  return (
    <div className="grid grid-cols-5 gap-4 p-10">
      {gridItems.map((item, index) => (
        <div
          key={index}
          className="item"
          draggable
          onDragStart={handleDragStart}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default New;
