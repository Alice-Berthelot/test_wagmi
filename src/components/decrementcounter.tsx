import { useWriteContract } from "wagmi";
import { wagmiContractConfig } from "../contracts";

export default function DecrementCounter() {
  const { writeContract } = useWriteContract();

  async function submitDefaultDecrement(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    writeContract({
      address: wagmiContractConfig.address,
      abi: wagmiContractConfig.abi,
      functionName: "decrement",
    });
  }

  async function submitPersonalizedDecrement(e: React.FormEvent<HTMLFormElement>) {
    const formData = new FormData(e.target as HTMLFormElement);
    const value = BigInt(formData.get("value") as string);
    e.preventDefault();
    writeContract({
      address: wagmiContractConfig.address,
      abi: wagmiContractConfig.abi,
      functionName: "decrementBy",
      args: [value],
    });
  }

  return (
    <>
    <h3>Decrement</h3>
    <form onSubmit={submitDefaultDecrement}>
      <label>Default decrement: </label>
      <button type="submit">- 1</button>
    </form>
    <form onSubmit={submitPersonalizedDecrement}>
      <label>Personalized decrement: </label>
      <input name="value" placeholder="Enter amount" required />
      <button type="submit">Decrement</button>
    </form>
    </>
  );
}
