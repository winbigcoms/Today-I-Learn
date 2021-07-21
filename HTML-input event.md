HTML-input event
인풋

사용자로부터 값을 받으려면 사용해야하는 아주 중요한 태그 이다. 하지만 종류도 다양, 조건도 다양하다. 특히 인풋의 이벤트는 3단계로 구분할 수 있다. keydown, keypress,keyup 이런 이벤트와 태그를 사용하는 법을 써보자.

한글을 쓰는경우 keypress는 감지하지 못한다. 

keydown 이벤트는 키보드 자판을 누르는 순간에 발생하고

keyup 이벤트는 키보드 자판을 눌렀다가 떼는 순간에 발생하고

keypress 이벤트는 keydown 과 같이 키보드 자판을 누르는 순간에 발생하지만 눌러진 키의 값(?)에 대해 발생한다.

keydown 과 keyup 은 키보드 자판의 기능키(F1, F2, F3...)를 제외한

거의 모든 키(Shift, Ctrl, Alt, CapsLock 등의 특수키)를 인식. (단, 영문의 경우 모두 대문자로 인식)

keypress 는 키보드 자판의 기능키 및 특수키는 바로 인식하지 않으며 조합일 때는 인식.(대소문자 구분)

```jsx
function numTypeChange(e){
    var value =e.target.value;
    if(!onlyNum.test(value)){
      $(`#${e.target.id}`).val("");
      insertSet[e.target.id]="";
      $(`#${e.target.id}`).focus();
      checkAllInserted()
      return false
    };
    if($(`#${e.target.id}`).val().length<10){
      insertSet[e.target.id]=$(`#${e.target.id}`).val();
      return false
    }
    insertSet[e.target.id]=$(`#${e.target.id}`).val();
    checkAllInserted()
  }
function checkInputIsNum(e){
    var val = $(`#${e.target.id}`).val();
    var repVal = val.replace(/[^0-9]/gi,"");
    $(`#${e.target.id}`).val(repVal);
  }
```

때문에 한글을 걸러내려면 keyup이나 down에서 작업을 해야한다.