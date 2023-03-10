var playbook = {
    'desc': 'I have dedicated my life to the study of the unnatural. I know their habits, their weaknesses. I may not be youngest or strongest, but I know enough to be the biggest threat', 
    'creation': 'To make your Expoert, first pick a name. The follow the instructions below to decide your look, ratings, fate, moves and gear. Finally introduce yourself and pick a history',
    'look': {
        'sex': [
            'Man', 'Woman',
        ],
        'face': [
            'Thoughtful', 'Lined', 'Scarred', 'Avuncular', 'Experienced',
        ],
        'clothes': [
            'Old fashioned', 'Casual', 'Utility', 'Tailored', 'Outdoor',
        ],
    },
    'ratingOptions': [
        [ {'name': 'Cool', 'value': 1}, {'name': 'Tough', 'value': 1}, {'name': 'Charm', 'value': -1}, {'name': 'Sharp', 'value': 2}, {'name': 'Weird', 'value': 0} ],
        [ {'name': 'Cool', 'value': 1}, {'name': 'Tough', 'value': -1}, {'name': 'Charm', 'value': 0}, {'name': 'Sharp', 'value': 2}, {'name': 'Weird', 'value': 1} ],
        [ {'name': 'Cool', 'value': -1}, {'name': 'Tough', 'value': 1}, {'name': 'Charm', 'value': 1}, {'name': 'Sharp', 'value': 2}, {'name': 'Weird', 'value': 0} ],
        [ {'name': 'Cool', 'value': 1}, {'name': 'Tough', 'value': 0}, {'name': 'Charm', 'value': -1}, {'name': 'Sharp', 'value': 2}, {'name': 'Weird', 'value': 1} ],
        [ {'name': 'Cool', 'value': 0}, {'name': 'Tough', 'value': -1}, {'name': 'Charm', 'value': -1}, {'name': 'Sharp', 'value': 2}, {'name': 'Weird', 'value': 2} ],
    ],
    'moves': [
    ],
    'optional-moves': {
        'select': 2,
        'list': [
            { 'name': 'I\'ve Read About This Sort Of Thing', 'desc': 'Roll +Sharp instead of +Cool when you act under pressure' },
            { 'name': 'Often Right', 'desc': 'When a hunter comes to you for advice about a problem, give them your honest opinion and advice. If they take your advice, they get +1 ongoing while following your advice, and you mark experience' },
            { 'name': 'Preparedness', 'desc': 'When you need something unusual or rare, roll +Sharp. On a 10+, you have it here right now. On a 7-9 you have it, but not here: it will take some time to get it. On a miss, you know where it is, but it\'s somewhere real bad' },
            { 'name': 'It Wasn\'t As Bad As It Looked', 'desc': 'Once per mystery, you may attempt to keep going despite your injuries. Roll +Cool. On a 10+, heal 2 harm and stabilize your wounds. On a 7-9 you may either stabilize or heal 1 harm. On a miss, it was worse than it looked' },
            { 'name': 'Precise Strike', 'desc': 'When you inflict harm on a monster, you can aim for a weak spot. Roll +Tough. On a 10+ you inflict +2 harm. On a 7-9 you inflict +1 harm. On a miss, you leave yourself open for the monster to hit you' },
            { 'name': 'The Woman (or Man) With The Plan', 'desc': 'At the beginning of each mystery, roll +Sharp. On a 10+ hold 2, on a 7-9 hold 1. Spend the hold to be where you need to be, prepared and ready. On a miss, the Keeper holds 1 they can spend to have you be in the wrong place, unprepared and unready' },
            { 'name': 'Dark Past', 'desc': 'You dabbled in the worst sort of mystical arts before you became one of the good guys. If you trawl through your memories for something relevant to the case at hand, roll +Weird. On a 10+ ask the Keeper two questions from the list below. On a 7-9 ask one. On a miss, you can ask a question anyway but that means you were personally complicit in creating the situation you are dealing with now. The questions are: When I dealt with this creature (or one of its kind), what did I learn?, What black magic do I know that could help here?, Do I know anyone who might be behind this?, Who do I know who can help us right now?' },
        ],
    },
    'gear-desc': 'You get three monster-slaying weapons',
    'weapon': {
        'title': "Monster-slaying weapons (pick three)",
        'select': 3,
        'list': [
            'Mallet & wooden stakes (3-harm intimate slow wooden)',
            'Silver sword (2-harm hand messy silver)',
            'Cold iron sword (2-harm hand messy iron)',
            'Blessed knife (2-harm hand holy)',
            'Magical dagger (2-harm hand magic)',
            'Juju bag (1-harm far magic)',
            'Flamethrower (3-harm close fire heavy volatile)',
            'Magnum (3-harm close reload loud)',
            'Shotgun (3-harm close messy loud)',
        ]
    },
    'history-options': {
        'Title': 'Pick one of these for each other hunter',
        'list': [
            'They are your student, apprentice, ward, or child. Decide between you which',
            'They came to you for advice, and your advice got them out of trouble. Ask them what the trouble was',
            'They know about some of your dark secrets, but they\'ve agreed to keep quiet about them. Tell them what they know',
            'A distant relation. Tell them exactly what',
            'You were previously both members of an eldritch group, now disbanded. Ask them why they left, then tell them why you did',
            'They once helped you get a singular item that is now part of your haven. Tell them what it was',
            'You were taught by the same master. Ask them how it ended',
            'You saved their life in a tight spot. Tell them what happened',
        ],
    },
    'level-up': {
        'title': 'Levell Up',
        'select': 'level',
        'list': [
            'Take another Expert move',
            'Take another Expert move',
        ],
    },
}