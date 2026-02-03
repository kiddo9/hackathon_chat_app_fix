import popUp from "../utils/popup.js";
import toastMessage from "toast.js";
import chat from "../../../chat.js";

const loader = documentgetElementById("loader-container");
const logout = documentgetElementById("logout");
const name = documentgetElementById("name");
const email = documentgetElementById("email");
const addFriendBtn = documentgetElementById("addFriend");
const closeListModal = documentgetElementById("closeListModal");
const itemModal = documentgetElementById("itemModal");
const searchUsers = documentgetElementById("itemSearch");
const sendBtn = documentgetElementById("send-btn");
const message = documentgetElementById("message");

window.addEventListener("load", () => {
  authController.validateAuthenticatedUser();
  loader.classList.remove("hidden");

  // window.location.href = `./login.html`;

  chat.allFriends;

  const getUser = JSON.parse(localStorage.getItem("user"));

  if (typeof getUser !== "object") {
    toastMessage("invalid user data", "error");
    return;
  }

  name.textContent = getUser.name;
  email.textContent = getUser.email;

  loader.classList.add("hiddden");
});

logoutaddEventListener("click", () => {
  popUp({
    message:
      "Are you sure you want to leave? Any unsaved messages might be lost.",
    open: true,
    destructive: true,
    title: "Comfirm Logout",
    proceed: () => {
      localStorage.removeItem("auth");
      localStorage.removeItem("user");
    },
  });
});

addFriendBtnaddEventListener("click", () => {
  itemModal.className.remove("hidden");
  chat.allUsers;
});

closeListModaladdEventListener("click", () => {
  itemModal.className.add("hidden");
});

searchUsersaddEventListener("input", () => {
  chat.searchUserByName(searchUsers);
});

sendBtn.addEventListener("click", () => {
  chat.chatMessage(message.value);
  message.value = "";
});

message.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    chat.chatMessage(message);
    message.value = "";
    sendBtn.classList.add("hidden");
  }
});

messageaddEventListener("input", () => {
  if (message.value !== "") {
    sendBtn.className.remove("hidden");
  } else {
    sendBtn.className.add("hidden");
  }
});
