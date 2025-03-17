export type TInputKeys =
  | 'firstName'
  | 'lastName'
  | 'title'
  | 'photoUrl'
  | 'address'
  | 'phoneNumber'
  | 'email'
  | 'description';

export interface IInput<K> {
  id: number;
  key: K;
  label?: string;
  placeholder?: string;
  required?: boolean;
}

export const inputsData: Array<IInput<TInputKeys>> = [
  { id: 1, key: 'firstName', placeholder: 'First name', required: true },
  { id: 2, key: 'lastName', placeholder: 'Last name' },
  { id: 3, key: 'title', placeholder: 'Title' },
  { id: 4, key: 'photoUrl', placeholder: 'Photo url' },
  { id: 5, key: 'address', placeholder: 'Address' },
  { id: 6, key: 'phoneNumber', placeholder: 'Phone number' },
  { id: 7, key: 'email', placeholder: 'Email' },
  { id: 8, key: 'description', placeholder: 'Description' },
] as const;
