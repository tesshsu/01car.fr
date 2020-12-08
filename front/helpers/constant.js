//page questions part

export const mapToObject= function(m){
    return Object.entries(m).map(([value, name]) => {
        return {name: name, value: value};
    });
}

export const fuelOptions = [
    {note: 0, label: 'Diesel', value: 'Diesel'},
    {note: 0, label: 'Électrique', value: 'Électrique'},
    {note: 0, label: 'Essence', value: 'Essence'},
    {note: 0, label: 'Ethanol', value: 'Ethanol'},
    {note: 0, label: 'GPL', value: 'GPL'},
    {note: 0, label: 'Hybrid', value: 'Hybrid'}
];

export const statuVendeurOptions = [
    {note: "1", label: 'particulier', value: 'private'},
    {note: "0", label: 'professionnel', value: 'pro'}
]

export const dateDispoOptions = [
    {note: 1, label: 'Immédiatement', value: 'immediately'},
    {note: 0, label: 'Dans un mois', value: 'one_month'},
    {note: 0, label: 'Plus tard', value: 'later'}
]

export const furmeurOptions = [
    {note: 1, label: 'non fumeur', value: 'false'},
    {note: 0, label: 'fumeur', value: 'true'}
]

export const OuiOptions = [
    {note: 1, label: 'Oui', value: 'true'},
    {note: 0, label: 'Non', value: 'false'}
]

export const NonOptions = [
    {note: 1, label: 'Non', value: 'false'},
    {note: 0, label: 'Oui', value: 'true'}
]

export const raisonVendreOptions = [
    {note: 1, label: 'Changer de véhicule', value: 'change'},
    {note: 0, label: 'Autre projet', value: 'other'}
]

export const numMainsOptions = [
    {note: 1, label: '1ère ou 2ème main', value: '1'},
    {note: 0, label: '3ème main ou plus', value: '3'}
]

export const etatCarOptions = [
    {note: 1, label: 'Neuf', value: 'new'},
    {note: 1, label: 'Très bon état', value: 'very_good'},
    {note: 1, label: 'Bon état', value: 'good'},
    {note: 0, label: 'satisfaisant', value: 'satisfactory'},
]

export const originCarOptions = [
    {note: 1, label: 'française', value: 'FR'},
    {note: 0, label: 'étrangère', value: 'ZZ'}
]

export const prochaineEntretienOptions = [
    {note: 1, label: 'Moins de 5000km', value: 'true'},
    {note: 0, label: 'Plus de 5000km', value: 'false'}
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

export const premium_ncs = [
    {icon: "fas fa-certificate", name: "Sous garantie", value: "oui"},
    {icon: "fas fa-car-crash", name: "Ayant déjà subit 1 accident", value: "non"},
    {icon: "fas fa-car-crash", name: "Des défauts griffes, coups, usures", value: "oui"},
    {icon: "fas fa-certificate", name: "Justifier le parcours kilometrique", value: "oui"},
    {icon: "fas fa-calendar-check", name: "Contrôle technique ok", value: "oui"},
    {icon: "far fa-list-alt", name: "Respect des entretiens périodiques", value: "oui"},
    {icon: "far fa-calendar-alt", name: "Prochaine entretien", value: "Moins de 5000km"},
    {icon: "fas fa-print", name: "Facture d'achat", value: "oui"},
    {icon: "far fa-id-badge", name: "Carte grise", value: "Oui"},
    {icon: "fas fa-copy", name: "Possède le carnet d'entretien", value: "Oui"}
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
    {icon: "fas fa-hands-helping", name: "informations principales du véhicule"},
    {icon: "fas fa-clipboard-check", name: "Tête de liste, grande visibilité"},
    {icon: "far fa-paper-plane", name: "Modifier à tout moment le prix du véhicule"},
    {icon: "fas fa-database", name: "Fiabilité des données du véhicule"},
    {icon: "fas fa-award", name: "Les valeurs de déclenchement de transaction particulier et professionel qualifié"}
];

export const pubIconlists = [
    {icon: "far fa-smile text-lg mr-1", name: "Note de confiance"},
    {icon: "fas fa-unlock-alt text-lg mr-1", name: "Sécuriser au maximum"},
    {icon: "fas fa-certificate text-lg mr-1", name: "Vendre facilement"}
];

//price page part
export const classics = [
    {list: "Annonces pré-remplie"},
    {list: "Annonces gratuite"},
    {list: "Contacter vendeur direct"}
];
export const premiums = [
    {list: "Rassurer l'acheteur grâce aux réponses"},
    {list: "Tête de liste, grande visibilité"},
    {list: "Logo qualité garantie"},
    {list: "Modifier à tout moment le prix du véhicule"},
    {list: "Les valeurs de déclenchement de transaction particulier et professionel qualifié"},
    {list: "Contacter vendeur direct"}
];
export const pubTransparents = [
    {icon: "fas fa-database", width: {width: '15%'}, name: "Récupération des données 15%"},
    {icon: "fas fa-money-check-alt", width: {width: '21%'}, name: "Salaires 21%"},
    {icon: "fas fa-server", width: {width: '21%'}, name: "Hébergement 21%"},
    {icon: "fas fa-wallet", width: {width: '15%'}, name: "Dépenses 15%"},
    {icon: "fas fa-cash-register", width: {width: '15%'}, name: "Frais 15%"},
    {icon: "fas fa-users", width: {width: '17%'}, name: "Bénéfices 17%"}
];
