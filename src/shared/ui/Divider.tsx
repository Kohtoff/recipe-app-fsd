import { cn } from "shared/libs/classnames";
const Divider = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("-mx-6 h-2 w-screen bg-surface", props.className)}></div>
  );
};

export default Divider;
