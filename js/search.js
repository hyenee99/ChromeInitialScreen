(function () {
  const searchInput = document.getElementById("search-input");

  const showSearchResult = () => {
    let searchWord = searchInput.value;
    window.location.href = `https://www.google.com/search?q=${searchWord}`;
    searchWord = "";
  }

  const enterKey = (event) => {
    if (event.code === "Enter") { //누른 키가 엔터키라면 
      showSearchResult();
    }
  }

  searchInput.addEventListener("keypress", (event) => {
    enterKey(event);
  })
})();