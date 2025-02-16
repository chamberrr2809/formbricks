import Button from "@/components/shared/Button";
import { useRouter } from "next/router";
import HeadingCentered from "./HeadingCentered";

export default function CTA() {
  const router = useRouter();
  return (
    <>
      <div className="mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:pt-24 lg:pb-40">
        <HeadingCentered closer teaser="Get started" heading="Ready for the last form tool you need?" />

        <div className="mt-12 grid grid-cols-1 content-center md:grid-cols-2">
          <div className="-mb-4 rounded-t-xl bg-gradient-to-br from-slate-300 to-slate-200 px-8 py-24  text-center text-gray-900 dark:from-slate-800 dark:to-slate-900 dark:text-gray-100 md:mb-0 md:ml-2.5 md:-mr-5 md:rounded-l-xl lg:p-24">
            <h3 className="text-3xl font-bold">Self-hosted</h3>
            <p className="mt-2 mb-4">Run locally e.g. with docker-compose.</p>
            <Button variant="secondary" onClick={() => router.push("/docs")} className="mt-3">
              Read docs
            </Button>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-slate-400 to-slate-300 py-24 text-center text-gray-800 dark:from-slate-800 dark:to-slate-700 dark:text-gray-100">
            <h3 className="text-3xl font-bold">Cloud</h3>
            <p className="mt-2 mb-4">Use our free managed service.</p>
            <Button variant="secondary" onClick={() => router.push("/get-started")} className="mt-3" disabled>
              Coming soon
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
