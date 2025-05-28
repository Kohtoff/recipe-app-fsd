import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "shared/libs";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
    showScale?: boolean;
  }
>(({ className, showScale, ...props }, ref) => {
    const [value, setValue] = React.useState(0);
    const avgScale = props.min && props.max ? (props?.min + props?.max) / 2 : null
  return (
    <>
      {(showScale && props.min && props.max) && (
        <div className="flex w-full justify-between text-typography-secondary">
          <h3 className={cn(value >= props.min && 'text-primary')}>
            {"<"}
            {props.min}
          </h3>
          <h3 className={cn(value >= (avgScale as number) && 'text-primary')}>{avgScale}</h3>
          <h3 className={cn(value >= props.max && 'text-primary')}>
            {">"}
            {props.max}
          </h3>
        </div>
      )}
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          className
        )}
        onValueChange={([value]) => setValue(value)}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-surface">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block h-6 w-6 rounded-full border border-primary/50 bg-primary bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
      </SliderPrimitive.Root>
    </>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
