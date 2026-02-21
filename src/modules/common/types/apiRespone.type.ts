export type ApiResponse<T> = {
    code: string;
    message: string;
    data: T;
    meta: Record<string, unknown> | null;
};
