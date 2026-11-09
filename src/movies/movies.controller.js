const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function movieExists(request, response, next) {
  // TODO: Add your code here.
  const { movieId } = request.params;
  const movie = await service.read(movieId);
  
  if (movie) {
    response.locals.movie = movie;
    return next();
  }

  next({
    status: 404,
    message: `Movie cannot be found: ${movieId}`,
  });
}

async function read(request, response) {
  // TODO: Add your code here
  response.json({ data: response.locals.movie });
}

async function list(request, response) {
  // TODO: Add your code here.
  const data = await service.list(request.query);
  
  response.json({ data });
}

module.exports = {
  list: [asyncErrorBoundary(list)],
  read: [asyncErrorBoundary(movieExists), read],
};
