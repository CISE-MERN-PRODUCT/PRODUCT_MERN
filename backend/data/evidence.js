// TDD articles

// evidence_strength: 'Strongly Support',
// evidence_strength: 'Weekly Support',
// evidence_strength: 'Strongly Disagree',
// evidence_strength: 'Weekly Disagree',

// claim: 'Code Quality',
// claim: 'Product quality',
// claim: 'Team confidence and satisfaction',

const articles = [
  {
    author: 'Aniche, M F and Testing, MA Gerosa Software',
    evidence_strength: 'Strongly Support',
    title:
      'Most common mistakes in test-driven development practice: Results from an online survey with developers',
    journal: 'ieeexplore.ieee.org',
    claim: 'Code Quality',
    se_practice: 'TDD',
  },

  {
    author: 'Janzen, D S and Saiedian, H',
    title: 'Does Test-Driven Development Really Improve Software Design Quality?',
    journal: 'Software, IEEE',
    year: '2008',
    evidence_strength: 'Strongly Support',
    volume: 25,
    claim: 'Code Quality',
    number: 2,
    se_practice: 'TDD',
    pages: '77-84',
  },

  {
    title:
      'A prototype empirical evaluation of test driven development - Software Metrics, 2004. Proceedings. 10th International Symposium on',
    claim: 'Code Quality',
    se_practice: 'TDD',
    evidence_strength: 'Strongly Support',
    year: '2001',
    month: 'aug',
  },

  {
    author:
      'Romano, Simone and Fucci, Davide and Baldassarre, Maria Teresa and Caivano, Danilo and Scanniello, Giuseppe',
    title:
      'An Empirical Assessment on Affective Reactions of Novice Developers when Applying Test-Driven Development',
    se_practice: 'TDD',
    claim: 'Code Quality',
    journal: 'arXiv.org',
    year: '2019',
    evidence_strength: 'Strongly Disagree',
    eprint: '1907.12290',
    eprinttype: 'arxiv',
    eprintclass: 'cs.SE',
    pages: 'arXiv:1907.12290',
    month: 'jul',
    annote:
      'Accepted for publication at the 20th International Conference on Product-Focused Software Process Improvement (PROFES19)',
  },

  {
    title: 'Evaluating Test-Driven Development in an Industry-Sponsored Capstone Project',
    year: '2009',
    se_practice: 'TDD',
    claim: 'Code Quality',
    evidence_strength: 'Strongly Disagree',
    publisher: 'IEEE',
    month: 'mar',
  },

  {
    author: 'Siniaalto, Maria and Abrahamsson, Pekka',
    title:
      'A Comparative Case Study on the Impact of Test-Driven Development on Program Design and Test Coverage',
    journal: 'arXiv.org',
    claim: 'Code Quality',
    se_practice: 'TDD',
    evidence_strength: 'Strongly Disagree',
    year: '2017',
    eprint: '1711.05082',
    eprinttype: 'arxiv',
    eprintclass: 'cs.SE',
    pages: 'arXiv:1711.05082',
    month: 'nov',
    annote:
      "This is author's version of the published paper. The copyright holder's version is accessible at http://ieeexplore.ieee.org/abstract/document/4343755/",
  },

  {
    author:
      'Romano, Simone and Scanniello, Giuseppe and Baldassarre, Maria Teresa and Fucci, Davide and Caivano, Danilo',
    title:
      'Results from a replicated experiment on the affective reactions of novice developers when applying test-driven development',
    journal: 'arXiv.org',
    year: 2020,
    se_practice: 'TDD',
    eprint: '2004.07524',
    claim: 'Product quality',
    eprinttype: 'arxiv',
    eprintclass: 'cs.SE',
    evidence_strength: 'Weekly Support',
    pages: 'arXiv:2004.07524',
    month: 'apr',
    annote: 'XP2020',
  },

  {
    title: 'On the Influence of Test-Driven Development on Software Design',
    se_practice: 'TDD',
    claim: 'Product quality',
    year: '2006',
    pages: '1--8',
    evidence_strength: 'Weekly Support',
    month: 'mar',
  },

  {
    title: 'A Leveled Examination of Test-Driven Development Acceptance',
    year: '2007',
    pages: '1--4',
    claim: 'Product quality',
    se_practice: 'TDD',
    evidence_strength: 'Weekly Support',
    month: 'jan',
  },

  {
    title: 'Evaluating the Efficacy of Test-Driven Development: Industrial Case Studies',
    year: '2006',
    claim: 'Product quality',
    pages: '1--8',
    evidence_strength: 'Strongly Support',
    se_practice: 'TDD',
    month: 'jul',
  },

  {
    author:
      'Canfora, Gerardo andCimitile, Aniello and Garcia, Felix and Piattini, Mario and Visaggio, and Corrado Aaron',
    title:
      'LNCS 4034 - Productivity of Test Driven Development: A Controlled Experiment with Professionals',
    se_practice: 'TDD',
    claim: 'Product quality',
    year: '2006',
    evidence_strength: 'Strongly Support',
    pages: '1--6',
    month: 'apr',
  },

  {
    author: 'Dell, New',
    title: 'Implications of Test-Driven Development A Pilot Study',
    year: '2003',
    pages: '1--2',
    claim: 'Product quality',
    evidence_strength: 'Strongly Support',
    se_practice: 'TDD',
    month: 'aug',
  },

  {
    author: 'Bain, Scott and Kolsky, Amir',
    title: 'Sustainable Test-Driven Development',
    se_practice: 'TDD',
    publisher: 'Addison-Wesley Professional',
    evidence_strength: 'Strongly Support',
    claim: 'Product quality',
    year: '2016',
    month: 'mar',
  },

  {
    title:
      'Test-driven development as a defect-reduction practice - Software Reliability Engineering, 2003. ISSRE 2003. 14th International Symposium on',
    se_practice: 'TDD',
    evidence_strength: 'Strongly Support',
    year: '2001',
    claim: 'Team confidence and satisfaction',
    pages: '1--12',
    month: 'aug',
  },

  {
    author:
      'Choma, Joelma and Guerra, Eduardo M and da Silva, Tiago Silva and Albuquerque, Thomas and Albuquerque, Vanessa G and Zaina, Luciana Martinez',
    title:
      'An Empirical Study of Test-Driven Development vs. Test-Last Development Using Eye Tracking.',
    evidence_strength: 'Strongly Support',
    se_practice: 'TDD',
    claim: 'Team confidence and satisfaction',
    journal: 'WBMA',
    year: '2019',
  },

  {
    author: 'Tosun, Ayse and Ahmed, Muzamil and Turhan, Burak and Juristo, Natalia',
    title: 'On the effectiveness of unit tests in test-driven development.',
    se_practice: 'TDD',
    evidence_strength: 'Strongly Support',
    journal: 'ICSSP',
    claim: 'Team confidence and satisfaction',
    year: '2018',
  },

  {
    author: "Parodi, Eugenia and Matalonga, Santiago and Macchi, Dario and Solari, Mart{'i},n",
    title:
      'Comparing technical debt in student exercises using test driven development, test last and ad hoc programming.',
    evidence_strength: 'Strongly Support',
    se_practice: 'TDD',
    claim: 'Team confidence and satisfaction',
    journal: 'CLEI',
    year: '2016',
  },

  {
    author: 'Maximilien, E M and on, L Williams 25th International Conference',
    title: 'Assessing test-driven development at IBM - IEEE Conference Publication',
    evidence_strength: 'Weekly Disagree',
    claim: 'Team confidence and satisfaction',
    se_practice: 'TDD',
    journal: 'ieeexplore.ieee.org',
  },

  {
    author: 'Munir, Hussan and Wnuk, Krzysztof and Petersen, Kai and Moayyed, Misagh',
    title:
      'An experimental evaluation of test driven development vs. test-last development with industry professionals.',
    evidence_strength: 'Weekly Disagree',
    se_practice: 'TDD',
    claim: 'Team confidence and satisfaction',
    journal: 'EASE',
    year: '2014',
  },

  {
    author: 'Williams, L and Software, EM Maximilien Symposium on and',
    title: 'Test-driven development as a defect-reduction practice',
    evidence_strength: 'Weekly Disagree',
    claim: 'Team confidence and satisfaction',
    se_practice: 'TDD',
    journal: 'ieeexplore.ieee.org',
  },

  {
    author: 'Janzen, D and Software, H Saiedian Ieee',
    evidence_strength: 'Weekly Disagree',
    se_practice: 'TDD',
    title: 'Does test-driven development really improve software design quality?',
    claim: 'Team confidence and satisfaction',
    journal: 'ieeexplore.ieee.org',
  },

  {
    author: 'Nagappan, N and Maximilien, E M and Software, T Bhat Empirical',
    se_practice: 'TDD',
    title:
      'Realizing quality improvement through test driven development: results and experiences of four industrial teams',
    claim: 'Team confidence and satisfaction',
    evidence_strength: 'Weekly Disagree',
    journal: 'Springer',
  },

  {
    se_practice: 'TDD',
    author: 'Geras, A and Smith, M and on, J Miller 10th International Symposium',
    title: 'A prototype empirical evaluation of test driven development',
    claim: 'Team confidence and satisfaction',
    evidence_strength: 'Weekly Disagree',
    journal: 'ieeexplore.ieee.org',
  },
];

module.exports = articles;
