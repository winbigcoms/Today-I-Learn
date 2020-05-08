// 1번
var x = 15;
if (x > 10 && x < 20) {
    console.log(x);
}
// 2번
for (var v = 0; v < 10; v++) {
    if (!(v % 2)) {
        console.log(v + "\n");
    }
}
// 3번
var q3 = "";
for (var c = 0; c < 10; c++) {
  if (!(c % 2)) {
    q3 = q3.concat(c);
  }
}
console.log(q3);
// 4번
for (var f = 10; f > 0; f--) {
  if (f % 2) {
    console.log(f);
  }
}
// 5번
var q5 = 0;
while (q5 < 10) {
  if (!(q5 % 2)) {
    console.log(q5);
  }
  q5++;
}
// 6번
var q6 = 10;
while (q6 > 0) {
  if (q6 % 2) {
    console.log(q6);
  }
  q6--;
}
// 7번
var q7 = 0;
for (var x = 0; x < 10; x++) {
  q7 += x;
}
console.log(q7);

//8번
var q8 = 0;
for (var x = 1; x < 20; x++) {
  if ((x % 2) && (x % 3)) {
    q8 += x;
  }
  q8 += 0;
}
console.log(q8);

// 9번
var q9 = 0;
for (var x = 1; x < 20; x++) {
  if (!(x % 2) || !(x % 3)) {
    q9 += x;
  }
}
console.log(q9);

// 10번
for (var x = 1; x < 7; x++) {
  for (var y = 1; y < 7; y++) {
    if (x + y === 6) {
      console.log(`${x},${y}`);
    }
  }
}

//  11번
var star11 = "*";
var result11 = "";
for (var x = 0; x < 6; x++) {
  for (var a = 0; a < 6; a++) {
    if (a === x) {
      result11 = result11.concat(star11);
      console.log(result11 + "\n");
    }
  }
}

// 12번
var star12 = "******";
// var result12 = "";
for (var x = 6; x > 0; x--) {
  for (var z = 6; z > 0; z--) {
    if (x === z) {
      star12 = star12.replace("*", " ");
      console.log(star12 + "\n");
    }
  }
}

// 13번
var star13 = "******";
for (var x = 5; x > 0; x--) {
  for (var z = 5; z > 0; z--) {
    if (x === z) {
    star13 = star13.substring(0, star13.length - 1);
    console.log(star13 + "\n");
    }
  }
}

// 14번
var space14 = "     ";
var star14 = "*";
for (var x = 0; x < 5; x++) {
  for (var z = 0; z < 5; z++) {
    if (x === z) {
      space14 = space14.substring(1, space14.length);
      space14 = space14.concat(star14);
      console.log(space14);
    }
  }
}

// 15번
var space15 = "     ";
var star15 = "*";
var star15d = "**";
for (var x = 0; x < 5; x++) {
  for (var z = 0; z < 5; z++) {
    if (x === z) {
      if(x === 1){
        space15 = space15.substring(1, space15.length);
        space15 = space15.concat(star15);
        console.log(space15);
      }else if(x >1){
        space15 = space15.substring(1, space15.length);
        space15 = space15.concat(star15d);
        console.log(space15);
      }
    }
  }
}

//16번
var star16 = "*********";
for(var p = 0; p < 5; p++){
  for(var l = 0; l <5; l++){
    if(p === l){
      if(l == 0){
        console.log(star16);
      }else if(l > 0){
        star16 = star16.substring(0, star16.length-1);
        star16 = star16.replace("*"," ");
        console.log(star16)
      }
    }
  }
}