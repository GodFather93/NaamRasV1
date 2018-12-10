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

export default class SewaMenu extends Component {
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
        <View style={{ height: height * 0.15 }}>
          <LinearGradient
            colors={["#0C2D76", "#30529F", "#1243B1"]}
            style={{ height: "100%", justifyContent: "center" }}
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
          </LinearGradient>
        </View>
        <View style={{ borderWidth: 0.8, borderColor: "black" }} />
        <LinearGradient
          colors={["#8AA1EC", "#FEF9F8", "#FEF9F8"]}
          style={{ height: "100%" }}
        >
          <View
            style={{
              height: height * 0.85,
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
                  image: require("../../images/dbs.jpg"),
                  type: "SewaOne"
                },
                {
                  key: "Parsad Sewa",
                  image: require("../../images/prasadsewa.jpg"),
                  type: "SewaTwo"
                },
                {
                  key: "Langar sewa",
                  image: require("../../images/langarsewa.jpg"),
                  type: "Langar sewa"
                },
                {
                  key: "Jora Ghar Sewa",
                  image: require("../../images/aboutnaamras.jpg"),
                  type: "Jora Ghar Sewa"
                },
                {
                  key: "Opening & Closing Ceremony Sewa",
                  image: require("../../images/openingceremonysewa.jpg"),
                  type: "Opening & Closing Ceremony Sewa"
                },
                {
                  key: "Ragi Management Sewa",
                  image: require("../../images/ragimanagemnetsewa.jpg"),
                  type: "Ragi Management Sewa"
                },
                {
                  key: "Decoration",
                  image: require("../../images/decorationsewa.jpg"),
                  type: "Decoration"
                }
              ]}
              numColumns={3}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigate(item.type)}>
                  <View
                    style={{
                      height: height * 0.15,
                      width: height * 0.144,
                      alignItems: "center",
                      justifyContent: "center",
                      borderColor: "grey",
                      borderWidth: 0.8,
                      borderRadius: 10,
                      overflow: "hidden",
                      marginHorizontal: 4,
                      marginTop: 4,
                      marginBottom: 4
                    }}
                  >
                    <ImageBackground
                      source={item.image}
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
                            fontSize: 18,
                            fontWeight: "400",
                            letterSpacing: 1
                          }}
                        >
                          {item.key}
                        </Text>
                      </View>
                    </ImageBackground>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </LinearGradient>
      </View>
    );
  }
}
