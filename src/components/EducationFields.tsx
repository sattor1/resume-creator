import { useState } from 'react';
import { Button } from './Button';
import { Fieldset } from './Fieldset';

export const EducationFields = () => {
  const [showFields, setShowFields] = useState(false);
  const handleAdd = () => {
    setShowFields(true);
  };
  return (
    <Fieldset legend="Education">
      {showFields && <Button label="Delete" />}
      <Button label="Add" onClick={handleAdd} />
    </Fieldset>
  );
};
