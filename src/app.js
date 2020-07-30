import express from "express";
import path from "path";

const app = express();

// 포트는 3000 을 사용해
const PORT = 3000;
// 야 앱아 너 퍼그써
app.set("view engine", "pug");
// 야 앱아 너가 사용할 css나 js파일은 assets 에 있어
app.use(express.static(path.join(__dirname, "/assets")));

app.get("/", (req, res) => {
  res.render("sadari");
});

// 자 시작
app.listen(PORT, () => {
  console.log(`${PORT} serverstart`);
});
