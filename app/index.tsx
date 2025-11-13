import { Text, View, Button } from "react-native";
import { useRouter } from "expo-router"; // 1. Import the router hook

export default function Index() {
  // 2. Get an instance of the router
  const router = useRouter();

  // 3. Create a function to handle the press
  const goToHome = () => {
    // 4. Use router.push() to navigate to the correct path
    router.push("/home");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-red-500">
        Mag Creat Patag Log in form? bahalag dili connected DB for validation, pala ang sa UI?
      </Text>
      
      {/* 5. Add a 'title' prop and the 'onPress' handler */}
      <Button title="Go to Home" onPress={goToHome} />
    </View>
  );
}