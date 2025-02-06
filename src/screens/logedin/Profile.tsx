import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  StatusBar,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../context/AuthContext";
import FormSubmitBtn from "../../components/Form/FormSubmitBtn";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Profile = () => {
  const { onLogout } = useAuth();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#D5F2E3" }}>
      <StatusBar backgroundColor="#1B1B33" />
      <ScrollView showsHorizontalScrollIndicator={true}>
        <View style={[styles.header, styles.shadow]}>
          <View
            style={[
              styles.profilebar,
              {
                // Try setting `flexDirection` to `"row"`.
                flexDirection: "row",
              },
            ]}
          >
            <Text>Test </Text>
            <Text>MyName</Text>
          </View>
          <FormSubmitBtn
            onPress={onLogout}
            title="Logout"
            style={styles.buttons}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: windowWidth,
    height: windowHeight / 3,
    backgroundColor: "#1B1B33",
  },
  shadow: {
    shadowColor: "#1b1b33",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.5,
    elevation: 5,
  },
  profilebar: {
    margin: 50,
    width: windowWidth,
  },
  buttons: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#FF8811",
  },
});

export default Profile;
