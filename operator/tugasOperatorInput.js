let number = 0;

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

const handleOnClickButton = () => {
  number = Number(input1.value) + Number(input2.value);
  alert(number);
};
