import type { AccountResponse } from "@/modules/common";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
    account: AccountResponse | null;
    setAccount: (account: AccountResponse | null) => void;
};

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            account: null,
            setAccount: (account) => set({ account }),
        }),
        {
            name: "auth-storage"
        }
    )
);