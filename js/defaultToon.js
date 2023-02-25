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
    'base': {'CP': 20, 'MP': 6, 'GP': 20, 'RP': 13},
    'aptitudes': {
        'cog': {
            'base': 20,
            'cp-adj': 5,
            'rp-adj': 5,
        },
        'int': {
            'base': 10,
            'cp-adj': 0,
            'rp-adj': 0,
        },
        'ref': {
            'base': 25,
            'cp-adj': 0,
            'rp-adj': 0,
        },
        'sav': {
            'base': 10,
            'cp-adj': 0,
            'rp-adj': 0,
        },
        'som': {
            'base': 10,
            'cp-adj': 0,
            'rp-adj': 0,
        },
        'wil': {
            'base': 15,
            'cp-adj': 0,
            'rp-adj': 0,
        }
    },
    'skills': {
        'athletics': {
            'base': 0,
            'cp-adj': 0,
            'rp-adj': 0,
            'aptitude': 'som'
        },
        'deceive (+30)': {
            'base': 10,
            'cp-adj': 0,
            'rp-adj': 0,
            'aptitude': 'sav'
        },
        'exotic': {
            'base': 0,
            'cp-adj': 0,
            'rp-adj': 0,
            'aptitude': '-',
            'field': '-'
        },
        'fray': {
            'base': 30,
            'cp-adj': 0,
            'rp-adj': 0,
            'aptitude': 'ref'
        },
        'freefall': {
            'base': 0,
            'cp-adj': 0,
            'rp-adj': 0,
            'aptitude': 'som'
        },
        'guns': {
            'base': 55,
            'cp-adj': 0,
            'rp-adj': 0,
            'aptitude': 'ref'
        },
        'hardware': {
            'base': 45,
            'cp-adj': 0,
            'rp-adj': 0,
            'aptitude': 'cog',
            'field': 'Electronics'
        },
        'infiltrate (+10)(+10)': {
            'base': 55,
            'cp-adj': 0,
            'rp-adj': 0,
            'aptitude': 'ref'
        },
        'infosec': {
            'base': 55,
            'cp-adj': 0,
            'rp-adj': 0,
            'aptitude': 'cog'
        },
        'interface': {
            'base': 55,
            'cp-adj': 0,
            'rp-adj': 0,
            'aptitude': 'cog'
        },
        'kinesics': {
            'base': 0,
            'cp-adj': 0,
            'rp-adj': 0,
            'aptitude': 'sav'
        },
        'medicine': {
            'base': 0,
            'cp-adj': 0,
            'rp-adj': 0,
            'aptitude': 'cog',
            'field': '-'
        },
        'melee': {
            'base': 0,
            'cp-adj': 0,
            'rp-adj': 0,
            'aptitude': 'som'
        },
        'perceive': {
            'base': 10,
            'cp-adj': 40,
            'rp-adj': 0,
            'aptitude': 'int'
        },
        'persuade': {
            'base': 0,
            'cp-adj': 0,
            'rp-adj': 0,
            'aptitude': 'sav'
        },
        'pilot': {
            'base': 0,
            'cp-adj': 0,
            'rp-adj': 0,
            'aptitude': 'ref',
            'field': '-'
        },
        'program': {
            'base': 55,
            'cp-adj': 0,
            'rp-adj': 0,
            'aptitude': 'cog'
        },
        'provoke': {
            'base': 0,
            'cp-adj': 0,
            'rp-adj': 0,
            'aptitude': 'sav'
        },
        'psi': {
            'base': 0,
            'cp-adj': 0,
            'rp-adj': 0,
            'aptitude': 'wil'
        },
        'research': {
            'base': 30,
            'cp-adj': 0,
            'rp-adj': 30,
            'aptitude': 'int'
        },
        'survival': {
            'base': 0,
            'cp-adj': 0,
            'rp-adj': 0,
            'aptitude': 'int'
        },
        'know-1': {
            'base': 50,
            'cp-adj': 0,
            'rp-adj': 0,
            'aptitude': 'cog',
            'field': 'Computer Science'
        },
        'know-2': {
            'base': 50,
            'cp-adj': 0,
            'rp-adj': 0,
            'aptitude': 'cog',
            'field': 'Cryptography'
        },
        'know-3': {
            'base': 50,
            'cp-adj': 0,
            'rp-adj': 0,
            'aptitude': 'cog',
            'field': 'Network Eng'
        },
        'know-4': {
            'base': 50,
            'cp-adj': 0,
            'rp-adj': 0,
            'aptitude': 'cog',
            'field': 'Sys Admin'
        },
        'know-5': {
            'base': 50,
            'cp-adj': 0,
            'rp-adj': 0,
            'aptitude': 'cog',
            'field': 'Security Ops'
        },
        'know-6': {
            'base': 10,
            'cp-adj': 0,
            'rp-adj': 0,
            'aptitude': 'cog',
            'field': 'Criminal'
        }

    },
    'pools': {
        'vigor': {
            'base': 0,
            'cp-adj': 0,
            'rp-adj': 0
        },
        'insight': {
            'base': 0,
            'cp-adj': 0,
            'rp-adj': 0
        },
        'moxie': {
            'base': 0,
            'cp-adj': 0,
            'rp-adj': 0
        },
        'flex': {
            'base': 1,
            'cp-adj': 1,
            'rp-adj': 0
        }
    },
    'rep': {
        '@-rep': { 'base': 0,'adj': 10, 'cp-adj': 0,'rp-adj': 0, 'fake': 0 },
        'c-rep': { 'base': 0,'adj': 9, 'cp-adj': 0,'rp-adj': 0, 'fake': 10 },
        'f-rep': { 'base': 0,'adj': 2, 'cp-adj': 0,'rp-adj': 0, 'fake': 0 },
        'g-rep': { 'base': 40,'adj': 7, 'cp-adj': 0,'rp-adj': 0, 'fake': 0 },
        'i-rep': { 'base': 60,'adj': 9, 'cp-adj': 0,'rp-adj': 0, 'fake': 0 },
        'r-rep': { 'base': 0,'adj': 0, 'cp-adj': 0,'rp-adj': 0, 'fake': 0 },
        'x-rep': { 'base': 0,'adj': 0, 'cp-adj': 0,'rp-adj': 0, 'fake': 0 }
    },
    'traits': [
        {
            'trait': 'Resources', 
            'desc': 'Wealth to acquire gear (lvl 3), 3mp 3gp, 5gp/week',
            'cp-adj': 6,
            'resources-lvl': 3 
        },
        {
            'trait': 'Composure',
            'desc': '+5 LUC, +1 Trauma Threshold, +10 Insanity Rating',
            'cp-adj': 2,
            'plus-luc': 5, 'plus-tt': 1, 'plus-ir': 10
        },
        {
            'trait': 'Adjusted Memory', 
            'desc': 'Given by GM as -ve trait',
            'cp-adj': -1,
            'resources-lvl': 0 
        },
        {
            'trait': 'Real World Naiveté',
            'desc': 'GM may provide false info once per session',
            'cp-adj': -2
        },
        {
            'trait': 'Adaptability',
            'desc': 'Easier resleeving +10 to resleeving and integration',
            'rp-adj': -2
        },
        {
            'trait': 'Restricted Behaviour',
            'desc': 'Disobeying Orders Lvl 1 all orders, Lvl 2 Thebes command',
            'cp-adj': 0
        },
        {
            'trait': 'Enhanced Behaviour',
            'desc': 'For all Mankind, all transhumanity is tribe',
            'cp-adj': 0
        },
        {
            'trait': 'Resolve',
            'desc': '+5 per level to WILL (+5 or +15 with Kristina)',
            'cp-adj': 0,
            'plus-will': 15
        },
        {
            'trait': 'Quickness',
            'desc': '+5 per level to REF (+5 or +15 with Kristina)',
            'cp-adj': 0,
            'plus-ref': 15
        },
        {
            'trait': 'Stalwart',
            'desc': '+5 per level to WILL (fear) (+5 or +15 with Kristina)',
            'cp-adj': 0
        }
    ],
    'gear': [
        { 'gear': 'Anonymizer',	'complexity': 'Min/1', 'gp-cost': 0, 'desc': 'Masks your mesh ID', 'src': 'Firewall Pack', 'qty': 1 },
        { 'gear': 'Fake Ego ID',	'complexity': 'Maj/R/3', 'gp-cost': 0, 'desc': 'Forged ID and back history, with its own rep scores', 'src': 'Firewall Pack', 'qty': 1 },
        { 'gear': 'TacNet App',	'complexity': 'Mod/2', 'gp-cost': 0, 'desc': 'Share tactical data in real time', 'src': 'Firewall Pack', 'qty': 1 },
        { 'gear': 'Crypto App',	'complexity': 'Min/1', 'gp-cost': 0, 'desc': 'Encrypt/decrypt files and messages', 'src': '', 'qty': 1 },
        { 'gear': 'Exploit App',	'complexity': 'Mod/R/2', 'gp-cost': 0, 'desc': 'A hacker library/tool for taking advantage of known software vulnerabilities. Required for hacking', 'src': '', 'qty': 1 },
        { 'gear': 'Firewall App',	'complexity': 'Min/1', 'gp-cost': 0, 'desc': 'Protects devices from intrusion', 'src': '', 'qty': 1 },
        { 'gear': 'Spoofer App',	'complexity': 'Mod/R/2', 'gp-cost': 0, 'desc': 'Fake transmissions and mesh IDs', 'src': '', 'qty': 1 },
        { 'gear': 'Sniffer App',	'complexity': 'Mod/2', 'gp-cost': 0, 'desc': 'Collect/view traffic between two systems', 'src': '', 'qty': 1 },
        { 'gear': 'Tracker App',	'complexity': 'Mod/2', 'gp-cost': 0, 'desc': 'Trace connections', 'src': '', 'qty': 1 },
        { 'gear': 'VPN App',	'complexity': 'Min/1', 'gp-cost': 0, 'desc': 'Create virtual private network (-30 sniffing)', 'src': 'Firewall Pack', 'qty': 1 },
        { 'gear': 'Smart Clothing',	'complexity': 'Min/1', 'gp-cost': 1, 'desc': 'Can change colour, texture and cut. +10 Infiltrate, +30 covered and stationary', 'src': 'Firewall Pack', 'qty': 1 },
        { 'gear': 'Covert Operations Tool',	'complexity': 'Maj/R/3', 'gp-cost': 0, 'desc': 'Bypasses locks, cuts/repairs holes, Hardware: Electronics 60 vs. electronic locks, more', 'src': '', 'qty': 1 },
        { 'gear': 'Healing Spray',	'complexity': 'Min/1', 'gp-cost': 1, 'desc': 'Heals 1d10 damage per hour for 12 hours', 'src': '', 'qty': 1 },
        { 'gear': 'Scout Hive',	'complexity': 'Mod/2', 'gp-cost': 2, 'desc': 'Scout Swarm - Maps area, collects forensic evidence, Know: Chemistry 60, Medicine: Forensics 60', 'src': '', 'qty': 0 },
        { 'gear': 'Spy Hive', 'complexity': 'Mod/2', 'gp-cost': 2, 'desc': 'Spy Swarm - Surveillance, Perceive 60', 'src': '', 'qty': 0 }
    ],
    'armour': [
        { 'gear': 'Armour Vest (Light)',	'complexity': 'Min/1', 'gp-cost': 1, 'desc': 'AV 4/10. Concealable', 'src': 'Firewall Pack', 'qty': 1, 'energy': 4, 'kinetic': 10 },
        { 'gear': 'Mod: Medical Repair',	'complexity': 'Min/1', 'gp-cost': 1, 'desc': 'Heals 1d10 damage per hour, ignore 1 wound', 'src': '', 'qty': 1, 'energy': 0, 'kinetic': 0 }
    ],
    'weapons': [
        { 'gear': 'Laser Pulser (Lethal)', 'complexity': 'Mod/R/2', 'gp-cost': 0, 'desc': 'Knockdown, Long, Two-Handed', 'src': 'scratch', 'qty': 1, 'dmg': '2d10 + 2 [13]', 'modes': 'SA/BF/FA', 'ammo': '30', 'range': '100' },
        { 'gear': 'Holdout', 'complexity': 'Min/R/1', 'gp-cost': 0, 'desc': 'Concealable', 'src': '', 'qty': 1, 'dmg': '1d10 + 1d6 [9]', 'modes': 'SA/BF', 'ammo': '9+1', 'range': '25' },
        { 'gear': 'Medium Pistol', 'complexity': 'Min/R/1', 'gp-cost': 0, 'desc': '', 'src': 'foc', 'qty': 1, 'dmg': '2d10 [11]', 'modes': 'SA/BF/FA', 'ammo': '15+1', 'range': '30' }
    ],
    'blueprints': [
        { 'name': 'Armour Vest (Light)', 'complexity': 'Min/1', 'desc': 'AV 4/10. Concealable', 'src': 'Firewall Pack', 'qty': 0, 'energy': 4, 'kinetic': 10, 'type': 'Gear, Limited Use'},
        { 'name': 'Mod: Medical Repair', 'complexity': 'Min/1', 'desc': 'Heals 1d10 damage per hour, ignore 1 wound', 'src': '', 'qty': 0, 'energy': 0, 'kinetic': 0, 'type': 'Gear, Limited Use' },
        { 'name': 'Psi Jammer',	'complexity': 'Mod/2', 'gp-cost': 0, 'desc': 'Jams brainwave frequencies w/in 20 m, −30 Psi Tests', 'src': '', 'qty': 0, 'type': 'Gear, Limited Use' },
        { 'name': 'Scout Hive',	'complexity': 'Mod/2', 'gp-cost': 0, 'desc': 'Scout Swarm - Maps area, collects forensic evidence, Know: Chemistry 60, Medicine: Forensics 60', 'src': '', 'qty': 0, 'type': 'Gear, Limited Use' },
        { 'name': 'Smart Clothing',	'complexity': 'Min/1', 'gp-cost': 0, 'desc': 'Can change colour, texture and cut. +10 Infiltrate, +30 covered and stationary', 'src': '', 'qty': 0, 'type': 'Gear, Limited Use' },
        { 'name': 'Spy Hive',	'complexity': 'Mod/2', 'gp-cost': 0, 'desc': 'Spy Swarm - Surveillance, Perceive 60', 'src': '', 'qty': 0, 'type': 'Gear, Limited Use' },
        { 'name': 'Chameleon Skin', 'desc': 'Change skin color. +10 Infiltrate, +30 still and covered', 'mp-cost': 0, 'gp-cost': 0, 'type': 'Ware, Limited Use' },
        { 'name': 'Electrical Sense', 'desc': 'Sense electrical fields within 5m', 'mp-cost': 0, 'gp-cost': 0, 'type': 'Ware, Limited Use' },
        { 'name': 'Respirocytes', 'desc': 'Artificial blood cells, provide 4 hours of air, +5 DUR, +1 WT, +8 DR', 'mp-cost': 0, 'gp-cost': 0, 'plus-dur': 5, 'plus-wt': 1, 'plus-dr': 8, 'type': 'Ware, Limited Use'},
        { 'name': 'SkinLink', 'desc': 'Create a “hardwired” mesh link by touch', 'mp-cost': 0, 'gp-cost': 0, 'type': 'Ware, Limited Use' },
        { 'name': 'Vacuum Sealing', 'desc': 'Can survive exposure to vacuum', 'mp-cost': 0, 'gp-cost': 0, 'type': 'Ware, Limited Use' },
        { 'name': 'Smart Clothing',	'complexity': 'Min/1', 'gp-cost': 3, 'desc': 'Can change colour, texture and cut. +10 Infiltrate, +30 covered and stationary', 'src': 'Firewall Pack', 'qty': 1, 'type': 'Gear, Limited Use' },
        { 'name': 'Covert Operations Tool',	'complexity': 'Maj/R/3', 'gp-cost': 3, 'desc': 'Bypasses locks, cuts/repairs holes, Hardware: Electronics 60 vs. electronic locks, more', 'src': '', 'qty': 1, 'type': 'Gear, Limited Use' },
        { 'name': 'Holdout', 'complexity': 'Min/R/1', 'gp-cost': 3, 'desc': 'Concealable', 'src': '', 'qty': 1, 'dmg': '1d10 + 1d6 [9]', 'modes': 'SA/BF', 'ammo': '9+1', 'range': '25', 'type': 'Gear, Limited Use' }
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
            'flex': { 'base': 2, 'mp-adj': 2 }
        },
        'ware': [
            { 'ware': 'Biomods', 'desc': 'Genetic tweaks for health, faster healing, immunities and more (morph)', 'mp-cost': 0, 'gp-cost': 0 },
            { 'ware': 'Cortical Stack', 'desc': 'Memory diamond storage unit for ego backups (morph)', 'mp-cost': 0, 'gp-cost': 0 },
            { 'ware': 'Mesh Inserts', 'desc': 'Cranial computer, wireless tranceiver, muse home, medical sensors (morph)', 'mp-cost': 0, 'gp-cost': 0 },
            { 'ware': 'Grip Pads', 'desc': '+30 climbing Athletics Tests (morph)', 'mp-cost': 0, 'gp-cost': 0 },
            { 'ware': 'Cold Tolerance', 'desc': 'Handle temps as low as -80C/-112F (morph)', 'mp-cost': 0, 'gp-cost': 0 },
            { 'ware': 'Oxygen Reserve', 'desc': 'Oxygen tank / rebreather with 4 hours air (morph)', 'mp-cost': 0, 'gp-cost': 0 },
            { 'ware': 'Prehensile Feet', 'desc': ' (morph)', 'mp-cost': 0, 'gp-cost': 0 },
            
            { 'ware': 'Chameleon Skin', 'desc': 'Change skin color. +10 Infiltrate, +30 still and covered', 'mp-cost': 0, 'gp-cost': 2 },
            { 'ware': 'SkinLink', 'desc': 'Create a “hardwired” mesh link by touch', 'mp-cost': 0, 'gp-cost': 1 },
            { 'ware': 'Skillsoft', 'desc': 'Persuade: 40', 'mp-cost': 0, 'gp-cost': 0 },
            { 'ware': 'Skillsoft', 'desc': 'Know[Sex Professionals]: 80', 'mp-cost': 0, 'gp-cost': 0 },
            { 'ware': 'Skillsoft', 'desc': 'Know[Pharmacology]: 80', 'mp-cost': 0, 'gp-cost': 0 },
            { 'ware': 'Skillware', 'desc': 'Can use 120 points of skillsofts', 'mp-cost': 0, 'gp-cost': 3 },
            
            { 'ware': 'Skin Flex', 'desc': 'Disguise face, skin, hair. +30 to impersonation/disguise Deceive Tests', 'mp-cost': 0, 'gp-cost': 2 },
            { 'ware': 'Pain Regulator', 'complexity': 'Mod/2', 'desc': 'Dulls pain experience. Ignore 1 wound effect', 'mp-cost': 0, 'gp-cost': 2 },
            { 'ware': 'Adrenal Surge', 'complexity': 'Maj/3', 'desc': 'Supercharged adrenal response. +1 Vigor, ignore 1 wound.', 'mp-cost': 0, 'gp-cost': 2 },
            { 'name': 'Vacuum Sealing', 'complexity': 'Min/1', 'desc': 'Can survive exposure to vacuum', 'mp-cost': 0, 'gp-cost': 1 },

        ],
        'XXX-ware': [
           ],
        'traits': [
            { 'trait': 'Rapid Healing', 'desc': 'Heal twice as fast. Biomorphs only', 'mp-cost': 1 }
            ],
        'XXX-traits': [
            
        ]
    }
}
