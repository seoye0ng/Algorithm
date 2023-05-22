function solution(id_pw, db) {
  for (const [id, pw] of db) {
    if (id === id_pw[0]) {
      return pw === id_pw[1] ? "login" : "wrong pw";
    }
  }
  
  return "fail";
}