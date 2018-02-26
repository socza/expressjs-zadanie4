var express = require('express');
var app = express();

app.use(express.static('assets'));
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
	res.render('login');
});

app.get('/auth/google', (req, res) => {
	res.render('dynamic');
});

app.listen(3000);
app.use((req, res, next) => {
	res.status(404).send('Podana strona nie istnieje, spróbuj jeszcze raz!');
});