
function movie (title, year, price) {
    this.movieName = title;
    this.year = year;
    this.price = price;
}

var movieList = ["Gundam" , "Madona" , "Blood Diamond" , "Peakaboo" , "Batman"];

console.log(movie);
console.log(movieList);

var batMan = {title:"Batman" , year:2000 , price:"$100"};
var bloodDiamond = {title:"Blood Diamond" , year:2002 , price:"$250"};
var madona = {title:"Madona" , year:1998 , price:"$150"};
var gundam = {title:"Gundam" , year:2000 , price:"$150"};
var peakaBoo = {title:"Peakaboo" , year:2004 , price:"$200"};

console.log("Production year of " + " Pekaboo is " + peakaBoo.year);

//Object with title , year & price //
//Output//
//write another console output to print the year property on the 3rd movie from the object.//
//Output//