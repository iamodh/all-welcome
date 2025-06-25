import { ChatItem } from "@/data";
import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
  item: ChatItem;
};
export default function DialogItem({ item }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://picsum.photos/250/250" }}
        style={styles.avatar}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <Text style={styles.timestamp}>{item.timestamp}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    gap: 10,
    width: "100%",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
    gap: 8,
  },
  name: {
    fontWeight: "bold",
  },
  message: {
    color: "gray",
  },
  timestamp: {
    fontSize: 12,
    color: "gray",
  },
});
