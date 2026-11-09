/**
 * Create the database tables used by the WeLoveMovies API.
 * Table definitions follow the project's docs/tables/*.md files.
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("movies", (table) => {
      table.increments("movie_id").primary();
      table.string("title");
      table.integer("runtime_in_minutes");
      table.enum("rating", ["G", "PG", "PG-13", "R", "NC-17", "NR"]);
      table.text("description");
      table.string("image_url");
      table.timestamps(true, true);
    })
    .createTable("critics", (table) => {
      table.increments("critic_id").primary();
      table.string("preferred_name");
      table.string("surname");
      table.string("organization_name");
      table.timestamps(true, true);
    })
    .createTable("theaters", (table) => {
      table.increments("theater_id").primary();
      table.string("name");
      table.string("address_line_1");
      table.string("address_line_2");
      table.string("city");
      table.string("state");
      table.string("zip");
      table.timestamps(true, true);
    })
    .createTable("reviews", (table) => {
      table.increments("review_id").primary();
      table.text("content");
      table.integer("score");
      table.timestamps(true, true);

      table.integer("critic_id").unsigned().notNullable();
      table
        .foreign("critic_id")
        .references("critic_id")
        .inTable("critics");

      table.integer("movie_id").unsigned().notNullable();
      table
        .foreign("movie_id")
        .references("movie_id")
        .inTable("movies");
    })
    .createTable("movies_theaters", (table) => {
      table.boolean("is_showing").defaultTo(false);
      table.timestamps(true, true);

      table.integer("movie_id").unsigned().notNullable();
      table
        .foreign("movie_id")
        .references("movie_id")
        .inTable("movies");

      table.integer("theater_id").unsigned().notNullable();
      table
        .foreign("theater_id")
        .references("theater_id")
        .inTable("theaters");

      table.primary(["movie_id", "theater_id"]);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("movies_theaters")
    .dropTableIfExists("reviews")
    .dropTableIfExists("theaters")
    .dropTableIfExists("critics")
    .dropTableIfExists("movies");
};
