function stackquery(title, callback){
  console.log("Querying for " + title);
  var url = "https://api.stackexchange.com/2.2/search?order=desc&sort=activity&site=stackoverflow&intitle="
  var query_url = url + title;
  $.get(query_url, callback);
}

function top10(data){
  //Create an empty dict to store the output.
  var output = {};
  //Iterate over all the different questions
  _.each(data.items, function(item, index, list){
    //Iterate over all the tags in each question
    _.each(item.tags, function(tag, index, item){
      //If the tag exists in the dict, +=1
      if(_.has(output, tag)){
        output[tag] += 1;
      //Otherwise we need to add the tag to the dict
      }else{
        output[tag] = 1;
      }})
    });
  //Turn the dict into an array of pairs
  var outputarray = _.pairs(output);
  //Sort the array by the number of times a tag appears
  var realarray = _.sortBy(outputarray, function(x){return -x[1];});
  console.log("Sorted array pairs", realarray);
  return realarray;
}

