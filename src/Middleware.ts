export const formattedCurrency = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
});

export const formatNumber = new Intl.NumberFormat('en-US')


export const clicked = (disabled: any, handleClick: () => void) => {
    if (disabled)
        return undefined
    else {
        if (!disabled && handleClick) {
            handleClick();
        }
    }
};

export default function formatCompactNumber(number: number): string {
    if (number >= 1e9) {
        return (number / 1e9).toFixed(0) + ' Billion';
    } else if (number >= 1e6) {
        return (number / 1e6).toFixed(2) + ' Million';
    } else {
        return number.toString();
    }
}