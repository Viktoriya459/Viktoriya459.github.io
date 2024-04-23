let products = [
	{
		id: 1,
		badge: {
			title: "Sold",
			bg: "sold"	
		},
		image: "/images/1.jpg",
		name: "Туфлі",
		price: 21,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 2,
		category: 1,

	},
	{
		id: 2,
		badge: {
			title: "",
			bg: ""	
		},
		image: "/images/2.jpg",
		name: "Сандалі",
		price: 30,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 5,
		category: 2,
	},
	{
		id: 3,
		badge: {
			title: "New",
			bg: "new"	
		},
		image: "/images/3.jpg",
		name: "Плаття",
		price: 5,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 4,
		category:3,
	},
	{
		id: 4,
		badge: {
			title: "",
			bg: ""	
		},
		image: "/images/4.jpg",
		name: "Юбка",
		price: 51,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 1,
		category: 1,
	},
	{
		id: 5,
		badge: {
			title: "Sale",
			bg: "sale"	
		},
		image: "/images/5.jpg",
		name: "Шорти",
		price: 10,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 0,
		category: 4,
	},

	{
		id: 6,
		badge: {
			title: "",
			bg: ""	
		},
		image: "/images/6.jpg",
		name: "Штани",
		price: 31,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 5,
		category:  5,
	},
	{
		id: 7,
		badge: {
			title: "Sale",
			bg: "sale"
		},
		image: "/images/7.jpg",
		name: "Окуляри",
		price: 35,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 4,
		category: 6,
	},

	{
		id: 8,
		badge: {
			title: "",
			bg: ""	
		},
		image: "/images/8.jpg",
		name: "Пірамідка",
		price: 25,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 3,
		category: 4,
	},
                      
	{
		id: 9,
		badge: {
			title: "Sold",
			bg: "sold"	
		},
		image: "/images/9.jpg",
		name: "Іграшка",
		price: 24,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 5,
		category: 4,
	},
                   
	{
		id: 10,
		badge: {
			title: "New",
			bg: "new"	
		},
		image: "/images/10.jpg",
		name: "Килим",
		price: 16,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 0,
		category: 1,
	},
	{
		id: 11,
		badge: {
			title: "Sale",
			bg: "sale"	
		},
		image: "/images/11.jpg",
		name: "Ліжко",
		price: 13,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 5,
		category: 5,
	},

	{
		id: 12,
		badge: {
			title: "New",
			bg: "new"	
		},
		image: "/images/12.jpg",
		name: "Стіл",
		price: 11,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
		stars: 2,
		category: 1,
	},

];



let categories = [
	{
		id: 1,
		image: "https://Viktoriya459.github.io/images/accessories.jpg",
		section: "Аксесуари",
		name: "Аксесуари"
	},
	{
    id: 2,
		name: "Одяг",
		image: "https://Viktoriya459.github.io/images/clothes.jpg",
		section: "Одяг",
	},
	{
		id: 3,
		image: "https://Viktoriya459.github.io/images/shoes.jpg",
		name: "Взуття",
		section: "Взуття"
	},
	{
		id: 4,
		image: "https://Viktoriya459.github.io/images/goods-for-childroom.jpg",
		name: "Для кімнати",
		section: "Для кімнати"
	},
	{
		id: 5,
		image: "https://Viktoriya459.github.io/images/toys.jpg",
		name: "Іграшки",
		section: "Іграшки"
	},

	{
		id: 6,
		image: "https://Viktoriya459.github.io/images/toys.jpg",
		name: "Іграшки",
		section: "Іграшки"
	},
	{
		id: 7,
		image: "https://Viktoriya459.github.io/images/goods-for-childroom.jpg",
		name: "Для кімнати",
		section: "Для кімнати"
	},

	{
		id: 8,
		image: "https://Viktoriya459.github.io/images/shoes.jpg",
		name: "Взуття",
		section: "Взуття"
	},
                      
	{
		id: 9,
		image: "https://Viktoriya459.github.io/images/accessories.jpg",
		section: "Аксесуари",
		name: "Аксесуари"
	},
                   
	{
		id: 10,
		image: "https://Viktoriya459.github.io/images/toys.jpg",
		name: "Іграшки",
		section: "Іграшки"
	},
	{
		id: 11,
		name: "Одяг",
		image: "https://Viktoriya459.github.io/images/clothes.jpg",
		section: "Одяг",
	},

	{
		id: 12,
		image: "https://Viktoriya459.github.io/images/goods-for-childroom.jpg",
		name: "Для кімнати",
		section: "Для кімнати"
	},

];