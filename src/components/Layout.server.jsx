import { useShopQuery, CacheLong, gql, Seo, Link } from "@shopify/hydrogen";
import { Suspense } from "react";

import CartBubble from "./CartBubble.client";

export default function Layout({ children }) {
	const data = useShopQuery({
		query: SHOP_QUERY,
		cache: CacheLong(),
		preload: true,
	});

	const {
		data: { shop },
	} = data;

	return (
		<>
			<Seo
				type="defaultSeo"
				data={{
					title: shop.name,
					description: shop.description,
				}}
			/>
			<header>
				<div className="container flex items-center justify-between py-4">
					<Link to="/" className="header-inner">
						{shop.name}
					</Link>
					<ul className="header-navigation">
						<li>
							<a
								className="text-slate-600 hover:text-slate-800"
								href="/catalog"
							>
								Catalog
							</a>
						</li>
						<li>
							<a
								className="text-slate-600 hover:text-slate-800"
								href="/collections/freestyle"
							>
								Freestyle
							</a>
						</li>
						<li>
							<a
								className="text-slate-600 hover:text-slate-800"
								href="/blog/"
							>
								Blog
							</a>
						</li>
					</ul>
					<Link to="/cart" className="header-cart-link">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
							/>
						</svg>
						<CartBubble />
					</Link>
				</div>
			</header>
			<main>
				<Suspense>{children}</Suspense>
			</main>
		</>
	);
}

const SHOP_QUERY = gql`
	query ShopInfo {
		shop {
			name
			description
		}
	}
`;
