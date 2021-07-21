webpack
웹의 페이지가 많아지고 js의 코드가 길어지면, 결국 하나의 파일로 관리하는것에 한계가 온다. 하지만 파일을 분리했을 때, 각 파일별 변수와 함수들의 스코프를 관리하는 것이 부담스러워진다. 

이를 피하기 위해 js는 즉시실행함수를 이용하여 모듈을 만든다. 하지만 이렇게 모듈을 파일 단위로 사용하는 것은 쉽지 않기 떄문에, 웹팩을 이용하여 파일을 묶고 모듈화하여 네트워크 비용을 최소화할 필요가 있다.

- 엔트리

웹팩은 모든 것을 모듈로 본다. js,css, 이미지 등 을 js 모듈로 로딩하여 사용한다. js 모듈로 로딩하기 떄문에 로딩은 트리구조로 이루어진다. 그 트리의 루트 시작점을 엔트리라고 한다.

```jsx
module.exports={
	entry:{
		main:"./src/main.js"
	}
}
```

- 아웃풋

웹팩은 엔트리로 설정한 시작파일을 기점으로 의존되어 있는 모든 모듈을 하나로 묶는다. 그 묶은 결과물을 내보낼 경로를 지정한다.

```jsx
module.exports={
	output:{
		filename:"bundle.js",
		path:"./dist"
	}
}
```

웹팩을 통해 번들링된 js를 html에서 srcipt 태그를 이용하여 사용한다.

- 로더

웹팩은 모든 파일을 모듈로 관리하지만, js밖에 모르기 때문에 js가 아닌 파일에 대한 정보가 필요하다. 그 정도를 로더에서 적용한다.

- 바벨 로더(babel-loader)

    바벨로더가 가장 흔한 예시이다. js의 버전을 ES6에서 ES5로 변환할 때 사용한다.

    ```jsx
    module.exports = {
    	module:{
    		rules:[
    			txet:/\.js$/,
    				exclude:"node_modules",
    				use:{
    					loader:"babel-loader",
    					options:{presets:["env"]
    				}
    			}
    		]
    	}
    }
    ```

    test에는 js확장자를 정규식으로 지정, 적용하지 않을 node_modules는 exclude에 설정한다. use에 로더를 설정하는데 babel-loader를 추가한다.

- css-loader, style-loader

    css 또한 마찬가지 이다. css를 변환해주는 css-loader와 변환된 css를 동적으로 html에 추가해주는 style-loader를 사용한다.

    ```jsx
    module.exports = {
    	module:{
    		rules:[
    			{
    				test:/\.css$/,
    				use:['style-loader','css-loader']
    			}
    		]
    	}
    }
    ```

- 플러그인

    로더는 파일단위로 일을 처리하고, 플러그인은 번들된 결과물을 처리한다. 번들 결과물의 난독화나 특정 텍스트 추출등의 작업을 할 수 있다.

    - UglifyJsPlugin

        ```jsx
        module.exports={
        	plugins:[new webpack.optimize.UglifyJsPlugin()]
        }
        ```

    - ExreactTextPlugin

        예를 들어 js 뿐 아니라 css도 파일이 매우 커지면 번들링을 하게된다. 이때 사용하는 플러그 인이다.

        ```jsx
        module.exports = {
        	module:{
        		rules:[
        			{
        				test:/\.scss$/,
        				use:['style-loader','css-loader','sass-loader']
        			}
        		]
        	}
        }
        ```

        플러그인 적용

        ```jsx
        module.exports = {
        	module:{
        		rules:[
        			{
        				test:/\.scss$/,
        				use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: ["css-loader", "sass-loader"],
                }),			
        			}
        		]
        	},
        	plugins:[new ExtractTextPliugin('style.css')]
        }
        ```