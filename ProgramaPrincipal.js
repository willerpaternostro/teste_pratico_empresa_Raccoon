let dataLayer = [
    {
        "event": "pageView",
        "current": "/",
        "previous": null
    },
    {
        "event": "addToCart",
        "id": 5677240,
        "name": "Cønjuntø de Pænelæs æntiæderentes ¢øm 05 Peçæs Pæris",
        "quantity": 2,
        "price": "192.84",
        "category": "Panelas"
    },
    {
        "event": "pageView",
        "current": "/eletrodomesticos",
        "previous": null
    },
    {
        "event": "addToCart",
        "id": 9628920,
        "name": "Lævæ & Se¢æ 10,2 Kg Sæmsung E¢ø ßußßle ßræn¢æ ¢øm 09 Prøgræmæs de Lævægem",
        "quantity": 1,
        "price": 3719.70,
        "category": "Eletrodomésticos"
    },
    {
        "event": "addToCart",
        "id": 1316334,
        "name": "Refrigerædør ßøttøm Freezer Ele¢trølux de 02 Pørtæs Frøst Free ¢øm 598 Litrøs",
        "quantity": 2,
        "price": 3880.23,
        "category": "Eletrodomésticos"
    },
    {
        "event": "addToCart",
        "id": 6502394,
        "name": "Føgãø de Pisø Ele¢trølux de 04 ßø¢æs, Mesæ de Vidrø Prætæ",
        "quantity": 3,
        "price": "1419",
        "category": "Eletrodomésticos"
    },
    {
        "event": "addToCart",
        "id": 9576720,
        "name": "Førnø Mi¢rø-øndæs Pænæsøni¢ ¢øm ¢æpæ¢idæde de 21 Litrøs ßræn¢ø",
        "quantity": 2,
        "price": "358.77",
        "category": "Eletrodomésticos"
    },
    {
        "event": "pageView",
        "current": "/cart",
        "previous": null
    },
    {
        "event": "removeFromCart",
        "id": 5677240,
        "name": "Cønjuntø de Pænelæs æntiæderentes ¢øm 05 Peçæs Pæris",
        "quantity": 1,
        "price": "192.84",
        "category": "Panelas"
    },
    {
        "event": "removeFromCart",
        "id": 6502394,
        "name": "Føgãø de Pisø Ele¢trølux de 04 ßø¢æs, Mesæ de Vidrø Prætæ",
        "price": "1419",
        "category": "Eletrodomésticos"
    },
    {
        "event": "removeFromCart",
        "id": 1316334,
        "name": "Refrigerædør ßøttøm Freezer Ele¢trølux de 02 Pørtæs Frøst Free ¢øm 598 Litrøs",
        "quantity": 2,
        "price": 3880.23,
        "category": "Eletrodomésticos"
    },
    {
        "event": "pageView",
        "current": "/eletronicos",
        "previous": null
    },
    {
        "event": "addToCart",
        "id": 8875900,
        "name": "Smært TV 4K Søny LED 65” 4K X-Reælity Prø, UpS¢ælling, Møtiønfløw XR 240 e Wi-F",
        "price": 5799.42,
        "category": "Eletrônicos"
    },
    {
        "event": "addToCart",
        "id": 9746439,
        "name": "Høme Theæter LG ¢øm ßlu-ræy 3D, 5.1 ¢ænæis e 1000W",
        "quantity": 3,
        "price": 2199,
        "category": "Eletrônicos"
    },
    {
        "event": "addToCart",
        "id": 2162952,
        "name": "Kit Gæmer æ¢er - Nøteßøøk + Heædset + Møuse",
        "price": "25599.00",
        "category": "Eletrônicos"
    },
    {
        "event": "addToCart",
        "id": 3500957,
        "name": "Mønitør 29 LG FHD Ultræwide ¢øm 1000:1 de ¢øntræste",
        "quantity": 4,
        "price": 1559.40,
        "category": "Eletrônicos"
    },
    {
        "event": "pageView",
        "current": "/",
        "previous": null
    },
    {
        "event": "addToCart",
        "id": 1911864,
        "name": "Møuse Gæmer Predætør ¢estus 510 Føx Pretø",
        "price": "699",
        "category": "Acessórios"
    },
    {
        "event": "pageView",
        "current": "/cart",
        "previous": null
    },
    {
        "event": "removeFromCart",
        "id": 8875900,
        "name": "Smært TV 4K Søny LED 65” 4K X-Reælity Prø, UpS¢ælling, Møtiønfløw XR 240 e Wi-F",
        "quantity": 1,
        "price": 5799.42,
        "category": "Eletrônicos"
    },
    {
        "event": "removeFromCart",
        "id": 9746439,
        "name": "Høme Theæter LG ¢øm ßlu-ræy 3D, 5.1 ¢ænæis e 1000W",
        "quantity": 2,
        "price": 2199,
        "category": "Eletrônicos"
    },
    {
        "event": "pageView",
        "current": "/purchase",
        "previous": null
    },
    {
        "event": "pageView",
        "current": "/",
        "previous": null
    },
    {
        "event": "addToCart",
        "id": 3500957,
        "name": "Mønitør 29 LG FHD Ultræwide ¢øm 1000:1 de ¢øntræste",
        "quantity": 4,
        "price": 1559.40,
        "category": "Eletrônicos"
    },
    {
        "event": "addToCart",
        "id": 1911864,
        "name": "Møuse Gæmer Predætør ¢estus 510 Føx Pretø",
        "price": "699",
        "category": "Acessórios"
    }
]
//ITEM 1
dataLayer.forEach(element => { 
 element['name']?element['name'] = element['name'].replace(/æ/g,'a').replace(/¢/g,'c').replace(/ø/g,'o').replace(/ß/g,'b'):''
})

//ITEM 2
let pageViewAnterior
dataLayer.forEach((element,index) => {
    if(index == 0 && element['event'] == 'pageView'){
        pageViewAnterior=element
        return
    };
    
    if(element['event'] == 'pageView')
        if(!element['previous']){
            element['previous'] = pageViewAnterior['current']
            pageViewAnterior = element
        }    
})

//ITEM 3
dataLayer.forEach(element => {
    if(element['price'])
        typeof element['price'] === 'string'? element['price'] = Number(element['price']):''
})

//ITEM 4
dataLayer.forEach(element => {
    if(element['event'] == 'addToCart' || element['event'] == 'removeFromCart')// Pois não é possível ser os dois
       !element['quantity']?element['quantity'] = 1:''
})

//ITEM 5 - DESAFIO 
let produtosAdd = []; // Para saber todos os produtos que foram add pelo usuário
let produtosRemove = []; // Para saber todos os produtos que foram removidos pelo usuário
let newDataLayer = [];
let validadorPurchase = 0;
dataLayerAntesDoPurchase = [];
//Atualizando quantidade nos produtos que tiveram  ocorrência de evento
dataLayer.forEach((element,index) => {
    //Aqui purchase não pode ser o primeiro
    if(element['current'] == '/purchase'){
        validadorPurchase +=1;
        dataLayerAntesDoPurchase.push(element);
        newDataLayer.push(element);
    }
    if(validadorPurchase === 1){
        newDataLayer.push(purchase(dataLayerAntesDoPurchase)); //Aqui eu quero dar um push no eventpurchase
        validadorPurchase=0; //Aqui foi o último erro encontrado. O vetor a partir daqui mostrava a mesma coisa
        return;
    }
    dataLayerAntesDoPurchase.push(element);
    newDataLayer.push(element);
})

console.log(newDataLayer);
//CASO QUEIRA VER A SAÍDA NO LOCALSTORAGE
localStorage.setItem('saida',JSON.stringify(newDataLayer));

function purchase( ocorrenciasAntesDePurchase){
    console.log('DatalayerApósPurchase: '+JSON.stringify(ocorrenciasAntesDePurchase));
    if(ocorrenciasAntesDePurchase.length === 0)return;
    let idProdutos = [] // Todos idProduto nas ocorrencias 

    console.log("IDS DE TODOS OS PRODUTOS COM EVENTOS ADD E REMOVE: ");
    ocorrenciasAntesDePurchase.forEach(element => { //mapeandoOcorrenciasProdutos 
        element['event'] == 'addToCart' || element['event'] == 'removeFromCart'? idProdutos.push(element['id']):'';
        console.log(element['id']);
    });
    console.log("TODAS OCORRENCIAS")
    console.log(JSON.stringify(idProdutos)); //15 produtos existentes
    console.log(idProdutos);
    let idProdutosSemRepeticao = [];

    idProdutos.forEach(element => {
        !idProdutosSemRepeticao.includes(element)?idProdutosSemRepeticao.push(element):''; // O problema era nesta linha, estava utilizando filter e no push estava colocando element['id'], sendo que era um vetor e não objeto
    });
    console.log("PRODUTOS SEM REPETIÇÃO");
    console.log(idProdutosSemRepeticao);
    let ocorrenciasDeUmProdutoEspecifico = []; // todas as ocorrências de um produto específico // Aqui encontrei o problema: não deu push
    let todasOcorrenciasDeProdutos = [];
    
    
    idProdutosSemRepeticao.forEach(idProduto => { //Aqui a intenção é fazer um vetor no qual cada posição é um vetor de objetos
        ocorrenciasAntesDePurchase.forEach(element => {
            if(element['id'] == idProduto)
                ocorrenciasDeUmProdutoEspecifico.push(element); //Aqui possui todas ocorrências de um determinado produto      
        }); 
        todasOcorrenciasDeProdutos.push(ocorrenciasDeUmProdutoEspecifico);
        //Como já fez a add de um produto, pula pro próximo, portanto, precisa que ocorrenciasDeUmProdutoEspecifico volte a []
        ocorrenciasDeUmProdutoEspecifico = [];
    }); 
        console.log("OCORRENCIAS DE UM  PRODUTO ESPECIFICO:"); // Aqui houve erro ...
        console.log(todasOcorrenciasDeProdutos); //Aqui da um bug, nav aparece vetor com qtd certo mas quando clica não é o resultado esperado
        let products = [];
        let qtdProduto = 0;
        let produtoEmAnalise = {};
        let product = {};
        todasOcorrenciasDeProdutos.forEach(produto =>{ // Produto aqui é a posição de um array que possui outro array
            produtoEmAnalise = produto[0]; // pois é um array
            produto.forEach(ocorrencia => {
                    if(ocorrencia['event'] == 'addToCart')
                        qtdProduto += ocorrencia['quantity'];
                    if(ocorrencia['event'] == 'removeFromCart')
                        qtdProduto -= ocorrencia['quantity']; 
            }); // Neste momento o produto específico tem sua quantidade OK      
            product = {
                id:produtoEmAnalise['id'],
                name:produtoEmAnalise['name'],
                quantity:qtdProduto, 
                price:produtoEmAnalise['price'], 
                category:produtoEmAnalise['category']
            };
            qtdProduto = 0;
            products.push(product);
        });
        console.log("TODOS PRODUTOS DO PURCHASE");
        console.log(products);
        
    let total = 0;
    let frete = 0;
    products.forEach(element => { 
        total += element['quantity'] * element['price'];
    });
    
    if( total > 200)//Cálculo de frete
        frete = 0;
    else
        frete =50;
 
    let evento ={
        event:"purchase",
        total:total,
        shipping:frete,
        products:products
    }
    return evento
}