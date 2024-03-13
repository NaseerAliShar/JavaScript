const Products = [
    { id: 1, name: "Vivo Y10", price: 10000, instock: true },
    { id: 2, name: "Vivo Y20", price: 40000, instock: false },
    { id: 3, name: "Vivo Y30", price: 20000, instock: true },
    { id: 4, name: "Vivo Y40", price: 50000, instock: false },
    { id: 5, name: "Vivo Y50", price: 40000, instock: true }
];
// Products.map(item => console.log(item.name));                                       // Map
// Products.filter(val => val.instock === true).map(item => console.log(item.name));   // Filter
// Products.sort((a, b) => a.price- b.price).map(val => console.log(val.name));        // Sort in Ascending
// Products.sort((a, b) => b.price- a.price).map(val => console.log(val.name));        // Sort in Descending
// [...Products].sort((a, b) => a.price - b.price).map(val => console.log(val.name));  // Sort with Destructuring 
// [...Products].sort((a, b) => a.price - b.price).map((value, index) => console.log({...value, rank: index+1}));    // Above Same + Add Rank
//[...Products].sort((a, b) => a.price - b.price).filter(val => val.instock === true).map((value, index) => console.log({ ...value, rank: index + 1 }));   // Above Same + Filter

const Series = [
    { id: 1, series: "X Series" },
    { id: 2, series: "V Series" },
    { id: 3, series: "Y Series" },
    { id: 4, series: "Z Series" },
    { id: 5, series: "W Series" }
];
Products.map(val => console.log({ ...val, ...Series.find(item => val.id === item.id) }));     