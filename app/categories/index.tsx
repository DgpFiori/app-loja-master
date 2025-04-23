import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions, Animated } from 'react-native';
import { data } from '../../data';
import { Link, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useRef } from 'react';
import { Category } from '../../types/category';

const { width } = Dimensions.get('window');
const COLORS = {
  primary: '#27235C',
  secondary: '#FF5733',
  white: '#FFFFFF',
  background: '#F8F8F8',
  text: '#1A1A1A',
  gray: '#8E8E93',
}

export default function Categories() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const router = useRouter();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const renderItem = ({ item, index }: { item: Category; index: number }) => {
    const translateY = fadeAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [50 * (index + 1), 0],
    });

    return (
      <Animated.View
        style={[
          styles.animatedContainer,
          {
            opacity: fadeAnim,
            transform: [{ translateY }],
          },
        ]}
      >
        <TouchableOpacity 
          style={styles.categoryCard}
          onPress={() => router.push(`/categories/${item.id}`)}
        >
          <Image
            source={{ uri: item.cover }}
            style={styles.categoryImage}
          />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.8)']}
            style={styles.overlay}
          >
            <Text style={styles.categoryTitle}>{item.title}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[COLORS.primary, COLORS.secondary]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Nossas Categorias</Text>
      </LinearGradient>

      <FlatList
        data={data.categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    padding: 20,
    paddingTop: 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.white,
    textAlign: 'center',
  },
  listContainer: {
    padding: 15,
  },
  animatedContainer: {
    width: '100%',
    marginBottom: 15,
  },
  categoryCard: {
    height: 180,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: COLORS.white,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    justifyContent: 'flex-end',
    padding: 15,
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.white,
  },
}); 