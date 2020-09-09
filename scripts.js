var mustache = require('mustache');

var movieProps = ["name", "sum", "date", "genre", "director"];
var viewMovie = {
    classTitle: "Movie",
    constructorArguments: movieProps.join(),
    classConstructor: function () {
        return "this.name=name";
    }
};
var output = mustache.render(template, viewMovie);


var genreProps = ["name", "description"];
var viewGenre = {
    classTitle: "Genre",
    constructorArguments: genreProps.join(),
    classConstructor: function () {
        return "this.name=name";
    }
};
var output = mustache.render(template, viewGenre);


var actorProps = ["name", "age", "country", "sex"];
var viewActor = {
    classTitle: "Actor",
    constructorArguments: actorProps.join(),
    classConstructor: function () {
        return "this.name=name";
    }
};
var output = mustache.render(template, viewActor);


var directorProps = ["name", "age", "country", "sex"];
var viewDirector = {
    classTitle: "Director",
    constructorArguments: directorProps.join(),
    classConstructor: function () {
        return "this.name=name";
    }
};
var output = mustache.render(template, viewDirector);