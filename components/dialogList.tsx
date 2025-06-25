import DialogItem from "@/components/dialogItem";
import { chatList } from "@/data";
import { Link } from "expo-router";
import { FlatList, StyleSheet, View } from "react-native";

export default function DialogList() {
  return (
    <FlatList
      data={chatList}
      style={styles.listContainer}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={() => (
        <View style={{ height: 1, backgroundColor: "#e0e0e0" }} />
      )}
      renderItem={({ item }) => (
        <Link
          href={{
            pathname: `/chat/[id]`,
            params: { id: item.id },
          }}
        >
          <DialogItem item={item} />
        </Link>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
  },
  listItem: {
    height: 100,
    justifyContent: "center",
  },
});
