import { useAccount, useReadContract } from "wagmi";
import { erc20Abi, formatUnits } from "viem";
import React, { useState, type ChangeEvent } from "react";

const USDC_ADDRESS = "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238";

type TransferFormState = {
  toAddress: string;
  amount: string;
};

type TransferFormError = {
  toAddress?: string;
  amount?: string;
};

const Example = () => {
  const [form, setForm] = useState<TransferFormState>({
    toAddress: "",
    amount: "",
  });

  const [errorForm, setErrorForm] = useState<TransferFormError>({});

  const { address, chainId, isConnected } = useAccount();

  const {
    data: usdcBalance,
    isError: isErrorUsdcBalance,
    isSuccess: isSuccessUsdcBalance,
    isLoading: isLoadingUsdcBalance,
  } = useReadContract({
    abi: erc20Abi,
    address: USDC_ADDRESS,
    functionName: "balanceOf",
    chainId: chainId,
    args: address ? [address] : undefined,
  });

  const usdcBalanceDisplay = usdcBalance ? formatUnits(usdcBalance, 6) : "0";

  const handleClickMax = () => {
    setForm((prev) => ({
      ...prev,
      amount: usdcBalanceDisplay,
    }));
  };

  const handleOnChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value) || value === "") {
      setForm((prev) => ({
        ...prev,
        amount: value,
      }));
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="border border-card-border rounded-2xl p-8 bg-card flex flex-col gap-4 min-w-2xl">
        <div className="text-white font-medium text-center text-3xl">
          Token Transfer
        </div>

        {/* Recipient Address */}
        <div className="flex flex-col gap-2 ">
          <label htmlFor="recipinet-address">Recipient Address</label>
          <input
            className="w-full h-12 px-4 bg-[#0A0A0F] border border-white rounded-lg placeholder-gray-500 focus:ring-2 transition-all"
            id="recipinet-address"
            type="text"
            placeholder="Enter wallet address"
          />
        </div>

        {/* Amount */}
        <div className="flex flex-col gap-2">
          <label htmlFor="amount">Amount</label>
          <div className="relative">
            <input
              className={`w-full h-12 px-4 bg-[#0A0A0F] border  rounded-lg placeholder-gray-500 h focus:ring-2 transition-all ${
                errorForm.amount ? "border-red-400" : "border-white"
              }`}
              id="amount"
              placeholder="0.0"
              value={form.amount}
              onChange={handleOnChangeAmount}
            />
            <div className="flex items-center absolute right-0 inset-y-0 pr-2">
              <button
                className="text-[#7F5AF0] text-sm font-bold cursor-pointer hover:text-white transition-colors"
                type="button"
                onClick={handleClickMax}
              >
                MAX
              </button>

              <div className="w-px border h-5 inline mx-2"></div>
              <span>USDC</span>
            </div>
          </div>
          {errorForm.amount && (
            <p className="text-sm text-red-400">Amount validate</p>
          )}
        </div>

        {/* Available */}
        {isSuccessUsdcBalance && <p>Available: {usdcBalanceDisplay} USDC</p>}
        {isLoadingUsdcBalance && <p>Available: ...</p>}
        {isErrorUsdcBalance && <p>error fetch balance</p>}

        {/* Gas fee */}
        <div className="flex items-center justify-between">
          <p>Estimated Gas Fee:</p>
          <p>0.1 USDC</p>
        </div>

        <button className="w-full text-center bg-purple-400 py-2 rounded-lg font-bold">
          Transfer
        </button>
      </div>
    </div>
  );
};

export default Example;
