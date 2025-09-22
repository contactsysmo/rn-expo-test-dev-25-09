import React, { ReactNode, useMemo } from "react";
import { ScrollView, ScrollViewProps, View, ViewStyle } from "react-native";
import {
  KeyboardAvoidingView,
  KeyboardAwareScrollView,
} from "react-native-keyboard-controller";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const SCREEN_PADDING = 16;

interface ScreenWrapperProps {
  children: ReactNode;
  scrollComponent?: boolean;
  containerStyle?: ViewStyle;
  scrollViewStyle?: ViewStyle;
  header?: ReactNode;
  scrollViewProps?: ScrollViewProps;
}

export const ScreenWrapper = React.forwardRef<ScrollView, ScreenWrapperProps>(
  (
    {
      children,
      scrollComponent = true,
      containerStyle,
      scrollViewStyle,
      header,
      scrollViewProps,
    },
    scrollRef
  ) => {
    const insets = useSafeAreaInsets();

    const Content = useMemo(() => {
      if (scrollComponent) {
        return (
          <KeyboardAwareScrollView
            ref={scrollRef}
            style={[{ flex: 1 }, scrollViewStyle]}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
              {
                flexGrow: 1,
                padding: SCREEN_PADDING,
              },
              containerStyle,
            ]}
            keyboardShouldPersistTaps="handled"
            {...scrollViewProps}
          >
            {children}
          </KeyboardAwareScrollView>
        );
      }

      return (
        <KeyboardAvoidingView
          style={[{ flex: 1, padding: SCREEN_PADDING }, containerStyle]}
          behavior="height"
        >
          {children}
        </KeyboardAvoidingView>
      );
    }, [
      scrollComponent,
      containerStyle,
      children,
      scrollRef,
      scrollViewStyle,
      scrollViewProps,
    ]);

    return (
      <View className="flex-1 py-safe">
        {header}
        {Content}
      </View>
    );
  }
);
