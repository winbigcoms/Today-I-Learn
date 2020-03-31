





github.com/ulgoon



~ 현재 유저 파일 최상단

/ 하드 최상단

pwd 현재 경로확인

ls 현재위치에서 접근 할 수 있는 하위 폴더 확인

-ls -l 한 줄로 보여줌

-ls -a 숨긴 파일 보여주기

desktop 바탕화면 / documents 내 문서파일

cd 위치 옮기기

. 현재 , ..상위 폴더 > cd .. 상위폴더로 이동

mkdir / touch  . 폴더만들기, 파일 만들기

mv 파일 폴더명 > 파일은 폴더로 옮기기 / 상위폴더 .. or ../..

cp 파일명1 파일명2 > 파일1을 파일2이름으로 복사

rm 파일명 > 파일 삭제 

명령어 파일명* > 파일명을 가진 모든 파일에 명령 수행 / rm index* , rm *.java

이름 바꾸기 이동or복사로 mv hello.java hlle.java

권한 정의 하기

1234567890 / 1 개체의 속성(파일,폴더),234본인 사용자의 권한(읽,쓰,실),567(전체사용자)890(게스트)

맥에서 가능 모드 변경 chmod 555 > 쓰기막기

rm -r > 경로 내부의 데이터를 지우고 본인도 삭제

tab

vi > vim으로 열기 

파일실행 > 프로그램명 파일이름

vim의 3가지 모드 / 기본, 입력,블럭

i > 입력모드 ,esc 모드 나가기 ,  :wq 저장하고 나가기, :q! 그냥 나가기, :w 저장하기

cat 파일명.txt > 텍스트 파일 읽기

git config --global user.name

git config --global user.email

git config --global core.editor "vim"

git config --global core.pager "cat"



git init

github에서 새로운 repo만들기 > 주소복사

git remote add 별명 주소 ( 복사 단축키 = 컨트롤 ins / 붙여넣기 단축키 = 쉬프트 ins)

git status / 상태확인

readme.md > 사용설명서

​	프로세스

​		생성,수정 > git add --a(파일명) > git commit ( 수정사항에 대한 설명) - i(쓰기모드)-esc(모드 나가기)-:wq(저장하고 나가기) > 최초 업로드 git push -u origin master

commit시 

맨 첫줄 

```
docs: 제목
```

docs 문서 / conf 파일 설정 / feat 기능 / bugfix 버그잡기 / resolve 해결과정

기존 리포레지 삭제

```
git remote remove origin
```

새리포리지 추가

```
git remote add 별명 주소
```



```
마크다운 언어
```

```
[콘텐츠](링크) = a태그 
![alt 텍스트](링크) = 이미지태그
# h태그

​``` 언어

​```
- ul의 li
` span
~~ 문자 ~~  취소선
문단과 문단을 띄워야 문단 띄어쓰기 사용
```





commit의 순서도 중요하다

commit 시 vim 스킵하는 법 

```
git commit -m "내용" 
쌍따옴표 안닫고 엔터치면 줄바꿈
```

license

​	아파치 : 소유권 주장 가능

​	mit: 완전 무료

​	gnu: 한 줄이라도 들어가면 모든 기능이 무료 **피해가자ㅇ

git checkout --  > 가장 최근의 commit으로 돌아가기

git branch : 상태 확인



hexo 사용하기

<hr>

npm install -g hexo-cli

hexo init 블로그이름

cd 블로그이름

npm install

hexo server

hexo new post 제목

정리하기 > hexo clean

공유 올리기 > hexo generate



서버 배포하기

hexo deploy

한번에 하기

hexo clean && hexo generate && hexo deploy