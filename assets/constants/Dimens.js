import { Dimensions,  } from "react-native";

const ratio = Dimensions.get("window").height / Dimensions.get("window").width;
const isTablet = ratio <= 1.6; 

export default {
	p: isTablet ? 26 : 16,
	h: isTablet ? 30 : 24,
}