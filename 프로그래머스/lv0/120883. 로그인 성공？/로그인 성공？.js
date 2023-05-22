function solution(id_pw, db) {
  for (let i = 0; i < db.length; i++) {
    if (id_pw[0] === db[i][0]) { // 아이디 일치
      if (id_pw[1] === db[i][1]) { // 비밀번호 일치
        return "login"; // 로그인 성공
      } else {
        return "wrong pw"; // 비밀번호 불일치
      }
    }
  }
  
  return "fail"; // 아이디 불일치
}
