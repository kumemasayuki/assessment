'use strict';
const answers = [
    '{userName}さんのいいところは声です。{userName}さんの特徴的な声は皆を惹きつけ、心に残ります。',
    '{userName}さんのいいところは眼差しです。{userName}さんに見つめられた人は、気になって仕方ないでしょう。',
    '{userName}さんのいいところは情熱です。{userName}さんの情熱に周りの人は感化されます。',
    '{userName}さんのいいところは厳しさです。{userName}さんの厳しさが物事をいつも成功に導きます。',
    '{userName}さんのいいところは知識です。博学な{userName}さんを多くの人が頼りにしています。',
    '{userName}さんのいいところはユニークさです。{userName}さんだけのその特徴が、皆を楽しくさせます。',
    '{userName}さんのいいところは用心深さです。{userName}さんの洞察に、多くの人が助けられます。',
    '{userName}さんのいいところは見た目です。内側から溢れ出る{userName}さんの良さに、皆が気を惹かれます。',
    '{userName}さんのいいところは思いやりです。{userName}さんに気をかけてもらった多くの人が感謝しています。',
    '{userName}さんのいいところは感受性です。{userName}さんが感じたことに皆が共感し、分かり合うことが出来ます。',
    '{userName}さんのいいところは節度です。強引過ぎない{userName}さんの考えに皆が感謝しています。',
    '{userName}さんのいいところは好奇心です。新しいことに向かっていく{userName}さんの心構えが多くの人に魅力的に映ります。',
    '{userName}さんのいいところは気配りです。{userName}さんの配慮が多くの人を救っています。',
    '{userName}さんのいいところはその全てです。ありのままの{userName}さん自身が良いところです。',
    '{userName}さんのいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}さんが皆から評価されています。',
];

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザーの名前
 * @return {string} 診断結果
 */
function assessment(userName) {
    // 全文字のコード番号を取得してそれを足し合わせる。
    let sumOfCharCode = 0;
    for (let i=0; i < userName.length; i++) {
        sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
    }

    // 文字のコード番号の合計を回答の数で割って添え字の数値を求める
    const index = sumOfCharCode % answers.length;

    let result = answers[index];

    result = result.replace(/\{userName\}/g, userName);

    return result;
}

console.assert(
    assessment('太郎') === 
        '太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。',
        '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
);
console.assert(
    assessment('太郎') === assessment('太郎'),
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
);
'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

/**
 * 指定した子要素を全て削除する。
 * @param {HTMLElement} element HTML の要素 
 */ 
function removeAllChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
assessmentButton.onclick = () => {
    const userName = userNameInput.value;
    if (userName.length === 0) {
        // 名前が空白の時は　処理を終了する。
        return;
    }
    // TODO　診断結果表示エリアの作成
    // while (resultDivided.firstChild) { // 子要素がある限り削除
    removeAllChildren(resultDivided);
    
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivided.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);
    
    // TODO　ツイートエリアの作成
};

