class FakeRestuarant{
    constructor(name = "Corner Cafe",style = "cafe", openHour = 15, closeHour = 20, tables = 5,waitstaff = 2,profitTotal = 5000,profitDaily = 50, rating = 3.5, decorScore = 4.5){
        console.log("new fake resturant created");
        this.properties = {
            name: name,
            style: style,
            openHour: openHour,
            closeHour: closeHour,
            tables: tables,
            filledTables: 0,
            waitstaff: waitstaff,
            profitTotal: profitTotal,
            profitDaily: profitDaily,
            rating: rating,
            decorScore: decorScore,
        } 
    }
}