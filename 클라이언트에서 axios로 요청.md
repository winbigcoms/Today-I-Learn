클라이언트에서 axios로 요청

```
async axios.post("https://localhost:4000/search",{
	findKey : findKey	
}).then(function(res){ console.log(res);})
.catch(function(err){
	console.log(err);
})
```



서버에서 받는 요청

```
connectDb = mysql.createConnection({...});

router.route('/search').post(
	function(req,res){
		const result = [];
		const push = req.body.findKey
		if(err){
			return console.log(err);
		}else{
			connectDb.query(`select name from city where nam ${this.req.body};`, 	 
				function(err,res){
					if(err){
						console.log(err);
					}else{
						result.push(res)	
					}
				}
			})
			console.log(data);
			res.json(data)
		}
	}
)
```

