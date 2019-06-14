/*
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход упорядоченный список точек, являющихся вершинами многоугольника, вычисляет и возвращает периметр многоугольника.
Примечания

    Список реализован с помощью абстракции из библиотеки hexlet-pairs-data
    Точка реализована с помощью абстракции из библиотеки hexlet-points
    Многоугольник имеет не менее трёх вершин, поэтому, если на вход передан список, содержащий менее трёх точек, то функция должна вернуть null
    Порядок точек, определяющих многоугольник, имеет значение (разный порядок может определять разные (неконгруэнтные) многоугольники). Поэтому при вычислении периметра надо придерживаться порядка, заданного во входном списке точек
    В остальном считаем, что передан корректный многоугольник, то есть дополнительных проверок делать не надо

Примеры

За примерами работы обращайтесь в модуль с тестами: __tests__/calculatePolygonPerimeter.test.js
Подсказки

    При необходимости вы можете самостоятельно импортировать функцию toString из библиотеки hexlet-pairs-data и использовать её для отладки решений. Эта функция возвращает строковое представление списка
    При необходимости вы можете самостоятельно импортировать функцию toString из библиотеки hexlet-points и использовать её для отладки решений. Эта функция возвращает строковое представление точки
    Для разрешения противоречий в случае импорта нескольких функций с одинаковыми именами используйте псевдонимы (aliases)
*/
import { getX, getY } from 'hexlet-points';
import { isEmpty, head, tail } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
const calculatePolygonPerimeter = (poly) => {
  if (isEmpty(poly)) {
    return null;
  }
  if (isEmpty(tail(poly))) {
    return null;
  }
  if (isEmpty(tail(tail(poly)))) {
    return null;
  }
  const lastPoint = head(poly);
  const calcPerimeter = (list, current, acc) => {
    if (isEmpty(tail(list))) {
      const x1 = getX(current);
      const y1 = getY(current);
      const next = lastPoint;
      const x2 = getX(next);
      const y2 = getY(next);
      const newAcc = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) + acc;
      return newAcc;
    } else {
      const x1 = getX(current);
      const y1 = getY(current);
      const next = head(tail(list));
      const x2 = getX(next);
      const y2 = getY(next);
      const newAcc = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) + acc;
      return calcPerimeter(tail(list), next, newAcc);
    }
  };

  return calcPerimeter(poly, head(poly), 0);
};

export default calculatePolygonPerimeter;

// END

/*Найдем длины проекций (X и Y) исходного отрезка на координатные оси. Их вычислим путем нахождения разницы координат точек по отдельной оси: X = X2-X1, Y = Y2-Y1.

Рассчитаем длину отрезка А, для этого найдем квадратный корень:

A = √(X²+Y²) = √ ((X2-X1)²+(Y2-Y1)²).
*/
