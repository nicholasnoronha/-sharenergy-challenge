export function validatePhone(phone: string) {
  const onlyNumbers = phone.replace(/\D/g, "");

  if (onlyNumbers.length < 8) return { message: "Número inválido" };

  if (onlyNumbers.length <= 8)
    return { message: "DDD e digito 9 não informado" };

  if (onlyNumbers.length <= 9) return { message: "DDD não informado" };

  if (onlyNumbers.length <= 10)
    return { message: "Digito 9 não informado ou número incorreto" };

  return onlyNumbers;
}

export function validateCPF(cpf: string) {
  const onlyNumbers = cpf.replace(/\D/g, "");

  if (onlyNumbers.length !== 11) return { message: "Número de CPF inválido" };

  return onlyNumbers;
}
