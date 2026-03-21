import { revalidatePath } from "next/cache";

import { articlePages } from "@/content/site";

export async function POST() {
  const paths = ["/", ...articlePages.map((page) => page.href)];

  for (const path of paths) {
    revalidatePath(path);
  }

  return Response.json({
    revalidated: true,
    paths,
  });
}
