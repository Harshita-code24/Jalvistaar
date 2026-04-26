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

const SAVED_USER_KEY = "jalvistaar-saved-user";
let currentLanguage = localStorage.getItem("jalvistaar-language") || "en";

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
    "dashboard.inputBio": "Biodiversity Value (₹)",
    "dashboard.inputWater": "Water Value (₹)",
    "dashboard.inputCarbon": "Carbon Value (₹)",
    "dashboard.inputLive": "Livelihood Value (₹)",
    "dashboard.inputMgmt": "Management Cost (₹)",
    "dashboard.inputProtect": "Protection Cost (₹)",
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
    "messages.previousSummary": "Previous user: {name} ({email})"
  },
  hi: {},
  mr: {}
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

const translate = (key) => (translations[currentLanguage] && translations[currentLanguage][key]) || key;

const formatTranslatedMessage = (key, values = {}) => {
  let message = translate(key);
  Object.entries(values).forEach(([name, value]) => {
    message = message.replace(`{${name}}`, value);
  });
  return message;
};

const getSavedUser = () => {
  try {
    const saved = localStorage.getItem(SAVED_USER_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    return null;
  }
};

const saveUserLocally = (profile) => {
  localStorage.setItem(SAVED_USER_KEY, JSON.stringify(profile));
};

const clearSavedUser = () => {
  localStorage.removeItem(SAVED_USER_KEY);
};

const applyLanguage = () => {
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });

  document.querySelectorAll("[data-placeholder]").forEach((element) => {
    element.placeholder = translate(element.dataset.placeholder);
  });

  if (scenarioSelect) {
    Array.from(scenarioSelect.options).forEach((option) => {
      if (option.dataset.i18n) {
        option.textContent = translate(option.dataset.i18n);
      }
    });
    customChartLabel.textContent = scenarioSelect.options[scenarioSelect.selectedIndex].text;
  }

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

  updateCurrentBarsFromInputs();
};

const setActivePage = (pageName) => {
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
  setProfileUI(null);
  closeProfileModal();
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
};

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);

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
  setVerticalBars(
    [currentBiodiversityBar, currentWaterBar, currentCarbonBar, currentLivelihoodBar],
    percentages,
    getServiceLabels()
  );
  updateServiceShareLabels(percentages);
  customPeakLabel.textContent = getServiceLabels()[percentages.indexOf(Math.max(...percentages))];
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

  dashboardTotalValue.textContent = formatCurrency(values.total);
  dashboardPerHectareValue.textContent = formatCurrency(values.perHectare);
  dashboardNetValue.textContent = formatCurrency(values.net);

  multiBiodiversityValue.textContent = formatCurrency(values.biodiversity);
  multiWaterValue.textContent = formatCurrency(values.water);
  multiCarbonValue.textContent = formatCurrency(values.carbon);
  multiLivelihoodValue.textContent = formatCurrency(values.livelihood);
  multiTotalValue.textContent = formatCurrency(values.total);
  multiAreaValue.textContent = `${values.area} ha`;

  hectareFormulaText.textContent = `${formatCurrency(values.total)} / ${values.area} ha = ${formatCurrency(values.perHectare)} per hectare`;
  perHectareBigValue.textContent = `${formatCurrency(values.perHectare)}/ha`;
  currentWetlandPerHectare.textContent = `${formatCurrency(values.perHectare)}/ha`;

  netTotalServiceValue.textContent = formatCurrency(values.total);
  netManagementCostValue.textContent = `- ${formatCurrency(values.management)}`;
  netProtectionCostValue.textContent = `- ${formatCurrency(values.protection)}`;
  netFinalValueRow.textContent = formatCurrency(values.net);
  netBigValue.textContent = formatCurrency(values.net);

  updateCurrentBarsFromInputs();
};

const setWetlandValues = (wetlandKey) => {
  const wetland = wetlands[wetlandKey];
  if (!wetland) return;

  wetlandInfoTitle.textContent = wetland.name;
  wetlandInfoRegion.textContent = wetland.region;
  wetlandInfoText.textContent = wetland.info;
  multiStateValue.textContent = wetland.region;

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
  if (!wetland || !media) return;

  mediaWetlandTitle.textContent = wetland.name;
  mediaWetlandRegion.textContent = wetland.region;
  mediaWetlandFact.textContent = media.fact;
  mediaImageOne.src = media.image1;
  mediaImageTwo.src = media.image2;
  mediaImageOne.alt = `${wetland.name} image 1`;
  mediaImageTwo.alt = `${wetland.name} image 2`;
  mediaCaptionOne.textContent = media.caption1;
  mediaCaptionTwo.textContent = media.caption2;
  mediaVideoLink.href = media.video;

  mediaTabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.wetland === wetlandKey);
  });
};

let wetlandMap = null;
const wetlandMarkers = {};

const setActiveMapWetland = (wetlandKey, shouldZoom = true) => {
  const wetland = wetlands[wetlandKey];
  const location = wetlandLocations[wetlandKey];
  if (!wetland || !location) return;

  if (mapWetlandTitle) mapWetlandTitle.textContent = wetland.name;
  if (mapSelectedRegion) mapSelectedRegion.textContent = wetland.region;
  if (mapWetlandInfo) mapWetlandInfo.textContent = wetland.info;

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
      const wetland = wetlands[wetlandKey];
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
  setActivePage("contents");
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
  languageSelect.value = currentLanguage;
  languageSelect.addEventListener("change", () => {
    currentLanguage = languageSelect.value;
    localStorage.setItem("jalvistaar-language", currentLanguage);
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

if (closeProfile) {
  closeProfile.addEventListener("click", closeProfileModal);
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

scenarioButtons.forEach((button) => {
  button.addEventListener("click", () => {
    scenarioButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    areaValue.textContent = `${button.dataset.area} ha`;
    netValue.textContent = formatCurrency(Number(button.dataset.net));
    perHectareValue.textContent = formatCurrency(Number(button.dataset.hectare));
  });
});

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
    customChartLabel.textContent = scenarioSelect.options[scenarioSelect.selectedIndex].text;
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

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const profile = {
      name: loginName.value.trim(),
      email: loginEmail.value.trim(),
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

    saveUserLocally(profile);
    setProfileUI(profile);
    loginStatus.dataset.state = "custom";
    loginStatus.textContent = translate("messages.success");
    closeLoginModal();
    setActivePage("contents");
    loginForm.reset();
    loginStatus.dataset.state = "";
    loginStatus.textContent = translate("login.note");
  });
}

setProfileUI(getSavedUser());
applyLanguage();
setWetlandValues("sundarbans");
setMediaWetland("sundarbans");
setActivePage("home");
