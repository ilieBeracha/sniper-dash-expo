import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  const handleSignIn = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    // TODO: Implement actual authentication logic
    console.log("Sign in with:", { email, password });

    // For now, just navigate to tabs (replace with actual auth logic)
    router.replace("/(tabs)");
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      justifyContent: "center",
    },
    title: {
      fontSize: 32,
      fontWeight: "bold",
      color: colors.text,
      textAlign: "center",
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      color: colors.text,
      textAlign: "center",
      opacity: 0.7,
      marginBottom: 48,
    },
    input: {
      backgroundColor: colors.background,
      borderWidth: 1,
      borderColor: colors.text + "20",
      borderRadius: 12,
      paddingHorizontal: 20,
      paddingVertical: 12,
      fontSize: 16,
      color: colors.text,
      marginBottom: 16,
    },
    button: {
      backgroundColor: colors.tint,
      borderRadius: 12,
      paddingVertical: 16,
      alignItems: "center",
      marginBottom: 24,
    },
    buttonText: {
      color: "white",
      fontSize: 18,
      fontWeight: "600",
    },
    linkContainer: {
      flexDirection: "row",
      justifyContent: "center",
      marginBottom: 16,
    },
    linkText: {
      color: colors.text,
      opacity: 0.7,
    },
    link: {
      color: colors.tint,
      fontWeight: "600",
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 24 }}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to your account</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={colors.text + "50"}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={colors.text + "50"}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.linkContainer}>
          <Text style={styles.linkText}>Don't have an account? </Text>
          <Link href="/(auth)/register" style={styles.link}>
            Sign Up
          </Link>
        </View>

        <View style={styles.linkContainer}>
          <Link href="/(auth)/forgot-password" style={styles.link}>
            Forgot Password?
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
