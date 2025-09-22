import { cn } from "@/src/theme/cn";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  children: React.ReactNode;
  onPress?: () => void;
  className?: string;
  textClassName?: string;
  icon?: React.ReactNode;
};

export default function AppButton({
  children,
  onPress,
  className,
  textClassName,
  icon,
}: ButtonProps) {
  const pressableClass = cn(
    "flex-row whitespace-nowrap rounded-[8px] text-sm overflow-hidden px-5 py-3 min-h-[56px] gap-3 items-center justify-center bg-black",
    className
  );

  const textClass = cn(
    "pointer-events-none text-white font-bold",
    textClassName
  );

  return (
    <TouchableOpacity
      onPress={onPress}
      className={pressableClass}
      activeOpacity={0.7}
    >
      {icon}
      <Text className={textClass}>{children}</Text>
    </TouchableOpacity>
  );
}
