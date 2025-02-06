//Initial values
let accountLinked = false;
let installedDate = null;
var clientData = null;

//Views
const unlinkedView = document.getElementById("connect-account");
const linkedView = document.getElementById("linked-account");
const appSettings = document.getElementById("app-settings-container");

//State Messages
const linkedState = document.getElementById("link-state");
const linkedStateLine = document.getElementById("link-state-line");
const errorMessage = document.getElementById("error-message");
const installedDateContainer = document.getElementById("installed-date");

//DropdownViews
const groupContainer = document.getElementById("group-dropdown");
const agentContainer = document.getElementById("agent-dropdown");

//Account linking states
const initialState = document.getElementById("initial-container");
const loadingState = document.getElementById("loading-container");
const errorState = document.getElementById("error-container");

//Inputs
const apiKeyInput = document.getElementById("api-key");
const freshchatDomainInput = document.getElementById("freshchat-domain");
const freshchatTokenInput = document.getElementById("freshchat-key");

let toast = { type: "", message: "", isVisible: false };
const appSettingsInput = document.getElementById("app-settings");

// Dropdown Inputs
const agentsSelect = document.getElementById("agent-list");
const groupsSelect = document.getElementById("group-list");

//Actions
const linkAccountButton = document.getElementById("link-account");
const retryButton = document.getElementById("retry-button");
const unlinkButton = document.getElementById("unlink-account");

//Anchor Tag
const appstle_link = document.getElementById("appstle_link");

let appstle_domain_url = "";

let appstle_admin = "";

const maxApiCallCount = 3;

let cancelReasons = [
  "Item is too expensive",
  "This was created by accident",
  "I already have more than I need",
  "I need it sooner",
  "I no longer use this product",
  "I want a different product or variety",
  "Other reason",
];

let cancelReasons1 = [];

let flag = false;

function validate() {
  if (accountLinked) {
    return true;
  } else {
    validateInputs();
    return false;
  }
}

function postConfigs() {
  return {
    __meta: {
      secure: ["appstle_apikey", "freshchat_token"],
    },
    appstle_apikey: apiKeyInput.value,
    freshchat_domain_input: freshchatDomainInput.value,
    appstledomainurl: appstle_domain_url,
    freshchat_token: freshchatTokenInput.value,
    account_authenticated: accountLinked,
    installed_date: installedDate,
    app_settings: appSettingsInput.value,
    agent_options: agentsSelect.options,
    selected_agents: agentsSelect.value,
    group_options: groupsSelect.options,
    selected_groups: groupsSelect.value,
    cancel_reasons: cancelReasons,
  };
}

function getConfigs(configs) {
  let {
    appstle_apikey,
    freshchat_domain_input,
    freshchat_token,
    appstledomainurl,
    account_authenticated,
    installed_date,
    app_settings,
    agent_options,
    selected_agents,
    group_options,
    selected_groups,
    cancel_reasons,
  } = configs;

  const apiKey = appstle_apikey;

  freshchatDomainInput.value = freshchat_domain_input;
  freshchatTokenInput.value = freshchat_token;
  apiKeyInput.value = apiKey;
  appstle_domain_url = appstledomainurl;
  accountLinked = account_authenticated;
  installedDate = installed_date;
  appSettingsInput.value = app_settings;
  agentsSelect.options = agent_options;
  agentsSelect.value = selected_agents;
  groupsSelect.options = group_options;
  groupsSelect.value = selected_groups;
  cancelReasons = cancel_reasons;
  return;
}

function resetDefaults() {
  apiKeyInput.value = "";
  freshchatDomainInput.value = "";
  freshchatTokenInput.value = "";
  appstle_domain_url = "";
  appSettings.value = "4";
  agentsSelect.options = [];
  agentsSelect.value = [];
  groupsSelect.options = [];
  groupsSelect.value = [];
  accountLinked = false;
  installedDate = null;
  cancelReasons = [
    "Item is too expensive",
    "This was created by accident",
    "I already have more than I need",
    "I need it sooner",
    "I no longer use this product",
    "I want a different product or variety",
    "Other reason",
  ];
}

function showLoading() {
  hideElement(initialState);
  showElement(loadingState);
}

function showError(message) {
  hideElement(loadingState);
  showElement(errorState);
  errorMessage.innerHTML = message;
}

function showToast(type, content) {
  // Create an fw-toast element
  const toastElement = document.createElement("fw-toast");
  toastElement.setAttribute("position", "top-center");
  toastElement.setAttribute("type", type);
  toastElement.setAttribute("content", content);

  // Attach the fw-toast element to the body
  document.body.appendChild(toastElement);

  // Trigger the toast
  toastElement.trigger();

  // Remove the fw-toast element after a certain time (e.g., 3 seconds)
  setTimeout(() => {
    document.body.removeChild(toastElement);
  }, 3000);
}

function hideElement(element) {
  element.classList.add("hide");
}

function showElement(element) {
  element.classList.remove("hide");
}

function homeScreen(isAccountLinked = false, installedDate = null) {
  let title = "";
  if (isAccountLinked) {
    title = "Connected account";
    installedDateContainer.innerHTML = installedDate;
    // Show the account is linked
    // Show the app settings
    showElement(linkedView);
    showElement(appSettings);
    showHideAgentGroups(appSettingsInput.value);
    //hide the unlinked view
    hideElement(unlinkedView);
    hideElement(loadingState);
    hideElement(errorState);
    linkedState.className = "";
    linkedState.style.fontWeight = "normal";
    linkedStateLine.className = "connected-accounts-line";
    renderReasonOptions();
  } else {
    title = "Connect your appstle account";
    // Allow user to input values
    showElement(unlinkedView);
    //hide the linkedview
    showElement(initialState);
    hideElement(errorState);
    hideElement(loadingState);
    hideElement(linkedView);
    hideElement(appSettings);
    hideElement(linkedStateLine);
    linkedState.className = "fw-type-semibold";
  }

  linkedState.innerHTML = title;
}

function formatDate(date) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const dateNum = date.getDate();
  const year = date.getFullYear();

  return ` ${dateNum} ${month} ${year}`;
}



function validateInput(field) {
  let fieldHasValue = field ? field.value.length > 0 : false;
  if (!fieldHasValue) {
    field.setAttribute("state", "error");
    field.setAttribute("error-text", "This field is empty");
    return false;
  } else {
    field.removeAttribute("state");
    field.removeAttribute("error-text");
    return true;
  }
}

function validateUrl(field) {
  let fieldHasValue = field ? field.value.length > 0 : false;
  if (!fieldHasValue) {
    field.setAttribute("state", "error");
    field.setAttribute("error-text", "This field is empty");
    return false;
  } else {
    // Check if the field value is a valid URL
    const urlPattern = /^([\w-]+)\.freshchat\.com$/;
    const isValidUrl = urlPattern.test(field.value);

    if (!isValidUrl) {
      field.setAttribute("state", "error");
      field.setAttribute("error-text", "Please enter a valid URL");
      return false;
    } else {
      field.removeAttribute("state");
      field.removeAttribute("error-text");
      return true;
    }
  }
}

function showHideAgentGroups(appSettingsVal) {
  if (appSettingsVal === "3") {
    showElement(groupContainer);
    hideElement(agentContainer);
  } else if (appSettingsVal === "4") {
    showElement(agentContainer);
    hideElement(groupContainer);
  } else {
    hideElement(groupContainer);
    hideElement(agentContainer);
  }
}

async function apiCallValidation() {
  try {
    const response = await client.request.invokeTemplate(
      "appstleAuthentication",
      {
        context: {
          apiKey: apiKeyInput.value,
        },
      }
    );

    const data = await JSON.parse(response.response);

    if (response.status >= 200 && response.status < 300) {
      extractSubdomain(data[0].shop);
      // API call successful
      await validateChat();
    } else {
      // Handle error
      throw new Error("API request failed");
    }
  } catch (error) {
    showToast("error", "Invalid Credentials. Please try again.");
    showError("Invalid Appstle Api key");
    throw error;
  }
}

async function getAgentDetails() {
  try {
    const response = await clientData?.request?.invokeTemplate(
      "getAgentDetails",
      {
        context: {
          freshchat_domain: freshchatDomainInput.value,
          freshchat_token: freshchatTokenInput.value,
        },
      }
    );

    const data = await JSON.parse(response.response);
    addAgentOptions(data.agents);
  } catch (e) {
    showError("Invalid Chat Domain and API Key");
    throw e;
  }
}


async function getGroupDetails() {
  try {
    const response = await clientData?.request?.invokeTemplate(
      "getGroupDetails",
      {
        context: {
          freshchat_domain: freshchatDomainInput.value,
          freshchat_token: freshchatTokenInput.value,
        },
      }
    );

    const data = await JSON.parse(response?.response);
    addGroupOptions(data.groups);
  } catch (e) {
    showError("Invalid Chat Domain and API Key");
    throw e;
  }
}

async function validateChat() {
  try {
    const response = await clientData.request.invokeTemplate(
      "chatAuthentication",
      {
        context: {
          freshchat_domain: freshchatDomainInput.value,
          freshchat_token: freshchatTokenInput.value,
        },
      }
    );
    if (response.status >= 200 && response.status < 300) {
      const data = await JSON.parse(response.response); // Here, response doesn't return any JSON data
    }
  } catch (e) {
    showToast("error", "Invalid Credentials. Please try again.");
    showError("Invalid Freshchat Domain or Token");
  }
}

async function validateKeys() {
  showLoading();
  try {
    await Promise.all([
      apiCallValidation(),
      getAgentDetails(),
      getGroupDetails(),
    ]);
    // If the code execution reaches here, all promises have resolved successfully
    showToast("success", "Authentication Successful");
    accountLinked = true;
    installedDate = formatDate(new Date());
    homeScreen(accountLinked, installedDate);
  } catch (error) {
    console.log("promise all fails");
  }
}

function addAgentOptions(list) {
  let agents = list.map(function (agent) {
    let name = agent.last_name
      ? `${agent.first_name} ${agent.last_name}`
      : agent.first_name;
    return {
      id: agent.id,
      name: name,
    };
  });
  agentsSelect.options = agents;
}

function addGroupOptions(list) {
  let groups = list.map(function (group) {
    return {
      id: group.id,
      name: group.name,
    };
  });
  groupsSelect.options = groups;
}

function validateInputs() {
  return (
    validateInput(apiKeyInput) &&
    validateUrl(freshchatDomainInput) &&
    validateInput(freshchatTokenInput)
  );
}

linkAccountButton.addEventListener("fwClick", (e) =>  {
  let hasValidInputs = validateInputs();
  if (hasValidInputs) {
    validateKeys();
  }
});

apiKeyInput.addEventListener("fwInput", (e) => {
  validateInput(e.target);
});

freshchatDomainInput.addEventListener("fwInput", (e) =>  {
  validateUrl(e.target);
});

freshchatTokenInput.addEventListener("fwInput", (e) =>  {
  validateInput(e.target);
});

retryButton.addEventListener("fwClick", (e) => {
  hideElement(errorState);
  showElement(initialState);
  homeScreen();
});

unlinkButton.addEventListener("fwClick", (e) =>  {
  resetDefaults();
  homeScreen();
});

apiKeyInput.removeEventListener("fwInput", (e) =>  {
  validateInput(e.target);
});

freshchatDomainInput.removeEventListener("fwInput", (e) =>  {
  validateUrl(e.target);
});

freshchatTokenInput.removeEventListener("fwInput", (e) =>  {
  validateInput(e.target);
});

retryButton.removeEventListener("fwClick", (e) =>  {
  hideElement(errorState);
  showElement(initialState);
  homeScreen();
});

unlinkButton.removeEventListener("fwClick", (e) =>  {
  resetDefaults();
  homeScreen();
});

document.onreadystatechange = function () {
  if (document.readyState === "interactive") renderApp();
  async function renderApp() {
    try {
      let client = await app.initialized();
      window.client = client;
      clientData = client;
      clientData.iparams.get().then(function (data) {
        accountLinked = data.account_authenticated;
        installedDate = data.installed_date;

        if(accountLinked) {
          getAgentDetails();
          getGroupDetails();
        }

        homeScreen(accountLinked, installedDate);
      });
    } catch (error) {
      console.log("Appstle App is not ready " + error);
    }
  }
};


const getReasonNode = function (reason, index) {
  const $template = new DOMParser()
    .parseFromString(reasonsTemplate(reason, index), "text/html")
    .querySelector(`.reason`);

  // doms
  const $content = $template.querySelector(".content");
  const $editor = $template.querySelector(".editor");
  const $contentValue = $template.querySelector(".content-value");
  const $editorInput = $template.querySelector(".editor-input");
  const $editBtn = $template.querySelector(".content .edit");
  const $deleteBtn = $template.querySelector(".content .delete");
  const $updateBtn = $template.querySelector(".editor .update");
  const $cancelBtn = $template.querySelector(".editor .cancel");

  $editBtn.addEventListener("click", function (e) {
    $editor.classList.remove("d-none");
    $content.classList.add("d-none");
  });

  $deleteBtn.addEventListener("click", function (e) {
    cancelReasons.splice(index, 1);
    renderReasonOptions();
  });

  $updateBtn.addEventListener("click", function (e) {
    const latestValue = $editorInput.value;
    cancelReasons[index] = latestValue;
    $contentValue.innerText = latestValue;
    $content.classList.remove("d-none");
    $editor.classList.add("d-none");
  });

  $cancelBtn.addEventListener("click", function (e) {
    const previousText = $contentValue.innerText;

    $editorInput.value = previousText;
    $content.classList.remove("d-none");
    $editor.classList.add("d-none");
  });

  let margin_left = 0;
  if(index < 9 && cancelReasons.length > 9) margin_left += 6;

  if (index === cancelReasons.length - 1) {
    const $lastIndex = $template.querySelector(".index");
    $lastIndex.style.display = 'none';
    const $content = $template.querySelector(".content-actions");
    $content.style.display = 'none';
    margin_left += 27;
    if(cancelReasons.length > 9) margin_left += 6;
  }
  $content.setAttribute('style', 'margin-left: '+ margin_left +'px;')

  return $template;
};


// render all reasons
const renderReasonOptions = async function () {
  let fragment = new DocumentFragment();

  cancelReasons.forEach((reason, index) => {
    const reasonsNode = getReasonNode(reason, index);
    fragment.appendChild(reasonsNode);
  });

  document.getElementById("reasons-container").innerHTML = "";
  document.getElementById("reasons-container").append(fragment);
  document.getElementById("reasons-container").style.display = "block";
};

document
  .getElementById("create-reason")
  .addEventListener("keypress", function (e) {
    const {
      code,
      target: { value },
    } = e;
    if (code === "Enter" && value) {
      e.target.value = "";
      const newIndex = cancelReasons.length - 1;
      cancelReasons.splice(newIndex, 0, value);
      renderReasonOptions();
      if(cancelReasons.length === 21) {
        document.getElementById("create-reason").style.display = 'none';
      }
    }
  });

const reasonsTemplate = (value, index) => {
  // Replace 'Specific Value' with the actual value that should hide content-actions
  const specificValue = "Other reason";

  const hideContentActions = value === specificValue ? "display: none;" : "";

  return `
      <div class="fw-flex fw-items-center fw-type-sm fw-m-8 reason">
        <p class="index fw-m-0 fw-pr-16">${index + 1}.</p>
        <div class="content fw-flex fw-items-center fw-justify-between fw-bg-smoke-25 fw-br-4">
          <span class="content-value fw-p-12 fw-type-regular">${value}</span>
  
          <div class="content-actions" style="${hideContentActions}">
            <fw-tooltip content="Edit reason">
              <fw-button color="text" size="icon" class="edit">
                <fw-icon name="edit" size="12"></fw-icon>
              </fw-button>
            </fw-tooltip>
  
            <fw-tooltip content="Delete reason">
              <fw-button color="text" size="icon" class="delete">
                <fw-icon name="delete" size="12" color="red"></fw-icon>
              </fw-button>
            </fw-tooltip>
          </div>
        </div>
  
        <div class="editor fw-flex d-none px-8">
          <fw-input value="${value}" class="editor-input"></fw-input>
  
          <fw-button-group class="fw-ml-8" label="update">
            <fw-button color="secondary" size="icon" class="update">
              <fw-icon name="check" size="12" color="green"></fw-icon>
            </fw-button>
  
            <fw-button color="secondary" size="icon" class="cancel">
              <fw-icon name="cross" size="12" color="red"></fw-icon>
            </fw-button>
          </fw-button-group>
        </div>
      </div>
    `;
};
