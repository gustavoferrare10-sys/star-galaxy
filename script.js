const planetsData = [
    {
        name: 'TATOOINE',
        region: 'Territórios Externos',
        type: 'desert',
        position: { x: 75, y: 60 },
        image: 'https://lumiere-a.akamaihd.net/v1/images/tatooine-main_ab0d5b63.jpeg?region=0%2C0%2C1280%2C720',
        heroImage: 'https://lumiere-a.akamaihd.net/v1/images/databank_tatooine_01_169_68ba9bdc.jpeg?region=0%2C0%2C1560%2C878',
        climate: 'Árido',
        terrain: 'Deserto com mares de dunas',
        population: '200.000',
        species: 'Humanos, Jawas, Tuskens',
        affiliation: 'República / Império / Nova República',
        history: 'Planeta desértico com dois sóis, berço de Anakin e Luke Skywalker. Local crucial na história da Força, onde tudo começou para os Skywalker. Palco de disputas entre Hutts e forças imperiais. Aqui, a saga começou e terminou.',
        landmarks: 'Mos Eisley (porto espacial), Palácio de Jabba, Fazenda Lars, Cânion Jundland, Mos Espa',
    },
    {
        name: 'CORUSCANT',
        region: 'Mundos do Núcleo',
        type: 'urban',
        position: { x: 50, y: 50 },
        image: 'https://lumiere-a.akamaihd.net/v1/images/Coruscant_03fb6e97.jpeg?region=0%2C0%2C1536%2C864',
        heroImage: 'https://lumiere-a.akamaihd.net/v1/images/databank_coruscant_01_169_1f7df6b8.jpeg?region=0%2C0%2C1560%2C878',
        climate: 'Temperado (controlado)',
        terrain: 'Ecumenópole (cidade-planeta)',
        population: '1 trilhão+',
        species: 'Diversas espécies',
        affiliation: 'República / Império / Nova República',
        history: 'Capital da República Galáctica por milênios, sede do Templo Jedi e depois do Império. Centro político, econômico e cultural da galáxia. Palco da Ordem 66 e da queda dos Jedi. Uma única cidade cobrindo todo o planeta.',
        landmarks: 'Templo Jedi, Senado Galáctico, Palácio Imperial, Níveis Inferiores (submundo), Distrito de Entretenimento',
    },
    {
        name: 'HOTH',
        region: 'Territórios Externos',
        type: 'ice',
        position: { x: 20, y: 30 },
        image: 'https://lumiere-a.akamaihd.net/v1/images/hoth_2c096794.jpeg?region=0%2C0%2C1280%2C720',
        heroImage: 'https://lumiere-a.akamaihd.net/v1/images/databank_hoth_01_169_5c0e99d7.jpeg?region=0%2C0%2C1560%2C878',
        climate: 'Glacial extremo',
        terrain: 'Tundra congelada, planícies de gelo',
        population: 'Desabitado (exceto base rebelde)',
        species: 'Wampas, Tauntauns',
        affiliation: 'Aliança Rebelde',
        history: 'Planeta de gelo que serviu como base secreta da Aliança Rebelde após a destruição da primeira Estrela da Morte. Palco da épica Batalha de Hoth, onde os rebeldes resistiram heroicamente ao ataque imperial com AT-ATs antes de evacuar para Dagobah.',
        landmarks: 'Base Echo, Planícies de Gelo Norte, Cavernas Wampa, Perímetro Defensivo',
    },
    {
        name: 'ENDOR',
        region: 'Territórios Externos',
        type: 'forest',
        position: { x: 85, y: 45 },
        image: 'https://lumiere-a.akamaihd.net/v1/images/endor_ba864df0.jpeg?region=0%2C0%2C1536%2C864',
        heroImage: 'https://lumiere-a.akamaihd.net/v1/images/databank_endor_01_169_747eca21.jpeg?region=0%2C0%2C1560%2C878',
        climate: 'Temperado',
        terrain: 'Florestas densas de árvores gigantes',
        population: '30 milhões (Ewoks)',
        species: 'Ewoks',
        affiliation: 'Aliança Rebelde',
        history: 'Lua florestal habitada pelos primitivos mas corajosos Ewoks. Local da batalha final da Guerra Civil Galáctica, onde a segunda Estrela da Morte foi destruída e o Imperador Palpatine foi derrotado definitivamente por Darth Vader, trazendo equilíbrio à Força.',
        landmarks: 'Vilas Ewok nas árvores, Gerador de Escudo Imperial, Plataforma de Aterrissagem, Ruínas da Estrela da Morte',
    },
    {
        name: 'NABOO',
        region: 'Borda Média',
        type: 'ocean',
        position: { x: 45, y: 65 },
        image: 'https://lumiere-a.akamaihd.net/v1/images/naboo_2c2e2eda.jpeg?region=0%2C0%2C1536%2C864',
        heroImage: 'https://lumiere-a.akamaihd.net/v1/images/databank_naboo_01_169_61347450.jpeg?region=0%2C0%2C1560%2C878',
        climate: 'Temperado',
        terrain: 'Planícies, oceanos, pântanos',
        population: '600 milhões',
        species: 'Humanos (Naboo), Gungans',
        affiliation: 'República / Império',
        history: 'Planeta pacífico de beleza extraordinária, lar da Rainha/Senadora Padmé Amidala. Invadido pela Federação de Comércio no início das Guerras Clônicas, foi o catalisador da ascensão de Palpatine ao poder. Possui civilizações na superfície e submersas.',
        landmarks: 'Theed (capital), Gungan City (subaquática), Lago Country, Palácio Real, Planícies de Grama',
    },
    {
        name: 'MUSTAFAR',
        region: 'Territórios Externos',
        type: 'volcanic',
        position: { x: 80, y: 75 },
        image: 'https://lumiere-a.akamaihd.net/v1/images/mustafar_c77c4c5b.jpeg?region=0%2C0%2C1536%2C864',
        heroImage: 'https://lumiere-a.akamaihd.net/v1/images/databank_mustafar_01_169_64007de0.jpeg?region=0%2C0%2C1560%2C878',
        climate: 'Extremamente quente',
        terrain: 'Vulcânico, rios de lava',
        population: 'Poucos milhares',
        species: 'Mustafarianos',
        affiliation: 'Separatistas / Império',
        history: 'Mundo vulcânico infernal onde Anakin Skywalker foi derrotado por Obi-Wan Kenobi em um duelo épico, perdendo seus membros e sendo queimado, tornando-se Darth Vader. Sede de uma fortaleza Sith e do castelo sombrio de Vader.',
        landmarks: 'Castelo de Vader, Instalações de Mineração, Campos de Lava, Plataformas de Coleta',
    },
    {
        name: 'DAGOBAH',
        region: 'Borda Externa',
        type: 'swamp',
        position: { x: 15, y: 70 },
        image: 'https://lumiere-a.akamaihd.net/v1/images/dagobah_2187c2eb.jpeg?region=0%2C0%2C1536%2C864',
        heroImage: 'https://lumiere-a.akamaihd.net/v1/images/databank_dagobah_01_169_b4bb8275.jpeg?region=0%2C0%2C1560%2C878',
        climate: 'Úmido e nebuloso',
        terrain: 'Pântanos densos',
        population: 'Desabitado',
        species: 'Fauna selvagem pantanosa',
        affiliation: 'Neutro',
        history: 'Planeta pantanoso remoto onde o Mestre Jedi Yoda se exilou após a execução da Ordem 66. Local do intenso treinamento de Luke Skywalker nos caminhos da Força. Rico em energia do Lado Luminoso, mas com uma caverna impregnada pelo Lado Sombrio.',
        landmarks: 'Caverna do Lado Sombrio, Choupana de Yoda, Árvore Gnarltree, Lagoas Profundas',
    },
    {
        name: 'BESPIN',
        region: 'Borda Externa',
        type: 'gas',
        position: { x: 30, y: 55 },
        image: 'https://lumiere-a.akamaihd.net/v1/images/bespin_2bc12084.jpeg?region=0%2C0%2C1536%2C864',
        heroImage: 'https://lumiere-a.akamaihd.net/v1/images/databank_cloudcity_01_169_8205ba16.jpeg?region=0%2C0%2C1560%2C878',
        climate: 'Temperado (nas cidades suspensas)',
        terrain: 'Gigante gasoso',
        population: '6 milhões',
        species: 'Humanos, Ugnaughts',
        affiliation: 'Neutro / Império',
        history: 'Gigante gasoso lar da elegante Cidade das Nuvens, administrada por Lando Calrissian. Famoso por suas instalações de mineração de gás tibanna usado em blasters. Palco da traição de Lando (forçada) e captura de Han Solo pelo Império.',
        landmarks: 'Cloud City, Plataformas de Mineração, Zona de Extração de Gás, Distrito Residencial',
    },
    {
        name: 'KASHYYYK',
        region: 'Borda Média',
        type: 'forest',
        position: { x: 40, y: 40 },
        image: 'https://lumiere-a.akamaihd.net/v1/images/kashyyyk_c6c22170.jpeg?region=0%2C0%2C1536%2C864',
        heroImage: 'https://lumiere-a.akamaihd.net/v1/images/databank_kashyyyk_01_169_88f7f144.jpeg?region=0%2C0%2C1560%2C878',
        climate: 'Tropical úmido',
        terrain: 'Florestas de árvores wroshyr gigantescas',
        population: '45 milhões',
        species: 'Wookiees',
        affiliation: 'República',
        history: 'Mundo natal dos nobres Wookiees, coberto por árvores wroshyr que atingem quilômetros de altura. Palco de batalha crucial durante as Guerras Clônicas. Os Wookiees foram cruelmente escravizados pelo Império. Lar do lendário Chewbacca.',
        landmarks: 'Kachirho (cidade costeira), Árvores Wroshyr, Praias Tropicais, Níveis das Copas',
    },
    {
        name: 'GEONOSIS',
        region: 'Borda Externa',
        type: 'desert',
        position: { x: 70, y: 80 },
        image: 'https://lumiere-a.akamaihd.net/v1/images/geonosis_c168335c.jpeg?region=0%2C0%2C1536%2C864',
        heroImage: 'https://lumiere-a.akamaihd.net/v1/images/databank_geonosis_01_169_c0e8c5d8.jpeg?region=0%2C0%2C1560%2C878',
        climate: 'Árido',
        terrain: 'Deserto rochoso com formações estranhas',
        population: '100 bilhões (Geonosianos)',
        species: 'Geonosianos',
        affiliation: 'Separatistas',
        history: 'Planeta desértico onde as Guerras Clônicas começaram oficialmente com uma batalha massiva. Os Geonosianos, mestres construtores, projetaram a primeira Estrela da Morte. Suas colmeias subterrâneas abrigam fábricas de droides.',
        landmarks: 'Arena Petranaki, Colmeias Geonosianas, Fábricas de Droides, Planícies Rochosas',
    },
    {
        name: 'KAMINO',
        region: 'Espaço Selvagem',
        type: 'ocean',
        position: { x: 10, y: 15 },
        image: 'https://lumiere-a.akamaihd.net/v1/images/kamino_716897ea.jpeg?region=0%2C0%2C1536%2C864',
        heroImage: 'https://lumiere-a.akamaihd.net/v1/images/databank_kamino_01_169_f64f6982.jpeg?region=0%2C0%2C1560%2C878',
        climate: 'Tempestuoso',
        terrain: 'Oceanos infinitos',
        population: '1 bilhão',
        species: 'Kaminoanos',
        affiliation: 'República',
        history: 'Mundo oceânico misterioso além da Borda Externa, removido dos arquivos Jedi por Count Dooku. Local onde o exército clone foi secretamente criado para a República. Os Kaminoanos são mestres absolutos em clonagem e engenharia genética.',
        landmarks: 'Tipoca City (sobre palafitas), Centros de Clonagem, Plataformas Oceânicas, Laboratórios Genéticos',
    },
    {
        name: 'ALDERAAN',
        region: 'Mundos do Núcleo',
        type: 'peaceful',
        position: { x: 55, y: 45 },
        image: 'https://lumiere-a.akamaihd.net/v1/images/alderaan-main_f5b1a8ed.jpeg?region=0%2C0%2C1280%2C720',
        heroImage: 'https://lumiere-a.akamaihd.net/v1/images/databank_alderaan_01_169_9bdc8b90.jpeg?region=0%2C0%2C1560%2C878',
        climate: 'Temperado perfeito',
        terrain: 'Planícies, montanhas, mares',
        population: '2 bilhões (DESTRUÍDO)',
        species: 'Humanos',
        affiliation: 'República / Aliança Rebelde',
        history: 'Planeta pacífico e culturalmente rico, conhecido por sua beleza natural e diplomacia. Lar da Princesa Leia Organa. Foi completamente destruído pela primeira Estrela da Morte como demonstração brutal de poder do Império, tornando-se símbolo eterno da tirania imperial.',
        landmarks: 'Aldera (capital), Cordilheiras Nevadas, Campos de Grama, Universidade de Aldera (DESTRUÍDOS)',
    },
    {
        name: 'JAKKU',
        region: 'Territórios Externos',
        type: 'desert',
        position: { x: 78, y: 25 },
        image: 'https://lumiere-a.akamaihd.net/v1/images/jakku_17c32079.jpeg?region=0%2C0%2C1536%2C864',
        heroImage: 'https://lumiere-a.akamaihd.net/v1/images/databank_jakku_01_169_ca7c9cc1.jpeg?region=0%2C0%2C1560%2C878',
        climate: 'Árido extremo',
        terrain: 'Deserto com destroços de naves',
        population: 'Poucos milhares',
        species: 'Humanos, sucateiros',
        affiliation: 'Neutro',
        history: 'Planeta desértico remoto que foi palco da batalha final entre o Império e a Nova República. Coberto por destroços de Star Destroyers e outras naves da guerra. Lar de Rey antes de descobrir seu destino Jedi.',
        landmarks: 'Campo de Destroços, Posto de Niima, Destroços de Star Destroyers, Assentamento de Tuanul',
    },
    {
        name: 'SCARIF',
        region: 'Territórios Externos',
        type: 'tropical',
        position: { x: 72, y: 68 },
        image: 'https://lumiere-a.akamaihd.net/v1/images/scarif_76b7548e.jpeg?region=0%2C0%2C1536%2C864',
        heroImage: 'https://lumiere-a.akamaihd.net/v1/images/databank_scarif_01_169_e686d82e.jpeg?region=0%2C0%2C1560%2C878',
        climate: 'Tropical',
        terrain: 'Ilhas tropicais, praias',
        population: 'Poucos milhares (militar)',
        species: 'Humanos',
        affiliation: 'Império',
        history: 'Paraíso tropical que foi transformado em base imperial ultrassecreta. Guardava os planos da Estrela da Morte em seus arquivos. Palco da Batalha de Scarif onde a Aliança Rebelde roubou os planos, sacrificando muitos heróis.',
        landmarks: 'Cidadela (centro de dados), Portão de Escudo, Praias Tropicais, Torre de Comunicações',
    },
    {
        name: 'MANDALORE',
        region: 'Territórios Externos',
        type: 'desert',
        position: { x: 35, y: 38 },
        image: 'https://lumiere-a.akamaihd.net/v1/images/mandalore_1051ce13.jpeg?region=0%2C0%2C1536%2C864',
        heroImage: 'https://lumiere-a.akamaihd.net/v1/images/databank_mandalore_01_169_b3421cf0.jpeg?region=0%2C0%2C1560%2C878',
        climate: 'Árido (pós-guerra)',
        terrain: 'Desertos vítreos, cidades cúpula',
        population: '4 milhões',
        species: 'Mandalorianos (humanos)',
        affiliation: 'Neutro / Império',
        history: 'Mundo natal dos lendários guerreiros Mandalorianos. Devastado por guerras antigas, sua superfície foi transformada em desertos brancos. Sob ocupação imperial, resistiu através de clãs secretos. Lar de Din Djarin e Boba Fett.',
        landmarks: 'Sundari (capital sob cúpula), Minas de Beskar, Deserto Vítreo, Fortaleza Mandaloriana',
    },
    {
        name: 'YAVIN IV',
        region: 'Borda Externa',
        type: 'jungle',
        position: { x: 82, y: 52 },
        image: 'https://lumiere-a.akamaihd.net/v1/images/yavin-4-main_c7e8120d.jpeg?region=0%2C0%2C1280%2C720',
        heroImage: 'https://lumiere-a.akamaihd.net/v1/images/databank_yaviniv_01_169_d0096294.jpeg?region=0%2C0%2C1560%2C878',
        climate: 'Tropical úmido',
        terrain: 'Selvas densas, templos antigos',
        population: 'Desabitado (exceto base)',
        species: 'Fauna selvagem',
        affiliation: 'Aliança Rebelde',
        history: 'Lua de selva habitada por ruínas de templos Massassi antigos. Serviu como base principal da Aliança Rebelde. Foi daqui que os X-wings decolaram para destruir a primeira Estrela da Morte, marcando a primeira grande vitória rebelde.',
        landmarks: 'Grande Templo (Base Rebelde), Templos Massassi, Selvas Densas, Hangares Rebeldes',
    },
    {
        name: 'LOTHAL',
        region: 'Territórios Externos',
        type: 'grassland',
        position: { x: 63, y: 42 },
        image: 'https://lumiere-a.akamaihd.net/v1/images/lothal-main_1571d6da.jpeg?region=0%2C0%2C1280%2C720',
        heroImage: 'https://lumiere-a.akamaihd.net/v1/images/databank_lothal_01_169_67897af9.jpeg?region=0%2C0%2C1560%2C878',
        climate: 'Temperado',
        terrain: 'Planícies de grama, planaltos',
        population: '12 milhões',
        species: 'Humanos, Lothcats',
        affiliation: 'Império / Rebeldes',
        history: 'Planeta de planícies que foi ocupado pelo Império para exploração. Berço do movimento rebelde liderado pela tripulação do Ghost. Ezra Bridger e Kanan Jarrus treinaram aqui. Possui um templo Jedi oculto e conexões profundas com a Força.',
        landmarks: 'Capital City, Templo Jedi, Planícies do Norte, Fábrica Imperial',
    },
    {
        name: 'TAKODANA',
        region: 'Territórios do Meio',
        type: 'forest',
        position: { x: 58, y: 58 },
        image: 'https://lumiere-a.akamaihd.net/v1/images/takodana_ba8d8844.jpeg?region=0%2C0%2C1536%2C864',
        heroImage: 'https://lumiere-a.akamaihd.net/v1/images/databank_takodana_01_169_75acfe54.jpeg?region=0%2C0%2C1560%2C878',
        climate: 'Temperado úmido',
        terrain: 'Lagos, florestas',
        population: 'Poucos milhares',
        species: 'Diversas',
        affiliation: 'Neutro',
        history: 'Planeta neutro coberto por lagos e florestas antigas. Lar do Castelo de Maz Kanata, um refúgio para viajantes, contrabandistas e aqueles que buscam sabedoria. Foi aqui que Rey encontrou o sabre de luz de Luke Skywalker.',
        landmarks: 'Castelo de Maz Kanata, Lagos Espelhados, Florestas Antigas, Porto de Desembarque',
    },
    {
        name: 'CRAIT',
        region: 'Territórios Externos',
        type: 'salt',
        position: { x: 88, y: 62 },
        image: 'https://lumiere-a.akamaihd.net/v1/images/crait_3673812f.jpeg?region=0%2C0%2C1536%2C864',
        heroImage: 'https://lumiere-a.akamaihd.net/v1/images/databank_crait_01_169_3ea0ffbf.jpeg?region=0%2C0%2C1560%2C878',
        climate: 'Árido',
        terrain: 'Planícies de sal branco',
        population: 'Desabitado',
        species: 'Cristais-raposa',
        affiliation: 'Resistência',
        history: 'Planeta mineral remoto coberto por sal branco sobre solo vermelho. Abrigou antiga base rebelde abandonada. Foi o local do confronto final entre a Resistência e a Primeira Ordem, onde Luke Skywalker se sacrificou para salvar a galáxia.',
        landmarks: 'Base Rebelde Abandonada, Planícies de Sal, Trincheiras Naturais, Minas de Cristal',
    },
    {
        name: 'EXEGOL',
        region: 'Regiões Desconhecidas',
        type: 'dark',
        position: { x: 92, y: 35 },
        image: 'https://lumiere-a.akamaihd.net/v1/images/exegol_449b3a63.jpeg?region=0%2C0%2C1536%2C864',
        heroImage: 'https://lumiere-a.akamaihd.net/v1/images/databank_exegol_01_169_58cdc1b3.jpeg?region=0%2C0%2C1560%2C878',
        climate: 'Tempestuoso perpétuo',
        terrain: 'Deserto rochoso, tempestades',
        population: 'Desconhecido',
        species: 'Cultistas Sith',
        affiliation: 'Império Sith Final',
        history: 'Mundo oculto nas Regiões Desconhecidas, escondido por tempestades perpétuas. Refugio secreto do Imperador Palpatine ressuscitado e local da Frota Sith Eterna. Aqui, a saga Skywalker teve seu confronto final entre Rey e Palpatine.',
        landmarks: 'Cidadela Sith, Frota Eterna, Tempestades Vermelhas, Trono do Imperador',
    }
];

// Rotas hiperespaciais (conectando planetas importantes)
const hyperspaceRoutes = [
    // Rota de Comércio Principal (Corellian Run)
    { from: 'CORUSCANT', to: 'NABOO', type: 'major' },
    { from: 'NABOO', to: 'TATOOINE', type: 'major' },
    
    // Hydian Way
    { from: 'CORUSCANT', to: 'ALDERAAN', type: 'major' },
    { from: 'ALDERAAN', to: 'KASHYYYK', type: 'major' },
    { from: 'KASHYYYK', to: 'GEONOSIS', type: 'major' },
    
    // Rotas Secundárias
    { from: 'HOTH', to: 'BESPIN', type: 'secondary' },
    { from: 'BESPIN', to: 'DAGOBAH', type: 'secondary' },
    { from: 'TATOOINE', to: 'GEONOSIS', type: 'secondary' },
    { from: 'ENDOR', to: 'CORUSCANT', type: 'secondary' },
    { from: 'MUSTAFAR', to: 'GEONOSIS', type: 'secondary' },
    { from: 'YAVIN IV', to: 'ENDOR', type: 'secondary' },
    { from: 'JAKKU', to: 'TATOOINE', type: 'secondary' },
    { from: 'SCARIF', to: 'YAVIN IV', type: 'secondary' },
    { from: 'LOTHAL', to: 'CORUSCANT', type: 'secondary' },
    { from: 'MANDALORE', to: 'CORUSCANT', type: 'secondary' },
    { from: 'TAKODANA', to: 'CORUSCANT', type: 'secondary' },
    { from: 'CRAIT', to: 'ENDOR', type: 'secondary' },
];

const galaxyMap = document.getElementById('galaxyMap');
const planetInfo = document.getElementById('planetInfo');
const planetContent = document.getElementById('planetContent');
const routesLayer = document.querySelector('.routes-layer');

// Função para desenhar rotas
function drawRoutes() {
    const mapRect = galaxyMap.getBoundingClientRect();
    
    hyperspaceRoutes.forEach(route => {
        const fromPlanet = planetsData.find(p => p.name === route.from);
        const toPlanet = planetsData.find(p => p.name === route.to);
        
        if (fromPlanet && toPlanet) {
            const x1 = (fromPlanet.position.x / 100) * mapRect.width;
            const y1 = (fromPlanet.position.y / 100) * mapRect.height;
            const x2 = (toPlanet.position.x / 100) * mapRect.width;
            const y2 = (toPlanet.position.y / 100) * mapRect.height;
            
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', x1);
            line.setAttribute('y1', y1);
            line.setAttribute('x2', x2);
            line.setAttribute('y2', y2);
            line.setAttribute('class', `route ${route.type}`);
            
            routesLayer.appendChild(line);
        }
    });
}

// Criar planetas
planetsData.forEach((planet, index) => {
    const planetEl = document.createElement('div');
    planetEl.className = `planet ${planet.type}`;
    planetEl.setAttribute('data-name', planet.name);
    planetEl.style.left = `${planet.position.x}%`;
    planetEl.style.top = `${planet.position.y}%`;
    planetEl.style.backgroundImage = `url('${planet.image}')`;
    planetEl.style.animationDelay = `${Math.random() * 3}s`;
    
    planetEl.addEventListener('click', () => showPlanetInfo(planet));
    galaxyMap.appendChild(planetEl);
});

// Desenhar rotas após planetas
drawRoutes();

function showPlanetInfo(planet) {
    planetContent.innerHTML = `
        <div class="planet-hero-image" style="background-image: url('${planet.heroImage}');">
        </div>
        
        <div class="planet-content-wrapper">
            <div class="planet-header">
                <h2 class="planet-name">${planet.name}</h2>
                <p class="planet-region">${planet.region}</p>
            </div>

            <div class="info-section">
                <h3>Características</h3>
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">Clima</div>
                        <div class="info-value">${planet.climate}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Terreno</div>
                        <div class="info-value">${planet.terrain}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">População</div>
                        <div class="info-value">${planet.population}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Espécies</div>
                        <div class="info-value">${planet.species}</div>
                    </div>
                </div>
            </div>

            <div class="info-section">
                <h3>Alinhamento Político</h3>
                <p class="info-text">${planet.affiliation}</p>
            </div>

            <div class="info-section">
                <h3>Importância Histórica</h3>
                <p class="info-text">${planet.history}</p>
            </div>

            <div class="info-section">
                <h3>Localizações Importantes</h3>
                <p class="info-text">${planet.landmarks}</p>
                <div class="mini-map">
                    <div class="mini-map-grid"></div>
                    <div class="mini-map-content">
                        <strong>${planet.name}</strong><br>
                        <small>${planet.landmarks.split(',')[0]}</small><br>
                        <small style="opacity: 0.7;">e outras regiões estratégicas</small>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    planetInfo.classList.add('active');
}

function closePlanetInfo() {
    planetInfo.classList.remove('active');
}

// Close panel on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePlanetInfo();
});

// Redesenhar rotas ao redimensionar
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        routesLayer.innerHTML = '';
        drawRoutes();
    }, 250);
});
