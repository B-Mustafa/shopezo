import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware(
 {
    publicRoutes: ["/", "/products", "/products/[id]", "/cart", "/404"],
    ignoredRoutes: ["/favicon.ico", "/sw.js"],
 }
);

export const config = {
 matcher: ["/((?!.+\\.[w]+$|_next).*)", "/(api|trpc)(.*)"],
};
