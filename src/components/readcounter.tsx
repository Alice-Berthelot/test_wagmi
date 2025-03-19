import { useReadContract, useWatchContractEvent } from "wagmi";
import { wagmiContractConfig } from "../contracts";
// import { useState } from "react";

export default function ReadCounter() {
  // const [count, setCount] = useState<string>("");

  const { data: value } = useReadContract({
    address: wagmiContractConfig.address,
    abi: wagmiContractConfig.abi,
    functionName: "count",
  });

  // useWatchContractEvent({
  //   address: wagmiContractConfig.address,
  //   abi: wagmiContractConfig.abi,
  //   eventName: 'Incremented',
  //   onLogs: (logs) => {
  //     setCount((logs[0].args?.value as BigInt).toString());
  //   },
  // })

  return (
    <div className="flex flex-col justify-center items-center mx-auto border border-neutral-900 p-2 w-50 rounded-lg text-lg mb-2">
      <p className="font-medium">Realtime counter:</p>
      <p className="font-bold text-xl">{value?.toString()}</p>
    </div>
  );
}
