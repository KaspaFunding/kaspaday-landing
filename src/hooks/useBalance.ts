import BigNumber from 'bignumber.js';
import { useEffect, useState } from 'react';

export default function useBalance(address: `kaspa:${string}`, human: boolean): string {
	const [balance, setBalance] = useState(0);
	useEffect(() => {
		const fetchBalance = async () => {
			try {
				const response = await fetch(`https://api.kaspa.org/addresses/${address}/balance`);
				const data = await response.json();
				setBalance(data.balance);
			} catch {
				setBalance(0);
			}
		};
		fetchBalance();
	}, [address]);
	if (human) {
		return new BigNumber(balance).shiftedBy(-8).toFixed(2);
	} else {
		return balance.toFixed();
	}
}
