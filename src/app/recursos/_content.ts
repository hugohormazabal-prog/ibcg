export type ResourceArticle = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  readingTime: string;
  sections: {
    id: string;
    title: string;
    paragraphs: string[];
    quote?: {
      reference: string;
      text: string;
    };
  }[];
  applications: string[];
};

export const articles: ResourceArticle[] = [
  {
    slug: "fundamentos-fe-cristiana",
    title: "Fundamentos de la fe cristiana",
    eyebrow: "Doctrina cristiana",
    readingTime: "Lectura extensa",
    summary:
      "Una introducción ordenada a las verdades centrales de la fe: Dios, la Escritura, el pecado, Cristo, la gracia, la iglesia y la esperanza futura.",
    description:
      "La fe cristiana no descansa en impresiones religiosas ni en tradiciones humanas autónomas, sino en la revelación de Dios en la Escritura y en la obra redentora de Jesucristo. Este recurso presenta los fundamentos que sostienen una confesión cristiana bíblica.",
    sections: [
      {
        id: "dios",
        title: "1. Dios: Creador, santo y soberano",
        quote: {
          reference: "Génesis 1:1; Isaías 6:3",
          text: "En el principio creó Dios los cielos y la tierra. Santo, santo, santo, Jehová de los ejércitos; toda la tierra está llena de su gloria.",
        },
        paragraphs: [
          "La fe cristiana comienza con Dios. Antes de hablar del ser humano, de la iglesia o de la salvación, la Escritura nos pone delante del Dios vivo que creó todas las cosas, sostiene todas las cosas y gobierna todas las cosas para su gloria. Dios no es una idea religiosa creada para dar consuelo psicológico; es el Señor eterno, santo, personal y soberano que se ha dado a conocer.",
          "Confesar a Dios como Creador implica reconocer que la realidad tiene propósito, orden y dependencia. Nada existe por accidente último. Todo lo creado le pertenece. La vida humana, la conciencia, la moral, la familia, el trabajo, la adoración y la historia encuentran su sentido solo cuando son vistas bajo el señorío de Dios. Por eso la doctrina cristiana no es un adorno intelectual: es la forma correcta de mirar toda la vida delante del Señor.",
        ],
      },
      {
        id: "trinidad",
        title: "2. La Trinidad: un solo Dios en tres personas",
        quote: {
          reference: "Mateo 28:19; 2 Corintios 13:14",
          text: "Bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo.",
        },
        paragraphs: [
          "La Biblia enseña que hay un solo Dios verdadero y que este único Dios existe eternamente en tres personas: Padre, Hijo y Espíritu Santo. La Trinidad no es un problema que la iglesia inventó; es el nombre doctrinal que damos al testimonio completo de la Escritura. El Padre es Dios, el Hijo es Dios, el Espíritu Santo es Dios, y sin embargo no adoramos tres dioses, sino un solo Dios.",
          "Esta verdad guarda el corazón de la adoración cristiana. El Padre envía al Hijo, el Hijo toma nuestra naturaleza y obra nuestra redención, y el Espíritu aplica esa redención al corazón del creyente. La salvación es trinitaria desde el principio hasta el fin. Por eso la oración, la predicación y la vida cristiana no pueden reducirse a moralismo; somos llevados al Padre por medio del Hijo en el poder del Espíritu.",
        ],
      },
      {
        id: "escritura",
        title: "3. La autoridad de la Escritura",
        quote: {
          reference: "2 Timoteo 3:16-17",
          text: "Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia.",
        },
        paragraphs: [
          "Sola Scriptura significa que la Escritura es la autoridad final, suficiente e inspirada para la fe y la obediencia. Esto no desprecia la historia de la iglesia ni el valor de maestros fieles, confesiones y catecismos; más bien los coloca bajo la autoridad superior de la Palabra de Dios. Toda tradición debe ser examinada por la Escritura, no la Escritura por la tradición.",
          "La iglesia necesita esta convicción porque el corazón humano es inclinado a fabricar religión a su propia imagen. Sin la Escritura, la adoración se vuelve gusto personal, la doctrina se vuelve opinión, y el discipulado se vuelve técnica. Bajo la Palabra, en cambio, somos enseñados, corregidos, consolados y formados por Dios mismo.",
        ],
      },
      {
        id: "hombre-pecado",
        title: "4. El ser humano, la imagen de Dios y el pecado",
        quote: {
          reference: "Génesis 1:27; Romanos 3:23",
          text: "Y creó Dios al hombre a su imagen... por cuanto todos pecaron, y están destituidos de la gloria de Dios.",
        },
        paragraphs: [
          "El ser humano fue creado a imagen de Dios, con dignidad real, responsabilidad moral y vocación de vivir en comunión con su Creador. Esta doctrina protege tanto la dignidad de cada persona como la seriedad de nuestra obligación delante de Dios. No somos animales sofisticados ni voluntades autónomas; somos criaturas hechas para conocer, amar, obedecer y reflejar al Señor.",
          "Pero la Escritura también enseña que el pecado ha corrompido profundamente nuestra naturaleza. El pecado no es solo una serie de actos externos; es rebelión contra Dios, desorden del corazón, culpa real y esclavitud espiritual. La humanidad no necesita únicamente educación, inspiración o reforma social. Necesita redención, perdón, nuevo nacimiento y reconciliación con Dios.",
        ],
      },
      {
        id: "cristo",
        title: "5. Cristo, único mediador y redentor",
        quote: {
          reference: "1 Timoteo 2:5; Juan 14:6",
          text: "Hay un solo Dios, y un solo mediador entre Dios y los hombres, Jesucristo hombre.",
        },
        paragraphs: [
          "El centro de la fe cristiana es Jesucristo. El Hijo eterno de Dios se hizo hombre sin dejar de ser Dios, vivió en perfecta obediencia, murió como sustituto por pecadores y resucitó corporalmente al tercer día. En Él se revela la justicia, la misericordia, la sabiduría y la gloria de Dios.",
          "Cristo no es simplemente un maestro moral ni un ejemplo inspirador. Es el Cordero de Dios que quita el pecado del mundo, el sumo sacerdote que intercede por los suyos, el Rey que gobierna sobre todo y el único camino al Padre. Toda predicación fiel debe conducir a Cristo: su persona, su obra, su reino, su cruz y su resurrección.",
        ],
      },
      {
        id: "gracia-fe",
        title: "6. Salvación por gracia mediante la fe",
        quote: {
          reference: "Efesios 2:8-9",
          text: "Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios.",
        },
        paragraphs: [
          "La salvación cristiana es por gracia. Esto significa que Dios salva a pecadores indignos por pura misericordia, no porque encuentre en nosotros mérito que lo obligue. La gracia no es una ayuda añadida al esfuerzo humano; es el favor inmerecido de Dios que rescata, perdona, justifica, adopta y transforma.",
          "La fe es el medio por el cual recibimos a Cristo y descansamos en Él. La fe verdadera no es una emoción pasajera ni una decisión meramente externa. Es confianza en la persona y obra de Cristo, abandono de la autosuficiencia y recepción humilde de la misericordia prometida en el evangelio. Las buenas obras no compran la salvación, pero sí acompañan la fe viva como fruto de la gracia.",
        ],
      },
      {
        id: "iglesia",
        title: "7. La iglesia y la vida cristiana",
        quote: {
          reference: "Hechos 2:42; Hebreos 10:24-25",
          text: "Y perseveraban en la doctrina de los apóstoles, en la comunión unos con otros, en el partimiento del pan y en las oraciones.",
        },
        paragraphs: [
          "La iglesia no es una invención humana para organizar actividades religiosas. Es el pueblo comprado por Cristo, llamado por el evangelio y formado por la Palabra. La vida cristiana normal incluye enseñanza apostólica, comunión, oración, adoración, disciplina, servicio y perseverancia. Nadie crece sanamente aislado de la instrucción y cuidado del cuerpo de Cristo.",
          "Cuando un ministerio transmite enseñanza por internet, debe hacerlo con humildad y claridad: la transmisión puede servir a quienes están lejos, enfermos, en transición o sin acceso cercano a enseñanza fiel, pero la meta pastoral sigue siendo que cada creyente camine bajo cuidado bíblico, con oración, rendición de cuentas y comunión cristiana saludable.",
        ],
      },
      {
        id: "esperanza",
        title: "8. La esperanza futura",
        quote: {
          reference: "Tito 2:13; Apocalipsis 21:3-4",
          text: "Aguardando la esperanza bienaventurada y la manifestación gloriosa de nuestro gran Dios y Salvador Jesucristo.",
        },
        paragraphs: [
          "La fe cristiana mira hacia la consumación. Cristo volverá, juzgará con justicia, resucitará a los muertos y hará nuevas todas las cosas. Esta esperanza no nos saca de la vida presente, sino que nos enseña a vivir con sobriedad, fidelidad y paciencia. El creyente no camina hacia el vacío, sino hacia la presencia plena de Dios.",
          "La esperanza futura consuela al afligido, purifica al creyente y relativiza las glorias pasajeras de este mundo. La iglesia vive entre la primera y la segunda venida de Cristo anunciando el evangelio, esperando al Rey y sirviendo con perseverancia hasta que la fe sea vista y la gracia sea celebrada sin pecado ni muerte.",
        ],
      },
      {
        id: "vida-nueva",
        title: "9. La vida nueva y la santificación",
        quote: {
          reference: "Romanos 6:4; 1 Tesalonicenses 4:3",
          text: "Así también nosotros andemos en vida nueva... pues la voluntad de Dios es vuestra santificación.",
        },
        paragraphs: [
          "La fe cristiana no termina en el perdón de los pecados, aunque ese perdón sea glorioso y necesario. Quienes son unidos a Cristo reciben vida nueva. La gracia que justifica también enseña, disciplina y transforma. El creyente no obedece para ser aceptado por Dios, sino porque ha sido aceptado en Cristo y ahora pertenece a un nuevo Señor.",
          "La santificación es progresiva y profundamente dependiente de la gracia. Dios usa su Palabra, la oración, la corrección, las pruebas, la comunión cristiana y la obra interna del Espíritu Santo para conformarnos a la imagen de Cristo. Esta transformación no siempre es rápida ni visible de inmediato, pero el evangelio produce fruto real: arrepentimiento, humildad, amor, dominio propio, perseverancia y deseo de honrar a Dios.",
        ],
      },
      {
        id: "discipulado",
        title: "10. Discipulado y perseverancia cotidiana",
        quote: {
          reference: "Lucas 9:23; Colosenses 2:6-7",
          text: "Si alguno quiere venir en pos de mí, niéguese a sí mismo, tome su cruz cada día, y sígame.",
        },
        paragraphs: [
          "Seguir a Cristo implica una vida entera bajo su señorío. El discipulado no es un programa ocasional para creyentes especialmente interesados, sino la forma normal de la vida cristiana. Cristo llama a sus discípulos a negarse a sí mismos, tomar la cruz, aprender su Palabra, amar a los hermanos, resistir el pecado y vivir como peregrinos en este mundo.",
          "Por eso los fundamentos de la fe deben pasar de la mente a la vida. La doctrina de Dios debe producir reverencia. La doctrina del pecado debe producir arrepentimiento. La doctrina de Cristo debe producir fe. La doctrina de la gracia debe producir gratitud. La doctrina de la iglesia debe producir compromiso y cuidado. La doctrina de la esperanza futura debe producir paciencia. La verdad bíblica nunca es estéril cuando es recibida con fe.",
        ],
      },
      {
        id: "resumen",
        title: "11. Un fundamento para toda la vida",
        quote: {
          reference: "Colosenses 1:28",
          text: "A quien anunciamos, amonestando a todo hombre, y enseñando a todo hombre en toda sabiduría, a fin de presentar perfecto en Cristo Jesús a todo hombre.",
        },
        paragraphs: [
          "Estos fundamentos no son una etapa que el creyente supera para pasar a temas más interesantes. Son el suelo permanente de la vida cristiana. Volvemos una y otra vez a Dios, la Escritura, el pecado, Cristo, la gracia, la iglesia y la esperanza porque allí se ordena nuestra adoración y se corrige nuestra tendencia a olvidar el evangelio.",
          "Una fe sin fundamento se vuelve vulnerable a modas, temores y falsas enseñanzas. Una fe arraigada en la verdad puede sufrir, esperar, arrepentirse y perseverar. Por eso la enseñanza doctrinal no es lujo académico; es cuidado pastoral para que el pueblo de Dios conozca al Señor, descanse en Cristo y camine con fidelidad.",
        ],
      },
    ],
    applications: [
      "Lee la Biblia buscando conocer a Dios antes que resolver curiosidades aisladas.",
      "Examina toda enseñanza a la luz de la Escritura, con humildad y reverencia.",
      "Descansa en Cristo como único mediador, no en tu desempeño religioso.",
      "Busca una vida cristiana arraigada en doctrina, oración, obediencia y comunidad bíblica.",
    ],
  },
  {
    slug: "doctrinas-de-la-gracia",
    title: "Introducción a las doctrinas de la gracia",
    eyebrow: "Soteriología",
    readingTime: "Lectura extensa",
    summary:
      "Una explicación pastoral de la depravación humana, la elección, la redención en Cristo, el llamado eficaz y la perseverancia de los santos.",
    description:
      "Las doctrinas de la gracia buscan proteger la gloria de Dios en la salvación y consolar al creyente con la seguridad de que la obra redentora pertenece al Señor de principio a fin.",
    sections: [
      {
        id: "proposito",
        title: "1. Una doctrina para adorar, no para discutir",
        quote: {
          reference: "Jonás 2:9",
          text: "La salvación es de Jehová.",
        },
        paragraphs: [
          "Las doctrinas de la gracia deben enseñarse con reverencia, paciencia y humildad. No son un distintivo para alimentar orgullo teológico ni una herramienta para ganar discusiones. Son verdades bíblicas que nos llevan a reconocer que la salvación pertenece enteramente al Señor.",
          "Cuando estas doctrinas son recibidas correctamente, producen adoración, seguridad, evangelismo paciente y gratitud profunda. Nos recuerdan que Dios no encontró a personas fuertes, sabias o espiritualmente dispuestas; rescató pecadores muertos en delitos y pecados, y lo hizo para alabanza de la gloria de su gracia.",
        ],
      },
      {
        id: "depravacion",
        title: "2. Depravación humana: la necesidad de gracia soberana",
        quote: {
          reference: "Efesios 2:1-5; Romanos 3:10-12",
          text: "Y él os dio vida a vosotros, cuando estabais muertos en vuestros delitos y pecados.",
        },
        paragraphs: [
          "La doctrina de la depravación humana no enseña que todas las personas sean tan malas como podrían ser, ni que la imagen de Dios haya desaparecido. Enseña que el pecado ha afectado toda nuestra naturaleza: mente, deseos, voluntad, afectos y conducta. El problema humano no es superficial; es espiritual y profundo.",
          "Por eso la salvación requiere más que información religiosa. Un muerto espiritual necesita vida. Un corazón de piedra necesita ser cambiado. La gracia de Dios no espera a que el pecador se vuelva digno; actúa misericordiosamente para dar vida, abrir ojos, quebrantar orgullo y llevarnos a Cristo.",
        ],
      },
      {
        id: "eleccion",
        title: "3. Elección: misericordia antes de nuestros méritos",
        quote: {
          reference: "Efesios 1:4-6",
          text: "Según nos escogió en él antes de la fundación del mundo... para alabanza de la gloria de su gracia.",
        },
        paragraphs: [
          "La elección bíblica enseña que Dios escogió a su pueblo en Cristo antes de la fundación del mundo, no por obras previstas ni superioridad espiritual, sino conforme al beneplácito de su voluntad. Esta doctrina humilla al creyente porque elimina la jactancia. Nadie puede decir: me salvé porque fui más sensible, más sabio o más dispuesto que otros.",
          "La elección no hace innecesario el evangelismo; lo sostiene. Pablo predicó con valentía porque sabía que Dios tenía pueblo que sería llamado por medio del evangelio. La soberanía de Dios no apaga la misión, sino que da esperanza al predicador: la Palabra no depende finalmente de la habilidad humana, sino del poder de Dios.",
        ],
      },
      {
        id: "redencion",
        title: "4. Redención en Cristo: una obra eficaz",
        quote: {
          reference: "Juan 10:11; Efesios 5:25",
          text: "Yo soy el buen pastor; el buen pastor su vida da por las ovejas.",
        },
        paragraphs: [
          "La muerte de Cristo no fue un intento incierto de salvación. En la cruz, el Hijo de Dios llevó realmente la culpa de su pueblo, satisfizo la justicia divina y compró con su sangre a los que el Padre le dio. Su sacrificio es suficiente en valor para todos y eficaz para salvar plenamente a todos los que vienen a Él por la fe.",
          "Esta verdad consuela al creyente porque la seguridad descansa en una obra terminada. Cristo no solo hizo posible la salvación; salvó. No solo abrió una puerta; cargó con pecado, venció la muerte, aseguró redención y resucitó como garantía de que la deuda fue pagada.",
        ],
      },
      {
        id: "llamado",
        title: "5. Llamado eficaz: la Palabra que da vida",
        quote: {
          reference: "Juan 6:37; Juan 10:27",
          text: "Todo lo que el Padre me da, vendrá a mí; y al que a mí viene, no le echo fuera.",
        },
        paragraphs: [
          "El evangelio debe ser predicado sinceramente a todos. La invitación de Cristo es real: todo aquel que cree será salvo. Pero la Escritura también enseña que el Espíritu Santo obra internamente para traer a los elegidos a Cristo de manera eficaz, iluminando la mente, renovando la voluntad y haciendo precioso al Salvador.",
          "El llamado eficaz no fuerza a personas contra su deseo; transforma el deseo. Donde antes había indiferencia, nace hambre de gracia. Donde antes había orgullo, aparece arrepentimiento. Donde antes Cristo parecía irrelevante, ahora es visto como tesoro, justicia, vida y esperanza.",
        ],
      },
      {
        id: "perseverancia",
        title: "6. Perseverancia: guardados por el poder de Dios",
        quote: {
          reference: "Filipenses 1:6; 1 Pedro 1:5",
          text: "El que comenzó en vosotros la buena obra, la perfeccionará hasta el día de Jesucristo.",
        },
        paragraphs: [
          "La perseverancia de los santos no significa que el creyente verdadero pueda vivir descuidadamente sin disciplina, arrepentimiento ni fruto. Significa que Dios preserva a los suyos mediante la fe, la Palabra, la corrección, la oración y el cuidado pastoral. Los que son de Cristo perseveran porque Cristo intercede por ellos.",
          "Esta doctrina no produce negligencia; produce dependencia. El cristiano persevera velando, confesando pecado, escuchando la Escritura, resistiendo la tentación y mirando a Cristo. Pero debajo de toda obediencia está la mano fiel de Dios, que guarda a su pueblo hasta el fin.",
        ],
      },
      {
        id: "pastoral",
        title: "7. Sensibilidad pastoral al enseñar estas verdades",
        quote: {
          reference: "2 Timoteo 2:24-25",
          text: "El siervo del Señor no debe ser contencioso, sino amable para con todos, apto para enseñar, sufrido.",
        },
        paragraphs: [
          "Las doctrinas de la gracia suelen tocar preguntas profundas: culpa, seguridad, libertad, responsabilidad, evangelismo y sufrimiento. Por eso deben enseñarse con paciencia pastoral. Una presentación fría o combativa puede decir cosas verdaderas de manera poco fiel al carácter de Cristo.",
          "La meta no es formar personas que repitan términos reformados, sino discípulos que adoren a Dios, amen el evangelio, prediquen con compasión y descansen en la gracia. Toda doctrina bíblica debe llevarnos a mayor humildad, no a superioridad espiritual.",
        ],
      },
      {
        id: "mision",
        title: "8. Gracia soberana y misión",
        quote: {
          reference: "Hechos 18:9-10",
          text: "No temas, sino habla... porque yo tengo mucho pueblo en esta ciudad.",
        },
        paragraphs: [
          "La soberanía de Dios no debilita la misión. La fortalece. Si la salvación dependiera finalmente de la persuasión humana, el evangelismo sería desesperante. Pero Dios usa medios: la predicación, el testimonio, la oración y la enseñanza paciente. Quien cree en la gracia soberana debe predicar con esperanza.",
          "En un ministerio transmitido por internet, esta convicción es especialmente necesaria. No sabemos quién escucha, desde qué país, con qué heridas o preguntas. Pero Dios puede usar su Palabra para despertar fe, corregir error, consolar aflicción y llevar pecadores a Cristo.",
        ],
      },
      {
        id: "responsabilidad",
        title: "9. Soberanía divina y responsabilidad humana",
        quote: {
          reference: "Hechos 2:23; Hechos 17:30",
          text: "A éste, entregado por el determinado consejo y anticipado conocimiento de Dios... Dios manda a todos los hombres en todo lugar, que se arrepientan.",
        },
        paragraphs: [
          "La Escritura enseña simultáneamente la soberanía de Dios y la responsabilidad humana. No debemos negar una verdad para proteger la otra. La cruz misma muestra esta armonía: Cristo fue entregado conforme al plan determinado de Dios, y sin embargo los hombres que lo crucificaron fueron moralmente responsables de su maldad.",
          "Esto nos libra de dos errores. Por un lado, no tratamos al ser humano como si fuera capaz de salvarse a sí mismo. Por otro lado, no hablamos como si el arrepentimiento, la fe y la obediencia fueran irrelevantes. Dios manda a todos a arrepentirse, llama a todos a creer en Cristo, y salva eficazmente por medio de la predicación del evangelio.",
        ],
      },
      {
        id: "seguridad",
        title: "10. Seguridad cristiana y examen del corazón",
        quote: {
          reference: "Romanos 8:1; 2 Corintios 13:5",
          text: "Ahora, pues, ninguna condenación hay para los que están en Cristo Jesús... examinaos a vosotros mismos si estáis en la fe.",
        },
        paragraphs: [
          "Las doctrinas de la gracia dan seguridad verdadera, pero no una seguridad carnal. El creyente descansa en Cristo, no en la intensidad de sus emociones ni en una decisión pasada aislada de fruto. Quien pertenece al Señor puede mirar a la cruz y decir: mi justicia está fuera de mí, en Cristo; mi esperanza no descansa en mi desempeño, sino en su obra terminada.",
          "Al mismo tiempo, la Biblia llama a examinarnos. El examen cristiano no busca destruir la fe débil, sino distinguir la fe viva de la presunción religiosa. Donde hay gracia, hay arrepentimiento, hambre por la Palabra, lucha contra el pecado, amor por Cristo y perseverancia. Estas evidencias no son la base de la salvación, pero sí son fruto de la vida nueva.",
        ],
      },
      {
        id: "adoracion",
        title: "11. La gracia que produce adoración",
        quote: {
          reference: "Romanos 11:33-36",
          text: "Porque de él, y por él, y para él, son todas las cosas. A él sea la gloria por los siglos.",
        },
        paragraphs: [
          "Cuando Pablo contempla la sabiduría de Dios en la salvación, no termina con una tabla fría de argumentos, sino con doxología. La doctrina bíblica debe llevarnos a adorar. Si una persona aprende elección, redención, llamado eficaz y perseverancia sin crecer en humildad y gratitud, todavía no ha recibido estas verdades como debe.",
          "La gracia soberana inclina el corazón. Nos enseña a cantar con más reverencia, a orar con más dependencia, a evangelizar con más paciencia y a sufrir con más esperanza. La pregunta pastoral no es solo si podemos explicar estas doctrinas, sino si ellas nos han llevado a amar más al Dios que salva pecadores para su gloria.",
        ],
      },
      {
        id: "consuelo",
        title: "12. Consuelo para creyentes débiles",
        quote: {
          reference: "Isaías 42:3; Mateo 12:20",
          text: "La caña cascada no quebrará, y el pábilo que humea no apagará.",
        },
        paragraphs: [
          "Estas doctrinas también consuelan al creyente débil. Muchos cristianos miran demasiado a la calidad de su fe y demasiado poco al Salvador en quien descansa la fe. Las doctrinas de la gracia nos enseñan que Dios salva a pecadores necesitados, sostiene a ovejas frágiles y termina la obra que comenzó.",
          "Esto no elimina el llamado a crecer, confesar pecado y perseverar. Pero cambia el tono del camino cristiano. No avanzamos bajo la sospecha de que Dios abandonará a los suyos en cuanto tropiecen; avanzamos bajo la promesa de un Pastor fiel que corrige, restaura, guía y guarda hasta el fin.",
          "También ayuda a tratar con ternura a otros creyentes. Si Dios nos recibió por gracia, no podemos pastorear, enseñar o corregir como si la madurez cristiana fuera una obra de superioridad personal. La gracia que defendemos doctrinalmente debe verse en paciencia, oración, mansedumbre y esperanza por aquellos que todavía están aprendiendo a caminar.",
        ],
      },
    ],
    applications: [
      "Recibe estas doctrinas como motivo de adoración y humildad, no de contienda.",
      "Ora por quienes escuchan el evangelio, confiando en que Dios da vida.",
      "Predica y comparte la Palabra con paciencia, sabiendo que la salvación pertenece al Señor.",
      "Descansa tu seguridad en Cristo, no en la fuerza de tu propia voluntad.",
    ],
  },
  {
    slug: "como-estudiar-la-biblia",
    title: "Guía para estudiar la Escritura",
    eyebrow: "Hermenéutica y discipulado",
    readingTime: "Lectura extensa",
    summary:
      "Principios para leer la Biblia con reverencia, contexto, atención al texto, oración y aplicación fiel.",
    description:
      "Estudiar la Escritura es acercarse a la Palabra inspirada de Dios. Esta guía busca ayudar a leer con cuidado, interpretar con responsabilidad y aplicar con humildad.",
    sections: [
      {
        id: "oracion",
        title: "1. Comienza con oración y reverencia",
        quote: {
          reference: "Salmo 119:18",
          text: "Abre mis ojos, y miraré las maravillas de tu ley.",
        },
        paragraphs: [
          "El estudio bíblico cristiano no es un ejercicio meramente académico. Leemos la Palabra de Dios delante del Dios que habla. Por eso comenzamos con oración, pidiendo iluminación, humildad, obediencia y discernimiento. La mente debe trabajar, pero una mente sin dependencia puede volverse orgullosa.",
          "Orar antes de estudiar no reemplaza la disciplina, el contexto ni el análisis del texto. Más bien los orienta correctamente. Pedimos al Señor que nos libre de usar la Biblia para confirmar prejuicios y que nos enseñe a recibir lo que realmente ha dicho.",
        ],
      },
      {
        id: "contexto",
        title: "2. Lee el contexto antes de sacar conclusiones",
        quote: {
          reference: "Nehemías 8:8",
          text: "Y leían en el libro de la ley de Dios claramente, y ponían el sentido, de modo que entendiesen la lectura.",
        },
        paragraphs: [
          "Uno de los errores más comunes es aislar frases bíblicas de su contexto. Un versículo pertenece a un párrafo, un párrafo a un argumento, un argumento a un libro, y un libro al gran testimonio de toda la Escritura. Leer contexto es un acto de reverencia.",
          "Antes de preguntar qué significa un texto para mí, debo preguntar qué significó en su propio contexto. ¿Quién habla? ¿A quién se dirige? ¿Qué problema se está tratando? ¿Cuál es el flujo del argumento? Estas preguntas protegen de interpretaciones rápidas, sentimentales o manipuladas.",
        ],
      },
      {
        id: "genero",
        title: "3. Reconoce el género literario",
        quote: {
          reference: "Hebreos 1:1",
          text: "Dios, habiendo hablado muchas veces y de muchas maneras en otro tiempo a los padres por los profetas.",
        },
        paragraphs: [
          "La Biblia contiene narrativa, ley, poesía, profecía, sabiduría, evangelios, epístolas y literatura apocalíptica. Todo es Palabra de Dios, pero no todo se lee de la misma manera. Un salmo usa imágenes poéticas; una epístola desarrolla argumentos; una narrativa muestra eventos reales dentro del plan redentor.",
          "Reconocer el género evita aplicaciones torcidas. No debemos convertir proverbios en promesas mecánicas, ni narrativas descriptivas en mandatos universales sin considerar el propósito del texto. La interpretación sana escucha cómo el propio texto quiere ser leído.",
        ],
      },
      {
        id: "devocional-exegetica",
        title: "4. Lectura devocional y lectura exegética",
        quote: {
          reference: "2 Timoteo 2:15",
          text: "Procura con diligencia presentarte a Dios aprobado... que usa bien la palabra de verdad.",
        },
        paragraphs: [
          "La lectura devocional busca alimentar el alma mediante la Palabra, llevando al creyente a oración, confianza, arrepentimiento y adoración. Es necesaria y preciosa. Pero también necesitamos lectura exegética: observar con cuidado palabras, estructura, contexto, conexiones y propósito del pasaje.",
          "Estas dos formas no compiten. La exégesis sin devoción puede volverse fría; la devoción sin exégesis puede volverse subjetiva. La meta es entender fielmente para responder fielmente. Dios no nos llama a impresiones vagas, sino a oír su voz en el texto inspirado.",
        ],
      },
      {
        id: "preguntas",
        title: "5. Haz buenas preguntas al texto",
        quote: {
          reference: "Hechos 17:11",
          text: "Escudriñando cada día las Escrituras para ver si estas cosas eran así.",
        },
        paragraphs: [
          "Un método sencillo consiste en preguntar: ¿Qué enseña este pasaje acerca de Dios? ¿Qué revela acerca del ser humano? ¿Qué pecado expone? ¿Qué promesa presenta? ¿Cómo apunta a Cristo? ¿Qué demanda de fe, arrepentimiento u obediencia aparece?",
          "También conviene observar repeticiones, contrastes, conectores, mandatos, razones y conclusiones. Palabras como porque, por tanto, pero y así que son importantes. La Biblia no es una colección desordenada de frases; sus autores, inspirados por el Espíritu, comunican con intención.",
        ],
      },
      {
        id: "cristo",
        title: "6. Lee toda la Escritura a la luz de Cristo",
        quote: {
          reference: "Lucas 24:27",
          text: "Y comenzando desde Moisés, y siguiendo por todos los profetas, les declaraba en todas las Escrituras lo que de él decían.",
        },
        paragraphs: [
          "Leer cristocéntricamente no significa forzar a Cristo en cada detalle de manera artificial. Significa reconocer que toda la Escritura se cumple en Él y que el plan redentor de Dios encuentra su centro en su persona y obra. La ley, los profetas, los salmos y los apóstoles convergen en Cristo.",
          "Esta convicción nos guarda del moralismo. David y Goliat no es primero una historia sobre vencer nuestros gigantes; es parte del testimonio del Dios que salva a su pueblo mediante un representante. La Escritura nos llama a obedecer, pero siempre desde la gracia revelada plenamente en Cristo.",
        ],
      },
      {
        id: "errores",
        title: "7. Errores comunes que debemos evitar",
        quote: {
          reference: "2 Pedro 3:16",
          text: "Las cuales los indoctos e inconstantes tuercen, como también las otras Escrituras, para su propia perdición.",
        },
        paragraphs: [
          "Debemos evitar leer la Biblia como si cada texto fuera una promesa directa de prosperidad personal, como si el significado dependiera de mi emoción del momento, o como si pudiera ignorar el contexto histórico. También debemos cuidarnos de usar la Escritura solo para ganar discusiones.",
          "Otro error frecuente es buscar novedades antes que obediencia. La madurez cristiana no consiste en descubrir interpretaciones extrañas, sino en recibir con fe lo que Dios ha revelado claramente. La claridad bíblica no elimina pasajes difíciles, pero sí nos da un camino seguro para lo esencial.",
        ],
      },
      {
        id: "herramientas",
        title: "8. Herramientas útiles",
        quote: {
          reference: "Proverbios 15:22",
          text: "Los pensamientos son frustrados donde no hay consejo; mas en la multitud de consejeros se afirman.",
        },
        paragraphs: [
          "Las herramientas no reemplazan la lectura bíblica, pero pueden servirla. Una buena Biblia de estudio, un diccionario bíblico confiable, comentarios responsables, mapas, introducciones a los libros y catecismos históricos pueden ayudar a comprender mejor el contexto y la doctrina.",
          "Conviene usar herramientas después de observar el texto personalmente. Primero lee, ora, anota preguntas y busca entender el flujo del pasaje. Luego consulta maestros fieles. Así evitas depender pasivamente de opiniones y aprendes a ejercitar discernimiento bíblico.",
        ],
      },
      {
        id: "aplicacion",
        title: "9. Aplica el texto con cuidado",
        quote: {
          reference: "Mateo 7:24",
          text: "Cualquiera, pues, que me oye estas palabras, y las hace, le compararé a un hombre prudente.",
        },
        paragraphs: [
          "La aplicación bíblica no debe saltar por encima del significado. Primero preguntamos qué dice el texto y qué quiso comunicar Dios por medio del autor inspirado; luego preguntamos cómo esa verdad debe formar nuestra fe, arrepentimiento, adoración y obediencia. Aplicar sin interpretar bien produce moralismo, culpa innecesaria o promesas mal usadas.",
          "Una buena aplicación suele tocar varias dimensiones: qué debo creer acerca de Dios, qué pecado debo confesar, qué promesa debo abrazar, qué obediencia debo practicar, qué consuelo debo recibir y cómo este pasaje me lleva a Cristo. La aplicación fiel no busca impresionar; busca someter la vida concreta a la Palabra del Señor.",
        ],
      },
      {
        id: "comunidad",
        title: "10. Estudia con otros creyentes",
        quote: {
          reference: "Colosenses 3:16",
          text: "La palabra de Cristo more en abundancia en vosotros, enseñándoos y exhortándoos unos a otros en toda sabiduría.",
        },
        paragraphs: [
          "Aunque hay un lugar necesario para la lectura personal, Dios no diseñó el crecimiento cristiano como una experiencia aislada. La Palabra debe habitar en la comunidad del pueblo de Dios. Estudiar con otros creyentes permite hacer preguntas, corregir malentendidos, recibir ánimo y aprender de la gracia que Dios ha dado a otros.",
          "Quienes acompañan una enseñanza transmitida pueden buscar conversaciones responsables con hermanos maduros, tomar notas durante la predicación, revisar los pasajes citados y escribir preguntas pastorales cuando necesiten orientación. La tecnología puede facilitar acceso, pero la meta sigue siendo una fe formada por la verdad y vivida delante de Dios con otros.",
        ],
      },
      {
        id: "ritmo",
        title: "11. Forma un ritmo sostenible",
        quote: {
          reference: "Salmo 1:2-3",
          text: "En la ley de Jehová está su delicia, y en su ley medita de día y de noche.",
        },
        paragraphs: [
          "Muchas personas fracasan en el estudio bíblico porque comienzan con planes imposibles de sostener. Es mejor leer con constancia humilde que depender de impulsos intensos pero pasajeros. Un capítulo leído con atención, oración y obediencia puede ser más provechoso que muchas páginas recorridas sin meditación.",
          "Un ritmo sencillo puede incluir lectura continua de libros bíblicos, un tiempo semanal de estudio más profundo, memorización de textos centrales y revisión de notas de la predicación. La disciplina cristiana no busca ganar favor ante Dios; responde al favor recibido en Cristo y abre espacio para escuchar con atención la voz del Señor en su Palabra.",
        ],
      },
      {
        id: "predicacion",
        title: "12. Usa la predicación como escuela de lectura bíblica",
        quote: {
          reference: "1 Timoteo 4:13",
          text: "Ocúpate en la lectura, la exhortación y la enseñanza.",
        },
        paragraphs: [
          "La predicación expositiva no solo comunica un mensaje; también enseña a leer la Biblia. Cuando un predicador explica el contexto, sigue el argumento del pasaje, muestra conexiones bíblicas y aplica el evangelio con fidelidad, la congregación aprende cómo acercarse al texto. Escuchar bien es parte del discipulado.",
          "Por eso conviene escuchar la predicación con Biblia abierta, tomando nota de las observaciones principales y revisando luego el pasaje. Pregunta qué enseñó el texto, no solo qué frase te impactó. Observa cómo el mensaje llegó a Cristo, cómo expuso el pecado, qué promesa sostuvo la fe y qué obediencia concreta fue llamada.",
          "Para quienes siguen una transmisión por internet, esta práctica es especialmente útil. La distancia física no impide escuchar con atención, pausar para revisar textos, volver a estudiar un pasaje y escribir preguntas. La enseñanza transmitida puede convertirse en un ritmo serio de formación cuando se recibe con oración, disciplina y deseo de obedecer al Señor.",
        ],
      },
      {
        id: "humildad",
        title: "13. Estudia para obedecer, no para impresionar",
        quote: {
          reference: "1 Corintios 8:1",
          text: "El conocimiento envanece, pero el amor edifica.",
        },
        paragraphs: [
          "El conocimiento bíblico puede ser usado pecaminosamente si se separa del amor. Una persona puede conocer términos, argumentos y referencias, y aun así volverse impaciente, dura o orgullosa. La Escritura nos llama a crecer en conocimiento que edifica, consuela, corrige y sirve.",
          "Estudia para adorar mejor, arrepentirte más pronto, amar con más paciencia y hablar con más fidelidad. Si el estudio bíblico no nos hace más humildes delante de Dios y más dispuestos a servir al prójimo, debemos detenernos y pedir al Señor que ordene nuevamente nuestro corazón bajo su Palabra.",
          "Una señal saludable del estudio bíblico es que nos vuelve más enseñables. El buen estudiante de la Escritura no se acerca al texto para dominarlo, sino para ser gobernado por él. La Palabra nos examina, nos corrige y nos consuela; por eso debemos leer con una disposición humilde, lenta para imponer conclusiones y pronta para obedecer cuando Dios habla con claridad.",
        ],
      },
    ],
    applications: [
      "Lee pasajes completos, no solo versículos aislados.",
      "Anota observaciones antes de consultar comentarios.",
      "Pregunta cómo el texto revela a Dios, expone el pecado y apunta a Cristo.",
      "Convierte el estudio en oración, arrepentimiento, fe y obediencia concreta.",
    ],
  },
  {
    slug: "lecturas-crecimiento-espiritual",
    title: "Lecturas para crecer en la Palabra",
    eyebrow: "Biblioteca recomendada",
    readingTime: "Lectura extensa",
    summary:
      "Una guía curada de lecturas, confesiones y recursos para crecer con la Biblia como centro, sin convertir la formación cristiana en consumo religioso.",
    description:
      "Los buenos libros pueden servir al discipulado cuando permanecen bajo la autoridad de la Escritura. Este recurso ofrece criterios y recomendaciones prudentes para una formación cristiana seria.",
    sections: [
      {
        id: "biblia-centro",
        title: "1. La Biblia permanece en el centro",
        quote: {
          reference: "Salmo 19:7-8",
          text: "La ley de Jehová es perfecta, que convierte el alma; el testimonio de Jehová es fiel, que hace sabio al sencillo.",
        },
        paragraphs: [
          "Toda biblioteca cristiana saludable comienza con la Biblia y vuelve constantemente a la Biblia. Los libros, confesiones, comentarios y sermones son ayudas; la Escritura es la Palabra inspirada de Dios. Cuando las ayudas desplazan la lectura bíblica, incluso buenos recursos pueden convertirse en distracción.",
          "Leer buenos autores debe aumentar nuestro amor por la Escritura, no reemplazarlo. Un recurso fiel nos enseña a observar mejor el texto, a entender mejor el evangelio, a orar con más profundidad y a obedecer con más claridad. Si un libro produce fascinación por el autor pero descuido de la Biblia, algo está fuera de orden.",
        ],
      },
      {
        id: "confesiones",
        title: "2. Confesiones y catecismos",
        quote: {
          reference: "Judas 3",
          text: "Que contendáis ardientemente por la fe que ha sido una vez dada a los santos.",
        },
        paragraphs: [
          "Las confesiones históricas no tienen autoridad igual a la Escritura, pero sirven como resúmenes probados de doctrina bíblica. Para una iglesia bautista reformada, documentos como la Confesión Bautista de Fe de 1689 pueden ayudar a ordenar la enseñanza sobre Dios, la Escritura, Cristo, la salvación, la iglesia y la vida cristiana.",
          "Los catecismos también son útiles porque enseñan mediante preguntas y respuestas. Forman memoria doctrinal, ayudan a familias, nuevos creyentes y estudiantes, y ofrecen lenguaje preciso para verdades que la iglesia ha confesado durante siglos. Usados correctamente, no apagan la piedad; la orientan.",
        ],
      },
      {
        id: "lecturas-introductorias",
        title: "3. Lecturas introductorias",
        quote: {
          reference: "Hebreos 5:14",
          text: "El alimento sólido es para los que han alcanzado madurez, para los que por el uso tienen los sentidos ejercitados.",
        },
        paragraphs: [
          "Quienes comienzan a estudiar doctrina necesitan claridad antes que complejidad. Es recomendable iniciar con libros sobre el evangelio, la autoridad bíblica, la oración, la santidad y la vida de iglesia. Autores reformados prudentes pueden servir si escriben con fidelidad bíblica y sensibilidad pastoral.",
          "No toda lectura debe ser técnica. Un creyente necesita alimento doctrinal, pero también libros que lo lleven a la adoración, el arrepentimiento, la perseverancia y el amor por Cristo. La meta no es acumular títulos, sino crecer en discernimiento y piedad.",
        ],
      },
      {
        id: "autores",
        title: "4. Autores y voces recomendables",
        quote: {
          reference: "2 Timoteo 2:2",
          text: "Lo que has oído de mí ante muchos testigos, esto encarga a hombres fieles que sean idóneos para enseñar también a otros.",
        },
        paragraphs: [
          "A lo largo de la historia, Dios ha dado maestros a la iglesia. Entre autores antiguos y reformados, muchos creyentes han sido edificados por Agustín, Juan Calvino, los puritanos, Charles Spurgeon, J. C. Ryle y otros escritores centrados en la Escritura. Entre autores contemporáneos, conviene leer con discernimiento a quienes exaltan a Cristo, honran la Biblia y sirven a la iglesia.",
          "La recomendación de autores debe hacerse con prudencia. Ningún escritor fuera de la Escritura es infalible. Incluso los mejores maestros deben ser leídos con Biblia abierta, gratitud y discernimiento. La madurez no consiste en pertenecer a una tribu literaria, sino en aprender lo verdadero y retener lo bueno.",
        ],
      },
      {
        id: "areas",
        title: "5. Áreas de crecimiento",
        quote: {
          reference: "Colosenses 1:9-10",
          text: "Que seáis llenos del conocimiento de su voluntad en toda sabiduría e inteligencia espiritual.",
        },
        paragraphs: [
          "Una biblioteca equilibrada debe incluir doctrina de Dios, cristología, salvación, iglesia, santificación, oración, sufrimiento, misión, familia y ética cristiana. El creyente no necesita leer únicamente sobre controversias; necesita ser formado integralmente para amar a Dios y al prójimo.",
          "También es sabio alternar entre lecturas doctrinales, exposiciones bíblicas, biografías cristianas y recursos devocionales sólidos. Las biografías, por ejemplo, muestran doctrina encarnada en vidas reales: perseverancia, sufrimiento, oración, errores, fidelidad y dependencia del Señor.",
        ],
      },
      {
        id: "criterios",
        title: "6. Criterios para elegir un libro cristiano",
        quote: {
          reference: "1 Tesalonicenses 5:21",
          text: "Examinadlo todo; retened lo bueno.",
        },
        paragraphs: [
          "Antes de leer o recomendar un libro, conviene preguntar: ¿trata la Escritura con reverencia? ¿Presenta a Cristo bíblicamente? ¿Distingue ley y evangelio? ¿Promueve humildad y obediencia? ¿Sirve a la iglesia o solo alimenta curiosidad? ¿Está escrito con claridad y responsabilidad?",
          "También debemos considerar el momento espiritual del lector. Un nuevo creyente puede necesitar fundamentos antes que debates complejos. Una persona afligida puede necesitar consuelo bíblico antes que discusión técnica. La buena formación no solo pregunta qué es verdadero, sino qué es oportuno y edificante.",
        ],
      },
      {
        id: "no-comercial",
        title: "7. Leer sin convertir la fe en consumo",
        quote: {
          reference: "Santiago 1:22",
          text: "Sed hacedores de la palabra, y no tan solamente oidores, engañándoos a vosotros mismos.",
        },
        paragraphs: [
          "Vivimos en una época de abundancia de contenido cristiano. Podcasts, videos, libros, cursos y publicaciones pueden servir, pero también pueden formar consumidores religiosos que escuchan mucho y obedecen poco. La biblioteca doctrinal debe conducir a la adoración, la santidad y el servicio.",
          "Leer bien implica detenerse, meditar, orar, conversar, arrepentirse y practicar. Un libro leído lentamente con obediencia puede edificar más que diez libros consumidos con prisa. La meta es que la verdad de Dios forme el corazón y la vida, no solo la biblioteca personal.",
        ],
      },
      {
        id: "plan",
        title: "8. Un plan sencillo de lectura",
        quote: {
          reference: "2 Pedro 3:18",
          text: "Creced en la gracia y el conocimiento de nuestro Señor y Salvador Jesucristo.",
        },
        paragraphs: [
          "Un plan prudente puede incluir lectura diaria de la Biblia, un catecismo semanal, un libro doctrinal por temporada y una biografía o exposición bíblica cada cierto tiempo. No es necesario apresurarse. La formación cristiana seria suele crecer por hábitos pequeños, constantes y sostenidos.",
          "Quienes acompañan un ministerio transmitido pueden usar estos recursos junto con las predicaciones, tomando notas, revisando textos bíblicos y conversando con otros creyentes. La lectura cristiana se vuelve más saludable cuando está unida a oración, enseñanza fiel y búsqueda de comunidad bíblica.",
        ],
      },
      {
        id: "familia",
        title: "9. Lectura en familia y discipulado cercano",
        quote: {
          reference: "Deuteronomio 6:6-7",
          text: "Y estas palabras que yo te mando hoy, estarán sobre tu corazón; y las repetirás a tus hijos.",
        },
        paragraphs: [
          "El crecimiento en la Palabra no pertenece solo al estudio individual. Las familias pueden leer porciones breves de la Escritura, orar juntas, memorizar preguntas de un catecismo y conversar sobre la predicación. No se requiere producir una clase perfecta; se requiere constancia, sencillez y dependencia del Señor.",
          "Padres, madres, abuelos, matrimonios y creyentes solteros pueden participar en la formación de otros con lecturas sanas y conversaciones bíblicas. La doctrina se vuelve más profunda cuando se explica con paciencia, se vive con humildad y se transmite con amor. Una biblioteca cristiana debe servir a personas reales en ritmos reales de vida.",
        ],
      },
      {
        id: "discernimiento",
        title: "10. Discernimiento ante el contenido digital",
        quote: {
          reference: "1 Juan 4:1",
          text: "No creáis a todo espíritu, sino probad los espíritus si son de Dios.",
        },
        paragraphs: [
          "El acceso a contenido cristiano en internet es una bendición y también una responsabilidad. Hay enseñanza fiel disponible, pero también abundan voces superficiales, especulativas o centradas en el hombre. El creyente necesita discernimiento para distinguir entre lo que usa la Biblia como adorno y lo que se somete realmente a su autoridad.",
          "Al evaluar recursos digitales, conviene preguntar si la enseñanza exalta a Cristo, maneja correctamente la Escritura, presenta el evangelio con claridad, evita manipulación emocional y muestra fruto pastoral. La popularidad de un contenido no garantiza fidelidad. La iglesia debe formar oyentes que amen la verdad más que la novedad.",
        ],
      },
      {
        id: "perseverar",
        title: "11. Perseverar lentamente",
        quote: {
          reference: "Gálatas 6:9",
          text: "No nos cansemos, pues, de hacer bien; porque a su tiempo segaremos, si no desmayamos.",
        },
        paragraphs: [
          "La formación cristiana seria suele ser lenta. Un creyente no necesita leer todo de inmediato ni dominar cada área doctrinal en pocos meses. Necesita permanecer bajo la Palabra, recibir enseñanza fiel, volver al evangelio, arrepentirse con frecuencia y caminar con paciencia. Dios produce madurez mediante medios ordinarios sostenidos en el tiempo.",
          "Por eso una biblioteca doctrinal debe invitar a perseverar, no a aparentar conocimiento. Lee poco a poco. Vuelve a textos importantes. Compara con la Escritura. Toma notas. Ora lo aprendido. Conversa con otros. Lo que buscamos no es una imagen intelectual, sino una fe más arraigada en Cristo, más sobria ante el mundo y más dispuesta a obedecer al Señor.",
        ],
      },
      {
        id: "orden",
        title: "12. Un orden recomendado para comenzar",
        quote: {
          reference: "Proverbios 4:7",
          text: "Sabiduría ante todo; adquiere sabiduría; y sobre todas tus posesiones adquiere inteligencia.",
        },
        paragraphs: [
          "Un orden sencillo puede ayudar. Primero, lee diariamente la Biblia, comenzando por un evangelio, una carta apostólica y salmos seleccionados. Segundo, usa un catecismo o confesión para ordenar doctrinas básicas. Tercero, añade un libro claro sobre el evangelio, la santidad o la oración. Cuarto, incorpora biografías cristianas que muestren fidelidad en sufrimiento y servicio.",
          "Después de esos fundamentos, puedes avanzar hacia obras más densas sobre teología sistemática, historia de la iglesia, doctrina de la salvación o interpretación bíblica. No hay virtud en leer lo difícil antes de estar preparado. La sabiduría cristiana sabe escoger alimento adecuado para cada etapa, sin despreciar lo sencillo ni idolatrar lo complejo.",
          "También conviene leer menos libros, pero leerlos mejor. Subraya con moderación, resume ideas principales, registra preguntas y vuelve a los textos bíblicos citados. Si un libro te lleva a orar, confesar pecado, amar a Cristo y entender mejor la Escritura, ha servido bien. Si solo te deja opiniones fuertes y poca piedad, léelo con mayor cautela.",
        ],
      },
      {
        id: "predicaciones",
        title: "13. Unir lecturas y predicación",
        quote: {
          reference: "Hechos 20:32",
          text: "Os encomiendo a Dios, y a la palabra de su gracia, que tiene poder para sobreedificaros.",
        },
        paragraphs: [
          "Las lecturas doctrinales son más provechosas cuando acompañan la predicación de la Palabra. Si se está predicando un evangelio, lee recursos sobre Cristo, el reino y el discipulado. Si se está estudiando una carta apostólica, busca materiales que expliquen el contexto y las doctrinas principales. Así la lectura no queda dispersa, sino unida al alimento semanal.",
          "Quienes siguen transmisiones pueden usar esta biblioteca como compañera de estudio. Escucha la predicación, revisa el pasaje, consulta un recurso doctrinal relacionado y ora por aplicación concreta. De esa manera, el aprendizaje no se vuelve consumo de contenido, sino un camino de formación espiritual bajo la Palabra de Dios.",
        ],
      },
    ],
    applications: [
      "Mantén la lectura bíblica como prioridad diaria sobre cualquier otro recurso.",
      "Usa confesiones y catecismos como mapas doctrinales subordinados a la Escritura.",
      "Lee autores reformados con gratitud, pero también con discernimiento bíblico.",
      "Escoge lecturas que alimenten adoración, obediencia, humildad y amor por Cristo.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
