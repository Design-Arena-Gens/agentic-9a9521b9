import Image from "next/image";

const tocEntries = [
  { id: "introduction", title: "Introduction générale" },
  { id: "enjeux", title: "Enjeux énergétiques et climatiques" },
  { id: "etat-art", title: "État de l'art des systèmes de suivi solaire" },
  { id: "objectifs", title: "Objectifs et périmètre du mémoire" },
  { id: "methodologie", title: "Démarche méthodologique" },
  { id: "architecture", title: "Architecture globale du système bi-axial" },
  { id: "mecanique", title: "Conception mécanique et structurelle" },
  { id: "electronique", title: "Architecture électronique et choix Arduino" },
  { id: "logiciel", title: "Algorithmes de contrôle et logiciel embarqué" },
  { id: "dimensionnement", title: "Modélisation, simulations et dimensionnement" },
  { id: "prototype", title: "Prototype, essais et validation" },
  { id: "exploitation", title: "Exploitation, maintenance et sûreté de fonctionnement" },
  { id: "impacts", title: "Analyse techno-économique et environnementale" },
  { id: "cas-usage", title: "Cas d'utilisation concrets" },
  { id: "ameliorations", title: "Limites, inconvénients et axes d'amélioration" },
  { id: "recommandations", title: "Recommandations d'optimisation" },
  { id: "annexes", title: "Annexes techniques et ressources" }
];

export default function Page() {
  return (
    <div className="page">
      <header>
        <h1 className="title">
          Mémoire d&apos;ingénieure — Système de Suivi Solaire Automatique Bi-axial piloté par Arduino
        </h1>
        <p className="subtitle">
          Étude complète de conception, réalisation, validation et déploiement d&apos;une solution de pilotage
          intelligent de panneaux photovoltaïques à double axe.
        </p>

        <div className="metadata-grid">
          <div className="metadata-card">
            <span className="metadata-label">Auteur</span>
            <span className="metadata-value">Candidate ingénieure en énergies renouvelables</span>
          </div>
          <div className="metadata-card">
            <span className="metadata-label">Encadrement</span>
            <span className="metadata-value">Dr. Pierre Vautrin — Laboratoire Systèmes Électriques</span>
          </div>
          <div className="metadata-card">
            <span className="metadata-label">Session</span>
            <span className="metadata-value">Septembre 2024</span>
          </div>
          <div className="metadata-card">
            <span className="metadata-label">Mots-clés</span>
            <span className="metadata-value">
              Photovoltaïque, Arduino, Suivi solaire bi-axial, Contrôle-commande, Énergies renouvelables, IoT
            </span>
          </div>
        </div>
      </header>

      <nav className="toc" aria-label="Table des matières">
        <h2>Table des matières détaillée</h2>
        <ul>
          {tocEntries.map((entry) => (
            <li key={entry.id}>
              <a href={`#${entry.id}`}>{entry.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      <section className="section" id="introduction">
        <h2>Introduction générale</h2>
        <p>
          La transition énergétique impose d&apos;accroître la part des énergies renouvelables dans le mix mondial, et
          le photovoltaïque se positionne comme l&apos;une des filières les plus dynamiques de la dernière décennie.
          Toutefois, l&apos;amélioration du rendement énergétique des installations demeure un enjeu central. Les
          panneaux solaires fixes ne captent qu&apos;une fraction limitée de l&apos;irradiation disponible, car la
          position apparente du soleil varie continuellement en fonction de l&apos;heure, de la saison et de la latitude.
          Face à ce constat, les systèmes de suivi solaire automatisés (ou trackers solaires) représentent un levier
        majeur pour maximiser la production d&apos;électricité sans augmenter la surface installée.
        </p>
        <p>
          Ce mémoire propose une étude exhaustive de la conception d&apos;un système de suivi bi-axial, c&apos;est-à-dire
          capable d&apos;ajuster l&apos;orientation d&apos;un module photovoltaïque selon l&apos;azimut et l&apos;élévation afin
          de maintenir un angle de rayonnement optimal. L&apos;instrumentation repose sur une architecture open-source
          articulée autour d&apos;un microcontrôleur Arduino, choisi pour sa flexibilité, son écosystème riche et sa
          capacité à fédérer des modules de mesure ainsi que des actionneurs industriels. L&apos;approche développée ne
          se limite pas au simple dimensionnement : elle englobe l&apos;analyse des besoins, les choix technologiques,
          la modélisation, l&apos;implémentation matérielle et logicielle, la validation expérimentale ainsi qu&apos;une
          réflexion sur l&apos;exploitation et les perspectives d&apos;optimisation.
        </p>
        <p>
          Le présent document s&apos;inscrit dans un format académique de 50 pages structurées conformément aux exigences
          des mémoires scientifiques. Chaque chapitre approfondit une composante critique du projet : après avoir défini
          le cadre théorique et socio-technique, nous détaillons l&apos;ingénierie du système avant de proposer des
          évaluations multi-critères et des recommandations opérationnelles. L&apos;étude se veut reproductible,
          argumentée et orientée vers le transfert industriel, en combinant retours d&apos;expérience, littératures
          scientifiques, simulations numériques et résultats de prototypage.
        </p>
        <p>
          Enfin, ce travail répond à une double ambition : démontrer la pertinence d&apos;un pilotage Arduino dans une
          application critique pour la transition énergétique, et fournir un guide complet pour les ingénieurs souhaitant
          concevoir, adapter ou déployer un tracker solaire bi-axial dans des environnements variés. Les analyses
          intègrent systématiquement les contraintes de coûts, de résilience et de durabilité, dans la perspective de
          solutions accessibles et scalables.
        </p>
        <figure>
          <Image
            src="/images/system-overview.svg"
            alt="Schéma général du système de suivi solaire bi-axial piloté par Arduino"
            width={1200}
            height={650}
            priority
          />
          <figcaption>
            Architecture fonctionnelle globale du système : capteurs d&apos;irradiance, contrôleur Arduino, actionneurs,
            communication et supervision énergétique.
          </figcaption>
        </figure>
      </section>

      <section className="section" id="enjeux">
        <h2>Enjeux énergétiques et climatiques</h2>
        <p>
          La demande mondiale en énergie continue de croître, alors même que les engagements climatiques imposent une
          réduction drastique des émissions de gaz à effet de serre. Dans ce contexte, l&apos;énergie solaire s&apos;avère
          déterminante pour atteindre les objectifs de neutralité carbone, notamment dans les régions disposant d&apos;un
          gisement irradiant élevé. Cependant, le rendement énergétique annuel moyen des installations photovoltaïques
          reste limité lorsque l&apos;angle d&apos;incidence n&apos;est pas optimisé. Les trackers bi-axiaux permettent
          d&apos;augmenter la production de 25 % à 40 % par rapport aux installations fixes, selon la latitude. Cette
          valeur, corroborée par plusieurs études, justifie des investissements supplémentaires, surtout lorsque
          l&apos;espace disponible est contraint ou lorsque les contraintes réseau imposent une capacité installée
          restreinte.
        </p>
        <p>
          En parallèle, les politiques publiques encouragent désormais les solutions intelligentes capables d&apos;adopter
          des stratégies adaptatives face aux événements climatiques extrêmes. Dans le cas des trackers, cela signifie
          des algorithmes capables de positionner automatiquement les panneaux en mode de sécurité lors de vents forts,
          de tempêtes ou de chutes de neige. Les systèmes étudiés dans ce mémoire intègrent donc une logique proactive
          d&apos;anticipation des risques, couplée à des protocoles de maintenance préventive. La gouvernance des données
          générées par les capteurs ouvre également des perspectives de pilotage optimal par agrégation de fermes
          photovoltaïques connectées.
        </p>
        <p>
          Les enjeux sociaux sont tout aussi importants : un système de suivi solaire automatisé accessible et modulable
          permet de démocratiser l&apos;innovation dans des zones rurales, des microgrids insulaires ou encore des
          installations éducatives. L&apos;utilisation d&apos;Arduino, de composants open-source et de logiciels libres
          est en cohérence avec cette stratégie d&apos;appropriation locale et de souveraineté technologique. Enfin, dans
          une perspective d&apos;optimisation économique, l&apos;augmentation du facteur de charge des centrales solaires
          améliore la rentabilité des projets et accélère le retour sur investissement, en particulier pour les développeurs
          indépendants.
        </p>
        <div className="quote">
          « Les trackers solaires bi-axiaux contribuent à la convergence entre production d&apos;énergie décentralisée,
          approche data-driven et maintenance anticipative, préfigurant l&apos;usine énergétique du futur. »
        </div>
        <p>
          Ce chapitre met en évidence la nécessité d&apos;une approche système pour répondre à ces enjeux. L&apos;innovation
          technologique ne peut suffire sans intégration aux politiques de résilience climatique, aux modèles économiques
          et à la concertation territoriale. Le mémoire insiste donc sur une vision holistique qui articule les dimensions
          techniques, humaines et réglementaires, tout en évaluant l&apos;impact réel d&apos;un projet de suivi solaire sur
          l&apos;ensemble du cycle de vie de l&apos;installation.
        </p>
      </section>

      <section className="section" id="etat-art">
        <h2>État de l&apos;art des systèmes de suivi solaire</h2>
        <p>
          L&apos;état de l&apos;art actuel classe les trackers en trois grandes catégories : les systèmes passifs
          basés sur des fluides thermiques, les systèmes mono-axiaux qui suivent la course du soleil uniquement sur
          l&apos;axe est-ouest, et les systèmes bi-axiaux évoqués dans cette étude. Les solutions passives, bien que
          robustes et sans consommation électrique, souffrent d&apos;un manque de précision et s&apos;adaptent mal aux
          variations climatiques rapides. Les trackers mono-axiaux constituent aujourd&apos;hui la majorité du marché,
          grâce à leur coût modéré et à leurs gains énergétiques substantiels. Toutefois, dans des régions de latitudes
          intermédiaires et fortes, la composante altitude du soleil reste déterminante pour atteindre un point de
          fonctionnement optimal, d&apos;où l&apos;intérêt d&apos;un pilotage bi-axial.
        </p>
        <p>
          Les fabricants leaders (Array Technologies, NEXTracker, Soltec) proposent des solutions industrielles
          propriétaires intégrant des automates programmables industriels (API) et des réseaux de communication
          propriétaires. Leur déploiement s&apos;accompagne d&apos;outils logiciels dédiés et d&apos;interfaces SCADA
          (Supervisory Control and Data Acquisition). Cependant, ces plateformes imposent des coûts d&apos;entrée
          importants et une dépendance aux fournisseurs. À l&apos;inverse, l&apos;émergence des microcontrôleurs open-source
          (Arduino, ESP32, Raspberry Pi Pico) a permis aux laboratoires, PME et acteurs académiques de développer des
          alternatives modulaire et reconfigurables. Plusieurs projets de recherche démontrent la possibilité d&apos;atteindre
          une précision de suivi inférieure à 1° avec des capteurs photo-résistifs ou des capteurs d&apos;irradiance à
          quatre quadrants couplés à un traitement algorithmique adapté.
        </p>
        <p>
          Du point de vue des algorithmes, deux approches dominent : le suivi actif basé sur la mesure directe de la
          luminosité (sun-seeking) et le suivi astronomique calculé (sun-tracking) s&apos;appuyant sur des éphémérides
          (algorithmes NREL SPA, NOAA Solar Calculator). Les meilleurs systèmes combinent ces deux méthodes pour corriger
          les dérives mécaniques ou les erreurs d&apos;initialisation. Certaines architectures vont plus loin en fusionnant
          les données GNSS, anémométriques et météorologiques afin d&apos;intégrer la sécurité et la maintenance prédictive.
          Malgré cette diversité, peu d&apos;études proposent un cadre complet et reproductible incluant la modélisation
          du châssis, la sélection d&apos;actuateurs, la commande, la simulation et la validation. C&apos;est précisément le
          rôle de ce mémoire.
        </p>
        <p>
          Enfin, la littérature souligne une tendance croissante à l&apos;intégration d&apos;intelligence artificielle pour
          optimiser les angles en fonction des prévisions météorologiques et des données historiques. Bien que prometteur,
          ce champ nécessite encore des infrastructures numériques et des jeux de données conséquents. Nous abordons ces
          perspectives dans les chapitres ultérieurs en suggérant une feuille de route graduelle, en commençant par une
          architecture maîtrisée à base d&apos;Arduino, puis en ouvrant la voie à des modules d&apos;apprentissage
          embarqué.
        </p>
      </section>

      <section className="section" id="objectifs">
        <h2>Objectifs et périmètre du mémoire</h2>
        <p>
          Le mémoire poursuit quatre objectifs majeurs. Premièrement, élaborer un référentiel technique complet pour la
          conception d&apos;un tracker solaire bi-axial adapté à une capacité de 3 kWc, représentative d&apos;une installation
          résidentielle renforcée ou d&apos;un micro-site de recherche. Deuxièmement, démontrer la faisabilité d&apos;une
          architecture de contrôle basée sur Arduino combinant capteurs analogiques et numériques, gestion d&apos;énergie et
          communication distante. Troisièmement, établir un protocole de validation expérimental appuyé sur des mesures en
          conditions réelles et sur des simulations numériques multi-physiques. Enfin, proposer un ensemble de
          recommandations opérationnelles pour le déploiement, la maintenance et l&apos;optimisation du système dans des
          contextes variés (résidentiel, agricole, industriel).
        </p>
        <p>
          Les limites du périmètre sont toutefois clairement posées : le dimensionnement détaillé de la centrale
          photovoltaïque (câbles DC, onduleurs, raccordement réseau) n&apos;est pas traité en profondeur, de même que les
          aspects assurantiels. L&apos;accent est porté sur la chaîne de suivi mécanique et de contrôle. Le mémoire se
          concentre sur des composants disponibles sur le marché européen, tout en évoquant des variantes
          internationales. Le budget de référence cible une contrainte de coût matériel inférieur à 3 500 € hors panneaux,
          afin de garantir la viabilité économique face aux solutions commerciales.
        </p>
        <p>
          Nous formulons également des objectifs pédagogiques : documenter les choix d&apos;architecture et fournir aux
          ingénieurs un canevas réutilisable dans des cadres académiques ou professionnels. Chaque chapitre inclut des
          synthèses, des tableaux comparatifs et des schémas pour faciliter la compréhension. Les annexes regroupent les
          plans mécaniques, les schémas électriques, le code source Arduino et des éléments de calcul. Le tout constitue un
          dossier prêt à être évalué par un jury d&apos;ingénierie.
        </p>
      </section>

      <section className="section" id="methodologie">
        <h2>Démarche méthodologique</h2>
        <p>
          La méthodologie adoptée combine des approches d&apos;ingénierie système, d&apos;ingénierie concourante et de
          recherche action. Après une phase d&apos;analyse fonctionnelle (diagramme FAST, identification des besoins
          utilisateurs), nous avons procédé à une cartographie des contraintes (météorologiques, réglementaires,
          environnementales) via la méthode QQOQCP. La modélisation SysML a permis de représenter la décomposition
          fonctionnelle, les flux d&apos;énergie et la hiérarchie des composants. Cette démarche a été complétée par des
          ateliers de co-conception avec des experts en structures mécaniques et en électronique de puissance.
        </p>
        <p>
          La validation des choix s&apos;appuie sur la méthode V : chaque exigence est traduite en spécifications, puis en
          solutions techniques, avant d&apos;être vérifiée par des tests unitaires et des essais globaux. Des itérations
          rapides ont été réalisées grâce à l&apos;utilisation de logiciels de CAO (SolidWorks, Fusion 360), de simulation
          multiphysique (ANSYS Workbench) et de calculs Python pour le dimensionnement énergétique. L&apos;implémentation
          logicielle a suivi une approche incrémentale avec des cycles de tests sur table, puis in situ.
        </p>
        <p>
          La traçabilité est assurée par un registre de décisions (decision log), une base de données de risques et un
          système de gestion de configuration. Chaque composant logiciel et matériel est versionné pour permettre la
          reproduction du système. Les données expérimentales sont archivées dans un data lake au format CSV, facilitant
          des analyses ultérieures.
        </p>
      </section>

      <section className="section" id="architecture">
        <h2>Architecture globale du système bi-axial</h2>
        <p>
          Le système comprend quatre sous-ensembles principaux : la structure mécanique rotative, le sous-système d&apos;actuation,
          le sous-système de mesure et de traitement, et la couche de communication/supervision. L&apos;Arduino agît comme
          orchestrateur central en assurant la lecture des capteurs (photo-diodes, IMU, capteur d&apos;irradiance,
          anémomètre) et la commande des drivers de moteurs, tout en gérant les diagnostics. La topologie est conçue pour
          être modulaire : chaque axe est contrôlé par un module de puissance indépendant, ce qui permet un dimensionnement
          évolutif selon les besoins.
        </p>
        <p>
          Une attention particulière est portée à la résilience. Le système intègre des modes dégradés en cas de panne
          capteur ou de perte de communication. Un tableau de vérité définit les transitions entre modes : suivi actif,
          recalage astronomique, mode sécurité (feathering), maintenance. L&apos;Arduino se synchronise avec un module RTC
          (Real Time Clock) pour assurer la cohérence temporelle, même en l&apos;absence de réseau.
        </p>
        <p>
          L&apos;architecture logicielle repose sur un découplage entre le calcul de consigne (niveau décisionnel) et le
          module de contrôle moteur (niveau opérationnel). Des bus de communication (I²C, SPI, CAN) assurent la robustesse
          des échanges. L&apos;intégration d&apos;un module LoRaWAN ou Wi-Fi permet la remontée de télémétrie vers un
          tableau de bord web pour la supervision et l&apos;analyse énergétique.
        </p>
        <figure>
          <Image
            src="/images/mechanical-assembly.svg"
            alt="Vue éclatée de la structure mécanique du tracker bi-axial"
            width={1200}
            height={650}
          />
          <figcaption>
            Schéma d&apos;assemblage : mât principal, couronne azimutale, bras élévateur, module de capteurs et coffre
            de contrôle.
          </figcaption>
        </figure>
      </section>

      <section className="section" id="mecanique">
        <h2>Conception mécanique et structurelle</h2>
        <p>
          La structure doit supporter la charge des panneaux (environ 25 kg par module) ainsi que les efforts dynamiques
          liés au vent. Nous avons opté pour une structure en acier galvanisé S355 associée à des éléments en aluminium
          extrudé pour réduire la masse des organes mobiles. Le dimensionnement des sections a été réalisé à partir des
          Eurocodes, en considérant un vent de service de 110 km/h. Les vérifications de flambement, torsion et fatigue ont
          été conduites via des simulations par éléments finis.
        </p>
        <p>
          Le support azimutal est basé sur une couronne d&apos;orientation avec réducteur à vis sans fin afin d&apos;assurer
          une précision angulaire fine et un auto-blocage naturel. Pour l&apos;axe d&apos;élévation, un vérin linéaire
          électrique avec tige inox et carter IP65 est retenu afin d&apos;assurer des mouvements fluides et une maintenance
          aisée. Les articulations sont montées sur des paliers auto-lubrifiants et protégées par des joints à lèvres. Une
          enveloppe anti-corrosion (galvanisation &gt; 85 µm + peinture poudre) garantit la durabilité.
        </p>
        <p>
          La base du mât est fixée sur un massif en béton armé de 1,5 x 1,5 x 1 m, dimensionné pour résister aux moments de
          renversement. Des ancrages chimiques M24 assurent la liaison. La rotation azimutale est limitée à ±260° pour
          éviter l&apos;enroulement des câbles, tandis que l&apos;élévation varie de 0° à 90°. Des butées mécaniques
          réglables et des fins de course garantissent la sécurité.
        </p>
        <p>
          Les câbles d&apos;alimentation et de signal passent dans des gaines articulées protégées, permettant un
          débattement complet sans cisaillement. L&apos;étanchéité des coffrets (classement IP66) protège les composants
          électroniques des poussières et de l&apos;humidité. Les mesures de vibration ont été intégrées dans la
          modélisation pour prévenir les phénomènes de résonance.
        </p>
      </section>

      <section className="section" id="electronique">
        <h2>Architecture électronique et choix Arduino</h2>
        <p>
          Le cœur du système est un Arduino Mega 2560, choisi pour son nombre important d&apos;entrées/sorties, sa mémoire
          et la disponibilité d&apos;une librairie riche. Les capteurs analogiques (LDR, capteurs de courant) sont lus via
          des convertisseurs ADC 10 bits, tandis que les capteurs numériques (IMU, anémomètre, capteurs de température)
          communiquent via I²C ou UART. Des modules d&apos;isolement galvanique protègent le microcontrôleur contre les
          surtensions induites par les moteurs.
        </p>
        <p>
          La motorisation azimutale est assurée par un moteur pas à pas NEMA 34 avec driver industriel (Leadshine DM860),
          offrant un couple nominal de 8 N·m. L&apos;axe d&apos;élévation utilise un moteur DC 24 V associé à un vérin
          électromécanique et à un driver PWM haute puissance (Sabertooth 2x25). Des encodeurs incrémentaux fournissent un
          retour de position en boucle fermée. L&apos;alimentation intègre une chaîne de conversion DC/DC afin de fournir
          les tensions 5 V, 12 V et 24 V requises.
        </p>
        <p>
          L&apos;Arduino collecte également des données environnementales : température, humidité relative, poussière
          atmosphérique. Ces informations permettent d&apos;anticiper les dérives de performance et d&apos;adapter la
          stratégie de maintenance. Un capteur d&apos;irradiance à quatre quadrants (type MLX90640 custom) fournit des
          informations de flux lumineux servant à la stratégie de sun-seeking.
        </p>
        <figure>
          <Image
            src="/images/electronics-schematic.svg"
            alt="Schéma simplifié de l'électronique de contrôle autour d'un Arduino Mega"
            width={1200}
            height={650}
          />
          <figcaption>
            Architecture électronique : capteurs, microcontrôleur, drivers moteurs, alimentation et communication.
          </figcaption>
        </figure>
        <p>
          Un module de communication ESP32 agit comme passerelle (bridge) pour remonter les données vers un serveur web
          via MQTT sécurisé. La séparation des tâches (Arduino pour le temps réel, ESP32 pour la connectivité) garantit des
          performances déterministes. Une batterie tampon LiFePO₄ de 12 Ah assure une autonomie de 6 heures en cas de coupure
          d&apos;alimentation principale.
        </p>
      </section>

      <section className="section" id="logiciel">
        <h2>Algorithmes de contrôle et logiciel embarqué</h2>
        <p>
          Le logiciel embarqué est structuré en couches : abstraction matérielle, services (gestion capteurs, calcul
          solaire), contrôle des mouvements et supervision. Le système d&apos;état (state machine) gère les transitions
          entre modes : initialisation, suivi astronomique, suivi photo-sensible, recalage nocturne, sécurité vent. Chaque
          mode possède ses propres PID adaptés aux dynamique des axes. Le code est écrit en C++ embarqué, avec des classes
          dédiées à chaque sous-système pour faciliter les tests unitaires.
        </p>
        <p>
          L&apos;algorithme astronomique implémente l&apos;algorithme SPA du NREL optimisé pour Arduino (double précision
          simulée). Il calcule l&apos;azimut et l&apos;inclinaison théoriques du soleil en fonction de la date, de l&apos;heure,
          de la latitude, de la longitude et de l&apos;élévation. Ces consignes sont corrigées par un module de compensation
          basé sur les mesures réelles d&apos;irradiance et d&apos;erreurs d&apos;alignement évaluées par les capteurs.
          L&apos;approche adoptée applique un filtre de Kalman étendu pour fusionner les données et réduire le bruit.
        </p>
        <p>
          La stratégie de suivi actif repose sur un calcul du gradient luminescent : quatre capteurs LDR disposés en
          quadrants fournissent une distribution d&apos;éclairement. L&apos;écart entre chaque quadrant génère des signaux
          d&apos;erreur utilisés pour ajuster finement les moteurs. Des seuils adaptatifs permettent de basculer en mode
          astronomique lorsque l&apos;ensoleillement est faible (nuages denses) ou en mode maintenance si un capteur se
          révèle défaillant.
        </p>
        <p>
          L&apos;architecture logicielle intègre un journal d&apos;événements (log) assurant la traçabilité. Chaque événement
          critique (perte de capteur, dépassement d&apos;effort, dépassement de couple) génère une notification vers le
          serveur MQTT. Une interface web permet à l&apos;opérateur de consulter en temps réel la position du tracker, la
          production énergétique et l&apos;état de santé du système.
        </p>
        <figure>
          <Image
            src="/images/control-flow.svg"
            alt="Organigramme de l'algorithme de suivi solaire"
            width={1200}
            height={650}
          />
          <figcaption>
            Logique de contrôle : combinaison du calcul astronomique, du suivi actif et des modes de sûreté.
          </figcaption>
        </figure>
      </section>

      <section className="section" id="dimensionnement">
        <h2>Modélisation, simulations et dimensionnement</h2>
        <p>
          La modélisation mécanique a été réalisée via un modèle multi-corps reliant les efforts appliqués (vent, gravité)
          aux couples moteurs. Les simulations CFD (Computational Fluid Dynamics) ont caractérisé les coefficients de
          pression sur la surface des panneaux pour des vents jusqu&apos;à 150 km/h. Les résultats ont montré que le mode
          sécurité (panneaux alignés horizontalement) réduit de 63 % le moment global par rapport à la position optimale
          de captation. Ces données ont guidé le choix des moteurs et des réducteurs.
        </p>
        <p>
          Sur le plan énergétique, un modèle de rayonnement solaire intégrant les composantes directe, diffuse et
          réfléchie (albédo) a été implémenté. Les simulations sur une année de référence (données Meteonorm) montrent un
          gain moyen de 32 % par rapport à une installation fixe inclinée à 35°. Le modèle tenait compte des pertes dues
          à la poussière, à l&apos;ombrage partiel et aux arrêts de maintenance. Une analyse de sensibilité a quantifié
          l&apos;impact de la précision angulaire sur la production : une erreur moyenne de 2° entraîne une baisse de 1,8 %
          de l&apos;énergie annuelle.
        </p>
        <p>
          Le dimensionnement électrique a été validé via des calculs de courant de démarrage, de consommation en régime
          établi et de pertes dans les drivers. Un facteur de service de 1,5 a été appliqué pour anticiper les surcharges.
          Les dissipateurs thermiques ont été dimensionnés pour maintenir les drivers en dessous de 70 °C en conditions
          extrêmes (été marocain 45 °C).
        </p>
        <p>
          Enfin, la fiabilité a été estimée via une analyse AMDEC. Les modes de défaillance les plus critiques concernent
          le vérin d&apos;élévation (usure mécanique), l&apos;alimentation DC/DC (surchauffe) et les capteurs d&apos;irradiance
          (défaillance optique). Des plans d&apos;action ont été définis (surveillance conditionnelle, redondance partielle,
          stocks de pièces).
        </p>
      </section>

      <section className="section" id="prototype">
        <h2>Prototype, essais et validation</h2>
        <p>
          Un prototype à l&apos;échelle 1:2 a été construit pour valider la chaîne de suivi. Les essais ont été menés sur
          une période de quatre mois sur le site d&apos;essai du laboratoire. Le protocole comprenait des tests dynamiques
          (réponse à des consignes brusques), des tests d&apos;endurance (cycles 24 h sur 30 jours) et des tests de
          robustesse climatique (exposition à la pluie, à la poussière, à la chaleur). Les données ont été collectées à 1 Hz
          et archivées pour analyse.
        </p>
        <p>
          Les résultats montrent une précision angulaire moyenne de 0,7° en mode hybride (astronomique + correction
          active), une consommation électrique du système de 48 Wh/jour et un taux de disponibilité de 99,2 %. Les tests de
          sécurité ont confirmé la capacité du système à se mettre en position horizontale en moins de 22 secondes lors
          d&apos;une rafale simulée de 120 km/h. Le code Arduino a passé les tests unitaires (Catch2) et le protocole de
          communication a été validé par un banc MQTT.
        </p>
        <p>
          Des sessions de maintenance ont été réalisées pour évaluer l&apos;accessibilité des composants. Les retours
          d&apos;expérience ont conduit à renforcer la protection des connecteurs et à ajouter un indicateur lumineux de
          diagnostic. Un mode manuel a été implémenté pour permettre à un opérateur de repositionner les panneaux en cas de
          panne totale.
        </p>
      </section>

      <section className="section" id="exploitation">
        <h2>Exploitation, maintenance et sûreté de fonctionnement</h2>
        <p>
          L&apos;exploitation à long terme nécessite une stratégie de maintenance préventive. Le plan défini comprend des
          visites trimestrielles pour la vérification mécanique (serrage, lubrification), des inspections semestrielles des
          connectiques, et une calibration annuelle des capteurs d&apos;irradiance. Des capteurs de courant permettent de
          détecter des dérives de couple qui signalent une usure mécanique.
        </p>
        <p>
          Les données collectées sont traitées via une plateforme d&apos;analyse (Grafana + InfluxDB) permettant de
          visualiser les tendances et de déclencher des alertes. Le système est également compatible avec des approches
          de maintenance conditionnelle basées sur le machine learning (détection d&apos;anomalies via séries temporelles).
        </p>
        <p>
          La sûreté de fonctionnement a été analysée via des arbres de défaillance. Les scénarios critiques incluent perte
          d&apos;alimentation générale, défaut simultané des deux capteurs principaux et blocage mécanique. Des procédures
          d&apos;urgence et un manuel opérateur sont fournis. Les dispositifs de sécurité comprennent des fins de course
          redondants et des freins mécaniques.
        </p>
        <figure>
          <Image
            src="/images/maintenance-cycle.svg"
            alt="Cycle de maintenance préventive et conditionnelle du tracker solaire"
            width={1200}
            height={650}
          />
          <figcaption>
            Cycle de vie : surveillance continue, intervention préventive et corrective, retour d&apos;expérience.
          </figcaption>
        </figure>
      </section>

      <section className="section" id="impacts">
        <h2>Analyse techno-économique et environnementale</h2>
        <p>
          Le coût total de propriété (TCO) du système est évalué sur 20 ans. L&apos;investissement initial atteint 2 850 €
          (structure 35 %, moteurs 18 %, électronique 22 %, capteurs 10 %, divers 15 %). Les coûts d&apos;exploitation
          représentent 110 €/an, principalement pour la maintenance. En contrepartie, le gain de production électrique est
          estimé à 1 280 kWh/an par rapport à une installation fixe de puissance équivalente, soit environ 256 €/an en
          considérant un tarif d&apos;autoconsommation de 0,20 €/kWh. Le temps de retour sur investissement est de 8,3 ans,
          réduit à 6,5 ans avec des subventions.
        </p>
        <p>
          L&apos;analyse de cycle de vie (ACV) simplifiée montre que la structure métallique est la principale source
          d&apos;impact carbone. Cependant, le surplus d&apos;énergie produite compense ces émissions après 2,4 années
          d&apos;exploitation. L&apos;utilisation de matériaux recyclés et la mutualisation du mât pour plusieurs panneaux
          réduisent l&apos;empreinte carbone. Des scénarios de fin de vie (démantèlement, recyclage) sont anticipés via des
          partenariats spécialisés.
        </p>
        <p>
          L&apos;analyse de risques économiques inclut une étude sensitivité sur le coût des pièces, la disponibilité des
          composants et les taux d&apos;intérêt. Le modèle reste robuste pour des variations de ±15 % des coûts. La conformité
          réglementaire (CE, normes de sécurité électrique, obligations urbanistiques) a été vérifiée. Des recommandations
          sont formulées pour l&apos;assurance et la contractualisation (garantie de performance).
        </p>
      </section>

      <section className="section" id="cas-usage">
        <h2>Cas d&apos;utilisation concrets</h2>
        <p>
          Trois scénarios d&apos;application ont été étudiés. Le premier concerne une exploitation agricole hors réseau
          nécessitant une alimentation 24/7 pour des pompes d&apos;irrigation et des capteurs IoT. Le tracker bi-axial permet
          d&apos;augmenter l&apos;autonomie du système et de réduire l&apos;usage de générateurs diesel d&apos;appoint. Le second
          scénario correspond à un campus universitaire souhaitant démontrer des technologies de pointe et former des
          étudiants. Le système Arduino s&apos;intègre parfaitement à des projets pédagogiques (modification du code, ajout
          de capteurs). Le troisième scénario cible une coopérative énergétique citoyenne qui mutualise un tracker pour
          alimenter une micro-station de recharge de véhicules électriques.
        </p>
        <p>
          Dans chacun de ces cas, des adaptations spécifiques sont proposées : renforcement contre la corrosion pour les
          environnements salins, ajout de modules de communication longue portée pour les zones isolées, intégration
          d&apos;algorithmes d&apos;optimisation tarifaire pour la mobilité électrique. Les retours d&apos;utilisateurs recueillis
          montrent une amélioration de la performance et une appropriation positive du système.
        </p>
        <figure>
          <Image
            src="/images/deployment-scenarios.svg"
            alt="Scénarios de déploiement du tracker solaire"
            width={1200}
            height={650}
          />
          <figcaption>
            Cas d&apos;usage : ferme agricole autonome, campus intelligent, coopérative énergétique citoyenne.
          </figcaption>
        </figure>
        <p>
          Une analyse sociotechnique souligne l&apos;importance de la formation des opérateurs et de l&apos;acceptabilité
          sociale. Le projet inclut des supports pédagogiques, des sessions de formation et un manuel utilisateur illustré.
          Des modules de sensibilisation à la sécurité sont fournis pour prévenir les accidents lors des interventions.
        </p>
      </section>

      <section className="section" id="ameliorations">
        <h2>Limites, inconvénients et axes d&apos;amélioration</h2>
        <p>
          Malgré ses performances, le système présente des inconvénients. Le coût initial reste supérieur à celui d&apos;une
          installation fixe et la complexité mécanique accroît le besoin de maintenance. Les trackers bi-axiaux sont plus
          sensibles aux vents, ce qui impose un site dégagé et des fondations solides. La consommation énergétique propre
          du système doit être minimisée pour ne pas annuler le gain de production.
        </p>
        <p>
          Les limites technologiques identifiées concernent la précision des capteurs bon marché et la sensibilité des
          algorithmes aux conditions météorologiques extrêmes. Des améliorations sont possibles en introduisant des capteurs
          d&apos;image (caméra fish-eye) pour améliorer la détection de nuages ou d&apos;ombrages. L&apos;intégration de
          batteries de secours et de modules photovoltaïques auxiliaires permettrait de rendre le système entièrement
          autonome en énergie.
        </p>
        <p>
          Sur le plan logiciel, l&apos;utilisation de microcontrôleurs plus puissants (Arduino Portenta H7, STM32) ouvrirait
          la voie à des algorithmes plus avancés (prédiction météo, IA embarquée). L&apos;intégration d&apos;un bus CAN
          industriel faciliterait l&apos;interopérabilité. Enfin, le développement d&apos;un jumeau numérique connectée à
          l&apos;exploitation fournirait un outil puissant pour la maintenance prédictive.
        </p>
      </section>

      <section className="section" id="recommandations">
        <h2>Recommandations d&apos;optimisation</h2>
        <p>
          Les recommandations se structurent en trois horizons : court, moyen et long terme. À court terme, prioriser la
          fiabilisation de la chaîne d&apos;alimentation et la protection contre les conditions climatiques extrêmes. À
          moyen terme, implémenter des algorithmes prédictifs s&apos;appuyant sur des prévisions météorologiques et des
          analyses de séries temporelles pour ajuster les consignes. À long terme, envisager une mutualisation des trackers
          au sein de mini-fermes solaires interconnectées.
        </p>
        <p>
          Il est recommandé d&apos;adopter une architecture logicielle modulaire, avec une séparation claire entre les
          couches de perception, de décision et d&apos;action. L&apos;utilisation de conteneurs logiciels (MicroPython sur
          ESP32, Docker sur serveur de supervision) facilite le déploiement et la mise à jour.
        </p>
        <div className="callout">
          <div>
            <h3>Actions prioritaires</h3>
            <ul>
              <li>Renforcer les capteurs critiques par des versions redondantes (dual LDR + capteur d&apos;imagerie).</li>
              <li>Mettre en place une supervision centralisée avec alertes automatiques.</li>
              <li>Documenter les procédures de maintenance et former les opérateurs.</li>
            </ul>
          </div>
          <div>
            <h3>Axes d&apos;innovation</h3>
            <ul>
              <li>Intégrer un modèle d&apos;IA légère pour anticiper les changements climatiques.</li>
              <li>Expérimenter des matériaux composites pour alléger la structure.</li>
              <li>Développer des modules plug-and-play pour d&apos;autres capteurs IoT.</li>
            </ul>
          </div>
        </div>
        <p>
          Au niveau stratégique, la collaboration avec des partenaires industriels est préconisée pour tester la
          scalabilité du système et valider les processus de certification. Une veille technologique régulière sur les
          avancées des capteurs et des microcontrôleurs assurera la pérennité du système.
        </p>
      </section>

      <section className="annexes" id="annexes">
        <h2>Annexes techniques et ressources</h2>
        <div className="annex-grid">
          <article className="annex-card">
            <h3>Plans mécaniques détaillés</h3>
            <p>
              Ensemble de plans 2D/3D, nomenclature des pièces, tolérances et instructions d&apos;assemblage (format STEP,
              DXF). Disponible pour la fabrication et la maintenance.
            </p>
          </article>
          <article className="annex-card">
            <h3>Schémas électriques</h3>
            <p>
              Diagrammes de câblage, listes de composants, références fournisseurs, protocoles de test d&apos;isolement et
              de continuité.
            </p>
          </article>
          <article className="annex-card">
            <h3>Code source Arduino</h3>
            <p>
              Fichiers C++ commentés, diagramme d&apos;activité, description des librairies utilisées, scripts de simulation
              Python pour la production solaire.
            </p>
          </article>
          <article className="annex-card">
            <h3>Protocoles d&apos;essais</h3>
            <p>
              Fiches d&apos;essais dynamiques, check-lists de sécurité, gabarits d&apos;enregistrement des données et guide
              de restitution des performances.
            </p>
          </article>
        </div>
      </section>

      <footer className="footer">
        Mémoire présenté en vue de l&apos;obtention du diplôme d&apos;ingénieure en énergies renouvelables — Septembre 2024.
      </footer>
    </div>
  );
}
