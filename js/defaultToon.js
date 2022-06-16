var defaultToon = {
    'basics': {
        'handle': 'Xan',
        'name': 'Xanadune',
        'player': 'Rob M',
        'background': 'Hyperelite',
        'career': 'Hacker',
        'interests': 'Fighter',
        'faction': 'Criminal',
        'languages': {'base': ['English', 'Japanese'], 'cp-langs': [] }
    },
    'motivations': ['+ Criminal Interests', '+ Anarchist', '+ One big hack'],
    'base': {'CP': 20, 'MP': 6, 'GP': 20},
    'aptitudes': {
        'cog': {
            'base': 20,
            'cp-adj': 5,
        },
        'int': {
            'base': 10,
            'cp-adj': 0,
        },
        'ref': {
            'base': 25,
            'cp-adj': 0,
        },
        'sav': {
            'base': 10,
            'cp-adj': 0,
        },
        'som': {
            'base': 10,
            'cp-adj': 0,
        },
        'wil': {
            'base': 15,
            'cp-adj': 0,
        }
    },
    'skills': {
        'athletics (+30)': {
            'base': 10,
            'cp-adj': 0,
            'aptitude': 'som'
        },
        'deceive': {
            'base': 0,
            'cp-adj': 10,
            'aptitude': 'sav'
        },
        'exotic': {
            'base': 0,
            'cp-adj': 0,
            'aptitude': '-',
            'field': '-'
        },
        'fray': {
            'base': 30,
            'cp-adj': 0,
            'aptitude': 'ref'
        },
        'freefall': {
            'base': 0,
            'cp-adj': 0,
            'aptitude': 'som'
        },
        'guns': {
            'base': 55,
            'cp-adj': 0,
            'aptitude': 'ref'
        },
        'hardware': {
            'base': 45,
            'cp-adj': 0,
            'aptitude': 'cog',
            'field': 'Electronics'
        },
        'infiltrate (+10)(+10)': {
            'base': 55,
            'cp-adj': 0,
            'aptitude': 'ref'
        },
        'infosec': {
            'base': 55,
            'cp-adj': 00,
            'aptitude': 'cog'
        },
        'interface': {
            'base': 55,
            'cp-adj': 0,
            'aptitude': 'cog'
        },
        'kinesics': {
            'base': 0,
            'cp-adj': 0,
            'aptitude': 'sav'
        },
        'medicine': {
            'base': 0,
            'cp-adj': 0,
            'aptitude': 'cog',
            'field': '-'
        },
        'melee': {
            'base': 0,
            'cp-adj': 0,
            'aptitude': 'som'
        },
        'perceive': {
            'base': 10,
            'cp-adj': 50,
            'aptitude': 'int'
        },
        'persuade': {
            'base': 0,
            'cp-adj': 0,
            'aptitude': 'sav'
        },
        'pilot': {
            'base': 0,
            'cp-adj': 0,
            'aptitude': 'ref',
            'field': '-'
        },
        'program': {
            'base': 55,
            'cp-adj': 0,
            'aptitude': 'cog'
        },
        'provoke': {
            'base': 0,
            'cp-adj': 0,
            'aptitude': 'sav'
        },
        'psi': {
            'base': 0,
            'cp-adj': 0,
            'aptitude': 'wil'
        },
        'research': {
            'base': 30,
            'cp-adj': 0,
            'aptitude': 'int'
        },
        'survival': {
            'base': 0,
            'cp-adj': 0,
            'aptitude': 'int'
        },
        'know-1': {
            'base': 50,
            'cp-adj': 0,
            'aptitude': 'cog',
            'field': 'Computer Science'
        },
        'know-2': {
            'base': 50,
            'cp-adj': 0,
            'aptitude': 'cog',
            'field': 'Cryptography'
        },
        'know-3': {
            'base': 50,
            'cp-adj': 0,
            'aptitude': 'cog',
            'field': 'Network Eng'
        },
        'know-4': {
            'base': 50,
            'cp-adj': 0,
            'aptitude': 'cog',
            'field': 'Sys Admin'
        },
        'know-5': {
            'base': 50,
            'cp-adj': 0,
            'aptitude': 'cog',
            'field': 'Security Ops'
        },
        'know-6': {
            'base': 10,
            'cp-adj': 0,
            'aptitude': 'cog',
            'field': 'Criminal'
        }

    },
    'pools': {
        'vigor': {
            'base': 0,
            'cp-adj': 0
        },
        'insight': {
            'base': 0,
            'cp-adj': 0
        },
        'moxie': {
            'base': 0,
            'cp-adj': 0
        },
        'flex': {
            'base': 1,
            'cp-adj': 1
        }
    },
    'rep': {
        '@-rep': { 'base': 0, 'cp-adj': 0, 'fake': 0 },
        'c-rep': { 'base': 0, 'cp-adj': 0, 'fake': 10 },
        'f-rep': { 'base': 0, 'cp-adj': 0, 'fake': 0 },
        'g-rep': { 'base': 40, 'cp-adj': 0, 'fake': 0 },
        'i-rep': { 'base': 60, 'cp-adj': 0, 'fake': 0 },
        'r-rep': { 'base': 0, 'cp-adj': 0, 'fake': 0 },
        'x-rep': { 'base': 0, 'cp-adj': 0, 'fake': 0 }
    },
    'traits': [
        {
            'trait': 'Adjusted Memory', 
            'desc': 'Given by GM as -ve trait',
            'cp-adj': -1,
            'resources-lvl': 0 
        },
        {
            'trait': 'Resources', 
            'desc': 'Wealth to acquire gear, 3mp 3gp, 5gp/week',
            'cp-adj': 6,
            'resources-lvl': 3 
        }
    ],
    'gear': [
        { 'gear': 'Anonymizer',	'complexity': 'Min/1', 'gp-cost': 1, 'desc': 'Masks your mesh ID', 'src': 'Firewall Pack', 'qty': 1 },
        { 'gear': 'Fake Ego ID',	'complexity': 'Maj/R/3', 'gp-cost': 0, 'desc': 'Forged ID and back history, with its own rep scores', 'src': 'Firewall Pack', 'qty': 1 },
        { 'gear': 'Smart Clothing',	'complexity': 'Min/1', 'gp-cost': 1, 'desc': 'Can change colour, texture and cut. +10 Infiltrate, +30 covered and stationary', 'src': 'Firewall Pack', 'qty': 1 },
        { 'gear': 'TacNet App',	'complexity': 'Mod/2', 'gp-cost': 2, 'desc': 'Share tactical data in real time', 'src': 'Firewall Pack', 'qty': 1 },
        { 'gear': 'VPN App',	'complexity': 'Min/1', 'gp-cost': 1, 'desc': 'Create virtual private network (-30 sniffing)', 'src': 'Firewall Pack', 'qty': 1 },
        { 'gear': 'Exploit App',	'complexity': 'Mod/R/2', 'gp-cost': 2, 'desc': 'A hacker library/tool for taking advantage of known software vulnerabilities. Required for hacking', 'src': '', 'qty': 1 },
        { 'gear': 'Spoofer App',	'complexity': 'Mod/R/2', 'gp-cost': 2, 'desc': 'Fake transmissions and mesh IDs', 'src': '', 'qty': 1 },
        { 'gear': 'Sniffer App',	'complexity': 'Mod/2', 'gp-cost': 2, 'desc': 'Collect/view traffic between two systems', 'src': '', 'qty': 1 },
        { 'gear': 'Scount Hive',	'complexity': 'Mod/2', 'gp-cost': 2, 'desc': 'Scout Swarm - Maps area, collects forensic evidence, Know: Chemistry 60, Medicine: Forensics 60', 'src': '', 'qty': 1 },
        { 'gear': 'Spy Hive',	'complexity': 'Mod/2', 'gp-cost': 2, 'desc': 'Spy Swarm - Surveillance, Perceive 60', 'src': '', 'qty': 1 },
        { 'gear': 'Comfurt x5',	'complexity': 'Min/1', 'gp-cost': 1, 'desc': '+5 LUC, +1 TT, +5 IR (Duration: 12 Hrs) [Addiction: −10/Mental]', 'src': '', 'qty': 5 }
    ],
    'armour': [
        { 'gear': 'Armour Vest (Light)',	'complexity': 'Min/1', 'gp-cost': 1, 'desc': 'AV 4/10. Concealable', 'src': 'Firewall Pack', 'qty': 1, 'energy': 4, 'kinetic': 10 }
    ],
    'weapons': [
        { 'gear': 'Medium Pistol Firearm',	'complexity': 'Min/R/1', 'gp-cost': 0, 'desc': 'DV 2d10, SA/BF/FA, Ammo 15+1, Range 30', 'src': 'Firewall Pack', 'qty': 0, 'dmg': '2d10', 'modes': 'SA/BF/FA', 'ammo': '15+1', 'range': '30' },
        { 'gear': 'Medium Pistol Railgun',	'complexity': 'Min/R/1', 'gp-cost': 0, 'desc': 'DV 2d10, SA/BF/FA, Ammo 30+1, Range 45, Rounds 100', 'src': 'Picked Up', 'qty': 0, 'dmg': '2d10', 'modes': 'SA/BF/FA', 'ammo': '30+1', 'range': '45' }
    ],
    'morph': {
        'name': 'Bouncer',
        'type': 'Biomorph',
        'size': 'Normal',
        'mp-cost': 4,
        'durability': 35,
        'movement': 'Walker 4/12',
        'pools': {
            'insight': { 'base': 1 },
            'moxie': { 'base': 0 },
            'vigor': { 'base': 1 },
            'flex': { 'base': 2, 'mp-adj': 1 }
        },
        'ware': [
            { 'ware': 'Biomods', 'desc': 'Genetic tweaks for health, faster healing, immunities and more', 'mp-cost': 0, 'gp-cost': 0 },
            { 'ware': 'Cortical Stack', 'desc': 'Memory diamond storage unit for ego backups', 'mp-cost': 0, 'gp-cost': 0 },
            { 'ware': 'Mesh Inserts', 'desc': 'Cranial computer, wireless tranceiver, muse home, medical sensors', 'mp-cost': 0, 'gp-cost': 0 },
            { 'ware': 'Prehensile Feet', 'desc': 'Can use feet as hands. -8 full move', 'mp-cost': 0, 'gp-cost': 0 },
            { 'ware': 'Grip Pads', 'desc': '+30 climbing Athletics checks', 'mp-cost': 0, 'gp-cost': 0 },
            { 'ware': 'Cold Tolerance', 'desc': 'Handle temps as low as -80C / -112F', 'mp-cost': 0, 'gp-cost': 0 },
            { 'ware': 'Oxygen Reserve', 'desc': 'Oxygen tank / rebreather with 4Hrs of air', 'mp-cost': 0, 'gp-cost': 0 },
            { 'ware': 'Vacuum Sealing', 'desc': 'Can survive exposure to vacuum', 'mp-cost': 1, 'gp-cost': 0 },
            { 'ware': 'SkinLink', 'desc': 'Create a “hardwired” mesh link by touch. (Min/1)', 'mp-cost': 1, 'gp-cost': 0 },
            { 'ware': 'Chameleon Skin', 'desc': 'Change skin color. +10 Infiltrate, +30 still and covered', 'mp-cost': 0, 'gp-cost': 2 },
            { 'ware': 'Respirocytes', 'desc': 'Artificial blood cells, provide 4 hours of air, +5 DUR, +1 WT, +8 DR', 'mp-cost': 0, 'gp-cost': 2, 'plus-dur': 5, 'plus-wt': 1, 'plus-dr': 8},
            ],
        'traits': [
            { 'trait': 'Limberness (Lvl 1)', 'desc': '+10 to escape bonds, fit into tight spaces, contort etc', 'mp-cost': 0 },
            { 'trait': 'Rapid Healing', 'desc': 'Heal twice as fast biomorphs only 1d10 per 6 hours 1 Wound per 1.5 days', 'mp-cost': 1 }
        ]
    }
}