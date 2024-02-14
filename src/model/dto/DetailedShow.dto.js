class DetailedShowDTO {
    constructor(obj) {
        this.Title = obj.Title;
        this.Year = obj.Year;
        this.Rated = obj.Rated;
        this.Released = obj.Released;
        this.Runtime = obj.Runtime;
        this.Genre = obj.Genre;
        this.Director = obj.Director;
        this.Writer = obj.Writer;
        this.Actors = obj.Actors;
        this.Plot = obj.Plot;
        this.Language = obj.Language;
        this.Country = obj.Country;
        this.Awards = obj.Awards;
        this.Poster = obj.Poster;
        this.Ratings = obj.Ratings;
        this.Metascore = obj.Metascore;
        this.imdbRating = obj.imdbRating;
        this.imdbVotes = obj.imdbVotes;
        this.imdbID = obj.imdbID;
        this.Type = obj.Type;
        this.DVD = obj.DVD;
        this.BoxOffice = obj.BoxOffice;
        this.Production = obj.Production;
        this.Website = obj.Website;
        this.Response = obj.Response;
    }
}

export default DetailedShowDTO