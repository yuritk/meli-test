export default class Price {
  constructor(data) {
    this.currency = data.currency;
    this.amount = data.amount;
    this.decimals = data.decimals;
  }

  toReadable() {
    const {
      amount,
      currency,
      decimals,
    } = this;

    const value = Number(amount).toLocaleString('pt-BR')
    return `$ ${value}`;

    // It comes with US$ before the amount, e.g. US$ 1.900
    // Tried others locales like es-ar and en-us
    // return Number(amount).toLocaleString("pt-BR", {
    //   style: "currency",
    //   currency: currency,
    //   minimumFractionDigits: decimals
    // });
  }
}
