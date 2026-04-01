/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("favs").del();
  await knex("favs").insert([
    {
      id: 1,
      title: "F1 Movie",
      main_character: "Sonny Hayes",
      year_released: "2025",
    },
    {
      id: 2,
      title: "The Running Man",
      main_character: "The Hunters",
      year_released: "2025",
    },
    {
      id: 3,
      title: "Project HailMary",
      main_character: "Space",
      year_released: "2026",
    },
  ]);
};
