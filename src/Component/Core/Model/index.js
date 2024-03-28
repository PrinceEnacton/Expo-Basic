import React, { useState } from "react";
import { Modal, Pressable, Text, TouchableOpacity, View } from "react-native";
import { modelStyles } from "./style";

const CustomModel = (children) => {
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
