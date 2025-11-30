import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, sepolia } from "viem/chains";

export const rainbowConfig = getDefaultConfig({
  appName: "HIT dApp",
  projectId: "b9bb423f32595f9902f5cf59734f826f",
  chains: [mainnet, sepolia],
});
