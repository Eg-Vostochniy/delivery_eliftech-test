import { Input } from '../Input'

export const ShoppingCartInputItem = ({
  name,
  inptType,
  inptName,
  inptPlaceholder,
}) => {
  return (
    <label>
      <span>{name}</span>
      <Input type={inptType} name={inptName} placeholder={inptPlaceholder} />
    </label>
  )
}
