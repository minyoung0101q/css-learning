// script.js

// 이벤트 리스너를 등록하여 버튼 클릭 시 다크 모드 토글
document
  .getElementById("dark-mode-toggle")
  .addEventListener("click", function () {
    // body 요소에 dark-mode 클래스가 있는지 확인
    const body = document.body;
    const isDarkMode = body.classList.contains("dark-mode");

    // 다크 모드인 경우 라이트 모드로 전환, 아닌 경우 다크 모드로 전환
    if (isDarkMode) {
      body.classList.remove("dark-mode");
    } else {
      body.classList.add("dark-mode");
    }
  });
