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
    <h3>Increment</h3>
    <form onSubmit={submitDefaultIncrement}>
      <label>Default increment: </label>
      <button type="submit">+ 1</button>
    </form>
    <form onSubmit={submitPersonalizedIncrement}>
      <label>Personalized increment: </label>
      <input name="value" placeholder="Enter amount" required />
      <button type="submit">Increment</button>
    </form>
    </>
  );
}
