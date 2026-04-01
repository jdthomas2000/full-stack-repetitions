/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("favs", (table) => {
    table.increments("id");
    table.string("title").notNullable();
    table.string("main_character").notNullable();
    table.integer("year_released").notNullable();

    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("favs");
};
