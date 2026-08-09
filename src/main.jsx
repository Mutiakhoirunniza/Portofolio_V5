import React from "react"
import PropTypes from "prop-types"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: null, errorInfo: null };
	}
	static getDerivedStateFromError(error) {
		return { hasError: true, error };
	}
	componentDidCatch(error, errorInfo) {
		console.error(error, errorInfo);
		this.setState({ errorInfo });
	}
	render() {
		if (this.state.hasError) {
			return (
				<div style={{ padding: '20px', background: '#030014', color: '#f1f5f9', minHeight: '100vh', zIndex: 99999 }}>
					<h2>React Error:</h2>
					<pre style={{ color: '#dc2626', whiteSpace: 'pre-wrap' }}>
						{this.state.error && this.state.error.toString()}
					</pre>
					<pre style={{ color: '#94a3b8', whiteSpace: 'pre-wrap', marginTop: '10px' }}>
						{this.state.errorInfo && this.state.errorInfo.componentStack}
					</pre>
				</div>
			);
		}
		return this.props.children;
	}
}

ErrorBoundary.propTypes = {
	children: PropTypes.node,
};

ReactDOM.createRoot(document.getElementById("root")).render(
	<ErrorBoundary>
		<App />
	</ErrorBoundary>
)
