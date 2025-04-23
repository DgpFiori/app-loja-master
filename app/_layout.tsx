import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { Platform, View } from 'react-native';

const COLORS = {
  primary: '#27235C', // Roxo escuro da Sooro
  secondary: '#FF5733', // Laranja da Sooro
  background: '#FFFFFF',
  text: '#333333',
  gray: '#666666',
  yellow: '#FFE600', // Cor de destaque para promoções
}

interface TabBarIconProps {
  color: string;
  size: number;
}

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: COLORS.background,
            borderTopWidth: 1,
            borderTopColor: '#EEEEEE',
            height: Platform.OS === 'ios' ? 90 : 60,
            paddingBottom: Platform.OS === 'ios' ? 30 : 10,
          },
          tabBarActiveTintColor: COLORS.secondary,
          tabBarInactiveTintColor: COLORS.gray,
          tabBarLabelStyle: {
            fontWeight: '600',
            fontSize: 12,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Início',
            tabBarIcon: ({ color, size }: TabBarIconProps) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="categories"
          options={{
            title: 'Categorias',
            tabBarIcon: ({ color, size }: TabBarIconProps) => (
              <MaterialIcons name="category" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            title: 'Sobre',
            tabBarIcon: ({ color, size }: TabBarIconProps) => (
              <MaterialIcons name="person" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
