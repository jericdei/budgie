import { cn } from "@/lib/utils";
import { Text as RNText, TextProps } from "react-native";

export default function Text({ className, children, ...props }: TextProps) {
  return (
    <RNText
      className={cn("text-primary dark:text-primary-100", className)}
      {...props}
    >
      {children}
    </RNText>
  );
}
