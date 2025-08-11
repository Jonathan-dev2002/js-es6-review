//default parameter
getDataCustomer = (customerName, customerAdd = "pattaya") => {
  const detail = `ชื่อลูกค้า : ${customerName}
    ที่อยู่ : ${customerAdd}`;
  return detail;
};
console.log(getDataCustomer("jonathan"));

getDataCustomer1 = (cutomerName1, customerAdd1) => {
  if (!customerAdd1) {
    customerAdd1 = "bk";
  }
  const detail1 = `name_customer : ${cutomerName1}
         add : ${customerAdd1}`;
  return detail1;
};
console.log(getDataCustomer1("jonathan"));
