const moduleLinks = document.querySelectorAll(".module-link");
const pageViews = document.querySelectorAll(".page-view");
const jumpButtons = document.querySelectorAll(".jump-button");
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const topbar = document.getElementById("topbar");
const languageSelect = document.getElementById("languageSelect");

const enterAppButton = document.getElementById("enterAppButton");
const loginOverlay = document.getElementById("loginOverlay");
const closeLogin = document.getElementById("closeLogin");
const loginForm = document.getElementById("loginForm");
const loginStatus = document.getElementById("loginStatus");

const signinChoiceOverlay = document.getElementById("signinChoiceOverlay");
const continuePreviousBtn = document.getElementById("continuePreviousBtn");
const continueNewBtn = document.getElementById("continueNewBtn");
const savedUserSummary = document.getElementById("savedUserSummary");

const loginName = document.getElementById("loginName");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginCollege = document.getElementById("loginCollege");
const loginDegree = document.getElementById("loginDegree");
const loginYear = document.getElementById("loginYear");
const loginSpecialization = document.getElementById("loginSpecialization");

const profileTrigger = document.getElementById("profileTrigger");
const profileOverlay = document.getElementById("profileOverlay");
const closeProfile = document.getElementById("closeProfile");
const logoutButton = document.getElementById("logoutButton");
const evaluationTrigger = document.getElementById("evaluationTrigger");
const evaluationOverlay = document.getElementById("evaluationOverlay");
const closeEvaluation = document.getElementById("closeEvaluation");
const evaluationSummary = document.getElementById("evaluationSummary");
const evaluationList = document.getElementById("evaluationList");
const topScoreLabel = document.getElementById("topScoreLabel");

const topProfileName = document.getElementById("topProfileName");
const topProfileEmail = document.getElementById("topProfileEmail");
const profileAvatar = document.getElementById("profileAvatar");

const viewName = document.getElementById("viewName");
const viewEmail = document.getElementById("viewEmail");
const viewCollege = document.getElementById("viewCollege");
const viewDegree = document.getElementById("viewDegree");
const viewYear = document.getElementById("viewYear");
const viewSpecialization = document.getElementById("viewSpecialization");

const scenarioButtons = document.querySelectorAll(".scenario-button");
const areaValue = document.getElementById("areaValue");
const netValue = document.getElementById("netValue");
const perHectareValue = document.getElementById("perHectareValue");

const scenarioSelect = document.getElementById("scenarioSelect");
const biodiversityRange = document.getElementById("biodiversityRange");
const waterRange = document.getElementById("waterRange");
const carbonRange = document.getElementById("carbonRange");
const livelihoodRange = document.getElementById("livelihoodRange");

const biodiversityValue = document.getElementById("biodiversityValue");
const waterValue = document.getElementById("waterValue");
const carbonValue = document.getElementById("carbonValue");
const livelihoodValue = document.getElementById("livelihoodValue");

const customChartLabel = document.getElementById("customChartLabel");
const customBiodiversity = document.getElementById("customBiodiversity");
const customWater = document.getElementById("customWater");
const customCarbon = document.getElementById("customCarbon");
const customLivelihood = document.getElementById("customLivelihood");
const customPeakLabel = document.getElementById("customPeakLabel");
const peakWaterLabel = document.getElementById("peakWaterLabel");

const wetlandSelect = document.getElementById("wetlandSelect");
const wetlandInfoTitle = document.getElementById("wetlandInfoTitle");
const wetlandInfoRegion = document.getElementById("wetlandInfoRegion");
const wetlandInfoText = document.getElementById("wetlandInfoText");

const inputArea = document.getElementById("inputArea");
const inputBiodiversity = document.getElementById("inputBiodiversity");
const inputWater = document.getElementById("inputWater");
const inputCarbon = document.getElementById("inputCarbon");
const inputLivelihood = document.getElementById("inputLivelihood");
const inputManagement = document.getElementById("inputManagement");
const inputProtection = document.getElementById("inputProtection");

const dashboardTotalValue = document.getElementById("dashboardTotalValue");
const dashboardPerHectareValue = document.getElementById("dashboardPerHectareValue");
const dashboardNetValue = document.getElementById("dashboardNetValue");
const dashboardTopServiceChip = document.getElementById("dashboardTopServiceChip");
const dashboardAreaChip = document.getElementById("dashboardAreaChip");
const dashboardNetChip = document.getElementById("dashboardNetChip");
const serviceInsightChip = document.getElementById("serviceInsightChip");
const serviceBalanceChip = document.getElementById("serviceBalanceChip");
const scenarioPlanChip = document.getElementById("scenarioPlanChip");
const scenarioFocusChip = document.getElementById("scenarioFocusChip");

const multiBiodiversityValue = document.getElementById("multiBiodiversityValue");
const multiWaterValue = document.getElementById("multiWaterValue");
const multiCarbonValue = document.getElementById("multiCarbonValue");
const multiLivelihoodValue = document.getElementById("multiLivelihoodValue");
const multiTotalValue = document.getElementById("multiTotalValue");
const multiAreaValue = document.getElementById("multiAreaValue");
const multiStateValue = document.getElementById("multiStateValue");

const hectareFormulaText = document.getElementById("hectareFormulaText");
const perHectareBigValue = document.getElementById("perHectareBigValue");
const currentWetlandPerHectare = document.getElementById("currentWetlandPerHectare");

const netTotalServiceValue = document.getElementById("netTotalServiceValue");
const netManagementCostValue = document.getElementById("netManagementCostValue");
const netProtectionCostValue = document.getElementById("netProtectionCostValue");
const netFinalValueRow = document.getElementById("netFinalValueRow");
const netBigValue = document.getElementById("netBigValue");

const currentBiodiversityBar = document.getElementById("currentBiodiversityBar");
const currentWaterBar = document.getElementById("currentWaterBar");
const currentCarbonBar = document.getElementById("currentCarbonBar");
const currentLivelihoodBar = document.getElementById("currentLivelihoodBar");

const mediaTabs = document.querySelectorAll(".wetland-media-tab");
const mediaWetlandTitle = document.getElementById("mediaWetlandTitle");
const mediaWetlandRegion = document.getElementById("mediaWetlandRegion");
const mediaWetlandFact = document.getElementById("mediaWetlandFact");
const mediaImageOne = document.getElementById("mediaImageOne");
const mediaImageTwo = document.getElementById("mediaImageTwo");
const mediaCaptionOne = document.getElementById("mediaCaptionOne");
const mediaCaptionTwo = document.getElementById("mediaCaptionTwo");
const mediaVideoLink = document.getElementById("mediaVideoLink");
const wetlandMapElement = document.getElementById("wetlandMap");
const mapWetlandButtons = document.querySelectorAll(".map-wetland-button");
const mapSelectedRegion = document.getElementById("mapSelectedRegion");
const mapWetlandTitle = document.getElementById("mapWetlandTitle");
const mapWetlandInfo = document.getElementById("mapWetlandInfo");
const quizHeading = document.getElementById("quizHeading");
const quizQuestionNumber = document.getElementById("quizQuestionNumber");
const quizQuestionText = document.getElementById("quizQuestionText");
const quizOptions = document.getElementById("quizOptions");
const quizProgressLabel = document.getElementById("quizProgressLabel");
const quizStatus = document.getElementById("quizStatus");
const quizBackButton = document.getElementById("quizBackButton");
const quizNextButton = document.getElementById("quizNextButton");
const learnNextButtons = document.querySelectorAll(".learn-next");
const enterMainAppButton = document.getElementById("enterMainAppButton");
const adminRecordCount = document.getElementById("adminRecordCount");
const adminEmptyState = document.getElementById("adminEmptyState");
const adminRecordsTable = document.getElementById("adminRecordsTable");
const clearAdminRecordsButton = document.getElementById("clearAdminRecordsButton");

const SAVED_USER_KEY = "jalvistaar-saved-user";
const QUIZ_RESULTS_KEY = "jalvistaar-admin-records";
const APP_ACCESS_KEY = "jalvistaar-access-state";
const LANGUAGE_STORAGE_KEY = "jalvistaar-language";
const supportedLanguages = ["en", "hi", "mr"];
const languageLocales = {
  en: "en-IN",
  hi: "hi-IN",
  mr: "mr-IN"
};
let currentLanguage = "en";
let currentUserProfile = null;
let quizCurrentIndex = 0;
let quizAnswers = {};
let accessState = {
  quizCompleted: false,
  score: 0,
  needsLearning: false,
  basicsCompleted: false
};

const normalizeLanguage = (language) =>
  supportedLanguages.includes(language) ? language : "en";

const getLocale = () => languageLocales[currentLanguage] || "en-IN";

const wetlands = {
  sundarbans: {
    name: "Sundarbans",
    region: "West Bengal",
    info: "The Sundarbans is the world's largest mangrove wetland. It protects coastal areas, supports biodiversity, stores carbon, and helps fishing communities.",
    area: 135,
    biodiversity: 1840000,
    water: 1575000,
    carbon: 960000,
    livelihood: 1125000,
    management: 420000,
    protection: 180000
  },
  chilika: {
    name: "Chilika Lake",
    region: "Odisha",
    info: "Chilika is India's largest brackish water lagoon. It supports migratory birds, fisheries, tourism, and local livelihoods.",
    area: 150,
    biodiversity: 1760000,
    water: 1680000,
    carbon: 880000,
    livelihood: 1320000,
    management: 390000,
    protection: 160000
  },
  loktak: {
    name: "Loktak Lake",
    region: "Manipur",
    info: "Loktak is famous for its floating phumdis. It supports freshwater biodiversity, fishing, and ecological balance.",
    area: 128,
    biodiversity: 1650000,
    water: 1480000,
    carbon: 910000,
    livelihood: 1180000,
    management: 370000,
    protection: 155000
  },
  wular: {
    name: "Wular Lake",
    region: "Jammu & Kashmir",
    info: "Wular is one of Asia's largest freshwater lakes. It helps in flood control, fisheries, and water balance.",
    area: 145,
    biodiversity: 1590000,
    water: 1710000,
    carbon: 840000,
    livelihood: 1090000,
    management: 360000,
    protection: 150000
  },
  vembanad: {
    name: "Vembanad Lake",
    region: "Kerala",
    info: "Vembanad supports backwater ecosystems, agriculture, transport, biodiversity, and tourism in Kerala.",
    area: 160,
    biodiversity: 1720000,
    water: 1820000,
    carbon: 930000,
    livelihood: 1410000,
    management: 430000,
    protection: 175000
  },
  pulicat: {
    name: "Pulicat Lake",
    region: "Andhra Pradesh / Tamil Nadu",
    info: "Pulicat is an important lagoon wetland known for birds, fishing, and coastal ecological support.",
    area: 142,
    biodiversity: 1540000,
    water: 1490000,
    carbon: 820000,
    livelihood: 1140000,
    management: 340000,
    protection: 145000
  },
  harike: {
    name: "Harike Wetland",
    region: "Punjab",
    info: "Harike is an important northern Indian wetland supporting migratory birds, irrigation, and biodiversity conservation.",
    area: 132,
    biodiversity: 1480000,
    water: 1430000,
    carbon: 780000,
    livelihood: 990000,
    management: 320000,
    protection: 140000
  },
  deepor: {
    name: "Deepor Beel",
    region: "Assam",
    info: "Deepor Beel is a freshwater lake and bird habitat. It also supports flood control and local ecosystem health.",
    area: 118,
    biodiversity: 1390000,
    water: 1370000,
    carbon: 720000,
    livelihood: 950000,
    management: 300000,
    protection: 130000
  },
  "east-kolkata": {
    name: "East Kolkata Wetlands",
    region: "West Bengal",
    info: "East Kolkata Wetlands is known for natural wastewater treatment, fisheries, agriculture, and urban ecological value.",
    area: 125,
    biodiversity: 1520000,
    water: 1900000,
    carbon: 760000,
    livelihood: 1260000,
    management: 350000,
    protection: 150000
  },
  keoladeo: {
    name: "Keoladeo National Park",
    region: "Rajasthan",
    info: "Keoladeo is a famous wetland bird habitat with high ecological value, tourism importance, and conservation significance.",
    area: 115,
    biodiversity: 1610000,
    water: 1320000,
    carbon: 710000,
    livelihood: 980000,
    management: 310000,
    protection: 135000
  }
};

const quizQuestions = [
  {
    id: "q1",
    question: {
      en: "What best describes a wetland?",
      hi: "?????????? ?? ???? ??? ????? ???? ???",
      mr: "???????? ?????? ????? ????? ??????"
    },
    options: [
      { text: { en: "An area where land stays covered or saturated with water for all or part of the year", hi: "??? ??????? ???? ???? ??? ?? ???? ??? ?? ??? ??? ?? ???? ?? ??? ?? ??????? ???? ??", mr: "??? ??????? ???? ???? ?????? ????? ???? ??? ???????? ????????? ????? ???? ?????" }, score: 100 },
      { text: { en: "Any deep river used only for transport", hi: "??? ?? ???? ??? ?? ???? ?????? ?? ??? ????? ???? ??", mr: "???? ??????????? ?????? ?????? ??????? ??? ???" }, score: 20 },
      { text: { en: "A dry forest without water influence", hi: "???? ?? ?????? ?? ???? ???? ????", mr: "?????????? ???????????? ????? ????" }, score: 0 },
      { text: { en: "Only a man-made concrete reservoir", hi: "????? ???? ??????? ??????? ?????", mr: "???? ??????????? ???????? ?????" }, score: 10 }
    ]
  },
  {
    id: "q2",
    question: {
      en: "Why are wetlands important?",
      hi: "????????????? ?????????? ????? ????",
      mr: "?????? ???????????? ?? ?????"
    },
    options: [
      { text: { en: "They support biodiversity, reduce floods, improve water quality, and store carbon", hi: "?? ??? ??????? ?? ?????? ???? ???, ???? ?? ???? ???, ?? ???????? ??????? ??? ?? ?????? ???????? ???? ???", mr: "???? ???????????? ???? ?????, ??? ??? ?????, ???????? ???????? ???????? ??? ?????? ???????" }, score: 100 },
      { text: { en: "They are mainly empty lands with little ecological use", hi: "?? ??????? ???? ???? ??? ????? ??????????? ????? ?? ??", mr: "???? ??????? ???????? ????? ???? ??????? ?????????? ????? ??? ???" }, score: 0 },
      { text: { en: "They are useful only for fishing and nothing else", hi: "?? ???? ???? ?????? ?? ??? ?????? ??? ?? ??? ????", mr: "???? ???? ????????????? ?????? ????" }, score: 40 },
      { text: { en: "They matter only during rainy seasons", hi: "?? ???? ????? ??? ??? ?? ?????????? ???", mr: "???? ???? ??????????? ???????????? ?????" }, score: 20 }
    ]
  },
  {
    id: "q3",
    question: {
      en: "Which of these is a major threat to wetlands?",
      hi: "????? ?? ??? ????????????? ?? ??? ???? ???? ???",
      mr: "?????? ????? ??????????? ???? ???? ????"
    },
    options: [
      { text: { en: "Pollution, encroachment, and unplanned development", hi: "???????, ???????? ?? ?????????? ?????", mr: "???????, ???????? ??? ?????????? ?????" }, score: 100 },
      { text: { en: "Regular scientific conservation work", hi: "?????? ????????? ??????? ?????", mr: "?????? ????????? ??????? ?????" }, score: 0 },
      { text: { en: "Awareness programs in local communities", hi: "??????? ???????? ??? ???????? ?????????", mr: "??????? ???????????? ???????? ?????????" }, score: 10 },
      { text: { en: "Restoration and habitat protection", hi: "??????????? ?? ???? ???????", mr: "??????????????? ??? ?????? ???????" }, score: 0 }
    ]
  }
];

const gatedPages = new Set([
  "contents",
  "dashboard",
  "multi-service",
  "stacked-bar",
  "scenario",
  "per-hectare",
  "net-value",
  "wetland-map",
  "media"
]);

const basicsPages = ["basics-intro", "basics-types", "basics-importance", "basics-threats"];

const wetlandLocations = {
  sundarbans: { lat: 21.9497, lng: 89.1833, zoom: 9 },
  chilika: { lat: 19.7046, lng: 85.3054, zoom: 10 },
  loktak: { lat: 24.5590, lng: 93.7797, zoom: 11 },
  wular: { lat: 34.3312, lng: 74.6174, zoom: 11 },
  vembanad: { lat: 9.5937, lng: 76.4214, zoom: 10 },
  pulicat: { lat: 13.5947, lng: 80.1770, zoom: 10 },
  harike: { lat: 31.1546, lng: 75.2017, zoom: 11 },
  deepor: { lat: 26.1317, lng: 91.6527, zoom: 12 },
  "east-kolkata": { lat: 22.5225, lng: 88.4448, zoom: 12 },
  keoladeo: { lat: 27.1592, lng: 77.5086, zoom: 13 }
};

const commonsImage = (fileName) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=1200`;

const wetlandMedia = {
  sundarbans: {
    image1: commonsImage("Mangrove and river in Sundarbans.JPG"),
    image2: commonsImage("Sundarbans river.jpg"),
    caption1: "Sundarbans mangrove forest and river channel",
    caption2: "Sundarbans river through the mangrove wetland",
    video: "https://www.youtube.com/results?search_query=Sundarbans+wetland+documentary",
    fact: "Largest mangrove wetland in the world, important for coastal protection and biodiversity."
  },
  chilika: {
    image1: commonsImage("Chilika Lake 1.jpg"),
    image2: commonsImage("Birds of Chilika.jpg"),
    caption1: "Chilika Lake lagoon landscape in Odisha",
    caption2: "Migratory birds at Chilika Lake",
    video: "https://www.youtube.com/results?search_query=Chilika+Lake+wetland+documentary",
    fact: "India's largest brackish water lagoon with major fishery and migratory bird importance."
  },
  loktak: {
    image1: commonsImage("The Loktak Lake.jpg"),
    image2: commonsImage("Floating biomasses (\"Phumdi\" or \"Phumthi\" or \"Phum\" in Classical Meitei language) & islands in the Loktak Lake (alias \"Meitei Sea\") - World's only floating lake - in Kangleipak (Manipur) 10.jpg"),
    caption1: "Fisherman among phumdis on Loktak Lake",
    caption2: "Floating phumdi islands on Loktak Lake",
    video: "https://www.youtube.com/results?search_query=Loktak+Lake+wetland+documentary",
    fact: "Known for floating phumdis and unique freshwater ecological importance."
  },
  wular: {
    image1: commonsImage("Wular lake.jpg"),
    image2: commonsImage("Wular Lake 1.jpg"),
    caption1: "Wular Lake freshwater wetland view",
    caption2: "Wular Lake and surrounding hills",
    video: "https://www.youtube.com/results?search_query=Wular+Lake+wetland+documentary",
    fact: "One of Asia's largest freshwater lakes, important for flood control and fisheries."
  },
  vembanad: {
    image1: commonsImage("Kerala backwaters, Vembanad Lake, India.jpg"),
    image2: commonsImage("Houseboat at Vembanad Backwaters.jpg"),
    caption1: "Vembanad Lake backwater wetland",
    caption2: "Houseboat on Vembanad Lake backwaters",
    video: "https://www.youtube.com/results?search_query=Vembanad+Lake+wetland+documentary",
    fact: "A major backwater wetland supporting biodiversity, transport, tourism, and livelihoods."
  },
  pulicat: {
    image1: commonsImage("Pulicat Lake.jpg"),
    image2: commonsImage("Pulicat Lake IMG 20180616 152959213.jpg"),
    caption1: "Pulicat Lake coastal lagoon near Sriharikota",
    caption2: "Pulicat Lake waterbody and wetland edge",
    video: "https://www.youtube.com/results?search_query=Pulicat+Lake+wetland+documentary",
    fact: "An important lagoon wetland known for birds, fishing, and coastal ecological support."
  },
  harike: {
    image1: commonsImage("Harike.jpg"),
    image2: commonsImage("Birds at Harike Wetland.jpg"),
    caption1: "Harike Wetland Ramsar site in Punjab",
    caption2: "Birds flying over Harike Wetland",
    video: "https://www.youtube.com/results?search_query=Harike+Wetland+documentary",
    fact: "A northern Indian wetland important for migratory birds, irrigation, and conservation."
  },
  deepor: {
    image1: commonsImage("Deepor beel.jpg"),
    image2: commonsImage("The Deepor.jpg"),
    caption1: "Deepor Beel freshwater wetland in Assam",
    caption2: "Wide view of Deepor Beel near Guwahati",
    video: "https://www.youtube.com/results?search_query=Deepor+Beel+wetland+documentary",
    fact: "A freshwater wetland supporting birds, flood moderation, and local ecosystem health."
  },
  "east-kolkata": {
    image1: commonsImage("An East Kolkata lake.jpg"),
    image2: commonsImage("Fishing among skycrapers.jpg"),
    caption1: "Lake inside the East Kolkata Wetlands",
    caption2: "Fishing landscape in the East Kolkata Wetlands",
    video: "https://www.youtube.com/results?search_query=East+Kolkata+Wetlands+documentary",
    fact: "Famous for natural wastewater treatment, fisheries, agriculture, and urban ecological value."
  },
  keoladeo: {
    image1: commonsImage("Water Birds.jpg"),
    image2: commonsImage("Keoladeo National Park.jpg"),
    caption1: "Water birds in Keoladeo National Park",
    caption2: "Wetland habitat inside Keoladeo National Park",
    video: "https://www.youtube.com/results?search_query=Keoladeo+National+Park+wetland+documentary",
    fact: "A globally known wetland bird habitat with high tourism and conservation importance."
  }
};

const translations = {
  en: {
    "sidebar.titleSmall": "Navigation",
    "sidebar.title": "App Menu",
    "sidebar.subtitle": "Wetland ecosystem app",
    "sidebar.language": "Choose Language",
    "nav.home": "Home",
    "nav.contents": "Main Sections",
    "nav.dashboard": "Overview",
    "nav.multi": "Wetland Benefits Value",
    "nav.stacked": "Service Chart",
    "nav.scenario": "Plan Comparison",
    "nav.hectare": "Per Hectare Value",
    "nav.net": "Final Value",
    "nav.map": "Wetland Map",
    "nav.media": "Pictures and Videos",
    "nav.admin": "Admin",
    "home.small": "Wetland Intelligence App",
    "home.desc": "This app helps people understand wetland benefits in a simple way. You can compare plans, see values, and study wetland services easily.",
    "home.enter": "Enter App",
    "home.gallery1": "Wetland water",
    "home.gallery2": "Mangrove area",
    "home.gallery3": "Bird habitat",
    "contents.small": "Contents",
    "contents.title": "Main Sections",
    "contents.cardDashboardTitle": "Overview",
    "contents.cardDashboardDesc": "Quick summary of the app",
    "contents.card1Title": "Wetland Benefits Value",
    "contents.card1Desc": "Total value of different wetland benefits",
    "contents.card2Title": "Service Chart",
    "contents.card2Desc": "See how each service contributes",
    "contents.card3Title": "Plan Comparison",
    "contents.card3Desc": "Compare different wetland plans",
    "contents.card4Title": "Per Hectare Value",
    "contents.card4Desc": "Value for one hectare area",
    "contents.card5Title": "Final Value",
    "contents.card5Desc": "Value after cost deduction",
    "contents.card6Title": "Pictures and Videos",
    "contents.card6Desc": "Wetland gallery and YouTube links",
    "contents.card7Title": "Wetland Map",
    "contents.card7Desc": "Locate each wetland on an interactive map",
    "dashboard.title": "Overview",
    "dashboard.subtitle": "Simple summary of wetland data",
    "dashboard.wetlandLabel": "Choose Indian Wetland",
    "dashboard.infoSmall": "Wetland Info",
    "dashboard.calcSmall": "Live Input Calculator",
    "dashboard.calcTitle": "Enter Wetland Values",
    "dashboard.calcStatus": "Real-time Output",
    "dashboard.metric1": "Total Wetland Value",
    "dashboard.metric1Desc": "Combined ecosystem service value",
    "dashboard.metric2": "Per Hectare Value",
    "dashboard.metric2Desc": "Value for each hectare of wetland",
    "dashboard.metric3": "Net Value",
    "dashboard.metric3Desc": "After management and protection costs",
    "dashboard.inputArea": "Wetland Area (ha)",
    "dashboard.inputBio": "Biodiversity Value (?)",
    "dashboard.inputWater": "Water Value (?)",
    "dashboard.inputCarbon": "Carbon Value (?)",
    "dashboard.inputLive": "Livelihood Value (?)",
    "dashboard.inputMgmt": "Management Cost (?)",
    "dashboard.inputProtect": "Protection Cost (?)",
    "multi.small": "Module 01",
    "multi.title": "Wetland Benefits Value",
    "multi.cardTitle": "Benefit values",
    "multi.row1": "Biodiversity support",
    "multi.row2": "Water cleaning",
    "multi.row3": "Carbon storage",
    "multi.row4": "Livelihood support",
    "multi.totalTitle": "Total wetland value",
    "multi.totalDesc": "Estimated yearly value of all wetland benefits",
    "multi.stat1": "Wetland type",
    "multi.stat1Value": "Floodplain wetland",
    "multi.stat2": "State",
    "multi.stat3": "Area used",
    "stacked.small": "Module 02",
    "stacked.title": "Service Chart",
    "stacked.cardTitle": "Current wetland service chart",
    "stacked.scenarioLabel": "Plan",
    "stacked.benchmarkTitle": "Easy reading",
    "stacked.bench1": "Most water value",
    "stacked.bench1Value": "Restored plan",
    "stacked.bench2": "Highest custom share",
    "services.bio": "Biodiversity",
    "services.water": "Water",
    "services.carbon": "Carbon",
    "services.live": "Livelihood",
    "chart.current": "Current Wetland",
    "chart.restored": "Restored",
    "chart.mangrove": "Mangrove",
    "chart.custom": "Custom",
    "scenario.small": "Module 03",
    "scenario.title": "Plan Comparison",
    "scenario.cardTitle": "Choose a plan",
    "scenario.btn1": "Current Wetland",
    "scenario.btn2": "Restored Marsh",
    "scenario.btn3": "Mangrove Shield",
    "scenario.out1": "Wetland area",
    "scenario.out2": "Net value",
    "scenario.out3": "Per hectare value",
    "scenario.infoTitle": "Plan information",
    "scenario.info1": "Region",
    "scenario.info1Value": "Sundarbans belt",
    "scenario.info2": "Focus",
    "scenario.info2Value": "Resilience and services",
    "hectare.small": "Module 04",
    "hectare.title": "Per Hectare Value",
    "hectare.formulaTitle": "Simple formula",
    "hectare.formula": "Per-hectare value = Total ecosystem value / Wetland area",
    "hectare.refTitle": "Reference value",
    "hectare.refDesc": "Simple value for comparing sites",
    "hectare.row1": "Current wetland",
    "hectare.row2": "Restored marsh",
    "hectare.row3": "Mangrove shield",
    "net.small": "Module 05",
    "net.title": "Final Value",
    "net.cardTitle": "Value after costs",
    "net.row1": "Total wetland value",
    "net.row2": "Management cost",
    "net.row3": "Protection cost",
    "net.row4": "Final value",
    "net.finalTitle": "Final result",
    "net.finalDesc": "Wetland value after subtracting costs",
    "net.info1": "Site model",
    "net.info1Value": "Coastal wetland",
    "net.info2": "Report unit",
    "net.info2Value": "Yearly estimate",
    "net.info3": "Use",
    "net.info3Value": "Restoration planning",
    "media.small": "Module 06",
    "media.title": "Pictures and Videos",
    "media.headerSmall": "Wetland Gallery",
    "media.headerTitle": "Select an Indian Wetland",
    "media.headerTag": "Images + Video",
    "media.selectedSmall": "Selected Wetland",
    "media.videoButton": "Watch YouTube Video",
    "map.small": "Module 07",
    "map.title": "Wetland Map",
    "map.headerSmall": "Interactive Location Map",
    "map.headerTitle": "Click a wetland to zoom in",
    "map.selectedSmall": "Selected Wetland",
    "login.small": "Secure Access",
    "login.title": "Sign In to JalVistaar",
    "login.desc": "Enter your details below.",
    "login.name": "Full Name",
    "login.email": "Email Address",
    "login.password": "Password",
    "login.language": "Preferred Language",
    "login.college": "College / University",
    "login.degree": "Degree",
    "login.degreePlaceholder": "B.Tech / B.Sc / M.Tech",
    "login.year": "Year of Study",
    "login.yearSelect": "Select year",
    "login.year1": "1st Year",
    "login.year2": "2nd Year",
    "login.year3": "3rd Year",
    "login.year4": "4th Year",
    "login.year5": "Postgraduate",
    "login.specialization": "Specialization / Branch",
    "login.specializationPlaceholder": "Environmental Engineering",
    "login.note": "Your profile details will be stored in this browser.",
    "login.submit": "Sign In",
    "signinChoice.small": "Welcome Back",
    "signinChoice.title": "Choose how to continue",
    "signinChoice.desc": "Use your previous details or sign in as a new user.",
    "signinChoice.previous": "Sign In as Previous User",
    "signinChoice.new": "New Sign In",
    "profile.small": "Profile",
    "profile.title": "Your Details",
    "profile.name": "Name",
    "profile.email": "Email",
    "profile.college": "College",
    "profile.degree": "Degree",
    "profile.year": "Year",
    "profile.specialization": "Specialization",
    "profile.logout": "Logout",
    "profile.defaultName": "User Profile",
    "profile.defaultEmail": "Tap to view details",
    "common.back": "Back",
    "common.cancel": "Cancel",
    "common.close": "Close",
    "messages.fillAll": "Please fill all sign in and education fields.",
    "messages.success": "Sign in successful.",
    "messages.previousMissing": "No previous user found. Please sign in as a new user.",
    "messages.previousSummary": "Previous user: {name} ({email})",
    "quiz.small": "Onboarding Quiz",
    "quiz.title": "Test Your Wetland Awareness",
    "quiz.headerSmall": "3 Quick Questions",
    "quiz.headerTitle": "Answer all questions to continue",
    "quiz.note": "Choose one option for each question.",
    "quiz.back": "Previous",
    "quiz.next": "Next",
    "quiz.submit": "Submit Quiz",
    "quiz.completeAll": "Please answer this question before continuing.",
    "quiz.pass": "Great. You can now enter the main app directly.",
    "quiz.learn": "You will first go through a short learning path before entering the app.",
    "learn.small": "Learning Path",
    "learn.title": "Wetland Basics",
    "learn.page1Small": "Basics 1",
    "learn.page1Title": "What are wetlands?",
    "learn.page1Text": "Wetlands are areas where land is covered by water for all or part of the year. They connect land and water systems and may be freshwater, brackish, or saline.",
    "learn.page1Point1": "They may be permanently or seasonally waterlogged.",
    "learn.page1Point2": "Wetlands include marshes, swamps, mangroves, floodplains, lakesides, and lagoons.",
    "learn.page1Point3": "They support both aquatic and land-based life forms.",
    "learn.page2Small": "Basics 2",
    "learn.page2Title": "Types of wetlands",
    "learn.page2Text": "Different wetland types perform different ecological roles depending on water depth, salinity, vegetation, and geography.",
    "learn.page2Type1Title": "Marshes",
    "learn.page2Type1Text": "Shallow wetlands with grasses and reeds.",
    "learn.page2Type2Title": "Swamps",
    "learn.page2Type2Text": "Wetlands dominated by trees and shrubs.",
    "learn.page2Type3Title": "Mangroves",
    "learn.page2Type3Text": "Coastal wetlands with salt-tolerant vegetation.",
    "learn.page2Type4Title": "Lagoons and lakesides",
    "learn.page2Type4Text": "Water-rich zones that support birds, fish, and aquatic life.",
    "learn.page3Small": "Basics 3",
    "learn.page3Title": "Why wetlands are important",
    "learn.page3Text": "Wetlands provide ecological, social, and economic benefits and are among the most productive ecosystems in the world.",
    "learn.page3Point1": "They reduce floods by storing excess water.",
    "learn.page3Point2": "They improve water quality by trapping sediments and pollutants.",
    "learn.page3Point3": "They support biodiversity including fish, birds, and plants.",
    "learn.page3Point4": "They store carbon and help regulate climate.",
    "learn.page3Point5": "They support fisheries, tourism, and local livelihoods.",
    "learn.page4Small": "Basics 4",
    "learn.page4Title": "Threats and conservation",
    "learn.page4Text": "Wetlands are under pressure from many human and environmental threats, so conservation is essential.",
    "learn.page4Threat1Title": "Pollution",
    "learn.page4Threat1Text": "Industrial waste, sewage, and plastic damage water quality.",
    "learn.page4Threat2Title": "Encroachment",
    "learn.page4Threat2Text": "Construction and land conversion shrink wetland area.",
    "learn.page4Threat3Title": "Climate change",
    "learn.page4Threat3Text": "Changing rainfall and temperature disturb wetland balance.",
    "learn.page4Threat4Title": "Conservation",
    "learn.page4Threat4Text": "Protection, restoration, awareness, and better planning are necessary.",
    "learn.page4Note": "Now that you know the basics, you can continue to the full JalVistaar app.",
    "learn.back": "Previous",
    "learn.next": "Next",
    "learn.enterApp": "Continue to App",
    "admin.small": "Admin View",
    "admin.title": "Quiz Records",
    "admin.headerSmall": "Stored Responses",
    "admin.headerTitle": "User quiz attempts and access path",
    "admin.empty": "No quiz attempts have been recorded yet."
  },
  hi: {
    "sidebar.titleSmall": "????????",
    "sidebar.title": "?? ????",
    "sidebar.subtitle": "?????????? ????????? ??",
    "sidebar.language": "???? ?????",
    "nav.home": "???",
    "nav.contents": "????? ??????",
    "nav.dashboard": "???????",
    "nav.multi": "?????????? ??? ?????",
    "nav.stacked": "???? ?????",
    "nav.scenario": "????? ?????",
    "nav.hectare": "????? ???????? ?????",
    "nav.net": "????? ?????",
    "nav.map": "?????????? ????????",
    "nav.media": "???????? ?? ??????",
    "home.small": "?????????? ?????????? ??",
    "home.desc": "?? ?? ????? ?? ?????????? ?? ??? ??? ????? ?? ????? ??? ??? ???? ??? ?? ??????? ?? ????? ?? ???? ???, ????? ??? ???? ??? ?? ?????????? ?????? ?? ?????? ?? ???? ????",
    "home.enter": "?? ??? ?????? ????",
    "home.gallery1": "?????????? ??",
    "home.gallery2": "???????? ???????",
    "home.gallery3": "????? ????",
    "contents.small": "à¤¸à¤¾à¤®à¤—à¥à¤°à¥€",
    "contents.title": "????? ??????",
    "contents.cardDashboardTitle": "???????",
    "contents.cardDashboardDesc": "?? ?? ?????? ??????",
    "contents.card1Title": "?????????? ??? ?????",
    "contents.card1Desc": "??????? ?????????? ????? ?? ??? ?????",
    "contents.card2Title": "???? ?????",
    "contents.card2Desc": "????? ?? ???????? ???? ????? ?????? ???? ??",
    "contents.card3Title": "????? ?????",
    "contents.card3Desc": "??????? ?????????? ??????? ?? ????? ????",
    "contents.card4Title": "????? ???????? ?????",
    "contents.card4Desc": "?? ???????? ??????? ?? ?????",
    "contents.card5Title": "????? ?????",
    "contents.card5Desc": "???? ????? ?? ??? ?? ?????",
    "contents.card6Title": "???????? ?? ??????",
    "contents.card6Desc": "?????????? ????? ?? ??????? ????",
    "contents.card7Title": "?????????? ????????",
    "contents.card7Desc": "?????????? ???????? ?? ???????? ?????????? ?????",
    "dashboard.title": "???????",
    "dashboard.subtitle": "?????????? ???? ?? ??? ??????",
    "dashboard.wetlandLabel": "?????? ?????????? ?????",
    "dashboard.infoSmall": "?????????? ???????",
    "dashboard.calcSmall": "???? ????? ?????????",
    "dashboard.calcTitle": "?????????? ??? ???? ????",
    "dashboard.calcStatus": "????-???? ??????",
    "dashboard.metric1": "??? ?????????? ?????",
    "dashboard.metric1Desc": "????????? ?????? ?? ??????? ?????",
    "dashboard.metric2": "????? ???????? ?????",
    "dashboard.metric2Desc": "?????????? ?? ???????? ???????? ?? ?????",
    "dashboard.metric3": "????? ?????",
    "dashboard.metric3Desc": "??????? ?? ??????? ???? ?? ???",
    "dashboard.inputArea": "?????????? ??????? (????????)",
    "dashboard.inputBio": "??? ??????? ????? (?)",
    "dashboard.inputWater": "?? ????? (?)",
    "dashboard.inputCarbon": "?????? ????? (?)",
    "dashboard.inputLive": "??????? ????? (?)",
    "dashboard.inputMgmt": "??????? ???? (?)",
    "dashboard.inputProtect": "??????? ???? (?)",
    "multi.small": "??????? 01",
    "multi.title": "?????????? ??? ?????",
    "multi.cardTitle": "à¤²à¤¾à¤­ à¤®à¤¾à¤¨",
    "multi.row1": "à¤œà¥ˆà¤µ à¤µà¤¿à¤µà¤¿à¤§à¤¤à¤¾ à¤¸à¤®à¤°à¥à¤¥à¤¨",
    "multi.row2": "?? ?????????",
    "multi.row3": "?????? ??????",
    "multi.row4": "??????? ??????",
    "multi.totalTitle": "??? ?????????? ?????",
    "multi.totalDesc": "??? ?????????? ????? ?? ???????? ??????? ?????",
    "multi.stat1": "?????????? ??????",
    "multi.stat1Value": "???????? ??????????",
    "multi.stat2": "à¤°à¤¾à¤œà¥à¤¯",
    "multi.stat3": "????? ???????",
    "stacked.small": "??????? 02",
    "stacked.title": "???? ?????",
    "stacked.cardTitle": "??????? ?????????? ???? ?????",
    "stacked.scenarioLabel": "?????",
    "stacked.benchmarkTitle": "à¤¸à¤°à¤² à¤ªà¤¢à¤¼à¤¾à¤ˆ",
    "stacked.bench1": "???? ???? ?? ?????",
    "stacked.bench1Value": "???????????? ?????",
    "stacked.bench2": "???? ???? ??????? ??????",
    "services.bio": "à¤œà¥ˆà¤µ à¤µà¤¿à¤µà¤¿à¤§à¤¤à¤¾",
    "services.water": "à¤œà¤²",
    "services.carbon": "??????",
    "services.live": "???????",
    "chart.current": "??????? ??????????",
    "chart.restored": "à¤ªà¥à¤¨à¤°à¥à¤¸à¥à¤¥à¤¾à¤ªà¤¿à¤¤",
    "chart.mangrove": "????????",
    "chart.custom": "?????",
    "scenario.small": "??????? 03",
    "scenario.title": "????? ?????",
    "scenario.cardTitle": "?? ????? ?????",
    "scenario.btn1": "??????? ??????????",
    "scenario.btn2": "à¤ªà¥à¤¨à¤°à¥à¤¸à¥à¤¥à¤¾à¤ªà¤¿à¤¤ à¤¦à¤²à¤¦à¤²",
    "scenario.btn3": "???????? ?????",
    "scenario.out1": "?????????? ???????",
    "scenario.out2": "????? ?????",
    "scenario.out3": "????? ???????? ?????",
    "scenario.infoTitle": "????? ???????",
    "scenario.info1": "???????",
    "scenario.info1Value": "??????? ???????",
    "scenario.info2": "???????????",
    "scenario.info2Value": "??????? ?? ??????",
    "hectare.small": "??????? 04",
    "hectare.title": "????? ???????? ?????",
    "hectare.formulaTitle": "??? ?????",
    "hectare.formula": "????? ???????? ????? = ??? ????????? ????? / ?????????? ???????",
    "hectare.refTitle": "?????? ?????",
    "hectare.refDesc": "?????? ?? ????? ?? ??? ??? ???",
    "hectare.row1": "??????? ??????????",
    "hectare.row2": "à¤ªà¥à¤¨à¤°à¥à¤¸à¥à¤¥à¤¾à¤ªà¤¿à¤¤ à¤¦à¤²à¤¦à¤²",
    "hectare.row3": "???????? ?????",
    "net.small": "??????? 05",
    "net.title": "????? ?????",
    "net.cardTitle": "???? ?? ??? ?????",
    "net.row1": "??? ?????????? ?????",
    "net.row2": "??????? ????",
    "net.row3": "??????? ????",
    "net.row4": "????? ?????",
    "net.finalTitle": "????? ??????",
    "net.finalDesc": "???? ????? ?? ??? ?? ?????????? ?????",
    "net.info1": "???? ????",
    "net.info1Value": "???? ??????????",
    "net.info2": "??????? ????",
    "net.info2Value": "??????? ??????",
    "net.info3": "?????",
    "net.info3Value": "??????????? ?????",
    "media.small": "??????? 06",
    "media.title": "???????? ?? ??????",
    "media.headerSmall": "?????????? ?????",
    "media.headerTitle": "?? ?????? ?????????? ?????",
    "media.headerTag": "????? + ??????",
    "media.selectedSmall": "????? ??????????",
    "media.videoButton": "??????? ?????? ?????",
    "map.small": "??????? 07",
    "map.title": "?????????? ????????",
    "map.headerSmall": "?????????? ?????? ????????",
    "map.headerTitle": "???? ???? ?? ??? ?????????? ?? ????? ????",
    "map.selectedSmall": "????? ??????????",
    "login.small": "???????? ??????",
    "login.title": "JalVistaar ??? ???? ?? ????",
    "login.desc": "???? ????? ???? ???? ?????",
    "login.name": "???? ???",
    "login.email": "???? ???",
    "login.password": "à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡",
    "login.college": "????? / ?????????????",
    "login.degree": "à¤¡à¤¿à¤—à¥à¤°à¥€",
    "login.degreePlaceholder": "??.??? / ??.???? / ??.???",
    "login.year": "?????? ?? ????",
    "login.yearSelect": "???? ?????",
    "login.year1": "à¤ªà¤¹à¤²à¤¾ à¤µà¤°à¥à¤·",
    "login.year2": "????? ????",
    "login.year3": "à¤¤à¥€à¤¸à¤°à¤¾ à¤µà¤°à¥à¤·",
    "login.year4": "à¤šà¥Œà¤¥à¤¾ à¤µà¤°à¥à¤·",
    "login.year5": "???????????",
    "login.specialization": "?????????? / ????",
    "login.specializationPlaceholder": "???????? ????????????",
    "login.note": "???? ????????? ??????? ?? ???????? ??? ????? ??????",
    "login.submit": "???? ??",
    "signinChoice.small": "??? ?? ?????? ??",
    "signinChoice.title": "???? ???? ?? ????? ?????",
    "signinChoice.desc": "???? ????? ????? ????? ???? ?? ?? ?????????? ?? ??? ??? ???? ?? ?????",
    "signinChoice.previous": "????? ?????????? ?? ??? ??? ???? ?? ????",
    "signinChoice.new": "??? ???? ??",
    "profile.small": "?????????",
    "profile.title": "???? ?????",
    "profile.name": "à¤¨à¤¾à¤®",
    "profile.email": "????",
    "profile.college": "?????",
    "profile.degree": "à¤¡à¤¿à¤—à¥à¤°à¥€",
    "profile.year": "à¤µà¤°à¥à¤·",
    "profile.specialization": "??????????",
    "profile.logout": "??????",
    "profile.defaultName": "????? ?????????",
    "profile.defaultEmail": "????? ????? ?? ??? ??? ????",
    "common.back": "à¤µà¤¾à¤ªà¤¸",
    "common.cancel": "???? ????",
    "common.close": "??? ????",
    "messages.fillAll": "????? ??? ???? ?? ?? ???????? ?????? ?????",
    "messages.success": "???? ?? ??? ????",
    "messages.previousMissing": "??? ????? ?????????? ???? ????? ????? ?? ?????????? ?? ??? ??? ???? ?? ?????",
    "messages.previousSummary": "????? ??????????: {name} ({email})"
  },
  mr: {
    "sidebar.titleSmall": "??????????",
    "sidebar.title": "?? ????",
    "sidebar.subtitle": "?????? ????????? ??",
    "sidebar.language": "à¤­à¤¾à¤·à¤¾ à¤¨à¤¿à¤µà¤¡à¤¾",
    "nav.home": "à¤®à¥à¤–à¥à¤¯à¤ªà¥ƒà¤·à¥à¤ ",
    "nav.contents": "à¤®à¥à¤–à¥à¤¯ à¤µà¤¿à¤­à¤¾à¤—",
    "nav.dashboard": "?????",
    "nav.multi": "?????? ??? ?????",
    "nav.stacked": "???? ?????",
    "nav.scenario": "????? ?????",
    "nav.hectare": "????? ?????? ?????",
    "nav.net": "????? ?????",
    "nav.map": "?????? ?????",
    "nav.media": "?????? ??? ???????",
    "home.small": "?????? ?????????? ??",
    "home.desc": "?? ?? ??????? ???????? ????? ?????? ???????? ????? ??????? ??? ????. ?????? ????? ????? ??? ????, ????? ???? ???? ??? ?????? ??????? ?????? ??? ????.",
    "home.enter": "??????? ?????? ???",
    "home.gallery1": "?????? ????",
    "home.gallery2": "??????????? ???????",
    "home.gallery3": "????? ??????",
    "contents.small": "à¤¸à¤¾à¤®à¤—à¥à¤°à¥€",
    "contents.title": "à¤®à¥à¤–à¥à¤¯ à¤µà¤¿à¤­à¤¾à¤—",
    "contents.cardDashboardTitle": "?????",
    "contents.cardDashboardDesc": "???? ???? ??????",
    "contents.card1Title": "?????? ??? ?????",
    "contents.card1Desc": "????? ?????? ??????? ???? ?????",
    "contents.card2Title": "???? ?????",
    "contents.card2Desc": "???????? ???????? ???? ?????? ???? ?? ???",
    "contents.card3Title": "????? ?????",
    "contents.card3Desc": "????? ?????? ???????? ????? ???",
    "contents.card4Title": "????? ?????? ?????",
    "contents.card4Desc": "??? ?????? ?????????? ?????",
    "contents.card5Title": "????? ?????",
    "contents.card5Desc": "???? ??? ???????????? ?????",
    "contents.card6Title": "?????? ??? ???????",
    "contents.card6Desc": "?????? ????? ??? ??????? ????",
    "contents.card7Title": "?????? ?????",
    "contents.card7Desc": "?????????? ??????? ???????? ?????? ????",
    "dashboard.title": "?????",
    "dashboard.subtitle": "?????? ?????? ???? ??????",
    "dashboard.wetlandLabel": "?????? ?????? ?????",
    "dashboard.infoSmall": "?????? ??????",
    "dashboard.calcSmall": "?????? ????? ????????????",
    "dashboard.calcTitle": "?????? ?????? ???",
    "dashboard.calcStatus": "????-???? ??????",
    "dashboard.metric1": "???? ?????? ?????",
    "dashboard.metric1Desc": "????????? ??????? ??????? ?????",
    "dashboard.metric2": "????? ?????? ?????",
    "dashboard.metric2Desc": "?????????? ???????? ???????? ?????",
    "dashboard.metric3": "?????? ?????",
    "dashboard.metric3Desc": "?????????? ??? ??????? ?????????",
    "dashboard.inputArea": "?????? ??????? (??????)",
    "dashboard.inputBio": "?????????? ????? (?)",
    "dashboard.inputWater": "???? ????? (?)",
    "dashboard.inputCarbon": "?????? ????? (?)",
    "dashboard.inputLive": "???????? ????? (?)",
    "dashboard.inputMgmt": "?????????? ???? (?)",
    "dashboard.inputProtect": "??????? ???? (?)",
    "multi.small": "??????? 01",
    "multi.title": "?????? ??? ?????",
    "multi.cardTitle": "??? ??????",
    "multi.row1": "à¤œà¥ˆà¤µà¤µà¤¿à¤µà¤¿à¤§à¤¤à¤¾ à¤¸à¤®à¤°à¥à¤¥à¤¨",
    "multi.row2": "???? ?????????",
    "multi.row3": "?????? ?????",
    "multi.row4": "???????? ??????",
    "multi.totalTitle": "???? ?????? ?????",
    "multi.totalDesc": "???? ?????? ??????? ?????? ??????? ?????",
    "multi.stat1": "?????? ??????",
    "multi.stat1Value": "?????????? ??????",
    "multi.stat2": "à¤°à¤¾à¤œà¥à¤¯",
    "multi.stat3": "???????? ???????",
    "stacked.small": "??????? 02",
    "stacked.title": "???? ?????",
    "stacked.cardTitle": "??????? ?????? ???? ?????",
    "stacked.scenarioLabel": "?????",
    "stacked.benchmarkTitle": "???? ????",
    "stacked.bench1": "???????? ???? ?????",
    "stacked.bench1Value": "??????????? ?????",
    "stacked.bench2": "???????? ???? ??????",
    "services.bio": "à¤œà¥ˆà¤µà¤µà¤¿à¤µà¤¿à¤§à¤¤à¤¾",
    "services.water": "à¤ªà¤¾à¤£à¥€",
    "services.carbon": "??????",
    "services.live": "????????",
    "chart.current": "??????? ??????",
    "chart.restored": "???????????",
    "chart.mangrove": "???????????",
    "chart.custom": "?????",
    "scenario.small": "??????? 03",
    "scenario.title": "????? ?????",
    "scenario.cardTitle": "????? ?????",
    "scenario.btn1": "??????? ??????",
    "scenario.btn2": "??????????? ????",
    "scenario.btn3": "??????????? ?????",
    "scenario.out1": "?????? ???????",
    "scenario.out2": "?????? ?????",
    "scenario.out3": "????? ?????? ?????",
    "scenario.infoTitle": "????? ??????",
    "scenario.info1": "??????",
    "scenario.info1Value": "??????? ?????",
    "scenario.info2": "???????????",
    "scenario.info2Value": "??????? ??? ????",
    "hectare.small": "??????? 04",
    "hectare.title": "????? ?????? ?????",
    "hectare.formulaTitle": "???? ?????",
    "hectare.formula": "????? ?????? ????? = ???? ????????? ????? / ?????? ???????",
    "hectare.refTitle": "?????? ?????",
    "hectare.refDesc": "???? ????? ?????????? ???? ?????",
    "hectare.row1": "??????? ??????",
    "hectare.row2": "??????????? ????",
    "hectare.row3": "??????????? ?????",
    "net.small": "??????? 05",
    "net.title": "????? ?????",
    "net.cardTitle": "??????????? ?????",
    "net.row1": "???? ?????? ?????",
    "net.row2": "à¤µà¥à¤¯à¤µà¤¸à¥à¤¥à¤¾à¤ªà¤¨ à¤–à¤°à¥à¤š",
    "net.row3": "??????? ????",
    "net.row4": "????? ?????",
    "net.finalTitle": "????? ?????",
    "net.finalDesc": "???? ??? ???????????? ?????? ?????",
    "net.info1": "???? ?????",
    "net.info1Value": "???? ??????",
    "net.info2": "????? ???",
    "net.info2Value": "??????? ?????",
    "net.info3": "à¤µà¤¾à¤ªà¤°",
    "net.info3Value": "??????????? ?????",
    "media.small": "??????? 06",
    "media.title": "?????? ??? ???????",
    "media.headerSmall": "?????? ?????",
    "media.headerTitle": "?????? ?????? ?????",
    "media.headerTag": "?????? + ???????",
    "media.selectedSmall": "???????? ??????",
    "media.videoButton": "??????? ??????? ???",
    "map.small": "??????? 07",
    "map.title": "?????? ?????",
    "map.headerSmall": "?????????? ?????? ?????",
    "map.headerTitle": "??? ?????????? ???????? ????? ???",
    "map.selectedSmall": "???????? ??????",
    "login.small": "???????? ??????",
    "login.title": "JalVistaar ????? ???? ?? ???",
    "login.desc": "à¤¤à¥à¤®à¤šà¥€ à¤®à¤¾à¤¹à¤¿à¤¤à¥€ à¤–à¤¾à¤²à¥€ à¤­à¤°à¤¾.",
    "login.name": "????? ???",
    "login.email": "???? ?????",
    "login.password": "à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡",
    "login.college": "????? / ?????????",
    "login.degree": "à¤ªà¤¦à¤µà¥€",
    "login.degreePlaceholder": "??.??? / ??.???? / ??.???",
    "login.year": "????????? ????",
    "login.yearSelect": "à¤µà¤°à¥à¤· à¤¨à¤¿à¤µà¤¡à¤¾",
    "login.year1": "????? ????",
    "login.year2": "????? ????",
    "login.year3": "????? ????",
    "login.year4": "???? ????",
    "login.year5": "à¤ªà¤¦à¤µà¥à¤¯à¥à¤¤à¥à¤¤à¤°",
    "login.specialization": "??????? / ????",
    "login.specializationPlaceholder": "???????? ????????????",
    "login.note": "????? ???????? ?????? ?? ???????????? ??? ???? ????.",
    "login.submit": "???? ??",
    "signinChoice.small": "à¤ªà¥à¤¨à¥à¤¹à¤¾ à¤¸à¥à¤µà¤¾à¤—à¤¤",
    "signinChoice.title": "???? ??? ????? ?? ?????",
    "signinChoice.desc": "????? ????? ?????? ????? ????? ???? ?????????????????? ???? ?? ???.",
    "signinChoice.previous": "????? ?????????????????? ???? ?? ???",
    "signinChoice.new": "???? ???? ??",
    "profile.small": "????????",
    "profile.title": "à¤¤à¥à¤®à¤šà¥€ à¤®à¤¾à¤¹à¤¿à¤¤à¥€",
    "profile.name": "à¤¨à¤¾à¤µ",
    "profile.email": "????",
    "profile.college": "?????",
    "profile.degree": "à¤ªà¤¦à¤µà¥€",
    "profile.year": "à¤µà¤°à¥à¤·",
    "profile.specialization": "???????",
    "profile.logout": "??????",
    "profile.defaultName": "????????? ????????",
    "profile.defaultEmail": "????? ??????????? ??? ???",
    "common.back": "????",
    "common.cancel": "???? ???",
    "common.close": "??? ???",
    "messages.fillAll": "????? ???? ???? ?? ??? ???????? ????? ???.",
    "messages.success": "???? ?? ?????? ????.",
    "messages.previousMissing": "????? ????????? ????? ????. ????? ???? ????????? ?????? ???? ?? ???.",
    "messages.previousSummary": "????? ?????????: {name} ({email})"
  }
};

Object.assign(translations.en, {
  "common.areaUnit": "ha",
  "common.perHectareUnit": "ha",
  "common.imageAlt": "{name} image {index}",
  "dashboard.hectareFormula": "{total} / {area} = {perHectare} per hectare",
  "dashboard.inputBio": "Biodiversity Value (₹)",
  "dashboard.inputWater": "Water Value (₹)",
  "dashboard.inputCarbon": "Carbon Value (₹)",
  "dashboard.inputLive": "Livelihood Value (₹)",
  "dashboard.inputMgmt": "Management Cost (₹)",
  "dashboard.inputProtect": "Protection Cost (₹)",
  "insight.topService": "Top service: {service}",
  "insight.coverage": "Coverage: {area}",
  "insight.netStrong": "Net outlook: Strong positive",
  "insight.netCareful": "Net outlook: Cost-sensitive",
  "insight.highestShare": "Highest share: {service}",
  "insight.balanceDiverse": "Balance: Services are diversified",
  "insight.balanceFocused": "Balance: One service is leading",
  "insight.activePlan": "Active plan: {plan}",
  "insight.focus": "Focus: {focus}",
  "insight.focusCurrent": "Resilience and services",
  "insight.focusRestored": "Restoration and habitat gains",
  "insight.focusMangrove": "Carbon and coastal shield",
  "admin.recordCount": "{count} records",
  "admin.recordCountOne": "{count} record",
  "admin.user": "User",
  "admin.lang": "Lang",
  "admin.answers": "Answers",
  "admin.score": "Score",
  "admin.path": "Path",
  "admin.time": "Time",
  "admin.clear": "Clear Records",
  "admin.pathDirect": "Direct App Access",
  "admin.pathBasics": "Basics First"
});

Object.assign(translations.hi, {
  "common.areaUnit": "हेक्टेयर",
  "common.perHectareUnit": "हेक्टेयर",
  "common.imageAlt": "{name} चित्र {index}",
  "dashboard.hectareFormula": "{total} / {area} = {perHectare} प्रति हेक्टेयर",
  "dashboard.inputBio": "जैव विविधता मूल्य (₹)",
  "dashboard.inputWater": "जल मूल्य (₹)",
  "dashboard.inputCarbon": "कार्बन मूल्य (₹)",
  "dashboard.inputLive": "आजीविका मूल्य (₹)",
  "dashboard.inputMgmt": "प्रबंधन लागत (₹)",
  "dashboard.inputProtect": "संरक्षण लागत (₹)",
  "insight.topService": "मुख्य सेवा: {service}",
  "insight.coverage": "क्षेत्र: {area}",
  "insight.netStrong": "शुद्ध स्थिति: मजबूत सकारात्मक",
  "insight.netCareful": "शुद्ध स्थिति: लागत-संवेदनशील",
  "insight.highestShare": "सर्वाधिक हिस्सा: {service}",
  "insight.balanceDiverse": "संतुलन: सेवाएँ विविध हैं",
  "insight.balanceFocused": "संतुलन: एक सेवा आगे है",
  "insight.activePlan": "सक्रिय योजना: {plan}",
  "insight.focus": "केंद्र: {focus}",
  "insight.focusCurrent": "लचीलापन और सेवाएँ",
  "insight.focusRestored": "पुनर्स्थापन और आवास लाभ",
  "insight.focusMangrove": "कार्बन और तटीय सुरक्षा",
  "admin.recordCount": "{count} रिकॉर्ड",
  "admin.recordCountOne": "{count} रिकॉर्ड",
  "admin.user": "उपयोगकर्ता",
  "admin.lang": "भाषा",
  "admin.answers": "उत्तर",
  "admin.score": "स्कोर",
  "admin.path": "पथ",
  "admin.time": "समय",
  "admin.clear": "रिकॉर्ड साफ करें",
  "admin.pathDirect": "सीधा ऐप प्रवेश",
  "admin.pathBasics": "पहले मूल बातें"
});

Object.assign(translations.mr, {
  "common.areaUnit": "हेक्टर",
  "common.perHectareUnit": "हेक्टर",
  "common.imageAlt": "{name} प्रतिमा {index}",
  "dashboard.hectareFormula": "{total} / {area} = {perHectare} प्रति हेक्टर",
  "dashboard.inputBio": "जैवविविधता मूल्य (₹)",
  "dashboard.inputWater": "पाणी मूल्य (₹)",
  "dashboard.inputCarbon": "कार्बन मूल्य (₹)",
  "dashboard.inputLive": "उपजीविका मूल्य (₹)",
  "dashboard.inputMgmt": "व्यवस्थापन खर्च (₹)",
  "dashboard.inputProtect": "संरक्षण खर्च (₹)",
  "insight.topService": "मुख्य सेवा: {service}",
  "insight.coverage": "व्याप्ती: {area}",
  "insight.netStrong": "निव्वळ स्थिती: मजबूत सकारात्मक",
  "insight.netCareful": "निव्वळ स्थिती: खर्च-संवेदनशील",
  "insight.highestShare": "सर्वाधिक वाटा: {service}",
  "insight.balanceDiverse": "समतोल: सेवा विविध आहेत",
  "insight.balanceFocused": "समतोल: एक सेवा आघाडीवर आहे",
  "insight.activePlan": "सक्रिय योजना: {plan}",
  "insight.focus": "केंद्रबिंदू: {focus}",
  "insight.focusCurrent": "लवचिकता आणि सेवा",
  "insight.focusRestored": "पुनर्संचयितीकरण आणि अधिवास लाभ",
  "insight.focusMangrove": "कार्बन आणि किनारी संरक्षण",
  "admin.recordCount": "{count} नोंदी",
  "admin.recordCountOne": "{count} नोंद",
  "admin.user": "वापरकर्ता",
  "admin.lang": "भाषा",
  "admin.answers": "उत्तरे",
  "admin.score": "गुण",
  "admin.path": "मार्ग",
  "admin.time": "वेळ",
  "admin.clear": "नोंदी साफ करा",
  "admin.pathDirect": "थेट अॅप प्रवेश",
  "admin.pathBasics": "आधी मूलभूत माहिती"
});

const safeTranslationOverrides = {
  hi: {
    "sidebar.titleSmall": "नेविगेशन",
    "sidebar.title": "ऐप मेन्यू",
    "sidebar.subtitle": "आर्द्रभूमि पारितंत्र ऐप",
    "sidebar.language": "भाषा चुनें",
    "nav.home": "होम",
    "nav.contents": "मुख्य भाग",
    "nav.dashboard": "अवलोकन",
    "nav.multi": "आर्द्रभूमि लाभ मूल्य",
    "nav.stacked": "सेवा चार्ट",
    "nav.scenario": "योजना तुलना",
    "nav.hectare": "प्रति हेक्टेयर मूल्य",
    "nav.net": "अंतिम मूल्य",
    "nav.map": "आर्द्रभूमि मानचित्र",
    "nav.media": "तस्वीरें और वीडियो",
    "nav.admin": "एडमिन",
    "home.small": "आर्द्रभूमि ज्ञान ऐप",
    "home.enter": "ऐप में प्रवेश करें",
    "contents.small": "सामग्री",
    "contents.title": "मुख्य भाग",
    "dashboard.title": "अवलोकन",
    "dashboard.subtitle": "आर्द्रभूमि डेटा का सरल सारांश",
    "dashboard.wetlandLabel": "भारतीय आर्द्रभूमि चुनें",
    "dashboard.infoSmall": "आर्द्रभूमि जानकारी",
    "dashboard.calcSmall": "लाइव इनपुट कैलकुलेटर",
    "dashboard.calcTitle": "आर्द्रभूमि मान दर्ज करें",
    "dashboard.calcStatus": "रीयल-टाइम आउटपुट",
    "dashboard.inputArea": "आर्द्रभूमि क्षेत्रफल (हेक्टेयर)",
    "dashboard.inputBio": "जैव विविधता मूल्य (₹)",
    "dashboard.inputWater": "जल मूल्य (₹)",
    "dashboard.inputCarbon": "कार्बन मूल्य (₹)",
    "dashboard.inputLive": "आजीविका मूल्य (₹)",
    "dashboard.inputMgmt": "प्रबंधन लागत (₹)",
    "dashboard.inputProtect": "संरक्षण लागत (₹)",
    "dashboard.metric1": "कुल आर्द्रभूमि मूल्य",
    "dashboard.metric1Desc": "पारितंत्र सेवाओं का संयुक्त मूल्य",
    "dashboard.metric2": "प्रति हेक्टेयर मूल्य",
    "dashboard.metric2Desc": "प्रत्येक हेक्टेयर का मूल्य",
    "dashboard.metric3": "शुद्ध मूल्य",
    "dashboard.metric3Desc": "प्रबंधन और संरक्षण लागत के बाद",
    "multi.small": "मॉड्यूल 01",
    "multi.title": "आर्द्रभूमि लाभ मूल्य",
    "stacked.small": "मॉड्यूल 02",
    "stacked.title": "सेवा चार्ट",
    "scenario.small": "मॉड्यूल 03",
    "scenario.title": "योजना तुलना",
    "hectare.small": "मॉड्यूल 04",
    "hectare.title": "प्रति हेक्टेयर मूल्य",
    "net.small": "मॉड्यूल 05",
    "net.title": "अंतिम मूल्य",
    "media.small": "मॉड्यूल 06",
    "media.title": "तस्वीरें और वीडियो",
    "media.headerSmall": "आर्द्रभूमि गैलरी",
    "media.headerTitle": "एक भारतीय आर्द्रभूमि चुनें",
    "media.headerTag": "चित्र + वीडियो",
    "media.selectedSmall": "चयनित आर्द्रभूमि",
    "media.videoButton": "यूट्यूब वीडियो देखें",
    "map.small": "मॉड्यूल 07",
    "map.title": "आर्द्रभूमि मानचित्र",
    "map.headerSmall": "इंटरएक्टिव स्थान मानचित्र",
    "map.headerTitle": "ज़ूम करने के लिए आर्द्रभूमि चुनें",
    "map.selectedSmall": "चयनित आर्द्रभूमि",
    "quiz.small": "प्रश्न",
    "quiz.title": "अपनी आर्द्रभूमि समझ जांचें",
    "learn.small": "सीखने का मार्ग",
    "learn.title": "आर्द्रभूमि की मूल बातें",
    "admin.small": "एडमिन दृश्य",
    "admin.title": "क्विज रिकॉर्ड",
    "common.back": "वापस",
    "common.cancel": "रद्द करें",
    "common.close": "बंद करें"
  },
  mr: {
    "sidebar.titleSmall": "नेव्हिगेशन",
    "sidebar.title": "अॅप मेन्यू",
    "sidebar.subtitle": "जलभूमी परिसंस्था अॅप",
    "sidebar.language": "भाषा निवडा",
    "nav.home": "मुख्यपृष्ठ",
    "nav.contents": "मुख्य विभाग",
    "nav.dashboard": "आढावा",
    "nav.multi": "जलभूमी लाभमूल्य",
    "nav.stacked": "सेवा चार्ट",
    "nav.scenario": "योजना तुलना",
    "nav.hectare": "प्रति हेक्टर मूल्य",
    "nav.net": "अंतिम मूल्य",
    "nav.map": "जलभूमी नकाशा",
    "nav.media": "चित्रे आणि व्हिडिओ",
    "nav.admin": "प्रशासन",
    "home.small": "जलभूमी ज्ञान अॅप",
    "home.enter": "अॅपमध्ये प्रवेश करा",
    "contents.small": "अनुक्रमणिका",
    "contents.title": "मुख्य विभाग",
    "dashboard.title": "आढावा",
    "dashboard.subtitle": "जलभूमी डेटाचा सोपा सारांश",
    "dashboard.wetlandLabel": "भारतीय जलभूमी निवडा",
    "dashboard.infoSmall": "जलभूमी माहिती",
    "dashboard.calcSmall": "लाईव्ह इनपुट कॅलक्युलेटर",
    "dashboard.calcTitle": "जलभूमीची मूल्ये भरा",
    "dashboard.calcStatus": "रिअल-टाइम आउटपुट",
    "dashboard.inputArea": "जलभूमी क्षेत्रफळ (हेक्टर)",
    "dashboard.inputBio": "जैवविविधता मूल्य (₹)",
    "dashboard.inputWater": "पाणी मूल्य (₹)",
    "dashboard.inputCarbon": "कार्बन मूल्य (₹)",
    "dashboard.inputLive": "उपजीविका मूल्य (₹)",
    "dashboard.inputMgmt": "व्यवस्थापन खर्च (₹)",
    "dashboard.inputProtect": "संरक्षण खर्च (₹)",
    "dashboard.metric1": "एकूण जलभूमी मूल्य",
    "dashboard.metric1Desc": "पारिसंस्था सेवांचे एकत्रित मूल्य",
    "dashboard.metric2": "प्रति हेक्टर मूल्य",
    "dashboard.metric2Desc": "प्रत्येक हेक्टरचे मूल्य",
    "dashboard.metric3": "निव्वळ मूल्य",
    "dashboard.metric3Desc": "व्यवस्थापन आणि संरक्षण खर्चानंतर",
    "multi.small": "मॉड्यूल 01",
    "multi.title": "जलभूमी लाभमूल्य",
    "stacked.small": "मॉड्यूल 02",
    "stacked.title": "सेवा चार्ट",
    "scenario.small": "मॉड्यूल 03",
    "scenario.title": "योजना तुलना",
    "hectare.small": "मॉड्यूल 04",
    "hectare.title": "प्रति हेक्टर मूल्य",
    "net.small": "मॉड्यूल 05",
    "net.title": "अंतिम मूल्य",
    "media.small": "मॉड्यूल 06",
    "media.title": "चित्रे आणि व्हिडिओ",
    "media.headerSmall": "जलभूमी गॅलरी",
    "media.headerTitle": "भारतीय जलभूमी निवडा",
    "media.headerTag": "चित्रे + व्हिडिओ",
    "media.selectedSmall": "निवडलेली जलभूमी",
    "media.videoButton": "यूट्यूब व्हिडिओ पहा",
    "map.small": "मॉड्यूल 07",
    "map.title": "जलभूमी नकाशा",
    "map.headerSmall": "संवादी स्थान नकाशा",
    "map.headerTitle": "झूम करण्यासाठी जलभूमी निवडा",
    "map.selectedSmall": "निवडलेली जलभूमी",
    "quiz.small": "प्रश्न",
    "quiz.title": "तुमची जलभूमी समज तपासा",
    "learn.small": "अभ्यास मार्ग",
    "learn.title": "जलभूमीची मूलभूत माहिती",
    "admin.small": "प्रशासन दृश्य",
    "admin.title": "क्विझ नोंदी",
    "common.back": "मागे",
    "common.cancel": "रद्द करा",
    "common.close": "बंद करा"
  }
};

Object.assign(safeTranslationOverrides.hi, {
  "contents.cardDashboardTitle": "अवलोकन",
  "contents.cardDashboardDesc": "ऐप का त्वरित सारांश",
  "contents.card1Title": "आर्द्रभूमि लाभ मूल्य",
  "contents.card1Desc": "विभिन्न आर्द्रभूमि लाभों का कुल मूल्य",
  "contents.card2Title": "सेवा चार्ट",
  "contents.card2Desc": "देखें कि प्रत्येक सेवा का कितना योगदान है",
  "contents.card3Title": "योजना तुलना",
  "contents.card3Desc": "विभिन्न आर्द्रभूमि योजनाओं की तुलना करें",
  "contents.card4Title": "प्रति हेक्टेयर मूल्य",
  "contents.card4Desc": "एक हेक्टेयर क्षेत्र का मूल्य",
  "contents.card5Title": "अंतिम मूल्य",
  "contents.card5Desc": "लागत घटाने के बाद का मूल्य",
  "contents.card6Title": "तस्वीरें और वीडियो",
  "contents.card6Desc": "आर्द्रभूमि गैलरी और यूट्यूब लिंक",
  "contents.card7Title": "आर्द्रभूमि मानचित्र",
  "contents.card7Desc": "इंटरएक्टिव मानचित्र पर प्रत्येक आर्द्रभूमि देखें",
  "home.desc": "यह ऐप लोगों को आर्द्रभूमि के लाभ सरल तरीके से समझने में मदद करता है। आप योजनाओं की तुलना कर सकते हैं, मूल्य देख सकते हैं और आर्द्रभूमि सेवाओं का आसानी से अध्ययन कर सकते हैं।",
  "home.gallery1": "आर्द्रभूमि जल",
  "home.gallery2": "मैंग्रोव क्षेत्र",
  "home.gallery3": "पक्षी आवास",
  "multi.cardTitle": "लाभ मूल्य",
  "multi.row1": "जैव विविधता समर्थन",
  "multi.row2": "जल शुद्धिकरण",
  "multi.row3": "कार्बन भंडारण",
  "multi.row4": "आजीविका समर्थन",
  "multi.totalTitle": "कुल आर्द्रभूमि मूल्य",
  "multi.totalDesc": "सभी आर्द्रभूमि लाभों का अनुमानित वार्षिक मूल्य",
  "multi.stat1": "आर्द्रभूमि प्रकार",
  "multi.stat1Value": "बाढ़क्षेत्र आर्द्रभूमि",
  "multi.stat2": "राज्य",
  "multi.stat3": "उपयोग किया गया क्षेत्र",
  "services.bio": "जैव विविधता",
  "services.water": "जल",
  "services.carbon": "कार्बन",
  "services.live": "आजीविका",
  "stacked.cardTitle": "वर्तमान आर्द्रभूमि सेवा चार्ट",
  "stacked.benchmarkTitle": "तुलनात्मक संदर्भ",
  "stacked.bench1": "उच्च जल शोधन",
  "stacked.bench1Value": "अधिकतम जल",
  "stacked.bench2": "संतुलित पुनर्स्थापन",
  "scenario.cardTitle": "परिदृश्य परिणाम",
  "scenario.btn1": "वर्तमान स्थिति",
  "scenario.btn2": "पुनर्स्थापित आर्द्रभूमि",
  "scenario.btn3": "मैंग्रोव योजना",
  "scenario.out1": "क्षेत्रफल",
  "scenario.out2": "शुद्ध मूल्य",
  "scenario.out3": "प्रति हेक्टेयर",
  "scenario.infoTitle": "योजना अंतर्दृष्टि",
  "scenario.info1": "सर्वश्रेष्ठ पारिस्थितिक परिणाम",
  "scenario.info1Value": "पुनर्स्थापित आर्द्रभूमि",
  "scenario.info2": "सर्वश्रेष्ठ कार्बन क्षमता",
  "scenario.info2Value": "मैंग्रोव योजना",
  "hectare.formulaTitle": "प्रति हेक्टेयर सूत्र",
  "hectare.formula": "कुल मूल्य / कुल क्षेत्रफल",
  "hectare.refTitle": "संदर्भ मान",
  "hectare.refDesc": "यह मॉड्यूल एक हेक्टेयर के लिए आर्द्रभूमि मूल्य को स्पष्ट रूप से समझाता है।",
  "hectare.row1": "कुल सेवा मूल्य",
  "hectare.row2": "कुल क्षेत्रफल",
  "hectare.row3": "प्रति हेक्टेयर मूल्य",
  "net.cardTitle": "शुद्ध मूल्य विभाजन",
  "net.row1": "कुल सेवा मूल्य",
  "net.row2": "प्रबंधन लागत",
  "net.row3": "संरक्षण लागत",
  "net.row4": "अंतिम शुद्ध मूल्य",
  "net.finalTitle": "अंतिम मूल्य",
  "net.finalDesc": "सभी लागतों के बाद शेष मूल्य",
  "net.info1": "उच्चतम योगदान",
  "net.info1Value": "जैव विविधता + जल",
  "net.info2": "कुल कटौती",
  "net.info2Value": "प्रबंधन + संरक्षण",
  "net.info3": "उपयोग",
  "net.info3Value": "नीति और योजना",
  "quiz.headerSmall": "3 त्वरित प्रश्न",
  "quiz.headerTitle": "जारी रखने के लिए सभी प्रश्नों के उत्तर दें",
  "quiz.back": "पिछला",
  "quiz.next": "अगला",
  "quiz.note": "प्रत्येक प्रश्न के लिए एक विकल्प चुनें।",
  "learn.next": "अगला",
  "learn.back": "पिछला",
  "learn.enterApp": "ऐप में जारी रखें",
  "learn.page1Small": "मूल बातें 1",
  "learn.page1Title": "आर्द्रभूमि क्या हैं?",
  "learn.page1Text": "आर्द्रभूमि वे क्षेत्र हैं जहाँ भूमि पूरे वर्ष या वर्ष के किसी भाग में पानी से ढकी रहती है। वे भूमि और जल प्रणालियों के बीच संक्रमण क्षेत्र का काम करती हैं।",
  "learn.page1Point1": "ये स्थायी या मौसमी रूप से जलभराव वाले हो सकते हैं।",
  "learn.page1Point2": "इनमें दलदल, मैंग्रोव, झील किनारे, बाढ़क्षेत्र और लैगून शामिल हैं।",
  "learn.page1Point3": "ये जलीय और स्थलीय दोनों प्रकार के जीवन को सहारा देती हैं।",
  "learn.page2Small": "मूल बातें 2",
  "learn.page2Title": "आर्द्रभूमि के प्रकार",
  "learn.page2Text": "सभी आर्द्रभूमियाँ एक जैसी नहीं होतीं। जलगहराई, लवणता, वनस्पति और भूगोल के आधार पर उनकी भूमिकाएँ अलग होती हैं।",
  "learn.page2Type1Title": "दलदली क्षेत्र",
  "learn.page2Type1Text": "उथली आर्द्रभूमि जिनमें घास और सरकंडे होते हैं।",
  "learn.page2Type2Title": "स्वैम्प",
  "learn.page2Type2Text": "पेड़ों और झाड़ियों से भरी आर्द्रभूमि।",
  "learn.page2Type3Title": "मैंग्रोव",
  "learn.page2Type3Text": "नमक-सहिष्णु वनस्पति वाली तटीय आर्द्रभूमि।",
  "learn.page2Type4Title": "लैगून और झील किनारे",
  "learn.page2Type4Text": "जलसमृद्ध क्षेत्र जो पक्षियों, मछलियों और जलीय जीवन का समर्थन करते हैं।",
  "learn.page3Small": "मूल बातें 3",
  "learn.page3Title": "आर्द्रभूमि क्यों महत्वपूर्ण हैं",
  "learn.page3Text": "आर्द्रभूमियाँ पारिस्थितिक, सामाजिक और आर्थिक लाभ देती हैं और दुनिया की सबसे उत्पादक पारितंत्रों में से हैं।",
  "learn.page3Point1": "वे अतिरिक्त पानी रोककर बाढ़ कम करती हैं।",
  "learn.page3Point2": "वे तलछट और प्रदूषक रोककर जल गुणवत्ता सुधारती हैं।",
  "learn.page3Point3": "वे मछलियों, पक्षियों और पौधों सहित जैव विविधता का समर्थन करती हैं।",
  "learn.page3Point4": "वे कार्बन संचित करती हैं और जलवायु संतुलन में मदद करती हैं।",
  "learn.page3Point5": "वे मत्स्य पालन, पर्यटन और स्थानीय आजीविका को सहारा देती हैं।",
  "learn.page4Small": "मूल बातें 4",
  "learn.page4Title": "खतरे और संरक्षण",
  "learn.page4Text": "मानवीय और पर्यावरणीय दबावों के कारण आर्द्रभूमियाँ खतरे में हैं, इसलिए संरक्षण आवश्यक है।",
  "learn.page4Threat1Title": "प्रदूषण",
  "learn.page4Threat1Text": "औद्योगिक कचरा, सीवेज और प्लास्टिक जल गुणवत्ता को नुकसान पहुँचाते हैं।",
  "learn.page4Threat2Title": "अतिक्रमण",
  "learn.page4Threat2Text": "निर्माण और भूमि परिवर्तन आर्द्रभूमि क्षेत्र को कम करते हैं।",
  "learn.page4Threat3Title": "जलवायु परिवर्तन",
  "learn.page4Threat3Text": "बदलती वर्षा और तापमान आर्द्रभूमि संतुलन को प्रभावित करते हैं।",
  "learn.page4Threat4Title": "संरक्षण",
  "learn.page4Threat4Text": "सुरक्षा, पुनर्स्थापन, जागरूकता और बेहतर योजना आवश्यक हैं।",
  "learn.page4Note": "अब आप मूल बातें जान चुके हैं, इसलिए पूर्ण जलविस्तार ऐप में आगे बढ़ सकते हैं।",
  "login.small": "सुरक्षित प्रवेश",
  "login.title": "जलविस्तार में साइन इन करें",
  "login.desc": "नीचे अपनी जानकारी भरें।",
  "login.name": "पूरा नाम",
  "login.email": "ईमेल पता",
  "login.password": "पासवर्ड",
  "login.college": "कॉलेज / विश्वविद्यालय",
  "login.degree": "डिग्री",
  "login.year": "अध्ययन वर्ष",
  "login.yearSelect": "वर्ष चुनें",
  "login.year1": "प्रथम वर्ष",
  "login.year2": "द्वितीय वर्ष",
  "login.year3": "तृतीय वर्ष",
  "login.year4": "चतुर्थ वर्ष",
  "login.year5": "स्नातकोत्तर",
  "login.specialization": "विशेषज्ञता / शाखा",
  "login.note": "आपकी प्रोफ़ाइल जानकारी इस ब्राउज़र में संग्रहीत की जाएगी।",
  "login.submit": "साइन इन",
  "signinChoice.small": "वापसी पर स्वागत है",
  "signinChoice.title": "जारी रखने का तरीका चुनें",
  "signinChoice.desc": "पिछली जानकारी का उपयोग करें या नए उपयोगकर्ता के रूप में साइन इन करें।",
  "signinChoice.previous": "पिछले उपयोगकर्ता के रूप में साइन इन करें",
  "signinChoice.new": "नया साइन इन",
  "profile.small": "प्रोफ़ाइल",
  "profile.title": "आपकी जानकारी",
  "profile.defaultName": "उपयोगकर्ता प्रोफ़ाइल",
  "profile.defaultEmail": "विवरण देखने के लिए टैप करें",
  "profile.name": "नाम",
  "profile.email": "ईमेल",
  "profile.college": "कॉलेज",
  "profile.degree": "डिग्री",
  "profile.year": "वर्ष",
  "profile.specialization": "विशेषज्ञता",
  "profile.logout": "लॉगआउट",
  "admin.headerSmall": "संग्रहीत प्रतिक्रियाएँ",
  "admin.headerTitle": "उपयोगकर्ता क्विज प्रयास और पहुँच मार्ग",
  "admin.empty": "अभी तक कोई क्विज प्रयास दर्ज नहीं हुआ है।",
  "chart.current": "वर्तमान चार्ट"
});

Object.assign(safeTranslationOverrides.mr, {
  "contents.cardDashboardTitle": "आढावा",
  "contents.cardDashboardDesc": "अॅपचा झटपट सारांश",
  "contents.card1Title": "जलभूमी लाभमूल्य",
  "contents.card1Desc": "विविध जलभूमी लाभांचे एकूण मूल्य",
  "contents.card2Title": "सेवा चार्ट",
  "contents.card2Desc": "प्रत्येक सेवेचे योगदान पहा",
  "contents.card3Title": "योजना तुलना",
  "contents.card3Desc": "विविध जलभूमी योजनांची तुलना करा",
  "contents.card4Title": "प्रति हेक्टर मूल्य",
  "contents.card4Desc": "एक हेक्टर क्षेत्राचे मूल्य",
  "contents.card5Title": "अंतिम मूल्य",
  "contents.card5Desc": "खर्च वजा केल्यानंतरचे मूल्य",
  "contents.card6Title": "चित्रे आणि व्हिडिओ",
  "contents.card6Desc": "जलभूमी गॅलरी आणि यूट्यूब दुवे",
  "contents.card7Title": "जलभूमी नकाशा",
  "contents.card7Desc": "संवादी नकाशावर प्रत्येक जलभूमी शोधा",
  "home.desc": "हे अॅप लोकांना जलभूमीचे लाभ सोप्या पद्धतीने समजून घेण्यास मदत करते. तुम्ही योजना तुलना करू शकता, मूल्य पाहू शकता आणि जलभूमी सेवांचा सहज अभ्यास करू शकता.",
  "home.gallery1": "जलभूमी पाणी",
  "home.gallery2": "मॅन्ग्रोव्ह क्षेत्र",
  "home.gallery3": "पक्षी अधिवास",
  "multi.cardTitle": "लाभमूल्य",
  "multi.row1": "जैवविविधता समर्थन",
  "multi.row2": "पाणी शुद्धीकरण",
  "multi.row3": "कार्बन साठवण",
  "multi.row4": "उपजीविका समर्थन",
  "multi.totalTitle": "एकूण जलभूमी मूल्य",
  "multi.totalDesc": "सर्व जलभूमी लाभांचे अंदाजित वार्षिक मूल्य",
  "multi.stat1": "जलभूमी प्रकार",
  "multi.stat1Value": "पूरक्षेत्र जलभूमी",
  "multi.stat2": "राज्य",
  "multi.stat3": "वापरलेले क्षेत्र",
  "services.bio": "जैवविविधता",
  "services.water": "पाणी",
  "services.carbon": "कार्बन",
  "services.live": "उपजीविका",
  "stacked.cardTitle": "सध्याचा जलभूमी सेवा चार्ट",
  "stacked.benchmarkTitle": "तुलनात्मक संदर्भ",
  "stacked.bench1": "उच्च जल शुद्धीकरण",
  "stacked.bench1Value": "कमाल पाणी",
  "stacked.bench2": "संतुलित पुनर्संचयितीकरण",
  "scenario.cardTitle": "परिस्थिती परिणाम",
  "scenario.btn1": "सध्याची स्थिती",
  "scenario.btn2": "पुनर्संचयित जलभूमी",
  "scenario.btn3": "मॅन्ग्रोव्ह योजना",
  "scenario.out1": "क्षेत्रफळ",
  "scenario.out2": "निव्वळ मूल्य",
  "scenario.out3": "प्रति हेक्टर",
  "scenario.infoTitle": "योजना अंतर्दृष्टी",
  "scenario.info1": "सर्वोत्तम पर्यावरणीय परिणाम",
  "scenario.info1Value": "पुनर्संचयित जलभूमी",
  "scenario.info2": "सर्वोत्तम कार्बन क्षमता",
  "scenario.info2Value": "मॅन्ग्रोव्ह योजना",
  "hectare.formulaTitle": "प्रति हेक्टर सूत्र",
  "hectare.formula": "एकूण मूल्य / एकूण क्षेत्रफळ",
  "hectare.refTitle": "संदर्भ मूल्य",
  "hectare.refDesc": "हे मॉड्यूल एका हेक्टरसाठी जलभूमीचे मूल्य स्पष्टपणे दाखवते.",
  "hectare.row1": "एकूण सेवा मूल्य",
  "hectare.row2": "एकूण क्षेत्रफळ",
  "hectare.row3": "प्रति हेक्टर मूल्य",
  "net.cardTitle": "निव्वळ मूल्य तपशील",
  "net.row1": "एकूण सेवा मूल्य",
  "net.row2": "व्यवस्थापन खर्च",
  "net.row3": "संरक्षण खर्च",
  "net.row4": "अंतिम निव्वळ मूल्य",
  "net.finalTitle": "अंतिम मूल्य",
  "net.finalDesc": "सर्व खर्चानंतर उरलेले मूल्य",
  "net.info1": "सर्वाधिक योगदान",
  "net.info1Value": "जैवविविधता + पाणी",
  "net.info2": "एकूण कपात",
  "net.info2Value": "व्यवस्थापन + संरक्षण",
  "net.info3": "उपयोग",
  "net.info3Value": "धोरण आणि नियोजन",
  "quiz.headerSmall": "3 झटपट प्रश्न",
  "quiz.headerTitle": "पुढे जाण्यासाठी सर्व प्रश्नांची उत्तरे द्या",
  "quiz.back": "मागील",
  "quiz.next": "पुढे",
  "quiz.note": "प्रत्येक प्रश्नासाठी एक पर्याय निवडा.",
  "learn.next": "पुढे",
  "learn.back": "मागील",
  "learn.enterApp": "अॅपमध्ये पुढे जा",
  "learn.page1Small": "मूलभूत 1",
  "learn.page1Title": "जलभूमी म्हणजे काय?",
  "learn.page1Text": "जलभूमी म्हणजे अशी क्षेत्रे जिथे जमीन संपूर्ण वर्षभर किंवा काही काळ पाण्याने झाकलेली असते. ती जमीन आणि जलप्रणाली यांच्यामधील संक्रमण क्षेत्र म्हणून काम करतात.",
  "learn.page1Point1": "त्या कायमस्वरूपी किंवा हंगामी पाणथळ असू शकतात.",
  "learn.page1Point2": "यामध्ये दलदल, मॅन्ग्रोव्ह, तलावकिनारे, पूरक्षेत्रे आणि लगून यांचा समावेश होतो.",
  "learn.page1Point3": "त्या जलचर आणि स्थलचर दोन्ही जीवनाला आधार देतात.",
  "learn.page2Small": "मूलभूत 2",
  "learn.page2Title": "जलभूमीचे प्रकार",
  "learn.page2Text": "सर्व जलभूमी सारख्या नसतात. पाण्याची खोली, क्षारता, वनस्पती आणि भूगोल यावर त्यांच्या भूमिका बदलतात.",
  "learn.page2Type1Title": "दलदली",
  "learn.page2Type1Text": "गवत आणि नळकांड्यांनी युक्त उथळ जलभूमी.",
  "learn.page2Type2Title": "स्वॅम्प",
  "learn.page2Type2Text": "झाडे आणि झुडपांनी व्यापलेली जलभूमी.",
  "learn.page2Type3Title": "मॅन्ग्रोव्ह",
  "learn.page2Type3Text": "मीठ सहन करणाऱ्या वनस्पती असलेली किनारी जलभूमी.",
  "learn.page2Type4Title": "लगून आणि तलावकिनारे",
  "learn.page2Type4Text": "पक्षी, मासे आणि जलचर जीवनाला आधार देणारे जलसमृद्ध भाग.",
  "learn.page3Small": "मूलभूत 3",
  "learn.page3Title": "जलभूमी का महत्त्वाची आहे",
  "learn.page3Text": "जलभूमी पर्यावरणीय, सामाजिक आणि आर्थिक लाभ देतात आणि जगातील सर्वाधिक उत्पादक परिसंस्थांपैकी एक आहेत.",
  "learn.page3Point1": "त्या अतिरिक्त पाणी साठवून पूर कमी करतात.",
  "learn.page3Point2": "त्या गाळ आणि प्रदूषक अडवून पाण्याची गुणवत्ता सुधारतात.",
  "learn.page3Point3": "त्या मासे, पक्षी आणि वनस्पतींसह जैवविविधतेला आधार देतात.",
  "learn.page3Point4": "त्या कार्बन साठवतात आणि हवामान संतुलन राखण्यास मदत करतात.",
  "learn.page3Point5": "त्या मत्स्यव्यवसाय, पर्यटन आणि स्थानिक उपजीविकेला आधार देतात.",
  "learn.page4Small": "मूलभूत 4",
  "learn.page4Title": "धोके आणि संवर्धन",
  "learn.page4Text": "मानवी आणि पर्यावरणीय दबावांमुळे जलभूमी धोक्यात आहेत, म्हणून संवर्धन आवश्यक आहे.",
  "learn.page4Threat1Title": "प्रदूषण",
  "learn.page4Threat1Text": "औद्योगिक कचरा, सांडपाणी आणि प्लास्टिक पाण्याच्या गुणवत्तेला हानी पोहोचवतात.",
  "learn.page4Threat2Title": "अतिक्रमण",
  "learn.page4Threat2Text": "बांधकाम आणि जमिनीतील बदल जलभूमीचे क्षेत्र कमी करतात.",
  "learn.page4Threat3Title": "हवामान बदल",
  "learn.page4Threat3Text": "बदलते पर्जन्यमान आणि तापमान जलभूमीचे संतुलन बिघडवतात.",
  "learn.page4Threat4Title": "संवर्धन",
  "learn.page4Threat4Text": "संरक्षण, पुनर्संचयितीकरण, जनजागृती आणि चांगले नियोजन आवश्यक आहे.",
  "learn.page4Note": "आता तुम्ही मूलभूत माहिती समजून घेतली आहे, त्यामुळे पूर्ण जलविस्तार अॅपमध्ये पुढे जाऊ शकता.",
  "login.small": "सुरक्षित प्रवेश",
  "login.title": "जलविस्तारमध्ये साइन इन करा",
  "login.desc": "खाली तुमची माहिती भरा.",
  "login.name": "पूर्ण नाव",
  "login.email": "ईमेल पत्ता",
  "login.password": "पासवर्ड",
  "login.college": "महाविद्यालय / विद्यापीठ",
  "login.degree": "पदवी",
  "login.year": "अभ्यास वर्ष",
  "login.yearSelect": "वर्ष निवडा",
  "login.year1": "पहिले वर्ष",
  "login.year2": "दुसरे वर्ष",
  "login.year3": "तिसरे वर्ष",
  "login.year4": "चौथे वर्ष",
  "login.year5": "पदव्युत्तर",
  "login.specialization": "विशेषीकरण / शाखा",
  "login.note": "तुमची प्रोफाइल माहिती या ब्राउझरमध्ये साठवली जाईल.",
  "login.submit": "साइन इन",
  "signinChoice.small": "पुन्हा स्वागत आहे",
  "signinChoice.title": "पुढे जाण्याचा मार्ग निवडा",
  "signinChoice.desc": "मागील माहिती वापरा किंवा नवीन वापरकर्ता म्हणून साइन इन करा.",
  "signinChoice.previous": "मागील वापरकर्ता म्हणून साइन इन करा",
  "signinChoice.new": "नवीन साइन इन",
  "profile.small": "प्रोफाइल",
  "profile.title": "तुमची माहिती",
  "profile.defaultName": "वापरकर्ता प्रोफाइल",
  "profile.defaultEmail": "तपशील पाहण्यासाठी टॅप करा",
  "profile.name": "नाव",
  "profile.email": "ईमेल",
  "profile.college": "महाविद्यालय",
  "profile.degree": "पदवी",
  "profile.year": "वर्ष",
  "profile.specialization": "विशेषीकरण",
  "profile.logout": "लॉगआउट",
  "admin.headerSmall": "साठवलेले प्रतिसाद",
  "admin.headerTitle": "वापरकर्ता क्विझ प्रयत्न आणि प्रवेश मार्ग",
  "admin.empty": "अद्याप कोणतीही क्विझ नोंद झाली नाही.",
  "chart.current": "सध्याचा चार्ट"
});

const wetlandTranslations = {
  en: {
    sundarbans: {
      name: "Sundarbans",
      region: "West Bengal",
      info: "The Sundarbans is the world's largest mangrove wetland. It protects coastal areas, supports biodiversity, stores carbon, and helps fishing communities."
    },
    chilika: {
      name: "Chilika Lake",
      region: "Odisha",
      info: "Chilika is India's largest brackish water lagoon. It supports migratory birds, fisheries, tourism, and local livelihoods."
    },
    loktak: {
      name: "Loktak Lake",
      region: "Manipur",
      info: "Loktak is famous for its floating phumdis. It supports freshwater biodiversity, fishing, and ecological balance."
    },
    wular: {
      name: "Wular Lake",
      region: "Jammu & Kashmir",
      info: "Wular is one of Asia's largest freshwater lakes. It helps in flood control, fisheries, and water balance."
    },
    vembanad: {
      name: "Vembanad Lake",
      region: "Kerala",
      info: "Vembanad supports backwater ecosystems, agriculture, transport, biodiversity, and tourism in Kerala."
    },
    pulicat: {
      name: "Pulicat Lake",
      region: "Andhra Pradesh / Tamil Nadu",
      info: "Pulicat is an important lagoon wetland known for birds, fishing, and coastal ecological support."
    },
    harike: {
      name: "Harike Wetland",
      region: "Punjab",
      info: "Harike is an important northern Indian wetland supporting migratory birds, irrigation, and biodiversity conservation."
    },
    deepor: {
      name: "Deepor Beel",
      region: "Assam",
      info: "Deepor Beel is a freshwater lake and bird habitat. It also supports flood control and local ecosystem health."
    },
    "east-kolkata": {
      name: "East Kolkata Wetlands",
      region: "West Bengal",
      info: "East Kolkata Wetlands is known for natural wastewater treatment, fisheries, agriculture, and urban ecological value."
    },
    keoladeo: {
      name: "Keoladeo National Park",
      region: "Rajasthan",
      info: "Keoladeo is a famous wetland bird habitat with high ecological value, tourism importance, and conservation significance."
    }
  },
  hi: {
    sundarbans: {
      name: "सुंदरबन",
      region: "पश्चिम बंगाल",
      info: "सुंदरबन दुनिया की सबसे बड़ी मैंग्रोव आर्द्रभूमि है। यह तटीय क्षेत्रों की रक्षा करती है, जैव विविधता को सहारा देती है, कार्बन संचित करती है और मछुआरा समुदायों की मदद करती है।"
    },
    chilika: {
      name: "चिलिका झील",
      region: "ओडिशा",
      info: "चिलिका भारत की सबसे बड़ी खारे पानी की लैगून है। यह प्रवासी पक्षियों, मत्स्य पालन, पर्यटन और स्थानीय आजीविका को सहारा देती है।"
    },
    loktak: {
      name: "लोकटक झील",
      region: "मणिपुर",
      info: "लोकटक अपनी तैरती फुमदी के लिए प्रसिद्ध है। यह मीठे पानी की जैव विविधता, मत्स्य पालन और पारिस्थितिक संतुलन को सहारा देती है।"
    },
    wular: {
      name: "वुलर झील",
      region: "जम्मू और कश्मीर",
      info: "वुलर एशिया की सबसे बड़ी मीठे पानी की झीलों में से एक है। यह बाढ़ नियंत्रण, मत्स्य पालन और जल संतुलन में मदद करती है।"
    },
    vembanad: {
      name: "वेंबनाड झील",
      region: "केरल",
      info: "वेंबनाड केरल में बैकवॉटर पारितंत्र, कृषि, परिवहन, जैव विविधता और पर्यटन को सहारा देती है।"
    },
    pulicat: {
      name: "पुलिकट झील",
      region: "आंध्र प्रदेश / तमिलनाडु",
      info: "पुलिकट एक महत्वपूर्ण लैगून आर्द्रभूमि है जो पक्षियों, मत्स्य पालन और तटीय पारिस्थितिक समर्थन के लिए जानी जाती है।"
    },
    harike: {
      name: "हरीके आर्द्रभूमि",
      region: "पंजाब",
      info: "हरीके उत्तर भारत की एक महत्वपूर्ण आर्द्रभूमि है जो प्रवासी पक्षियों, सिंचाई और जैव विविधता संरक्षण को सहारा देती है।"
    },
    deepor: {
      name: "डीपोर बील",
      region: "असम",
      info: "डीपोर बील मीठे पानी की झील और पक्षी आवास है। यह बाढ़ नियंत्रण और स्थानीय पारितंत्र स्वास्थ्य में भी मदद करती है।"
    },
    "east-kolkata": {
      name: "ईस्ट कोलकाता आर्द्रभूमियाँ",
      region: "पश्चिम बंगाल",
      info: "ईस्ट कोलकाता आर्द्रभूमियाँ प्राकृतिक अपशिष्ट जल शोधन, मत्स्य पालन, कृषि और शहरी पारिस्थितिक मूल्य के लिए जानी जाती हैं।"
    },
    keoladeo: {
      name: "केवलादेव राष्ट्रीय उद्यान",
      region: "राजस्थान",
      info: "केवलादेव एक प्रसिद्ध आर्द्रभूमि पक्षी आवास है जिसका पारिस्थितिक मूल्य, पर्यटन महत्व और संरक्षण महत्व बहुत अधिक है।"
    }
  },
  mr: {
    sundarbans: {
      name: "सुंदरबन",
      region: "पश्चिम बंगाल",
      info: "सुंदरबन ही जगातील सर्वात मोठी मॅन्ग्रोव्ह जलभूमी आहे. ती किनारी भागांचे संरक्षण करते, जैवविविधतेला आधार देते, कार्बन साठवते आणि मत्स्यव्यवसाय करणाऱ्या समुदायांना मदत करते."
    },
    chilika: {
      name: "चिलिका तलाव",
      region: "ओडिशा",
      info: "चिलिका भारतातील सर्वात मोठी खारट पाण्याची लगून आहे. ती स्थलांतरित पक्षी, मत्स्यव्यवसाय, पर्यटन आणि स्थानिक उपजीविकेला आधार देते."
    },
    loktak: {
      name: "लोकटक तलाव",
      region: "मणिपूर",
      info: "लोकटक त्याच्या तरंगत्या फुमदींसाठी प्रसिद्ध आहे. तो गोड्या पाण्यातील जैवविविधता, मत्स्यव्यवसाय आणि पर्यावरणीय समतोलाला आधार देतो."
    },
    wular: {
      name: "वुलर तलाव",
      region: "जम्मू आणि काश्मीर",
      info: "वुलर हा आशियातील सर्वात मोठ्या गोड्या पाण्याच्या तलावांपैकी एक आहे. तो पूरनियंत्रण, मत्स्यव्यवसाय आणि जलसमतोल राखण्यात मदत करतो."
    },
    vembanad: {
      name: "वेंबनाड तलाव",
      region: "केरळ",
      info: "वेंबनाड केरळमधील बॅकवॉटर परिसंस्था, शेती, वाहतूक, जैवविविधता आणि पर्यटनाला आधार देते."
    },
    pulicat: {
      name: "पुलिकट तलाव",
      region: "आंध्र प्रदेश / तमिळनाडू",
      info: "पुलिकट ही एक महत्त्वाची लगून जलभूमी आहे जी पक्षी, मत्स्यव्यवसाय आणि किनारी पर्यावरणीय आधारासाठी ओळखली जाते."
    },
    harike: {
      name: "हरीके जलभूमी",
      region: "पंजाब",
      info: "हरीके ही उत्तर भारतातील महत्त्वाची जलभूमी आहे जी स्थलांतरित पक्षी, सिंचन आणि जैवविविधता संवर्धनाला आधार देते."
    },
    deepor: {
      name: "डीपोर बील",
      region: "आसाम",
      info: "डीपोर बील हे गोड्या पाण्याचे सरोवर आणि पक्ष्यांचे अधिवास आहे. ते पूर नियंत्रण आणि स्थानिक परिसंस्थेच्या आरोग्यासही मदत करते."
    },
    "east-kolkata": {
      name: "ईस्ट कोलकाता जलभूमी",
      region: "पश्चिम बंगाल",
      info: "ईस्ट कोलकाता जलभूमी नैसर्गिक सांडपाणी शुद्धीकरण, मत्स्यव्यवसाय, शेती आणि शहरी पर्यावरणीय मूल्यासाठी प्रसिद्ध आहे."
    },
    keoladeo: {
      name: "केवलादेव राष्ट्रीय उद्यान",
      region: "राजस्थान",
      info: "केवलादेव हे प्रसिद्ध जलभूमी पक्षी अधिवास आहे ज्याला उच्च पर्यावरणीय मूल्य, पर्यटन महत्त्व आणि संवर्धन महत्त्व आहे."
    }
  }
};

const wetlandMediaTranslations = {
  en: {
    sundarbans: {
      caption1: "Sundarbans mangrove forest and river channel",
      caption2: "Sundarbans river through the mangrove wetland",
      fact: "Largest mangrove wetland in the world, important for coastal protection and biodiversity."
    },
    chilika: {
      caption1: "Chilika Lake lagoon landscape in Odisha",
      caption2: "Migratory birds at Chilika Lake",
      fact: "India's largest brackish water lagoon with major fishery and migratory bird importance."
    },
    loktak: {
      caption1: "Fisherman among phumdis on Loktak Lake",
      caption2: "Floating phumdi islands on Loktak Lake",
      fact: "Known for floating phumdis and unique freshwater ecological importance."
    },
    wular: {
      caption1: "Wular Lake freshwater wetland view",
      caption2: "Wular Lake and surrounding hills",
      fact: "One of Asia's largest freshwater lakes, important for flood control and fisheries."
    },
    vembanad: {
      caption1: "Vembanad Lake backwater wetland",
      caption2: "Houseboat on Vembanad Lake backwaters",
      fact: "A major backwater wetland supporting biodiversity, transport, tourism, and livelihoods."
    },
    pulicat: {
      caption1: "Pulicat Lake coastal lagoon near Sriharikota",
      caption2: "Pulicat Lake waterbody and wetland edge",
      fact: "An important lagoon wetland known for birds, fishing, and coastal ecological support."
    },
    harike: {
      caption1: "Harike Wetland Ramsar site in Punjab",
      caption2: "Birds flying over Harike Wetland",
      fact: "A northern Indian wetland important for migratory birds, irrigation, and conservation."
    },
    deepor: {
      caption1: "Deepor Beel freshwater wetland in Assam",
      caption2: "Wide view of Deepor Beel near Guwahati",
      fact: "A freshwater wetland supporting birds, flood moderation, and local ecosystem health."
    },
    "east-kolkata": {
      caption1: "Lake inside the East Kolkata Wetlands",
      caption2: "Fishing landscape in the East Kolkata Wetlands",
      fact: "Famous for natural wastewater treatment, fisheries, agriculture, and urban ecological value."
    },
    keoladeo: {
      caption1: "Water birds in Keoladeo National Park",
      caption2: "Wetland habitat inside Keoladeo National Park",
      fact: "A globally known wetland bird habitat with high tourism and conservation importance."
    }
  },
  hi: {
    sundarbans: {
      caption1: "सुंदरबन मैंग्रोव वन और नदी चैनल",
      caption2: "मैंग्रोव आर्द्रभूमि से गुजरती सुंदरबन नदी",
      fact: "दुनिया की सबसे बड़ी मैंग्रोव आर्द्रभूमि, जो तटीय संरक्षण और जैव विविधता के लिए महत्वपूर्ण है।"
    },
    chilika: {
      caption1: "ओडिशा में चिलिका झील की लैगून भूमि",
      caption2: "चिलिका झील में प्रवासी पक्षी",
      fact: "भारत की सबसे बड़ी खारे पानी की लैगून, जो मत्स्य पालन और प्रवासी पक्षियों के लिए बहुत महत्वपूर्ण है।"
    },
    loktak: {
      caption1: "लोकटक झील में फुमदी के बीच मछुआरा",
      caption2: "लोकटक झील के तैरते फुमदी द्वीप",
      fact: "तैरती फुमदी और अद्वितीय मीठे पानी के पारिस्थितिक महत्व के लिए प्रसिद्ध।"
    },
    wular: {
      caption1: "वुलर झील की मीठे पानी की आर्द्रभूमि",
      caption2: "वुलर झील और आसपास की पहाड़ियाँ",
      fact: "एशिया की सबसे बड़ी मीठे पानी की झीलों में से एक, जो बाढ़ नियंत्रण और मत्स्य पालन के लिए महत्वपूर्ण है।"
    },
    vembanad: {
      caption1: "वेंबनाड झील की बैकवॉटर आर्द्रभूमि",
      caption2: "वेंबनाड बैकवॉटर में हाउसबोट",
      fact: "एक प्रमुख बैकवॉटर आर्द्रभूमि जो जैव विविधता, परिवहन, पर्यटन और आजीविका को सहारा देती है।"
    },
    pulicat: {
      caption1: "श्रीहरिकोटा के पास पुलिकट झील की तटीय लैगून",
      caption2: "पुलिकट झील का जलक्षेत्र और आर्द्रभूमि किनारा",
      fact: "पक्षियों, मत्स्य पालन और तटीय पारिस्थितिक समर्थन के लिए जानी जाने वाली महत्वपूर्ण लैगून आर्द्रभूमि।"
    },
    harike: {
      caption1: "पंजाब में हरीके आर्द्रभूमि रामसर स्थल",
      caption2: "हरीके आर्द्रभूमि के ऊपर उड़ते पक्षी",
      fact: "उत्तर भारत की महत्वपूर्ण आर्द्रभूमि, जो प्रवासी पक्षियों, सिंचाई और संरक्षण के लिए महत्वपूर्ण है।"
    },
    deepor: {
      caption1: "असम की डीपोर बील मीठे पानी की आर्द्रभूमि",
      caption2: "गुवाहाटी के पास डीपोर बील का विस्तृत दृश्य",
      fact: "मीठे पानी की आर्द्रभूमि, जो पक्षियों, बाढ़ नियंत्रण और स्थानीय पारितंत्र स्वास्थ्य को सहारा देती है।"
    },
    "east-kolkata": {
      caption1: "ईस्ट कोलकाता आर्द्रभूमियों के भीतर झील",
      caption2: "ईस्ट कोलकाता आर्द्रभूमियों का मत्स्य परिदृश्य",
      fact: "प्राकृतिक अपशिष्ट जल शोधन, मत्स्य पालन, कृषि और शहरी पारिस्थितिक मूल्य के लिए प्रसिद्ध।"
    },
    keoladeo: {
      caption1: "केवलादेव राष्ट्रीय उद्यान में जलपक्षी",
      caption2: "केवलादेव राष्ट्रीय उद्यान के भीतर आर्द्रभूमि आवास",
      fact: "विश्वप्रसिद्ध आर्द्रभूमि पक्षी आवास, जिसका पर्यटन और संरक्षण महत्व बहुत अधिक है।"
    }
  },
  mr: {
    sundarbans: {
      caption1: "सुंदरबन मॅन्ग्रोव्ह वन आणि नदीमार्ग",
      caption2: "मॅन्ग्रोव्ह जलभूमीतून जाणारी सुंदरबन नदी",
      fact: "जगातील सर्वात मोठी मॅन्ग्रोव्ह जलभूमी, किनारी संरक्षण आणि जैवविविधतेसाठी महत्त्वाची."
    },
    chilika: {
      caption1: "ओडिशातील चिलिका तलावाची लगून भूमी",
      caption2: "चिलिका तलावातील स्थलांतरित पक्षी",
      fact: "भारताची सर्वात मोठी खारट पाण्याची लगून, मत्स्यव्यवसाय आणि स्थलांतरित पक्ष्यांसाठी अत्यंत महत्त्वाची."
    },
    loktak: {
      caption1: "लोकटक तलावातील फुमदींमध्ये मच्छीमार",
      caption2: "लोकटक तलावातील तरंगती फुमदी बेटे",
      fact: "तरंगत्या फुमदी आणि वैशिष्ट्यपूर्ण गोड्या पाण्याच्या पर्यावरणीय महत्त्वासाठी ओळखले जाते."
    },
    wular: {
      caption1: "वुलर तलावाची गोड्या पाण्याची जलभूमी",
      caption2: "वुलर तलाव आणि आसपासची डोंगररांग",
      fact: "आशियातील सर्वात मोठ्या गोड्या पाण्याच्या तलावांपैकी एक, पूरनियंत्रण आणि मत्स्यव्यवसायासाठी महत्त्वाचा."
    },
    vembanad: {
      caption1: "वेंबनाड तलावाची बॅकवॉटर जलभूमी",
      caption2: "वेंबनाड बॅकवॉटरमधील हाउसबोट",
      fact: "जैवविविधता, वाहतूक, पर्यटन आणि उपजीविकेला आधार देणारी प्रमुख बॅकवॉटर जलभूमी."
    },
    pulicat: {
      caption1: "श्रीहरिकोटाजवळील पुलिकट तलावाची किनारी लगून",
      caption2: "पुलिकट तलावाचे जलक्षेत्र आणि जलभूमी किनारा",
      fact: "पक्षी, मत्स्यव्यवसाय आणि किनारी पर्यावरणीय आधारासाठी ओळखली जाणारी महत्त्वाची लगून जलभूमी."
    },
    harike: {
      caption1: "पंजाबमधील हरीके जलभूमी रामसर स्थळ",
      caption2: "हरीके जलभूमीवर उडणारे पक्षी",
      fact: "उत्तर भारतातील महत्त्वाची जलभूमी, स्थलांतरित पक्षी, सिंचन आणि संवर्धनासाठी उपयुक्त."
    },
    deepor: {
      caption1: "आसाममधील डीपोर बील गोड्या पाण्याची जलभूमी",
      caption2: "गुवाहाटीजवळील डीपोर बीलचे विस्तृत दृश्य",
      fact: "पक्षी, पूरनियंत्रण आणि स्थानिक परिसंस्थेच्या आरोग्याला आधार देणारी गोड्या पाण्याची जलभूमी."
    },
    "east-kolkata": {
      caption1: "ईस्ट कोलकाता जलभूमीतील तलाव",
      caption2: "ईस्ट कोलकाता जलभूमीतील मत्स्यव्यवसाय दृश्य",
      fact: "नैसर्गिक सांडपाणी शुद्धीकरण, मत्स्यव्यवसाय, शेती आणि शहरी पर्यावरणीय मूल्यासाठी प्रसिद्ध."
    },
    keoladeo: {
      caption1: "केवलादेव राष्ट्रीय उद्यानातील जलपक्षी",
      caption2: "केवलादेव राष्ट्रीय उद्यानातील जलभूमी अधिवास",
      fact: "जागतिक स्तरावर प्रसिद्ध जलभूमी पक्षी अधिवास, पर्यटन आणि संवर्धनासाठी अत्यंत महत्त्वाचा."
    }
  }
};

const closeSidebar = () => {
  if (sidebar) {
    sidebar.classList.remove("is-open");
  }
  if (sidebarOverlay) {
    sidebarOverlay.classList.remove("is-visible");
  }
};

const openSidebar = () => {
  if (sidebar) {
    sidebar.classList.add("is-open");
  }
  if (sidebarOverlay) {
    sidebarOverlay.classList.add("is-visible");
  }
};

const updateTopbarVisibility = (pageName) => {
  if (!topbar) return;
  topbar.classList.toggle("is-hidden", pageName === "home");
};

const hasBrokenTranslation = (value) =>
  typeof value === "string" &&
  (
    value.includes("?") ||
    /[à-ÿĀ-ſ]/.test(value)
  );

const translate = (key) => {
  if (key.startsWith("evaluation.")) {
    const evaluationKey = key.replace("evaluation.", "");
    return getEvaluationCopy(evaluationKey);
  }

  const override = safeTranslationOverrides[currentLanguage]?.[key];
  if (override) return override;

  const localizedValue = translations[currentLanguage] && translations[currentLanguage][key];
  if (localizedValue && !hasBrokenTranslation(localizedValue)) {
    return localizedValue;
  }

  return (translations.en && translations.en[key]) || key;
};

const cp1252ByteMap = {
  "€": 0x80,
  "?": 0x82,
  "ƒ": 0x83,
  "?": 0x84,
  "?": 0x85,
  "?": 0x86,
  "?": 0x87,
  "ˆ": 0x88,
  "?": 0x89,
  "Š": 0x8A,
  "?": 0x8B,
  "Œ": 0x8C,
  "Ž": 0x8E,
  "?": 0x91,
  "?": 0x92,
  "?": 0x93,
  "?": 0x94,
  "?": 0x95,
  "–": 0x96,
  "—": 0x97,
  "˜": 0x98,
  "™": 0x99,
  "š": 0x9A,
  "?": 0x9B,
  "œ": 0x9C,
  "ž": 0x9E,
  "Ÿ": 0x9F
};

const decodeMojibake = (value) => {
  if (typeof value !== "string" || !/[\u00C0-\u00FF]/.test(value)) return value;

  try {
    let repairedValue = value;

    for (let attempt = 0; attempt < 2; attempt += 1) {
      const bytes = Uint8Array.from([...repairedValue].map((character) => {
        const code = character.charCodeAt(0);

        if (code <= 0xFF) {
          return code;
        }

        return cp1252ByteMap[character] ?? 0x3F;
      }));

      const decoded = new TextDecoder("utf-8").decode(bytes);
      if (decoded === repairedValue) {
        break;
      }
      repairedValue = decoded;
    }

    return repairedValue;
  } catch (error) {
    return value;
  }
};

const deepDecodeMojibake = (value) => {
  if (Array.isArray(value)) {
    return value.map((item) => deepDecodeMojibake(item));
  }

  if (value && typeof value === "object") {
    Object.keys(value).forEach((key) => {
      value[key] = deepDecodeMojibake(value[key]);
    });
    return value;
  }

  return decodeMojibake(value);
};

deepDecodeMojibake(translations.hi);
deepDecodeMojibake(translations.mr);
deepDecodeMojibake(quizQuestions);

const formatTranslatedMessage = (key, values = {}) => {
  let message = translate(key);
  Object.entries(values).forEach(([name, value]) => {
    message = message.replace(`{${name}}`, value);
  });
  return message;
};

const getTopServiceLabel = (values) => {
  const serviceEntries = [
    { label: translate("services.bio"), value: values.biodiversity },
    { label: translate("services.water"), value: values.water },
    { label: translate("services.carbon"), value: values.carbon },
    { label: translate("services.live"), value: values.livelihood }
  ];

  return serviceEntries.sort((left, right) => right.value - left.value)[0].label;
};

const getScenarioFocusLabel = (button) => {
  if (!button) return translate("insight.focusCurrent");
  if (button.dataset.hectare === "45600") return translate("insight.focusRestored");
  if (button.dataset.hectare === "57000") return translate("insight.focusMangrove");
  return translate("insight.focusCurrent");
};

const savePreferredLanguage = (language) => {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, normalizeLanguage(language));
  } catch (error) {
    // Ignore storage errors and keep the session language in memory.
  }
};

const getSavedUser = () => {
  try {
    const saved = localStorage.getItem(SAVED_USER_KEY);
    if (!saved) return null;

    const profile = JSON.parse(saved);
    if (profile) {
      profile.language = normalizeLanguage(profile.language);
    }
    return profile;
  } catch (error) {
    return null;
  }
};

const saveUserLocally = (profile) => {
  const savedProfile = {
    ...profile,
    language: normalizeLanguage(profile.language || currentLanguage)
  };

  localStorage.setItem(SAVED_USER_KEY, JSON.stringify(savedProfile));
  savePreferredLanguage(savedProfile.language);
};

const clearSavedUser = () => {
  localStorage.removeItem(SAVED_USER_KEY);
};

const getQuizRecords = () => {
  try {
    const saved = localStorage.getItem(QUIZ_RESULTS_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    return [];
  }
};

const saveQuizRecords = (records) => {
  localStorage.setItem(QUIZ_RESULTS_KEY, JSON.stringify(records));
};

const clearQuizRecords = () => {
  localStorage.removeItem(QUIZ_RESULTS_KEY);
};

const getQuizRecordForProfile = (profile) => {
  if (!profile?.email) return null;
  return getQuizRecords().find((item) => item.email === profile.email) || null;
};

const evaluationCopy = {
  en: {
    button: "Your Score",
    view: "View evaluation",
    unlock: "Complete quiz to unlock",
    topScore: "{score}% accuracy",
    summaryDefault: "Your saved quiz performance will appear here.",
    summaryEmpty: "Complete the quiz to view your score and detailed evaluation.",
    emptyTitle: "No quiz attempt found yet.",
    emptyText: "Your answer review, correct choices, and per-option accuracy will appear here after the quiz is submitted.",
    summaryFilled: "{score}% overall accuracy. Review your selected answers and the best answer for each question below.",
    roleCorrectChoice: "Your correct choice",
    roleYourChoice: "Your choice",
    roleCorrectAnswer: "Correct answer",
    accuracySuffix: "% accuracy"
  },
  hi: {
    button: "आपका स्कोर",
    view: "मूल्यांकन देखें",
    unlock: "क्विज पूरा करें",
    topScore: "{score}% सटीकता",
    summaryDefault: "आपका सहेजा गया क्विज प्रदर्शन यहां दिखाई देगा।",
    summaryEmpty: "अपना स्कोर और विस्तृत मूल्यांकन देखने के लिए क्विज पूरा करें।",
    emptyTitle: "अभी तक कोई क्विज प्रयास नहीं मिला।",
    emptyText: "क्विज जमा होने के बाद यहां आपके उत्तर, सही विकल्प और प्रत्येक विकल्प की सटीकता दिखाई देगी।",
    summaryFilled: "{score}% कुल सटीकता। नीचे अपने चुने गए उत्तर और प्रत्येक प्रश्न का सबसे सही उत्तर देखें।",
    roleCorrectChoice: "आपका सही विकल्प",
    roleYourChoice: "आपका विकल्प",
    roleCorrectAnswer: "सही उत्तर",
    accuracySuffix: "% सटीकता"
  },
  mr: {
    button: "तुमचा स्कोअर",
    view: "मूल्यमापन पहा",
    unlock: "क्विझ पूर्ण करा",
    topScore: "{score}% अचूकता",
    summaryDefault: "तुमची जतन केलेली क्विझ कामगिरी येथे दिसेल.",
    summaryEmpty: "तुमचा स्कोअर आणि सविस्तर मूल्यमापन पाहण्यासाठी क्विझ पूर्ण करा.",
    emptyTitle: "अजून कोणताही क्विझ प्रयत्न सापडलेला नाही.",
    emptyText: "क्विझ सबमिट झाल्यानंतर येथे तुमची उत्तरे, बरोबर पर्याय आणि प्रत्येक पर्यायाची अचूकता दिसेल.",
    summaryFilled: "{score}% एकूण अचूकता. खाली तुमची निवडलेली उत्तरे आणि प्रत्येक प्रश्नाचे सर्वोत्तम उत्तर पहा.",
    roleCorrectChoice: "तुमची बरोबर निवड",
    roleYourChoice: "तुमची निवड",
    roleCorrectAnswer: "बरोबर उत्तर",
    accuracySuffix: "% अचूकता"
  }
};

const getEvaluationCopy = (key, values = {}) => {
  let message = evaluationCopy[currentLanguage]?.[key] || evaluationCopy.en[key] || "";
  Object.entries(values).forEach(([name, value]) => {
    message = message.replace(`{${name}}`, value);
  });
  return message;
};

const getCorrectOptionIndex = (question) =>
  question.options.reduce((bestIndex, option, index, options) =>
    option.score > options[bestIndex].score ? index : bestIndex, 0);

const updateEvaluationTriggerState = (profile = currentUserProfile || getSavedUser()) => {
  if (!evaluationTrigger || !topScoreLabel) return;

  const record = getQuizRecordForProfile(profile);
  const hasRecord = Boolean(record);

  evaluationTrigger.disabled = !hasRecord;
  evaluationTrigger.classList.toggle("is-disabled", !hasRecord);
  topScoreLabel.textContent = hasRecord ? getEvaluationCopy("topScore", { score: record.finalScore }) : getEvaluationCopy("unlock");
};

const getAccessState = () => {
  try {
    const saved = localStorage.getItem(APP_ACCESS_KEY);
    return saved ? JSON.parse(saved) : { ...accessState };
  } catch (error) {
    return { ...accessState };
  }
};

const saveAccessState = () => {
  localStorage.setItem(APP_ACCESS_KEY, JSON.stringify(accessState));
};

const getLocalizedText = (entry) => {
  if (!entry) return "";
  if (typeof entry === "string") return entry;
  return entry[currentLanguage] || entry.en || Object.values(entry)[0] || "";
};

const getWetlandLocalizedContent = (wetlandKey) =>
  wetlandTranslations[currentLanguage]?.[wetlandKey] ||
  wetlandTranslations.en[wetlandKey] ||
  wetlands[wetlandKey];

const getWetlandMediaLocalizedContent = (wetlandKey) =>
  wetlandMediaTranslations[currentLanguage]?.[wetlandKey] ||
  wetlandMediaTranslations.en[wetlandKey] ||
  wetlandMedia[wetlandKey];

const formatArea = (value) => `${value} ${translate("common.areaUnit")}`;

const formatPerHectareValue = (value) =>
  `${formatCurrency(value)}/${translate("common.perHectareUnit")}`;

const getOnboardingPathLabel = (record) => {
  const pathCode = record.onboardingPathCode || (record.finalScore >= 80 ? "direct" : "basics");
  return pathCode === "direct" ? translate("admin.pathDirect") : translate("admin.pathBasics");
};

const calculateQuizScore = (answers) => {
  const total = quizQuestions.reduce((sum, question) => {
    const selectedIndex = answers[question.id];
    if (selectedIndex === undefined || !question.options[selectedIndex]) return sum;
    return sum + question.options[selectedIndex].score;
  }, 0);

  return Math.round(total / quizQuestions.length);
};

const buildQuizRecord = (profile, answers, score) => ({
  name: profile.name,
  email: profile.email,
  language: currentLanguage,
  answers: quizQuestions.map((question) => {
    const selectedIndex = answers[question.id];
    const option = question.options[selectedIndex];
    return {
      questionId: question.id,
      selectedIndex,
      question: question.question.en,
      selectedOption: option ? option.text.en : "-",
      score: option ? option.score : 0
    };
  }),
  finalScore: score,
  onboardingPathCode: score >= 80 ? "direct" : "basics",
  onboardingPath: score >= 80 ? "Direct App Access" : "Basics First",
  basicsCompleted: score >= 80 ? true : false,
  submittedAt: new Date().toLocaleString(getLocale())
});

const upsertQuizRecord = (record) => {
  const records = getQuizRecords();
  const existingIndex = records.findIndex((item) => item.email === record.email);
  if (existingIndex >= 0) {
    records[existingIndex] = record;
  } else {
    records.unshift(record);
  }
  saveQuizRecords(records);
};

const syncWetlandControlLabels = () => {
  if (wetlandSelect) {
    Array.from(wetlandSelect.options).forEach((option) => {
      const wetland = getWetlandLocalizedContent(option.value);
      if (wetland) {
        option.textContent = wetland.name;
      }
    });
  }

  mediaTabs.forEach((tab) => {
    const wetland = getWetlandLocalizedContent(tab.dataset.wetland);
    if (wetland) {
      tab.textContent = wetland.name;
    }
  });

  mapWetlandButtons.forEach((button) => {
    const wetland = getWetlandLocalizedContent(button.dataset.wetland);
    if (wetland) {
      button.textContent = wetland.name;
    }
  });
};

const syncMapMarkerLabels = () => {
  Object.entries(wetlandMarkers).forEach(([wetlandKey, marker]) => {
    const wetland = getWetlandLocalizedContent(wetlandKey);
    if (wetland && marker) {
      marker.bindPopup(`<strong>${wetland.name}</strong><br>${wetland.region}`);
    }
  });
};

const applyLanguage = () => {
  document.documentElement.lang = currentLanguage;
  savePreferredLanguage(currentLanguage);

  if (languageSelect) {
    const englishOption = languageSelect.querySelector('option[value="en"]');
    const hindiOption = languageSelect.querySelector('option[value="hi"]');
    const marathiOption = languageSelect.querySelector('option[value="mr"]');

    languageSelect.value = currentLanguage;
    if (englishOption) englishOption.textContent = "English";
    if (hindiOption) hindiOption.textContent = "\u0939\u093f\u0902\u0926\u0940";
    if (marathiOption) marathiOption.textContent = "\u092e\u0930\u093e\u0920\u0940";
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });

  if (clearAdminRecordsButton) {
    clearAdminRecordsButton.textContent = translate("admin.clear");
  }

  document.querySelectorAll("[data-placeholder]").forEach((element) => {
    element.placeholder = translate(element.dataset.placeholder);
  });

  if (scenarioSelect) {
    Array.from(scenarioSelect.options).forEach((option) => {
      if (option.dataset.i18n) {
        option.textContent = translate(option.dataset.i18n);
      }
    });
    if (customChartLabel) {
      customChartLabel.textContent = scenarioSelect.options[scenarioSelect.selectedIndex].text;
    }
  }

  syncWetlandControlLabels();
  syncMapMarkerLabels();

  const savedUser = getSavedUser();
  if (savedUser) {
    savedUserSummary.textContent = formatTranslatedMessage("messages.previousSummary", {
      name: savedUser.name,
      email: savedUser.email
    });
  } else {
    savedUserSummary.textContent = translate("signinChoice.desc");
  }

  if (loginStatus && loginStatus.dataset.state !== "custom") {
    loginStatus.textContent = translate("login.note");
  }

  if (peakWaterLabel) {
    peakWaterLabel.textContent = translate("stacked.bench1Value");
  }

  if (wetlandSelect) {
    setWetlandValues(wetlandSelect.value);
    setMediaWetland(wetlandSelect.value);
    setActiveMapWetland(wetlandSelect.value, false);
  }

  renderQuizQuestion();
  renderAdminRecords();
  updateEvaluationTriggerState(currentUserProfile || getSavedUser());
  renderEvaluationPanel();
  updateCalculatorOutputs();
  updateCurrentBarsFromInputs();
  setScenarioOutputs(document.querySelector(".scenario-button.is-active"));
};

const renderQuizQuestion = () => {
  if (!quizQuestionText || !quizOptions || !quizQuestions.length) return;

  const question = quizQuestions[quizCurrentIndex];
  if (!question) return;

  if (quizQuestionNumber) quizQuestionNumber.textContent = `${translate("quiz.small")} ${quizCurrentIndex + 1}`;
  if (quizQuestionText) quizQuestionText.textContent = getLocalizedText(question.question);
  if (quizProgressLabel) quizProgressLabel.textContent = `${quizCurrentIndex + 1} / ${quizQuestions.length}`;
  if (quizStatus && !quizStatus.dataset.state) quizStatus.textContent = translate("quiz.note");

  quizOptions.innerHTML = "";
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-option";
    if (quizAnswers[question.id] === index) {
      button.classList.add("is-selected");
    }
    button.textContent = getLocalizedText(option.text);
    button.addEventListener("click", () => {
      quizAnswers[question.id] = index;
      if (quizStatus) {
        quizStatus.dataset.state = "";
        quizStatus.textContent = translate("quiz.note");
      }
      renderQuizQuestion();
    });
    quizOptions.appendChild(button);
  });

  if (quizBackButton) {
    quizBackButton.disabled = quizCurrentIndex === 0;
  }

  if (quizNextButton) {
    quizNextButton.textContent = quizCurrentIndex === quizQuestions.length - 1 ? translate("quiz.submit") : translate("quiz.next");
  }
};

const renderAdminRecords = () => {
  if (!adminRecordsTable || !adminRecordCount || !adminEmptyState) return;

  const records = getQuizRecords();
  adminRecordCount.textContent = formatTranslatedMessage(
    records.length === 1 ? "admin.recordCountOne" : "admin.recordCount",
    { count: records.length }
  );
  adminEmptyState.style.display = records.length ? "none" : "block";

  if (!records.length) {
    adminRecordsTable.innerHTML = "";
    return;
  }

  const rows = records.map((record) => {
    const answerSummary = record.answers
      .map((answer, index) => {
        const question = quizQuestions.find((item) => item.id === answer.questionId);
        const optionText =
          question && answer.selectedIndex !== undefined && question.options[answer.selectedIndex]
            ? getLocalizedText(question.options[answer.selectedIndex].text)
            : answer.selectedOption;
        return `Q${index + 1}: ${optionText} (${answer.score}%)`;
      })
      .join("<br>");

    return `
      <tr>
        <td>${record.name}<br><small>${record.email}</small></td>
        <td>${answerSummary}</td>
        <td><span class="admin-score-badge">${record.finalScore}%</span></td>
        <td><span class="admin-path-badge">${getOnboardingPathLabel(record)}</span></td>
        <td>${record.submittedAt}</td>
      </tr>
    `;
  }).join("");

  adminRecordsTable.innerHTML = `
    <table class="admin-table">
      <thead>
        <tr>
          <th>${translate("admin.user")}</th>
          <th>${translate("admin.answers")}</th>
          <th>${translate("admin.score")}</th>
          <th>${translate("admin.path")}</th>
          <th>${translate("admin.time")}</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
};

const renderEvaluationPanel = () => {
  if (!evaluationSummary || !evaluationList) return;

  const activeProfile = currentUserProfile || getSavedUser();
  const record = getQuizRecordForProfile(activeProfile);

  if (!record) {
    evaluationSummary.textContent = getEvaluationCopy("summaryEmpty");
    evaluationList.innerHTML = `
      <div class="evaluation-empty">
        <strong>${getEvaluationCopy("emptyTitle")}</strong>
        <p>${getEvaluationCopy("emptyText")}</p>
      </div>
    `;
    return;
  }

  evaluationSummary.textContent = getEvaluationCopy("summaryFilled", { score: record.finalScore });

  const questionCards = quizQuestions.map((question, index) => {
    const answer = record.answers.find((item) => item.questionId === question.id) || {};
    const selectedIndex = Number.isInteger(answer.selectedIndex) ? answer.selectedIndex : -1;
    const correctIndex = getCorrectOptionIndex(question);

    const optionRows = question.options.map((option, optionIndex) => {
      const isSelected = optionIndex === selectedIndex;
      const isCorrect = optionIndex === correctIndex;
      const stateClass = isSelected && isCorrect
        ? "is-correct"
        : isSelected
          ? "is-wrong"
          : isCorrect
            ? "is-answer"
            : "";
      const marker = isSelected && isCorrect
        ? "✓"
        : isSelected
          ? "✕"
          : isCorrect
            ? "✓"
            : "";
      const roleLabel = isSelected && isCorrect
        ? getEvaluationCopy("roleCorrectChoice")
        : isSelected
          ? getEvaluationCopy("roleYourChoice")
          : isCorrect
            ? getEvaluationCopy("roleCorrectAnswer")
            : "";

      return `
        <div class="evaluation-option ${stateClass}">
          <div class="evaluation-option-main">
            <span class="evaluation-marker">${marker}</span>
            <span class="evaluation-option-text">${getLocalizedText(option.text)}</span>
          </div>
          <div class="evaluation-option-meta">
            <span class="evaluation-role">${roleLabel}</span>
            <span class="evaluation-accuracy">${getEvaluationCopy("topScore", { score: option.score })}</span>
          </div>
        </div>
      `;
    }).join("");

    return `
      <article class="evaluation-question-card">
        <div class="evaluation-question-head">
          <span class="status-pill">Q${index + 1}</span>
          <strong>${getLocalizedText(question.question)}</strong>
        </div>
        <div class="evaluation-options-grid">${optionRows}</div>
      </article>
    `;
  }).join("");

  evaluationList.innerHTML = questionCards;
};

const openEvaluation = () => {
  renderEvaluationPanel();
  if (evaluationOverlay) {
    evaluationOverlay.classList.add("is-visible");
  }
};

const closeEvaluationModal = () => {
  if (evaluationOverlay) {
    evaluationOverlay.classList.remove("is-visible");
  }
};

const setScenarioOutputs = (button) => {
  if (!button) return;
  areaValue.textContent = formatArea(button.dataset.area);
  animateDisplayValue(netValue, Number(button.dataset.net), formatCurrency, 460);
  animateDisplayValue(perHectareValue, Number(button.dataset.hectare), formatCurrency, 460);
  updateScenarioInsights(button);
};

const openQuizFlow = (profile) => {
  currentUserProfile = profile;
  quizCurrentIndex = 0;
  quizAnswers = {};
  if (quizStatus) {
    quizStatus.dataset.state = "";
    quizStatus.textContent = translate("quiz.note");
  }
  renderQuizQuestion();
  setActivePage("quiz", true);
};

const continueToMainApp = () => {
  accessState.basicsCompleted = true;
  saveAccessState();
  setActivePage("contents", true);
};

const applyStoredQuizResult = (record) => {
  accessState.quizCompleted = true;
  accessState.score = record.finalScore;
  accessState.needsLearning = record.finalScore < 80;
  accessState.basicsCompleted = record.finalScore >= 80 ? true : Boolean(record.basicsCompleted);
  saveAccessState();
};

const startUserJourney = (profile) => {
  currentUserProfile = profile;
  const existingRecord = getQuizRecords().find((item) => item.email === profile.email);

  if (!existingRecord) {
    accessState = {
      quizCompleted: false,
      score: 0,
      needsLearning: false,
      basicsCompleted: false
    };
    saveAccessState();
    openQuizFlow(profile);
    return;
  }

  applyStoredQuizResult(existingRecord);
  if (accessState.needsLearning && !accessState.basicsCompleted) {
    setActivePage("basics-intro", true);
  } else {
    setActivePage("contents", true);
  }
};

const submitQuiz = () => {
  const unanswered = quizQuestions.find((question) => quizAnswers[question.id] === undefined);
  if (unanswered) {
    if (quizStatus) {
      quizStatus.dataset.state = "custom";
      quizStatus.textContent = translate("quiz.completeAll");
    }
    return;
  }

  const finalScore = calculateQuizScore(quizAnswers);
  const record = buildQuizRecord(currentUserProfile, quizAnswers, finalScore);

  accessState = {
    quizCompleted: true,
    score: finalScore,
    needsLearning: finalScore < 80,
    basicsCompleted: finalScore >= 80
  };
  saveAccessState();
  upsertQuizRecord(record);
  renderAdminRecords();
  updateEvaluationTriggerState(currentUserProfile);
  renderEvaluationPanel();

  if (quizStatus) {
    quizStatus.dataset.state = "";
    quizStatus.textContent = finalScore >= 80 ? translate("quiz.pass") : translate("quiz.learn");
  }

  if (finalScore >= 80) {
    setTimeout(() => setActivePage("contents", true), 300);
  } else {
    setTimeout(() => setActivePage("basics-intro", true), 300);
  }
};

const setActivePage = (pageName, bypassGate = false) => {
  if (!bypassGate) {
    if (!accessState.quizCompleted && gatedPages.has(pageName)) {
      pageName = "quiz";
    } else if (accessState.quizCompleted && accessState.needsLearning && !accessState.basicsCompleted && gatedPages.has(pageName)) {
      pageName = "basics-intro";
    }
  }

  pageViews.forEach((page) => {
    page.classList.toggle("is-active", page.dataset.page === pageName);
  });

  moduleLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.page === pageName);
  });

  updateTopbarVisibility(pageName);
  closeSidebar();

  if (pageName === "wetland-map") {
    initWetlandMap();
  } else if (pageName === "admin") {
    renderAdminRecords();
  }
};

const openLogin = () => loginOverlay.classList.add("is-visible");
const closeLoginModal = () => loginOverlay.classList.remove("is-visible");
const openProfile = () => profileOverlay.classList.add("is-visible");
const closeProfileModal = () => profileOverlay.classList.remove("is-visible");
const openSigninChoice = () => signinChoiceOverlay.classList.add("is-visible");
const closeSigninChoice = () => signinChoiceOverlay.classList.remove("is-visible");

const logoutUser = () => {
  clearSavedUser();
  localStorage.removeItem(APP_ACCESS_KEY);
  currentUserProfile = null;
  accessState = {
    quizCompleted: false,
    score: 0,
    needsLearning: false,
    basicsCompleted: false
  };
  setProfileUI(null);
  updateEvaluationTriggerState(null);
  closeProfileModal();
  closeEvaluationModal();
  savedUserSummary.textContent = translate("signinChoice.desc");
  loginStatus.dataset.state = "";
  loginStatus.textContent = translate("login.note");
  setActivePage("home");
};

const setProfileUI = (profile) => {
  const defaultName = translate("profile.defaultName");
  const defaultEmail = translate("profile.defaultEmail");

  if (!profile) {
    topProfileName.textContent = defaultName;
    topProfileEmail.textContent = defaultEmail;
    profileAvatar.textContent = "U";
    viewName.textContent = "-";
    viewEmail.textContent = "-";
    viewCollege.textContent = "-";
    viewDegree.textContent = "-";
    viewYear.textContent = "-";
    viewSpecialization.textContent = "-";
    updateEvaluationTriggerState(null);
    return;
  }

  topProfileName.textContent = profile.name;
  topProfileEmail.textContent = profile.email;
  profileAvatar.textContent = profile.name.charAt(0).toUpperCase();

  viewName.textContent = profile.name;
  viewEmail.textContent = profile.email;
  viewCollege.textContent = profile.college;
  viewDegree.textContent = profile.degree;
  viewYear.textContent = profile.year;
  viewSpecialization.textContent = profile.specialization;
  updateEvaluationTriggerState(profile);
};

const formatCurrency = (value) =>
  new Intl.NumberFormat(getLocale(), {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);

const animatedValueFrames = new WeakMap();
const animatedValuePulseTimers = new WeakMap();

const animateDisplayValue = (element, value, formatter, duration = 420) => {
  if (!element) return;

  const reducedMotion = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targetValue = Number(value) || 0;
  const previousValue = Number(element.dataset.rawValue ?? targetValue) || 0;

  element.dataset.rawValue = String(targetValue);

  if (animatedValueFrames.has(element)) {
    cancelAnimationFrame(animatedValueFrames.get(element));
    animatedValueFrames.delete(element);
  }

  if (animatedValuePulseTimers.has(element)) {
    clearTimeout(animatedValuePulseTimers.get(element));
    animatedValuePulseTimers.delete(element);
  }

  if (reducedMotion || previousValue === targetValue) {
    element.textContent = formatter(targetValue);
    return;
  }

  element.classList.remove("value-animate-pop");
  void element.offsetWidth;
  element.classList.add("value-animate-pop");
  animatedValuePulseTimers.set(element, setTimeout(() => {
    element.classList.remove("value-animate-pop");
    animatedValuePulseTimers.delete(element);
  }, Math.max(260, duration)));

  const startTime = performance.now();

  const step = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const currentValue = previousValue + ((targetValue - previousValue) * eased);

    element.textContent = formatter(currentValue);

    if (progress < 1) {
      animatedValueFrames.set(element, requestAnimationFrame(step));
    } else {
      element.textContent = formatter(targetValue);
      animatedValueFrames.delete(element);
    }
  };

  animatedValueFrames.set(element, requestAnimationFrame(step));
};

const getCurrentInputValues = () => {
  const area = Number(inputArea.value) || 0;
  const biodiversity = Number(inputBiodiversity.value) || 0;
  const water = Number(inputWater.value) || 0;
  const carbon = Number(inputCarbon.value) || 0;
  const livelihood = Number(inputLivelihood.value) || 0;
  const management = Number(inputManagement.value) || 0;
  const protection = Number(inputProtection.value) || 0;

  const total = biodiversity + water + carbon + livelihood;
  const perHectare = area > 0 ? total / area : 0;
  const net = total - management - protection;

  return {
    area,
    biodiversity,
    water,
    carbon,
    livelihood,
    management,
    protection,
    total,
    perHectare,
    net
  };
};

const normalizeValues = (values) => {
  const total = values.reduce((sum, value) => sum + value, 0);
  if (!total) return [0, 0, 0, 0];
  return values.map((value) => Math.round((value / total) * 100));
};

const getServiceLabels = () => [
  translate("services.bio"),
  translate("services.water"),
  translate("services.carbon"),
  translate("services.live")
];

const setVerticalBars = (bars, percentages, labels) => {
  bars.forEach((bar, index) => {
    if (!bar) return;
    const value = percentages[index] || 0;
    bar.style.width = "";
    bar.style.height = `${Math.max(value * 2.4, 12)}px`;
    bar.textContent = `${labels[index]} ${value}%`;
    bar.setAttribute("aria-label", `${labels[index]} ${value}%`);
  });
};

const updateServiceShareLabels = (percentages) => {
  if (biodiversityValue) biodiversityValue.textContent = `${percentages[0]}%`;
  if (waterValue) waterValue.textContent = `${percentages[1]}%`;
  if (carbonValue) carbonValue.textContent = `${percentages[2]}%`;
  if (livelihoodValue) livelihoodValue.textContent = `${percentages[3]}%`;
};

const updateCurrentBars = (percentages) => {
  const serviceLabels = getServiceLabels();
  setVerticalBars(
    [currentBiodiversityBar, currentWaterBar, currentCarbonBar, currentLivelihoodBar],
    percentages,
    serviceLabels
  );
  updateServiceShareLabels(percentages);
  if (customPeakLabel) {
    customPeakLabel.textContent = serviceLabels[percentages.indexOf(Math.max(...percentages))];
  }
  if (serviceInsightChip) {
    serviceInsightChip.textContent = formatTranslatedMessage("insight.highestShare", {
      service: serviceLabels[percentages.indexOf(Math.max(...percentages))]
    });
  }
  if (serviceBalanceChip) {
    serviceBalanceChip.textContent = translate(
      Math.max(...percentages) >= 40 ? "insight.balanceFocused" : "insight.balanceDiverse"
    );
  }
};

const syncServiceSliders = (percentages) => {
  if (biodiversityRange) biodiversityRange.value = percentages[0];
  if (waterRange) waterRange.value = percentages[1];
  if (carbonRange) carbonRange.value = percentages[2];
  if (livelihoodRange) livelihoodRange.value = percentages[3];
};

const updateCurrentBarsFromInputs = () => {
  const { biodiversity, water, carbon, livelihood } = getCurrentInputValues();
  const percentages = normalizeValues([biodiversity, water, carbon, livelihood]);

  syncServiceSliders(percentages);
  updateCurrentBars(percentages);
};

const updateCalculatorOutputs = () => {
  const values = getCurrentInputValues();
  const topServiceLabel = getTopServiceLabel(values);

  animateDisplayValue(dashboardTotalValue, values.total, formatCurrency, 480);
  animateDisplayValue(dashboardPerHectareValue, values.perHectare, formatCurrency, 480);
  animateDisplayValue(dashboardNetValue, values.net, formatCurrency, 480);

  animateDisplayValue(multiBiodiversityValue, values.biodiversity, formatCurrency, 380);
  animateDisplayValue(multiWaterValue, values.water, formatCurrency, 380);
  animateDisplayValue(multiCarbonValue, values.carbon, formatCurrency, 380);
  animateDisplayValue(multiLivelihoodValue, values.livelihood, formatCurrency, 380);
  animateDisplayValue(multiTotalValue, values.total, formatCurrency, 460);
  multiAreaValue.textContent = formatArea(values.area);

  hectareFormulaText.textContent = formatTranslatedMessage("dashboard.hectareFormula", {
    total: formatCurrency(values.total),
    area: formatArea(values.area),
    perHectare: formatCurrency(values.perHectare)
  });
  animateDisplayValue(perHectareBigValue, values.perHectare, formatPerHectareValue, 460);
  animateDisplayValue(currentWetlandPerHectare, values.perHectare, formatPerHectareValue, 460);

  animateDisplayValue(netTotalServiceValue, values.total, formatCurrency, 420);
  animateDisplayValue(netManagementCostValue, values.management, (amount) => `- ${formatCurrency(amount)}`, 420);
  animateDisplayValue(netProtectionCostValue, values.protection, (amount) => `- ${formatCurrency(amount)}`, 420);
  animateDisplayValue(netFinalValueRow, values.net, formatCurrency, 460);
  animateDisplayValue(netBigValue, values.net, formatCurrency, 460);

  if (dashboardTopServiceChip) {
    dashboardTopServiceChip.textContent = formatTranslatedMessage("insight.topService", {
      service: topServiceLabel
    });
  }
  if (dashboardAreaChip) {
    dashboardAreaChip.textContent = formatTranslatedMessage("insight.coverage", {
      area: formatArea(values.area)
    });
  }
  if (dashboardNetChip) {
    dashboardNetChip.textContent = translate(values.net >= values.total * 0.75 ? "insight.netStrong" : "insight.netCareful");
  }

  updateCurrentBarsFromInputs();
};

const updateScenarioInsights = (button) => {
  if (scenarioPlanChip) {
    scenarioPlanChip.textContent = formatTranslatedMessage("insight.activePlan", {
      plan: button.textContent
    });
  }
  if (scenarioFocusChip) {
    scenarioFocusChip.textContent = formatTranslatedMessage("insight.focus", {
      focus: getScenarioFocusLabel(button)
    });
  }
};

const setWetlandValues = (wetlandKey) => {
  const wetland = wetlands[wetlandKey];
  const localizedWetland = getWetlandLocalizedContent(wetlandKey);
  if (!wetland) return;

  wetlandInfoTitle.textContent = localizedWetland.name;
  wetlandInfoRegion.textContent = localizedWetland.region;
  wetlandInfoText.textContent = localizedWetland.info;
  multiStateValue.textContent = localizedWetland.region;

  inputArea.value = wetland.area;
  inputBiodiversity.value = wetland.biodiversity;
  inputWater.value = wetland.water;
  inputCarbon.value = wetland.carbon;
  inputLivelihood.value = wetland.livelihood;
  inputManagement.value = wetland.management;
  inputProtection.value = wetland.protection;

  updateCalculatorOutputs();
};

const setMediaWetland = (wetlandKey) => {
  const wetland = wetlands[wetlandKey];
  const media = wetlandMedia[wetlandKey];
  const localizedWetland = getWetlandLocalizedContent(wetlandKey);
  const localizedMedia = getWetlandMediaLocalizedContent(wetlandKey);
  if (!wetland || !media) return;

  mediaWetlandTitle.textContent = localizedWetland.name;
  mediaWetlandRegion.textContent = localizedWetland.region;
  mediaWetlandFact.textContent = localizedMedia.fact;
  mediaImageOne.src = media.image1;
  mediaImageTwo.src = media.image2;
  mediaImageOne.alt = formatTranslatedMessage("common.imageAlt", { name: localizedWetland.name, index: 1 });
  mediaImageTwo.alt = formatTranslatedMessage("common.imageAlt", { name: localizedWetland.name, index: 2 });
  mediaCaptionOne.textContent = localizedMedia.caption1;
  mediaCaptionTwo.textContent = localizedMedia.caption2;
  mediaVideoLink.href = media.video;

  mediaTabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.wetland === wetlandKey);
  });
};

let wetlandMap = null;
const wetlandMarkers = {};

const setActiveMapWetland = (wetlandKey, shouldZoom = true) => {
  const wetland = wetlands[wetlandKey];
  const localizedWetland = getWetlandLocalizedContent(wetlandKey);
  const location = wetlandLocations[wetlandKey];
  if (!wetland || !location) return;

  if (mapWetlandTitle) mapWetlandTitle.textContent = localizedWetland.name;
  if (mapSelectedRegion) mapSelectedRegion.textContent = localizedWetland.region;
  if (mapWetlandInfo) mapWetlandInfo.textContent = localizedWetland.info;

  mapWetlandButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.wetland === wetlandKey);
  });

  if (wetlandMap && shouldZoom) {
    wetlandMap.flyTo([location.lat, location.lng], location.zoom, { duration: 1.1 });
  }

  if (wetlandMarkers[wetlandKey]) {
    wetlandMarkers[wetlandKey].openPopup();
  }
};

const initWetlandMap = () => {
  if (!wetlandMapElement || typeof L === "undefined") return;

  if (!wetlandMap) {
    wetlandMap = L.map(wetlandMapElement, {
      scrollWheelZoom: true
    }).setView([22.8, 79.6], 5);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(wetlandMap);

    Object.entries(wetlandLocations).forEach(([wetlandKey, location]) => {
      const wetland = getWetlandLocalizedContent(wetlandKey);
      if (!wetland) return;

      const marker = L.marker([location.lat, location.lng])
        .addTo(wetlandMap)
        .bindPopup(`<strong>${wetland.name}</strong><br>${wetland.region}`);

      marker.on("click", () => setActiveMapWetland(wetlandKey));
      wetlandMarkers[wetlandKey] = marker;
    });
  }

  setTimeout(() => {
    wetlandMap.invalidateSize();
    setActiveMapWetland("sundarbans", false);
  }, 80);
};

const openEntryFlow = () => {
  const savedUser = getSavedUser();

  if (savedUser) {
    savedUserSummary.textContent = formatTranslatedMessage("messages.previousSummary", {
      name: savedUser.name,
      email: savedUser.email
    });
    openSigninChoice();
  } else {
    openLogin();
  }
};

const continueAsPreviousUser = () => {
  const savedUser = getSavedUser();

  if (!savedUser) {
    closeSigninChoice();
    loginStatus.dataset.state = "custom";
    loginStatus.textContent = translate("messages.previousMissing");
    openLogin();
    return;
  }

  setProfileUI(savedUser);
  closeSigninChoice();
  currentLanguage = "en";
  applyLanguage();
  startUserJourney(savedUser);
};

const continueAsNewUser = () => {
  loginForm.reset();
  closeSigninChoice();
  loginStatus.dataset.state = "";
  loginStatus.textContent = translate("login.note");
  openLogin();
};

moduleLinks.forEach((link) => {
  link.addEventListener("click", () => setActivePage(link.dataset.page));
});

jumpButtons.forEach((button) => {
  button.addEventListener("click", () => setActivePage(button.dataset.pageTarget));
});

if (languageSelect) {
  languageSelect.addEventListener("change", () => {
    currentLanguage = normalizeLanguage(languageSelect.value);
    if (currentUserProfile) {
      currentUserProfile.language = currentLanguage;
      saveUserLocally(currentUserProfile);
    } else {
      savePreferredLanguage(currentLanguage);
    }
    applyLanguage();
  });
}

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    if (sidebar.classList.contains("is-open")) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });
}

if (sidebarOverlay) {
  sidebarOverlay.addEventListener("click", closeSidebar);
}

if (enterAppButton) {
  enterAppButton.addEventListener("click", openEntryFlow);
}

if (continuePreviousBtn) {
  continuePreviousBtn.addEventListener("click", continueAsPreviousUser);
}

if (continueNewBtn) {
  continueNewBtn.addEventListener("click", continueAsNewUser);
}

if (closeLogin) {
  closeLogin.addEventListener("click", closeLoginModal);
}

if (profileTrigger) {
  profileTrigger.addEventListener("click", openProfile);
}

if (evaluationTrigger) {
  evaluationTrigger.addEventListener("click", openEvaluation);
}

if (closeProfile) {
  closeProfile.addEventListener("click", closeProfileModal);
}

if (closeEvaluation) {
  closeEvaluation.addEventListener("click", closeEvaluationModal);
}

if (logoutButton) {
  logoutButton.addEventListener("click", logoutUser);
}

if (loginOverlay) {
  loginOverlay.addEventListener("click", (event) => {
    if (event.target === loginOverlay) closeLoginModal();
  });
}

if (signinChoiceOverlay) {
  signinChoiceOverlay.addEventListener("click", (event) => {
    if (event.target === signinChoiceOverlay) closeSigninChoice();
  });
}

if (profileOverlay) {
  profileOverlay.addEventListener("click", (event) => {
    if (event.target === profileOverlay) closeProfileModal();
  });
}

if (evaluationOverlay) {
  evaluationOverlay.addEventListener("click", (event) => {
    if (event.target === evaluationOverlay) closeEvaluationModal();
  });
}

scenarioButtons.forEach((button) => {
  button.addEventListener("click", () => {
    scenarioButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    setScenarioOutputs(button);
  });
});

if (clearAdminRecordsButton) {
  clearAdminRecordsButton.addEventListener("click", () => {
    clearQuizRecords();
    renderAdminRecords();
    updateEvaluationTriggerState(currentUserProfile);
    renderEvaluationPanel();
  });
}

const scenarioPresets = {
  current: { biodiversity: 30, water: 28, carbon: 16, livelihood: 26 },
  restored: { biodiversity: 26, water: 31, carbon: 18, livelihood: 25 },
  mangrove: { biodiversity: 27, water: 24, carbon: 25, livelihood: 24 }
};

const setSliderValues = (preset) => {
  biodiversityRange.value = preset.biodiversity;
  waterRange.value = preset.water;
  carbonRange.value = preset.carbon;
  livelihoodRange.value = preset.livelihood;
};

const updateCustomChart = () => {
  const rawValues = [
    Number(biodiversityRange.value),
    Number(waterRange.value),
    Number(carbonRange.value),
    Number(livelihoodRange.value)
  ];

  const normalized = normalizeValues(rawValues);
  updateCurrentBars(normalized);
};

if (scenarioSelect) {
  scenarioSelect.addEventListener("change", () => {
    if (customChartLabel) {
      customChartLabel.textContent = scenarioSelect.options[scenarioSelect.selectedIndex].text;
    }
    setSliderValues(scenarioPresets[scenarioSelect.value]);
    updateCustomChart();
  });
}

[biodiversityRange, waterRange, carbonRange, livelihoodRange].forEach((input) => {
  if (input) {
    input.addEventListener("input", updateCustomChart);
  }
});

[inputArea, inputBiodiversity, inputWater, inputCarbon, inputLivelihood, inputManagement, inputProtection].forEach((input) => {
  if (input) {
    input.addEventListener("input", updateCalculatorOutputs);
  }
});

if (wetlandSelect) {
  wetlandSelect.addEventListener("change", () => {
    setWetlandValues(wetlandSelect.value);
    setMediaWetland(wetlandSelect.value);
  });
}

mediaTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const wetlandKey = tab.dataset.wetland;
    setMediaWetland(wetlandKey);
    if (wetlandSelect) {
      wetlandSelect.value = wetlandKey;
      setWetlandValues(wetlandKey);
    }
  });
});

mapWetlandButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveMapWetland(button.dataset.wetland);
  });
});

learnNextButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextPage = button.dataset.nextPage;
    if (nextPage) {
      setActivePage(nextPage, true);
    }
  });
});

if (quizBackButton) {
  quizBackButton.addEventListener("click", () => {
    if (quizCurrentIndex > 0) {
      quizCurrentIndex -= 1;
      renderQuizQuestion();
    }
  });
}

if (quizNextButton) {
  quizNextButton.addEventListener("click", () => {
    const currentQuestion = quizQuestions[quizCurrentIndex];
    if (quizAnswers[currentQuestion.id] === undefined) {
      if (quizStatus) {
        quizStatus.dataset.state = "custom";
        quizStatus.textContent = translate("quiz.completeAll");
      }
      return;
    }

    if (quizCurrentIndex === quizQuestions.length - 1) {
      submitQuiz();
    } else {
      quizCurrentIndex += 1;
      renderQuizQuestion();
    }
  });
}

if (enterMainAppButton) {
  enterMainAppButton.addEventListener("click", continueToMainApp);
}

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const profile = {
      name: loginName.value.trim(),
      email: loginEmail.value.trim(),
      language: currentLanguage,
      college: loginCollege.value.trim(),
      degree: loginDegree.value.trim(),
      year: loginYear.value.trim(),
      specialization: loginSpecialization.value.trim()
    };

    if (!profile.name || !profile.email || !loginPassword.value.trim() || !profile.college || !profile.degree || !profile.year || !profile.specialization) {
      loginStatus.dataset.state = "custom";
      loginStatus.textContent = translate("messages.fillAll");
      return;
    }

    currentLanguage = normalizeLanguage(profile.language);
    saveUserLocally(profile);
    setProfileUI(profile);
    currentUserProfile = profile;
    loginStatus.dataset.state = "custom";
    loginStatus.textContent = translate("messages.success");
    closeLoginModal();
    loginForm.reset();
    loginStatus.dataset.state = "";
    loginStatus.textContent = translate("login.note");
    applyLanguage();
    startUserJourney(profile);
  });
}

currentLanguage = "en";
setProfileUI(getSavedUser());
accessState = getAccessState();
applyLanguage();
setWetlandValues("sundarbans");
setMediaWetland("sundarbans");
setActivePage("home");
