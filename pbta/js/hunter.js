var hunter = {
    'playbooks': {
        'title': 'Playbook',
        'select': 1,
        'list': [
            'Chosen',
            'Expoert',
        ],
    },
    'moves': [
        { 'name': 'Act Under Pressure', 'desc': 'used for any difficult or dangerous action that isn\'t covered by another move' },
        { 'name': 'Help Out', 'desc': 'used to help another hunter do something. If you succeed, you\'ll give them a bonus on their task' },
        { 'name': 'Investigate a Mystery', 'desc': 'used to work out what kind of monster you are dealing with, what it can do, and what it\'s planning' },
        { 'name': 'Kick Some Ass', 'desc': 'used for fighting. Fighting monsters, mainly' },
        { 'name': 'Manipulate Someone', 'desc': 'used to try and get someone to do something for you, after you give them some kind of reason' },
        { 'name': 'Protect Someone', 'desc': 'used to save someone from danger' },
        { 'name': 'Read a Bad Situation', 'desc': 'used to work out what dangers are immediately threatening you. For instance, if you think you are walking into a trap, or want to do some tactical analysis' },
        { 'name': 'Use Magic', 'desc': 'used to cast magic spells or use enchanted items' },
    ],
    'ratings': [
        { 'name': 'Cool', 'desc': 'Cool is how calm and collected you are. It is added to your die roll for the act under pressure and help out basic moves' },
        { 'name': 'Tough', 'desc': 'Tough is how strong and mean you are in a fight. It is added to your die roll for the kick some ass and protect someone basic moves' },
        { 'name': 'Charm', 'desc': 'Charm is how pleasant and persuasive you are. It is added to your die roll for the manipulate someone basic move' },
        { 'name': 'Sharp', 'desc': 'Sharp is how observant you are. It is added to your die roll for the investigate a mystery and read a bad situation basic moves' },
        { 'name': 'Weird', 'desc': 'Weird is how attuned to the supernatural you are. It is added to your die roll for the use magic basic move' },
    ],
    'luck': {
        'title': 'Luck',
        'select': 'none',
        'number': 7,
    },
    'harm': {
        'title': 'Harm',
        'select': 'none',
        'number': 7,
        'unstable': 4,
    },
    'experience': {
        title: 'Experience',
        select: 'none',
        number: 5,
    },
    'level-up': {
        'title': 'Levell Up',
        'select': 'level',
        'list': [
            'Get +1 Charm, max +3',
            'Get +1 Cool, max +3',
            'Get +1 Sharp, max +3',
            'Get +1 Tough, max +3',
            'Get +1 Weird, max +3',
            'Take another Chosen move',
            'Take another Chosen move',
            'Gain an ally',
            'Take a move from another playbook',
            'Take a move from another playbook',
        ],
    },
}