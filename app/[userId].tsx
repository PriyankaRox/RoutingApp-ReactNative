import { View, Text } from "react-native";
import { Redirect, useLocalSearchParams } from "expo-router";
import { useState, useEffect } from "react";

export default function UserProfile() {
  const local = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>User Profile</Text>
      <Text>
        User ID: {local.userId}
        {/* <Redirect href="/userId" /> */}
      </Text>
    </View>
  );
}
