function quote() {
    var authors = [
      "--Oscar Wilde",
      "--Albert Einstein",
      "--Mae West",
      "--Mahatma Gandhi",
    ];
    var quotes = [
      "“Be yourself; everyone else is already taken.”",
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
      "“You only live once, but if you do it right, once is enough.”",
      "“Be the change that you wish to see in the world.”",
    ];
  
    var randomNum = Math.floor(Math.random() * authors.length);
  
    document.getElementById("the-author").innerHTML = authors[randomNum];
    document.getElementById("the-quote").innerHTML = quotes[randomNum];
  }
  