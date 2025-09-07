import React from "react";
import { ScrollView } from "react-native";
import { useHeaderAnimation } from "@/context/HeaderAnimationContext";
import { useSelector } from "react-redux";
import { selectTheme } from "@/store/slices/themeSlice";

type ScrollWrapperProps = {
  children: React.ReactNode;
};

const ScrollWrapper = ({ children }: ScrollWrapperProps) => {
  const { handleScroll } = useHeaderAnimation();
    const themeColors = useSelector(selectTheme);

  return (
    <ScrollView
      style={{ flex: 1, paddingHorizontal: 10, backgroundColor: themeColors.background }}
      contentContainerStyle={{ paddingBottom: 100 }}
      scrollEventThrottle={16}
      onScroll={handleScroll}
    >
      {children}
    </ScrollView>
  );
};

export default ScrollWrapper;
