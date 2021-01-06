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

export const statuVendeurOptions = [
    {note: 0, label: '', value: ''},
    {note: "1", label: 'particulier', value: 'private'},
    {note: "0", label: 'professionnel', value: 'pro'}
]

export const dateDispoOptions = [
    {note: 0, label: '', value: ''},
    {note: 1, label: 'Immédiatement', value: 'immediately'},
    {note: 0, label: 'Dans un mois', value: 'one_month'},
    {note: 0, label: 'Plus tard', value: 'later'}
]

export const furmeurOptions = [
    {note: 0, label: '', value: ''},
    {note: 1, label: 'non fumeur', value: false},
    {note: 0, label: 'fumeur', value: true}
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
    {note: 1, label: 'Ne correspond pas à mes attentes', value: 'Noneed'},
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

export const premuim_options = {
    "Under_warranty": "Sous garantie",
    "had_accident": "Ayant déjà subit 1 accident",
    "defects": "Des défauts griffes, coups, usures",
    "km_certificate": "Justifier le parcours kilometrique",
    "technical_check_ok": "Contrôle technique ok",
    "periodic_maintenance": "Respect des entretiens périodiques",
    "next_maintenance_under_5000km": "Prochain entretien dans moins de 5000km",
    "purchase_invoice": "Facture d'achat",
    "gray_card": "Carte grise",
    "maintenance_log": "Possède le carnet d'entretien",
}

export const premium_ncs = [
    {icon: "fas fa-file-contract", name: "Sous garantie", value: "under_warranty", displayFunction: premium_options_display_yes_no},
    {icon: "fas fa-car-crash", name: "Ayant déjà subit 1 accident", value: "had_accident", displayFunction: premium_options_display_yes_no},
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
    {detail: "1. 01car ne peut toutefois pas garantir de manière absolue l'exactitude et l'exhaustivité de l'ensemble de ces informations."},
    {detail: "2. 01car s'engage dans le cadre de l'accès et de l'utilisation du Site, à traiter les données à caractère personnel des personnes physiques, dans le respect de la règlementation française et européenne en matière de protection des données personnelles."},
    {detail: "3. 01car ne saurait donc être tenue pour responsable d'un quelconque dommage que tout internaute pourrait subir à la suite d'une telle utilisation"}
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
    {list: "Rassurer l'acheteur grâce notre questionnaires"},
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

//favorits
export const favorits = [
	  { src: require("assets/img/car/o1car_02.jpg"), marque: "RENAULT", model: "GRAND SCENIC IV", prix:"14 700", Energie:"Essence", Boite:"Manual", km:"34000", year:"2017", nc:"14" },
	  { src: require("assets/img/car/o1car_03.jpg"), marque: "RENAULT", model: "GRAND SCENIC IV", prix:"12 700", Energie:"Essence", Boite:"Manual", km:"14000", year:"2015", nc:"16" },
	  { src: require("assets/img/car/o1car_04.jpg"), marque: "RENAULT", model: "GRAND SCENIC IV", prix:"8 700", Energie:"Essence", Boite:"Manual", km:"24000", year:"2016", nc:"12" },
	  { src: require("assets/img/car/o1car_05.jpg"), marque: "RENAULT", model: "GRAND SCENIC IV", prix:"6 700", Energie:"Essence", Boite:"Manual", km:"8000", year:"2012", nc:"10" }
  ];
