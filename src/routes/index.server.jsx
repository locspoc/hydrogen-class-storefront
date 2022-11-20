import Layout from "../components/Layout.server";

export default function Home() {
	return (
		<Layout>
			<div className="container pt-2 flex items-center justify-center flex-col prose">
				<h1>Homepage</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Impedit beatae doloribus odit sapiente rem blanditiis
					nostrum distinctio? Possimus veritatis ex placeat nulla fuga
					vero, accusamus ducimus dignissimos, aut molestias ipsum.
				</p>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Facere dolor reiciendis vero aliquid animi distinctio eos
					nobis fugit quod, fugiat, architecto, sapiente tempore
					ipsum? Necessitatibus inventore nostrum nesciunt sint aut.
				</p>
				<ul>
					<li>One</li>
					<li>Two</li>
					<li>Three</li>
				</ul>
			</div>
		</Layout>
	);
}
