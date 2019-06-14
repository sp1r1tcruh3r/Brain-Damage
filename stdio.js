/*
Реализуйте и экспортируйте функцию extractHeaders, которая извлекает тексты всех заголовков h2 из переданного html и возвращает html в котором каждый из этих текстов обернут в p.

Например такой html в строковом представлении <h2>header1</h2><h2>header2</h2><p>content</p> превратится в такой <p>header1</p><p>header2</p>. Ниже развернутый пример.

import { node, append, make, reduce, toString as htmlToString } from 'hexlet-html-tags';

const html1 = append(make(), node('h2', 'header1'));
const html2 = append(html1, node('h2', 'header2'));
const html3 = append(html2, node('p', 'content'));
// => <h2>header1</h2><h2>header2</h2><p>content</p>

htmlToString(extractHeaders(html3));
// => <p>header1</p><p>header2</p>

Реализуйте и экспортируйте функцию wordsCount, которая считает вхождения слова в определенный тег. Для подсчета слов в тексте одного тега воспользуйтесь вспомогательной функцией wc, которая уже импортирована в модуль html-tags.

import { make, append, node } from 'hexlet-html-tags';

const html1 = append(make(), node('h2', 'header1 lisp'));
const html2 = append(html1, node('p', 'content'));
const html3 = append(html2, node('h2', 'lisp header2 lisp'));
const html4 = append(html3, node('p', 'content lisp'));

wordsCount('h2', 'lisp', html4); // 3

Подсказки

    Подсчет слов в тексте: wc(word, text), где word искомое слово, а text это текст, в котором ведется поиск.

  wc('what', 'what, what, who, what'); // 3
  wc('la', 'loli'); // 0

    При необходимости вы можете самостоятельно импортировать функцию toString из библиотеки hexlet-pairs-data и использовать её для отладки решений. Эта функция возвращает строковое представление списка
    При необходимости вы можете самостоятельно импортировать функцию toString из библиотеки hexlet-html-tags и использовать её для отладки решений. Эта функция возвращает строковое представление html-списка
    Для разрешения противоречий в случае импорта нескольких функций с одинаковыми именами используйте псевдонимы (aliases)
*/
import {
  node, getValue, is, map, filter, reduce,
} from 'hexlet-html-tags';

import { wc } from './utils';

// BEGIN (write your solution here)
export const extractHeaders = (html) => {
	const filteredHeaders = filter(item =>
			is('h2', item), html);
	return map(element =>
			node('p', getValue(element)), filteredHeaders);
};

export const wordsCount = (tagName, word, htmlList) => {
	const filteredTag = filter(item =>
			is(tagName, item), htmlList);
	const values = map(element =>
			getValue(element), filteredTag);
	return reduce((text, acc) => wc(word, text) + acc, 0, values);
};
// END
