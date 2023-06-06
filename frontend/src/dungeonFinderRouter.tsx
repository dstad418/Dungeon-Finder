import { CreateProfile } from "@/Components/CreateProfile.tsx";
import { Home } from "@/Components/HomePage.tsx";
import { Login } from "@/Components/Login.tsx";
import { Logout } from "@/Components/Logout.tsx";
import { Match } from "@/Components/Match.tsx";
import { ProtectedRoute } from "@/Components/ProtectedRoute.tsx";
import { useAuth } from "@/Services/Auth.tsx";
import { Link, Route, Routes } from "react-router-dom";
import "@css/dungeonFinderStyles.css";

export function DungeonFinderRouter() {
	const auth = useAuth();

	return (
		<div className={"dungeonFinderfancy"}>
			<nav className="navbar">
				<div className="navbar justify-center">
					<div className={"navbar-center lg:flex"}>

						<ul className={"menu menu-horizontal"}>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/match"> Math</Link></li>
							{auth?.token != null ? (
								<li><Link to="/logout">Logout</Link></li>
							) : (
								<>
									<li><Link to="/login"> Login</Link></li>
									<li><Link to="/create"> Create Account</Link> </li>
								</>
							)}</ul>

					</div>
				</div>
			</nav>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/match" element={<ProtectedRoute><Match /></ProtectedRoute>} />
				<Route path="/create" element={<CreateProfile/>}/>
				<Route path="/login" element={<Login />} />
				<Route path="/logout" element={<Logout />} />
			</Routes>
		</div>
	);
}

