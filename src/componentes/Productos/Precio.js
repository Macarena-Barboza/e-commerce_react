
const FormatPrice = (price) => {
      const options = { style: 'currency', currency: 'ARS' };
      const priceFormat = new Intl.NumberFormat('es-AR', options);
      const newPrice = priceFormat.format(price)
      const indexDecimal = newPrice.indexOf(',')
      const final =newPrice.slice(0,indexDecimal)
      return final;
  }

  export default FormatPrice
