import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  FlatList,
  ImageBackground
} from "react-native";
import { createStackNavigator } from "react-navigation";
const { width, height } = Dimensions.get("window");

export default class Sponsors extends Component {
  static navigationOptions = {
    title: "Menu",
    header: false
  };
  constructor(props) {
    super(props);
  }
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            height: height * 0.1,
            justifyContent: "center",
            backgroundColor: "rgb(0,69,136)"
          }}
        >
          <Text
            style={{
              fontSize: 24,
              textAlign: "center",
              fontWeight: "600",
              letterSpacing: 1,
              marginTop: 15
            }}
          >
            SPONSORS
          </Text>
          <TouchableOpacity
            onPress={() => navigate("Dash")}
            style={{
              position: "absolute",
              height: 30,
              width: 30,
              left: 10,
              top: 35
            }}
          >
            <Image
              source={require("../../images/back.png")}
              style={{ height: 30, width: 30 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ borderWidth: 0.8, borderColor: "black" }} />
        <View
          style={{
            height: height * 0.9,
            alignItems: "center",
            borderColor: "grey",
            marginTop: 10
          }}
        >
          <FlatList
            style={{
              marginTop: 2,
              ...this.props.style
            }}
            data={[
              {
                key: "Darbar Sahib Sewa",
                image: require("../../images/masti.jpg"),
                type: "COMPANY"
              },
              {
                key: "Parsad Sewa",
                image: require("../../images/mccy.png"),
                type: "COMPANY"
              },
              {
                key: "Langar sewa",
                image: require("../../images/scoot.png"),
                type: "COMPANY"
              },
              {
                key: "Jora Ghar Sewa",
                image: require("../../images/Zee_TV_RGB.png"),
                type: "COMPANY"
              },
              {
                key: "Opening & Closing Ceremony Sewa",
                image: require("../../images/Kang.png"),
                type: "COMPANY"
              }
            ]}
            numColumns={3}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigate(item.page)}>
                <View
                  style={{
                    height: height * 0.144,
                    width: height * 0.144,
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: "grey",
                    borderWidth: 0.8,
                    borderRadius: 55,
                    overflow: "hidden",
                    marginHorizontal: 4,
                    marginTop: 4,
                    marginBottom: 4
                  }}
                >
                  <Image
                    style={{ height: "100%", width: "100%" }}
                    source={item.image}
                  />
                </View>
                <Text style={{ textAlign: "center" }}>{item.type}</Text>
                <Text style={{ textAlign: "center" }}>Tagline</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    );
  }
}
