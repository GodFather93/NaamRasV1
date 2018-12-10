/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { createStackNavigator } from "react-navigation";
const { width, height } = Dimensions.get("window");
import { LogPanel } from "./src/logPanel";
import { LoginScreen } from "./src/loginScreen";
import { AdminLogin } from "./src/adminLogin";
import { SignUp } from "./src/signUp";
import { AdminMenu } from "./src/adminMenu";
import { MainDash } from "./src/mainDash";
import { SewaMenu } from "./src/sewaMenu";
import { Events } from "./src/events";
import { KirtanSchedule } from "./src/kirtanSchedule";
import { Exhibition } from "./src/exhibition";
import { Transport } from "./src/transport";
import SewaOne from "./src/sewaMenuServices/darbarSahibSewa";
import SewaTwo from "./src/sewaMenuServices/langerSewa";
import { KirtanDetail } from "./src/kirtan";
import { Sponsors } from "./src/sponsors";
import { Contact } from "./src/contact";

const NavigationApp = createStackNavigator(
  {
    logPanel: { screen: LogPanel },
    login: { screen: LoginScreen },
    adminLogin: { screen: AdminLogin },
    signUp: { screen: SignUp },
    adminDash: { screen: AdminMenu },
    Dash: { screen: MainDash },
    Sewa: { screen: SewaMenu },
    Kirtan: { screen: KirtanSchedule },
    Sponsors: { screen: Sponsors },
    kirtanDetail: {
      screen: KirtanDetail
    },
    Exhibition: { screen: Exhibition },
    Events: { screen: Events },

    Transport: { screen: Transport },
    SewaOne: { screen: SewaOne },
    SewaTwo: { screen: SewaTwo },
    Contact: { screen: Contact }
  },
  {
    headerMode: "none"
  }
);

export default class App extends Component<Props> {
  render() {
    return <NavigationApp />;
  }
}
