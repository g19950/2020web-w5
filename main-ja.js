const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//英語の定義
let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
let insertY = ['the soup kitchen','Disneyland','the White House'];
let insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

//日本語の定義
let jp_storyText = '外は 94 fahrenheit だった。なので :insertx: は散歩に出かけた。彼らが :inserty: に着いた時,みなは驚きました。その後 :insertz:。体重300 poundsの主人公 はよくわからなかったが、驚きはしなかった。暑い日でした。';
let jp_insertX = ['太郎','花子','梅子'];
let jp_insertY = ['家','学校','レストラン'];
let jp_insertZ = ['どこかへ消えました','空へ飛んでいきました','宇宙へ逃げました'];


randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',name);
  }

  //日本語なら
  if(document.getElementById("jp").checked) {
    newStory = jp_storyText;

    xItem = randomValueFromArray(jp_insertX);
    yItem = randomValueFromArray(jp_insertY);
    zItem = randomValueFromArray(jp_insertZ);

    newStory = newStory.replace(':insertx:',xItem);
    newStory = newStory.replace(':insertx:',xItem);
    newStory = newStory.replace(':inserty:',yItem);
    newStory = newStory.replace(':insertz:',zItem);

    const weight = Math.round(300*0.45359293319936) + 'キログラム';
    const temperature =  Math.round((94-32)/1.8) + '度';
    newStory = newStory.replace('94 fahrenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);

    if(customName.value !== '') {
      const name = customName.value;
      newStory = newStory.replace('主人公',name);
    }
  }


  story.textContent = newStory;
  story.style.visibility = 'visible';
}

