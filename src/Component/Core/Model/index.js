import React, { useState } from "react";
import {
  Modal,
  Pressable,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AppStyleConfig } from "../../../Asset/Theme/appStyle";
import { modelStyles } from "./style";

const CustomModel = () => {
  const [visibleModel, setVisibleModel] = useState(false);
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={visibleModel}>
        <View style={modelStyles.modalContainer}>
          <View style={modelStyles.modalContent}>
            <Text>Your Modal Content Goes Here</Text>
            <Pressable onPress={() => setVisibleModel(false)}>
              <Text>CloseModel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text>Model</Text>
      <TouchableOpacity
        style={modelStyles.openButton}
        onPress={() => setVisibleModel(!visibleModel)}
      >
        <View style={modelStyles.openButtonText}>
          <Text>Open Model</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={modelStyles.openButton}
        onPress={() => setVisibleModel(!visibleModel)}
      >
        <View style={modelStyles.openButtonText}>
          <Text>Open Model</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomModel;
