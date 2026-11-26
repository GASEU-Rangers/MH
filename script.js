
/* 설정할 비밀번호 */
const PASSWORD = "OPEN-2026";

/* 요소 가져오기 */
const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("passwordInput");
const errorMessage = document.getElementById("errorMessage");

const classifiedPage = document.getElementById("classifiedPage");
const secretPage = document.getElementById("secretPage");

/* 패스워드 확인 */
passwordForm.addEventListener("submit", function(event) {
  event.preventDefault();

  if (passwordInput.value === PASSWORD) {

    /* 잠금 화면 숨기기 */
    classifiedPage.hidden = true;

    /* 비밀 문서 표시 */
    secretPage.hidden = false;

    /* 오류 메시지 숨기기 */
    errorMessage.style.display = "none";

    /* 화면 상단으로 이동 */
    window.scrollTo(0, 0);

  } else {

    /* 틀린 패스워드 */
    errorMessage.style.display = "block";

    passwordInput.value = "";
    passwordInput.focus();

  }
});
