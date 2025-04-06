import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      className="
        flex-1 
        justify-center 
        items-center
      "
    >
      <Text className=" text-primary font-extrablod text-5xl">Welcomew fd</Text>
       <Link href="/onboarding">onboarding</Link>
       <Link href="/movie/avangers">Avenger Movie</Link>
    </View>
  );
}
