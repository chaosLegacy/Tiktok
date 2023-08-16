import { Image, useColorScheme } from 'react-native';

import {
  AntDesign,
  Entypo,
  FontAwesome,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
} from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';

import Colors from '@/constants/Colors';

const { Navigator } = createMaterialTopTabNavigator();

const MaterialBottomTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator
>(Navigator);
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <MaterialBottomTabs
      tabBarPosition="bottom"
      screenOptions={{
        tabBarIndicatorStyle: { opacity: 0 },
        tabBarLabelStyle: {
          textTransform: 'capitalize',
          fontSize: 10,
          lineHeight: 10,
          margin: 0,
        },
        tabBarContentContainerStyle: { height: 50 },
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].primary.tint,
      }}>
      <MaterialBottomTabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={20} color={color} />
          ),
        }}
      />
      <MaterialBottomTabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => (
            <AntDesign name="search1" size={20} color={color} />
          ),
        }}
      />
      <MaterialBottomTabs.Screen
        name="upload"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <Image
              source={require('assets/images/upload-icon.png')}
              style={{
                width: 45,
                height: 35,
                resizeMode: 'contain',
                alignSelf: 'center',
                marginTop: -4,
              }}
            />
          ),
        }}
      />
      <MaterialBottomTabs.Screen
        name="inbox"
        options={{
          title: 'Inbox',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="message-minus-outline"
              size={20}
              color={color}
            />
          ),
        }}
      />
      <MaterialBottomTabs.Screen
        name="profile"
        options={{
          title: 'Me',
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={20} color={color} />
          ),
        }}
      />
    </MaterialBottomTabs>
  );
}
