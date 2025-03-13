import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <Button title="Go to details" onPress={() => router.push("/details")} />
      <br />
      <Text>Profile Screen</Text>
      <Button
        title="Go to settings"
        onPress={() => router.push("/profile/settings")}
      />
      <br />
      <Button
        title="Go to activity"
        onPress={() => router.push("profile/activity")}
      />
      <br />
      <Button title="Go to user 123" onPress={() => router.push("/123")} />
      <br />
      <Button title="Go to user 456" onPress={() => router.push("/456")} />
    </View>
  );
}
