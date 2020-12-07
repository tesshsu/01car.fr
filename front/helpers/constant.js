//page questions part
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
  
export const exterieur_equipements = [
	  { name: "toit ouvrant", value: "sunroof" },
	  { name: "4 roues motrices", value: "4_wheel_drive" },
	  { name: "aide parking av/ar", value: "front_rear_parking_aid" },
	  { name: "caméra de recul", value: "reversing_camera" },
	  { name: "radar de recul", value: "reversing_radar" },
	  { name: "attelage", value: "hitch" },
	  { name: "jantes alu (numero remplir)", value: "aluminum_rims" },
	  { name: "pack sport", value: "sport_pack" },
	  { name: "projecteurs bi-xénon", value: "bi_xenon_headlamps" },
	  { name: "régulateur adaptatif", value: "adaptive_regulator" },
	  { name: "rétroviseurs dégivrants", value: "de_icing_mirrors" },
	  { name: "rétroviseurs électriques", value: "electric_mirrors" },
	  { name: "rétroviseurs rabattables", value: "folding_mirrors" },
	  { name: "rétroviseurs rabattables électriquement", value: "electrically_folding_mirrors" },
	  { name: "sorties d'échappement chromées", value: "chrome_tailpipes" }
  ];

export const interieur_equipements = [
	  { name: "vitres électriques", value: "electric_windows" },
	  { name: "banquette 1/3 - 2/3", value: "bench_1/3_-_2/3" },
	  { name: "banquette rabattable", value: "folding_bench" },
	  { name: "boite automatique", value: "automatic_gearbox" },
	  { name: "climatisation automatique", value: "automatic_air_conditioning" },
	  { name: "démarrage sans clef", value: "keyless_start" },
	  { name: "direction assistée", value: "power_steering" },
	  { name: "écran tactile", value: "touch_screen" },
	  { name: "fermeture électrique", value: "electrical_closing" },
	  { name: "fermeture électrique automatique", value: "automatic_electrical_closing" },
	  { name: "GPS", value: "gps" },
	  { name: "intérieur cuir", value: "leather_interior" },
	  { name: "rétroviseurs rabattables", value: "folding_mirrors" },
	  { name: "kit téléphone main libre", value: "hands_free_phone_kit" },
	  { name: "ouverture du coffre électrique", value: "phone_predisposition" },
	  { name: "palettes au volant", value: "paddle_shifters" },
	  { name: "pare-brise chauffant", value: "heated_windshield" },
	  { name: "pédalier alu", value: "aluminum_crankset" },
	  { name: "prédisposition téléphone", value: "phone_predisposition" },
	  { name: "prise 12V", value: "12V_socket" },
	  { name: "prise audio mini USB", value: "mini_usb_audio_jack" },
	  { name: "prise audio USB", value: "usb_audio_jack" },
	  { name: "régulateur de vitesse", value: "speed_regulator" },
	  { name: "siège conducteur réglable hauteur", value: "height_adjustable_driver_s_seat" },
	  { name: "sièges chauffants", value: "heated_seats" },
	  { name: "sièges électrique à mémoire", value: "electric_memory_seats" },
	  { name: "vitres surteintées", value: "dark_tinted_windows" },
	  { name: "volant sport", value: "sport_steering_wheel" }
  ];

export const securite_equipements = [
	  { name: "Airbags", value: "airbags" },
	  { name: "APPLE CAR PLAY", value: "apple_car_play" },
	  { name: "ABS", value: "abs" },
	  { name: "affichage tête haute", value: "head_up_display" },
	  { name: "aide au démarrage en côte", value: "hill_start_aid" },
	  { name: "alerte franchissement ligne", value: "line_crossing_alert" },
	  { name: "avertisseur d'angle mort", value: "blind_spot_warning" },
	  { name: "essuie-glaces automatiques", value: "automatic_wipers" },
	  { name: "feux et essuie-glaces automatiques", value: "automatic_lights_and_wipers" },
	  { name: "fixations ISOFIX", value: "isofix_bindings" },
	  { name: "kit téléphone main libre bluetooth", value: "bluetooth_hands_free_phone_kit" },
	  { name: "phares av. de jour à LED", value: "led_daytime_running_lights" }
  ];

export const antivol_equipements = [
	  { name: "alarme", value: "alarm" },
	  { name: "anti démarrage", value: "immobilizer" },
	  { name: "gravage des vitres", value: "windows_engraving" }
  ];

export const confort_equipements = [
	  { name: "Bluetooth", value: "bluetooth" },
	  { name: "système d'entrée sans clef", value: "keyless_entry_system" },
	  { name: "virtual cockpit", value: "virtual_cockpit" }
  ];

export const autre_equipements = [
	  { name: "kit de réparation crevaison", value: "flat_tire_repair_kit" },
	  { name: "système Start & Stop", value: "start_stop_system" }
  ];

export const premium_ncs = [
	  { icon: "fas fa-certificate", name: "Sous garantie", value: "oui" },
	  { icon: "fas fa-car-crash", name: "Ayant déjà subit 1 accident", value: "non" },
	  { icon: "fas fa-car-crash", name: "Des défauts griffes, coups, usures", value: "oui" },
	  { icon: "fas fa-certificate", name: "Justifier le parcours kilometrique", value: "oui" },
	  { icon: "fas fa-calendar-check", name: "Contrôle technique ok", value: "oui" },
	  { icon: "far fa-list-alt", name: "Respect des entretiens périodiques", value: "oui" },
	  { icon: "far fa-calendar-alt", name: "Prochaine entretien", value: "Moins de 5000km" },
	  { icon: "fas fa-print", name: "Facture d'achat", value: "oui" },
	  { icon: "far fa-id-badge", name: "Carte grise", value: "Oui" },
	  { icon: "fas fa-copy", name: "Possède le carnet d'entretien", value: "Oui" }
  ];

export const lists = [
  { detail: "1. 01car ne peut toutefois pas garantir de manière absolue l'exactitude et l'exhaustivité de l'ensemble de ces informations." },
  { detail: "2. 01car s'engage dans le cadre de l'accès et de l'utilisation du Site, à traiter les données à caractère personnel des personnes physiques, dans le respect de la règlementation française et européenne en matière de protection des données personnelles." },
  { detail: "3. 01car ne saurait donc être tenue pour responsable d'un quelconque dommage que tout internaute pourrait subir à la suite d'une telle utilisation" }
  ];

//pub part
export const pubs = [
	  { icon: "fas fa-hands-helping", name: "Un intermédiaire de confiance" },
	  { icon: "fas fa-clipboard-check", name: "Sécuriser au maximum l'achat de son véhicule" },
	  { icon: "far fa-paper-plane", name: "ACHETER FACILEMENT VOTRE VÉHICULE" }
  ];

export const listPubs = [
	  { icon: "far fa-smile text-lg mr-1", title: "Note de confiance" },
	  { icon: "fas fa-unlock-alt text-lg mr-1", title: "Sécuriser au maximum" },
	  { icon: "far fa-thumbs-up text-lg mr-1", title: "Vendre facilement" }
  ];

export const basics = [
	  { icon: "fas fa-hands-helping", name: "informations principales du véhicule" },
	  { icon: "fas fa-clipboard-check", name: "Tête de liste, grande visibilité" },
	  { icon: "far fa-paper-plane", name: "Modifier à tout moment le prix du véhicule" },
	  { icon: "fas fa-database", name: "Fiabilité des données du véhicule" },
	  { icon: "fas fa-award", name: "Les valeurs de déclenchement de transaction particulier et professionel qualifié"}
  ];

export const pubIconlists = [
	  { icon: "far fa-smile text-lg mr-1", name: "Note de confiance" },
	  { icon: "fas fa-unlock-alt text-lg mr-1", name: "Sécuriser au maximum" },
	  { icon: "fas fa-certificate text-lg mr-1", name: "Vendre facilement" }
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
	  { icon: "fas fa-database", width: {width: '15%'} , name: "Récupération des données 15%" },
	  { icon: "fas fa-money-check-alt", width: {width: '21%'}, name: "Salaires 21%" },
	  { icon: "fas fa-server", width: {width: '21%'}, name: "Hébergement 21%" },
	  { icon: "fas fa-wallet", width: {width: '15%'}, name: "Dépenses 15%" },
	  { icon: "fas fa-cash-register", width: {width: '15%'}, name: "Frais 15%"},
	  { icon: "fas fa-users", width: {width: '17%'}, name: "Bénéfices 17%"}
  ];
