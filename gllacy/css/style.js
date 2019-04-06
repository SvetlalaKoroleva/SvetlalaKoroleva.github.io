var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

var link = document.querySelector(".login-link");
var popupLogin = document.querySelector(".modal-login");
var popupOverlay = document.querySelector(".modal-overlay");
var loginClose = document.querySelector(".modal-overlay");

var mailLogin = popupLogin.querySelector("[name=mail]");
var formLogin = popupLogin.querySelector(".login-form");
var passwordLogin = popupLogin.querySelector("[name=password]");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupLogin.classList.add("js-login");
  popupOverlay.classList.add("js-login-overlay");

  if (storage) {
    mailLogin.value = storage;
    passwordLogin.focus();
  } else {
    mailLogin.focus(); //фокус на пароль не спускается
  }
});

loginClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupLogin.classList.remove("js-login");
  popupOverlay.classList.remove("js-login-overlay");
  popupLogin.classList.remove("js-login-error");
});

formLogin.addEventListener("submit", function(evt) {
  if (!mailLogin.value || !passwordLogin.value) {
    evt.preventDefault();
    popupLogin.classList.remove("js-login-error");
    popupLogin.offsetWidth = popupLogin.offsetWidth;
    popupLogin.classList.add("js-login-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("mail", mailLogin.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupLogin.classList.contains("js-login")) {
      popupLogin.classList.remove("js-login");
      popupOverlay.classList.remove("js-login-overlay");
      popupLogin.classList.remove("js-login-error");
    }
  }
});

var buttonForm = document.querySelector(".button-form");
var feedbackForm = document.querySelector(".modal-feedback-form");
var feedbackClose = document.querySelector(".modal-close");
var mailFeedback = feedbackForm.querySelector("[name=your-mail]");
var nameFeedback = feedbackForm.querySelector(".name-feedback");
var buttonCloseFeedback = feedbackForm.querySelector(".button-close");

buttonForm.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackForm.classList.add("js-feedback");
  popupOverlay.classList.add("js-feedback");
  if (storage) {
    nameFeedback.value = storage;
    mailFeedback.focus(); //фокус на почту не смещается
  } else {
    nameFeedback.focus();
  }
});

feedbackClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackForm.classList.remove("js-feedback");
  popupOverlay.classList.remove("js-feedback");
  feedbackForm.classList.remove("js-login-error");
});

buttonCloseFeedback.addEventListener("click", function(evt) {
  if (!mailFeedback.value || !nameFeedback) {
    evt.preventDefault();
    feedbackForm.classList.remove("js-login-error");
    feedbackForm.offsetWidth = popupLogin.offsetWidth;
    feedbackForm.classList.add("js-login-error");
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (feedbackForm.classList.contains("js-feedback")) {
      feedbackForm.classList.remove("js-feedback");
      feedbackForm.classList.remove("js-login-error");
      popupOverlay.classList.remove("js-feedback");
    }
  }
});

var search = document.querySelector(".search-link");
var modalSearch = document.querySelector(".modal-search-link");
var searchClose = document.querySelector(".modal-overlay");

search.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalSearch.classList.add("js-login");
  popupOverlay.classList.add("js-login-overlay");
});

searchClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalSearch.classList.remove("js-login");
  modalSearch.classList.remove("js-login-overlay");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalSearch.classList.contains("modal-search-link")) {
      modalSearch.classList.remove("js-login");
      popupOverlay.classList.remove("js-login-overlay");
    }
  }
});