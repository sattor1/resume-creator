import { ReactNode } from 'react';

interface IProps {
  legend: string;
  children?: ReactNode;
  className?: string;
}

export const Fieldset = ({ legend, children, className }: IProps) => {
  const classes = {
    fieldset: className,
    legend: 'heading',
  };

  return (
    <fieldset className={classes.fieldset}>
      <legend className={classes.legend}>{legend}</legend>

      {children}
    </fieldset>
  );
};
