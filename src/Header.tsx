interface Props {
  title: string;
}

export const Header: React.FC<Props> = ({ title }) => {
  return (
    <header className="p-8 uppercase">
      <h1 className="text-3xl font-bold">{title}</h1>
    </header>
  );
};
