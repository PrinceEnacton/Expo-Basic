import { useState, useEffect } from "react";
import { Dimensions } from "react-native";

const useDimension = () => {
  const [screenDimensions, setScreenDimensions] = useState(
    Dimensions.get("window")
  );

  useEffect(() => {
    const updateScreenDimensions = () => {
      console.log("update called");
      console.log(Dimensions.get("window"));
      setScreenDimensions(Dimensions.get("window"));
    };

    Dimensions.addEventListener("change", updateScreenDimensions);

    return () => {
      Dimensions.removeEventListener("change", updateScreenDimensions);
    };
  }, []);

  return {
    Dimensions: screenDimensions,
    screenWidth: screenDimensions.width,
    screenHeight: screenDimensions.height,
  };
};

export default useDimension;
