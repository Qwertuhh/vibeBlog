interface SpaceProps {
  height?: number | string;
  className?: string;
}

const Space = ({ height = 10, className = '' }: SpaceProps) => {
  const spaceClassName = `h-[${height}vh] ${className}`;
  return <div className={spaceClassName} />;
};

export default Space;
