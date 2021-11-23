import { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* Header-Footer */
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

/* Pages Import */
import About from "./pages/About/About";
import Covid from "./pages/COVID/Covid";
import Service from "./pages/Service/Service";
import ContactUs from "./pages/ContactUs/ContactUs";
import ContactUsOne from "./pages/ContactUsOne/ContactUsOne";
import Pricing from "./pages/Pricing/Pricing";

/* Other Functions */
import ScrollToTop from "./ScrollToTop";

/* CSS Import */
import "./styles/global.css";
import "./App.css";
import { UpperFooter } from "./components/Footer/upperFooter";

/* Fo LazyLoad */
const Home = lazy(() => import("./pages/Home/Home"));


function App() {
	const [headerColor, setHeaderColor] = useState();
	const handleHeaderColor = (headerColor) => {
		setHeaderColor(headerColor);
	};

	return (
		<>
			<Router>
				<Suspense fallback={<h1>Loading.....</h1>}>
					<Header headercolor={headerColor} />
					<ScrollToTop />
					<Switch>
						<Route
							exact
							path="/"
							render={() => (
								<Home handleHeaderColor={handleHeaderColor} />
							)}
						/>
						<Route
							exact
							path="/about"
							render={() => (
								<About handleHeaderColor={handleHeaderColor} />
							)}
						/>
						<Route
							exact
							path="/service"
							render={() => (
								<Service
									handleHeaderColor={handleHeaderColor}
								/>
							)}
						/>
						<Route
							exact
							path="/covid"
							render={() => (
								<Covid handleHeaderColor={handleHeaderColor} />
							)}
						/>
						<Route
							exact
							path="/contact"
							render={() => (
								<ContactUs
									handleHeaderColor={handleHeaderColor}
								/>
							)}
						/>
						<Route
							exact
							path="/contact-01"
							render={() => (
								<ContactUsOne
									handleHeaderColor={handleHeaderColor}
								/>
							)}
						/>
						<Route
							exact
							path="/pricing"
							render={() => (
								<Pricing
									handleHeaderColor={handleHeaderColor}
								/>
							)}
						/>
					</Switch>
					<UpperFooter/>
					<Footer />
				</Suspense>
			</Router>
		</>
	);
}

export default App;
