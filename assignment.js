// Problem Number One 
// seerToMon 
function seerToMon (count){
    
    let monAnount =  count;
    let seerToMonCount = monAnount / 40;
    return seerToMonCount;
    
} 

const result = seerToMon (80);
console.log(result)


// Problem Number Two

// totalSales Funstion 3 PM
// shirt price = 100
// spent price = 200
// juta price = 500
function totalSales (shirt, pent, juta){
    const newShirt = 100;
    const newPent = 200;
    const newJuta = 500;
    // shirt price count 
    let shirtPrice = newShirt * shirt;
    let pentPrice = newPent * pent;
    let jutaPrice = newJuta * juta;
    // function return 
    const totalAmount = shirtPrice + pentPrice + jutaPrice;
    return totalAmount;
}

const cart = totalSales(1,2,1);
console.log(cart);

// problem Number 3
// Function Name deliveryCost 

function deliveryCost (shirts){
    const forFirsTenTshirt = 100;
    const forSecendTenTshirt = 80;
    const forThirdTenTshirt = 50;
    if (shirts <= 10){
        const TshirtCost = shirts * forFirsTenTshirt;
        return TshirtCost;
    }
    else if (shirts <= 20){ 
        const Tshirtcost = 10 * forFirsTenTshirt;
        const secendtwintyTshirt = shirts - 10;
        const secendTshirtResult = secendtwintyTshirt * forSecendTenTshirt;
        const totalshirtCount = Tshirtcost + secendTshirtResult;
        return totalshirtCount;
    }
    else {
        const thirdTenTshirt = 10 * forFirsTenTshirt;
        const thidrTenTshirtAMount = 10 * forSecendTenTshirt;
        const ResultofTshirt = shirts - 20;
        const ResultTshirtAmount = ResultofTshirt * forThirdTenTshirt;
        const finalResult = thirdTenTshirt + thidrTenTshirtAMount + ResultTshirtAmount;
        return finalResult;
    }
}

const amount = deliveryCost(120);
console.log(amount);

// problem Number 4 
// function Name perfectFriend 
function perfectFriend () {
    const FriendNames = [
        {name : 'roni'},
        {name : 'ruma'},
        {name : 'kawsar'},
        {name : 'anta'},
        {name : 'antaa'},
        {name : 'tamanta'},
        {name : 'rocky'},
        {name : 'hocky'}

    ];
    for (frineds of FriendNames){
        const FriendsNames = frineds.name;
        if (FriendsNames.length == 5){
            return FriendsNames;
        }
       
    }

}

// funstion call 
console.log(perfectFriend());