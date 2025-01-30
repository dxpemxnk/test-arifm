function findExpression(target) {

  const digits = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]; // Цифры от 9 до 0

  // Рекурсивная функция для генерации выражений
  function generateExpressions(
    index,
    currentExpression,
    currentValue,
    lastNumber,
    lastOperator
  ) {
    // Если дошли до конца массива цифр
    if (index === digits.length) {
      // Если текущее значение равно целевому, выводим выражение
      if (currentValue === target) {
        console.log(currentExpression + "=" + target);
      }
      return;
    }

    const currentDigit = digits[index]; // Текущая цифра

    // Вариант 1: Добавляем текущую цифру к последнему числу (без оператора)
    const newNumber = lastNumber * 10 + currentDigit; // Новое число
    let newValue;
    if (lastOperator === "+") {
      newValue = currentValue - lastNumber + newNumber; // Пересчитываем значение
    } else if (lastOperator === "-") {
      newValue = currentValue + lastNumber - newNumber; // Пересчитываем значение
    } else {
      newValue = newNumber; // Если это первое число
    }

    // Рекурсивно вызываем функцию для следующей цифры
    generateExpressions(
      index + 1,
      currentExpression + currentDigit, // Добавляем цифру к выражению
      newValue, // Новое значение
      newNumber, // Новое последнее число
      lastOperator // Оператор не меняется
    );

    // Вариант 2: Добавляем оператор '+' и текущую цифру
    generateExpressions(
      index + 1,
      currentExpression + "+" + currentDigit, // Добавляем '+' и цифру
      currentValue + currentDigit, // Новое значение
      currentDigit, // Новое последнее число
      "+" // Новый оператор
    );

    // Вариант 3: Добавляем оператор '-' и текущую цифру
    generateExpressions(
      index + 1,
      currentExpression + "-" + currentDigit, // Добавляем '-' и цифру
      currentValue - currentDigit, // Новое значение
      currentDigit, // Новое последнее число
      "-" // Новый оператор
    );
  }

  // Начинаем с первой цифры (9)
  generateExpressions(1, "9", 9, 9, "");
}

// Запускаем поиск выражения, равного 200 или любое другое
findExpression(200);
