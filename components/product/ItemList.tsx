import React from "react";
import { ScrollView } from "react-native";
import { useHeaderAnimation } from "@/context/HeaderAnimationContext";

type ScrollWrapperProps = {
  children: React.ReactNode;
};

const ScrollWrapper = ({ children }: ScrollWrapperProps) => {
  const { handleScroll } = useHeaderAnimation();

  return (
    <ScrollView
      style={{ flex: 1, paddingHorizontal: 10 }}
      contentContainerStyle={{ paddingBottom: 100 }}
      scrollEventThrottle={16}
      onScroll={handleScroll}
    >
      {children}
    </ScrollView>
  );
};

export default ScrollWrapper;
