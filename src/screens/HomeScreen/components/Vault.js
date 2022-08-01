import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import colors from "../../../constants/colors";
import values from "../../../constants/values";
import CustomButton from "../../../components/customButton";

const Starter = ({ starter, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <View
          style={[
            styles.imageContainer,
            { backgroundColor: starter.backgroundColor },
          ]}
        >
          <Image style={styles.image} source={starter.img} />
        </View>
        <View>
          <Text style={values.h3Style}>{starter.heading}</Text>
          <Text style={values.pStyle}>&#9733; +{starter.price}</Text>
        </View>
      </View>
      <CustomButton
        width={52}
        height={25}
        radius={10}
        textSize={12}
        text="Start"
        backgroundColor={colors.blue}
        onPress={() => onPress(starter.heading)}
      />
    </View>
  );
};

export default Starter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    height: 70,
    borderRadius: 10,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 1,
    paddingEnd: 15,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 10,
  },
  imageContainer: {
    height: 50,
    width: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
});
