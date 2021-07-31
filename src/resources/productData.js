const productData = [ {
    name: "Sponge Man",
    image: './assets/pikabob.png',
    inventory: 20,
    onSale: false,
    details: ['Yellow', 'Soft', 'Absorbent'],
    varients: [
        { id: 1, color: 'yellow'},
        { id: 2, color: 'orange'},
    ],
    sizes: ["sm", "md", "lg", "xl"],
    },
    {
    name: "Cat Thing",
    image: './assets/meowthfield.png',
    inventory: 0,
    onSale: false,
    details: ['Mondays', 'Hairballs', 'Frisky'],
    varients: [
        { id: 3, color: 'brown'},
        { id: 4, color: 'white'},
    ],
    sizes: ["sm", "md", "lg", "xl"],
    },
    {
    name: "Turtler",
    image: './assets/squirtle_turtle.png',
    inventory: 6,
    onSale: false,
    details: ['Shelled', 'Pizza', 'Souped'],
    varients: [
        { id: 5, color: 'yellowgreen'},
        { id: 6, color: 'greenyellow'},
    ],
    sizes: ["sm", "md", "lg", "xl"],
    },
    {
    name: "Door Knob",
    image: './assets/eeyore.png',
    inventory: 25,
    onSale: true,
    details: ['Horsey', 'Sad', 'Quadripedal'],
    varients: [
        { id: 7, color: 'lightblue'},
        { id: 8, color: 'gray'},
    ],
    sizes: ["sm", "md", "lg", "xl"],
    },
];

export default productData;
