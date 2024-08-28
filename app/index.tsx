import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import View from "@/components/view";
import { router } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <View>
        <Text className="text-3xl">Welcome to</Text>
        <Text className="font-black text-5xl mt-4">Budgie!</Text>
      </View>

      <View className="mt-8">
        <Button onPress={() => router.push("/login")}>
          <Text>Get Started</Text>
        </Button>
      </View>
    </View>
  );
}
