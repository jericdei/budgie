import { cn } from "@/lib/utils";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {}

export default function Button({ children, onPress, ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      className={cn("rounded-lg px-4 py-2 bg-primary dark:bg-primary-100")}
      onPress={onPress}
      activeOpacity={0.8}
      {...props}
    >
      <Text className="text-primary-100 dark:text-primary text-lg">
        {children}
      </Text>
    </TouchableOpacity>
  );
}
