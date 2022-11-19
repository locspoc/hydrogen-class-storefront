import {
	useCart,
	CartLineProvider,
	Image,
	useCartLine,
	Money,
	Link,
	CartCost,
	CartLineQuantity,
	CartLineQuantityAdjustButton,
} from "@shopify/hydrogen";
import { Suspense } from "react";

export default function CartPage() {
	return (
		<Suspense>
			<CartTable />
		</Suspense>
	);
}

function CartTable() {
	const { lines, checkoutUrl, status } = useCart();

	if (lines.length === 0) {
		if (status == "idle") {
			return <div>No items are currently in the cart</div>;
		}
	}

	return (
		<table className="cart-table">
			<tbody>
				{lines.map((line) => {
					return (
						<CartLineProvider key={line.id} line={line}>
							<CartLineItem />
						</CartLineProvider>
					);
				})}
			</tbody>
		</table>
	);
}

function CartLineItem() {
	const { lineId, merchandise, cost } = useCartLine();

	const { image, product, selectedOptions } = merchandise;

	return (
		<tr kye={lineId}>
			<td>
				<Image className="line-item-image" data={image} />
			</td>
			<td>
				<Link
					to={`/products/${product.handle}`}
					className="line-item-product-title"
				>
					{product.title}
				</Link>
				<div className="line-item-variant">
					{(selectedOptions || []).map((option) => {
						<span key={option.name}>
							{option.name}: {option.value}
						</span>;
					})}
				</div>
				<br />
				Variant selection
				<br />
				Individual price
				<br />
			</td>
			<td>Quantity selector</td>
			<td>
				Line total
				<br />
				Remove button
				<br />
			</td>
		</tr>
	);
}
