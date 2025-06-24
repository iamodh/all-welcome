import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Settings screen</Text>
      <Pressable onPress={() => router.replace("/login")}>
        <Text>로그인 페이지로 이동</Text>
      </Pressable>
    </View>
  );
}
