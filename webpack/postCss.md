# post CSS

- auto-prefix
- cssdb
- css error void
- grid system



## auto prefix

브라우저마다 사용하는 css 기능이 존재, 하지만 이 기능이 전부 표준화되지 않아서 브라우저 마다 각자의 접두사를 붙여서 선언한다. 하지만 코딩할 때마다 버전을 확인하고 prefix를 선언하는 것은 힘드니 post CSS를 이용하여 자동으로 추가할 수있다. 이를 웹팩에서 설정하여 사용 할 수 있다.

```
npm i postcss postcss-loader
```

postcss설정은 postcss.config.js에서 진행한다.

```
`postcss.config.js : 사용할 플러그인 선언 설정파일
module.export = {
	plugins:[
	require('autoprefixer')
	]
}

`webpack.config.js
const postcssLoader = {
	loader: "postcss-loader",
	options:{
		config:{
			path:'postcss.config.js'	
		}
	}
}
```

이후 webpack.config.js의 module의 rules에 추가해준다. 추가적으로 지원할 브라우저의 범위를 선언할 수 있는데, 이는 browserslist에 적용한다.

선언 방식은 package.json에서 browserslist라는 값을 설정해주는 방법이 있고, 따로 파일을 선언해 줄 수 있다. 

```
`package.json
"browserslist":[
	"last 2 versions", // 각 브러우저의 최신 버전과 그 직전 버전
	"IE 10",
	"Firefox > 20" // 20버전 이상의 파폭버전 들
]
```



특정 브라우저 범위 설정은 Query Composition이라 한다. or, and, not 조건을 이용하여 지정할 수 있다.