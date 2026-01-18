





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
    { value: 'E4', label: 'E4 / G1' },
    { value: 'G2', label: 'G2' },
    { value: 'G3', label: 'G3' },
    { value: 'G4', label: 'G4' },
    { value: 'G5', label: 'G5' },
    { value: 'G6', label: 'G6' }
];


const GRADE_ORDER = ['E1', 'E2', 'E3', 'E4', 'G2', 'G3', 'G4', 'G5', 'G6'];

const TRANSLATIONS = {
    de: {
        'app.title': 'Noten- & Abschlussrechner',
        'app.subtitle': 'Sekundarstufe I (Hamburg) – ESA | MSA | Gymnasiale Oberstufe',
        'section.calculator': 'Durchschnittsrechner',
        'section.prognosis': 'Abschlussprognose',
        'section.legend': 'Farben / Legende',
        'section.info': 'Hinweise zu den Schulabschlüssen',
        'select.placeholder': 'Bitte wählen Sie einen angestrebten Abschluss aus ...',
        'select.esa': 'ESA (Erster allgemeinbildender Schulabschluss)',
        'select.msa': 'MSA (Mittlerer Schulabschluss)',
        'select.sek2': 'SEK II (Versetzung in die Gymnasiale Oberstufe)',
        'table.subjects': 'Fächer',
        'table.grades': 'Noten',
        'addSubject.placeholder': 'Weiteres Fach hinzufügen ...',
        'average.label': 'Notendurchschnitt:',
        'importExport.save': 'Noteneingabe speichern',
        'importExport.load': 'Noteneingabe laden',
        'legend.green': 'Das Fach kann als <u>Ausgleich</u> für andere Fächer dienen.',
        'legend.yellow': 'Das Fach gefährdet den Abschluss, ist aber <u>ausgleichbar</u>.',
        'legend.red': 'Das Fach ist <u>nicht</u> ausgleichbar, der gewählte Abschluss somit <u>ausgeschlossen</u>.',
        'info.esa.heading': 'ESA (Erster allgemeinbildender Schulabschluss):',
        'info.esa.requirement': '<strong>Voraussetzung:</strong> Mindestens G4 in allen Fächern.',
        'info.esa.compensation': '<strong>Ausgleich:</strong> G5 kann durch G3 ausgeglichen werden, G6 durch G2 oder 2 × G3.',
        'info.esa.exclusion': '<strong>Ausschluss:</strong> G5 in D <u>und</u> M, G6 in D/M/E, 2 × G6, 3 × G5.',
        'info.msa.heading': 'MSA (Mittlerer Schulabschluss):',
        'info.msa.requirement': '<strong>Voraussetzung:</strong> Mindestens G2 in allen Fächern.',
        'info.msa.compensation': '<strong>Ausgleich:</strong> G3 kann durch E3 oder 2 × E4 ausgeglichen werden. G4 oder schlechter (in Nebenfächern) kann durch E2 oder 2 × E3 ausgeglichen werden.',
        'info.msa.exclusion': '<strong>Ausschluss:</strong> 2 × G3 in D/M/E, G4 in D/M/E, G3 und G4 zusammen, 3 × G3.',
        'info.sek2.heading': 'SEK II (Versetzung in die Gymnasiale Oberstufe):',
        'info.sek2.requirement': '<strong>Voraussetzung:</strong> Mindestens E4 in allen Fächern.',
        'info.sek2.compensation': '<strong>Ausgleich:</strong> G2 kann durch E2 oder 2 × E3 ausgeglichen werden. G3 oder schlechter (in Nebenfächern) kann durch E1 oder 2 × E2 ausgeglichen werden.',
        'info.sek2.exclusion': '<strong>Ausschluss:</strong> 2 × G2 in D/M/E, G3 in D/M/E, G2 und G3 zusammen, 3 × G2.',
        'info.mainSubjects': '<strong>Hauptfächer:</strong> Die Hauptfächer Deutsch, Mathematik und Englisch haben besondere Bedeutung.<br><strong class="text-danger">Hier gelten strengere Ausschlussregeln!</strong>',
        'info.noEvaluation': '<strong>Keine Bewertung:</strong> Dieser Umstand könnte eintreten, wenn ein Schüler aufgrund von Absentismus nicht bewertet werden kann. <strong class="text-danger">Eine fehlende Note/Bewertung auf dem Zeugnis schließt einen Abschluss aus!</strong>',
        'footer.basedOnPrefix': 'Basierend auf der',
        'footer.basedOnLink': 'APO-GrundStGy Hamburg',
        'footer.basedOnSuffix': '(Stand: April 2024)',
        'footer.disclaimer': 'Angaben ohne Gewähr. Verbindliche Auskünfte erteilt die Schule.',
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
        'result.incomplete': 'Bitte geben Sie mindestens die Noten für Deutsch, Mathematik und Englisch ein.',
        'result.achieved': '{{degree}} wird erreicht!',
        'result.notAchieved': '{{degree}} kann nicht erreicht werden.',
        'result.directSuccess.esa': 'Der Erste allgemeinbildende Schulabschluss wird direkt und ohne Notenausgleich erreicht.',
        'result.directSuccess.msa': 'Der Mittlere Schulabschluss wird direkt und ohne Notenausgleich erreicht.',
        'result.directSuccess.sek2': 'Die Versetzung wird direkt und ohne Notenausgleich erreicht.',
        'result.achievedWithCompensation': 'Der Abschluss wird mit Notenausgleich erreicht.',
        'result.notEnoughCompensation': 'Es sind nicht genügend Ausgleichsmöglichkeiten vorhanden.',
        'result.exclusionReasonsLabel': 'Ausschlussgründe:',
        'result.compensatedSubjectsLabel': 'Folgende Fächer werden ausgeglichen:',
        'result.compensationPossibleBy': 'Ausgleich möglich durch:',
        'result.needs': 'benötigt',
        'result.otherDegrees.sek2': 'Ihr Notenbild ermöglicht ebenfalls die zukünftige Versetzung in die Sekundarstufe II (Gymnasiale Oberstufe).',
        'result.otherDegrees.msa': 'Ihr Notenbild ermöglicht zukünftig ebenfalls den Mittleren Schulabschluss (MSA).',
        'actions.removeSubject': 'Fach entfernen',
        'label.required': '(Pflichtangabe)',
        'exclusion.esa.g5Both': 'G5 in Deutsch und Mathematik',
        'exclusion.esa.g6Deutsch': 'G6 in Deutsch (Hauptfach)',
        'exclusion.esa.g6Mathe': 'G6 in Mathematik (Hauptfach)',
        'exclusion.esa.g6Englisch': 'G6 in Englisch (Hauptfach)',
        'exclusion.esa.g6Count': 'Zwei oder mehr Fächer mit G6',
        'exclusion.esa.g5Count': 'Drei oder mehr Fächer mit G5',
        'exclusion.msa.mainG3Count': 'Zwei Hauptfächer (D/M/E) mit G3',
        'exclusion.msa.g4Deutsch': 'G4 oder schlechter in Deutsch (Hauptfach)',
        'exclusion.msa.g4Mathe': 'G4 oder schlechter in Mathematik (Hauptfach)',
        'exclusion.msa.g4Englisch': 'G4 oder schlechter in Englisch (Hauptfach)',
        'exclusion.msa.g3AndG4': 'Kombination aus G3 und G4 oder schlechter',
        'exclusion.msa.g3Count': 'Drei oder mehr Fächer mit G3',
        'exclusion.sek2.mainG2Count': 'Zwei Hauptfächer (D/M/E) mit G2',
        'exclusion.sek2.g3Deutsch': 'G3 oder schlechter in Deutsch (Hauptfach)',
        'exclusion.sek2.g3Mathe': 'G3 oder schlechter in Mathematik (Hauptfach)',
        'exclusion.sek2.g3Englisch': 'G3 oder schlechter in Englisch (Hauptfach)',
        'exclusion.sek2.g2AndG3': 'Kombination aus G2 und G3 oder schlechter',
        'exclusion.sek2.g2Count': 'Drei oder mehr Fächer mit G2',
        'compensation.esa.G5': 'eine G3 oder besser',
        'compensation.esa.G6': 'eine G2 oder besser, oder 2 × G3',
        'compensation.msa.G3': 'eine E3 oder 2 × E4',
        'compensation.msa.G4': 'eine E2 oder 2 × E3',
        'compensation.msa.G5': 'eine E2 oder 2 × E3',
        'compensation.msa.G6': 'eine E2 oder 2 × E3',
        'compensation.sek2.G2': 'eine E2 oder 2 × E3',
        'compensation.sek2.G3': 'eine E1 oder 2 × E2',
        'compensation.sek2.G4': 'eine E1 oder 2 × E2',
        'compensation.sek2.G5': 'eine E1 oder 2 × E2',
        'compensation.sek2.G6': 'eine E1 oder 2 × E2',
        'import.invalidJson': 'Die Importdatei ist ungültig.',
        'import.invalidSubjects': 'Die Importdatei enthält keine gültigen Fächer.'
    },
    en: {
        'app.title': 'Grade & Qualification Calculator',
        'app.subtitle': 'Secondary Level I (Hamburg) – ESA | MSA | Upper Secondary',
        'section.calculator': 'Average Grade Calculator',
        'section.prognosis': 'Qualification Forecast',
        'section.legend': 'Colors / Legend',
        'section.info': 'Notes on School Qualifications',
        'select.placeholder': 'Please select a target qualification ...',
        'select.esa': 'ESA (First General School Certificate)',
        'select.msa': 'MSA (Intermediate School Certificate)',
        'select.sek2': 'Upper Secondary (transfer to upper secondary level)',
        'table.subjects': 'Subjects',
        'table.grades': 'Grades',
        'addSubject.placeholder': 'Add another subject ...',
        'average.label': 'Average grade:',
        'importExport.save': 'Save grade input',
        'importExport.load': 'Load grade input',
        'legend.green': 'This subject can serve as <u>compensation</u> for other subjects.',
        'legend.yellow': 'This subject endangers the qualification but is <u>compensable</u>.',
        'legend.red': 'This subject is <u>not</u> compensable; the selected qualification is <u>excluded</u>.',
        'info.esa.heading': 'ESA (First General School Certificate):',
        'info.esa.requirement': '<strong>Requirement:</strong> At least G4 in all subjects.',
        'info.esa.compensation': '<strong>Compensation:</strong> G5 can be compensated by G3; G6 by G2 or 2 × G3.',
        'info.esa.exclusion': '<strong>Exclusion:</strong> G5 in German <u>and</u> Mathematics, G6 in German/Math/English, 2 × G6, 3 × G5.',
        'info.msa.heading': 'MSA (Intermediate School Certificate):',
        'info.msa.requirement': '<strong>Requirement:</strong> At least G2 in all subjects.',
        'info.msa.compensation': '<strong>Compensation:</strong> G3 can be compensated by E3 or 2 × E4. G4 or worse (in minor subjects) can be compensated by E2 or 2 × E3.',
        'info.msa.exclusion': '<strong>Exclusion:</strong> 2 × G3 in German/Math/English, G4 in German/Math/English, G3 and G4 combined, 3 × G3.',
        'info.sek2.heading': 'Upper Secondary (transfer to upper secondary level):',
        'info.sek2.requirement': '<strong>Requirement:</strong> At least E4 in all subjects.',
        'info.sek2.compensation': '<strong>Compensation:</strong> G2 can be compensated by E2 or 2 × E3. G3 or worse (in minor subjects) can be compensated by E1 or 2 × E2.',
        'info.sek2.exclusion': '<strong>Exclusion:</strong> 2 × G2 in German/Math/English, G3 in German/Math/English, G2 and G3 combined, 3 × G2.',
        'info.mainSubjects': '<strong>Main subjects:</strong> German, Mathematics, and English are of special importance.<br><strong class="text-danger">Stricter exclusion rules apply here!</strong>',
        'info.noEvaluation': '<strong>No assessment:</strong> This can occur if a student cannot be assessed due to absenteeism. <strong class="text-danger">A missing grade on the report card excludes a qualification!</strong>',
        'footer.basedOnPrefix': 'Based on the',
        'footer.basedOnLink': 'APO-GrundStGy Hamburg',
        'footer.basedOnSuffix': '(as of April 2024)',
        'footer.disclaimer': 'Information without guarantee. The school provides binding information.',
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
        'result.incomplete': 'Please enter at least the grades for German, Mathematics, and English.',
        'result.achieved': '{{degree}} is achieved!',
        'result.notAchieved': '{{degree}} cannot be achieved.',
        'result.directSuccess.esa': 'The first general school certificate is achieved directly without compensation.',
        'result.directSuccess.msa': 'The intermediate school certificate is achieved directly without compensation.',
        'result.directSuccess.sek2': 'The transfer is achieved directly without compensation.',
        'result.achievedWithCompensation': 'The qualification is achieved with compensation.',
        'result.notEnoughCompensation': 'There are not enough compensation options available.',
        'result.exclusionReasonsLabel': 'Exclusion reasons:',
        'result.compensatedSubjectsLabel': 'The following subjects are compensated:',
        'result.compensationPossibleBy': 'Compensation possible through:',
        'result.needs': 'requires',
        'result.otherDegrees.sek2': 'Your grade profile also allows a future transfer to upper secondary level.',
        'result.otherDegrees.msa': 'Your grade profile will also allow the intermediate school certificate (MSA).',
        'actions.removeSubject': 'Remove subject',
        'label.required': '(required)',
        'exclusion.esa.g5Both': 'G5 in German and Mathematics',
        'exclusion.esa.g6Deutsch': 'G6 in German (main subject)',
        'exclusion.esa.g6Mathe': 'G6 in Mathematics (main subject)',
        'exclusion.esa.g6Englisch': 'G6 in English (main subject)',
        'exclusion.esa.g6Count': 'Two or more subjects with G6',
        'exclusion.esa.g5Count': 'Three or more subjects with G5',
        'exclusion.msa.mainG3Count': 'Two main subjects (German/Math/English) with G3',
        'exclusion.msa.g4Deutsch': 'G4 or worse in German (main subject)',
        'exclusion.msa.g4Mathe': 'G4 or worse in Mathematics (main subject)',
        'exclusion.msa.g4Englisch': 'G4 or worse in English (main subject)',
        'exclusion.msa.g3AndG4': 'Combination of G3 and G4 or worse',
        'exclusion.msa.g3Count': 'Three or more subjects with G3',
        'exclusion.sek2.mainG2Count': 'Two main subjects (German/Math/English) with G2',
        'exclusion.sek2.g3Deutsch': 'G3 or worse in German (main subject)',
        'exclusion.sek2.g3Mathe': 'G3 or worse in Mathematics (main subject)',
        'exclusion.sek2.g3Englisch': 'G3 or worse in English (main subject)',
        'exclusion.sek2.g2AndG3': 'Combination of G2 and G3 or worse',
        'exclusion.sek2.g2Count': 'Three or more subjects with G2',
        'compensation.esa.G5': 'one G3 or better',
        'compensation.esa.G6': 'one G2 or better, or 2 × G3',
        'compensation.msa.G3': 'one E3 or 2 × E4',
        'compensation.msa.G4': 'one E2 or 2 × E3',
        'compensation.msa.G5': 'one E2 or 2 × E3',
        'compensation.msa.G6': 'one E2 or 2 × E3',
        'compensation.sek2.G2': 'one E2 or 2 × E3',
        'compensation.sek2.G3': 'one E1 or 2 × E2',
        'compensation.sek2.G4': 'one E1 or 2 × E2',
        'compensation.sek2.G5': 'one E1 or 2 × E2',
        'compensation.sek2.G6': 'one E1 or 2 × E2',
        'import.invalidJson': 'The import file is invalid.',
        'import.invalidSubjects': 'The import file contains no valid subjects.'
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



const DEGREE_CONFIG = {
    esa: {
        name: 'ESA',
        fullNameKey: 'degree.esa.full',
        directSuccessNoteKey: 'result.directSuccess.esa',
        
        passGrade: 'G4',
        
        compensatableGrades: ['G5', 'G6'],
        
        compensatingGrades: ['E1', 'E2', 'E3', 'E4', 'G2', 'G3'],
        
        compensationRules: {
            
            'G5': { single: ['E1', 'E2', 'E3', 'E4', 'G2', 'G3'], double: [] },
            
            'G6': { single: ['E1', 'E2', 'E3', 'E4', 'G2'], double: ['G3'] }
        },
        compensationLabelKeys: {
            'G5': 'compensation.esa.G5',
            'G6': 'compensation.esa.G6'
        },
        
        exclusionRules: {
            
            mainSubjectG5Both: true,
            
            mainSubjectG6: true,
            
            maxG6: 1,
            
            maxG5: 2
        }
    },
    msa: {
        name: 'MSA',
        fullNameKey: 'degree.msa.full',
        directSuccessNoteKey: 'result.directSuccess.msa',
        
        passGrade: 'G2',
        
        compensatableGrades: ['G3', 'G4', 'G5', 'G6'],
        
        compensatingGrades: ['E1', 'E2', 'E3', 'E4'],
        
        compensationRules: {
            
            'G3': { single: ['E1', 'E2', 'E3'], double: ['E4'] },
            
            'G4': { single: ['E1', 'E2'], double: ['E3'] },
            'G5': { single: ['E1', 'E2'], double: ['E3'] },
            'G6': { single: ['E1', 'E2'], double: ['E3'] }
        },
        compensationLabelKeys: {
            'G3': 'compensation.msa.G3',
            'G4': 'compensation.msa.G4',
            'G5': 'compensation.msa.G5',
            'G6': 'compensation.msa.G6'
        },
        
        exclusionRules: {
            
            mainSubjectG3Count: 2,
            
            mainSubjectG4OrWorse: true,
            
            g3AndG4Together: true,
            
            maxG3: 2
        }
    },
    sek2: {
        name: 'SEK II',
        fullNameKey: 'degree.sek2.full',
        directSuccessNoteKey: 'result.directSuccess.sek2',
        
        passGrade: 'E4',
        
        compensatableGrades: ['G2', 'G3', 'G4', 'G5', 'G6'],
        
        compensatingGrades: ['E1', 'E2', 'E3'],
        
        compensationRules: {
            
            'G2': { single: ['E1', 'E2'], double: ['E3'] },
            
            'G3': { single: ['E1'], double: ['E2'] },
            'G4': { single: ['E1'], double: ['E2'] },
            'G5': { single: ['E1'], double: ['E2'] },
            'G6': { single: ['E1'], double: ['E2'] }
        },
        compensationLabelKeys: {
            'G2': 'compensation.sek2.G2',
            'G3': 'compensation.sek2.G3',
            'G4': 'compensation.sek2.G4',
            'G5': 'compensation.sek2.G5',
            'G6': 'compensation.sek2.G6'
        },
        
        exclusionRules: {
            
            mainSubjectG2Count: 2,
            
            mainSubjectG3OrWorse: true,
            
            g2AndG3Together: true,
            
            maxG2: 2
        }
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
const languageButtons = document.querySelectorAll('.lang-btn');
const languageHint = document.querySelector('.language-hint');
const languageSwitcher = document.querySelector('.language-switcher');
const languageHintArrow = document.querySelector('.language-hint-arrow');





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
    languageButtons.forEach(button => {
        button.addEventListener('click', () => setLanguage(button.dataset.lang));
    });
    window.addEventListener('resize', positionLanguageHint);
    window.addEventListener('scroll', updateLanguageSwitcherVisibility, { passive: true });

    setLanguage('de');
    hideLanguageHintAfterDelay();
    updateLanguageSwitcherVisibility();
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

    
    const passed = allWithGrades.filter(s => isGradeBetterOrEqual(s.grade, config.passGrade));
    const needsCompensation = allWithGrades.filter(s =>
        isGradeWorse(s.grade, config.passGrade) && config.compensatableGrades.includes(s.grade)
    );

    

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
        
        if (countGrade(allGrades, 'G5') >= 3) {
            result.exclusionReasons.push(t('exclusion.esa.g5Count'));
        }
    }

    if (targetDegree === 'msa') {
        
        if (countGrade(mainGrades, 'G3') >= 2) {
            result.exclusionReasons.push(t('exclusion.msa.mainG3Count'));
        }
        
        const g4OrWorse = ['G4', 'G5', 'G6'];
        if (g4OrWorse.includes(deutschSubject.grade)) {
            result.exclusionReasons.push(t('exclusion.msa.g4Deutsch'));
        }
        if (g4OrWorse.includes(matheSubject.grade)) {
            result.exclusionReasons.push(t('exclusion.msa.g4Mathe'));
        }
        if (g4OrWorse.includes(englischSubject.grade)) {
            result.exclusionReasons.push(t('exclusion.msa.g4Englisch'));
        }
        
        const hasG3 = countGrade(allGrades, 'G3') > 0;
        const hasG4OrWorse = countGradesInList(allGrades, ['G4', 'G5', 'G6']) > 0;
        if (hasG3 && hasG4OrWorse) {
            result.exclusionReasons.push(t('exclusion.msa.g3AndG4'));
        }
        
        if (countGrade(allGrades, 'G3') >= 3) {
            result.exclusionReasons.push(t('exclusion.msa.g3Count'));
        }
    }

    if (targetDegree === 'sek2') {
        
        if (countGrade(mainGrades, 'G2') >= 2) {
            result.exclusionReasons.push(t('exclusion.sek2.mainG2Count'));
        }
        
        const g3OrWorse = ['G3', 'G4', 'G5', 'G6'];
        if (g3OrWorse.includes(deutschSubject.grade)) {
            result.exclusionReasons.push(t('exclusion.sek2.g3Deutsch'));
        }
        if (g3OrWorse.includes(matheSubject.grade)) {
            result.exclusionReasons.push(t('exclusion.sek2.g3Mathe'));
        }
        if (g3OrWorse.includes(englischSubject.grade)) {
            result.exclusionReasons.push(t('exclusion.sek2.g3Englisch'));
        }
        
        const hasG2 = countGrade(allGrades, 'G2') > 0;
        const hasG3OrWorse = countGradesInList(allGrades, ['G3', 'G4', 'G5', 'G6']) > 0;
        if (hasG2 && hasG3OrWorse) {
            result.exclusionReasons.push(t('exclusion.sek2.g2AndG3'));
        }
        
        if (countGrade(allGrades, 'G2') >= 3) {
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


function getOtherAchievableDegrees(currentTarget) {
    const sek2Result = checkDegreeRequirements('sek2');
    const msaResult = checkDegreeRequirements('msa');

    if (currentTarget === 'esa') {
        if (sek2Result.achieved) {
            return t('result.otherDegrees.sek2');
        } else if (msaResult.achieved) {
            return t('result.otherDegrees.msa');
        }
    } else if (currentTarget === 'msa') {
        if (sek2Result.achieved) {
            return t('result.otherDegrees.sek2');
        }
    }

    return null;
}





function updateRowColors(targetDegree) {
    if (!targetDegree) return;

    const config = DEGREE_CONFIG[targetDegree];
    const result = checkDegreeRequirements(targetDegree);

    subjects.forEach(subject => {
        const row = document.getElementById(`row-${subject.id}`);
        if (!row) return;

        row.classList.remove('status-green', 'status-yellow', 'status-red');

        if (subject.grade === null) return;

        
        if (config.compensatingGrades.includes(subject.grade)) {
            row.classList.add('status-green');
        }
        
        else if (config.compensatableGrades.includes(subject.grade)) {
            if (result.exclusionReasons.length > 0) {
                row.classList.add('status-red');
            } else {
                row.classList.add('status-yellow');
            }
        }
        
        else if (isGradeWorse(subject.grade, config.passGrade)) {
            row.classList.add('status-red');
        }
    });
}





function updateAll() {
    const targetDegree = targetDegreeSelect.value;

    updateDegreeVisibility(targetDegree);
    updateAddSubjectStriping();

    
    if (targetDegree) {
        averageGradeDisplay.textContent = calculateAverageGrade(targetDegree);
    } else {
        averageGradeDisplay.textContent = '–';
    }

    
    if (targetDegree) {
        updateRowColors(targetDegree);
    }

    
    updatePrognosis(targetDegree);
}

function updateDegreeVisibility(targetDegree) {
    const shouldShow = Boolean(targetDegree);
    const displayValue = shouldShow ? '' : 'none';

    if (gradesTable) gradesTable.style.display = displayValue;
    if (addSubjectContainer) addSubjectContainer.style.display = displayValue;
    if (averageDisplay) averageDisplay.style.display = displayValue;
    if (importExportContainer) importExportContainer.style.display = displayValue;
    if (calculatorCard) calculatorCard.classList.toggle('calculator-compact', !shouldShow);
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
    const otherDegrees = getOtherAchievableDegrees(targetDegree);

    let html = '';

    if (result.status === 'incomplete') {
        prognosisCard.style.display = 'none';
        return;
    } else {
        prognosisCard.style.display = 'block';

        const icon = result.achieved ? '✓' : '✗';
        html = `<h3>${icon} ${result.message}</h3>`;

        
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
                html += `<li>${reason}</li>`;
            });
            html += '</ul>';
        }

        if (result.compensatableProblems?.length > 0 && result.achieved) {
            html += `<p><strong>${t('result.compensatedSubjectsLabel')}</strong></p><ul>`;
            result.compensatableProblems.forEach(p => {
                html += `<li>${p.subject} (${t('result.needs')} ${p.needs})</li>`;
            });
            html += '</ul>';
        }

        if (result.availableCompensations?.length > 0 && result.achieved && result.status === 'warning') {
            html += `<p><strong>${t('result.compensationPossibleBy')}</strong> ${result.availableCompensations.join(', ')}</p>`;
        }

        if (otherDegrees) {
            html += `<div class="other-degrees">${otherDegrees}</div>`;
        }

        prognosisResult.className = `prognosis prognosis-${result.status}`;
    }

    prognosisResult.innerHTML = html;
}





document.addEventListener('DOMContentLoaded', init);
