const DEFAULT_SUBJECTS = [
    { nameKey: 'subject.german', isMain: true, mainKey: 'de' },
    { nameKey: 'subject.mathematics', isMain: true, mainKey: 'math' },
    { nameKey: 'subject.english', isMain: true, mainKey: 'en' },
    { nameKey: 'subject.socialStudies', isMain: false },
    { nameKey: 'subject.arts', isMain: false },
    { nameKey: 'subject.career', isMain: false },
    { nameKey: 'subject.ethics', isMain: false },
    { nameKey: 'subject.frenchSpanish', isMain: false },
    { nameKey: 'subject.sports', isMain: false }
];


const GRADE_OPTIONS = [
    { value: 'E1', label: 'E1' },
    { value: 'E2', label: 'E2' },
    { value: 'E3', label: 'E3' },
    { value: 'E4', label: 'E4' },
    { value: 'G2', label: 'G2' },
    { value: 'G3', label: 'G3' },
    { value: 'G4', label: 'G4' },
    { value: 'G5', label: 'G5' },
    { value: 'G6', label: 'G6' }
];


const GRADE_ORDER = ['E1', 'E2', 'E3', 'E4', 'G2', 'G3', 'G4', 'G5', 'G6'];

const TRANSLATIONS = {
    de: {
        'app.titleHtml': '<span class="title-break">Noten- & </span>Abschlussrechner',
        'app.subtitle': 'Sekundarstufe I (Hamburg) – ESA | MSA | Gymnasiale Oberstufe',
        'section.calculator': 'Durchschnittsrechner <sup>1</sup>',
        'section.prognosis': 'Abschlussprognose',
        'section.legend': 'Farben / Legende',
        'section.info': 'Abschlusskriterien',
        'select.placeholder': 'Bitte wählen Sie einen Abschluss ...',
        'select.esa': 'ESA (Erster allgemeinbildender Schulabschluss)',
        'select.msa': 'MSA (Mittlerer Schulabschluss)',
        'select.sek2': 'SEK II (Versetzung in die Gymnasiale Oberstufe)',
        'table.subjects': 'Fächer',
        'table.grades': 'Noten <sup>2</sup>',
        'addSubject.placeholder': 'Weiteres Fach hinzufügen ...',
        'average.label': 'Notendurchschnitt:',
        'importExport.save': 'Noteneingabe speichern',
        'importExport.load': 'Noteneingabe laden',
        'legend.green': 'Das Fach kann als <u>Ausgleich</u> für andere Fächer dienen.',
        'legend.yellow': 'Das Fach gefährdet den Abschluss, ist aber <u>ausgleichbar</u>.',
        'legend.red': 'Das Fach ist <u>nicht</u> ausgleichbar, der gewählte Abschluss somit <u>ausgeschlossen</u>.',
        'info.esa.heading': 'ESA (Erster allgemeinbildender Schulabschluss):',
        'info.esa.reference': '<a href="documents/apo-grundstgy-hamburg-%C2%A729.pdf" target="_blank" rel="noopener noreferrer">§ 29 APO-GrundStGy (Hamburg)</a>',
        'info.esa.requirement': '<strong>Voraussetzung:</strong> Durchschnitt G4 oder besser.',
        'info.esa.compensation': '<strong>Ausgleich:</strong> Schlechtere Noten sind durch den glatten Gesamtdurchschnitt (G4) ausgleichbar.',
        'info.esa.exclusion': '<strong>Ausschluss:</strong> G5 in D <u>und</u> M, G6 in D/M/E, 2 × G6, 3 × G5.',
        'info.msa.heading': 'MSA (Mittlerer Schulabschluss):',
        'info.msa.reference': '<a href="documents/apo-grundstgy-hamburg-%C2%A730.pdf" target="_blank" rel="noopener noreferrer">§ 30 APO-GrundStGy (Hamburg)</a>',
        'info.msa.requirement': '<strong>Voraussetzung:</strong> Mindestens G2 in allen Fächern.',
        'info.msa.compensation': '<strong>Ausgleich:</strong> G3 durch E3 oder besser, oder 2 × E4 oder besser; G4 oder schlechter durch E1 oder 2 × E2.',
        'info.msa.exclusion': '<strong>Ausschluss:</strong> G3 oder schlechter in zwei Hauptfächern, G4 oder schlechter in D/M/E, G3 oder schlechter und G4 oder schlechter in zwei Fächern, mehr als zwei Fächer mit G3 oder schlechter.',
        'info.sek2.heading': 'SEK II (Versetzung in die Gymnasiale Oberstufe):',
        'info.sek2.reference': '<a href="documents/apo-grundstgy-hamburg-%C2%A731.pdf" target="_blank" rel="noopener noreferrer">§ 31 APO-GrundStGy (Hamburg)</a>',
        'info.sek2.requirement': '<strong>Voraussetzung:</strong> Mindestens E4 in allen Fächern.',
        'info.sek2.compensation': '<strong>Ausgleich:</strong> G2 durch E2 oder besser, oder 2 × E3 oder besser; G3 oder schlechter durch E1 oder 2 × E2.',
        'info.sek2.exclusion': '<strong>Ausschluss:</strong> G2 oder schlechter in zwei Hauptfächern, G3 oder schlechter in einem Hauptfach, G2 oder schlechter und G3 oder schlechter in zwei Fächern, mehr als zwei Fächer mit G2 oder schlechter.',
        'info.special.note': '<ul><li><strong>Hauptfächer:</strong> Die Hauptfächer Deutsch, Mathematik und Englisch haben besondere Bedeutung. <strong class="text-danger">Hier gelten strengere Ausschlussregeln!</strong></li><li><strong>Keine Bewertung:</strong> Dieser Umstand könnte eintreten, wenn ein Schüler aufgrund von Absentismus nicht bewertet werden kann. <strong class="text-danger">Eine fehlende Note/Bewertung auf dem Zeugnis schließt einen Abschluss aus!</strong></li></ul>',
        'footer.basedOnPrefix': 'Basierend auf',
        'footer.basedOnLink': '§§ 29–31 APO-GrundStGy',
        'footer.basedOnSuffix': '(Stand: April 2024)',
        'footer.disclaimer': 'Alexander Henkes (2026)',
        'language.label': 'Sprache wählen',
        'language.de': 'Deutsch',
        'language.en': 'Englisch',
        'subject.german': 'Deutsch',
        'subject.mathematics': 'Mathematik',
        'subject.english': 'Englisch',
        'subject.socialStudies': 'Gesellschaft',
        'subject.arts': 'Kunst/Musik/Theater',
        'subject.career': 'Arbeit & Beruf',
        'subject.ethics': 'Philosophie/Religion',
        'subject.frenchSpanish': 'Französisch/Spanisch',
        'subject.sports': 'Sport',
        'degree.esa.full': 'Der ESA',
        'degree.msa.full': 'Der MSA',
        'degree.sek2.full': 'Die Versetzung in die SEK II',
        'result.incomplete': 'Bitte geben Sie mindestens die Noten für <strong>Deutsch, Mathematik und Englisch</strong> ein.',
        'result.achieved': '<strong>{{degree}}</strong> wird erreicht!',
        'result.notAchieved': '<strong>{{degree}}</strong> kann <strong>nicht</strong> erreicht werden.',
        'result.directSuccess.esa': 'Der Erste allgemeinbildende Schulabschluss wird <strong>direkt</strong> und <strong>ohne Notenausgleich</strong> erreicht.',
        'result.directSuccess.msa': 'Der Mittlere Schulabschluss wird <strong>direkt</strong> und <strong>ohne Notenausgleich</strong> erreicht.',
        'result.directSuccess.sek2': 'Die Versetzung wird <strong>direkt</strong> und <strong>ohne Notenausgleich</strong> erreicht.',
        'result.achievedWithCompensation': 'Der Abschluss wird <strong>mit Notenausgleich</strong> erreicht.',
        'result.notEnoughCompensation': 'Es sind <strong>nicht genügend Ausgleichsmöglichkeiten</strong> vorhanden.',
        'result.exclusionReasonsLabel': 'Ausschlussgründe:',
        'result.compensatedSubjectsLabel': 'Folgende Fächer werden ausgeglichen:',
        'result.compensationPossibleBy': 'Ausgleich möglich durch:',
        'result.needs': 'benötigt',
        'result.compensatedBy': 'wird ausgeglichen durch',
        'result.needsCompensation': 'braucht einen Ausgleich.',
        'result.exclusionSentencePrefix': 'Der folgende Umstand schließt den Abschluss aus:',
        'result.otherDegrees.sek2': 'Ihr Notenbild ermöglicht künftig auch die <strong>Versetzung in die Sekundarstufe II (Gymnasiale Oberstufe)</strong>.',
        'result.otherDegrees.msa': 'Ihr Notenbild ermöglicht künftig auch den <strong>Mittleren Schulabschluss (MSA)</strong>.',
        'result.otherDegrees.eesa': 'Mit Abschluss der Jahrgangsstufe 10 wird der <strong>erweiterte Erste Allgemeinbildende Schulabschluss (eESA)</strong> erreicht.',
        'result.otherDegrees.eesa.notAchieved': 'Mit dem aktuellen Notenbild wird der <strong>erweiterte Erste Allgemeinbildende Schulabschluss (eESA)</strong> auch mit Abschluss der Jahrgangsstufe 10 nicht erreicht.',
        'actions.print': 'Druckansicht',
        'print.note': '<sup>2</sup> Alle Noteneingaben sind (sofern notwendig) mit verrechneten Abschlussprüfungen vorzunehmen.',
        'print.disclaimerNote': '<sup>1</sup> Angaben ohne Gewähr. Verbindliche Auskünfte erteilt die Schule.',
        'print.grades': 'Notenübersicht',
        'print.subject': 'Fach',
        'print.grade': 'Note',
        'print.repoLabel': 'GitHub-Repository:',
        'print.licenseLabel': 'Lizenz:',
        'actions.removeSubject': 'Fach entfernen',
        'label.required': '(Pflichtangabe)',
        'exclusion.esa.g5Both': 'G5 in Deutsch und Mathematik',
        'exclusion.esa.g6Deutsch': 'G6 in Deutsch (Hauptfach)',
        'exclusion.esa.g6Mathe': 'G6 in Mathematik (Hauptfach)',
        'exclusion.esa.g6Englisch': 'G6 in Englisch (Hauptfach)',
        'exclusion.esa.g6Count': 'Zwei oder mehr Fächer mit G6',
        'exclusion.esa.g5OrWorseCount': 'Mehr als zwei Fächer mit G5 oder schlechter',
        'exclusion.msa.mainG5Count': 'Zwei Hauptfächer (D/M/E) mit G3 oder schlechter',
        'exclusion.msa.g6Deutsch': 'G4 oder schlechter in Deutsch (Hauptfach)',
        'exclusion.msa.g6Mathe': 'G4 oder schlechter in Mathematik (Hauptfach)',
        'exclusion.msa.g6Englisch': 'G4 oder schlechter in Englisch (Hauptfach)',
        'exclusion.msa.g5AndG6': 'Kombination aus G3 oder schlechter und G4 oder schlechter',
        'exclusion.msa.g5Count': 'Mehr als zwei Fächer mit G3 oder schlechter',
        'exclusion.sek2.mainG2Count': 'Zwei Hauptfächer (D/M/E) mit G2 oder schlechter',
        'exclusion.sek2.mainG3Count': 'G3 oder schlechter in einem Hauptfach',
        'exclusion.sek2.g2AndG3': 'Kombination aus G2 oder schlechter und G3 oder schlechter in 2 Fächern',
        'exclusion.sek2.g2Count': 'Mehr als zwei Fächer mit G2 oder schlechter',
        'import.invalidJson': 'Die Importdatei ist ungültig.',
        'import.invalidSubjects': 'Die Importdatei enthält keine gültigen Fächer.',
        'notice.title': 'Hinweise zur Nutzung',
        'notice.text': '<ul class="notice-list"><li><strong>Datenschutzkonform:</strong> Alle eingegebenen Daten werden ausschließlich lokal, direkt in Ihrem Browser verarbeitet.</li><li><strong>Testphase:</strong> Vereinzelte Fehler in der Berechnungslogik sind nicht ausgeschlossen. Alle Angaben sind ohne Gewähr. Verbindliche Auskünfte erteilen die Schulen.</li></ul>',
        'notice.cta': 'Verstanden!'
    },
    en: {
        'app.titleHtml': '<span class="title-break">Grade & </span>Qualification Calculator',
        'app.subtitle': 'Secondary Level I (Hamburg) – ESA | MSA | Upper Secondary',
        'section.calculator': 'Average Grade Calculator <sup>1</sup>',
        'section.prognosis': 'Qualification Forecast',
        'section.legend': 'Colors / Legend',
        'section.info': 'Qualification Criteria',
        'select.placeholder': 'Please select a target qualification ...',
        'select.esa': 'ESA (First General School Certificate)',
        'select.msa': 'MSA (Intermediate School Certificate)',
        'select.sek2': 'Upper Secondary (transfer to upper secondary level)',
        'table.subjects': 'Subjects',
        'table.grades': 'Grades <sup>2</sup>',
        'addSubject.placeholder': 'Add another subject ...',
        'average.label': 'Average grade:',
        'importExport.save': 'Save grade input',
        'importExport.load': 'Load grade input',
        'legend.green': 'This subject can serve as <u>compensation</u> for other subjects.',
        'legend.yellow': 'This subject endangers the qualification but is <u>compensable</u>.',
        'legend.red': 'This subject is <u>not</u> compensable; the selected qualification is <u>excluded</u>.',
        'info.esa.heading': 'ESA (First General School Certificate):',
        'info.esa.reference': '<a href="documents/apo-grundstgy-hamburg-%C2%A729.pdf" target="_blank" rel="noopener noreferrer">§ 29 APO-GrundStGy (Hamburg)</a>',
        'info.esa.requirement': '<strong>Requirement:</strong> Average of G4 or better.',
        'info.esa.compensation': '<strong>Compensation:</strong> Lower grades can be offset by the straight overall average (G4).',
        'info.esa.exclusion': '<strong>Exclusion:</strong> G5 in German <u>and</u> Mathematics, G6 in German/Math/English, 2 × G6, 3 × G5.',
        'info.msa.heading': 'MSA (Intermediate School Certificate):',
        'info.msa.reference': '<a href="documents/apo-grundstgy-hamburg-%C2%A730.pdf" target="_blank" rel="noopener noreferrer">§ 30 APO-GrundStGy (Hamburg)</a>',
        'info.msa.requirement': '<strong>Requirement:</strong> At least G2 in all subjects.',
        'info.msa.compensation': '<strong>Compensation:</strong> G3 by E3 or better, or 2 × E4 or better; G4 or worse by E1 or 2 × E2.',
        'info.msa.exclusion': '<strong>Exclusion:</strong> G3 or worse in two main subjects, G4 or worse in German/Math/English, G3 or worse and G4 or worse in two subjects, more than two subjects with G3 or worse.',
        'info.sek2.heading': 'Upper Secondary (transfer to upper secondary level):',
        'info.sek2.reference': '<a href="documents/apo-grundstgy-hamburg-%C2%A731.pdf" target="_blank" rel="noopener noreferrer">§ 31 APO-GrundStGy (Hamburg)</a>',
        'info.sek2.requirement': '<strong>Requirement:</strong> At least E4 in all subjects.',
        'info.sek2.compensation': '<strong>Compensation:</strong> G2 by E2 or better, or 2 × E3 or better; G3 or worse by E1 or 2 × E2.',
        'info.sek2.exclusion': '<strong>Exclusion:</strong> G2 or worse in two main subjects, G3 or worse in one main subject, G2 or worse and G3 or worse in two subjects, more than two subjects with G2 or worse.',
        'info.special.note': '<ul><li><strong>Main subjects:</strong> German, Mathematics, and English are of special importance. <strong class="text-danger">Stricter exclusion rules apply here!</strong></li><li><strong>No assessment:</strong> This can occur if a student cannot be assessed due to absenteeism. <strong class="text-danger">A missing grade on the report card excludes a qualification!</strong></li></ul>',
        'footer.basedOnPrefix': 'Based on',
        'footer.basedOnLink': '§§ 29–31 APO-GrundStGy',
        'footer.basedOnSuffix': '(as of April 2024)',
        'footer.disclaimer': 'Alexander Henkes (2026)',
        'language.label': 'Select language',
        'language.de': 'German',
        'language.en': 'English',
        'subject.german': 'German',
        'subject.mathematics': 'Mathematics',
        'subject.english': 'English',
        'subject.socialStudies': 'Social Studies',
        'subject.arts': 'Arts/Music/Theater',
        'subject.career': 'Career & Work',
        'subject.ethics': 'Philosophy/Religion',
        'subject.frenchSpanish': 'French/Spanish',
        'subject.sports': 'Sports',
        'degree.esa.full': 'ESA',
        'degree.msa.full': 'MSA',
        'degree.sek2.full': 'Transfer to upper secondary level',
        'result.incomplete': 'Please enter at least the grades for <strong>German, Mathematics, and English</strong>.',
        'result.achieved': '<strong>{{degree}}</strong> is achieved!',
        'result.notAchieved': '<strong>{{degree}}</strong> cannot be achieved.',
        'result.directSuccess.esa': 'The first general school certificate is achieved <strong>directly</strong> <strong>without compensation</strong>.',
        'result.directSuccess.msa': 'The intermediate school certificate is achieved <strong>directly</strong> <strong>without compensation</strong>.',
        'result.directSuccess.sek2': 'The transfer is achieved <strong>directly</strong> <strong>without compensation</strong>.',
        'result.achievedWithCompensation': 'The qualification is achieved <strong>with compensation</strong>.',
        'result.notEnoughCompensation': 'There are <strong>not enough compensation options</strong> available.',
        'result.exclusionReasonsLabel': 'Exclusion reasons:',
        'result.compensatedSubjectsLabel': 'The following subjects are compensated:',
        'result.compensationPossibleBy': 'Compensation possible through:',
        'result.needs': 'requires',
        'result.compensatedBy': 'is compensated by',
        'result.needsCompensation': 'needs compensation.',
        'result.exclusionSentencePrefix': 'The following condition excludes the qualification:',
        'result.otherDegrees.sek2': 'Your grade profile also qualifies you for a future <strong>transfer to upper secondary level</strong>.',
        'result.otherDegrees.msa': 'Your grade profile also qualifies you for the <strong>intermediate school certificate (MSA)</strong>.',
        'result.otherDegrees.eesa': 'With completion of grade 10, the <strong>extended first general school certificate (eESA)</strong> will be achieved.',
        'result.otherDegrees.eesa.notAchieved': 'With the current grade profile, the <strong>extended first general school certificate (eESA)</strong> will not be achieved even with completion of grade 10.',
        'actions.print': 'Print view',
        'print.note': '<sup>2</sup> All grade entries should include exam results where applicable.',
        'print.disclaimerNote': '<sup>1</sup> No warranty. The school provides binding information.',
        'print.grades': 'Grade overview',
        'print.subject': 'Subject',
        'print.grade': 'Grade',
        'print.repoLabel': 'GitHub repository:',
        'print.licenseLabel': 'License:',
        'actions.removeSubject': 'Remove subject',
        'label.required': '(required)',
        'exclusion.esa.g5Both': 'G5 in German and Mathematics',
        'exclusion.esa.g6Deutsch': 'G6 in German (main subject)',
        'exclusion.esa.g6Mathe': 'G6 in Mathematics (main subject)',
        'exclusion.esa.g6Englisch': 'G6 in English (main subject)',
        'exclusion.esa.g6Count': 'Two or more subjects with G6',
        'exclusion.esa.g5OrWorseCount': 'More than two subjects with G5 or worse',
        'exclusion.msa.mainG5Count': 'Two main subjects (German/Math/English) with G3 or worse',
        'exclusion.msa.g6Deutsch': 'G4 or worse in German (main subject)',
        'exclusion.msa.g6Mathe': 'G4 or worse in Mathematics (main subject)',
        'exclusion.msa.g6Englisch': 'G4 or worse in English (main subject)',
        'exclusion.msa.g5AndG6': 'Combination of G3 or worse and G4 or worse',
        'exclusion.msa.g5Count': 'More than two subjects with G3 or worse',
        'exclusion.sek2.mainG2Count': 'Two main subjects (German/Math/English) with G2 or worse',
        'exclusion.sek2.mainG3Count': 'G3 or worse in one main subject',
        'exclusion.sek2.g2AndG3': 'Combination of G2 or worse and G3 or worse in 2 subjects',
        'exclusion.sek2.g2Count': 'More than two subjects with G2 or worse',
        'import.invalidJson': 'The import file is invalid.',
        'import.invalidSubjects': 'The import file contains no valid subjects.',
        'notice.title': 'Usage notes',
        'notice.text': '<ul class="notice-list"><li><strong>Privacy-friendly:</strong> All grade calculations are performed locally in your browser only.</li><li><strong>Test phase:</strong> This application is currently in a test phase. Errors in the qualification calculation logic are therefore not excluded. All information is provided without guarantee. Binding information is provided by the schools.</li></ul>',
        'notice.cta': 'Understood!'
    }
};

let currentLanguage = 'de';

function t(key, vars = {}) {
    const dictionary = TRANSLATIONS[currentLanguage] || TRANSLATIONS.de;
    const template = dictionary[key] || TRANSLATIONS.de[key] || key;
    return template.replace(/\{\{(\w+)\}\}/g, (_, name) => (vars[name] ?? ''));
}

function inferSubjectKeys(name) {
    if (!name) return { nameKey: null, mainKey: null };
    const normalized = name.trim().toLowerCase();
    const candidates = [
        { nameKey: 'subject.german', mainKey: 'de' },
        { nameKey: 'subject.mathematics', mainKey: 'math' },
        { nameKey: 'subject.english', mainKey: 'en' },
        { nameKey: 'subject.socialStudies', mainKey: null },
        { nameKey: 'subject.arts', mainKey: null },
        { nameKey: 'subject.career', mainKey: null },
        { nameKey: 'subject.ethics', mainKey: null },
        { nameKey: 'subject.frenchSpanish', mainKey: null },
        { nameKey: 'subject.sports', mainKey: null }
    ];

    for (const candidate of candidates) {
        const deName = TRANSLATIONS.de[candidate.nameKey]?.toLowerCase();
        const enName = TRANSLATIONS.en[candidate.nameKey]?.toLowerCase();
        if (normalized === deName || normalized === enName) {
            return candidate;
        }
    }

    return { nameKey: null, mainKey: null };
}


function isGradeBetterOrEqual(gradeA, gradeB) {
    return GRADE_ORDER.indexOf(gradeA) <= GRADE_ORDER.indexOf(gradeB);
}


function isGradeWorse(gradeA, gradeB) {
    return GRADE_ORDER.indexOf(gradeA) > GRADE_ORDER.indexOf(gradeB);
}

function toEsaNumericGrade(grade) {
    if (!grade) return null;
    if (grade.startsWith('E')) return 1;
    const map = { G2: 2, G3: 3, G4: 4, G5: 5, G6: 6 };
    return map[grade] ?? null;
}

function toMsaNumericGrade(grade) {
    if (!grade) return null;
    const map = {
        E1: 1, E2: 1,
        E3: 2,
        E4: 3,
        G2: 4,
        G3: 5,
        G4: 6, G5: 6, G6: 6
    };
    return map[grade] ?? null;
}

function toSek2NumericGrade(grade) {
    if (!grade) return null;
    const map = {
        E1: 1,
        E2: 2,
        E3: 3,
        E4: 4,
        G2: 5,
        G3: 6, G4: 6, G5: 6, G6: 6
    };
    return map[grade] ?? null;
}

function getNumericGradeForDegree(targetDegree, grade) {
    if (targetDegree === 'esa') return toEsaNumericGrade(grade);
    if (targetDegree === 'msa') return toMsaNumericGrade(grade);
    if (targetDegree === 'sek2') return toSek2NumericGrade(grade);
    return null;
}

function formatSubjectGrade(subject) {
    const label = GRADE_OPTIONS.find(o => o.value === subject.grade)?.label || subject.grade;
    return `${subject.name} (${label})`;
}



const DEGREE_CONFIG = {
    esa: {
        name: 'ESA',
        fullNameKey: 'degree.esa.full',
        directSuccessNoteKey: 'result.directSuccess.esa'
    },
    msa: {
        name: 'MSA',
        fullNameKey: 'degree.msa.full',
        directSuccessNoteKey: 'result.directSuccess.msa'
    },
    sek2: {
        name: 'SEK II',
        fullNameKey: 'degree.sek2.full',
        directSuccessNoteKey: 'result.directSuccess.sek2'
    }
};





let subjects = [];
let nextSubjectId = 1;





const targetDegreeSelect = document.getElementById('target-degree');
const gradesBody = document.getElementById('grades-body');
const newSubjectInput = document.getElementById('new-subject-name');
const addSubjectBtn = document.getElementById('add-subject-btn');
const averageGradeDisplay = document.getElementById('average-grade');
const prognosisResult = document.getElementById('prognosis-result');
const prognosisCard = document.getElementById('prognosis-card');
const addSubjectContainer = document.querySelector('.add-subject');
const gradesTable = document.querySelector('.grades-table');
const averageDisplay = document.querySelector('.average-display');
const calculatorCard = document.getElementById('calculator-card');
const exportBtn = document.getElementById('export-btn');
const importBtn = document.getElementById('import-btn');
const importFileInput = document.getElementById('import-file');
const importExportContainer = document.querySelector('.import-export');
const printBtn = document.getElementById('print-btn');
const printGradesBody = document.getElementById('print-grades-body');
const printPrognosis = document.getElementById('print-prognosis');
const printAverage = document.getElementById('print-average');
const printAction = document.querySelector('.print-action');
const languageButtons = document.querySelectorAll('.lang-btn');
const languageHint = document.querySelector('.language-hint');
const languageSwitcher = document.querySelector('.language-switcher');
const languageHintArrow = document.querySelector('.language-hint-arrow');
const targetDegreeMarquee = document.getElementById('target-degree-marquee');
const targetDegreeMarqueeInner = targetDegreeMarquee?.querySelector('.select-marquee-inner');
const infoSections = document.querySelectorAll('.info-section');
const noticeModal = document.getElementById('notice-modal');
const noticeAcceptBtn = document.getElementById('notice-accept');
const containership = document.querySelector('.containership');

const NOTICE_STORAGE_KEY = 'noticeAccepted';
const NOTICE_DISMISS_DURATION_MS = 24 * 60 * 60 * 1000;





function init() {
    DEFAULT_SUBJECTS.forEach(subject => {
        addSubject(
            t(subject.nameKey),
            subject.isMain,
            null,
            subject.mainKey || null,
            subject.nameKey
        );
    });

    targetDegreeSelect.addEventListener('change', updateAll);
    addSubjectBtn.addEventListener('click', handleAddSubject);
    newSubjectInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleAddSubject();
    });
    exportBtn?.addEventListener('click', handleExport);
    importBtn?.addEventListener('click', () => importFileInput?.click());
    importFileInput?.addEventListener('change', handleImportFile);
    printBtn?.addEventListener('click', () => {
        buildPrintSummary();
        window.print();
    });
    languageButtons.forEach(button => {
        button.addEventListener('click', () => setLanguage(button.dataset.lang));
    });
    window.addEventListener('resize', positionLanguageHint);
    window.addEventListener('resize', updateTargetDegreeMarquee);
    window.addEventListener('scroll', updateLanguageSwitcherVisibility, { passive: true });
    window.addEventListener('beforeprint', buildPrintSummary);

    setLanguage('de');
    setupNoticeModal();
    hideLanguageHintAfterDelay();
    updateLanguageSwitcherVisibility();
    if (containership) containership.style.display = Math.random() < 0.05 ? '' : 'none';
}

function hasAcceptedNotice() {
    try {
        const storedValue = localStorage.getItem(NOTICE_STORAGE_KEY);
        if (!storedValue) return false;
        const storedTimestamp = Number(storedValue);
        if (!Number.isFinite(storedTimestamp)) return false;
        return Date.now() - storedTimestamp < NOTICE_DISMISS_DURATION_MS;
    } catch (error) {
        return false;
    }
}

function persistNoticeAcceptance() {
    try {
        localStorage.setItem(NOTICE_STORAGE_KEY, String(Date.now()));
    } catch (error) {
        return;
    }
}

function openNoticeModal() {
    if (!noticeModal) return;
    noticeModal.classList.remove('is-hidden');
    document.body.classList.add('modal-open');
}

function closeNoticeModal() {
    if (!noticeModal) return;
    noticeModal.classList.add('is-hidden');
    document.body.classList.remove('modal-open');
}

function setupNoticeModal() {
    if (!noticeModal || !noticeAcceptBtn) return;
    if (hasAcceptedNotice()) return;
    openNoticeModal();
    requestAnimationFrame(() => noticeAcceptBtn.focus());
    noticeAcceptBtn.addEventListener('click', () => {
        persistNoticeAcceptance();
        closeNoticeModal();
    }, { once: true });
}

function hideLanguageHintAfterDelay() {
    if (!languageHint) return;
    positionLanguageHint();
    if (languageHintArrow) {
        languageHintArrow.addEventListener('animationend', () => {
            languageHint.classList.add('is-hidden');
        }, { once: true });
    }
}

function updateLanguageSwitcherVisibility() {
    if (!languageSwitcher) return;
    const shouldShow = window.scrollY <= 8;
    languageSwitcher.classList.toggle('is-hidden', !shouldShow);
    if (!shouldShow && languageHint) {
        languageHint.classList.add('is-hidden');
    }
}

function positionLanguageHint() {
    if (!languageHint || !languageSwitcher) return;
    const rect = languageSwitcher.getBoundingClientRect();
    const hintRect = languageHint.getBoundingClientRect();
    const top = rect.top + (rect.height - hintRect.height) / 2;
    const left = Math.max(12, rect.left - 32);
    languageHint.style.top = `${top}px`;
    languageHint.style.left = `${left}px`;
}

function buildPrognosisHtml(result, otherDegrees) {
    let html = '';
    const icon = result.achieved ? '✓' : '✗';
    html = `<h3><span class="prognosis-icon">${icon}</span><span class="prognosis-text">${result.message}</span></h3>`;

    if (result.status === 'success' && result.directSuccessNote) {
        html += `<p class="direct-success-note">${result.directSuccessNote}</p>`;
    } else if (result.status === 'warning') {
        html += `<p class="direct-success-note">${t('result.achievedWithCompensation')}</p>`;
    } else if (result.status === 'danger') {
        html += `<p class="direct-success-note">${t('result.notEnoughCompensation')}</p>`;
    }

    if (result.exclusionReasons?.length > 0) {
        html += `<p><strong>${t('result.exclusionReasonsLabel')}</strong></p><ul>`;
        result.exclusionReasons.forEach(reason => {
            html += `<li>${t('result.exclusionSentencePrefix')} ${reason}.</li>`;
        });
        html += '</ul>';
    }

    if (result.compensatableProblems?.length > 0) {
        html += `<p><strong>${t('result.compensatedSubjectsLabel')}</strong></p><ul>`;
        result.compensatableProblems.forEach(p => {
            if (p.compensated) {
                html += `<li>${p.subject} ${t('result.compensatedBy')} ${p.by.join(', ')}.</li>`;
            } else {
                html += `<li>${p.subject} ${t('result.needsCompensation')}</li>`;
            }
        });
        html += '</ul>';
    }

    if (result.availableCompensations?.length > 0 && result.achieved && result.status === 'warning') {
        html += `<p><strong>${t('result.compensationPossibleBy')}</strong> ${result.availableCompensations.join(', ')}</p>`;
    }

    if (otherDegrees) {
        html += `<div class="other-degrees">${otherDegrees}</div>`;
    }

    return html;
}

function buildPrintSummary() {
    if (!printGradesBody || !printPrognosis) return;
    printGradesBody.innerHTML = '';
    subjects.forEach(subject => {
        const row = document.createElement('tr');
        const subjectCell = document.createElement('td');
        const gradeCell = document.createElement('td');
        subjectCell.textContent = subject.name;
        const gradeLabel = GRADE_OPTIONS.find(o => o.value === subject.grade)?.label || '–';
        gradeCell.textContent = gradeLabel;
        row.appendChild(subjectCell);
        row.appendChild(gradeCell);
        printGradesBody.appendChild(row);
    });

    const targetDegree = targetDegreeSelect.value;
    if (printAverage) {
        printAverage.textContent = targetDegree ? calculateAverageGrade(targetDegree) : '–';
    }
    if (!targetDegree) {
        printPrognosis.innerHTML = `<p>${t('result.incomplete')}</p>`;
        return;
    }

    const result = checkDegreeRequirements(targetDegree);
    const otherDegrees = getOtherAchievableDegrees(targetDegree, result);
    printPrognosis.innerHTML = buildPrognosisHtml(result, otherDegrees);
}

function updateTargetDegreeMarquee() {
    if (!targetDegreeSelect || !targetDegreeMarquee || !targetDegreeMarqueeInner) return;
    const option = targetDegreeSelect.options[targetDegreeSelect.selectedIndex];
    const text = option ? option.textContent.trim() : '';
    targetDegreeMarqueeInner.textContent = text;
    targetDegreeMarquee.classList.toggle('is-placeholder', !targetDegreeSelect.value);

    requestAnimationFrame(() => {
        const availableWidth = targetDegreeMarquee.clientWidth;
        const contentWidth = targetDegreeMarqueeInner.scrollWidth;
        const overflow = contentWidth - availableWidth;
        if (overflow > 4) {
            targetDegreeMarquee.style.setProperty('--marquee-distance', `${overflow + 24}px`);
            targetDegreeMarquee.classList.add('is-marquee');
        } else {
            targetDegreeMarquee.classList.remove('is-marquee');
            targetDegreeMarquee.style.removeProperty('--marquee-distance');
        }
    });
}




function addSubject(name, isMain = false, grade = null, mainKey = null, nameKey = null) {
    const subject = {
        id: nextSubjectId++,
        name: name,
        isMain: isMain,
        grade: grade,
        mainKey: mainKey,
        nameKey: nameKey
    };
    subjects.push(subject);
    renderSubjectRow(subject);
    return subject;
}

function removeSubject(id) {
    const index = subjects.findIndex(s => s.id === id);
    if (index !== -1) {
        subjects.splice(index, 1);
        document.getElementById(`row-${id}`)?.remove();
        updateAll();
    }
}

function handleAddSubject() {
    const name = newSubjectInput.value.trim();
    if (name) {
        addSubject(name, false);
        newSubjectInput.value = '';
        updateAll();
    }
}

function handleExport() {
    const payload = {
        version: 1,
        language: currentLanguage,
        targetDegree: targetDegreeSelect.value || '',
        subjects: subjects.map(subject => ({
            name: subject.name,
            isMain: subject.isMain,
            grade: subject.grade,
            mainKey: subject.mainKey,
            nameKey: subject.nameKey
        }))
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'meine-noten.json';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
}

function handleImportFile(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
        try {
            const data = JSON.parse(reader.result);
            applyImportedData(data);
        } catch (error) {
            alert(t('import.invalidJson'));
        } finally {
            event.target.value = '';
        }
    };
    reader.readAsText(file);
}

function applyImportedData(data) {
    if (!data || !Array.isArray(data.subjects)) {
        alert(t('import.invalidSubjects'));
        return;
    }

    const importedLanguage = typeof data.language === 'string' ? data.language : null;
    if (importedLanguage && TRANSLATIONS[importedLanguage]) {
        currentLanguage = importedLanguage;
    }

    const sanitizedSubjects = data.subjects.map(subject => {
        const fallbackName = typeof subject.name === 'string' ? subject.name.trim() : '';
        const inferred = inferSubjectKeys(fallbackName);
        const nameKey = typeof subject.nameKey === 'string' ? subject.nameKey : inferred.nameKey;
        const mainKey = typeof subject.mainKey === 'string' ? subject.mainKey : inferred.mainKey;
        const name = nameKey ? t(nameKey) : fallbackName;

        return {
            name: name,
            nameKey: nameKey,
            mainKey: mainKey,
            isMain: Boolean(subject.isMain),
            grade: GRADE_ORDER.includes(subject.grade) ? subject.grade : null
        };
    }).filter(subject => subject.name.length > 0);

    subjects = [];
    nextSubjectId = 1;
    gradesBody.innerHTML = '';

    sanitizedSubjects.forEach(subject => {
        addSubject(subject.name, subject.isMain, subject.grade, subject.mainKey, subject.nameKey);
    });

    const importedTarget = typeof data.targetDegree === 'string' ? data.targetDegree : '';
    targetDegreeSelect.value = DEGREE_CONFIG[importedTarget] ? importedTarget : '';

    if (importedLanguage && TRANSLATIONS[importedLanguage]) {
        setLanguage(importedLanguage);
    } else {
        updateAll();
    }
}

function setLanguage(lang) {
    if (!lang || !TRANSLATIONS[lang]) return;

    currentLanguage = lang;
    document.documentElement.setAttribute('lang', lang);
    languageButtons.forEach(button => {
        const isActive = button.dataset.lang === lang;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
    applyTranslations(lang);
    updateSubjectNames();
    updateAll();
}

function applyTranslations(lang) {
    const dictionary = TRANSLATIONS[lang] || TRANSLATIONS.de;
    document.title = dictionary['app.title'] || document.title;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.getAttribute('data-i18n');
        element.textContent = t(key);
    });

    document.querySelectorAll('[data-i18n-html]').forEach((element) => {
        const key = element.getAttribute('data-i18n-html');
        element.innerHTML = t(key);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.setAttribute('placeholder', t(key));
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
        const key = element.getAttribute('data-i18n-aria-label');
        element.setAttribute('aria-label', t(key));
    });

    document.querySelectorAll('[data-i18n-title]').forEach((element) => {
        const key = element.getAttribute('data-i18n-title');
        element.setAttribute('title', t(key));
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
        const key = element.getAttribute('data-i18n-alt');
        element.setAttribute('alt', t(key));
    });

    document.querySelectorAll('.delete-btn').forEach((button) => {
        button.setAttribute('title', t('actions.removeSubject'));
    });

    document.querySelectorAll('.required-note').forEach((element) => {
        element.textContent = t('label.required');
    });
}

function updateSubjectNames() {
    subjects.forEach(subject => {
        if (!subject.nameKey) return;
        subject.name = t(subject.nameKey);
        const nameElement = document.querySelector(`#row-${subject.id} .subject-name-text`);
        if (nameElement) {
            nameElement.textContent = subject.name;
        }
    });
}





function renderSubjectRow(subject) {
    const row = document.createElement('div');
    row.className = 'grade-row';
    row.id = `row-${subject.id}`;

    const subjectClass = subject.isMain ? 'subject-name main-subject' : 'subject-name';
    const requiredNote = subject.isMain ? `<span class="required-note">${t('label.required')}</span>` : '';

    const gradeOptions = GRADE_OPTIONS.map(g =>
        `<option value="${g.value}" ${subject.grade === g.value ? 'selected' : ''}>${g.label}</option>`
    ).join('');

    const deleteButton = subject.isMain
        ? '<span class="delete-btn-placeholder"></span>'
        : `<button class="delete-btn" data-id="${subject.id}" title="${t('actions.removeSubject')}">−</button>`;

    row.innerHTML = `
        <span class="${subjectClass}">
            <span class="subject-name-text">${subject.name}</span>${requiredNote}
        </span>
        <select class="grade-select" data-id="${subject.id}">
            <option value="">--</option>
            ${gradeOptions}
        </select>
        ${deleteButton}
    `;

    gradesBody.appendChild(row);

    row.querySelector('.grade-select').addEventListener('change', (e) => {
        subject.grade = e.target.value !== '' ? e.target.value : null;
        updateAll();
    });

    const deleteBtn = row.querySelector('.delete-btn');
    if (deleteBtn) {
        deleteBtn.addEventListener('click', () => {
            removeSubject(subject.id);
        });
    }
}






function countGrade(gradesList, targetGrade) {
    return gradesList.filter(g => g === targetGrade).length;
}


function countGradesInList(gradesList, targetGrades) {
    return gradesList.filter(g => targetGrades.includes(g)).length;
}


function calculateAverageGrade(targetDegree) {
    const gradesWithValues = subjects
        .filter(s => s.grade !== null)
        .map(s => s.grade);

    if (gradesWithValues.length === 0) return '–';


    const avgPosition = gradesWithValues.reduce((sum, g) => sum + GRADE_ORDER.indexOf(g), 0) / gradesWithValues.length;
    const roundedPosition = Math.round(avgPosition);
    const clampedPosition = Math.max(0, Math.min(GRADE_ORDER.length - 1, roundedPosition));

    return GRADE_OPTIONS.find(o => o.value === GRADE_ORDER[clampedPosition])?.label || GRADE_ORDER[clampedPosition];
}





function checkDegreeRequirements(targetDegree) {
    const config = DEGREE_CONFIG[targetDegree];

    const result = {
        achieved: false,
        status: 'incomplete',
        message: '',
        problems: [],
        compensatableProblems: [],
        availableCompensations: [],
        exclusionReasons: []
    };


    const deutschSubject = subjects.find(s => s.mainKey === 'de');
    const matheSubject = subjects.find(s => s.mainKey === 'math');
    const englischSubject = subjects.find(s => s.mainKey === 'en');

    if (!deutschSubject?.grade || !matheSubject?.grade || !englischSubject?.grade) {
        result.status = 'incomplete';
        result.message = t('result.incomplete');
        return result;
    }


    const allWithGrades = subjects.filter(s => s.grade !== null);
    const allGrades = allWithGrades.map(s => s.grade);
    const mainGrades = [deutschSubject.grade, matheSubject.grade, englischSubject.grade];


    let passed = [];
    let needsCompensation = [];
    if (config?.passGrade && config?.compensatableGrades) {
        passed = allWithGrades.filter(s => isGradeBetterOrEqual(s.grade, config.passGrade));
        needsCompensation = allWithGrades.filter(s =>
            isGradeWorse(s.grade, config.passGrade) && config.compensatableGrades.includes(s.grade)
        );
    }



    if (targetDegree === 'esa') {

        if (deutschSubject.grade === 'G5' && matheSubject.grade === 'G5') {
            result.exclusionReasons.push(t('exclusion.esa.g5Both'));
        }

        if (deutschSubject.grade === 'G6') {
            result.exclusionReasons.push(t('exclusion.esa.g6Deutsch'));
        }
        if (matheSubject.grade === 'G6') {
            result.exclusionReasons.push(t('exclusion.esa.g6Mathe'));
        }
        if (englischSubject.grade === 'G6') {
            result.exclusionReasons.push(t('exclusion.esa.g6Englisch'));
        }

        if (countGrade(allGrades, 'G6') >= 2) {
            result.exclusionReasons.push(t('exclusion.esa.g6Count'));
        }

        if (countGradesInList(allGrades, ['G5', 'G6']) > 2) {
            result.exclusionReasons.push(t('exclusion.esa.g5OrWorseCount'));
        }
    }

    if (targetDegree === 'msa') {
        const numericMain = mainGrades.map(toMsaNumericGrade);
        const numericAll = allGrades.map(toMsaNumericGrade);

        const mainG5OrWorse = numericMain.filter(g => g >= 5).length;
        const mainG6 = numericMain.filter(g => g === 6).length;
        const g5OrWorse = numericAll.filter(g => g >= 5).length;
        const g6 = numericAll.filter(g => g === 6).length;

        if (mainG5OrWorse >= 2) {
            result.exclusionReasons.push(t('exclusion.msa.mainG5Count'));
        }
        if (deutschSubject.grade && toMsaNumericGrade(deutschSubject.grade) === 6) {
            result.exclusionReasons.push(t('exclusion.msa.g6Deutsch'));
        }
        if (matheSubject.grade && toMsaNumericGrade(matheSubject.grade) === 6) {
            result.exclusionReasons.push(t('exclusion.msa.g6Mathe'));
        }
        if (englischSubject.grade && toMsaNumericGrade(englischSubject.grade) === 6) {
            result.exclusionReasons.push(t('exclusion.msa.g6Englisch'));
        }
        if (g6 >= 1 && g5OrWorse >= 2) {
            result.exclusionReasons.push(t('exclusion.msa.g5AndG6'));
        }
        if (g5OrWorse > 2) {
            result.exclusionReasons.push(t('exclusion.msa.g5Count'));
        }
    }

    if (targetDegree === 'sek2') {
        const numericMain = mainGrades.map(toSek2NumericGrade);
        const numericAll = allGrades.map(toSek2NumericGrade);

        const mainG2OrWorse = numericMain.filter(g => g >= 5).length;
        const mainG3OrWorse = numericMain.filter(g => g >= 6).length;
        const g2OrWorse = numericAll.filter(g => g >= 5).length;
        const g3OrWorse = numericAll.filter(g => g >= 6).length;

        if (mainG2OrWorse >= 2) {
            result.exclusionReasons.push(t('exclusion.sek2.mainG2Count'));
        }
        if (mainG3OrWorse >= 1) {
            result.exclusionReasons.push(t('exclusion.sek2.mainG3Count'));
        }
        if (g2OrWorse >= 1 && g3OrWorse >= 1 && g2OrWorse >= 2) {
            result.exclusionReasons.push(t('exclusion.sek2.g2AndG3'));
        }
        if (g2OrWorse > 2) {
            result.exclusionReasons.push(t('exclusion.sek2.g2Count'));
        }
    }


    if (result.exclusionReasons.length > 0) {
        result.status = 'danger';
        result.message = t('result.notAchieved', { degree: t(config.fullNameKey) });
        result.problems = needsCompensation.map(s => s.name);
        result.achieved = false;
        return result;
    }

    if (targetDegree === 'esa') {
        const numericGrades = allGrades.map(toEsaNumericGrade).filter(v => v !== null);
        const average = numericGrades.reduce((sum, v) => sum + v, 0) / numericGrades.length;
        const meetsAverage = average <= 4;
        const allAtLeastG4 = allGrades.every(g => isGradeBetterOrEqual(g, 'G4'));
        const compensatingSubjects = allWithGrades
            .filter(s => toEsaNumericGrade(s.grade) !== null && toEsaNumericGrade(s.grade) <= 3)
            .map(formatSubjectGrade);
        const deficitSubjects = allWithGrades
            .filter(s => toEsaNumericGrade(s.grade) !== null && toEsaNumericGrade(s.grade) > 4);

        if (meetsAverage) {
            result.achieved = true;
            result.status = allAtLeastG4 ? 'success' : 'warning';
            result.message = t('result.achieved', { degree: t(config.fullNameKey) });
            if (allAtLeastG4) {
                result.directSuccessNote = t(config.directSuccessNoteKey);
            }
        } else {
            result.achieved = false;
            result.status = 'danger';
            result.message = t('result.notAchieved', { degree: t(config.fullNameKey) });
        }

        if (deficitSubjects.length > 0) {
            result.compensatableProblems = deficitSubjects.map(subject => ({
                subject: subject.name,
                compensated: meetsAverage,
                by: compensatingSubjects
            }));
        }

        return result;
    }

    if (targetDegree === 'msa') {
        const numericGrades = allGrades.map(toMsaNumericGrade).filter(v => v !== null);
        const deficits = allWithGrades
            .map(s => ({ subject: s, numeric: toMsaNumericGrade(s.grade) }))
            .filter(d => d.numeric > 4);

        const availablePools = {
            1: allWithGrades.filter(s => toMsaNumericGrade(s.grade) === 1),
            2: allWithGrades.filter(s => toMsaNumericGrade(s.grade) === 2),
            3: allWithGrades.filter(s => toMsaNumericGrade(s.grade) === 3)
        };

        let allCompensated = true;

        const sixes = deficits.filter(d => d.numeric === 6);
        const fives = deficits.filter(d => d.numeric === 5);

        const compensationDetails = [];

        const useOne = (grade) => availablePools[grade].shift();
        const useTwo = (grade) => [availablePools[grade].shift(), availablePools[grade].shift()].filter(Boolean);

        const useSingleFrom = (grades) => {
            for (const grade of grades) {
                if (availablePools[grade].length >= 1) return [useOne(grade)];
            }
            return [];
        };

        const useDoubleFrom = (grades) => {
            const used = [];
            for (const grade of grades) {
                while (availablePools[grade].length && used.length < 2) {
                    used.push(useOne(grade));
                }
                if (used.length === 2) return used;
            }
            return used.length === 2 ? used : [];
        };

        sixes.forEach(deficit => {
            const used = useSingleFrom([1]);
            if (used.length === 0) {
                used.push(...useDoubleFrom([2, 1]));
            }

            const compensated = used.length > 0;
            if (!compensated) allCompensated = false;
            compensationDetails.push({
                subject: deficit.subject.name,
                compensated,
                by: used.map(formatSubjectGrade)
            });
        });

        fives.forEach(deficit => {
            const used = useSingleFrom([2, 1]);
            if (used.length === 0) {
                used.push(...useDoubleFrom([3, 2, 1]));
            }

            const compensated = used.length > 0;
            if (!compensated) allCompensated = false;
            compensationDetails.push({
                subject: deficit.subject.name,
                compensated,
                by: used.map(formatSubjectGrade)
            });
        });

        if (deficits.length === 0) {
            result.achieved = true;
            result.status = 'success';
            result.message = t('result.achieved', { degree: t(config.fullNameKey) });
            result.directSuccessNote = t(config.directSuccessNoteKey);
        } else if (allCompensated) {
            result.achieved = true;
            result.status = 'warning';
            result.message = t('result.achieved', { degree: t(config.fullNameKey) });
        } else {
            result.achieved = false;
            result.status = 'danger';
            result.message = t('result.notAchieved', { degree: t(config.fullNameKey) });
        }

        result.compensatableProblems = compensationDetails;
        return result;
    }

    if (targetDegree === 'sek2') {
        const numericGrades = allGrades.map(toSek2NumericGrade).filter(v => v !== null);
        const deficits = allWithGrades
            .map(s => ({ subject: s, numeric: toSek2NumericGrade(s.grade) }))
            .filter(d => d.numeric > 4);

        const availablePools = {
            1: allWithGrades.filter(s => toSek2NumericGrade(s.grade) === 1),
            2: allWithGrades.filter(s => toSek2NumericGrade(s.grade) === 2),
            3: allWithGrades.filter(s => toSek2NumericGrade(s.grade) === 3)
        };

        let allCompensated = true;

        const fives = deficits.filter(d => d.numeric === 5);
        const sixes = deficits.filter(d => d.numeric === 6);

        const compensationDetails = [];

        const useOne = (grade) => availablePools[grade].shift();
        const useTwo = (grade) => [availablePools[grade].shift(), availablePools[grade].shift()].filter(Boolean);

        const useSingleFrom = (grades) => {
            for (const grade of grades) {
                if (availablePools[grade].length >= 1) return [useOne(grade)];
            }
            return [];
        };

        const useDoubleFrom = (grades) => {
            const used = [];
            for (const grade of grades) {
                while (availablePools[grade].length && used.length < 2) {
                    used.push(useOne(grade));
                }
                if (used.length === 2) return used;
            }
            return used.length === 2 ? used : [];
        };

        fives.forEach(deficit => {
            const used = useSingleFrom([2, 1]);
            if (used.length === 0) {
                used.push(...useDoubleFrom([3, 2, 1]));
            }

            const compensated = used.length > 0;
            if (!compensated) allCompensated = false;
            compensationDetails.push({
                subject: deficit.subject.name,
                compensated,
                by: used.map(formatSubjectGrade)
            });
        });

        sixes.forEach(deficit => {
            const used = useSingleFrom([1]);
            if (used.length === 0) {
                used.push(...useDoubleFrom([2, 1]));
            }

            const compensated = used.length > 0;
            if (!compensated) allCompensated = false;
            compensationDetails.push({
                subject: deficit.subject.name,
                compensated,
                by: used.map(formatSubjectGrade)
            });
        });

        if (deficits.length === 0) {
            result.achieved = true;
            result.status = 'success';
            result.message = t('result.achieved', { degree: t(config.fullNameKey) });
            result.directSuccessNote = t(config.directSuccessNoteKey);
        } else if (allCompensated) {
            result.achieved = true;
            result.status = 'warning';
            result.message = t('result.achieved', { degree: t(config.fullNameKey) });
        } else {
            result.achieved = false;
            result.status = 'danger';
            result.message = t('result.notAchieved', { degree: t(config.fullNameKey) });
        }

        result.compensatableProblems = compensationDetails;
        return result;
    }



    const availableGrades = {};
    passed.forEach(s => {
        if (config.compensatingGrades.includes(s.grade)) {
            availableGrades[s.grade] = (availableGrades[s.grade] || 0) + 1;
            result.availableCompensations.push(`${s.name} (${GRADE_OPTIONS.find(o => o.value === s.grade)?.label || s.grade})`);
        }
    });


    const remainingGrades = { ...availableGrades };


    const deficits = [];
    needsCompensation.forEach(s => {
        const label = config.compensationLabelKeys[s.grade] ? t(config.compensationLabelKeys[s.grade]) : '';
        deficits.push({
            subject: s.name,
            needs: label,
            grade: s.grade
        });
        result.compensatableProblems.push({
            subject: s.name,
            needs: label,
            grade: s.grade
        });
    });


    deficits.sort((a, b) => GRADE_ORDER.indexOf(b.grade) - GRADE_ORDER.indexOf(a.grade));


    let allCompensated = true;

    for (const deficit of deficits) {
        const rules = config.compensationRules[deficit.grade];
        if (!rules) {
            allCompensated = false;
            continue;
        }

        let compensated = false;


        for (const singleGrade of rules.single) {
            if (remainingGrades[singleGrade] >= 1) {
                remainingGrades[singleGrade]--;
                compensated = true;
                break;
            }
        }


        if (!compensated && rules.double) {
            for (const doubleGrade of rules.double) {
                if (remainingGrades[doubleGrade] >= 2) {
                    remainingGrades[doubleGrade] -= 2;
                    compensated = true;
                    break;
                }
            }
        }

        if (!compensated) {
            allCompensated = false;
        }
    }


    if (deficits.length > 0) {
        result.problems = needsCompensation.map(s => s.name);

        if (allCompensated) {
            result.achieved = true;
            result.status = 'warning';
            result.message = t('result.achieved', { degree: t(config.fullNameKey) });
        } else {
            result.achieved = false;
            result.status = 'danger';
            result.message = t('result.notAchieved', { degree: t(config.fullNameKey) });
        }
    } else {
        result.achieved = true;
        result.status = 'success';
        result.message = t('result.achieved', { degree: t(config.fullNameKey) });
        result.directSuccessNote = t(config.directSuccessNoteKey);
    }

    return result;
}


function getOtherAchievableDegrees(currentTarget, currentResult) {
    const sek2Result = checkDegreeRequirements('sek2');
    const msaResult = checkDegreeRequirements('msa');
    const esaResult = checkDegreeRequirements('esa');
    const notes = [];

    if (currentTarget === 'esa') {
        const showsMsaNote = !sek2Result.achieved && msaResult.achieved;
        if (sek2Result.achieved) {
            notes.push(t('result.otherDegrees.sek2'));
        } else if (msaResult.achieved) {
            notes.push(t('result.otherDegrees.msa'));
        }

        if (currentResult?.achieved && !showsMsaNote) {
            notes.push(t('result.otherDegrees.eesa'));
        }
    } else if (currentTarget === 'msa') {
        if (sek2Result.achieved) {
            notes.push(t('result.otherDegrees.sek2'));
        }

        if (currentResult && !currentResult.achieved) {
            if (esaResult.achieved) {
                notes.push(t('result.otherDegrees.eesa'));
            } else {
                notes.push(t('result.otherDegrees.eesa.notAchieved'));
            }
        }
    }

    if (notes.length === 0) return null;
    if (notes.length === 1) return notes[0];
    return notes.map(note => `<p>${note}</p>`).join('');
}





function updateRowColors(targetDegree) {
    if (!targetDegree) return;

    const result = checkDegreeRequirements(targetDegree);

    subjects.forEach(subject => {
        const row = document.getElementById(`row-${subject.id}`);
        if (!row) return;

        row.classList.remove('status-green', 'status-yellow', 'status-red');

        if (subject.grade === null) return;


        const numericGrade = getNumericGradeForDegree(targetDegree, subject.grade);
        if (numericGrade === null) return;

        if (numericGrade <= 3) {
            row.classList.add('status-green');
            return;
        }

        if (numericGrade > 4) {
            row.classList.add(result.exclusionReasons.length > 0 ? 'status-red' : 'status-yellow');
        }
    });
}





function updateAll() {
    const targetDegree = targetDegreeSelect.value;

    updateDegreeVisibility(targetDegree);
    updateAddSubjectStriping();
    updateInfoSections(targetDegree);


    if (targetDegree) {
        averageGradeDisplay.textContent = calculateAverageGrade(targetDegree);
    } else {
        averageGradeDisplay.textContent = '–';
    }


    if (targetDegree) {
        updateRowColors(targetDegree);
    }


    updatePrognosis(targetDegree);
    updateTargetDegreeMarquee();
}

function updateDegreeVisibility(targetDegree) {
    const shouldShow = Boolean(targetDegree);
    const displayValue = shouldShow ? '' : 'none';

    if (gradesTable) gradesTable.style.display = displayValue;
    if (addSubjectContainer) addSubjectContainer.style.display = displayValue;
    if (averageDisplay) averageDisplay.style.display = displayValue;
    if (importExportContainer) importExportContainer.style.display = displayValue;
    if (printAction) printAction.style.display = displayValue;
    if (calculatorCard) calculatorCard.classList.toggle('calculator-compact', !shouldShow);
}

function updateInfoSections(targetDegree) {
    if (!infoSections.length) return;

    infoSections.forEach(section => {
        const shouldOpen = section.dataset.degree === targetDegree;
        section.open = shouldOpen;
    });
}

function updateAddSubjectStriping() {
    if (!addSubjectContainer) return;

    const rowCount = gradesBody.querySelectorAll('.grade-row').length;
    addSubjectContainer.classList.toggle('add-subject-even', rowCount % 2 !== 0);
    addSubjectContainer.classList.toggle('add-subject-odd', rowCount % 2 === 0);
}

function updatePrognosis(targetDegree) {
    if (!targetDegree) {
        prognosisCard.style.display = 'none';
        return;
    }

    const result = checkDegreeRequirements(targetDegree);
    const otherDegrees = getOtherAchievableDegrees(targetDegree, result);

    if (result.status === 'incomplete') {
        prognosisCard.style.display = 'none';
        return;
    } else {
        prognosisCard.style.display = 'block';
        const html = buildPrognosisHtml(result, otherDegrees);
        prognosisResult.className = `prognosis prognosis-${result.status}`;
        prognosisResult.innerHTML = html;
    }
}





document.addEventListener('DOMContentLoaded', init);
/* Alexander Henkes (2026) – Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) */
