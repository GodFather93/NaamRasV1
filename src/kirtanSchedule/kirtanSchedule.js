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

export default class KirtanSchedule extends Component {
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
            <View style={{ height: "50%" }}>
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
                SCHEDULE
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
            <View
              style={{
                height: "50%",
                alignItems: "flex-end",
                justifyContent: "center",
                flexDirection: "row"
              }}
            >
              <LinearGradient
                colors={["#9F9204", "#F5EE9C", "#9F9204"]}
                style={{ width: "12.5%", height: "60%" }}
              >
                <View
                  style={{
                    width: "100%"
                  }}
                >
                  <TouchableOpacity
                    onPress={this._onPressButton}
                    style={{ height: "100%", width: "100%" }}
                  >
                    <Text
                      style={{
                        fontSize: 26,
                        fontWeight: "400",
                        color: "black",
                        textAlign: "center",
                        paddingTop: 20
                      }}
                    >
                      22
                    </Text>
                  </TouchableOpacity>
                </View>
              </LinearGradient>
              <TouchableOpacity
                onPress={this._onPressButton}
                style={{ width: "12.5%" }}
              >
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "400",
                    color: "white",
                    textAlign: "center"
                  }}
                >
                  23
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this._onPressButton}
                style={{ width: "12.5%" }}
              >
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "400",
                    color: "white",
                    textAlign: "center"
                  }}
                >
                  24
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this._onPressButton}
                style={{ width: "12.5%" }}
              >
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "400",
                    color: "white",
                    textAlign: "center"
                  }}
                >
                  25
                </Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
        <View style={{ borderWidth: 0.8, borderColor: "black" }} />
        <View style={{ height: height * 0.8 }}>
          <LinearGradient
            colors={["#8AA1EC", "#FEF9F8", "#FEF9F8"]}
            style={{ height: "100%" }}
          >
            <TouchableOpacity
              onPress={() => navigate("kirtanDetail")}
              style={{ marginTop: 40, paddingLeft: 40 }}
            >
              <Text
                style={{ fontSize: 26, fontWeight: "500", letterSpacing: 1 }}
              >
                KIRTAN
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this._onPressButton}
              style={{ marginTop: 40, paddingLeft: 40 }}
            >
              <Text
                style={{ fontSize: 26, fontWeight: "500", letterSpacing: 1 }}
              >
                TRANSPORTATION
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this._onPressButton}
              style={{ marginTop: 40, paddingLeft: 40 }}
            >
              <Text
                style={{ fontSize: 26, fontWeight: "500", letterSpacing: 1 }}
              >
                EXHITBITION
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {}
});
