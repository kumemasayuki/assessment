'use strict';
const answers = [
    '{userName}のいいところは声です。{user-Name}の特徴的な声は皆を惹きつけ、心に残ります。',
    '{userName}のいいところは眼差しです。{user-Name}に見つめられた人は、気になって仕方ないでしょう。',
    '{userName}のいいところは情熱です。{user-Name}の情熱に周りの人は感化されます。',
    '{userName}のいいところは厳しさです。{user-Name}の厳しさが物事をいつも成功に導きます。',
    '{userName}のいいところは知識です。博学な{user-Name}を多くの人が頼りにしています。',
    '{userName}のいいところはユニークさです。{user-Name}だけのその特徴が、皆を楽しくさせます。',
    '{userName}のいいところは用心深さです。{user-Name}の洞察に、多くの人が助けられます。',
    '{userName}のいいところは見た目です。内側から溢れ出る{user-Name}の良さに、皆が気を惹かれます。',
    '{userName}のいいところは決断力です。{user-Name}がする決断にいつも助けられる人がいます。',
    '{userName}のいいところは思いやりです。{user-Name}に気をかけてもらった多くの人が感謝しています。',
    '{userName}のいいところは感受性です。{user-Name}が感じたことに皆が共感し、分かり合うことが出来ます。',
    '{userName}のいいところは節度です。強引過ぎない{user-Name}の考えに皆が感謝しています。',
    '{userName}のいいところは好奇心です。新しいことに向かっていく{user-Name}の心構えが多くの人に魅力的に映ります。',
    '{userName}のいいところは気配りです。{user-Name}の配慮が多くの人を救っています。',
    '{userName}のいいところはその全てです。ありのままの{user-Name}自身が良いところです。',
    '{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{user-Name}が皆から評価されています。',
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
    const result = answers[index];

    // TODO　診断結果を実装する
    return result;
}

console.log(assessment('太郎'));
console.log(assessment('次郎'));
console.log(assessment('太郎'));
