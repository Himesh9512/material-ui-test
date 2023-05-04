import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";

import { FC } from "react";

import ImageCollage from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordion";
import BasicModal from "../components/Modal";

const Tour: FC = () => {
	return (
		<Container sx={{ width: 900 }}>
			<Typography variant="h3" component="h1" marginTop={3}>
				Explore the world in Vegas
			</Typography>
			<Box marginTop={3} sx={{ display: "flex" }}>
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxcVRcm2f8liEl98gwsKAoRjHGj32t4c-YZg&usqp=CAU"
					alt="vegas"
					height={325}
				/>
				<ImageCollage />
			</Box>
			<Box marginBottom={10}>
				<Typography variant="h6" component="h4" marginTop={3}>
					About this ticket
				</Typography>
				<Typography variant="body2" component="p" marginTop={3}>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet explicabo dolorum,
					necessitatibus autem fuga quod dolores earum, eum beatae itaque at facilis corrupti?
					Velit, ipsum maxime? Velit sunt optio nobis ducimus maiores quis nesciunt placeat nam
					dignissimos ullam est earum quia quibusdam rerum laboriosam ipsam mollitia veritatis quos
					recusandae, itaque harum numquam doloribus. Impedit dolorem nam atque dignissimos odio
					corporis nihil labore. Laboriosam beatae voluptates mollitia quia recusandae esse sit
					reprehenderit tenetur, eaque maxime omnis commodi molestias provident. Doloremque veniam
					corporis autem saepe fugit consequatur, id facere corrupti et eaque at dolor obcaecati
					debitis quo iure laudantium eligendi accusantium provident harum? Dolore rerum, totam
					corrupti provident cumque, consequuntur atque delectus dolor non tenetur mollitia dolorum
					nisi esse facere, adipisci libero soluta nulla! Eos, iste velit?
				</Typography>
				<Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
					Frequently asked questions
				</Typography>
				<CustomizedAccordions />
			</Box>
			<Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
				<BottomNavigation showLabels value={1}>
					<BasicModal />
				</BottomNavigation>
			</Paper>
		</Container>
	);
};

export default Tour;
