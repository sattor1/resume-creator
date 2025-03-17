import type { IInput } from './mainInputs';

export type TInputKeys = 'position' | 'company' | 'city' | 'from' | 'to';

export const experienceInputsData: Array<IInput<TInputKeys>> = [
  { id: 1, key: 'position', placeholder: 'Position', required: true },
  { id: 2, key: 'company', placeholder: 'Company' },
  { id: 3, key: 'city', placeholder: 'City' },
  { id: 4, key: 'from', placeholder: 'From (year)' },
  { id: 5, key: 'to', placeholder: 'To (year)' },
] as const;
