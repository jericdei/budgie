import { cn } from "@/lib/utils";
import { View as RNView, ViewProps } from "react-native";

export default function View({ className, children, ...props }: ViewProps) {
  return (
    <RNView
      className={cn(
        "text-primary bg-primary-100 dark:text-primary-100 dark:bg-primary-600",
        className
      )}
      {...props}
    >
      {children}
    </RNView>
  );
}
