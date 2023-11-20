export const cnpj = (e: React.FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 18
  let { value } = e.currentTarget
  value = value.replace(/\D/g, '')

  value = value.replace(/(\d{2})(\d)/, '$1.$2')
  value = value.replace(/(\d{3})(\d)/, '$1.$2')
  value = value.replace(/(\d{3})(\d)/, '$1/$2')
  value = value.replace(/(\d{4})(\d)/, '$1-$2')

  e.currentTarget.value = value
  return e
}

export const cpf = (e: React.FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 14;
  let { value } = e.currentTarget;
  value = value.replace(/\D/g, '');

  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d)/, '$1-$2');

  e.currentTarget.value = value;
  return e;
};

export const phone = (e: React.FormEvent<HTMLInputElement>) => {
  e.currentTarget.maxLength = 15
  let { value } = e.currentTarget
  value = value.replace(/\D/g, '')

  value = value.replace(/(\d{2})(\d)/, '($1) $2')
  value = value.replace(/(\d{5})(\d)/, '$1-$2')
  value = value.replace(/\s/g, '')

  e.currentTarget.value = value
  return e
}
