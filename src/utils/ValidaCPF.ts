class ValidaCPF {
  private cpf: string = '';
  private arrayCpf: string[] = [];

  constructor() { }
  
  isCPF(cpf: string) {
    this.cpf = cpf;
    return this.formatar()
  }

  formatar() {
    this.cpf = this.cpf.replace(/\D+/g, '')
    this.arrayCpf = Array.from(this.cpf)
    this.arrayCpf.splice(9, 2)

    for (let i = 0; i < 2; i++) {
      this.calculoDigito()
    }

    return this.reorganizar()
  }

  calculoDigito() {
    let i = this.arrayCpf.length + 1
    let ac = 0
    let digito

    for (const value of this.arrayCpf) {
      ac += i * Number(value);
      i--;
    }

    digito = 11 - (ac % 11)
    digito > 9 ? digito = '0' : digito;
    this.arrayCpf.push(String(digito))
  }

  reorganizar() {
    const arrayResult = this.arrayCpf.join('')
    return arrayResult=== this.cpf
  }
}

export default new ValidaCPF;