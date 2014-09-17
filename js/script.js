var APIKey = 'a5d505e479bd3031d6a59512b8809b6bf1bb23f7ebfc61bd3';

//load definitions
var loadDefOne = function(response){
  // if(response.response.error){
  //     alert(response.response.error.description);
  //     return;
  // };
  var newDef = document.createElement('div');

  newDef.className = 'newDef';

  var defOne = response.word;

  $('#newDef').text(defOne);

};

var loadDefTwo = function(response){

  var newDef = document.createElement('div');

  newDef.className = 'newDefTwo';

  var defTwo = response.word;

  $('#newDefTwo').text(defTwo);

}
//get definitions
var getDefOne = function(){
  var thisURL = 'http://api.wordnik.com:80/v4/word.json/mean/definitions?limit=2&includeRelated=false&sourceDictionaries=webster&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'

  $.ajax({
    url : thisURL, 
    dataType : 'jsonp',
    success : function(response){
      console.log(response);
      //call loadTitle function
      loadDefOne(response);
    }
  });
};

var getDefTwo = function(){
  var thisURL = 'http://api.wordnik.com:80/v4/word.json/mean/definitions?limit=2&includeRelated=false&sourceDictionaries=webster&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'

  $.ajax({
    url : thisURL, 
    dataType : 'jsonp',
    success : function(response){
      console.log(response);
      //call loadTitle function
      loadDefTwo(response);
    }
  });  
};


//load first random word
var loadOne = function(response){
  // if(response.response.error){
  //     alert(response.response.error.description);
  //     return;
  // };

  var titleOne = response.word;

  $('#word').text(titleOne);

};

var loadTwo = function(response){

  var titleTwo = response.word;

  $('#wordTwo').text(titleTwo);

}
//get random words
var getTitleOne = function(){
  var thisURL = 'http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=adjective&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'

  $.ajax({
    url : thisURL, 
    dataType : 'jsonp',
    success : function(response){
      console.log(response);
      //call loadTitle function
      loadOne(response);
    }
  });
};

var getTitleTwo = function(){
  var thisURL = 'http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'

  $.ajax({
    url : thisURL, 
    dataType : 'jsonp',
    success : function(response){
      console.log(response);
      //call loadTitle function
      loadTwo(response);
    }
  });  
};
 
// //get title definitions function
// var getDefinitionOne = function(){
//   var thisURL = 'http://api.wordnik.com:80/v4/word.json/'+titleOne+'/definitions?limit=4&includeRelated=false&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
//   $.ajax({
//       url : thisURL, 
//       dataType : 'jsonp',
//       success : function(response){
//         console.log(response);
//         //call loadTitle function
//         loadOne(response);
//       }
//     });  
// };

// console.log(getDefinitionOne);

//choose cover image function
  //load cover image on page
  //call getTitle function

//init function
var init = function(){
  console.log('Javascript final!!');

  $('#titleMe').click(function(e){
    e.preventDefault();
    getTitleOne();
    getTitleTwo();
    getDefOne();
    getDefTwo();
  });
  
};

$(document).ready(init);
