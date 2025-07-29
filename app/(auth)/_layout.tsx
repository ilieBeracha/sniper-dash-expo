import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Stack } from "expo-router";

export default function AuthLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? "light"].background,
        },
        headerTintColor: Colors[colorScheme ?? "light"].text,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="login"
        options={{
          title: "Sign In",
          headerShown: false, // Hide header for a cleaner login experience
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          title: "Sign Up",
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen
        name="forgot-password"
        options={{
          title: "Reset Password",
          headerBackTitle: "Back",
        }}
      />
    </Stack>
  );
}
