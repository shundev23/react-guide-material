// POINT DOMとイベントリスナ
const h1Element = document.querySelector('h1');
console.dir(h1Element);
console.log(h1Element.textContent);
h1Element.textContent = '変更後のタイトル';

const btnEl = document.querySelector('button');
const helloFn = (e) => {
  console.dir(e.target.textContent);
  console.log('hello')
};
btnEl.addEventListener('click', helloFn)

// e: イベントオブジェクト
const alertMessage = '押すな！と言ったのに、押したね。';
const btnAlert = document.getElementsByClassName('donot_click');
const alertFn = (e) => {
  // イベント元のtextContentが出力
  console.dir(e.target.textContent)
  console.log(alertMessage)
};
// addEventListener: 第一引数：イベント定義、第二引数：関数
btnAlert[0].addEventListener('click', alertFn);