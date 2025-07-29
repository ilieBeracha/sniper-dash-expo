import { Redirect } from "expo-router";

export default function AppIndex() {
  // TODO: Add logic to check if user is authenticated
  // If authenticated, redirect to /(tabs)
  // If not authenticated, redirect to /(auth)

  return <Redirect href="/(auth)" />;
}
