import { CardContent } from "@/shared/ui/card";
import React from "react";

export function PostContent() {
  return (
    <CardContent>
      <div className="prose prose-invert max-w-none">
        <p>
          React is a powerful library for building user interfaces, but as your
          application grows, you might notice some performance issues. Here are
          some tips to optimize your React app:
        </p>
        <ol>
          <li>Use React.memo for component memoization</li>
          <li>Implement useCallback and useMemo hooks</li>
          <li>Virtualize long lists with react-window</li>
          <li>Optimize images and use lazy loading</li>
          <li>Minimize unnecessary re-renders</li>
        </ol>
        <p>
          By implementing these techniques, you can significantly improve the
          performance of your React application, resulting in a smoother user
          experience and faster load times.
        </p>
      </div>
    </CardContent>
  );
}
