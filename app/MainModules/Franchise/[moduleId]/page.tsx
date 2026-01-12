import FranchisePageClient from "./FranchisePageClient";

export default function FranchisePage({
  params,
}: {
  params: { moduleId: string };
}) {
  return <FranchisePageClient moduleId={params.moduleId} />;
}
