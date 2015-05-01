function stackquery(title, callback){
  console.log("It's the title: " + title);
  var url = "https://api.stackexchange.com/2.2/search?order=desc&sort=activity&site=stackoverflow&intitle="
  var query_url = url + title;
  $.get(query_url, callback);
}

function top10(data){
  console.log("running!");
  var output = {};
  _.each(data.items, function(item, index, list){
    _.each(item.tags, function(tag, index, item){
      if(_.has(output, tag)){
        output[tag] += 1;
      }else{
        output[tag] = 1;
      }})
    });
  console.log(output);
  var outputarray = _.pairs(output);
  var realarray = _.sortBy(outputarray, function(x){return -x[1];});
  console.log(realarray);
  return realarray;
}

