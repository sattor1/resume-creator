import { useDispatch, useSelector } from 'react-redux';
import { setExperienceFields } from '@store/indexSlice';
import { RootState } from '@/store';
import { experienceInputsData, TInputKeys } from '@/data/experienceInputs';
import { Button } from './Button';
import { Fieldset } from './Fieldset';
import { Input } from './Input';
import { useState } from 'react';

type TRecordKeys = Record<TInputKeys, string>;

export const ExperienceFields = () => {
  const state = useSelector((state: RootState) => state.index.experienceFields);
  const dispatch = useDispatch();
  const classes = {
    fieldset: 'flex flex-col gap-3 w-full',
    deleteButton: 'mb-5',
  };
  const prevValue = experienceInputsData.reduce((acc, cur) => {
    acc[cur.key] = '';
    return acc;
  }, {} as TRecordKeys);

  const [formData, setFormData] = useState<TRecordKeys>(prevValue);

  const handleAdd = () => {
    dispatch(setExperienceFields({ name: 'sat' }));
  };

  const handleChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: TInputKeys
  ) => {
    setFormData((prev) => ({ ...prev, [key]: event.target.value }));
  };

  return (
    <Fieldset legend="Experience" className={classes.fieldset}>
      {state && (
        <>
          {experienceInputsData.map(({ id, key, ...params }) => (
            <Input
              key={id}
              value={formData[key]}
              onChange={(event) => handleChangeInput(event, key)}
              {...params}
            />
          ))}
          <Button label="Delete" className={classes.deleteButton} />
        </>
      )}
      <Button label="Add" onClick={handleAdd} />
    </Fieldset>
  );
};
