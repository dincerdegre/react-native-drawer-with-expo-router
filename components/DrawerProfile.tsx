import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";

interface DrawerProfileProps {
  profilePicture: ImageSourcePropType;
  name: string;
  title: string;
}

const DrawerProfile: React.FC<DrawerProfileProps> = ({
  profilePicture,
  name,
  title,
}) => {
  return (
    <View style={styles.drawerHeader}>
      <Image source={profilePicture} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    height: 180,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
  },
  title: {
    fontSize: 14,
    color: "gray",
  },
});
export default DrawerProfile;
