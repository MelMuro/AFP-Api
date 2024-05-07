db = connect('mongodb://localhost/AFP');

db.dropDatabase();

db.Restaurants.insertMany([{
    "name": "Restaurant 1",
    "description": "Some test description",
    "category": "Asian fusion",
    "location": 1,
    "schedule": {
        "monday": "8:00 - 17:00",
        "tuesday": "8:00 - 17:00",
        "wednesday": "8:00 - 17:00",
        "thursday": "8:00 - 17:00",
        "friday": "8:00 - 17:00",
        "saturday": "8:00 - 17:00",
        "sunday": "8:00 - 17:00"
    },
    "phone": 6621234567,
    "email": "restaurant@mail.com",
    "media": ["facebookLink.com", "instagramLink.com"],
    "pictures": [
        "https://media-cdn.tripadvisor.com/media/photo-m/1280/26/d1/52/6a/inspirado-en-nuevo-orleans.jpg", 
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/0b/63/0b/tap-room.jpg?w=1200&h=-1&s=1"
    ]
},
{
    "name": "Restaurant 2",
    "description": "Another test description",
    "category": "Chinese",
    "location": 2,
    "schedule": {
      "monday": "8:00 - 17:00",
      "tuesday": "8:00 - 17:00",
      "wednesday": "8:00 - 17:00",
      "thursday": "8:00 - 17:00",
      "friday": "8:00 - 17:00",
      "saturday": "8:00 - 17:00",
      "sunday": "8:00 - 17:00"
    },
    "phone": 6621234567,
    "email": "restaurant@mail.com",
    "media": [
      "facebookLink.com",
      "instagramLink.com"
    ],
    "pictures": [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/23/39/11/delicioso.jpg?w=1200&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/21/b0/0b/la-mejor-experiencia.jpg?w=1200&h=-1&s=1"
    ]
  }]);

db.Menus.insertOne({
    "restaurant": "Restaurant 1",
    "dishes": [
        {
            "category": "plato fuerte",
            "name": "chilaquiles",
            "description": "totopos de maiz con salsa y queso",
            "price": 120,
            "picture": "https://patijinich.com/es/wp-content/uploads/sites/3/2017/07/207-chilaquiles-verdes.jpg",
            "isAvailable": true,
            "tag": 'enchiloso'
        },
        {
            "category": "postre",
            "name": "carlota", 
            "description": "galletas maria con yogur griego y limon",
            "price": 80,
            "picture": "https://www.gastrolabweb.com/postres/2023/2/14/carlota-de-limon-un-bocado-de-alegria-al-corazon-que-preparas-con-esta-receta-33298.html#&gid=1&pid=1",
            "isAvailable": true,
            "tag": ''
        }
    ]
});