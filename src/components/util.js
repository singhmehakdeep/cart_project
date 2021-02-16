const formatCurrency = num => "$" + Number(num.toFixed(1)).toLocaleString() + " " ;

export default formatCurrency;