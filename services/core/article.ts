export * as Article from "./article";

import { ulid } from "ulid";
import { SQL } from "./sql";

export async function create(title: string, url: string, nsfw: boolean) {
  const [result] = await SQL.DB.insertInto("article" as never)
    .values({ articleID: ulid(), url, title, nsfw })
    .returningAll()
    .execute();
  return result;
}

export function get(articleID: string) {
  return SQL.DB.selectFrom("article" as never)
    .selectAll()
    .where("articleID", "=", articleID as never)
    .executeTakeFirst();
}

export function list() {
  return SQL.DB.selectFrom("article" as never)
    .selectAll()
    .where("nsfw" as never, "is", false as never)
    .orderBy("created" as never, "desc")
    .execute();
}

export function addComment(articleID: string, text: string) {
  return SQL.DB.insertInto("comment" as never)
    .values({
      commentID: ulid(),
      articleID,
      text,
    })
    .returningAll()
    .executeTakeFirstOrThrow();
}

export function comments(articleID: string) {
  return SQL.DB.selectFrom("comment" as never)
    .selectAll()
    .where("articleID", "=", articleID as never)
    .execute();
}