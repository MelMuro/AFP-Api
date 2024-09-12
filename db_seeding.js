db = connect('mongodb://localhost/AFP');

db.dropDatabase();

db.Restaurants.insertMany([
	{
		name: 'Restaurant 1',
		description: 'Some test description',
		category: 'Asian fusion',
		location: 1,
		menu: [
			{
				category: 'plato fuerte',
				name: 'chilaquiles',
				description: 'totopos de maiz con salsa y queso',
				price: 120,
				picture:
					'https://patijinich.com/es/wp-content/uploads/sites/3/2017/07/207-chilaquiles-verdes.jpg',
				isAvailable: true,
				tag: 'enchiloso',
				_id: '123456789',
			},
			{
				category: 'postre',
				name: 'carlota',
				description: 'galletas maria con yogur griego y limon',
				price: 80,
				picture:
					'https://www.gastrolabweb.com/postres/2023/2/14/carlota-de-limon-un-bocado-de-alegria-al-corazon-que-preparas-con-esta-receta-33298.html#&gid=1&pid=1',
				isAvailable: true,
				tag: '',
				_id: '64524312',
			}
		],
		schedule: [
			{
				name: 'Lunes',
				start: '8:00',
				end: '17:00'
			},
			{
				name: 'Martes',
				start: '8:00',
				end: '17:00'
			},
			{
				name: 'Miercoles',
				start: '8:00',
				end: '17:00'
			},
			{
				name: 'Jueves',
				start: '8:00',
				end: '17:00'
			},
			{
				name: 'Viernes',
				start: '8:00',
				end: '17:00'
			},
			{
				name: 'Sabado',
				start: '8:00',
				end: '17:00'
			},
			{
				name: 'Domingo',
				start: '8:00',
				end: '17:00'
			}
		],
		phone: 6621234567,
		email: 'restaurant1@gmail.com',
		media: {
			facebook: 'facebookLink.com',
			instagram: 'instagramLink.com'
		},
		pictures: [
			'https://media-cdn.tripadvisor.com/media/photo-m/1280/26/d1/52/6a/inspirado-en-nuevo-orleans.jpg',
			'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/0b/63/0b/tap-room.jpg?w=1200&h=-1&s=1'
		],
		logo: 'https://img.freepik.com/premium-vector/japan-religion-mount-logo-design-concept_96807-980.jpg'
	},
	{
		name: 'Restaurant 2',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam risus et purus commodo, 
		fermentum interdum velit blandit. Proin vestibulum mauris nec tellus ornare dapibus quis quis nunc.
		 In ut vulputate libero. Sed tristique lobortis pretium. Aenean vitae metus eu lorem ullamcorper pulvinar nec eu nisl. 
		 In interdum, urna nec convallis tempus, ante nunc dictum augue, a sagittis urna tortor ut libero.
		  Donec feugiat interdum tortor, sed accumsan quam. Phasellus vehicula eu erat malesuada rhoncus. 
		  Donec mauris elit, maximus nec hendrerit non, pellentesque nec odio. Donec nec faucibus eros. 
		  Nullam pellentesque faucibus laoreet. Nullam ultrices eros pellentesque varius luctus. 
		  Morbi facilisis ligula eget sem volutpat, sed eleifend odio faucibus.
		   Vivamus at condimentum magna. Sed eleifend dignissim tellus at varius.
		    Vestibulum pulvinar, sem condimentum porta maximus, turpis lectus semper ante, sed finibus odio nibh rhoncus turpis. Quisque ut nulla interdum, fringilla nulla et, sodales lorem.`,
		category: 'Asian fusion',
		location: 2,
		menu:
			[
				{
					category: 'plato fuerte',
					name: 'Espaguetti',
					description: 'Prepara un delicioso ESPAGUETI ROJO con la cremosidad y practicidad de Media Crema y comparte en tus comidas con familia ¡Les encantará!.',
					price: 330,
					picture:
						'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600',
					isAvailable: true,
					tag: 'enchiloso',
					_id: '4568978'
				},
				{
					category: 'entrada',
					name: 'frutas',
					description: 'berrys almendras, sandia, piña con yogurt',
					price: 120,
					picture:
						'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600',
					isAvailable: true,
					tag: 'saludable',
					_id: '6889745',
				},
				{
					category: 'Bebida',
					name: 'Sake',
					description: 'Sake is an alcoholic beverage made from rice through fermentation and filtration. For fermentation of sake, rice koji, a kind of fungi grown on rice, is used. Sake has been made for over 1,000 years all over the Japanese islands.',
					price: 80,
					picture:
						'https://images.pexels.com/photos/18198515/pexels-photo-18198515/free-photo-of-taza-copa-mesa-naturaleza-muerta.jpeg?auto=compress&cs=tinysrgb&w=600',
					isAvailable: false,
					tag: 'alcohol',
					_id: '4564151546',
				}
			],

		schedule: [
			{
				name: 'Lunes',
				start: '8:00',
				end: '17:00'
			},
			{
				name: 'Martes',
				start: '8:00',
				end: '17:00'
			},
			{
				name: 'Miercoles',
				start: '8:00',
				end: '17:00'
			},
			{
				name: 'Jueves',
				start: '8:00',
				end: '17:00'
			},
			{
				name: 'Viernes',
				start: '8:00',
				end: '16:15'
			},
			{
				name: 'Sabado',
				start: '8:00',
				end: '17:00'
			},
			{
				name: 'Domingo',
				start: '8:00',
				end: '17:00'
			}
		],
		phone: 6626598648,
		email: 'restaurant_2@hotmail.com',
		media: {
			facebook: 'facebookLink.com',
			instagram: 'instagramLink.com'
		},
		pictures: [
			'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600',
			'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=600',
			'https://images.pexels.com/photos/784633/pexels-photo-784633.jpeg?auto=compress&cs=tinysrgb&w=600',
			'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600'
		],
		logo: 'https://images.pexels.com/photos/176837/pexels-photo-176837.jpeg?auto=compress&cs=tinysrgb&w=600'
	},
	{
		name: 'Restaurant 3',
		description: 'Restuarante de lujo',
		category: 'Chinese',
		location: 3,
		menu: [
			{
				category: 'palto fuerte',
				name: 'Hamburguesa gourmet',
				description: 'Pieza de carne picada aplastada y con forma redondeada, mezclada con diversos ingredientes, que se hace a la plancha, a la parrilla o frita.',
				price: 150,
				picture:
					'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600',
				isAvailable: true,
				tag: 'carne',
				_id: '1568415',
			},
			{
				category: 'postre',
				name: 'cheescake',
				description: 'Cheescake de leche de codornis amarilla',
				price: 260,
				picture:
					'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600',
				isAvailable: false,
				tag: 'carne',
				_id: '48948454',
			},
			{
				category: 'Bebida',
				name: 'Piña colada',
				description: 'Alcohon con jugo de piña',
				price: 50,
				picture:
					'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=600',
				isAvailable: true,
				tag: 'alcohol',
				_id: '1568789',
			}
		],
		schedule: [
			{
				name: 'Lunes',
				start: '9:00',
				end: '16:30'
			},
			{
				name: 'Martes',
				start: '10:00',
				end: '17:00'
			},
			{
				name: 'Miercoles',
				start: '',
				end: ''
			},
			{
				name: 'Jueves',
				start: '8:00',
				end: '17:00'
			},
			{
				name: 'Viernes',
				start: '7:00',
				end: '16:00'
			},
			{
				name: 'Sabado',
				start: '12:00',
				end: '17:00'
			},
			{
				name: 'Domingo',
				start: '10:00',
				end: '14:00'
			}
		],
		phone: 6626265895,
		email: 'restaurant.3@mail.com',
		media: {
			facebook: 'facebookLink.com',
			instagram: 'instagramLink.com'
		},
		pictures: [
			'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
			'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=600',
			'https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg?auto=compress&cs=tinysrgb&w=600'
		],
		logo: 'https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&w=600'
	},
	{
		name: 'Restaurant 4',
		description: 'Restaurant 4 description',
		category: 'Japanese',
		location: 4,
		menu: [
			{
				category: 'Postre',
				name: 'Macarrones',
				description: 'Galletas redondas hechas de almendras molidas, azúcar glas y claras de huevo',
				price: 500,
				picture:
					'https://images.pexels.com/photos/239581/pexels-photo-239581.jpeg?auto=compress&cs=tinysrgb&w=600',
				isAvailable: true,
				tag: 'postre',
				_id: '18548978',
			},
			{
				category: 'entrada',
				name: 'Ensalada verde',
				description: 'Plato preparado con una o varias hortalizas, gralm . crudas, y aderezado básicamente con aceite, vinagre y sal.',
				price: 60,
				picture:
					'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=600',
				isAvailable: true,
				tag: 'saludable',
				_id: '35424878',
			},
			{
				category: 'entrada',
				name: 'Tocino con pollo',
				description: 'Rollos de pollo enrollados en tocino',
				price: 90,
				picture:
					'https://images.pexels.com/photos/416471/pexels-photo-416471.jpeg?auto=compress&cs=tinysrgb&w=600',
				isAvailable: true,
				tag: 'carne',
				_id: '8487687',
			}
		],
		schedule: [
			{
				name: 'Lunes',
				start: '8:00',
				end: '17:00'
			},
			{
				name: 'Martes',
				start: '8:00',
				end: '17:00'
			},
			{
				name: 'Miercoles',
				start: '8:30',
				end: '17:00'
			},
			{
				name: 'Jueves',
				start: '8:00',
				end: '12:00'
			},
			{
				name: 'Viernes',
				start: '8:15',
				end: '16:50'
			},
			{
				name: 'Sabado',
				start: '9:00',
				end: '17:00'
			},
			{
				name: 'Domingo',
				start: '8:00',
				end: '17:00'
			}
		],
		phone: 66265887878,
		email: 'restaurant4@gmail.com',
		media: {
			facebook: 'facebookLink.com',
			instagram: 'instagramLink.com'
		},
		pictures: [
			'https://images.pexels.com/photos/262918/pexels-photo-262918.jpeg?auto=compress&cs=tinysrgb&w=600'
		],
		logo: 'https://images.pexels.com/photos/1111371/pexels-photo-1111371.jpeg?auto=compress&cs=tinysrgb&w=600'
	},
	{
		name: 'Restaurant 5',
		description: `Ut placerat auctor mauris sit amet maximus. In viverra mattis consequat. 
		Fusce egestas elit quis orci commodo elementum. Pellentesque et laoreet mi. 
		Nulla turpis quam, tempus gravida dolor ultrices, consectetur aliquet augue. 
		Curabitur tempor hendrerit justo eu tincidunt. Sed efficitur ut odio sit amet semper. 
		Nunc odio urna, congue a mauris eu, feugiat posuere tortor. Nullam vulputate maximus magna quis pellentesque. 
		Vivamus ut purus non felis sollicitudin viverra. Vivamus egestas dictum ex, ac congue tortor ultricies vel. 
		Suspendisse pharetra, leo dictum laoreet tristique, tortor mi semper magna, id pharetra erat massa a sapien. 
		Pellentesque scelerisque turpis lorem, a convallis erat venenatis sed. Vestibulum lacinia ac arcu et eleifend. 
		Fusce non nisi et eros viverra mollis in et lectus.`,
		category: 'Fast food',
		location: 5,
		menu: [
			{
				category: 'plato fuerte',
				name: 'Emparedado de pollo',
				description: 'Emparedado de pollo con salsas',
				price: 250,
				picture:
					'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=600',
				isAvailable: true,
				tag: 'sandwish',
				_id: '514988419',
			},
			{
				category: 'plato fuerte',
				name: 'Hamburguesa de pollo',
				description: 'Deliciosa hamburguesa con pechuga de pollo y papas',
				price: 140,
				picture:
					'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600',
				isAvailable: true,
				tag: 'carne',
				_id: '15687486',
			},
			{
				category: 'plato fuerte',
				name: 'Ramen de cerdo',
				description: 'Ramen con caldo de cerdo y chuleta en trozos',
				price: 860,
				picture:
					'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600',
				isAvailable: true,
				tag: 'ramen',
				_id: '9965458',
			},
			{
				category: 'bebidas',
				name: 'Smoothie',
				description: 'Esta bebida conjuga frutas o verduras y una base líquida',
				price: 170,
				picture:
					'https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=600',
				isAvailable: false,
				tag: 'bebida',
				_id: '159774',
			}
		],
		schedule: [
			{
				name: 'Lunes',
				start: '8:40',
				end: '15:20'
			},
			{
				name: 'Martes',
				start: '8:00',
				end: '17:00'
			},
			{
				name: 'Miercoles',
				start: '8:00',
				end: '17:00'
			},
			{
				name: 'Jueves',
				start: '8:00',
				end: '17:00'
			},
			{
				name: 'Viernes',
				start: '13:00',
				end: '17:00'
			},
			{
				name: 'Sabado',
				start: '11:00',
				end: '14:00'
			},
			{
				name: 'Domingo',
				start: '8:00',
				end: '12:30'
			}
		],
		phone: 6621234567,
		email: 'restaurant.5@gmail.com',
		media: {
			facebook: 'facebookLink.com',
			instagram: 'instagramLink.com'
		},
		pictures: [
			'https://images.pexels.com/photos/750843/pexels-photo-750843.jpeg?auto=compress&cs=tinysrgb&w=600',
			'https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=600',
			'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=600'
		],
		logo: 'https://images.pexels.com/photos/170809/pexels-photo-170809.jpeg?auto=compress&cs=tinysrgb&w=600'
	}
]);
