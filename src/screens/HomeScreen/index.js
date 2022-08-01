import { View, Text, SafeAreaView, FlatList } from "react-native";
import React from "react";
import Greeter from "./components/greeter";
import styles from "./styles";
import Spacer from "../../components/spacer";
import Category from "./components/category";
import Starter from "./components/Vault";
import values from "../../constants/values";
import { categories, starter, trust } from "../../constants/data";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.horizontalPaddingView}>
        <Greeter
          user={{
            img: "https://scontent.flos1-1.fna.fbcdn.net/v/t1.6435-9/120018766_348204796375971_3447850043120522602_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGeqlomS3CPWY9dBKaS_BCx3zrAyO7B7_rfOsDI7sHv-lJBreZQCIytObYAyMMalxHXLx9kWndELJyEyleDsnJp&_nc_ohc=XjfTc_X9nboAX-YoAha&_nc_ht=scontent.flos1-1.fna&oh=00_AT_L74yMV2mrfpnhnm0V-QK9G3RNT2yVSy9dPWCGwEqpYw&oe=63030063",
            name: "Erwin",
          }}
        />

        <Text style={values.h1Style}>Vault</Text>
        <Spacer height={5} />
      </View>
      <View style={{ paddingLeft: values.horizontalPadding }}>
        <FlatList
          horizontal
          data={categories}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Category
              category={item}
              onPress={(val) => console.warn(`Clicked ${val}`)}
            />
          )}
        />
      </View>

      <View style={styles.horizontalPaddingView}>
        <Spacer height={12} />
        <Text style={values.h2Style}>The Starter Set</Text>
        <Spacer height={5} />

        <FlatList
          data={starter}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Starter
              starter={item}
              onPress={(val) => console.warn(`Clicked ${val}`)}
            />
          )}
        />
        <Spacer height={5} />
        <Text style={values.h2Style}>The Trust Set</Text>
        <Spacer height={5} />
        <FlatList
          data={trust}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Starter
              starter={item}
              onPress={(val) => console.warn(`Clicked ${val}`)}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
