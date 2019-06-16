const data = [
  {
    "id": 1,
    "name": "Boogie wit a Hoddie",
    "price": 120,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et voluptatem eligendi laboriosam similique esse deleniti facere! Incidunt hic ab maxime.",
    "inCart": false,
    "count": 0,
    "total": 0,
    "category": "winter",
    "img": "/img/hoodie.jpeg",
    "selected": false
  },
  {
    "id": 2,
    "name": "Bomber Fomber",
    "price": 150,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et voluptatem eligendi laboriosam similique esse deleniti facere! Incidunt hic ab maxime.",
    "inCart": false,
    "count": 0,
    "total": 0,
    "category": "winter",
    "img": "/img/bomber.jpeg",
    "selected": false

  },
  {
    "id": 3,
    "name": "Sundress",
    "price": 100,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et voluptatem eligendi laboriosam similique esse deleniti facere! Incidunt hic ab maxime.",
    "inCart": false,
    "count": 0,
    "total": 0,
    "category": "summer",
    "img": "/img/dress.jpeg",
    "selected": false
  },
  {
    "id": 4,
    "name": "Denim Jacket",
    "price": 130,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et voluptatem eligendi laboriosam similique esse deleniti facere! Incidunt hic ab maxime.",
    "inCart": false,
    "count": 0,
    "total": 0,
    "category": "winter",
    "img": "/img/jacket.jpeg",
    "selected": false

  },
  {
    "id": 5,
    "name": "Sun Glasses",
    "price": 50,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et voluptatem eligendi laboriosam similique esse deleniti facere! Incidunt hic ab maxime.",
    "inCart": false,
    "count": 0,
    "total": 0,
    "category": "summer",
    "img": "/img/glasses.jpeg",
    "selected": false

  },
  {
    "id": 6,
    "name": "Trouser",
    "price": 100,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et voluptatem eligendi laboriosam similique esse deleniti facere! Incidunt hic ab maxime.",
    "inCart": false,
    "count": 0,
    "total": 0,
    "category": "winter",
    "img": "/img/trousers.jpeg",
    "selected": false

  },
  {
    "id": 7,
    "name": "T-Shirt",
    "price": 80,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et voluptatem eligendi laboriosam similique esse deleniti facere! Incidunt hic ab maxime.",
    "inCart": false,
    "count": 0,
    "total": 0,
    "category": "summer",
    "img": "/img/t-shirt.jpeg",
    "selected": false

  },
  {
    "id": 8,
    "name": "Watch",
    "price": 280,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et voluptatem eligendi laboriosam similique esse deleniti facere! Incidunt hic ab maxime.",
    "inCart": false,
    "count": 0,
    "total": 0,
    "category": null,
    "img": "/img/watch.jpeg",
    "selected": false
  },
  {
    "id": 9,
    "name": "Trench Coat",
    "price": 200,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et voluptatem eligendi laboriosam similique esse deleniti facere! Incidunt hic ab maxime.",
    "inCart": false,
    "count": 0,
    "total": 0,
    "category": 'winter',
    "img": "/img/trenchcoat.jpeg",
    "selected": false
  },
  {
    "id": 10,
    "name": "All Black",
    "price": 190,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et voluptatem eligendi laboriosam similique esse deleniti facere! Incidunt hic ab maxime.",
    "inCart": false,
    "count": 0,
    "total": 0,
    "category": 'winter',
    "img": "/img/allblack.jpeg",
    "selected": false
  },
  {
    "id": 11,
    "name": "2 Stripes",
    "price": 210,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et voluptatem eligendi laboriosam similique esse deleniti facere! Incidunt hic ab maxime.",
    "inCart": false,
    "count": 0,
    "total": 0,
    "category": 'winter',
    "img": "/img/2stripes.jpeg",
    "selected": false
  },
  {
    "id": 12,
    "name": "Long Dress",
    "price": 160,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et voluptatem eligendi laboriosam similique esse deleniti facere! Incidunt hic ab maxime.",
    "inCart": false,
    "count": 0,
    "total": 0,
    "category": 'winter',
    "img": "/img/dress2.jpeg",
    "selected": false
  },
  {
    "id": 13,
    "name": "Retro",
    "price": 154,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et voluptatem eligendi laboriosam similique esse deleniti facere! Incidunt hic ab maxime.",
    "inCart": false,
    "count": 0,
    "total": 0,
    "category": 'winter',
    "img": "/img/retro.jpeg",
    "selected": false
  },
  {
    "id": 14,
    "name": "Suit",
    "price": 260,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et voluptatem eligendi laboriosam similique esse deleniti facere! Incidunt hic ab maxime.",
    "inCart": false,
    "count": 0,
    "total": 0,
    "category": 'winter',
    "img": "/img/suit.jpeg",
    "selected": false
  },
  {
    "id": 15,
    "name": "Jeans",
    "price": 100,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et voluptatem eligendi laboriosam similique esse deleniti facere! Incidunt hic ab maxime.",
    "inCart": false,
    "count": 0,
    "total": 0,
    "category": 'winter',
    "img": "/img/jeans.jpeg",
    "selected": false
  },
  {
    "id": 16,
    "name": "Sweat Shirt",
    "price": 70,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et voluptatem eligendi laboriosam similique esse deleniti facere! Incidunt hic ab maxime.",
    "inCart": false,
    "count": 0,
    "total": 0,
    "category": 'winter',
    "img": "/img/sweatshirt.jpeg",
    "selected": false
  },


]

export default data;