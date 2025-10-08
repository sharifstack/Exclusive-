import React, { useEffect, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";

const ProductImages = ({ image }) => {
  let [initialImage, setInitialImage] = useState(
    (image && image[0]) ||
      "https://static.vecteezy.com/system/resources/previews/043/016/304/non_2x/ai-generated-3d-rendering-of-a-game-controller-on-transparent-background-ai-generated-free-png.png"
  );

  useEffect(() => {
    if (image && image.length > 0) {
      setInitialImage(image[0]);
    } else {
      setInitialImage(
        "https://static.vecteezy.com/system/resources/previews/043/016/304/non_2x/ai-generated-3d-rendering-of-a-game-controller-on-transparent-background-ai-generated-free-png.png"
      );
    }
  }, [image]);

  return (
    <div className="w-3/5">
      <div className="flex gap-10">
        <div className=" flex flex-col gap-4">
          {image?.map((img, index) => (
            <div className="bg-Secondary_F5F5F5 cursor-pointer" key={index}>
              <img
                className="w-[170px] h-[138px] object-cover"
                onClick={() => setInitialImage(img)}
                src={img}
                alt={img}
              />
            </div>
          ))}

          <div className="bg-Secondary_F5F5F5 cursor-pointer">
            <img
              className="w-[170px] h-[138px] object-cover"
              src="https://static.vecteezy.com/system/resources/previews/043/016/304/non_2x/ai-generated-3d-rendering-of-a-game-controller-on-transparent-background-ai-generated-free-png.png"
              alt={""}
              onClick={() =>
                setInitialImage(
                  "https://static.vecteezy.com/system/resources/previews/043/016/304/non_2x/ai-generated-3d-rendering-of-a-game-controller-on-transparent-background-ai-generated-free-png.png"
                )
              }
            />
          </div>
        </div>
        <div className="w-full">
          <div>
            <div className="bg-Secondary_F5F5F5">
              <InnerImageZoom
                className="w-full h-[650px] object-"
                src={initialImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
