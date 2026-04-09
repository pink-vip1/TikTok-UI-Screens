import { ResizeMode, Video } from 'expo-av';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

// 1. CẬP NHẬT DỮ LIỆU: Trỏ đúng đường dẫn tới vd1.mp4 và vd2.mp4
const mediaData = [
  { 
    id: '1', 
    type: 'video', 
    file: require('../assets/videos/vd1.mp4') // Video 1
  },
  { 
    id: '2', 
    type: 'video', 
    file: require('../assets/videos/vd2.mp4') // Video 2
  },
  { 
    id: '3', 
    type: 'image', 
    file: require('../assets/anh1.png') // Các ảnh cũ của bạn
  },
  { 
    id: '4', 
    type: 'image', 
    file: require('../assets/anh2.png') 
  },
  { 
    id: '5', 
    type: 'image', 
    file: require('../assets/anh3.png') 
  },
  { 
    id: '6', 
    type: 'image', 
    file: require('../assets/anh4.png') 
  },
];

export default function ForYouScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {item.type === 'video' ? (
        // Hiển thị Video
        <Video
          style={styles.media}
          source={item.file} // Dùng item.file thay vì { uri: ... }
          useNativeControls={false} // Ẩn thanh điều khiển mặc định để giống TikTok
          resizeMode={ResizeMode.COVER}
          shouldPlay // Tự động phát
          isLooping  // Lặp lại
        />
      ) : (
        // Hiển thị Ảnh
        <Image source={item.file} style={styles.media} resizeMode="cover" />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topPadding} />
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.redButton}>
          <Text style={styles.redButtonText}>Danh sách người yêu cũ</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={mediaData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  topPadding: { height: 100 }, 
  buttonContainer: { padding: 20, alignItems: 'center' },
  redButton: { backgroundColor: '#FE2C55', paddingVertical: 12, width: '100%', borderRadius: 8, alignItems: 'center' },
  redButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  listContainer: { paddingHorizontal: 15 },
  row: { justifyContent: 'space-between', marginBottom: 15 },
  card: { width: (width - 45) / 2, height: 220, borderRadius: 12, overflow: 'hidden', backgroundColor: '#F2F2F2' },
  media: { width: '100%', height: '100%' },
});