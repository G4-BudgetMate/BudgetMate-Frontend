import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
             <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
