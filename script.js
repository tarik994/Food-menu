
var menu = [
    {
        title: 'Hrana',
        submenu: [
            {
                title: 'Slana jela',
                submenu: [
                    {
                        title: 'Corbe',
                        submenu: [
                            {
                                title: 'Begova corba'
                            }, {
                                title: 'Madjarska corba'
                            }, {
                                title: 'Grah sa suhim mesom'
                            }
                        ]
                    }, {
                        title: 'Pite',
                        submenu: [
                            {
                                title: 'Sirnica'
                            }, {
                                title: 'Zeljanica'
                            }, {
                                title: 'Burek'
                            }
                        ]
                    }, {
                        title: 'Rostilj',
                        submenu: [
                            {
                                title: 'Cevapi'
                            }, {
                                title: 'Plejskavica'
                            }, {
                                title: 'Piletina'
                            }
                        ]
                    }
                ]
            }
        ]
    }, {
        title: 'Sokovi',
        submenu: [
            {
                title: 'Gazirani',
                submenu: [
                    {
                        title: 'Coca-Cola'
                    }, {
                        title: 'Fanta'
                    }, {
                        title: 'Senzacija'
                    }
                ]
            }, {
                title: 'Negazirani',
                submenu: [
                    {
                        title: 'Voda Olimpija'
                    }, {
                        title: 'Voda Lejla'
                    }, {
                        title: 'Fructal Breskva'
                    }
                ]
            }
        ]
    }
];

function showMenu(array, elementToAppend){
    let container = document.createElement('div');
        if(array){
            for(let i = 0; i < array.length; i++){
                var ul = document.createElement('ul');
                var li = document.createElement('li');
                ul.innerHTML = array[i].title;
                ul.appendChild(li)

                container.appendChild(ul)

                showMenu(array[i].submenu,li)
            }
            elementToAppend.appendChild(container)
        }
}

showMenu(menu,document.body)