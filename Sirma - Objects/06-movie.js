function processMovieCommands(commands) {
    const movies = [];

    commands.forEach(command => {
        if (command.startsWith('addMovie ')) {
            const movieName = command.replace('addMovie ', '');
            movies.push({ name: movieName });
        } else if (command.includes(' directedBy ')) {
            const [movieName, director] = command.split(' directedBy ');
            const movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.director = director;
            }
        } else if (command.includes(' onDate ')) {
            const [movieName, date] = command.split(' onDate ');
            const movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.date = date;
            }
        }
    });

    movies
        .filter(movie => movie.name && movie.director && movie.date)
        .forEach(movie => console.log(JSON.stringify(movie)));
}

const commands = [
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Spinderman 2 onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
];

processMovieCommands(commands);
