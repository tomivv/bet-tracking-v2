/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("bets", table => {
    table.increments('id').primary();
    table.string("stake").notNullable();
    table.string("odds").notNullable();
    table.string("selection").notNullable();
    table.string("type");
    table.string("event").notNullable();
    table.string("sport");
    table.boolean("win");
    table.date("date");
    table.timestamps(false, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("bets");
};
