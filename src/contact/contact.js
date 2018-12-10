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

export default class Contact extends Component {
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
            CONTACT US
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
            source={require("../../images/decorationsewa.jpg")}
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
                Singapore Expo Hall 7
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ height: height * 0.65 }}>
          <View style={{}}>
            <Text
              style={{
                fontSize: 18,
                paddingTop: 40,
                fontWeight: "400",
                paddingLeft: 8,
                letterSpacing: 1
              }}
            >
              22ND TO 25TH DECEMBER 2018 (SATURDAY TO TUESDAY) 5.00PM TO 10PM{
                "\n"
              }
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingTop: 8,
                fontWeight: "300",
                paddingLeft: 8,
                letterSpacing: 1
              }}
            >
              For any questions & clarifications, please contact us: Contact:
              9726-9008
              {"\n"}
              {"\n"}
            </Text>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                onPress={this._onPressButton}
                style={{
                  height: 40,
                  width: 100,
                  borderRadius: 10,
                  borderColor: "black",
                  backgroundColor: "black",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text style={{ textAlign: "center", color: "white" }}>
                  EMAIL US
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
