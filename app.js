// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, '../public')));
app.listen(process.env.PORT || 3000);
// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});
