(function () {
  const API_URL = 'https://random-quote.hyobb.com';
  const quoteElement = document.getElementById("quote");
  const quoteItem = localStorage.getItem("quote");

  const nowDate = new Date();
  const month = nowDate.getMonth() + 1;
  const date = nowDate.getDate();

  const setQuote = (result) => {
    let quote = { createDate: `${month}-${date}`, quoteData: result };
    localStorage.setItem("quote", JSON.stringify(quote));
    quoteElement.textContent = result;
  }

  const getQuote = async () => {
    try {
      const data = await fetch(API_URL).then((res) => res.json());
      const result = data[1].respond;
      setQuote(result);
    } catch (err) {
      console.log(`err:${err}`);
      setQuote('만약 하루를 성공하고 싶다면, 반드시 첫 한 시간을 성공해야 한다.');
    }
  }

  // 명언을 하루에 하나만 나오게 하기 위함
  if (quoteItem) { //로컬 스토리지에 명언 존재
    let { createDate, quoteData } = JSON.parse(quoteItem);
    if (createDate === `${month}-${date}`) { // 오늘 날짜와 같다면
      quoteElement.textContent = `"${quoteData}"`; // 명언 출력
    }
    else { //오늘 날짜와 같지 않다면
      getQuote(); //새로운 명언 출력
    }
  }
  else { //로컬 스토리지에 명언 존재하지 않음
    getQuote();
  }
})();