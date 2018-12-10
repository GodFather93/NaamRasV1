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

export default class SewaTwo extends Component {
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
              marginTop: 15,
              color: "white"
            }}
          >
            Sewa
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

        <View style={{ height: height * 0.25 }}>
          <ImageBackground
            source={require("../../images/langarsewa.jpg")}
            style={{
              height: "100%",
              width: "100%"
            }}
          >
            <View
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: "rgba(0,0,0,0.4)",
                alignItems: "center",
                justifyContent: "flex-end"
              }}
            >
              <Text
                style={{
                  color: "white",
                  paddingBottom: 15,
                  fontSize: 28,
                  fontWeight: "600",
                  letterSpacing: 1
                }}
              >
                Darbar Sahib Sewa
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ height: height * 0.65 }}>
          <View style={{}}>
            <Text
              style={{
                fontSize: 16,
                paddingTop: 8,
                fontWeight: "400",
                paddingLeft: 8
              }}
            >
              ABOUT:
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingTop: 8,
                fontWeight: "400",
                paddingLeft: 8,
                letterSpacing: 1
              }}
            >
              Covers the Collection, distribution and clean up of Langar daily.{
                "\n"
              }
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
              Arrange Sewadar Langar Daily (Lunch and Tea)- Set up and clearing.{
                "\n"
              }
              {"\n"}
              Arrange Langar pick up from Gurudwaras. {"\n"}
              {"\n"}Organize pangat serving system, to ensure all sangat get all
              food items on time{"\n"}
              {"\n"}Serve Langar to Pangat.{"\n"}
              {"\n"}Coordinate with all suppliers, and organize replenishment of
              various supplies.{"\n"}
              {"\n"}Organize for making of cordial drinks everyday.{"\n"}
              {"\n"}
              Set up Langar Hall everyday by 4pm (Tables, counters, mats){"\n"}
              {"\n"}Hourly cleaning of Langar Hall.{"\n"}
              {"\n"}Returning containers to Gurudwara promptly.
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
