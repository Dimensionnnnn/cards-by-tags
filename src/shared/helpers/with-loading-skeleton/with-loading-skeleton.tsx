import { ComponentType, FC } from "react";
import { Skeleton } from "../../ui/skeleton/skeleton";
import { getClasses } from "./styles/get-classes";

export interface WithLoadingSkeletonProps {
  className?: string;
  isLoading?: boolean;
  children?: React.ReactNode;
}

export function withLoadingSkeleton<T>(
  Component: ComponentType<T>
): FC<T & WithLoadingSkeletonProps> {
  const LoadingSkeletonComponent: FC<T & WithLoadingSkeletonProps> = ({
    className,
    isLoading,
    children,
    ...props
  }: T & WithLoadingSkeletonProps) => {
    const { cnRoot } = getClasses({ className });

    return (
      <div className={cnRoot}>
        {isLoading ? (
          <Skeleton />
        ) : (
          <Component {...(props as T)}>{children}</Component>
        )}
      </div>
    );
  };
  LoadingSkeletonComponent.displayName = `WithLoadingSkeleton(${
    Component.displayName || Component.name || "Component"
  })`;
  return LoadingSkeletonComponent;
}
