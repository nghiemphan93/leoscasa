import {Injectable} from '@angular/core';
import {Angebot} from '../models/Angebot';

@Injectable({
  providedIn: 'root'
})
export class AngebotService {
  antipastis: Angebot[] = [
    new Angebot('Lachsfilet mit Kräuterkruste', 7.50, 'Gratinierter Fjordlachs auf Zedernholzscheit mit Kräuterkruste, kleinem gemischten Salat und italienischem Landbrot'),
    new Angebot('Klassische Antipasti', 4.45, 'Eingelegte Paprika, Zucchini, Oliven, Auberginen, Tomate mit Mozzarella und italienischem Landbrot'),
    new Angebot('Caprese', 3.95, 'Frische Tomaten mit Mozzarella und italienischem Landbrot'),
    new Angebot('Prosciutto di Parma', 4.90, 'Frisch geschnittener Parmaschinken mit italienischem Landbrot'),
    new Angebot('Olive', 2.90, 'Eine Portion schwarze oder grüne Oliven mit italienischem Landbrot'),
    new Angebot('Minestrone', 3.95, 'Original italienische Gemüsesuppe mit gehobeltem Parmesankäse und frischem Landbrot'),
    new Angebot('Tomatensuppe', 3.95, 'Mit Sahne, Basilikum und italienischem Landbrot'),
    new Angebot('Bruschetta', 3.50, 'Geröstetes Weißbrot mit Tomatenwürfeln in Olivenöl und Kräutern'),
  ];

  crostinis: Angebot[] = [
    new Angebot('Crostini oliva', 3.50, 'Mit Olivencreme, Pinienkernen und Rosmarin'),
    new Angebot('Crostini pomodoro', 3.50, 'Mit fruchtigem Tomatenpesto und Kresse'),
    new Angebot('Crostini prosciutto', 3.50, 'Mit Olivencreme, Parmaschinken und Kresse'),
    new Angebot('Crostini aglio', 3.50, 'Mit Knoblauch, Olivenöl und Rosmarin'),
    new Angebot('Crostini tonno', 3.50, 'Mit Thunfischcreme, Olivenöl und Rosmarin'),
    new Angebot('Crostini misti', 3.50, 'Stellen Sie sich Ihre Lieblingssorten zusammen'),
  ];

  insalates: Angebot[] = [
    new Angebot('Insalata piccola', 4.90, 'Kleiner gemischter Blattsalat mit Balsamico- Vinaigrette, frischen Tomaten, Paprika, Mais und italienischem Landbrot'),
    new Angebot('Caesar’s Salad', 7.90, 'Romanasalat mit Caesar’s Dressing, Tomatenwürfeln, Pinienkernen, frisch geriebenen Parmesankäse und italienischem Landbrot'),
    new Angebot('Caesar’s Salad + Chicken', 9.50, 'Unser Caesar’s Salad mit frisch gebratener Hähnchenbrust und italienischem Landbrot'),
    new Angebot('Insalata rucola', 7.90, 'Rucolasalat mit Balsamico-Vinaigrette, Tomatenwürfeln, Pinienkernen, frisch geriebenen Parmesankäse und italienischem Landbrot'),
    new Angebot('Insalata di pesce', 9.90, 'Gemischte Blattsalate mit Balsamico-Vinaigrette, frischem Lachs und Seelachsfiletwürfeln in Zitronengrassauce mit Kresse und italienischem Landbrot'),
    new Angebot('Insalata di agnello', 9.90, 'Gemischte Blattsalate mit Balsamico-Vinaigrette, gebratenem Lammfilet mit Champignons und italienischem Landbrot, Tomate, Gurke, Paprika'),
    new Angebot('Insalata Leo’s', 9.90, 'Rucolasalat, Feldsalat mit Balsamico-Vinaigrette, gebratene Hähnchenbrust mit Champignons und italienischem Landbrot, Tomatenwürfel'),
  ];

  pizzas: Angebot[] = [
    new Angebot('Pizza Agnello', 12.90, 'Pikante Knoblauchcreme, zarte Lammfiletstreifen, frischer Rosmarin, Keniabohnen und Mozzarellakäse'),
    new Angebot('Pizza Spinaci', 9.50, 'Spinatcreme, frischer Blattspinat, Gorgonzola, geröstete Pinienkerne und Mozzarellakäse'),
    new Angebot('Pizza Funghi e Prosciutto', 7.95, 'Fruchtige Tomatensugo, frische Tomaten, Mozzarellakäse, gekochter Schinken, frische Champignons und frischer Rosmarin'),
    new Angebot('Pizza Tonno', 7.95, 'Fruchtige Tomatensugo, frische Tomaten, Mozzarellakäse, Thunfisch, Zwiebeln und milde Peperoni'),
    new Angebot('Pizza Asia', 10.90, 'Wokgemüse in Erdnuss-Sauce, frische Hähnchenbruststreifen, Mozzarellakäse und Kresse'),
    new Angebot('Pizza Sicilia', 9.50, 'Fruchtiger Tomatensugo, frische Tomaten, italienische Landsalami, Rosmarin und Mozzarellakäse'),
    new Angebot('Pizza Americana', 10.90, 'Creme-Fraîche-Salsa, BBQ-Sauce, Mais, Paprika, Onion-Rings, Tacobeef, Bacon und Mozzarellakäse'),
    new Angebot('Pizza Vegetariana', 8.90, 'Sweet-Chilisauce, Broccoli, Kaiserschoten, Champignons, Paprika, Mozzarellakäse und Kresse'),
    new Angebot('Pizza Hawaii', 7.95, 'Fruchtige Tomatensugo, frische Tomaten, Mozzarellakäse, gekochter Schinken, frische Ananas und Oregano'),
    new Angebot('Pizza Granchi', 9.50, 'Pikante Knoblauchcreme, Blattspinat, frische Tomaten, Krabben in Olivenöl und Mozzarellakäse'),
    new Angebot('Pizza Rucola', 9.50, 'Fruchtiger Tomatensugo, frische Tomaten, Mozzarellakäse, Rucolasalat und frisch gehobelter Parmesan'),
    new Angebot('Pizza Italia', 9.50, 'Fruchtiger Tomatensugo, frische Tomaten, Mozzarellakäse, Sardellen, milde Peperoni und schwarze Oliven'),
    new Angebot('Pizza Caprese', 8.90, 'Fruchtiger Tomatensugo, frische Tomaten, Mozzarellascheiben und frischer Basilikum'),
    new Angebot('Pizza Crudo', 10.90, 'Fruchtiger Tomatensugo, frische Tomaten, Mozzarellakäse, Parmaschinken, Rucolasalat und frisch gehobelter Parmesan')
  ];

  pastas: Angebot[] = [
    new Angebot('Tagliatelle sarde', 7.90, 'Original italienische Bandnudeln mit fruchtigem Tomatensugo, Oliven und frischem Basilikum'),
    new Angebot('Maccheroni salmone', 9.50, 'Original italienische Maccaroni mit Lachswürfeln, Spinatcreme, Gorgonzola und frisch gehobeltem Parmesankäse'),
    new Angebot('Spaghetti alla genovese', 8.90, 'Original italienische Spaghetti mit Mozzarellakäse, Rucolasalat, Pinienkernen, Tomaten und frisch gehobeltem Parmesankäse'),
    new Angebot('Tagliatelle aglio e pomodoro', 7.90, 'Original italienische Bandnudeln in Knoblauchsahnesauce, mit Tomatenwürfeln, Rosmarin und frisch gehobeltem Parmesankäse'),
    new Angebot('Tagliatelle pollo e pomodoro', 9.50, 'Original italienische Bandnudeln mit Hähnchengeschnetzeltem, fruchtigem Tomatensugo und Oliven'),
    new Angebot('Spaghetti alla carbonara', 7.90, 'Original italienische Spaghetti mit gebratenem Speck in einer Sahnesauce und frischer Petersilie'),
    new Angebot('Maccheroni funghi e prosciutto', 7.90, 'Original italienische Maccaroni, Champignons mit Schinken in einer Tomatensahnesauce'),
    new Angebot('Maccheroni pomodoro e tonno', 8.90, 'Original italienische Maccaroni mit fruchtigem Tomatensugo, Thunfisch und Oliven'),
    new Angebot('Tagliatelle spinaci', 8.90, 'Original italienische Bandnudeln mit Spinatcremesauce und geschmolzenem Gorgonzola'),
  ];

  piattis: Angebot[] = [
    new Angebot('Pollo all’ aglio', 11.95, 'Hähnchenbrust auf original italienischen Bandnudeln in Knoblauchsauce, mit Mozzarella überbacken, frischen Tomaten und Rucola'),
    new Angebot('Bistecca e prosciutto', 12.95, 'Schweinesteak mit frischen Tomaten, Rucola, Parmaschinken, Balsamicosauce und Rosmarinkartoffeln'),
    new Angebot('Porco al pepe', 14.95, 'Schweinelendchen auf Pfeffersauce wahlweise mit Pommes Frites oder Rosmarinkartoffeln'),
    new Angebot('Porco al pomodoro', 16.95, 'Schweinelendchen gefüllt mit Tomate-Mozzarella auf Balsamicosauce, mit orginal italienischen Bandnudeln in Tomatensauce und frischem Basilikum'),
    new Angebot('Porco con gamberi', 18.95, 'Schweinelendchen mit Gambas auf Spinatcremesauce, Pinienkernen, Rucola und Rosmarinkartoffeln'),
  ];

  desserts: Angebot[] = [
    new Angebot('Tiramisù.', 3.90, 'Löffelbiskuits getränkt in Amaretto, Espresso und Frischkäsecreme'),
    new Angebot('Granita di vino rosso', 4.50, 'Gefrorener italienischer Rotwein, süßer Rahm und Limettenscheiben'),
    new Angebot('Tartufo bianco', 3.90, 'Klassisches, halbgefrorenes Schaumgebäck aus Kaffee- und Zabaglionecreme mit weißen Baiserstückchen'),
    new Angebot('Tartufo al caffè', 3.90, 'Halbgefrorenes Schaumgebäck aus einer aromatischen Kaffeecreme mit einem Schokoladenkern und mit braunen, gebackenen Baiserstückchen bedeckt'),
    new Angebot('Piramide cioccolato', 3.90, 'Biscuit mit Schokolade, gefrorener Schokoladencreme mit Haselnüssen und einem Pralinenkern'),
  ];

  heissGetraenke: Angebot[] = [
    new Angebot('Winzerglühwein (Rot)', 2.95, ''),
    new Angebot('Leo’s Punsch', 3.95, 'Glühwein Rot mit Cointreau'),
    new Angebot('Lumumba', 3.95, 'Heiße Schokolade mit braunem Rum und Sahne'),
    new Angebot('Mocaccino', 3.25, 'Heiße Schokolade mit Espresso und Sahne'),
    new Angebot('Grog', 3.25, 'Schwarzer Tee mit braunem Rum'),
    new Angebot('Grand Mocaccino', 4.45, 'Heiße Schokolade mit Espresso, Grand Marnier und Sahne'),
    new Angebot('Grand Hot Apple', 4.45, 'Heißer Apfelsaft mit Grand Marnier und Sahne'),
    new Angebot('Irish Coffee', 4.45, 'Kaffee mit Whiskey und Sahne'),
    new Angebot('Kinderpunsch', 2.10, 'Heißer Apfelsaft mit Sahne und Zimt'),
    new Angebot('Schlehenfeuer', 3.25, 'Waldfruchtlikör auf heißem Wasser'),
    new Angebot('Wintertraum Tee', 2.25, 'Winterliche Schwarz-Teemischung'),
  ];

  soSchmecktWinters: Angebot[] = [
    new Angebot('Pollo Spinaci', 7.95, 'Gefüllte Hähnchenbrust mit Spinat und Sauce Hollandaise dazu wahlweise Rosmarinkartoffeln oder Pommes Frites'),
    new Angebot('Pollo al Pomodoro', 7.95, 'Gefüllte Hähnchenbrust mit Tomate und Tomatensauce dazu wahlweise Rosmarinkartoffeln oder Pommes Frites'),
    new Angebot('Pollo Cordon Bleu', 8.95, 'Gefüllte Hähnchenbrust mit Käse und Schinken an Champignonrahmsauce dazu wahlweise Rosmarinkartoffeln oder Pommes Frites'),
    new Angebot('Lasagne Spinaci', 8.95, 'Schichtnudeln mit Spinat in einer Cremesauce und mit Mozzarellakäse überbacken'),
    new Angebot('Lasagne Bolognese', 9.50, 'Schichtnudeln mit pikanter Bolognesesauce und mit Mozzarellakäse überbacken'),
    new Angebot('Gnocchi alla italiana', 7.90, 'Gnocchi in einer Tomatensauce mit Mozzarella, frischem Baslikium und mit Käse überbacken'),
    new Angebot('Gnocchi Granchi', 8.90, 'Gnocchi in einer Tomatensahnesauce mit Krabben, Champignons, Broccoli und mit Käse überbacken'),
  ];

  ohDuSuessWinters: Angebot[] = [
    new Angebot('Natur mit Puderzucker und Sahne', 2.95, ''),
    new Angebot('Mit Vanilleeis und Sahne', 3.45, ''),
    new Angebot('Mit heißen Schattenmorellen und Sahne', 3.45, ''),
    new Angebot('Natur mit Sahne und Zimt', 3.15, ''),
    new Angebot('Mit Vanilleeis, Sahne und Zimt', 3.95, ''),
    new Angebot('Mit Vanillesauce', 3.45, ''),
  ];

  dessertSommers: Angebot[] = [
    new Angebot('Tiramisu fragole', 4.45, 'Löffelbiscuit getränkt in Amaretto, Espresso, Frischkäse und Erdbeeren'),
    new Angebot('Käseplatte', 6.95, 'gemischte Käseplatte und frischem Baguette'),
    new Angebot('Eisschokolade', 3.95, 'Zwei Kugeln Vanilleeis, Kakao, Sahne und Schokoladensauce'),
    new Angebot('Eiskaffee', 3.95, 'Zwei Kugeln Vanilleeis, Kaffee, Sahne und Schokoladensauce'),
    new Angebot('Erdbeerbecher', 5.95, 'Zwei Kugeln Vanilleeis, zwei Kugeln Erdbeereis, frische Erdbeeren, Sahne und Erdbeersauce'),
    new Angebot('Schokoladenbecher', 5.95, 'Zwei Kugeln Vanilleeis, zwei Kugeln Schokoladeneis, Sahne und Schokoladensauce'),
    new Angebot('Früchtebecher', 5.95, 'Vier Kugeln Frucht- und Vanilleeis, Obst, Sahne und Erdbeersauce'),
    new Angebot('Disney-Kinderbecher', 2.45, 'Donald Duck- oder Plutobecher'),
  ];

  vorspeise: Angebot[] = [
    new Angebot('Gamberi all’aglio', 6.95, 'Gambas in Knoblauchsud und Brot'),
  ];

  frishSalats: Angebot[] = [
    new Angebot('Insalata Greca', 8.45, 'Gemischter Blattsalat, Peperoni, Oliven, Artischocken, Paprika und Fetakäse'),
    new Angebot('Insalata Caprese', 7.95, 'Gemischter Blattsalat, Tomaten, Mozzarella und frischer Basilikum'),
    new Angebot('Insalata Exotica', 9.45, 'Gemischter Blattsalat, Walnüsse, Erdbeeren, Melonenwürfel, Mango und frisch gebratene Hähnchenbrust'),
    new Angebot('Insalata con Gamberi', 10.90, 'Gemischter Blattsalat, Tomaten, Gurke und Gambas'),
  ];

  pastaVomFeinstens: Angebot[] = [
    new Angebot('Tortelloni vegetariani', 8.90, 'orig. ital. Tortelloni, Tomaten in Sahnesauce, Broccoli, Erbsen und Champignons mit Käse überbacken'),
    new Angebot('Spaghetti con granchi', 8.90, 'orig. ital. Spaghetti, Krabben, Knoblauch und Rucolasalat mit Pinienkernen in Olivenöl gebraten'),
    new Angebot('Tagliatelle e gamberi', 10.90, 'orig. ital. Bandnudeln in Knoblauchsauce, mit Tomaten, Rucolasalat und Gambas'),
    new Angebot('Tagliatelle con agnello', 10.90, 'orig. ital. Bandnudeln in Weißweinsauce, Paprika, Rucola und Lammfiletstreifen'),
  ];

  paneLeos: Angebot[] = [
    new Angebot('Pane vegetariano', 6.45, 'Pane Leo’s mit Tomaten, Champignons, Oliven, Paprika, roten Zwiebeln & Schafskäse'),
    new Angebot('Pane salame', 6.95, 'Pane Leo’s mit Paprika, orig. ital. Landsalami und Käse überbacken'),
    new Angebot('Pane prosciutto', 6.95, 'Pane Leo’s mit Champignons, Seranoschinken und Käse überbacken'),
  ];

  ciabattas: Angebot[] = [
    new Angebot('Ciabatta Turkey', 6.45, 'Olivenciabatta mit Remoulade, Blattsalat, Tomaten, Gurken, Oliven, geraspelter Truthahnbrust und getrockneten Tomaten'),
    new Angebot('Ciabatta Tonno', 6.45, 'Olivenciabatta mit Remoulade, Blattsalat, Tomaten, Gurken, Zwiebeln, Peperoni und Thunfisch'),
    new Angebot('Ciabatta Venezia', 6.45, 'Olivenciabatta mit Remoulade, Blattsalat, Tomaten, Gurken und Hähnchenbrust'),
    new Angebot('Ciabatta Salmone', 6.45, 'Olivenciabatta mit Remoulade, Blattsalat, Zwiebeln und Räucherlachs'),
    new Angebot('Ciabatta Toscana', 5.95, 'Olivenciabatta mit Rucolasalat, Blattsalat, Tomaten und Mozzarella'),
  ];

  kaffees: Angebot[] = [
    new Angebot('Kaffee Creme', 2.25, ''),
    new Angebot('Kaffee Hag', 2.25, ''),
    new Angebot('Cappuccino', 2.45, ''),
    new Angebot('Café au lait', 2.90, ''),
    new Angebot('Latte macchiato', 2.90, ''),
    new Angebot('Vanille Latte', 3.45, ''),
    new Angebot('Karamel Latte', 3.45, ''),
    new Angebot('Espresso', 1.95, ''),
    new Angebot('Doppelter Espresso', 2.95, ''),
    new Angebot('Espresso macchiato', 1.95, ''),
    new Angebot('Große Tasse Schokolade mit Sahne', 2.45, ''),
    new Angebot('Heiße Zitrone', 2.95, ''),
    new Angebot('Bailey´s Coffee', 4.45, ''),
    new Angebot('Tee', 2.25, 'Bitte wählen Sie aus folgenden offenen Teesorten: Assam, Darjeeling, Grüner Tee, Rooibos Vanille, Früchtegarten, Kräutergarten, Kamillenblüten, Pfefferminze'),
  ];

  alkoholfreis: Angebot[] = [
    new Angebot('Coca Cola / Coca Cola light', 2.50, '', 0.2),
    new Angebot('Fanta / Sprite / Spezi', 4.40, '', 0.4),
    new Angebot('Orangina', 2.50, '', 0.25),
    new Angebot('Acqua della casa', 2.05, 'Still oder mit Kohlensäure', 0.5),
    new Angebot('Acqua della casa', 3.05, 'Still oder mit Kohlensäure', 1.0),
    new Angebot('Apollinaris Selection / Silence', 2.30, '', 0.25),
    new Angebot('Apollinaris Selection / Silence', 5.45, '', 0.75),
    new Angebot('San Pellegrino', 2.45, '', 0.25),
    new Angebot('San Pellegrino', 5.95, '', 0.75),
    new Angebot('Orangensaft (Frisch gepresst)', 3.60, '', 0.2),
    new Angebot('Niehoffs Fruchtsäfte & Nektare', 2.45, 'Ananas, Apfel, Banane*, Grapefruit, KiBa, Kirsch*, Maracuja*, Pfirsich*, Tomate', 0.2),
    new Angebot('Apfelschorle', 3.95, 'Aus naturtrüben Apfelsaft', 0.3),
    new Angebot('Fruchtschorle', 3.95, 'Ananas, Kirsch, Grapefruit, Maracuja, Pfirsich, Cranberry', 0.3),
    new Angebot('Schweppes', 2.45, 'Bitter Lemon, Tonic Water, Ginger Ale', 0.2),
    new Angebot('Red Bull', 3.05, '', 0.25),
  ];

  biere: Angebot[] = [
    new Angebot('Stauder Pils', 2.50, '', 0.3),
    new Angebot('Stauder Pils', 3.50, '', 0.4),
    new Angebot('Diebels Alt', 2.50, '', 0.3),
    new Angebot('Diebels Alt', 3.50, '', 0.4),
    new Angebot('Altbierbowle (mit Früchten)', 2.75, '', 0.3),
    new Angebot('Altbierbowle (mit Früchten)', 3.75, '', 0.4),
    new Angebot('Erdinger Weißbier', 3.90, '', 0.5),
    new Angebot('Malztrunk', 2.35, '', 0.33),
    new Angebot('Miller', 3.45, '', 0.33),
    new Angebot('Carlsberg', 3.15, '', 0.33),
  ];

  cocktails: Angebot[] = [
    new Angebot('Caipirinha', 7.20, 'Cachaca, Limetten, brauner Zucker'),
    new Angebot('Pina Colada', 7.20, 'Weißer Rum, Kokos-Sirup, Ananassaft, Sahne'),
    new Angebot('Long Island Ice Tea', 7.20, 'Triple Sec, Tequila, Gin, Wodka, weißer Rum, Lime Juice, Lemon Juice, Zitronensaft, Coca Cola'),
    new Angebot('Planter’s Punch', 6.90, 'Weißer und brauner Rum, Triple Sec, Lime Juice, Ananassaft, Orangensaft, Zitronensaft, Grenadine'),
    new Angebot('Tequila Sunrise', 7.20, 'Tequila, Lemon Juice, Orangensaft, Grenadine'),
    new Angebot('Sex on the beach', 7.20, 'Wodka, Pfirsichlikör, Amaretto, Ananassaft, Zitronensaft, Grenadine'),
    new Angebot('Tropic Special (alkoholfrei)', 5.60, 'Orangensaft, Pfirsichsaft, Bananensaft, Zitronensaft, Grenadine'),
    new Angebot('Ipanema (alkoholfrei)', 5.60, 'Limetten, brauner Zucker, Ginger Ale'),
    new Angebot('Erdbeer Colada (alkoholfrei)', 5.60, 'Erdbeeren, Orangensaft, Kokos-Sirup, Sahne'),
  ];

  // crostinis: Angebot[] = [
  //   new Angebot('', , ''),
  //   new Angebot('', , ''),
  //   new Angebot('', , ''),
  //   new Angebot('', , ''),
  //   new Angebot('', , ''),
  //   new Angebot('', , ''),
  //   new Angebot('', , ''),
  //   new Angebot('', , ''),
  //   new Angebot('', , ''),
  // ]

  constructor() {
  }

  getAntipastis(): Angebot[] {
    return this.antipastis;
  }

  getCrostinis(): Angebot[] {
    return this.crostinis;
  }

  getInsalates() {
    return this.insalates;
  }

  getPizzas() {
    return this.pizzas;
  }

  getPastas() {
    return this.pastas;
  }

  getPiattis() {
    return this.piattis;
  }

  getDesserts() {
    return this.desserts;
  }

  getHeissGetraenke() {
    return this.heissGetraenke;
  }

  getSoSchmecktWinters() {
    return this.soSchmecktWinters;
  }

  getOhDuSuessWinters() {
    return this.ohDuSuessWinters;
  }

  getDessertSommers() {
    return this.dessertSommers;
  }

  getVorspeise() {
    return this.vorspeise;
  }

  getFrishSalats() {
    return this.frishSalats;
  }

  getPastaVomFeinstens() {
    return this.pastaVomFeinstens;
  }

  getPaneLeos() {
    return this.paneLeos;
  }

  getCiabattas() {
    return this.ciabattas;
  }

  getKaffees() {
    return this.kaffees;
  }

  getAlkoholfreis() {
    return this.alkoholfreis;
  }

  getBiere() {
    return this.biere;
  }

  getCocktails() {
    return this.cocktails;
  }


}

