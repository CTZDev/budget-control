interface Props {
  children: React.ReactNode;
  className: string;
}

export const CostsContainer: React.FC<Props> = ({ children, className }) => {
  return <section className={`${className}`}>{children}</section>;
};
