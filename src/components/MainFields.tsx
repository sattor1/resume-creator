import { Fieldset } from './Fieldset';
import { inputsData, TInputKeys } from '../../data/mainInputs';
import { Input } from './Input';
import { useState } from 'react';

type TRecordKeys = Record<TInputKeys, string>;

export const MainFields = () => {
  const classes = {
    fieldset: 'flex flex-col gap-3 w-full',
  };
  const prevValue = inputsData.reduce((acc, cur) => {
    acc[cur.key] = '';
    return acc;
  }, {} as TRecordKeys);

  const [formData, setFormData] = useState<TRecordKeys>(prevValue);
  const handleChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: TInputKeys
  ) => {
    setFormData((prev) => ({ ...prev, [key]: event.target.value }));
  };

  return (
    <Fieldset legend="Personal Information" className={classes.fieldset}>
      {inputsData.map(({ id, key, ...params }) => (
        <Input
          key={id}
          value={formData[key]}
          onChange={(event) => handleChangeInput(event, key)}
          {...params}
        />
      ))}
    </Fieldset>
  );
};
