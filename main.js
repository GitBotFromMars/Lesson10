// main.js: This code starts to run after the HTML page is loaded, because of defer attribute in script tag.  
let boardGames = ['Catan', 'Carcassonne', 'Ticket to Ride', 'Agricola', 'King of Tokyo', 'Forbidden Island', 'Dragonwood', 'Lost Cities'];  

// Update the title with the total number of games from our array length  
document.getElementById('ListTitle').textContent = "Top " + boardGames.length + " Board Games"  

// Retrieve the ordered list element (ol) so we can add list items (li)
let listParent = document.querySelector('.TopTen');  

for(let counter=boardGames.length - 1; counter >= 0; counter --){
    let li = document.createElement("li");
    let itemText = document.createTextNode(boardGames[counter]);
    li.appendChild(itemText);
    console.log(li);
    listParent.appendChild(li); 
};  