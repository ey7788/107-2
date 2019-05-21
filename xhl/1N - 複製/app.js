document.getElementById('button1').addEventListener('click',loadCustomer);

function loadCustomer(){
    // create an XML object
    const xhr = new XMLHttpRequest();

    // open
    xhr.open('GET','customer.json',true);

    xhr.onload = function() {
        console.log(xhr);
        if(this.status === 200){
            const  customer = JSON.parse(this.responseText);
            const output=`
            <ul>
            <li>ID:${customer.id}</li>
            <li>ID:${customer.name}</li>
            <li>ID:${customer.conpany}</li>
            <li>ID:${customer.phone}</li>
            </ul>
            `;
            document.getElementById('customer').innerHTML = output;
        }else{
            console.log('Request error ...');
        }    
    }

    xhr.onerror = function(){
        console.log('Request error...');
    }
    xhr.send();
}