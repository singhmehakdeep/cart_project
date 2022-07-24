const formatCurrency = num => num ? "$" + Number(num.toFixed(1)).toLocaleString() + " " : "";

export default formatCurrency;