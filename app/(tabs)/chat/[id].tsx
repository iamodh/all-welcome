import { chatList } from "@/data";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const messages = [
  {
    id: "1",
    sender: "assistant",
    text: "Hello! How can I assist you today?",
    date: "Today",
  },
  {
    id: "2",
    sender: "user",
    text: "Can you tell me about the weather?",
    date: "Yesterday",
  },
  {
    id: "3",
    sender: "assistant",
    text: "Sure! It's sunny and 75°F.",
    date: "Yesterday",
  },
  {
    id: "4",
    sender: "assistant",
    text: "Is there anything else you'd like to know?",
    date: "Yesterday",
  },
  {
    id: "5",
    sender: "user",
    text: "No, that's all for now. Thank you!",
    date: "Yesterday",
  },
  { id: "6", sender: "assistant", text: "You're welcome!", date: "Yesterday" },
  { id: "7", sender: "user", text: "Goodbye!", date: "Yesterday" },
];

export default function ChatScreen() {
  const { id } = useLocalSearchParams();
  const [input, setInput] = useState("");

  const chatId = typeof id === "string" ? parseInt(id, 10) : NaN;
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={24} />
        <Text style={styles.headerTitle}>{chatList[chatId].name}</Text>
        <Ionicons name="settings-outline" size={24} />
      </View>

      {/* Chat list */}
      <FlatList
        style={styles.chatList}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <>
            {/* 날짜 라벨 */}
            {index === 0 || item.date !== messages[index - 1].date ? (
              <View style={styles.dateLabel}>
                <View style={styles.line} />
                <Text style={styles.dateText}>{item.date}</Text>
                <View style={styles.line} />
              </View>
            ) : null}

            <View
              style={[
                styles.messageContainer,
                item.sender === "user"
                  ? styles.userMessage
                  : styles.assistantMessage,
              ]}
            >
              <Text
                style={[
                  styles.messageText,
                  item.sender === "user" && { color: "white" },
                ]}
              >
                {item.text}
              </Text>
            </View>
          </>
        )}
      />

      {/* Input */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type your message..."
          style={styles.input}
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity>
          <Ionicons name="image-outline" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#fff",
  },
  headerTitle: {
    fontWeight: "600",
    fontSize: 18,
  },
  chatList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  dateLabel: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    justifyContent: "center",
  },
  dateText: {
    marginHorizontal: 8,
    color: "#666",
  },
  line: {
    height: 1,
    flex: 1,
    backgroundColor: "#ccc",
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "80%",
    padding: 10,
    marginVertical: 4,
    borderRadius: 16,
  },
  assistantMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#e0e0e0",
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#5c4efc",
  },
  messageText: {
    fontSize: 15,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  input: {
    flex: 1,
    marginRight: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: "#eee",
  },
});
