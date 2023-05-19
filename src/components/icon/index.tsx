

type Props = {
  width: number;
  fill: string;
  svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

export const IconSvg: React.FC<Props> = ({ width, fill, svg }) => {
  const Icon = svg
  return <Icon width={width} fill={fill} />;
};