import { LoaderFunctionArgs, redirect } from "@remix-run/node";

export const loader = async ({
}: LoaderFunctionArgs) => {
  return redirect("https://www.youtube.com/watch?v=q-Y0bnx6Ndw")
};

