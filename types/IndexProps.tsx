import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";

export type IndexProps = {
    onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  };