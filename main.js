//get input element 
let filterInput = document.getElementById('filterInput');

//add event listener
filterInput.addEventListener('keyup',filterNames);

function filterNames() {
    //get value of input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    
    //get names ul 
    let ul = document.getElementById('names');
    //get list from ul
    let li = ul.querySelectorAll('li.collection-item');

    //loop through collection-item lis

    for (let index = 0; index < li.length; index++) {
        let a = li[index].getElementsByTagName('a')[0];

        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[index].style.display = '';
        }else{
            li[index].style.display = 'none';
        }
        
    }
}

