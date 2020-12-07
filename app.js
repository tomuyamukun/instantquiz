const quiz = [
  {
    question: '鬼滅の刃における最強のキャラクターは？', 
    answers: [
      '竈門炭治郎',
      '鬼舞辻無惨',
      '継国緑壱',
      '黒死牟'
    ],
    correct: '継国緑壱'
  }, {
    question: 'ポケモンに出てくる人気キャラ電気鼠の名前を選択せよ', 
    answers: [
      'スターミー',
      'ピカチュウ',
      'ミミロップ',
      'カービー'
    ],
    correct: 'ピカチュウ'

  }, {
    question: 'H2の主人公国見比呂の誕生日を選択せよ', 
    answers: [
      '11月6日',
      '1月16日',
      '2月3日',
      '8月18日'
    ],
    correct: '1月16日'
  }
]

const quizLength = quiz.length;
let quizIndex = 0;

//正解数を数える
let score = 0;


// HTMLのオブジェクトを撮ってくる場合＄を入れる
const $button = document.getElementsByTagName('button')
let buttonLength = $button.length;


// 上４行をまとめてwhile文でリファクタリングしている
// textContentで文章を上書きしているquestionは定義した関数
//setupQuizでクイズの問題文、選択肢を定義処理
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();


const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解');
    score++;
  } else {
    window.alert('不正解');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  }else{
    window.alert('正解数' + score + '/' + quizLength + '閉じてどうぞ')
  }

}

let handlerIndex = 0
while (handlerIndex < $button.length) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}

