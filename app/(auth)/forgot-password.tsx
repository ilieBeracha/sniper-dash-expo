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

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  const handleResetPassword = () => {
    if (!email) {
      Alert.alert("Error", "Please enter your email address");
      return;
    }

    // TODO: Implement actual password reset logic
    console.log("Reset password for:", email);

    Alert.alert(
      "Reset Link Sent",
      "We've sent a password reset link to your email address.",
      [
        {
          text: "OK",
          onPress: () => router.back(),
        },
      ]
    );
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
      lineHeight: 22,
    },
    input: {
      backgroundColor: colors.background,
      borderWidth: 1,
      borderColor: colors.text + "20",
      borderRadius: 12,
      paddingHorizontal: 16,
      paddingVertical: 12,
      fontSize: 16,
      color: colors.text,
      marginBottom: 24,
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
        <Text style={styles.title}>Reset Password</Text>
        <Text style={styles.subtitle}>
          Enter your email address and we'll send you a link to reset your
          password.
        </Text>

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

        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Send Reset Link</Text>
        </TouchableOpacity>

        <View style={styles.linkContainer}>
          <Text style={styles.linkText}>Remember your password? </Text>
          <Link href="/(auth)/login" style={styles.link}>
            Sign In
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
