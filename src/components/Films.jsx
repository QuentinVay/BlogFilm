const films = [
    {
        nom: "Interstellar",
        categorie: "Science-Fiction",
        note: "8.6/10",
        resume: "Interstellar suit une équipe d'astronautes voyageant à travers un trou de ver pour trouver une nouvelle planète habitable pour l'humanité alors que la Terre se meurt.",
        image: "./src/assets/Interstellar.jpg",
        avis: "Interstellar est un voyage épique à travers l'univers, mêlant science-fiction et émotion. Les performances des acteurs sont exceptionnelles, et l'histoire est captivante."
    },
    {
        nom: "The Dark Knight",
        categorie: "Action",
        note: "9.0/10",
        resume: "Dans cette suite de Batman Begins, le Chevalier Noir affronte le Joker, un criminel psychotique, tandis que Gotham City est plongée dans le chaos.",
        image: "src/assets/The dark knight.jpg",
        avis: "The Dark Knight est un chef-d'œuvre du genre. Heath Ledger en Joker est inoubliable, et l'action est intense. Un film de super-héros incontournable."
    },
    {
        nom: "Pan's Labyrinth",
        categorie: "Fantastique",
        note: "8.2/10",
        resume: "Une jeune fille découvre un labyrinthe magique peuplé de créatures fantastiques alors qu'elle vit sous le régime brutal de son beau-père pendant la guerre civile espagnole.",
        image: "src/assets/Labyrinthe de Pan.jpg",
        avis: "Pan's Labyrinth est un conte sombre et envoûtant. Les créatures fantastiques sont magnifiquement réalisées, et l'histoire est émotionnelle et captivante."
    },
    {
        nom: "The Shining",
        categorie: "Horreur",
        note: "8.4/10",
        resume: "Une famille se retrouve isolée dans un hôtel en montagne pendant l'hiver, mais des forces surnaturelles commencent à les tourmenter.",
        image: "src/assets/The Shining.jpg",
        avis: "The Shining est un classique de l'horreur. La tension monte lentement, et Jack Nicholson livre une performance mémorable en devenant de plus en plus fou."
    },
    {
        nom: "Toy Story",
        categorie: "Animation",
        note: "8.3/10",
        resume: "Les jouets de chambre d'un jeune garçon prennent vie lorsqu'il n'est pas là, mais la vie change lorsque le nouveau jouet, Buzz l'Éclair, arrive.",
        image: "src/assets/Toy Story.jpg",
        avis: "Toy Story est un film d'animation révolutionnaire. Il est drôle, émouvant et a marqué l'enfance de nombreuses générations."
    },
    {
        nom: "Mad Max: Fury Road",
        categorie: "Action",
        note: "8.1/10",
        resume: "Dans un monde post-apocalyptique, Max et Furiosa se lancent dans une course folle pour échapper à un tyran despotique.",
        image: "src/assets/MaxMAx.jpg",
        avis: "Mad Max: Fury Road est une expérience visuelle à couper le souffle. L'action est constante, et l'univers post-apocalyptique est incroyablement détaillé."
    },
    {
        nom: "Inception",
        categorie: "Science-Fiction",
        note: "8.8/10",
        resume: "Dom Cobb est un voleur d'information qui pénètre dans les rêves des autres. Il est chargé de réaliser l'inverse - l'inception.",
        image: "src/assets/Inception.jpg",
        avis: "Inception est un film cérébral qui défie l'imagination. Christopher Nolan a créé un chef-d'œuvre de la science-fiction."
    },
    {
        nom: "The Conjuring",
        categorie: "Horreur",
        note: "7.5/10",
        resume: "Les enquêteurs paranormaux Ed et Lorraine Warren sont appelés pour aider une famille hantée par une présence malveillante dans leur nouvelle maison.",
        image: "src/assets/The Conjuring.jpg",
        avis: "The Conjuring offre des moments effrayants et une atmosphère de terreur. Les enquêtes des Warren sont captivantes et inquiétantes."
    },
    {
        nom: "Avatar",
        categorie: "Science-Fiction",
        note: "7.8/10",
        resume: "Sur la planète Pandora, un vétéran de l'armée humaine se lie avec les autochtones Na'vi et devient le héros d'une bataille épique pour la survie de leur monde.",
        image: "src/assets/Avatar.jpg",
        avis: "Avatar est une prouesse visuelle. L'univers de Pandora est magnifique, et l'histoire met en avant des thèmes importants sur l'environnement et la tolérance."
    },
    {
        nom: "Le voyage de Chihiro",
        categorie: "Animation",
        note: "8.6/10",
        resume: "Une jeune fille, Chihiro, se retrouve piégée dans un monde mystérieux rempli de créatures magiques et travaille pour sauver ses parents transformés en porcs.",
        image: "src/assets/Le voyage de Chihiro.jpg",
        avis: "Le voyage de Chihiro est un conte magique rempli d'émotions. Studio Ghibli a créé une œuvre d'art qui plaira aux enfants et aux adultes."
    },
    {
        nom: "Ça",
        categorie: "Horreur",
        note: "7.4/10",
        resume: "Un groupe d'enfants affronte leurs peurs et un sinistre clown, Pennywise, dans la petite ville de Derry, Maine.",
        image: "src/assets/It.jpg",
        avis: "Ça est un film d'horreur terrifiant. L'interprétation de Bill Skarsgård en Pennywise est cauchemardesque, et l'atmosphère est oppressante."
    }
];

export default films