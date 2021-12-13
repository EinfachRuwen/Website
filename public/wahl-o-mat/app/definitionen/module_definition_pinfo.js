// UTF8-Zeichen öäüðý


/**
 * Partei-Informationen
 *
 * Aus Thesen-CMS ausgespielt fuer Wahl-o-mat 7525
 *
 * 1.0.0        20.09.2021 11:45:56 Wahl-O-Mat
 *
 * @category    Bpb
 * @package     Wahl-O-Mat
 * @subpackage  CMS-Definitionen-Parteiinformationen
 * @copyright   Bundeszentrale fuer politische Bildung
 */

/*
  --------------------------------------------------------------
  Vordefinieren der in den Templates gefunden assoziativen Keys
  mit denenen auf WOMT_aTexte und WOMT_aBilder zugriffen wird
  nicht vorhanden Indexe fuehren in Javascript sonst zu Fehlern!

  Wenn mit Variablen auf die assoziativen Arrays zugegriffen wird
  kann dies nicht automatisch analsysit werden,
  die Variablen werden aber zur Erinnuner im output angezeigt!
  --------------------------------------------------------------
*/
var WOMT_aParteienBeschreibung = new Array();
var WOMT_aParteienBeschreibungChecksum = new Array();
var WOMT_aParteienBeschreibungChecksumLanguage = new Array();
var WOMT_sGenerationTimeParteienBeschreibung = '';
WOMT_aParteienBeschreibung[0] = new Array();
WOMT_aParteienBeschreibung[1] = new Array();
WOMT_aParteienBeschreibung[2] = new Array();
WOMT_aParteienBeschreibung[3] = new Array();
WOMT_aParteienBeschreibung[4] = new Array();
WOMT_aParteienBeschreibung[5] = new Array();
WOMT_aParteienBeschreibung[6] = new Array();
WOMT_aParteienBeschreibung[7] = new Array();
WOMT_aParteienBeschreibung[8] = new Array();
WOMT_aParteienBeschreibung[9] = new Array();
WOMT_aParteienBeschreibung[10] = new Array();
WOMT_aParteienBeschreibung[11] = new Array();
WOMT_aParteienBeschreibung[12] = new Array();
WOMT_aParteienBeschreibung[13] = new Array();
WOMT_aParteienBeschreibung[14] = new Array();
WOMT_aParteienBeschreibung[15] = new Array();
WOMT_aParteienBeschreibung[16] = new Array();
WOMT_aParteienBeschreibung[17] = new Array();
WOMT_aParteienBeschreibung[18] = new Array();
WOMT_aParteienBeschreibung[19] = new Array();
WOMT_aParteienBeschreibung[20] = new Array();
WOMT_aParteienBeschreibung[21] = new Array();
WOMT_aParteienBeschreibung[22] = new Array();
WOMT_aParteienBeschreibung[23] = new Array();
WOMT_aParteienBeschreibung[24] = new Array();
WOMT_aParteienBeschreibung[25] = new Array();
WOMT_aParteienBeschreibung[26] = new Array();
WOMT_aParteienBeschreibung[27] = new Array();
WOMT_aParteienBeschreibung[28] = new Array();
WOMT_aParteienBeschreibung[29] = new Array();
WOMT_aParteienBeschreibung[30] = new Array();
WOMT_aParteienBeschreibung[31] = new Array();
WOMT_aParteienBeschreibung[32] = new Array();
WOMT_aParteienBeschreibung[33] = new Array();
WOMT_aParteienBeschreibung[34] = new Array();
WOMT_aParteienBeschreibung[35] = new Array();
WOMT_aParteienBeschreibung[36] = new Array();
WOMT_aParteienBeschreibung[37] = new Array();
WOMT_aParteienBeschreibung[0][0] = 'CDU und CSU wurden nach 1945 als überkonfessionelle Parteien gegründet und vereinen konservative, wirtschaftsliberale und christlich-soziale Positionen. Die CSU tritt nur in Bayern zu Wahlen an. Im Bund bilden beide eine gemeinsame Fraktion und stellen seit 2005 mit Angela Merkel die Bundeskanzlerin.';
WOMT_aParteienBeschreibung[1][0] = 'Die SPD wurde vor fast 160 Jahren gegründet. Sie versteht sich traditionell als Interessenvertreterin der sozial Schwächeren und der gewerkschaftlich organisierten Arbeitnehmerinnen und Arbeitnehmer. Sie ist seit 2013 - wie schon von 2005 bis 2009 - Teil der Bundesregierung zusammen mit CDU/CSU.';
WOMT_aParteienBeschreibung[2][0] = 'Die AfD entstand 2013 aus Protest gegen Finanzhilfen für wirtschaftlich strauchelnde EU-Mitgliedsländer. Über Kritik an der Asyl- und Flüchtlingspolitik hat sie sich zunehmend als rechtspopulistische Protestpartei profiliert. Sie ist in allen deutschen Landesparlamenten und im Bundestag vertreten.';
WOMT_aParteienBeschreibung[3][0] = 'Die 1948 gegründete FDP steht für den politischen Liberalismus und will Freiheit, Selbstbestimmung und Verantwortung der Einzelnen im Rahmen der Sozialen Marktwirtschaft stärken. Sie ist seit 1949 - mit Unterbrechung von 2013 bis 2017 - im Bundestag vertreten.';
WOMT_aParteienBeschreibung[4][0] = 'DIE LINKE entstand 2007 aus der Fusion der PDS mit der WASG. Die Partei tritt für einen demokratischen Sozialismus sowie den Ausbau des Sozialstaates ein und sieht sich als eine für Gewaltfreiheit eintretende Friedenspartei. Sie bzw. ihre Vorgängerin PDS ist seit 1990 im Bundestag vertreten.';
WOMT_aParteienBeschreibung[5][0] = 'Die GRÜNEN entstanden 1993 aus der Fusion der westdeutschen Grünen mit dem ostdeutschen Bündnis 90. Ihre Ursprünge liegen in der Umwelt-, Friedens- und Frauenrechtsbewegung sowie in der DDR-Bürgerrechtsbewegung. Seit 1983 sind sie im Bundestag vertreten und waren von 1998 bis 2005 in der Bundesregierung.';
WOMT_aParteienBeschreibung[6][0] = 'Die FREIEN WÄHLER sind 2010 aus dem Zusammenschluss kommunalpolitischer Bewegungen entstanden. Die Partei tritt für die Stärkung der Gemeinden und des Bürgerwillens bei kommunalen Entscheidungen ein. Sowohl in Bayern als auch in Rheinland-Pfalz ist sie im Landtag vertreten.';
WOMT_aParteienBeschreibung[7][0] = 'Die PARTEI wurde 2004 von Redaktionsmitgliedern des Magazins „Titanic“ gegründet. Als Satirepartei parodiert sie die etablierten Parteien und das politische System. Sie hält ein Mandat im Europäischen Parlament und ist seit 2020 durch einen übergetretenen Abgeordneten der SPD im Bundestag vertreten.';
WOMT_aParteienBeschreibung[8][0] = 'Die Tierschutzpartei wurde 1993 gegründet und setzt sich für einen konsequenten Umwelt- und Tierschutz ein. Sie ist zudem eng mit der Friedensbewegung und anderen Bürgerinitiativen verbunden. 2014 und 2019 erreichte sie jeweils ein Mandat im Europaparlament.';
WOMT_aParteienBeschreibung[9][0] = 'Die 1964 gegründete NPD lehnt die freiheitliche Demokratie ab und vertritt fremdenfeindliche und aggressiv-sozialpopulistische Positionen. Der Verfassungsschutz stuft sie als rechtsextremistisch ein, das Bundesverfassungsgericht attestiert ihr ein politisches Konzept, das die Menschenwürde missachtet.';
WOMT_aParteienBeschreibung[10][0] = 'Die PIRATEN wurden 2006 gegründet. Zuerst auf Netzpolitik fokussiert, profilierten sie sich in den Themen Datenschutz, informationelle Selbstbestimmung, Transparenz, Freiheit im Internet sowie Bürgerbeteiligung als linksliberale Partei. Von 2011 bis 2017 waren sie in bis zu vier Landtagen vertreten.';
WOMT_aParteienBeschreibung[11][0] = 'Die ÖDP wurde 1981 gegründet und hat ihre Ursprünge in der Umweltbewegung. Ihre politischen Überzeugungen beruhen auf ökologischen und wertkonservativen Ansichten, die die Partei aus christlich-humanistischen Werten ableitet. Seit 2014 ist sie mit einem Sitz im Europäischen Parlament vertreten.';
WOMT_aParteienBeschreibung[12][0] = 'Die V-Partei³ wurde 2016 gegründet und will auf die Auswirkungen von Wachstum, Konsum und Essverhalten hinweisen. Sie fordert eine bio-vegane Ausrichtung der Landwirtschaft, langfristig den Ausstieg aus der Nutztierhaltung sowie die Verbesserung des Verbraucher-, Klima- und Tierschutzes.';
WOMT_aParteienBeschreibung[13][0] = 'Die DiB wurde 2017 gegründet und setzt sich für mehr Mitbestimmung und Gerechtigkeit und gegen Rassismus und Diskriminierung ein. Sie fordert u.a. ein verbindliches Lobbyregister, die Schaffung einer föderalen europäischen Republik und ein bedingungsloses Grundeinkommen.';
WOMT_aParteienBeschreibung[14][0] = 'Die 1946 gegründete BP bezeichnet sich selbst als politische Organisation der fränkischen, schwäbischen, altbairischen und freiheitlich denkenden Bevölkerung im Freistaat. Die bayerische Eigenstaatlichkeit stellt ihre Kernforderung dar wie auch der Ausbau der direkten Demokratie.';
WOMT_aParteienBeschreibung[15][0] = 'Die Tierschutzallianz wurde 2013 als eine Abspaltung von der Tierschutzpartei gegründet. Ihr zentrales Thema ist der Tierschutz. Zudem fordert sie u.a. mehr Bürgerbeteiligung, eine bedingungslose Grundsicherung und einheitliche Rahmenbedingungen für das Bildungssystem.';
WOMT_aParteienBeschreibung[16][0] = 'Die 1982 gegründete MLPD orientiert ihre Programmatik an den Lehren von Marx, Engels, Lenin, Stalin und Mao Tse-tung. Sie verfolgt das Ziel, weltweit eine kommunistische Gesellschaft zu errichten. Der Verfassungsschutz stuft die Partei als linksextremistisch ein.';
WOMT_aParteienBeschreibung[17][0] = 'Die Gesundheitsforschung verfolgt seit ihrer Gründung 2015 als einziges politisches Ziel die bessere Erforschung altersbedingter Krankheiten. In ihrem Programm fordert sie daher, zehn Prozent des Bundeshaushaltes jährlich in dieses Forschungsgebiet zu investieren.';
WOMT_aParteienBeschreibung[18][0] = 'Die Partei MENSCHLICHE WELT wurde 2013 gegründet und setzt sich für eine ganzheitlich-spirituelle Lebensführung ein. Sie steht den staatlichen Maßnahmen zur Bekämpfung der Covid-19-Pandemie kritisch gegenüber, will die Abschaffung der Massentierhaltung und ein Ende des Ausbaus des 5G-Netzes.';
WOMT_aParteienBeschreibung[19][0] = 'Die DKP wurde 1968 als Nachfolgerin der verbotenen KPD gegründet. In marxistisch-leninistischer Tradition strebt sie die Errichtung eines sozialistischen Systems und den Bruch mit kapitalistischen Macht- und Eigentumsverhältnissen an. Der Verfassungsschutz stuft sie als linksextremistisch ein.';
WOMT_aParteienBeschreibung[20][0] = 'Die Grauen wurde 2017 gegründet. Sie bekennt sich zu sozialer Gerechtigkeit und fordert u.a. mehr Bürgerbeteiligung, Volksentscheide auf Bundesebene und Amtsbegrenzungen ein. Trotz ihres Namens sieht sich die Partei nicht als reine Interessenvertretung von älteren Menschen.';
WOMT_aParteienBeschreibung[21][0] = 'Die BüSo entstand 1992 und sieht sich als Teil einer Bewegung, die auf den 2019 verstorbenen US- Politaktivisten Lyndon LaRouche zurückgeht. Sie warnt vor dem Zusammenbruch des Weltfinanz- und Wirtschaftssystems und setzt sich für eine verstärkte Kooperation mit China und Russland ein.';
WOMT_aParteienBeschreibung[22][0] = 'Die Humanisten wurden 2014 in Berlin gegründet und vertreten eine Weltsicht, die auf Naturgesetzen und Wissenschaft gründet. Die Partei will gemeinschaftlich ausgehandelte Normen, die ohne Religionen, Ideologien oder Dogmen auskommen und im rational-kritischen Diskurs erreicht werden.';
WOMT_aParteienBeschreibung[23][0] = 'Die Partei du. wurde 2017 gegründet und beruft sich auf die Werte der Hip-Hop-Kultur. Sie setzt sich u.a. gegen Rassismus, Antisemitismus sowie jede Form der Diskriminierung ein und fordert eine Neuordnung der politischen und gesellschaftlichen Machtverhältnisse weltweit.';
WOMT_aParteienBeschreibung[24][0] = 'Die SGP wurde 1971 gegründet und setzt sich für die Überwindung des Kapitalismus und die Errichtung einer sozialistischen Gesellschaft ein. Sie gehört einem weltweit vernetzten Bund trotzkistischer Organisationen an. Die Partei wird vom Verfassungsschutz als linksextremistisch eingestuft.';
WOMT_aParteienBeschreibung[25][0] = 'Die Partei dieBasis wurde 2020 von Gegnerinnen und Gegnern der staatlichen Maßnahmen zur Bekämpfung der Covid-19-Pandemie gegründet. Sie spricht sich u.a. für mehr direkte Demokratie zur gleichberechtigten Beteiligung aller Bürgerinnen und Bürger und gegen verpflichtende Impfungen aus.';
WOMT_aParteienBeschreibung[26][0] = 'Die Partei Bündnis C entstand 2015 aus dem Zusammenschluss zweier christlich-fundamentalistischer Parteien. Sie setzt sich u.a. für die Förderung traditioneller Familienmodelle ein und will im Sinne ihres christlich geprägten Politikverständnisses die Schöpfung bewahren.';
WOMT_aParteienBeschreibung[27][0] = 'Die BÜRGERBEWEGUNG wurde 2021 gegründet. Sie setzt sich vor allem für mehr unmittelbare Bürgerbeteiligung ein. Außerdem will sie u.a. kleine und mittelständische Unternehmen unterstützen und fordert, dass Arbeitnehmerinnen und Arbeitnehmer stärker von der Digitalisierung profitieren.';
WOMT_aParteienBeschreibung[28][0] = 'Die Partei III. Weg wurde 2013 gegründet. Antisemitismus, Rassismus, ein völkisches Menschenbild und das Streben nach einer Gesellschaftsordnung in Anlehnung an den historischen Nationalsozialismus prägen die Partei. Der Verfassungsschutz stuft sie als rechtsextremistisch ein.';
WOMT_aParteienBeschreibung[29][0] = 'BÜNDNIS21 vereint unterschiedliche Kleinparteien und politische Gruppierungen und wurde Anfang 2021 gegründet. Die Partei selbst sieht sich als liberalkonservative politische Mitte und setzt auf einen funktionierenden Rechtsstaat, die Selbstbestimmung des Einzelnen und die soziale Marktwirtschaft.';
WOMT_aParteienBeschreibung[30][0] = 'LIEBE wurde 2018 gegründet und ist eine proeuropäisch ausgerichtete Partei. Liebe ist für die Partei Ausgangspunkt und Triebkraft jeglichen gesellschaftlichen Zusammenlebens und politischen Handelns, gegenüber Mitmenschen, aber auch Tieren und der Natur.';
WOMT_aParteienBeschreibung[31][0] = 'Die LKR wurde 2015 vom ehemaligen AfD-Bundessprecher Bernd Lucke gegründet. Sie vertritt wirtschaftsliberale und konservative Positionen und fordert eine grundlegende Reform der EU. Durch Parteiübertritte aus der AfD ist sie mit einzelnen Abgeordneten in Landtagen und im Bundestag vertreten.';
WOMT_aParteienBeschreibung[32][0] = 'Die Partei PdF wurde 2020 gegründet. Ihr Ziel ist es, allen Bürgerinnen und Bürgern gleichwertig die Mitwirkung in Gesellschaft und Politik zu ermöglichen. Daher setzt sie sich für mehr direkte Demokratie ein, spricht sich gegen Lobbyismus aus und fordert mehr Transparenz auf europäischer Ebene.';
WOMT_aParteienBeschreibung[33][0] = 'Die Partei LfK wurde 2021 gegründet und setzt sich dafür ein, dass die Interessen von Minderjährigen und Eltern stärker bei politischen Entscheidungen berücksichtigt werden. Sie fordert u.a. mehr Investitionen für Bildung und Familien sowie eine Absenkung des Wahlalters.';
WOMT_aParteienBeschreibung[34][0] = 'Der SSW wurde 1948 gegründet. Er ist die politische Interessenvertretung der dänischen Minderheit und der friesischen Volksgruppe und deshalb von der Sperrklausel befreit. Seit 1958 ist er durchgehend im Landtag von Schleswig-Holstein vertreten. Zur Bundestagswahl tritt er erstmals seit 1961 an.';
WOMT_aParteienBeschreibung[35][0] = 'Team Todenhöfer wurde 2020 vom ehemaligen CDU-Bundestagsabgeordneten Jürgen Todenhöfer gegründet. Die Partei setzt sich für die Beendigung aller Auslandseinsätze der Bundeswehr ein und fordert u.a. eine Begrenzung der Amtszeit von Abgeordneten sowie ein Verbot von Parteispenden über 5.000 Euro.';
WOMT_aParteienBeschreibung[36][0] = 'Die Partei UNABHÄNGIGE wurde 2002 gegründet und setzt sich für mehr Bürgerbeteiligung und direkte Demokratie ein. Sie fordert die Einführung von Volksentscheiden auf Bundesebene, setzt sich für Freiheit der Forschung und Meinung ein und plädiert für transparente politische Prozesse.';
WOMT_aParteienBeschreibung[37][0] = 'Volt wurde 2018 aus einer paneuropäischen Bürgerbewegung gegründet, welche die europäische Einigung unterstützt. Sie setzt sich u.a. für die Förderung von Bildung und Digitalisierung sowie für wirtschaftliche Innovationen ein. Im Europäischen Parlament ist sie mit einem Abgeordneten vertreten.';
WOMT_aParteienBeschreibungChecksumLanguage[0] = new Array();
WOMT_aParteienBeschreibungChecksumLanguage[0]['sum'] = '99772fcb5978a7100c487344c14f7e78';
WOMT_aParteienBeschreibungChecksumLanguage[0]['sum2'] = 'fd8a1937dfb8204eb953c87157c179c8';
WOMT_aParteienBeschreibungChecksum['sum'] = '99772fcb5978a7100c487344c14f7e78';
WOMT_aParteienBeschreibungChecksum['sum2'] = 'fd8a1937dfb8204eb953c87157c179c8';
WOMT_sGenerationTimeParteienBeschreibung = '20.09.2021 11:45:56';
