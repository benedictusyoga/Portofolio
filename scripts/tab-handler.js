function openTab(evt, tabName) {
  var i, tabItem, tabLink;

  // Hide all tab items
  tabItem = document.getElementsByClassName("tab-item");
  for (i = 0; i < tabItem.length; i++) {
    tabItem[i].style.display = "none";
    tabItem[i].classList.remove("active");
  }

  // Remove active class from all tab links
  tabLink = document.getElementsByClassName("tab-link");
  for (i = 0; i < tabLink.length; i++) {
    tabLink[i].classList.remove("active");
  }

  // Show the current tab and add active class
  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}
