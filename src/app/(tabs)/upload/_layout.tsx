import { Stack } from 'expo-router';

export const unstable_settings = {
  initialRouteName: 'index',
};

export default function Layout() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Stack
        screenOptions={
          {
            // API Reference: https://reactnavigation.org/docs/native-stack-navigator#options
          }
        }>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="previewPost"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="createPost"
          options={{
            title: 'Post',
          }}
        />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </>
  );
}
