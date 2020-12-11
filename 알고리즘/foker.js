// 무작위 5개의 문자열의 배열이 들어온다는 가정
// 문양은 C,H,D,S / 숫자는 A~JQK
function foker(cards){
  const nums = ["A","1","2","3","4","5","6","7","8","9","T","J","Q","K"];
  const feat = ["C","H","D","S"];
  // cards는 ["3C","AS","TC","kC"] 이런 식으로 들어옴
  const jokbo = ["탑","원페어","투페어","트리플","스트레이트","플러쉬","풀하우스","포카드","스트레이트 플러쉬","로얄 스트레이트 플러쉬"];
  // 패의 숫자와 문양을 구분
  const myNumsBeforeFliter = cards.map(card=>card.slice(0,1));
  const myFeat = cards.map(card=>card.slice(1,2));
// 결과값을 담을 변수와 점수판
  let result ="";
  let resultFeatPoint = 0;
  let resultPoint =0;
  // 문자인 숫자를 nums의 인덱스를 이용하여 변경
  const myNumsAfterFliter = myNumsBeforeFliter.map(num=> nums.indexOf(num)+1);
  //족보 계산 시작

  // 플러쉬 확인 함수
  const flush = feat =>{
    const result = feat.reduce((acc,cur,idx)=>{
      if(idx ===0){
        return acc
      }
      if(acc === cur){
        return acc
      }else{
        return false
      }
    });
    return result
  } 
  // 스트레이트 계산 함수
  const stright = nums => {
    // 숫자를 낮은 수 부터 정렬
    let result = {
      result: true,
      num:0
    };
  //  계산을 위한 정렬
    const sortNums = nums.sort((a,b)=>a-b);
// 확인
    for(let idx= 0; idx < sortNums.length-1; idx++){
      if(!(sortNums[idx]+1 === sortNums[idx+1])){
        result = false;
        break
      }
    }
    result.num = sortNums[sortNums.length -1];
    // 세부점수 초기화
    resultFeatPoint = result.num?result.num/100:0;
    return result
  }

  // 숫자패 정리 함수
  const setNums = numArray=>{
    // 정리할 객체
    const nums={};
    // 정리된 숫자들
    const innerNum = [];
    // 
    for(let i=0; i<numArray.length; i++){
      if(nums[numArray[i]] === undefined){
        innerNum.push(numArray[i]);
        nums[numArray[i]] = 1;
        continue
      }
      nums[numArray[i]]+=1;
    }
    // 결과 정리
    const result = {
      nums,
      innerNum
    }
    // 결과 예시 2,3,2,4,9
    // {
    //  [2,3,4,9],
    //  {2:2,3:1,4:1,9:1}
    // }
    return result
  }

  // 로티플 계산 함수
  const LSF = (numArray,featArray)=>{
    let result=false
    const cardFeat = flush(featArray);
    if(!cardFeat) {
      // 다른 무늬가 있으면 바로 끝
      return result
    }
    // 로티플의 숫자는 고정
    const LSFNum = [1,11,12,13,14];
    for(let value of numArray){
      if(!LSFNum.includes(value)){
        return result
      }
    }
    result = true;
    // 세부 점수
    resultFeatPoint = feat.indexOf(cardFeat)/1000;
    return result;
  };
  // 스트레이트 플러쉬
  const SF = (numArray,featArray)=>{
    let result=false;
    const cardFeat = flush(featArray);
    const cardNums = stright(numArray);

    if(cardFeat && cardNums.result) {
      result = true;
      // 세부 점수
      resultFeatPoint = feat.indexOf(cardFeat)/1000 + cardNums.num/100;
      return result
    }else{
      // 다른 무늬가 있으면 바로 끝
      return result
    }
  }

  // 포카드
  const FC = numArray=>{
    let result = false;
  // 정리된 숫자패가져오기
    const {nums,innerNum} = setNums(numArray);
    // 포카드 확인
    for(let i=0; i<innerNum.length; i++){
      if(nums[innerNum[i]]===4){
        result=true;
        resultFeatPoint = innerNum[i]/100
      }
    }
    return result;
  }
  // 풀하우스
  const FH = numArray=>{
    let result = false;
    let three=TH(numArray);
    let two = TW(numArray);
    // 트리플과 투페어
    if(three.result&&two.result){
      result = true;
      resultFeatPoint = three.num/100 + two.num/100000
    }
    return result
  }
  // 트리플
  const TH = numArray=>{
    const {nums,innerNum} = setNums(numArray);
    let three={
      result : false,
      num:0
    };
    for(let i=0; i<innerNum.length; i++){
      if(nums[innerNum[i]]===3){
        three.result=true;
        three.num=innerNum[i];
        resultFeatPoint = three.num / 100;
        return three
      }
    }
    return three
  }
  // 투페어
  const TW = numArray =>{
    const {nums,innerNum} = setNums(numArray);    
    // 2페어가 2개 나오면 큰 수 반환하기 위해서
    const twoArr = [];
    const two = {
      result:false,
      num:0
    };
    for(let i=0; i<innerNum.length; i++){
      if(nums[innerNum[i]]===2){
        twoArr.push(innerNum[i]);
        two.result = true;
      }
    }
    if(twoArr.length === 0) return two.result;
    if(twoArr.length > 1){
      two.num = twoArr[0]>twoArr[1]?twoArr[0]:twoArr[1];
    }else{
      two.num = twoArr[0]
    }
    resultFeatPoint = two.num / 10000;
    return two
  }
  // 탑 계산
  const TOP = (numArray)=>{
    const {nums,innerNum} = setNums(numArray);
    const top = {
      result:true,
      num:0
    }
    // 이미 겹치는 숫자가 없는 상태
    const higherNum = innerNum.reduce((acc,cur)=>{
      if(acc > cur)return acc;
      if(acc <= cur)return cur;
    });
    top.num = higherNum;
    resultFeatPoint = top.num / 10000;
    return top;
  }
  // 손패 계산
  if(LSF(myNumsAfterFliter,myFeat)){
    result = "로얄 스트레이트 플러쉬";
  }else if(SF(myNumsAfterFliter,myFeat)){
    result = "스트레이트 플러쉬";
  }else if(FC(myNumsAfterFliter)){
    result = "포카드"
  }else if(FH(myNumsAfterFliter)){
    result = "풀하우스"
  }else if(flush(myFeat)){
    result = "플러쉬"
  }else if(stright(myNumsAfterFliter).result){
    result = "스트레이트"
  }else if(TH(myNumsAfterFliter).result){
    result = "트리플";
  }else if(TW(myNumsAfterFliter).result){
    result = "투페어";
  }else if(TOP(myNumsAfterFliter).result){
    result = "탑";
  }
  resultPoint = jokbo.indexOf(result);
  const finalPoint = resultPoint+resultFeatPoint;
  console.log(result,finalPoint)
  return finalPoint;
}

const a = ["TS","TC","TH","5D","5H"];
const b = ["TS","9C","8H","7D","6H"];
const c = ["TS","9S","8S","7S","6S"];
const d = ["TS","AS","JS","QS","KS"];
const e = ["TS","TC","TH","4D","5H"];
const f = ["TS","TC","3H","5D","5H"];
const g = ["TS","TC","TH","TD","5H"];
const h = ["TS","9C","3H","2D","5H"];
const i = ["8S","9C","3H","2D","5H"];
const winRate = {
  A:0,
  B:0,
  um:0
}
const fight = (a,b)=>{
  const playerA = foker(a);
  const playerB = foker(b);
  return playerA > playerB ? winRate.A++ : playerA < playerB ? winRate.B++ : winRate.um++;
}
fight(i,h);
console.log(winRate);
