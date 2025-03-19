import { useReadContract } from "wagmi";
import { wagmiContractConfig } from "../contracts";

export default function ReadCounter() {
  const { data: count } = useReadContract({
    address: wagmiContractConfig.address,
    abi: wagmiContractConfig.abi,
    functionName: "count",
  });

  return (
    <div className="flex flex-col justify-center items-center mx-auto border border-neutral-900 p-2 w-50 rounded-lg text-lg mb-2">
      <p className="font-medium">Realtime counter:</p>
      <p className="font-bold text-xl"> {count?.toString()}</p>
    </div>
  );
}
