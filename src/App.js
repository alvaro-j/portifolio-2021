import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Header from "./components/Header";

const MySwal = withReactContent(Swal);

const App = () => {
	return <Header />;
};

MySwal.fire({
	position: "top-end",
	title: "Navegue por aqui &uarr;",
	showConfirmButton: false,
	timer: 1500,
	timerProgressBar: true,
});

export default App;
