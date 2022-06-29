function CalculateNums(element) {
  const firstNum = parseFloat(document.querySelector('#firstNum').value);
  const secondNum = parseFloat(document.querySelector('#secondNum').value);
  const operation = element.value;
  const answerDoc = document.querySelector('#answer');

  let answer = 0;

  switch (operation) {
    case '+':
      answer = firstNum + secondNum;
      break;
    case '-':
      answer = firstNum - secondNum;
      break;
    case '*':
      answer = firstNum * secondNum;
      break;
    case '/':
      answer = firstNum / secondNum;
      break;
  }

  return (answerDoc.innerHTML = `
    The answer is: ${answer}
  `);
}
