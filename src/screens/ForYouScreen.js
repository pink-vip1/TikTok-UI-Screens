import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useEffect } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');
const ITEM_HEIGHT = height - 70;

const videoData = [
  {
    id: '1',
    file: require('../assets/videos/vd1.mp4'),
    username: '@giahong_dev',
    caption: 'Video description in main video\n#giahong dev #giamonts',
    music: 'Original Sound - Dev Life',
    likes: '1.2M',
    comments: '12.4K',
    bookmarks: '89K',
    shares: 'Share',
    avatar: 'https://i.pravatar.cc/100?img=33'
  },
  {
    id: '2',
    file: require('../assets/videos/vd2.mp4'),
    username: '@reactnative_master',
    caption: 'Cuộn xuống để xem độ mượt nhé 🔥\n#tiktokclone #reactnative',
    music: 'Trending Song 2026',
    likes: '800K',
    comments: '5K',
    bookmarks: '12K',
    shares: 'Share',
    avatar: 'https://i.pravatar.cc/100?img=11'
  }
];

const VideoItem = ({ item }) => {
  const navigation = useNavigation();

  const player = useVideoPlayer(item.file, (player) => {
    player.loop = false;
    player.play();
  });

  useEffect(() => {
    const onPlaybackStatusUpdate = (status) => {
      if (status.didJustFinish) {
        player.replay();
      }
    };
    player.addListener('playbackStatusUpdate', onPlaybackStatusUpdate);
    return () => {
      player.removeListener('playbackStatusUpdate', onPlaybackStatusUpdate);
    };
  }, [player]);

  return (
    <View style={styles.videoContainer}>
      <VideoView
        style={styles.video}
        player={player}
        fullscreenOptions={{ allowsFullscreen: false }}  // <-- THAY THẾ
        allowsPictureInPicture={false}
        nativeControls={false}
        contentFit="cover"
      />
      <View style={styles.bottomOverlay} />
      <View style={styles.rightSide}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: item.avatar }} style={styles.avatar} />
          <View style={styles.plusIcon}>
            <Ionicons name="add" size={14} color="#FFF" />
          </View>
        </View>
        <TouchableOpacity style={styles.actionItem}>
          <Ionicons name="heart" size={38} color="#FE2C55" />
          <Text style={styles.actionText}>{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionItem}
          onPress={() => navigation.navigate('Comments')}
        >
          <Ionicons name="chatbubble-ellipses" size={36} color="#FFF" style={styles.iconShadow} />
          <Text style={styles.actionText}>{item.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem}>
          <Ionicons name="bookmark" size={32} color="#FFF" style={styles.iconShadow} />
          <Text style={styles.actionText}>{item.bookmarks}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem}>
          <Ionicons name="arrow-redo" size={36} color="#FFF" style={styles.iconShadow} />
          <Text style={styles.actionText}>{item.shares}</Text>
        </TouchableOpacity>
        <View style={styles.musicDisc}>
          <View style={styles.innerDisc} />
        </View>
      </View>
      <View style={styles.bottomInfo}>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.caption}>
          {item.caption}
          <Text style={styles.seeMore}> ... See more</Text>
        </Text>
        <View style={styles.musicRow}>
          <Ionicons name="musical-note" size={16} color="#FFF" style={styles.iconShadow} />
          <Text style={styles.musicText}>{item.music}</Text>
        </View>
      </View>
    </View>
  );
};

export default function ForYouScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={videoData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <VideoItem item={item} />}
        showsVerticalScrollIndicator={false}
        pagingEnabled={true}
        snapToInterval={ITEM_HEIGHT}
        snapToAlignment="start"
        decelerationRate="fast"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  videoContainer: { width: width, height: ITEM_HEIGHT, justifyContent: 'center' },
  video: { position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 },
  bottomOverlay: { position: 'absolute', bottom: 0, width: '100%', height: '40%', backgroundColor: 'rgba(0,0,0,0.2)' },
  rightSide: { position: 'absolute', right: 12, bottom: 20, alignItems: 'center', zIndex: 10 },
  avatarContainer: { marginBottom: 20, alignItems: 'center' },
  avatar: { width: 48, height: 48, borderRadius: 24, borderWidth: 1.5, borderColor: '#FFF' },
  plusIcon: { position: 'absolute', bottom: -8, backgroundColor: '#FE2C55', width: 20, height: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  actionItem: { alignItems: 'center', marginBottom: 15 },
  actionText: { color: '#FFF', fontSize: 12, fontWeight: '600', marginTop: 4, textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 2 },
  iconShadow: { textShadowColor: 'rgba(0, 0, 0, 0.4)', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 5 },
  musicDisc: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#222', justifyContent: 'center', alignItems: 'center', marginTop: 15, borderWidth: 8, borderColor: '#333' },
  innerDisc: { width: 14, height: 14, borderRadius: 7, backgroundColor: '#111' },
  bottomInfo: { position: 'absolute', bottom: 20, left: 15, width: '75%', zIndex: 10 },
  username: { color: '#FFF', fontSize: 16, fontWeight: '700', marginBottom: 8, textShadowColor: 'rgba(0, 0, 0, 0.6)', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 3 },
  caption: { color: '#FFF', fontSize: 14, marginBottom: 10, lineHeight: 20, textShadowColor: 'rgba(0, 0, 0, 0.6)', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 3 },
  seeMore: { fontWeight: 'bold', color: '#FFF' },
  musicRow: { flexDirection: 'row', alignItems: 'center' },
  musicText: { color: '#FFF', fontSize: 14, marginLeft: 8, textShadowColor: 'rgba(0, 0, 0, 0.6)', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 3 },
});