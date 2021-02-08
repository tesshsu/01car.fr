//page questions part

export const mapToObject= function(m){
    return Object.entries(m).map(([value, name]) => {
        return {name: name, value: value};
    });
}

export const fuelOptions = [
    {note: 0, label: '', value: ''},
	{note: 0, label: 'Diesel', value: 'Diesel'},
    {note: 0, label: 'Électrique', value: 'Electric'},
    {note: 0, label: 'Essence', value: 'Gasoline'},
    {note: 0, label: 'Ethanol', value: 'Ethanol'},
    {note: 0, label: 'GPL', value: 'LPG'},
    {note: 0, label: 'Hybrid', value: 'Hybrid'}
];

export const priceMinFilterOptions = [
    {label: 'Prix min', value: ''},
    {label: '1 000 € min', value: '1000'},
    {label: '2 500 € min', value: '2500'},
    {label: '3 000 € min', value: '3000'},
    {label: '4 500 € min', value: '4500'},
    {label: '5 000 € min', value: '5000'},
    {label: '6 000 € min', value: '6000'},
    {label: '7 000 € min', value: '7000'},
    {label: '8 000 € min', value: '8000'},
    {label: '9 000 € min', value: '9000'},
    {label: '10 000 € min', value: '10000'},
    {label: '12 000 € min', value: '12000'},
    {label: '13 000 € min', value: '13000'},
    {label: '14 000 € min', value: '14000'},
    {label: '15 000 € min', value: '15000'},
    {label: '17 000 € min', value: '17000'},
    {label: '20 000 € min', value: '20000'},
    {label: '22 000 € min', value: '22000'},
    {label: '23 000 € min', value: '23000'},
    {label: '25 000 € min', value: '25000'},
    {label: '30 000 € min', value: '30000'}
];

export const priceMaxFilterOptions = [
    {label: 'Prix max', value: ''},
    {label: '1 000 € max', value: '1000'},
    {label: '2 500 € max', value: '2500'},
    {label: '3 000 € max', value: '3000'},
    {label: '4 500 € max', value: '4500'},
    {label: '5 000 € max', value: '5000'},
    {label: '6 000 € max', value: '6000'},
    {label: '7 000 € max', value: '7000'},
    {label: '8 000 € max', value: '8000'},
    {label: '9 000 € max', value: '9000'},
    {label: '10 000 € max', value: '10000'},
    {label: '12 000 € max', value: '12000'},
    {label: '13 000 € max', value: '13000'},
    {label: '14 000 € max', value: '14000'},
    {label: '15 000 € max', value: '15000'},
    {label: '17 000 € max', value: '17000'},
    {label: '20 000 € max', value: '20000'},
    {label: '22 000 € max', value: '22000'},
    {label: '23 000 € max', value: '23000'},
    {label: '25 000 € max', value: '25000'},
    {label: '30 000 € max', value: '30000'}
];

export const kmMinFilterOptions = [
    {label: 'Km-min', value: ''},
    {label: '5 000 Km min', value: '5000'},
    {label: '7 000 Km min', value: '7000'},
    {label: '10 000 Km min', value: '10000'},
    {label: '12 000 Km min', value: '120000'},
    {label: '15 000 Km min', value: '15000'},
    {label: '18 000 Km min', value: '18000'},
    {label: '20 000 Km min', value: '20000'},
    {label: '22 000 Km min', value: '220000'},
    {label: '25 000 Km min', value: '250000'},
    {label: '30 000 Km min', value: '30000'},
    {label: '40 000 Km min', value: '40000'},
    {label: '50 000 Km min', value: '50000'},
    {label: '60 000 Km min', value: '60000'},
    {label: '70 000 Km min', value: '70000'},
    {label: '80 000 Km min', value: '80000'},
    {label: '90 000 Km min', value: '90000'},
    {label: '100 000 Km min', value: '100000'},
    {label: '150 000 Km min', value: '1500000'},
    {label: '200 000 Km min', value: '2000000'}
];

export const kmMaxFilterOptions = [
    {label: 'Km-max', value: ''},
    {label: '5 000 Km max', value: '5000'},
    {label: '7 000 Km max', value: '7000'},
    {label: '10 000 Km max', value: '10000'},
    {label: '12 000 Km max', value: '120000'},
    {label: '15 000 Km max', value: '15000'},
    {label: '18 000 Km max', value: '18000'},
    {label: '20 000 Km max', value: '20000'},
    {label: '22 000 Km max', value: '220000'},
    {label: '25 000 Km max', value: '250000'},
    {label: '30 000 Km max', value: '30000'},
    {label: '40 000 Km max', value: '40000'},
    {label: '50 000 Km max', value: '50000'},
    {label: '60 000 Km max', value: '60000'},
    {label: '70 000 Km max', value: '70000'},
    {label: '80 000 Km max', value: '80000'},
    {label: '90 000 Km max', value: '90000'},
    {label: '100 000 Km max', value: '100000'},
    {label: '150 000 Km max', value: '1500000'},
    {label: '200 000 Km max', value: '2000000'}
];

export const boiteFilterOptions = [
    {label: 'Boîte de vitesse', value: ''},
    {label: 'manual', value: 'manual'},
    {label: 'Automatique', value: 'automatic'}
];

export const statusFilterOptions = [
    {label: 'Annonceurs', value: ''},
    {label: 'Professionnels', value: 'pro'},
    {label: 'Particuliers', value: 'private'}
];

export const statuVendeurOptions = [
    {note: 0, label: '', value: ''},
    {note: "1", label: 'particulier', value: 'private'},
    {note: "0", label: 'professionnel', value: 'pro'}
]

export const minYearFilterOptions = [
    {label: 'Année min', value: ''},
    {label: '2021', value: '2021'},
    {label: '2020', value: '2020'},
    {label: '2019', value: '2019'},
    {label: '2018', value: '2018'},
    {label: '2017', value: '2017'},
    {label: '2016', value: '2016'},
    {label: '2015', value: '2015'},
    {label: '2014', value: '2014'},
    {label: '2013', value: '2013'},
    {label: '2012', value: '2012'},
    {label: '2011', value: '2011'},
    {label: '2010', value: '2010'},
    {label: '2009', value: '2009'},
    {label: '2007', value: '2007'},
    {label: '2006', value: '2006'},
    {label: '2005', value: '2005'},
    {label: '2004', value: '2004'},
    {label: '2003', value: '2003'},
    {label: '2002', value: '2002'},
    {label: '2001', value: '2001'},
    {label: '2000', value: '2000'},
    {label: '1999', value: '1999'},
    {label: '1998', value: '1998'},
    {label: '1997', value: '1997'},
    {label: '1996', value: '1996'},
    {label: '1995', value: '1995'},
    {label: '1994', value: '1994'},
    {label: '1993', value: '1993'},
    {label: '1992', value: '1992'},
    {label: '1991', value: '1991'},
    {label: '1990', value: '1990'},
    {label: '1989', value: '1989'},
    {label: '1988', value: '1988'},
    {label: '1987', value: '1987'},
    {label: '1986', value: '1986'},
    {label: '1985', value: '1985'},
    {label: '1984', value: '1984'},
    {label: '1983', value: '1983'},
    {label: '1982', value: '1982'},
    {label: '1981', value: '1981'},
    {label: '1980', value: '1980'}
];

export const maxYearFilterOptions = [
    {label: 'Année max', value: ''},
    {label: '2021', value: '2021'},
    {label: '2020', value: '2020'},
    {label: '2019', value: '2019'},
    {label: '2018', value: '2018'},
    {label: '2017', value: '2017'},
    {label: '2016', value: '2016'},
    {label: '2015', value: '2015'},
    {label: '2014', value: '2014'},
    {label: '2013', value: '2013'},
    {label: '2012', value: '2012'},
    {label: '2011', value: '2011'},
    {label: '2010', value: '2010'},
    {label: '2009', value: '2009'},
    {label: '2007', value: '2007'},
    {label: '2006', value: '2006'},
    {label: '2005', value: '2005'},
    {label: '2004', value: '2004'},
    {label: '2003', value: '2003'},
    {label: '2002', value: '2002'},
    {label: '2001', value: '2001'},
    {label: '2000', value: '2000'},
    {label: '1999', value: '1999'},
    {label: '1998', value: '1998'},
    {label: '1997', value: '1997'},
    {label: '1996', value: '1996'},
    {label: '1995', value: '1995'},
    {label: '1994', value: '1994'},
    {label: '1993', value: '1993'},
    {label: '1992', value: '1992'},
    {label: '1991', value: '1991'},
    {label: '1990', value: '1990'},
    {label: '1989', value: '1989'},
    {label: '1988', value: '1988'},
    {label: '1987', value: '1987'},
    {label: '1986', value: '1986'},
    {label: '1985', value: '1985'},
    {label: '1984', value: '1984'},
    {label: '1983', value: '1983'},
    {label: '1982', value: '1982'},
    {label: '1981', value: '1981'},
    {label: '1980', value: '1980'}
];

export const dateDispoOptions = [
    {note: 0, label: '', value: ''},
    {note: 1, label: 'Immédiatement', value: 'immediately'},
    {note: 0, label: 'Dans un mois', value: 'one_month'},
    {note: 0, label: 'Plus tard', value: 'later'}
]

export const furmeurOptions = [
    {note: 0, label: '', value: ''},
    {note: 1, label: 'non fumeur', value: 0},
    {note: 0, label: 'fumeur', value: 1}
]

export const OuiOptions = [
    {note: 0, label: '', value: ''},
    {note: 1, label: 'Oui', value: true},
    {note: 0, label: 'Non', value: false}
]

export const NonOptions = [
    {note: 0, label: '', value: ''},
    {note: 1, label: 'Non', value: false},
    {note: 0, label: 'Oui', value: true}
]

export const raisonVendreOptions = [
    {note: 0, label: '', value: ''},
    {note: 1, label: 'Ne correspond pas à mes attentes', value: 'not_expected'},
    {note: 1, label: 'Changement de situation', value: 'change'},
    {note: 1, label: 'Autre projet', value: 'other'}
]

export const numMainsOptions = [
    {note: 0, label: '', value: ''},
    {note: 1, label: '1ère main ou 2ème main', value: '1'},
    {note: 0, label: '3ème main ou plus', value: '3'}
]

export const etatCarOptions = [
    {note: 0, label: '', value: ''},
    {note: 1, label: 'Neuf', value: 'new'},
    {note: 1, label: 'Très bon état', value: 'very_good'},
    {note: 1, label: 'Bon état', value: 'good'},
    {note: 0, label: 'satisfaisant', value: 'satisfactory'},
]

export const originCarOptions = [
    {note: 0, label: '', value: ''},
    {note: 1, label: 'française', value: 'FR'},
    {note: 0, label: 'étrangère', value: 'ZZ'}
]

export const prochaineEntretienOptions = [
    {note: 0, label: '', value: ''},
    {note: 1, label: 'Moins de 5000km', value: true},
    {note: 0, label: 'Plus de 5000km', value: false}
]

//option


// page annonce car details equipement
export const outside_equipments = {
    "sunroof": "toit ouvrant",
    "4_wheel_drive": "4 roues motrices",
    "front_rear_parking_aid": "aide parking av/ar",
    "reversing_camera": "caméra de recul",
    "reversing_radar": "radar de recul",
    "hitch": "attelage",
    "aluminum_rims": "jantes alu (numero remplir)",
    "sport_pack": "pack sport",
    "bi_xenon_headlamps": "projecteurs bi-xénon",
    "adaptive_regulator": "régulateur adaptatif",
    "de_icing_mirrors": "rétroviseurs dégivrants",
    "electric_mirrors": "rétroviseurs électriques",
    "folding_mirrors": "rétroviseurs rabattables",
    "electrically_folding_mirrors": "rétroviseurs rabattables électriquement",
    "chrome_tailpipes": "sorties d'échappement chromées",
}

export const exterieur_equipements = mapToObject(outside_equipments);

export const inside_equipments = {
    "electric_windows": "vitres électriques",
    "bench_1/3_-_2/3": "banquette 1/3 - 2/3",
    "folding_bench": "banquette rabattable",
    "automatic_gearbox": "boite automatique",
    "automatic_air_conditioning": "climatisation automatique",
    "keyless_start": "démarrage sans clef",
    "power_steering": "direction assistée",
    "touch_screen": "écran tactile",
    "electrical_closing": "fermeture électrique",
    "automatic_electrical_closing": "fermeture électrique automatique",
    "gps": "GPS",
    "leather_interior": "intérieur cuir",
    "folding_mirrors": "rétroviseurs rabattables",
    "hands_free_phone_kit": "kit téléphone main libre",
    "electric_trunk_open": "ouverture du coffre électrique",
    "paddle_shifters": "palettes au volant",
    "heated_windshield": "pare-brise chauffant",
    "aluminum_crankset": "pédalier alu",
    "phone_predisposition": "prédisposition téléphone",
    "12V_socket": "prise 12V",
    "mini_usb_audio_jack": "prise audio mini USB",
    "usb_audio_jack": "prise audio USB",
    "speed_regulator": "régulateur de vitesse",
    "height_adjustable_driver_s_seat": "siège conducteur réglable hauteur",
    "heated_seats": "sièges chauffants",
    "electric_memory_seats": "sièges électrique à mémoire",
    "dark_tinted_windows": "vitres surteintées",
    "sport_steering_wheel": "volant sport"

}
export const interieur_equipements = mapToObject(inside_equipments);

export const security_equipments = {
    "airbags": "Airbags",
    "apple_car_play": "APPLE CAR PLAY",
    "abs": "ABS",
    "head_up_display": "affichage tête haute",
    "hill_start_aid": "aide au démarrage en côte",
    "line_crossing_alert": "alerte franchissement ligne",
    "blind_spot_warning": "avertisseur d'angle mort",
    "automatic_wipers": "essuie-glaces automatiques",
    "automatic_lights_and_wipers": "feux et essuie-glaces automatiques",
    "isofix_bindings": "fixations ISOFIX",
    "bluetooth_hands_free_phone_kit": "kit téléphone main libre bluetooth",
    "led_daytime_running_lights": "phares av. de jour à LED",
}


export const securite_equipements = mapToObject(security_equipments);


export const anti_theft_equipments = {
    "alarm": "alarme",
    "immobilizer": "anti démarrage",
    "windows_engraving": "gravage des vitres",
}

export const antivol_equipements = mapToObject(anti_theft_equipments);

export const comfort_equipments = {
    "bluetooth": "Bluetooth",
    "keyless_entry_system": "système d'entrée sans clef",
    "virtual_cockpit": "virtual cockpit",
}

export const confort_equipements = mapToObject(comfort_equipments);

export const other_equipments = {
    "flat_tire_repair_kit": "kit de réparation crevaison",
    "start_stop_system": "système Start & Stop",
}

export const autre_equipements =  mapToObject(other_equipments);

export const premium_options_display = (premium_opt, res) => {
    return premium_opt?.displayFunction(res);
}

export const premium_options_display_yes_no = (res) => {
    return res ? 'Oui' : 'Non'
}

export const premium_options_display_next_maintenance = (res) => {
    return res ? 'Moins de 5000km' : 'Plus de 5000km'
}

export const premium_ncs = [
    {icon: "fas fa-file-contract", name: "Sous garantie", value: "under_warranty", displayFunction: premium_options_display_yes_no},
    {icon: "fas fa-car-crash", name: "Ayant déjà subit 1 accident", value: "accident", displayFunction: premium_options_display_yes_no},
    {icon: "fas fa-heart-broken", name: "Des défauts griffes, coups, usures", value: "defects", displayFunction: premium_options_display_yes_no},
    {icon: "fas fa-file-medical-alt", name: "Justifier le parcours kilometrique", value: "km_certificate", displayFunction: premium_options_display_yes_no},
    {icon: "fas fa-calendar-check", name: "Contrôle technique ok", value: "technical_check_ok", displayFunction: premium_options_display_yes_no},
    {icon: "far fa-list-alt", name: "Respect des entretiens périodiques", value: "periodic_maintenance", displayFunction: premium_options_display_yes_no},
    {icon: "far fa-calendar-alt", name: "Prochaine entretien", value: "next_maintenance_under_5000km", displayFunction: premium_options_display_next_maintenance},
    {icon: "fas fa-receipt", name: "Facture d'achat", value: "purchase_invoice", displayFunction: premium_options_display_yes_no},
    {icon: "far fa-id-badge", name: "Carte grise", value: "gray_card", displayFunction: premium_options_display_yes_no},
    {icon: "fas fa-id-badge", name: "Possède le carnet d'entretien", value: "maintenance_log", displayFunction: premium_options_display_yes_no}
];



export const lists = [
    {detail: "1. 1car ne peut toutefois pas garantir de manière absolue l'exactitude et l'exhaustivité de l'ensemble de ces informations."},
    {detail: "2. 1car s'engage dans le cadre de l'accès et de l'utilisation du Site, à traiter les données à caractère personnel des personnes physiques, dans le respect de la règlementation française et européenne en matière de protection des données personnelles."},
    {detail: "3. 1car ne saurait donc être tenue pour responsable d'un quelconque dommage que tout internaute pourrait subir à la suite d'une telle utilisation"}
];

//pub part
export const pubs = [
    {icon: "fas fa-hands-helping", name: "Un intermédiaire de confiance"},
    {icon: "fas fa-clipboard-check", name: "Sécuriser au maximum l'achat de son véhicule"},
    {icon: "far fa-paper-plane", name: "ACHETER FACILEMENT VOTRE VÉHICULE"}
];

export const listPubs = [
    {icon: "far fa-smile text-lg mr-1", title: "Note de confiance"},
    {icon: "fas fa-unlock-alt text-lg mr-1", title: "Sécuriser au maximum"},
    {icon: "far fa-thumbs-up text-lg mr-1", title: "Vendre facilement"}
];

export const basics = [
    {icon: "fas fa-hands-helping", name: "Informations principales du véhicule"},
    {icon: "fas fa-clipboard-check", name: "Tête de liste, grande visibilité"},
    {icon: "far fa-paper-plane", name: "Modifier à tout moment le prix du véhicule"},
    {icon: "fas fa-database", name: "Fiabilité des données du véhicule"},
    {icon: "fas fa-award", name: "Estimation du véhicule par des professionnels qualifiés"}
];

export const pubIconlists = [
    {icon: "far fa-smile text-lg mr-1", name: "Note de confiance"},
    {icon: "fas fa-unlock-alt text-lg mr-1", name: "Sécuriser au maximum"},
    {icon: "fas fa-certificate text-lg mr-1", name: "Vendre facilement"}
];

//price page part
export const classics = [
    {list: "Annonce pré-remplie"},
    {list: "Annonce gratuite"},
	{list: "10 photos gratuites"}
];
export const premiums = [
    {list: "Rassurer l'acheteur grâce à notre questionnaire"},
    {list: "Tête de liste, grande visibilité"},
    {list: "Logo qualité garantie"},
    {list: "Modifier à tout moment le prix du véhicule"},
    {list: "Estimation du véhicule par des professionnels qualifiés"},
	{list: "10 photos gratuites"},
    {list: "Vente rapide garantie"}
];
export const pubTransparents = [
    {icon: "fas fa-database", width: {width: '15%'}, name: "Récupération des données 15%"},
    {icon: "fas fa-money-check-alt", width: {width: '21%'}, name: "Salaires 21%"},
    {icon: "fas fa-server", width: {width: '21%'}, name: "Hébergement 21%"},
    {icon: "fas fa-wallet", width: {width: '15%'}, name: "Dépenses 15%"},
    {icon: "fas fa-cash-register", width: {width: '15%'}, name: "Frais 15%"},
    {icon: "fas fa-users", width: {width: '17%'}, name: "Bénéfices 17%"}
];
