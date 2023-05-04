import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers";

export default function FirstComponent() {
	return (
		<LocalizationProvider dateAdapter={AdapterMoment}>
			<DateCalendar />
		</LocalizationProvider>
	);
}
