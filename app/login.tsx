import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function LoginScreen() {
  const handleLogin = () => {
    // 로그인 성공 후 탭으로 이동
    router.replace("/(tabs)");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>로그인 페이지</Text>
      <Pressable onPress={handleLogin}>
        <Text>로그인</Text>
      </Pressable>
    </View>
  );
}
