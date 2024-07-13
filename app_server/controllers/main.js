const index = (req, res) => {
    res.render('index', { title: 'spotify clone' });
   };
   module.exports = {
    index
   };