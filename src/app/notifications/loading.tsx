import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            {/* "Notifications" title skeleton */}
            <Skeleton className="h-6 w-32" />
            {/* "Unread" count skeleton */}
            <Skeleton className="h-4 w-16" />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y">
            {/* We render 5 skeleton items to fill the view */}
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-start gap-4 p-4">
                {/* Avatar skeleton */}
                <Skeleton className="h-10 w-10 rounded-full" />

                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    {/* Icon and Text skeleton */}
                    <Skeleton className="h-4 w-4" />
                    <Skeleton className="h-4 w-48" />
                  </div>

                  {/* Content block skeleton */}
                  <div className="pl-6 space-y-2">
                    <Skeleton className="h-16 w-full rounded-md" />
                  </div>

                  {/* Timestamp skeleton */}
                  <div className="pl-6">
                    <Skeleton className="h-3 w-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
