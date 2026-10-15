/** @deprecated Use string-based value format instead */
export interface IDateRangeValue {
    from: Date | null;
    to: Date | null;
}
export interface IDateRangeProps {
    /** JSON string "[dateFrom, dateTo]", a relative string like "now-1h", or null/undefined */
    value?: string | null;
    onChange?: (event: {
        value: [Date, Date];
    }) => void;
    exclusive?: boolean;
    timeOnly?: boolean;
    className?: string;
    disabled?: boolean;
}
export declare function DateRange({ value, onChange, exclusive, timeOnly, className, disabled, }: IDateRangeProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=DateRange.d.ts.map