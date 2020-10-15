시작하기 앞서

혼자 공부하기 시작한 타입스크립트.. 막상 시작하려니 막막하기도 하고 뭐 부터 해야하나 고민이 많아 진다.

하지만 고민만 한다고 타입스크립트를 마스터 할 순 없다. 가볍게 생각하면 타입스크립트는 결국 자바 스크립트 + 타입이다. 그러니 무서워 하지 말고 일단 부딪혀 보기로 한다.
http://www.yes24.com/Product/Goods/59719961
이 책을 토대로 진행한다.

## 설치하기

node.js는 이미 설치 되어있으니 바로 npm을 이용해서 타입스크립트를 설치해보자

```
npm i -g typescript
```
타입스크립트를 전역에 설치하여 실습을 준비하였다. 컴 어디서든 ts파일을 컴파일 할 수 있다.

테스트를 위해서 hello.ts 파일을 만들었다
```javascript
-hello.ts-
const hello : string = "hello"
console.log(hello)
```
위와 같은 코드를 가진 ts파일을 tsc명령어를 사용하여 컴파일할 수 있다.
```
tsc hello.ts
```
위 명령어를 실행하면 타임스크립트 컴파일러가 해당 파일을 입력받아 컴파일 한 후 js파일을 생성해준다. 컴파일 시에 여러개의 파일을 한번에 컴파일 할 수도 있는 데, 파일 이름을 나열하여 사용하면 된다. 이때 js파일의 ECMA스크립트 버전은 ES3가 기본이다.

## tsc 명령어와 컴파일 옵션 설정하기

tsc 명령어는 여러 기능이 있는데 지정경로를 루트 디렉토리로 지정하는** -p** 옵션, 컴파일 한 JS파일의 ECMA스크립트 버전을 설정할 수 있는 **-target** 옵션, 파일의 변경을 감시하고 있다가 변경이 일어나면 바로 컴파일해주는** -watch** 옵션등이 있다. 추가적인 옵션은 -help명령어를 입력하여 확인할 수 있다.

타입스크립트는 tsconfig.json에 컴파일할 때 필요한 설정정보를 가지고 있다. 이 파일을 이용하여 컴파일 옵션을 설정할 수 있다. tsc명령어로 컴파일을 실행할 때 현재 디렉토리에 있는 tsconfig.json파일을 찾아 검사하고 없다면 상위 디렉토리의 파일을 찾아서 읽어 들인다. 이때 tsconfig가 존재하는 디렉토리가 프로젝트의 루트 디렉토리가 된다.
```
tsc --init
```
위 명령어를 입력하면 현재 경로에 tsconfig.json파일이 생성된다. 설정 파일의 여러 옵션 중 중요한 설정을 몇 가지 보자면 
- target : 컴파일 후 변환 JS파일의 ECMA스크립트 버전
- module : 모듈 형식 지정
- sourceMap : 타입스크립트와 컴파일 된 js파일의 연결정보를 담고 있는 map파일의 생성여부 
- noImplicitAny: any타입의 암묵적 변환여부 설정 옵션. 기본값이 false이며 타입을 지정하지 않은 변수가 자동으로 any타입으로 추가한다. true로 설정하면 암묵적 변환이 일어나지 않으며 명시적으로 타입선언을 해줘야한다.
### 파일 합쳐서 컴파일하기
tsc명령어로 컴파일 할 경우 전체 디렉토리 컴파일이 아닌 특정 파일만 컴파일할 때가 있다. 이때 tsconfig.json 파일의 files속성을 지정하면 된다.
```javascript
{
	"compilerOptions":{
    	"outFile":"./컴파일후 합칠 js파일 생성경로",
    },
    "files":[
    	"컴파일 ts파일 경로",
        "컴파일 ts파일 경로"
    ]
}
```
이렇게 file속성을 지정하면 특정 파일만 대상으로 컴파일을 수행하여 하나의 js파일로 생성한다.
### 컴파일 결과를 특정 디렉토리에 생성하기
컴파일 한 결과를 특정 디렉토리에 저장하도록 설정할 수 있다. 이때 outDir속성을 이용한다.
```javascript
{
	"compilerOptions":{
    	"outDir":"./컴파일 js파일 생성경로",
    },
    "include":[
    	"컴파일 대상 ts파일 디렉토리",
    ],
    "exclude":[
    	"컴파일 제외 ts파일 디렉토리"
    ]
}
```
outDir를 설정하지 않으면 ts파일이 위치한 폴더에 js파일을 생성한다.
### tsconfig.json 확장하기
tsconfig.json 파일은 기본 설정파일인데, 최상위 디렉토리에 공통설정파일로 두고 하위 디렉토리의 tsconfig.json에서 확장하려면 extends속성을 이용한다.
```javascript
부모파일
{
	"compilerOptions":{
		"removeComments":true
    }
}
하위 파일
{
	"extends":"상속받을 상위tsconfig.json파일 경로"
	"compilerOptions":{
		"outFile":"./dist/..."
    }
}
```
outfile의 경우 ts 폴더마다 달라 질 수 있는 속성이니까 하위 디렉토리에 설정하구 noImplicitAny같은 설정은 동일하게 적용될 설정이니까 상위 디렉토리의 설정파일에 두면 된다.

## 개발 환경 설정하기

많은 개발 도구들이 존재하지만 나는 vscode를 사용한다. ui도 편리하고 무엇보다 확장기능이 매우 편리하기 때문이다. 이 VSCODE를 이용해서 단축키를 통한 빌드 작업 자동화 즉 tsc 명령어 안쓰고 단축키로 빌드를 실행해주는 설정을 해보자

### 테스크 러너 설정
VSCODE의 빌드 단축키는 Ctrl+Shift+B이다. 해당 단축키로 빌드 자동화를 하려면 태스크 러너라는 것을 설정해줘야한다. 태스크 러너는 tasks.json파일을 통해서 설정할 수 있다. 이제 명령어를 이용하여 tasks.json파일을 생성해 보자.

루트 디렉토리가 될 폴더에 Ctrl+Shift+P 단축키로 커맨드 팔레트를 열어서 Configure Task키워드를 입력하면 설정 작업을 위한 커맨드 목록을 볼 수 있다. 검색 결과 중 Configure Task옵션을 선택한다. "Create tasks.json file from template" 이라는 자동으로 tasks.json파일을 생성해 주는 메뉴를 선택하고 타입스크립트 템플릿이 없으니 others를 선택하면 자동으로 tasks.json을 만들어준다.

현재 tasks.json파일은 기본 설정만 되어 있기 때문에 VSCODE에 현재 프로젝트가 타입스크립트 프로젝트임을 알려줘야한다. 알려주기 위해선 tsconfig.json파일이 필요하다."tsc --init"명령어로 tsconfig.json파일을 만들어주자. tsconfig.json파일이 만들어지면 VSCODE가 지금 프로젝트가 타입스크립트 프로젝트임을 감지할 수 있게 된다.

이제 다시 "Configure Task"명령어를 팔레트에 입력해보자. 전 과는 다르게 tsc:build와 tsc:watch 옵션이 보인다. build는 바로 컴파일 해주는 명령어, watch는 파일 변경 시마다 컴파일 해주는 명령어이다. 둘다 선택해서 tasks.json파일에 추가해준다. 이제 타입스크립트 파일 만들어서 사용해보자

```javascript
-hello.ts-
console.log("안녕하신가")
```
hello.ts파일을 만들고 Ctrl+Shift+B를 눌러 실행 명령어를 선택해보자. 만약 기본으로 실행할 작업이 있으면 "configure default build task"를 선택해서 기본 작업을 선택해주자. 그러면 기본 작업으로 설정한 명령이 group속성이 추가되어 빌드 단축키 입력시 선택없이 기본으로 실행된다.

### 특정 파일빌드 설정
커맨드를 통해 타입스크립트 파일을 빌드 할때는 tsc에 파일명을 붙여줘야한다. 이 컴파일 명령어를 빌드 단축키에 연결하기 위해서 tasks.json파일에 설정해줘야한다.
```javascript
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "echo",
      "type": "shell",
      "command": "echo Hello"
    }
    ...
  ]
}
```
위의 기본 상태의 tasks.json에서 "tasks"옵션에 label,type,command,group 속성을 입력한다. 
- label: 사용자가 지정할 수 있는 테스크 이름
- type : 실행 타입, shell값을 입력하면 shell커맨드를 실행한다.
- command : 수행되는 커맨드 명령어를 입력한다.
- Group : 태스크가 속한 그룹을 설정한다.
위 속성을 지정해서 설정해주면

```javascript
  "tasks": [
    {
      "label": "컴파일 명령어",
      "type": "shell",
      "command": "tsc ${file}",
      "group" : {
      	"kind":"build",
        "isDefault":true
      }
    }
    ...
  ]
```
빌드 단축키를 입력하면 이제 tsc명령어가 실행된다. 컴파일 뿐 아니라 감시모드를 설정하려면 command에 "tsc -w ${file}"을 입력하면 감시모드로 동작하게 된다.

## VSCODE 확장기능
### TSLint

tslint는 코딩 가이드대로 코딩할 수 있게 린트 검사를 진행해준다.tslint.json파일을 기준으로 린트 검사를 해서 잘못된 부분을 알려주는 고마운 기능이다. 기준이 되는 tslint.json파일을 프로젝트 최상단 디렉터리 에 추가해줘야한다. tslint.json파일을 추가해주는 명령어는 "tslint --init" 이다. 여기서 나는 에러가 났다.. 이 시스템에서 스크립트를 실행할 수 없.. 검색해보니 권한 문제란다. 검색 해보니 해결방법은 
1. window powershell을 관리자 모드로 킨다.
2. Set-ExecutionPolicy RemoteSigned명령어를 입력하고 Y입력하여 권한을 풀면 된다.
출처 :https://singa-korean.tistory.com/21

tslint의 기본적인 실행방법은 "tslint 파일명" 이다. tasks에 lint명령어를 추가하려면 command에 "tslint ${file}"를 설정해준다.


이렇게 일단 기본적인 설정은 끝이 났다. 설정만 해도 이렇게 힘든데.. 그래도 환경설정이 제일 힘들다니까 힘내서 공부해보독 하자