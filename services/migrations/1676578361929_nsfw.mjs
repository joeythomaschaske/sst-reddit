import { Kysely } from "kysely";

/**
 * @param db {Kysely<any>}
 */
export async function up(db) {
  db.schema
    .alterTable("article")
    .addColumn("nsfw", "boolean", (col) => col.defaultTo(false))
    .execute();
}

/**
 * @param db {Kysely<any>}
 */
export async function down(db) {
  db.schema
    .alterTable("article")
    .dropColumn("nsfw")
    .execute();
}
