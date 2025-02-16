import { useCallback } from 'react';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({
  value,
  onChange,
  placeholder,
  required = false,
  ...props
}: IProps) => {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event);
      }
    },
    [onChange]
  );

  const classes = 'w-full text-xl py-2 px-4 rounded-lg bg-primary';

  return (
    <input
      value={value}
      className={classes}
      type="text"
      placeholder={placeholder}
      required={required}
      onChange={handleChange}
      {...props}
    />
  );
};
