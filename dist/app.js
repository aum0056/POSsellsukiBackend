"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
let data = null;
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: true
}));
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.route('/customer').put((req, res) => {
  data = req.body;
  console.log(data);

  try {
    res.status(200).send('complete');
  } catch (error) {
    res.status(500).send('error');
  }
}).get((req, res) => {
  try {
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send('error');
  }
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});