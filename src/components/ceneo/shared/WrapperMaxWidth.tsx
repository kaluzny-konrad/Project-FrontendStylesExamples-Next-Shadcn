import { cn } from '@/lib/utils';
import { ReactNode } from 'react'

type Props = {
    className?: string;
    children?: ReactNode;
  };
  
  export default function WrapperMaxWidth({ className, children }: Props) {
    return (
      <div
        className={cn(
          "mx-auto lg:max-w-[1300px] w-full",
          className
        )}
      >
        {children}
      </div>
    );
  }
  