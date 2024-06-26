var gameRef = {
    'name' : 'Eclipse Phase',
    'id' : "ep",
    'playbooks': {
        'title': 'Playbook',
        'select': 1,
        'list': [
            'Chosen',
            'Expoert',
        ],
    },
    'ratings': {
        'cool': 'Cool is how calm and collected you are. \nIt is added to your die roll for the act \nunder pressure and help out basic moves',
        'tough': 'Tough is how strong and mean you are in a fight. \nIt is added to your die roll for the kick some \nass and protect someone basic moves',
        'charm': 'Charm is how pleasant and persuasive you are. \nIt is added to your die roll for the manipulate \nsomeone basic move',
        'sharp': 'Sharp is how observant you are. \nIt is added to your die roll for the investigate \na mystery and read a bad situation basic moves',
        'weird': 'Weird is how attuned to the supernatural you are. \nIt is added to your die roll for the use magic basic move',
        'arse': 'Arse is how much of an arse you are',
    },
    'moves': [
        { 'name': 'Act Under Pressure', 'rating': 'Cool', 'desc': 'used for any difficult or dangerous action that isn\'t covered by another move' },
        { 'name': 'Help Out', 'rating': 'Cool', 'desc': 'used to help another hunter do something. If you succeed, you\'ll give them a bonus on their task' },
        { 'name': 'Investigate a Mystery', 'rating': 'Sharp', 'desc': 'used to work out what kind of monster you are dealing with, what it can do, and what it\'s planning' },
        { 'name': 'Kick Some Ass', 'rating': 'Tough', 'desc': 'used for fighting. Fighting monsters, mainly' },
        { 'name': 'Manipulate Someone', 'rating': 'Charm', 'desc': 'used to try and get someone to do something for you, after you give them some kind of reason' },
        { 'name': 'Protect Someone', 'rating': 'Tough', 'desc': 'used to save someone from danger' },
        { 'name': 'Read a Bad Situation', 'rating': 'Sharp', 'desc': 'used to work out what dangers are immediately threatening you. For instance, if you think you are walking into a trap, or want to do some tactical analysis' },
        { 'name': 'Use Magic', 'rating': 'Weird', 'desc': 'used to cast magic spells or use enchanted items' },
        { 'name': 'Be an Arse', 'rating': 'Arse', 'desc': 'used to be an arse' },
    ],
}
