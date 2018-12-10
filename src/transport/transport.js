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

export default class Transport extends Component {
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
        <View style={{ height: height * 0.2, flexDirection: "column" }}>
          <LinearGradient
            colors={["#0C2D76", "#30529F", "#1243B1"]}
            style={styles.linearGradient}
          >
            <View style={{ height: "100%" }}>
              <Text
                style={{
                  fontSize: 26,
                  marginTop: 35,
                  textAlign: "center",
                  fontWeight: "400",
                  letterSpacing: 1,
                  color: "white"
                }}
              >
                Transport
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
          </LinearGradient>
        </View>
        <View style={{ borderWidth: 0.8, borderColor: "black" }} />
        <View style={{ height: height * 0.8, width: width }}>
          <LinearGradient
            colors={["#8AA1EC", "#FEF9F8", "#FEF9F8"]}
            style={{ height: "100%", width: "100%" }}
          >
            <Image
              source={require("../../images/trasnportView.png")}
              style={{ height: "65%", width: "100%" }}
            />
          </LinearGradient>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {}
});
