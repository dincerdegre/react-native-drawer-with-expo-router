import { useFonts } from "expo-font";
import { Drawer } from "expo-router/drawer";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { AntDesign } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import HeaderRight from "@/components/HeaderRight";
import DrawerProfile from "@/components/DrawerProfile";
import profile from "../assets/images/profile/me.jpeg";
import { SafeAreaView } from "react-native";
import { DrawerItemList } from "@react-navigation/drawer";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerPosition: "left",
          drawerType: "front",
          drawerStyle: {
            width: "60%",
          },
          headerTintColor: "black",
          headerRight: () => <HeaderRight />,
        }}
        drawerContent={(props) => (
          <SafeAreaView>
            <DrawerProfile
              profilePicture={profile}
              name={"Dinçer Değre"}
              title={"Full Stack Developer"}
            />
            <DrawerItemList {...props} />
          </SafeAreaView>
        )}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: true,
            headerTitle: "",
            drawerActiveTintColor: "black",
            drawerIcon: () => <AntDesign name="home" size={20} color="black" />,
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: true,
            headerTitle: "",
            drawerActiveTintColor: "black",
            drawerIcon: () => <AntDesign name="user" size={20} color="black" />,
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            title: "Settings",
            headerShown: true,
            headerTitle: "",
            drawerActiveTintColor: "black",
            drawerIcon: () => (
              <AntDesign name="setting" size={20} color="black" />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
