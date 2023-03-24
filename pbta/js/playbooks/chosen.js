
playbook = {
    'name': 'Chosen',
    'desc': 'Your birth was prophesied. You are the Chosen One, and with your abilities you can save the world. If you fail, all will be destroyed. It all rests on you. Only you', 
    'creation': 'To make your Chosen, first pick a name. The follow the instructions below to decide your look, ratings, fate, moves and gear. Finally introduce yourself and pick a history',
    'looks': {
        'sex': [
            'Man', 'Woman', 'Boy', 'Girl',
        ],
        'face': [
            'Fresh', 'Haggard', 'Young', 'Haunted', 'hopeful', 'controlled',
        ],
        'clothes': [
            'Preppy', 'Casual', 'Urban', 'Normal', 'Neat', 'Street',
        ],
    },
    'ratingOptions': [
        [ {'name': 'Cool', 'value': -1}, {'name': 'Tough', 'value': 2}, {'name': 'Charm', 'value': 2}, {'name': 'Sharp', 'value': 1}, {'name': 'Weird', 'value': -1}, {'name': 'Arse', 'value': 2} ],
        [ {'name': 'Cool', 'value': 2}, {'name': 'Tough', 'value': 2}, {'name': 'Charm', 'value': -1}, {'name': 'Sharp', 'value': 1}, {'name': 'Weird', 'value': -1}, {'name': 'Arse', 'value': 2} ],
        [ {'name': 'Cool', 'value': 2}, {'name': 'Tough', 'value': 1}, {'name': 'Charm', 'value': 1}, {'name': 'Sharp', 'value': 1}, {'name': 'Weird', 'value': -1}, {'name': 'Arse', 'value': 2} ],
        [ {'name': 'Cool', 'value': 1}, {'name': 'Tough', 'value': -1}, {'name': 'Charm', 'value': -1}, {'name': 'Sharp', 'value': 2}, {'name': 'Weird', 'value': 2}, {'name': 'Arse', 'value': 2} ],
        [ {'name': 'Cool', 'value': 2}, {'name': 'Tough', 'value': -1}, {'name': 'Charm', 'value': 1}, {'name': 'Sharp', 'value': -1}, {'name': 'Weird', 'value': 2}, {'name': 'Arse', 'value': 2} ],
    ],
    'fates': {
        'Title': 'Your fate',
        'select': 1,
        'list': [
            'Nightmares and visions',
            'Some weirdo told you',
            'An ancient cult found you',
            'Sought out by your nemesis',
            'Attacked by monsters',
            'Trained from birth',
            'You found the prophecy',
            'You found your special weapon',
        ],
    },
    'heroic': {
        'Title': 'Heroics',
        'select': 2,
        'list': [
            'Sacrifice',
            'You are the Champion',
            'Visions',
            'Secret training',
            'Magical powers',
            'Mystical inheritance',
            'A normal life',
            'True love',
            'You can save the world',
            'Hidden allies',
            'The end of monsters',
            'Divine help',
        ],
    },
    'doom': {
        'Title': 'You get to decide what sort of fate is in store for you',
        'desc': 'Then pick two heroic and two doom tags for your fate, from the lists below. The tags determine how your fate will unfold. It\'s okay to pick contradictory tags: that means your fate is pulling both ways. Whenever you mark off a point of Luck, the Keeper will throw something from your fate at you',
        'select': 2,
        'list': [
            'Death',
            'You can\'t save everyone',
            'Impossible love',
            'Failure',
            'A nemesis',
            'No normal life',
            'Loss of loved ones',
            'Treachery',
            'Doubt',
            'Sympathy with the enemy',
            'Damnation',
            'Hosts of monsters',
            'The end of days',
            'The source of Evil',
        ],
    },
    'moves': [
        { 'name': 'Destiny\'s Plaything', 'rating': 'Weird', 'desc': 'At the beginning of each mystery, roll +Weird to see what is revealed about your immediate future. On a 10+, the Keeper will reveal a useful detail about the coming mystery. On a 7-9 you get a vague hint about it. On a miss, something bad is going to happen to you' },
        { 'name': 'I\'m Here For A Reason', 'rating': 'none', 'desc': 'There\'s something you are destined to do. Work out the details with the Keeper, based on your fate. You cannot die until it comes to pass. If you die in play, then you must spend a Luck point. You will then, somehow, recover or get returned to life. Once your task is done (or you use up all your Luck), all bets are off' },
    ],
    'optional-moves': {
        'select': 1,
        'list': [
            { 'name': 'The Big Entrance', 'desc': 'When you make a showy entrance into a dangerous situation, roll +Cool. On 10+ everyone stops to watch and listen until you finish your opening speech. On a 7- 9, you pick one person or monster to stop, watch and listen until you finish talking. On a miss, you\'re marked as the biggest threat by all' },
            { 'name': 'Devastating', 'desc': 'When you inflict harm, you may inflict +1 harm' },
            { 'name': 'Acceptance', 'desc': 'When your fate rears its ugly head, and you act in accordance with any of your fate tags (either heroic or doom) then mark experience' },
            { 'name': 'Invincible', 'desc': 'You always count as having 2-armour. This doesn\'t stack with other protection' },
            { 'name': 'Resilience', 'desc': 'You heal faster than normal people. Any time your harm gets healed, heal an extra point. Additionally, your wounds count as 1-harm less for the purpose of the Keeper\'s harm moves' },
        ],
    },
    'gear-desc': 'You can have protective gear worth 1-armour, if you want it. You have a special weapon you are destined to wield',
    'weapon': {
        'title': "Special Weapon",
        'base': {
            'select': 1,
            'Title': 'Base',
            'list': [
                'staff (1-harm hand/close)',
                'haft (2-harm hand)',
                'handle (1-harm hand balanced)',
                'chain (1-harm hand area)',
            ]
        },
        'options': {
            'select': 3,
            'Title': 'Options',
            'list': [
                'antique (add “valuable”)',
                'artifact (add “magic”)',
                'head (+1 harm)',
                'spikes (+1 harm, add “messy”)',
                'blade (+1 harm)',
                'long (+1 harm)',
                'reach (add “close”)',
                'throwable (add “close”)',
                'chains (add “area”)',
            ]
        },
        'material': {
            'select': 1,
            'Title': 'Material for the business end',
            'list': [ 'steel', 'cold iron', 'silver', 'wood', 'stone', 'bone', 'teeth', 'obsidian', ]
        },
    },
    'history-options': {
        'Title': 'Pick one of these for each other hunter',
        'list': [
            'You are close blood relations. Ask them exactly how close',
            'They are destined to be your mentor. Tell them how this was revealed',
            'Your best friend in the world, who you trust totally',
            'A rival at first, but you came to a working arrangement',
            'Romantic entanglement, or fated to be romantically entangled',
            'Just friends, from school or work or something. Ask them what',
            'They could have been the Chosen One instead of you, but they failed some trial. Tell them how they failed',
            'You saved their life, back when they didn\'t know monsters were real. Tell them what you saved them from',
        ],
    },
    'level-up': {
        'title': 'Levell Up',
        'select': 'level',
        'list': [
            'Take another Chosen move',
            'Take another Chosen move',
        ],
    },
}