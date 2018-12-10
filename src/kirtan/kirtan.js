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
import LinearGradient from "react-native-linear-gradient";

export default class KirtanDetail extends Component {
  static navigationOptions = {
    title: "s1",
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
            height: height * 0.15,
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
              marginTop: 15,
              color: "white"
            }}
          >
            Kirtan Schedule
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
        <LinearGradient
          colors={["#8AA1EC", "#FEF9F8", "#FEF9F8"]}
          style={{ height: "100%" }}
        >
          <View style={{ height: height * 0.85 }}>
            <Text
              style={{
                fontSize: 14,
                paddingTop: 8,
                fontWeight: "400",
                paddingLeft: 8,
                letterSpacing: 1
              }}
            >
              DAY 1: (22nd Dec 2018, Saturday).{"\n"}
            </Text>
            <Text
              style={{
                fontSize: 12,
                paddingTop: 8,
                fontWeight: "300",
                paddingLeft: 8,
                letterSpacing: 1
              }}
            >
              4.00pm: “In Pursuit of Empire” Talk by Davinder Toor
              {"\n"}
              {"\n"}
              4.45pm: Stage Play (Maharaja Ranjit Singh Ji), Act 1{"\n"}
              {"\n"}5.25pm: Arrival of Sri Guru Granth Sahib Ji{"\n"}
            </Text>
            <Text
              style={{
                fontSize: 16,
                paddingTop: 8,
                fontWeight: "400",
                paddingLeft: 8
              }}
            >
              {"\n"}NOTE:{"\n"}
              {"\n"}(Buses will leave Gurdwaras at 4pm & 6pm){"\n"}
            </Text>
          </View>
        </LinearGradient>
      </View>
    );
  }
}
