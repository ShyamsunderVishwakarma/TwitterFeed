var tweet = require("twit");
var tweetConfig = require("../config/config");

var tweetObject = new tweet(tweetConfig.tweetTokenConfig);

//redirect to FirstPage
exports.firstPage = function(req,res,next){

	console.log("first page");
	res.render("index.html",{errorMessage : ""});
}

//get Feed Data from Api
exports.getFeed = function(req,res,next){
	//get Feed Logic Here
	console.log("SerachText Data : " + req.body.searchText);

	var searchText = req.body.searchText;

	if(searchText == "" || searchText == undefined)
	{
		res.render("index.html",{errorMessage : "Invalid search text !"});
	}
	else
	{

		var params = {
				q: '#'+searchText,
				result_type: 'recent'
		}

		tweetObject.get('search/tweets', params,searchedData);
	
		function searchedData(err,data) {

			if(err) throw err

			//res.send(data);
			res.render("index.html",data);
		} 
	}

}