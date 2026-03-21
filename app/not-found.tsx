import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/lib/button-variants";

export default function NotFound() {
  return (
    <div className="shell py-24">
      <Card className="surface-card mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle className="font-heading text-4xl font-semibold tracking-tight">
            Page not found
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 pt-0">
          <p className="text-base leading-8 text-muted-foreground">
            The page you requested is not part of the current DLSS 5 content map.
          </p>
          <Link href="/" className={`${buttonVariants({ size: "lg" })} rounded-full px-5`}>
            Return to the overview
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
