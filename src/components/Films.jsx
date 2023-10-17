const films = [
    {
        nom: "Interstellar",
        categorie: "Science-Fiction",
        note: "8.6/10",
        resume: "Interstellar suit une équipe d'astronautes voyageant à travers un trou de ver pour trouver une nouvelle planète habitable pour l'humanité alors que la Terre se meurt.",
        image: "./src/assets/Interstellar.jpg",
        avis: "Interstellar est un voyage épique à travers l'univers, mêlant science-fiction et émotion. Les performances des acteurs, en particulier Matthew McConaughey et Anne Hathaway, sont exceptionnelles, et l'histoire est captivante. Ce film ne se contente pas d'explorer les concepts de la relativité et de l'amour, il les interprète d'une manière visuellement époustouflante. La réalisation de Christopher Nolan est remarquable, et l'accompagnement musical de Hans Zimmer est hypnotique. Interstellar vous emporte littéralement à travers un trou de ver et vous laisse réfléchir longtemps après le générique de fin. Un chef-d'œuvre de la science-fiction."
    },
    {
        nom: "The Dark Knight",
        categorie: "Action",
        note: "9.0/10",
        resume: "Dans cette suite de Batman Begins, le Chevalier Noir affronte le Joker, un criminel psychotique, tandis que Gotham City est plongée dans le chaos.",
        image: "src/assets/The dark knight.jpg",
        avis: "The Dark Knight est bien plus qu'un simple film de super-héros. Il transcende le genre pour devenir un drame psychologique intense. Heath Ledger en Joker est inoubliable, créant l'un des méchants les plus mémorables de l'histoire du cinéma. L'atmosphère sombre et la tension qui imprègnent tout le film sont palpitantes. Christian Bale incarne un Batman tourmenté et complexe. Christopher Nolan a créé un film qui questionne la nature du bien et du mal tout en offrant une action passionnante. Une œuvre incontournable pour les cinéphiles."
    },
    {
        nom: "Pan's Labyrinth",
        categorie: "Fantastique",
        note: "8.2/10",
        resume: "Une jeune fille découvre un labyrinthe magique peuplé de créatures fantastiques alors qu'elle vit sous le régime brutal de son beau-père pendant la guerre civile espagnole.",
        image: "src/assets/Labyrinthe de Pan.jpg",
        avis: "Pan's Labyrinth est un conte sombre et envoûtant qui transcende les frontières du fantastique. Guillermo del Toro nous emmène dans un monde magique et terrifiant pendant la guerre civile espagnole. Les créatures fantastiques, conçues avec une attention méticuleuse aux détails, sont à la fois fascinantes et effrayantes. L'histoire, centrée sur une jeune fille cherchant échappatoire à un monde brutal, est émotionnelle et captivante. Ce film est une œuvre d'art visuelle et narrative qui vous hantera bien après avoir quitté le cinéma. Un chef-d'œuvre du cinéma fantastique."
    },
    {
        nom: "The Shining",
        categorie: "Horreur",
        note: "8.4/10",
        resume: "Une famille se retrouve isolée dans un hôtel en montagne pendant l'hiver, mais des forces surnaturelles commencent à les tourmenter.",
        image: "src/assets/The Shining.jpg",
        avis: "The Shining est un classique de l'horreur. La tension monte lentement, et Jack Nicholson livre une performance mémorable en devenant de plus en plus fou. Stanley Kubrick a créé un chef-d'œuvre de l'horreur psychologique qui continue de hanter les rêves des spectateurs. Chaque détail de l'hôtel Overlook et chaque moment de folie de Jack Torrance sont inoubliables. Un film qui vous laissera sans voix."
    },
    {
        nom: "Toy Story",
        categorie: "Animation",
        note: "8.3/10",
        resume: "Les jouets de chambre d'un jeune garçon prennent vie lorsqu'il n'est pas là, mais la vie change lorsque le nouveau jouet, Buzz l'Éclair, arrive.",
        image: "src/assets/Toy Story.jpg",
        avis: "Toy Story est un film d'animation révolutionnaire. Il est drôle, émouvant et a marqué l'enfance de nombreuses générations. L'innovation technologique de Pixar a ouvert la voie à une nouvelle ère de l'animation. L'histoire de l'amitié entre Woody et Buzz est touchante, et les personnages sont attachants. Un film qui traverse les générations avec succès."
    },
    {
        nom: "Mad Max: Fury Road",
        categorie: "Action",
        note: "8.1/10",
        resume: "Dans un monde post-apocalyptique, Max et Furiosa se lancent dans une course folle pour échapper à un tyran despotique.",
        image: "src/assets/MaxMAx.jpg",
        avis: "Mad Max: Fury Road est une expérience visuelle à couper le souffle. L'action est constante, et l'univers post-apocalyptique est incroyablement détaillé. George Miller a créé un chef-d'œuvre de l'action post-apocalyptique, avec des cascades à couper le souffle. Charlize Theron en Furiosa est une héroïne inoubliable. Un film qui vous emporte dans un désert de folie et de destruction."
    },
    {
        nom: "Inception",
        categorie: "Science-Fiction",
        note: "8.8/10",
        resume: "Dom Cobb est un voleur d'information qui pénètre dans les rêves des autres. Il est chargé de réaliser l'inverse - l'inception.",
        image: "src/assets/Inception.jpg",
        avis: "Inception est un film cérébral qui défie l'imagination. Christopher Nolan a créé un chef-d'œuvre de la science-fiction. L'idée de naviguer dans les rêves et de semer une idée dans l'esprit d'une personne est captivante. Leonardo DiCaprio livre une performance exceptionnelle en tant que Dom Cobb. Les effets visuels sont époustouflants, en particulier la scène de la rue pliée. Un film qui vous fera remettre en question la réalité."
    },
    {
        nom: "The Conjuring",
        categorie: "Horreur",
        note: "7.5/10",
        resume: "Les enquêteurs paranormaux Ed et Lorraine Warren sont appelés pour aider une famille hantée par une présence malveillante dans leur nouvelle maison.",
        image: "src/assets/The Conjuring.jpg",
        avis: "The Conjuring offre des moments effrayants et une atmosphère de terreur. Les enquêtes des Warren sont captivantes et inquiétantes. James Wan a créé un film d'horreur qui s'appuie sur la tension et le suspense plutôt que sur les sauts à bon escient. Les acteurs, Vera Farmiga et Patrick Wilson en tête, apportent de la crédibilité aux personnages des Warren. Le film est basé sur des événements réels, ce qui ajoute une dimension encore plus effrayante. Si vous aimez les histoires de fantômes et les films d'horreur classiques, The Conjuring est un incontournable."
    },
    {
        nom: "Avatar",
        categorie: "Science-Fiction",
        note: "7.8/10",
        resume: "Sur la planète Pandora, un vétéran de l'armée humaine se lie avec les autochtones Na'vi et devient le héros d'une bataille épique pour la survie de leur monde.",
        image: "src/assets/Avatar.jpg",
        avis: "Avatar est une prouesse visuelle. L'univers de Pandora est magnifique, et l'histoire met en avant des thèmes importants sur l'environnement et la tolérance. James Cameron a créé un monde extraterrestre fascinant, et les effets spéciaux repoussent les limites de ce qui est possible au cinéma. L'histoire de Jake Sully est une aventure épique qui vous transporte dans une autre planète."

    },
    {
        nom: "Le voyage de Chihiro",
        categorie: "Animation",
        note: "8.6/10",
        resume: "Une jeune fille, Chihiro, se retrouve piégée dans un monde mystérieux rempli de créatures magiques et travaille pour sauver ses parents transformés en porcs.",
        image: "src/assets/Le voyage de Chihiro.jpg",
        avis: "Le voyage de Chihiro est un conte magique rempli d'émotions. Studio Ghibli a créé une œuvre d'art qui plaira aux enfants et aux adultes. L'univers de Miyazaki est à la fois fantastique et poignant. L'histoire de Chihiro est une aventure initiatique qui explore la résilience et la découverte de soi. Les créatures du monde de l'esprit sont étonnantes, et la musique de Joe Hisaishi ajoute une dimension supplémentaire à cette expérience cinématographique."

    },
    {
        nom: "Ça",
        categorie: "Horreur",
        note: "7.4/10",
        resume: "Un groupe d'enfants affronte leurs peurs et un sinistre clown, Pennywise, dans la petite ville de Derry, Maine.",
        image: "src/assets/It.jpg",
        avis: "Ça est un film d'horreur terrifiant. L'interprétation de Bill Skarsgård en Pennywise est cauchemardesque, et l'atmosphère est oppressante. Andrés Muschietti a su capturer l'essence de l'histoire de Stephen King. Les liens entre les membres du Club des Ratés sont touchants, et le film explore les traumatismes de l'enfance de manière poignante. Une adaptation qui donne vie aux cauchemars de Derry."

    },
    {
        nom: "Maman, j'ai raté l'avion",
        categorie: "Comédie",
        note: "7.5/10",
        resume: "Un jeune garçon est oublié à la maison pendant les vacances de Noël et doit défendre sa maison contre des cambrioleurs.",
        image: "src/assets/maman rate avion.jpg",
        avis: "Maman, j'ai raté l'avion est un classique de Noël rempli de comédie et d'aventure. Les pièges mis en place par le jeune Kevin sont mémorables. John Hughes a créé une comédie familiale hilarante et émouvante. Macaulay Culkin en Kevin est irrésistible, et les cambrioleurs, Marv et Harry, apportent des moments comiques mémorables. Ce film capture l'esprit des fêtes de manière inoubliable."

    },
    {
        nom: "Le Grinch",
        categorie: "Comédie",
        note: "6.3/10",
        resume: "Le Grinch, une créature verte grincheuse, tente de voler Noël aux habitants de Whoville, mais découvre finalement la véritable signification de la fête.",
        image: "src/assets/Grinch.jpg",
        avis: "Le Grinch est une histoire de Noël pleine de chaleur et de rédemption. L'animation est charmante, et le Grinch est un personnage mémorable. Le film nous rappelle l'importance de la générosité et de la joie de vivre pendant les fêtes. La transformation du Grinch est touchante, et l'humour apporte des éclats de rire. Une histoire intemporelle qui réchauffe le cœur."

    },
    {
        nom: "Le Père Noël est une ordure",
        categorie: "Comédie",
        note: "7.7/10",
        resume: "Les employés d'une permanence téléphonique caritative pendant les fêtes de Noël sont confrontés à une série de catastrophes hilarantes.",
        image: "src/assets/pere noel ordure.jpg",
        avis: "Le Père Noël est une ordure est une comédie culte de Noël. Les personnages excentriques et les situations loufoques en font un film incontournable pour les fêtes. Chaque année, ce film apporte des éclats de rire avec les péripéties absurdes des employés de la permanence téléphonique. Les acteurs, notamment Thierry Lhermitte et Josiane Balasko, offrent des performances hilarantes. Le film est un mélange de comédie noire et de satire sociale qui continue de faire rire les spectateurs depuis des décennies. Une tradition incontournable pour les fêtes de fin d'année."

    },
];

export default films