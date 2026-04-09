// screens/CommentsScreen.js
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Dữ liệu mẫu – mô phỏng y hệt ảnh
const comments = [
  {
    id: '1',
    user: 'martini_rond',
    text: 'How neatly I write the date in my book',
    time: '22h',
    likes: '57',
    avatar: 'https://i.pravatar.cc/100?img=1',
    replies: 4,
  },
  {
    id: '2',
    user: 'maxjacobson',
    text: 'Now that’s a skill very talented',
    time: '22h',
    likes: '89',
    avatar: 'https://i.pravatar.cc/100?img=2',
    replies: 1,
  },
  {
    id: '3',
    user: 'zackjohn',
    text: 'Doing this would make me so anxious',
    time: '22h',
    likes: '124',
    avatar: 'https://i.pravatar.cc/100?img=3',
    replies: 9,
  },
  {
    id: '4',
    user: 'kiero_d',
    text: 'Use that on r air forces to whiten them',
    time: '21h',
    likes: '47',
    avatar: 'https://i.pravatar.cc/100?img=4',
    replies: 4,
  },
  {
    id: '5',
    user: 'mis_potter',
    text: 'Sjpuld’ve used that on his forces 😂😂',
    time: '13h',
    likes: '234',
    avatar: 'https://i.pravatar.cc/100?img=5',
    replies: 4,
  },
  {
    id: '6',
    user: 'karennne',
    text: 'No pressure',
    time: '22h',
    likes: '18',
    avatar: 'https://i.pravatar.cc/100?img=6',
    replies: 2,
  },
  {
    id: '7',
    user: 'joshua_l',
    text: 'My OCD couldn’t do it',
    time: '15h',
    likes: '32',
    avatar: 'https://i.pravatar.cc/100?img=7',
    replies: 2,
  },
];

export default function CommentsScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header – giống ảnh: số lượng comment + nút đóng */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>579 comments</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeBtn}>
          <Ionicons name="close" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Danh sách bình luận */}
      <FlatList
        data={comments}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.commentRow}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={styles.commentContent}>
              <View style={styles.userRow}>
                <Text style={styles.username}>{item.user}</Text>
                <Text style={styles.timeText}> {item.time}</Text>
              </View>
              <Text style={styles.commentText}>{item.text}</Text>
              {/* Dòng "View replies (X)" */}
              <TouchableOpacity style={styles.repliesBtn}>
                <Text style={styles.replyText}>View replies ({item.replies})</Text>
              </TouchableOpacity>
            </View>
            {/* Nút like */}
            <TouchableOpacity style={styles.likeBox}>
              <Ionicons name="heart-outline" size={20} color="#888" />
              <Text style={styles.likeText}>{item.likes}</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Ô nhập bình luận – giống Add comment... */}
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.inputBox}>
          <Image source={{ uri: 'https://i.pravatar.cc/100?img=33' }} style={styles.myAvatar} />
          <TextInput
            style={styles.input}
            placeholder="Add comment..."
            placeholderTextColor="#888"
          />
          <TouchableOpacity>
            <Ionicons name="send" size={24} color="#FE2C55" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: { fontSize: 16, fontWeight: '600', color: '#000' },
  closeBtn: { padding: 4 },

  commentRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'flex-start',
  },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 12 },
  commentContent: { flex: 1 },
  userRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 },
  username: { fontSize: 14, fontWeight: '700', color: '#000' },
  timeText: { fontSize: 13, color: '#888' },
  commentText: { fontSize: 14, color: '#000', lineHeight: 20, marginBottom: 6 },
  repliesBtn: { marginTop: 4 },
  replyText: { fontSize: 13, color: '#888', fontWeight: '500' },

  likeBox: { alignItems: 'center', marginLeft: 12, minWidth: 40 },
  likeText: { color: '#888', fontSize: 12, marginTop: 4 },

  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 0.5,
    borderTopColor: '#E0E0E0',
    backgroundColor: '#FFF',
  },
  myAvatar: { width: 36, height: 36, borderRadius: 18, marginRight: 12 },
  input: {
    flex: 1,
    fontSize: 15,
    paddingVertical: 8,
    paddingHorizontal: 0,
    color: '#000',
  },
});