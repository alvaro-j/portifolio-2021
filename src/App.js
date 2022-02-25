import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Header from "./components/Header";
import React from "react";

const App = () => {
	React.useEffect(() => {
		const MySwal = withReactContent(Swal);
		MySwal.fire({
			position: "top-end",
			title: "Browse here &uarr;",
			showConfirmButton: false,
			timer: 1500,
			timerProgressBar: true,
		});
	}, []);
	return <Header />;
};

export default App;
