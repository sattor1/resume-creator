import { EducationFields } from './EducationFields';
import { ExperienceFields } from './ExperienceFields';
import { MainFields } from './MainFields';

export const Form = () => {
  const classes = {
    form: 'bg-gray-light p-5 rounded-2xl max-w-full sm:max-w-[80%] w-full flex flex-col gap-14 justify-start shadow-2xl',
  };

  return (
    <form className={classes.form}>
      <MainFields />
      <ExperienceFields />
      <EducationFields />
    </form>
  );
};
