import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const platform = searchParams.get("platform");

  if (!platform) {
    return NextResponse.json(
      { error: "platform が指定されていません" },
      { status: 400 }
    );
  }

  try {
    const client = await pool.connect();

    const { rows } = await client.query(
      `SELECT articles, likes, flowers, views
       FROM platform_stats
       WHERE platform = $1
       LIMIT 1`,
      [platform]
    );

    client.release();

    if (rows.length === 0) {
      return NextResponse.json(
        { error: "指定されたプラットフォームのデータが見つかりません" },
        { status: 404 }
      );
    }

    const data = rows[0];

    return NextResponse.json({
      platform,
      articles: data.articles,
      likes: data.likes,
      flowers: data.flowers,
      views: data.views,
    });
  } catch (error) {
    console.error("DBエラー:", error);
    return NextResponse.json(
      { error: "DB接続またはクエリ実行に失敗しました" },
      { status: 500 }
    );
  }
}
