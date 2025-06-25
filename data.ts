export type ChatItem = {
  id: string;
  name: string;
  message: string;
  timestamp: string;
  avatar: string; // 이미지 경로 또는 URL
};

export const chatList: ChatItem[] = [
  {
    id: "1",
    name: "Dr. Lillian Hart",
    message: "What’s on your mind today?",
    timestamp: "10:30 AM",
    avatar: "https://example.com/avatar1.jpg",
  },
  {
    id: "2",
    name: "Prof. Omar Vance",
    message: "Please clarify your query.",
    timestamp: "Yesterday",
    avatar: "https://example.com/avatar2.jpg",
  },
  {
    id: "3",
    name: "Ms. Yara Lang",
    message: "Your request has been processed.",
    timestamp: "2 days ago",
    avatar: "https://example.com/avatar3.jpg",
  },
  {
    id: "4",
    name: "Mr. Felix Stone",
    message: "Here are your results.",
    timestamp: "Last week",
    avatar: "https://example.com/avatar4.jpg",
  },
  {
    id: "5",
    name: "Dr. Zara Moon",
    message: "What would you like to explore?",
    timestamp: "Last month",
    avatar: "https://example.com/avatar5.jpg",
  },
  {
    id: "6",
    name: "Ms. Nora Bell",
    message: "Your session has ended.",
    timestamp: "2 months ago",
    avatar: "https://example.com/avatar6.jpg",
  },
  {
    id: "7",
    name: "Ms. Nora Bell",
    message: "Your session has ended.",
    timestamp: "2 months ago",
    avatar: "https://example.com/avatar6.jpg",
  },
  {
    id: "8",
    name: "Ms. Nora Bell",
    message: "Your session has ended.",
    timestamp: "2 months ago",
    avatar: "https://example.com/avatar6.jpg",
  },
  {
    id: "9",
    name: "Ms. Nora Bell",
    message: "Your session has ended.",
    timestamp: "2 months ago",
    avatar: "https://example.com/avatar6.jpg",
  },
  {
    id: "10",
    name: "Ms. Nora Bell",
    message: "Your session has ended.",
    timestamp: "2 months ago",
    avatar: "https://example.com/avatar6.jpg",
  },
];
