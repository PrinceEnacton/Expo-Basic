import React, { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { AppStyleConfig } from "../../../Asset/Theme/appStyle";
import { ColorConfig } from "../../../Asset/Theme/colors";
import { CustomButtonStyle } from "./style";

const CustomButton = () => {
  const [mRadio, setMradio] = useState(false);
  const [fRadio, setFradio] = useState(false);

  const changeSelectedRadioBtn = (btnName) => {
    if (btnName == "Male") {
      setMradio(true);
      setFradio(false);
    } else {
      setFradio(true);
      setMradio(false);
    }
  };

  function builtRadiobtn(string, btname) {
    return (
      <TouchableOpacity
        onPress={() => changeSelectedRadioBtn(string)}
        style={CustomButtonStyle.radioBtnBlock}
        activeOpacity={1}
      >
        <Text style={CustomButtonStyle.radiotext}>{string}</Text>
        <View style={CustomButtonStyle.deactiveradioBtn}>
          {btname ? <View style={CustomButtonStyle.activeradioBtn} /> : null}
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <View style={AppStyleConfig.appbarPedding}>
      <Text>Netive Button</Text>
      <Button
        onPress={() => console.log("btn pressed")}
        title="Press"
        color={ColorConfig.primary}
        style={CustomButtonStyle.nativeButton}
      />

      <Text>Touchable Opecity</Text>
      <TouchableOpacity style={CustomButtonStyle.touchableOpecity}>
        <Text style={CustomButtonStyle.buttonText}>Press</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={CustomButtonStyle.touchableOpecity}
        activeOpacity={0.5}
      >
        <Text style={CustomButtonStyle.buttonText}>Press</Text>
      </TouchableOpacity>

      {builtRadiobtn("Male", mRadio)}
      {builtRadiobtn("Female", fRadio)}
    </View>
  );
};

export default CustomButton;
