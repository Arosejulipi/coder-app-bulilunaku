import COLORS from "../../constants/Colors";
import HomeworkScreen from "../../screens/HomeworkScreen";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import MonthListScreen from "../../screens/MonthListScreen";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import SearchScreen from "../../screens/SearchScreen";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator
        initialRouteName="Months"
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.primary
          },
          headerTintColor: COLORS.white,
          headerTitleStyle: {
            fontFamily: 'OpenSans_700Bold'
          },
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: COLORS.accent,
          tabBarInactiveTintColor: COLORS.green

        }}
      >
        <BottomTabs.Screen name="Months"
          options={{
            title: "Months",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="calendar-month" size={size} color={color} />
            )
          }}
          component={MonthListScreen} />
        <BottomTabs.Screen
          name="MonthHomework"
          component={HomeworkScreen}
          options={{
            title: "Homeworks",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="format-list-bulleted-type" size={size} color={color} />
            )
          }}
        />
        <BottomTabs.Screen
          name="SearchMonth"
          component={SearchScreen}
          options={{
            title: "Search",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="search" size={size} color={color} />
            )
          }}
        />
      </BottomTabs.Navigator>
    </NavigationContainer>

  )
}

export default TabNavigator

const styles = StyleSheet.create({
  tabBar: {
    height: 80,
    paddingBottom: 20,
    backgroundColor: COLORS.primary,
    borderTopLeftRadius:10,
    borderTopRightRadius:10
  }
})