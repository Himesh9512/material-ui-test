import { FC, Fragment } from "react";

import TourCard from "../components/TourCard";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import cities from "../data.json";

const Home: FC = () => {
	return (
		<div className="App">
			<Container
				sx={{
					marginY: 5,
				}}>
				{cities.map((city) => {
					return (
						<Fragment>
							<Typography variant="h4" component="h2" marginTop={5} marginBottom={3}>
								Top {city.name} Tours
							</Typography>
							<Grid container spacing={3}>
								{city.tours.map((tour, index) => (
									<TourCard tour={tour} key={index}></TourCard>
								))}
							</Grid>
						</Fragment>
					);
				})}
			</Container>
		</div>
	);
};

export default Home;
