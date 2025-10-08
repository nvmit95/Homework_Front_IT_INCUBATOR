export type UserType = {
  id: number;
  name: string;
  age: number;
  address: AddressType

};
type AddressType = {
  street: string;
  city: string;
}
