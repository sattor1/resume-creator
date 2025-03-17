interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button = ({ label, className, ...props }: IProps) => {
  const classes = `w-full text-2xl py-3 px-4 rounded-lg capitalize hover:opacity-70 bg-gray text-white cursor-pointer ${className}`;
  return (
    <button className={classes} type="button" {...props}>
      {label}
    </button>
  );
};
