interface IProps extends React.ButtonHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Button = ({ label }: IProps) => {
  const classes =
    'w-full text-2xl py-3 px-4 rounded-lg capitalize hover:opacity-70 bg-gray text-white cursor-pointer';
  return (
    <button className={classes} type="button">
      {label}
    </button>
  );
};
