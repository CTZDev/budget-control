interface Props {
  children: React.ReactNode;
  className: string;
}

export const BudgetContainer: React.FC<Props> = ({ children, className }) => {
  return (
    <>
      <section className={`${className}`}>{children}</section>
    </>
  );
};
