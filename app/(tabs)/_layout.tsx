import { Tabs } from "expo-router";
import { ImageBackground, Image, Text, View, Animated, Platform } from "react-native";
import { useEffect, useRef } from "react";

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

// Custom tab icon with unique animation and style
function CustomTabIcon({ isActive, icon, label }: any) {
  const fadeAnim = useRef(new Animated.Value(isActive ? 1 : 0.6)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: isActive ? 1 : 0.6,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [isActive]);

  return (
    <Animated.View style={{ opacity: fadeAnim, alignItems: 'center', flexDirection: 'row', paddingHorizontal: isActive ? 12 : 0 }}>
      <View style={{
        backgroundColor: isActive ? '#e0c8ff' : 'transparent',
        borderRadius: 12,
        paddingVertical: isActive ? 8 : 0,
        paddingHorizontal: isActive ? 14 : 0,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        <Image
          source={icon}
          style={{
            tintColor: isActive ? '#1a1625' : '#A8B5DB',
            width: 22,
            height: 22,
            marginRight: isActive ? 8 : 0,
            opacity: isActive ? 0.95 : 0.7,
          }}
        />
        {isActive && (
          <Text style={{ color: '#6C4AB6', fontWeight: '700', fontSize: 15, letterSpacing: 0.5 }}>
            {label}
          </Text>
        )}
      </View>
    </Animated.View>
  );
}

// Main tab navigator with original styling
export default function MainTabNavigator() {
  return (
    <View style={{ flex: 1, backgroundColor: '#120F23' }}>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarItemStyle: {
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10,
          },
          tabBarStyle: {
            backgroundColor: 'rgba(20, 18, 40, 0.97)',
            borderRadius: 10,
            marginHorizontal: 0,
            height: 54,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            overflow: 'hidden',
            borderWidth: 1,
            borderColor: 'rgba(120, 100, 200, 0.13)',
            shadowColor: '#1a1625',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.15,
            shadowRadius: 4,
            elevation: 5,
          },
          headerShown: false,
          tabBarHideOnKeyboard: true,
        })}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ focused }) => (
              <CustomTabIcon isActive={focused} icon={icons.home} label="Home" />
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: "Search",
            tabBarIcon: ({ focused }) => (
              <CustomTabIcon isActive={focused} icon={icons.search} label="Search" />
            ),
          }}
        />
        <Tabs.Screen
          name="save"
          options={{
            title: "Save",
            tabBarIcon: ({ focused }) => (
              <CustomTabIcon isActive={focused} icon={icons.save} label="Save" />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ focused }) => (
              <CustomTabIcon isActive={focused} icon={icons.person} label="Profile" />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
