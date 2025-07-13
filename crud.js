//loding
let loding = document.getElementById('loding')

let lodingBack = setTimeout(function () {
    loding.style.display = 'none'
}, 3000)
let l = 0
let aaa = document.getElementById('aaa')
let jjj = document.getElementById('jjj')

setInterval(function naaam(){
        if(l <= 100)
        {    
            aaa.innerHTML =l++;
            
        }
        
}, 28)

//t
let them = document.getElementById('them');
them.onclick = function () {
    document.body.classList.toggle("dark")
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
    }
});

let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let mood = 'create';
let tmp;
//get total
function getTotal() {
    if (price.value != '') {
        let presnt = (+price.value + +taxes.value + +ads.value) * +discount.value / 100
        let result = (+price.value + +taxes.value + +ads.value) - presnt
        total.innerHTML = Math.ceil(result);
        total.style.background = '#07d600';
    } else {
        total.innerHTML = '';
        total.style.background = '#d60000'
    }
}

//create prodact
let dataPro;
if (localStorage.prodect != null) {
    dataPro = JSON.parse(localStorage.prodect)
} else {
    dataPro = []
}

//save  localstorage
submit.onclick = function () {
    let newPro = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value,
    }
    if (title.value != '' && price.value != '' && category.value != '' && newPro.count <= 100) {
        if (mood === 'create') {
            if (newPro.count > 0) {
                for (let i = 0; i < newPro.count; i++) {
                    dataPro.push(newPro)
                }
            }
            else {
                dataPro.push(newPro)
            }
        }
        else {
            dataPro[tmp] = newPro
            mood = 'create';
            submit.innerHTML = 'Create';
            count.style.display = 'block'
        }
        clearData();
    } else {
        if (title.value == '' || price.value == '' || category.value == '') {
            alert(`Error in ${placeholder}`)
        }
    }


    localStorage.setItem('prodect', JSON.stringify(dataPro));
    console.log(dataPro);
    
    showData();
    total.style.background = '#7c0303'
}
//clear inputs
function clearData() {
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';

}
//read
function showData() {
    let table = '';
    for (let i = 0; i < dataPro.length; i++) {
        table += `<tr>
                        <td>${i + 1}</td>
                        <td>${dataPro[i].title}</td>
                        <td>${dataPro[i].price}$</td>
                        <td>${dataPro[i].taxes}$</td>
                        <td>${dataPro[i].ads}$</td>
                        <td>${dataPro[i].discount}%</td>
                        <td>${dataPro[i].total}$</td>
                        <td>${dataPro[i].category}</td>
                        <td><button class = "buttos" onclick= "updateDate(${i})" id="update">update</button></td>
                        <td><button class = "buttos" onclick= "deleteDate(${i})" id="delete">delete</button></td>
                    </tr>`;
    }
    document.getElementById('tbody').innerHTML = table;
    let btnDelete = document.getElementById('deleteAll');
    if (dataPro.length > 0) {
        btnDelete.innerHTML = `
        <button onclick= "deleteAll()">Delete All (${dataPro.length})</button>`
    } else {
        btnDelete.innerHTML = '';
    }

}
showData()
//delete
function deleteDate(i) {
    dataPro.splice(i, 1);
    localStorage.prodect = JSON.stringify(dataPro)
    showData()
}

function deleteAll() {
    localStorage.clear
    dataPro.splice(0)
    showData()
}
//count
//update
function updateDate(i) {
    title.value = dataPro[i].title;
    price.value = dataPro[i].price;
    taxes.value = dataPro[i].taxes;
    ads.value = dataPro[i].ads;
    discount.value = dataPro[i].discount;
    category.value = dataPro[i].category;
    count.style.display = 'none'
    getTotal()
    submit.innerHTML = 'update'
    mood = 'update'
    tmp = i
}
//sreach
let searchMood = 'title';

function getSearchMood(id) {
    let search = document.getElementById('search');
    if (id === 'searchTitle') {
        searchMood = 'title';
    } else {
        searchMood = 'category';
    }
    search.placeholder = 'Search By ' + searchMood;
    search.focus();
    search.value = '';
    showData()

}

function searchData(value) {
    let table = '';
    for (let i = 0; i < dataPro.length; i++) {
        if (searchMood == 'title') {

            if (dataPro[i].title.toLowerCase().includes(value)) {
                table += `<tr>
                        <td>${i + 1}</td>
                        <td>${dataPro[i].title}</td>
                        <td>${dataPro[i].price}$</td>
                        <td>${dataPro[i].taxes}$</td>
                        <td>${dataPro[i].ads}$</td>
                        <td>${dataPro[i].discount}%</td>
                        <td>${dataPro[i].total}$</td>
                        <td>${dataPro[i].category}</td>
                        <td><button onclick= "updateDate(${i})" id="Update">Update</button></td>
                        <td><button onclick= "deleteDate(${i})" id="Delete">Delete</button></td>
                    </tr>`;
            }
        }
        else {
            if (dataPro[i].category.toLowerCase().includes(value)) {
                table += `<tr>
                        <td>${i + 1}</td>
                        <td>${dataPro[i].title}</td>
                        <td>${dataPro[i].price}$</td>
                        <td>${dataPro[i].taxes}$</td>
                        <td>${dataPro[i].ads}$</td>
                        <td>${dataPro[i].discount}%</td>
                        <td>${dataPro[i].total}$</td>
                        <td>${dataPro[i].category}</td>
                        <td><button onclick= "updateDate(${i})" id="update">Update</button></td>
                        <td><button onclick= "deleteDate(${i})" id="delete">Delete</button></td>
                    </tr>`;
            }
        }
    }
    document.getElementById('tbody').innerHTML = table;
}

//clean data


