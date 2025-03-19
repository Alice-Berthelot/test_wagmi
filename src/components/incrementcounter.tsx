import { useWriteContract } from "wagmi";
import { wagmiContractConfig } from "../contracts";

export default function IncrementCounter() {
  const { writeContract } = useWriteContract();

  async function submitDefaultIncrement(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    writeContract({
      address: wagmiContractConfig.address,
      abi: wagmiContractConfig.abi,
      functionName: "increment",
    });
  }

  async function submitPersonalizedIncrement(e: React.FormEvent<HTMLFormElement>) {
    const formData = new FormData(e.target as HTMLFormElement);
    const value = BigInt(formData.get("value") as string);
    e.preventDefault();
    writeContract({
      address: wagmiContractConfig.address,
      abi: wagmiContractConfig.abi,
      functionName: "incrementBy",
      args: [value],
    });
  }

  return (
    <>
    <h3 className='text-xl font-semi-bold pt-3 pb-1'>Increment</h3>
    <div className="flex flex-col gap">

    <form onSubmit={submitDefaultIncrement}>
      <label className='font-medium'>Default increment: </label>
      <button type="submit" className="cursor-pointer bg-neutral-900 text-yellow-600 p-1 w-10 rounded-lg">+ 1</button>
    </form>
    <form onSubmit={submitPersonalizedIncrement}>
      <label className='font-medium'>Personalized increment: </label>
      <input name="value" placeholder="Enter amount" required className="border border-neutral-900 mr-4 rounded-lg" />
      <button type="submit" className="cursor-pointer bg-neutral-900 text-yellow-600 p-2 rounded-lg">Increment</button>
    </form>
    </div>
    </>
  );
}
