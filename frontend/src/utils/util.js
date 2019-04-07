import parser from 'fast-xml-parser'
import axios from 'axios';

// When I tested API request, I realized sometimes the response was empty. 
// I tried to find the reason but I failed. 
// So I just created a function that sends the request again if It recieves an empty response 
export async function get_json_data(endpoit){
    var isError = false
    while(isError === false){
        const res_data = await axios.get(endpoit)
        const jsonObj_1 = parser.parse(res_data.data);
        if(jsonObj_1.feed.hasOwnProperty('entry')){
            return jsonObj_1
        }
    }
}

export function filterBy(data){
  var arr = []
  var thirtydays= parseInt(expectedDate())
  var dataArray = data.feed.entry
  for (var i = 0; i < dataArray.length; i++) {
      const currentDate = parseInt(convertToDate(dataArray[i].updated))
      if(thirtydays<=currentDate){
          arr.push(dataArray[i])
      }
      else{
          break;
      }   
  }
  return arr
}


// If it finds an article released before 30days ago,
// it breaks the loop and return true
export function filterByDate(data,authormap){
    var findpoint = false
    var thirtydays= parseInt(expectedDate())
    var dataArray = data.feed.entry
    for (var i = 0; i < dataArray.length; i++) {
        const currentDate = parseInt(convertToDate(dataArray[i].updated))
        if(thirtydays<=currentDate){
            authormap = addAuthors(dataArray[i].author,authormap)
        }
        else{
            findpoint = true
            break;
        }   
    }
    return [authormap, findpoint]
}

// update authors 
export function addAuthors (authors, authormap){
    if(authors instanceof Array){
        authors.map(
          author => {
            if(authormap[author.name] === undefined){
              authormap[author.name] = 1
            }
            else{
              authormap[author.name] = authormap[author.name]+1
            }
          }
        )
      }
      else{
        if(authormap[authors.name] === undefined){
          authormap[authors.name] = 1
        }
        else{
          authormap[authors.name] = authormap[authors.name]+1
        }
      }
    return authormap
}

// calculates the 30 days
export function expectedDate(){
    var days = 30
    var date = new Date();
    var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
    var day =last.getDate();
    if(day < 10){
        day = "0" + day
    }
    var month=last.getMonth()+1
    if(month < 10){
        month = "0" + month
    }
    var year=last.getFullYear();
    return year+""+month+""+day
}

// convert the date value to readable foramt
export function convertToDate(str){
    const year = str.substring(0,4)
    const month = str.substring(5,7)
    const date = str.substring(8,10)
    return year+""+month+""+date
}

// This function formats date string.
export function DateConverter(str){
  var dic = {}
  dic['01'] = 'Jan'
  dic['02'] = 'Feb'
  dic['03'] = 'Mar'
  dic['04'] = 'Apr'
  dic['05'] = 'Jun'
  dic['06'] = 'Jul'
  dic['07'] = 'Aug'
  dic['08'] = 'Sep'
  dic['09'] = 'Nov'
  dic['10'] = 'Oct'
  dic['11'] = 'Nov'
  dic['12'] = 'Dec'
  
  const year = str.substring(0,4)
  const month = dic[str.substring(5,7)]
  const date = str.substring(8,10)

  const output = month + " " + date + ", " + year
  return output
}


// I DID NOT WRITE sortProperties FUNCTION. I COPIED FROM THE GITHUB BELOW 
// https://gist.github.com/umidjons/9614157
export function sortProperties(obj)
{
  // convert object into array
	var sortable=[];
	for(var key in obj)
		if(obj.hasOwnProperty(key))
			sortable.push([key, obj[key]]); // each item is an array in format [key, value]
	
	// sort items by value
	sortable.sort(function(a, b)
	{
	  return b[1]-a[1]; // compare numbers
	});
	return sortable; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
}
