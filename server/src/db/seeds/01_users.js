const bcrypt = require("bcrypt");

const password = "admin";
const hash = bcrypt.hashSync(password, 10);

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex("users").del()
  await knex("users").insert([
    {
      username: "admin",
      password: hash
    }
  ]);
};
