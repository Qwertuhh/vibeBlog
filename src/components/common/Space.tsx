interface SpaceProps {
  height?: number | string;
  className?: string;
}

const Space = ({ height = 10, className = '' }: SpaceProps) => {
  return <div className={`h-[${height}vh] ${className}`} />;
};

export default Space;
